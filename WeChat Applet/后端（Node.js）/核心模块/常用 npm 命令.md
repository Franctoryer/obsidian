1. `npm install <package>` 或 `npm i <package>`
	- `-S` 或 `--save` 表示添加条目到 package.json 的 dependencies 节点下
	- `-D` 或 `--save-dev` 表示添加条目到 package.json 的 devDependencies 节点下
	- `-g` 表示安装到全局环境中
	- `@<version>` 指定版本号
	- `npm install` 安装 dependencies 节点下的所有依赖
	- `--no-save` 不添加条目到 dependencies 节点下
2. `npm update <package>` 更新包
	- `npm update` 更新所有包
3. `npm view <package>` 查看包的具体信息
	- `-v` 表示版本号
4. `npm help <command>` 查看命令的帮助文档
5. `npm uninstall <package>` 卸载包