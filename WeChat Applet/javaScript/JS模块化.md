# 1 commonJS
## 1.1 说明
1. 每个文件可以当作一个模块
2. 在服务端：模块的加载是运行时同步加载的
3. 在浏览器端：模块需要提前编译打包处理

## 1.2 基础语法
### 1.2.1 暴露模块
1. `module.exports = value`
2. `exports.xxx = value`

<font color = dark red>注：暴露的是一个对象</font>
### 1.2.2 引入模块
1. `require()`

# 2 AMD
专门用于浏览器端，异步加载
# 3 CMD

# 4 ES6
1. 导出模块：`export`
2. 引入模块：`import`


