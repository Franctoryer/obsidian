# 1 包
$Node.js$ 中的第三方模块又叫做包。
包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大提高了开发效率。

# 2 npm
初次装包完成后，在项目文件夹下多了一个叫做 node_module 的文件夹和 package-lock.json 的配置文件
- node_modules 文件夹用来存放所有已安装到项目里的包
- package-lock.json 配置文件用来记录 node-modules 目录下每一个包的下载信息，例如包的名字、版本号、下载地址等
<font color = dark red>注：不要手动修改 node_modules 或 package-lock.json 文件中的任何代码</font>
使用npm下载包可以使用如下命令（多个包用空格分开）：
```js
npm install package
npm i package
```
用 @ 可以指定版本号，例如：
```js
npm i moment@2.22.2
```
> 包的版本号是以点分十进制的形式定义的，第一位数字是**大版本**，第二位数字是**功能版本**，第三位数字是**bug修复版本**，只要前面的版本号增长了，则后面的版本号归零


# 3 包管理配置文件
npm 规定，在项目根目录中，必须提供一个叫 package.json 的包管理配置文件。用来提供一些配置信息：
- 项目的名称、版本号、描述等
- 用到了哪些包
- 哪些包只在开发期间用到
- 哪些包在开发和部署的时候用到
## 3.1 快速创建 package.json

用下面的命令：
```js
npm init -y
```
# 3.2 dependencies 节点
此节点专门记录使用 `npm install` 命令安装了哪些包

## 3.3 卸载包
使用 `npm uninstall` 命令：
```js
npm uninstall moment
```

# 3.4 devDependencies 节点
如果某些包只在项目开发阶段会用到，<font color = dark red>在项目上线后不会用到</font>，则建议把这些包放到 `devDependencies` 节点里，可使用如下命令：
```js
npm i 包名 -D
// 完整形式
npm install 包名 --save-dev
npm install --save-dev 包名
```
## 3.5 nrm
nrm 这个工具可以方便切换包的镜像源：
```js
// download nrm and set it as a global variable
npm i nrm -g
// 查看所有镜像源
nrm ls
// 切换镜像源
nrm use taobao
```

# 4 包的分类
## 4.1 项目包
安装到项目的 node_modules 目录中的包是项目包，分为两类：
- 开发依赖包（记录到 devDependencies 节点，只在开发期间使用）
- 核心依赖包（记录到 dependencies 节点，上线后也会使用）

## 4.2 全局包

如果执行 `npm i` 命令时，提供了 `-g` 参数，会被设定为全局包，安装在 `D:\Program Files\nodejs\node_global` 中
- 只有工具性质的包，才有全局安装的必要性
- 可以通过官方文档进行判断
## 4.3 i5ting_toc
i5ting_toc 是一个将 .md 文件转化为 html 文件的小工具
```js
// 下载
npm i itting_toc -g
// 使用
i5ting_toc -f 文件名路径 -o
```

# 5 规范的包结构
- 包必须以单独的目录而存在
- 包的顶级目录下要必须包含 package.json 这个包管理配置文件
- package.json 中必须包含 name,version,main 这三个属性，分别代表包的名字、版本号、包的入口