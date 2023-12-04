# 是什么

cookie 是 HTTP 服务器发送到用户浏览器并保存在本地的一小块数据
<font color = dark red>注：cookie 是按域名划分的</font>
# 特点

浏览器向服务器发送请求时，会自动将当前域名下可用的 cookie 设置在请求头中，然后传递给服务器

# express框架下cookie的设置删除和获取

```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
port = 80;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'zhulitao', {maxAge: 3000}); // 3秒后cookie自动销毁
    res.send('<h1>这里是主页</h1>');
});

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name');
    res.send('删除成功');
});

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send('获取成功');
});
app.listen(port, () => {
    console.log('listening on port ' + port);
});
```