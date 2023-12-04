# 1 变量与常量
用var, let, const定义变量，var 和 let 的区别：
1. var是全局变量，let是局部变量
2. var可以重复声明，let不可以重复声明

# 2 原生数据类型
- String
- Number
- Boolean
- null
- undefined

# 3 模板字符串

```js
const username = "john";
const age = 30;
// 拼接
console.log(`my name is ${username} and I am ${age}`);
```
# 4 字符串的内置方法

```js
const s = "Hello world";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(start,end));
console.log(s.split(" "))
```

# 5 数组
两种定义方式：
```js
var arr1 = [1, 2, 3, 4];
var arr2 = new Array(1, 2, 3, 4);
```

```js
const fruits = ["apples", "oranges", "pears"];
// 索引
console.log(fruits[0]);
// 尾部加元素
fruits.push("mangos");
// 头部加元素
fruits.unshift("strawberry");
// 删除末尾元素
fruits.pop();
// 输出索引
console.log(fruits.indexOf("oranges"));
```


# 6 对象
两种定义和初始化方式：
```js
var student = {name: "john", mark: 100};
var student = new Object();
student.name = "john";
student.mark = 100;
```

# 7 对象数组
```js
const studentList = [
	{id: 1, name: "john", mark: 100},
	{id: 2, name: "Peter", mark: 99},
	{id: 3, name: "Alice", mark: 98}
];
```

# 8 条件、循环结构
和 C++ 大致相同

# 9 箭头函数
1. 只有一个参数时可以省略小括号
2. 只有一行代码可以省略大括号
3. 只有一行代码可以省略 return

```js
const f = (res) => {
	console.log(res)
}
//或
const f = res => console.log(res)

const f = (x) => {
	return x^2
}
//或
const f = x => x^2
```

# 9 函数传递
在 javascripts 中，函数是可以作为参数传递的：
```js
function execute(someFunction, value) {
	someFunction(value)
};

execute(data => console.log(data), "hello")
// 输出“hello”
```