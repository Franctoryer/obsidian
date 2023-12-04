通过 `app.get()` 监听客户端的 GET 请求；通过 `app.post()` 监听客户端的 POST 请求，具体格式如下：
```js
const express = require('express')
const app = express()
app.get('URL', (req, res) => {})
app.post('URL', (req, res) => {})
```

通过 `res.send()` 方法，可以把处理好的内容发给客户端