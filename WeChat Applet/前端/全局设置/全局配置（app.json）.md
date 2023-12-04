常用的配置项如下：
1. pages（记录当前小程序所有页面的存放路径）
2. window（全局设置小程序窗口的外观）
3. tabBar（设置小程序底部的tabBar效果）
4. style（是否启用新版的组件样式）

## 1 pages
存放各个页面的路径

## 2 window
### 2.1 组成部分
1. navigationBar（导航栏区域）
2. background（默认不显示，下拉才显示）
3. 主体区域

### 2.2 常用节点的配置项

|属性名|类型|默认值|
|:-:|:-:|:-:|
|navigationBarTitleText|String|字符串|
|navigationBarBackgroundColor|HexColor|#000000|
|navigationBarTextStyle|String|white|
|backgroundColor|HexColor|\#ffffff|
|backgroundTextStyle（下拉loading的样式）|String|dark|
|enablePullDownRefresh（是否启动下拉刷新）|Boolean|false|
|onReachBottomDistance（页面上拉触底据底部的距离）|Number|50px|
### 2.3 [[页面事件#1 下拉刷新]]
把enablePullDownRefresh设为true
<font color = dark red>下拉刷新不建议放在全局配置里</font>

### 2.4 上拉触底
默认距离为50px，无特殊需求用默认值即可

## 3 [[tabBar]]
