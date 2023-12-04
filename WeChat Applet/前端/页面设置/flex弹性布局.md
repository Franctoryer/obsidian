# 1 flex容器布局属性

|属性|含义|合法值|
|:-:|:-:|:-:|
|flex-direction|主轴的方向|row,column,row-reverse,colomn-reverse|
|flex-wrap|如何换行|wrap,nowrap,wrap-reverse|
|justify-content|在主轴上的对齐方式|flex-start,flex-end,center,space-between,space-around,space-evenly|
|align-items|在交叉轴上的对齐方式|flex-start,flex-end,center,baseline,stretch|
|align-content|在交叉轴上有很多轴线时的对称方式|flex-start,flex-end,center,space-between,space-around,space-evenly| 

# 2 flex 项目布局属性

|属性|说明|
|:-:|:-:|
|order|项目的排列顺序。值越小，排在越前面，默认为0|
|flex-grow|各项目宽度之和小于容器宽度时，各项目的放大比例，默认为0|
|flex-shrink|各项目宽度之和大于容器宽度之和时，各项目的缩小比例，默认为1|
|flex-basis|元素宽度的属性|
|flex|前三个，默认为 0,1,auto|
|align-self|允许某个项目有自己的对齐方式|
