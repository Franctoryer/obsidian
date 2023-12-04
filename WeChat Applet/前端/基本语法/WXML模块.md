## 1 Mustache 语法
在.js 文件的data中定义变量，再用{{变量名}}表示该变量对应的值
它的用法有：
1. 绑定内容
2. 绑定属性
3. 运算

## 2 事件绑定

|类型|绑定方式|事件描述|
|:-:|:-:|:-:|
|tap|bindtap|手指触摸后马上离开|
|input|bindinput|文本框的输入事件|
|change|bindchange|状态改变时触发|

## 3 事件传参
用data-* 进行传参：
```html
<button bindtap="btntap" data-info={{2}}>这是一个按钮</button>
```

```javascript
btntap(e:any){
	this.setData({
		count: this.data.count + e.target.dataset.info
	})
}
```

## 4 输入功能
```html
<input bindinput="input"></input>
```

```javascript
input(e:any){
    console.log(e.detail.value)
  }
```

## 5 [[条件渲染]]

## 6 [[列表渲染]]
