---
importance: important
Matlab: true
---
## 1 为什么要偏最小二乘分析
1. 各自变量的相关性过大，直接线性回归导致结果不准确
2. 观测数据和预测数据要有相关性（[[主成分分析（PCA）]]导致自变量和因变量之间没有相关性）

## 2 迭代预测
一些数据：

|数据|意义|
|:-:|:-:|
|$X\quad (N,D)$|观测数据|
|$Y\quad(N,1)$|预测数据|
|$g$|从 $X$ 中提取 $g$ 个成分|
|$W\quad(D,g)$|对 $X$ 进行加权的权重 |
|$T\quad(N,g)$|对 $X$ 加权后的数值 |
|$C\quad(1,g)$|$T$ 对 $Y$ 的回归系数|
|$P\quad(D,g)$|$T$ 对 $X$ 的回归系数|

运算步骤：

$$\begin{array}{l l}X^{(0)}=X & Y^{(0)}=Y \\[1mm] \text{for}\ j\ \text{in} \ g:\\[2mm] W_j=\frac{\left(X^{(j)}\right)^T Y}{\left|\left|\left(X^{(j)}\right)^T Y\right|\right|_2}\\T_j=X^{(j)}W_j\\C_j=\frac{T^T_jY^{(j)}}{\left|\left|T_j\right|\right|_2}\quad\Rightarrow & C_j\text{过小退出}\\P_j=\frac{X^T_jT_j}{\left|\left|T_j\right|\right|_2}\\X^{(j+1)}=X^{(j)}-T_jP^T_j\\Y^{(j+1)}=Y^{(j)}-T_jC_j \end{array}
$$ 
先提取自变量组和因变量组的第一对主成分 $t_1$ 和 $u_1$，且要满足：
1. $t_1$ 和 $u_1$ 各自尽可能多地提取所在自变量组的变异信息
2. $t_1$ 和 $u_1$ 的相关程度达到最大（内积最大）

即满足（$\hat{t_1}$ 和 $\hat{u_1}$ 是得分向量）：$$\left\{\begin{array}{l}\max(\hat{t_1},\hat{u_1})=(A_0w_1,B_0v_1)=w_1^TA_0^TB_0v_1,\\\text{s.t.}\quad w_1^Tw=1,v_1^Tv_1=1\end{array}\right.$$
建立原自变量和因变量对 $t_1$ 的回归方差：$$\left\{\begin{array}{l}A_0=\hat{t_1}\alpha_1^T+A_1,\\B_0=\hat{t_1}\beta_1^t+B_1.\end{array}\right.$$
将 $A_1$ 和 $B_1$ 代替 $A_0$ 和 $B_0$ ，重复以上步骤，直到残差阵接近零矩阵

## 3 MATLAB实现
```matlab
clc,clear,format long g
ab0=load('you.txt');
mu=mean(ab0);sig=std(ab0);%求均值和标准差
ab=zscore(ab0);%数据标准化
a=ab(:,1:7);b=ab(:,8:end);
ncomp=2;
[xl,yl,xs,ys,beta,pctvar,mse,stats]=plsregress(a,b,ncomp);
contr=cumsum(pctvar,2);
n=size(a,2);m=size(b,2);%n是自变量个数，m是因变量个数
beta2(1,:)=mu(n+1:end)+mu(1:n)./sig(1:n)*beta(2:end,:).*sig(n+1:end);%原始数据回归方程的常数项
beta2(2:n+1,:)=(1./sig(1:n))'*sig(n+1:end).*beta(2:end,:)%计算原始变量x1，...，xn的系数，每一列是一个回归方程

```