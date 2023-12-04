# 1 客户端和服务器
- 负责消费资源的电脑，叫做客户端
- 负责对外提供网络资源的电脑，叫做服务器

若要使用 http 模块创建 Web 服务器，则需要导入它：

```js
const http = require('http')
```

# 2 服务器相关的概念

## 2.1 IP 地址
IP 地址的格式通常采用“点分十进制“表示成（<font color = dark red>a.b.c.d</font>），每个数都是0-255的整数
- 互联网每台服务器都有自己的 IP 地址，windows 终端可以使用 ping 命令查看服务器的 IP地址
- 在开发期间，自己的电脑既属于客户端，又属于服务器，为了方便，在自己的浏览器输入 127.0.0.1 这个 IP 地址，就可以把自己电脑当作服务器来访问了

## 2.2 域名和域名服务器
1. 域名与 IP 一一对应（在开发期间，127.0.0.1对应的域名是 localhost），方便记忆
2. 域名服务器是提供 IP 地址和域名之间转换的服务器

## 2.3 端口号
一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个端口号
- 每个端口号不能同时被多个 web 服务占用
- 在实际运用中，URL 中的 80 端口可以被省略

# 3 创建最基本的 web 服务器


```js
// 1. 导入 http 模块
const http = require('http')
// 2. 创建 web 服务器实例
server = http.createServer()
// 3. 为服务器绑定 request 事件，监听客户端的请求
server.on('request', (req, res) => {
    console.log("Someone visits our web server")
})
// 4. 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})
```

## 3.1 请求对象 req
只要服务器接收到了客户端的请求，就会调用通过 serve.on() 为服务器绑定的 request 事件处理函数（在JavaScript中可以进行[[javaScript语言#9 函数传递]]），如果想要访问客户端相关的属性和或数据：
```js
const http = require('http')
const server = http.createServer()
server.on('request', (req) => {
    const url = req.url
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
})
// 4. 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})
```

## 3.2 res 响应对象
在服务器的 request 事件处理函数中，如果想访问与服务器相关的数据或属性，可以采用如下方式：
```js
server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
    // 防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 响应客户端
    res.end(str)
})
```