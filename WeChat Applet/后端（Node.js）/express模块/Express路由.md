# 1 路由
路由即映射关系
> 官方定义：路由确定了应用程序如何响应客户端对特定端点的请求


# 2 Express 中的路由
在 Express 中，路由指的是客户端的请求与服务端处理函数之间的映射关系。
Express 中的路由分为三个部分，分别是<font color = dark red>请求的类型、请求的 URL 地址、处理函数</font>：

```js
app.METHOD(PATH, HANDLER)
```

例如：
```js
app.get('/public/data.json', (req, res) => {
	res.send('请求成功')
})
```

# 3 路由的匹配过程
1. 按照定义的先后顺序进行匹配
2. 请求类型和URL同时匹配成功才会调用相应的处理函数