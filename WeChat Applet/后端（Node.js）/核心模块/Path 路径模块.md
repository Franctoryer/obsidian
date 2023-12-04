若要使用 path 模块来处理路径，则需要使用如下方式导入它：

```js
const path = require('path')
```

# 1 path.join() 语法格式

path.join() 方法可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

```js
path.join()
```

- `../` 会和上一层的路径抵消
- 凡是涉及路径拼接的操作，最好用 `path.join()` 方法，不要直接用 `+` 号

# 2 path.basename() 语法格式

path.basename() 方法可以获取路径中的最后一部分，经常通过这个方法来获取路径中的文件名，语法格式如下：

```js
path.basename(path[, ext])
```

- path \<string\> 必选参数，表示一个路径的字符串
- ext \<string\> 可选参数，表示文件扩展名（作用：不显示扩展名）
- 返回：\<string\> 表示路径中的最后一部分

# 3 path.extname() 语法格式

path.extname() 方法可以获取路径中的扩展名部分，语法格式如下：

```js
path.extname(path)
```
