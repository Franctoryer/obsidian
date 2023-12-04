---
importance: medium
matlab: true
---

## 1 基本概念
1. 要得到簇的个数，需要指定 $K$ 值
2. 质心：均值，即向量各维取平均
3. 距离的度量：常用欧氏距离和余弦相似度（先标准化）
4. 优化目标：$\mathrm{min}\sum\limits_{i=1}^{K}\sum\limits_{x\in C_i}dist(c_i,x)^2$ （<font color = dark red>到质心的距离越小越好</font>）
## 2 优缺点
1. 优势：
	- 简单、快速、适合常规数据集
2. 劣势：
	- $K$ 值难确定
	- 复杂度与样本呈线性观星
	- 很难发现任意形状（圆环状）的簇
	- 初值不一样结果差异大

## 3 算法流程
1. 选择 $K$ 个初始质心，初始质心随机选择即可，每一个质心为一个类
2. 把每个观测值分配到离它最近的质心，与质心形成新的类
3. 重新计算每个类的质心，所谓质心就是求一个类中的所有[[距离]]的平均值。
4. 反复重复以上两个步骤直到质心不再发生变化，完成聚类分析

## 4 用MATLAB实现
```matlab
clc,clear,close all;

load carsmall;
X = [Displacement, Horsepower];
[idx, C] = kmeans(X, 3);

gscatter(X(:, 1), X(:, 2), idx)
```

运行结果如下：

![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/Kmeans.png)


## 5 轮廓系数指标评估

用 `silhouette()` 函数计算轮廓系数
```matlab
clc,clear,close all,format longG;

load carsmall;
X = [Displacement, Horsepower];
[idx, C] = kmeans(X, 3);
gscatter(X(:, 1), X(:, 2), idx)
t = mean(silhouette(X, idx), 'omitnan');

ax = gca();
exportgraphics(ax, 'Kmeans.png', 'Resolution',600);
```