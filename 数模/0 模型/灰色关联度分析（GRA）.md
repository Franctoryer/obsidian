## 1 对关联度的衡量
关联度分析属于几何处理范畴。基本思想是根据序列曲线集合形状的相似程度来判断联系是否紧密。即几何形状越接近，关联程度越大

## 2 建模步骤
### 2.1 数据准备
做关联度分析首先要制定参考数据列 $x_0$ ，即：$$x_0=\{x_0(1),x_0(2),\cdots,x_0(n)\}$$ 
关联分析中被比较数列常记为 $x_i$ ，即：$$x_i=\{x_i(1),x_i(2),\cdots,x_i(n)\},\quad i=1,2,\cdots,m$$
$$X=\begin{bmatrix}x_1(1) & x_1(2)&\cdots &x_1(n)\\x_2(1) & x_2(2)&\cdots &x_2(n)\\ \vdots & \vdots &\ddots &\vdots\\x_m(1) & x_m(2)&\cdots &x_m(n)\end{bmatrix}$$
### 2.2 数据标准化

### 2.3 计算灰色关联度系数
公式如下：
$$
\zeta_i(k)=\frac{\min _i \min _k\left|x_0(k)-x_i(k)\right|+\rho \cdot \max _i \max _k\left|x_0(k)-x_i(k)\right|}{\left|x_0(k)-x_i(k)\right|+\rho \cdot \max _i \max _k\left|x_0(k)-x_i(k)\right|}
$$
### 2.4 计算关联度的加权平均

