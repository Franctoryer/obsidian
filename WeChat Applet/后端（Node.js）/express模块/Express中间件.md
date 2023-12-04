# 1 中间件的格式
中间件，本质上就是一个处理函数，格式如下：
```js
const express = require('express');
const app = express;

app.get('/', (req, res, next) => next()).listen(80);
```

# 2 next 函数的作用
next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给一个中间件或路由

# 3 定义最简单的中间件函数

```js
const mw = (req, res, next) => {
	console.log('这是一个最简单的中间件函数');
	next();
};
```

# 4 全局生效的中间件函数
通过调用 `app.use()` 函数，即可定义一个<font color = dark red>全局生效</font>的中间件函数。
```js
app.use(mw)
```

或者简写成：
```js
app.use((req, res, next) => {
	console.log('这是全局中间件简化形式');
	next();
})
```

# 5 中间件的作用
多个中间件之间，<font color = dark red>共享同一份 req 和 res</font>。基于这样的特性，我们可以在上游的中间件中，统一为 req 和 res 对象添加自定义属性或方法，供下游的中间件或路由进行使用

# 6 定义多个全局生效的中间件函数
```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log('这是第一个中间件函数');
	next();
});

app.use((req, res, next) => {
	console.log('这是第二个中间件函数');
	next();
});

app.get('/', (req, res) => {
	console.log('这是一个路由')
}).listen(80);


```

# 7 局部生效的中间件
不使用 `app.use` 定义的中间件：
```js
const mw1 = (req, res, next) => {
	console.log('这是中间件函数');
	next();
};

app.get('/', mw1, (req, res) => {
	app.send("向客户端发送信息");
});
//不会影响下面那个路由
app.get('/public', (req, res) => {
	console.log('向客户端发送信息');
});
```

# 8 定义多个局部中间件

```js
app.get('/', mw1, mw2, (req, res) => {res.send('Homepage')});
app.get('/', [mw1, mw2], (req, res) => {res.send('Homepage')});
```

# 9 中间件的注意事项

1. 一定要在路由之前注册中间件
2. 客户端发来的请求，可以连续调用多个中间件处理
3. 执行完中间件的业务代码后，不要忘记调用 `next()` 函数
4. 为了防止代码逻辑混乱，调用 `next()` 以后不要再额外写代码
5. 连续调用多个中间件时，共享 res 和 req 对象

