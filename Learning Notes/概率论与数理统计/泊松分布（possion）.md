# 1 概率分布
设随机变量 $X$ 的取值范围为非负整数，概率分布为：$$p_k=P(X=k)=\frac{\lambda^k}{k!}\mathrm{e}^{-\lambda},\quad \lambda>0$$
记作为：$$X\sim P(\lambda)$$
图像如下：
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/8af3b9894d3451693c3b5680297b840.png)
<font color = dark red>分子是幂函数，分母是阶乘，最后肯定递减，前面可能递增</font>

# 2 普阿松逼近定理
若 $n$ 充分大，$p$ 充分小，$np$ 大小适中。则有：$$C_n^kp^k(1-p)^{n-k}\approx \frac{\lambda^k}{k!}\mathrm{e}^{-\lambda},\quad k=0,1,\cdots,n$$
其中，$\lambda=np$
