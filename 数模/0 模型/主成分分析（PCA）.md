---
importance: important
Python: True
---
**主成分分析**是将原来众多具有相关性的指标化为<font color = dark red>少数几个相互独立的综合指标</font>的一种统计方法。

## 1 基本理论
一般来说，利用主成分分析得到的主成分与原始变量之间有如下的基本关系：
1. 每一个主成分都是原始变量的<font color = dark red>线性组合</font>
2. 主成分的数目要大大少于原始数据的数目
3. 主成分保留了原始变量的绝大多数信息
4. 各主成分之间<font color = dark red>互不相关</font>

设有一个 $p$ 维指标 $X=(X_1,X_2,\ldots,X_p)^T$  ，设 $X$ 的均值向量为 $\mu$，[[协方差矩阵]]为 $\boldsymbol{\Sigma}$ . 下面对向量 $X$ 进行线性变换，变换矩阵为 $U_{m\times p}$ ，即 $Y=UX$ . 且要满足以下原则：
1. $||U_i||=1,\quad i=1,2,\ldots,m$
2. 在满足原则1的条件下，找到 $Y_1$, 使得 $Var(Y_1)=U_1\boldsymbol{\Sigma}U_1^T$ 最大
3. 找 $Y_2$ ，使得$Cov(Y_1,~Y_2)=U_1\boldsymbol{\Sigma}U_2^T=0$  （即 $Y_1$ 和 $Y_2$ 相垂直）且 $Var(Y_2)$ 最大，以此类推，直到找到 $Y_m$ 

## 2 求解步骤

### 2.1 基于特征值分解[[协方差矩阵]]实现PCA算法
首先，对数据作去中心化处理（每一位特征减去各自的平均值）和指标标准化：$$y_j=\frac{x_j-\mu_j}{s_j},\quad \mu_j=\frac{1}{n}\sum_{i=1}^na_{ij}~;~s_j=\sqrt{\frac{1}{n-1}\sum_{i=1}^n(a_{ij}-\mu_j)^2}$$ 
并求出协方差矩阵 $\frac{1}{n-1}AA^T$ .
> 推导过程：设有一个矩阵 $X$ （有 $a$ 和 $b$ 两个字段）和去中心化后的矩阵 $A$：$$X=\begin{pmatrix}a_1 & a_2 & \cdots & a_m\\ b_1 & b_2 & \cdots & b_m\end{pmatrix},\quad A=\begin{pmatrix}a_1-\mu_1&a_2-\mu_1 & \cdots &a_m-\mu_1\\ b_1-\mu_2 & b_2-\mu_2 & \cdots & b_m-\mu_2\end{pmatrix}$$ 
> 用矩阵 $A$ 点乘 $A$ 的转置，再乘以系数 $\frac{1}{m-1}$ ，可以得到 $$\frac{1}{m-1}AA^T=\begin{pmatrix}\frac{1}{m-1}\sum_{i=1}^{m}(a_i-\mu_1)^2 & \frac{1}{m-1}\sum_{i=1}^{m}(a_i-\mu_1)(b_i-\mu_2)\\ \frac{1}{m-1}\sum_{i=1}^{m}(a_i-\mu_1)(b_i-\mu_2)& \frac{1}{m-1}\sum_{i=1}^{m}(b_i-\mu_2)^2\end{pmatrix} $$ 
> 显然等式右边是协方差矩阵

然后，用特征值分解法求出协方差矩阵 $\boldsymbol{\Sigma}$ 的特征值和特征向量.
> 推导过程：已知目标函数为 $J=\vec{v}~\boldsymbol{\Sigma}~\vec{v}^T$  ，条件是 $\vec{v}~\vec{v}^T=1$ ，采用拉格朗日余子法，设：$$F(\vec{v})=\vec{v}~\boldsymbol{\Sigma}~\vec{v}^T+\lambda(1-\vec{v}~\vec{v}^T)$$ 
> 进行以下推导：$$\begin{array}{l}\dfrac{\partial F(\vec{v})}{\partial \vec{v}}=0\\2\boldsymbol{\Sigma}~v^T-2\lambda v^T=0\\\boldsymbol{\Sigma}~v^T=\lambda v^T\end{array}$$ 
> 可以看出，其中 $\lambda$ 是协方差矩阵的特征值，而 $v^T$ 是协方差矩阵的特征向量（即目标函数的最优解）

