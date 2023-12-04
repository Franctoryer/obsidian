# 1 能做什么
- Web 网站服务器
- API 接口服务器

# 2 基本使用

```js
const express = require('express')
//express()是无参构造函数
const app = express()
app.listen(80,() => {
	console.log('express server running at http://127.0.0.1:80')
})
```
