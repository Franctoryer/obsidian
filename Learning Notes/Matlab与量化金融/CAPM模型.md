---
importance: important
---

# 1 Markowitz efficient frontier
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/2023-11-5-1.jpg)

曲线的上半段是有效边界

# 2 Efficient frontier with risk-free asset
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/2023-11-5-2.png)

- 引入一个无风险资产 $R_f$ ，将改无风险资产与原有的投资组合进行组合
- 当 预期收益 $E = R_f$ ，则所有的投资资产都是无风险资产
- 当 $R_f < E < E(R_M)$ ，一部分资产是无风险资产，一部分资产是原有的投资组合。两者的权重加起来为1
- 当 $E>E(R_M)$ ，则无风险资产的权重为负，即用一些千买无风险资产赚来的钱用来购买原有的投资组合
- 原有的投资组合和无风险资产的按照不同的权重投资组合所取得的预期收益为一条射线，叫做资产配置线（Capital Market Line）
- ==过点 $(0,R_f)$ 做有效边界曲线的切线为最优的资产配置线，因为在该直线上，单位风险所获得的补偿最大==

可以得到以下公式：
$$E(R_p)=R_f+\left(\frac{E(R_m)-R_f}{\sigma_m}\right)\times \sigma_p$$
用中文可以表示为：
$$预期收益=无风险资产收益+单位风险补偿\times 风险数$$



# 3 Capital Asset Pricing Model(资本资产定价模型)
CAPM 模型如下：$$E(R_i)=R_f+\beta_i\left[E(R_m)-R_f\right]$$

其中：$$\beta_i=\frac{Cov(R_i,R_m)}{\sigma_m^2}=\frac{\rho_{i,m}\cdot \sigma_i}{\sigma_m}$$
$\beta_i$ 是夏普比率，用来表示单位风险所获得的超额收益