# 1 用兼容http的方式
```js
res.statusCode = 404;
res.statusMessage = 'xxx';
res.setHeader('abc', 'xyz');
res.write('响应体')
res.end('xxx')
```

# 2 express的响应方法
```js
res.status(500);
res.set('xxx', 'yyy');
res.send('响应体')
```

连贯操作：`res.status(404).set('xxx', 'yyy').send('hello')` <font color = dark red>【链式调用】</font>

# 3 其他响应方法
```js
// 重定向
res.redirect('<网址>');
//下载响应
res.download(__dirname + '/package.json');
//JSON响应
res.json({
	name: '朱力涛',
	stuNum: 2022111901
});
//响应文件
res.sendFile(__dirname + '/test.html');
```