最后，对特征值从大到小排序，选择最大的 $k$ 个，将其 $k$ 个特征向量作为行向量组成特征向量矩阵 $P$ . 将数据转换到 $k$ 给特征向量构成的新空间中，即 $Y=PX$ .
> 推导过程：对于每一组新空间的向量，均满足：$$Y_i=v_i\cdot X$$  

计算主成分贡献率及累积贡献率，主成分 $Y_j$ 的贡献率为：$$w_j=\frac{\lambda_j}{\sum_{k=1}^{m}\lambda_k},\quad j=1,2,\cdots,m$$ 
前 $i$ 个主成分的累积贡献率为：$$s_i=\frac{\sum_{k=1}^{i}\lambda_k}{\sum_{k=1}^m\lambda_k}$$ 
### 2.2 基于SVD分解[[协方差矩阵]]实现PCA算法

## 3 例题
随着社会的高速发展，人民的生活发生巨大的变化，居民的消费水平备受关注，它是反映一个国家(或地区)的经济发展水平和人民物质文化生活水平的综合指标。重庆市直辖以来,居民的消费水平发生了很大的变化，从而也促进了整个城市经济的发展。按照我国常用的消费支出分类法，居民的消费水平分为食品、衣着、家庭设备用品及服务、医疗保健、交通通信、文教娱乐及服务居住、杂项商品与服务8个部分，这8个部分代表了居民消费的各个领域，下表所列为重庆市10年间城镇居民人均消费的情况(单位:元/人)。试对重庆市的居民人均消费做主成分分析。

|年份|$x_1$|$x_2$|$x_3$|$x_4$|$x_5$|$x_6$|$x_7$|$x_8$|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|1997|2297.86|589.62|464.74|164.19|290.91|626.21|295.20|199.03|
|1998|2262.19|571.69|461.25|185.90|337.83|604.78|354.66|198.96|
|1999|2303.29|589.99|516.21|236.55|403.92|730.05|438.41|225.80|
|2000|2308.70|551.14|476.45|293.23|406.44|785.74|494.05|254.10|
|2001|2337.65|589.28|509.82|334.05|442.50|850.15|563.72|246.51|
|2002|2418.96|618.60|454.20|429.60|615.00|1065.12|594.48|164.28|
|2003|2702.34|735.01|475.36|459.69|790.26|1025.99|741.60|187.81|
|2004|3015.32|779.68|474.15|537.95|865.45|1200.52|903.22|196.77|
|2005|3135.65|849.53|583.50|629.32|929.92|1391.11|882.41|221.85|
|2006|3415.92|1038.98|615.74|705.72|976.02|1449.49|954.56|242.26|

用MATLAB解决该问题，代码如下：
```matlab
clc,clear,close all
load("data.mat")
A = zscore(pca);  %数据标准化
r=A'*A;     %求协方差矩阵
[vec1,lamda,rate] = pcacov(r);  %pca算法
f = repmat(sign(sum(vec1)),size(vec1,1),1);   %处理特征向量的正负问题
vec2 = vec1.*f;
```

主成分分析结果如下：

|序号|特征值|贡献率(%)|累计贡献率(%)|
|:-:|:-:|:-:|:-:|
|1|64.981385384840760|90.251924145612140|90.251924145612140|
|2|5.042623847337935|7.003644232413795|97.255568378025930|
|3|1.347851886678199|1.872016509275276|99.127584887301200|
|4|0.331316910055698|0.460162375077359|99.587747262378560|
|5|0.151857227962365|0.210912816614395|99.798660078992950|
|6|0.131008139081043|0.181955748723671|99.980615827716620|
|7|0.013762002892844|0.019113892906727|99.999729720623350|
|8|1.946011511625846e-04|2.702793766147008e-04|99.999999999999960|

前两个主成分的累积贡献率达到 $97.26\%$ ，主成分分析效果良好。
得到前两个主成分分别为：$$\left\{\begin{array}{l}F_1=0.3625y_1+0.3632y_2+0.3548y_3+0.2801y_4+0.3685y_5+0.3630y_6+0.3659y_7+0.3617y_8\\[1mm]F_2=-0.2186y_1+0.0821y_2+0.2300y_3+0.8576y_4-0.1275y_5-0.2501y_6-0.1165y_7-0.2543y_8\end{array}\right.$$ 