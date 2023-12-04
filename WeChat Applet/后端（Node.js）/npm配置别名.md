配置 package.json 中的 `scripts` 属性

```json
{
	"scripts": {
		"start": "node server.js",
		"server": "nodemon server.js"
	}
}
```

配置完以后，可以用以下别名执行命令
```json
npm run server;
npm start
```

==`start` 别名比较特殊，使用时可以省略 `run`==
