# 1 读取和写入函数
要使用 $fs$ 模块，要用如下方式导入：

```js
const fs = require('fs')
```

- fs.readFile(文件名，编码格式\[默认为'utf8'\]，回调函数(err,dataStr))方法，用来<font color = dark red>读取</font>指定文件中的内容
- fs.writeFile(文件名，写入内容，编码格式，回调函数(err))方法，用来向指定文件<font color = dark red>写入</font>内容

# 2 路径动态拼接问题

在使用 fs 模块操作文件时，如果提供的操作路径是以 ./ 或 ../ 开头的相对路径，很容易出现动态拼接错误的问题。
<font color = dark red>原因：代码在运行的时候，会以执行 node 命令所处的目录，动态拼接出操作文件的完整路径</font>
解决方案：提供完整路径，但是会导致==移植性差，不利于维护==（最好用 `__dirname` 进行拼接）



