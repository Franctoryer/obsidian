---
importance: medium
matlab: true
---
两种聚类方法：
- Q型聚类法：对样本聚类
- R型聚类法：对指标聚类

```matlab
clc,clear,close all;

load carsmall;   %加载车辆样本
X = [Acceleration, Cylinders, Displacement, Horsepower, Weight, MPG];
Y = normalize(X);   %数据规格化
name = ["Acceleration", "Cylinders", "Displacement", "Horsepower", "Weight", "MPG"];
dist = pdist(Y','euclidean');   %采用欧氏距离
z = linkage(dist,'average');   %采用平均数法生成树
dendrogram(z,100, "Labels",name);    %画出谱系图

ax = gca();
exportgraphics(ax,'Cluster.png', 'Resolution',600)
```

画出的图像如下：

![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/Cluster2.png)