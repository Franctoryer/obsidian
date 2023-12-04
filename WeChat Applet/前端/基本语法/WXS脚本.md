# 1 WXS 的应用场景
wxml 中无法调用在页面 .js 中定义的函数，但是，wxml 中调用 wxs 中定义的函数。因此，小程序中 wxs 的典型应用场景就是==”过滤器“==
# 2 WXS 和 JavaScript 的关系
1. wxs 有自己的数据类型
2. wxs 不支持类似于 ES6 及以上的语法形式
3. wxs 遵循 CommonJS 规范

# 3 内嵌 wxs 脚本
必须提供 module 属性
```html
<view>{{m1.toUpper(username)}}</view>
<wxs module="m1">
	module.exports.toUpper = function(str){
		return str.toUpperCase()
	}
</wxs>
```

# 4 外联的 wxs 脚本
```js
function toLower(str){
	return str.toLowerCase()
}

module.export = {
	toLower: toLower
}
```

可以在wxml中使用wxs中定义的函数：
```html
<view>{{m2.toLower(username)}}</view>
<wxs src="" module="m2"></wxs>
```

# 5 wxs 的特点

1. 不能作为组件的事件回调
2. 隔离性（wxs 不能调用 js 中定义的函数，wxs 不能调用小程序提供的 API）
3. 性能好（在 IOS 设备的运行效率要快很多）