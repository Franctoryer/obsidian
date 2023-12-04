# 1 Markov Process
only current value of a variable is relevant for predicting future.
- In Markov processes changes in successive periods of time are independent
- This means that variances are additive
- ==Standard deviations== are not additive
# 2 Weak-Form Market Efficiency
- 弱形式的市场效率遵从马尔可夫进程
- 假设股票价格的变化遵循马尔可夫过程

# 3 Wiener Process
## 3.1 basic wiener Process
$$\Delta z=\varepsilon\sqrt{\Delta t},\quad \varepsilon\sim \Phi(0,1)$$
若时间连续，且 $T=n\Delta t$ ，则：$$z(T)-z(0)\sim N(0,T)$$
## 3.2 generiazed wiener Process
$$\mathrm{d}x=a\mathrm{d}t+b\mathrm{d}z$$
$\mathrm{d}z$ subject to the basic wiener Process. $a$ is the drift rate
1. mean is $a$
2. variances is $b^2$

# 4 Ito Process
$$dx=a(x,t)dt+b(x,t)dz$$
原因：股票的价格变化会基于当前的股票价格和时间来确定
Therefore, Ito Process is appropriate for stock price
$$dS=\mu Sdt+\sigma Sdz$$
where $\mu$ is the expected price and the $\sigma$ the volatility
该过程又被称为几何布朗运动