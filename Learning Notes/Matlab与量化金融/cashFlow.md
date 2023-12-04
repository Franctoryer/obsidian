---
importance: basic
---

# Simple Interest and Compound Interest

- <font color = orange>If the principal'll be updated</font>, it's named after compound interest.
- if not, it's simple interest

some examples:

|compounding|accumulated amount|
|:-:|:-:|
|A bond product with interest rate of 10% p.a. (per annum)|$p(1 + 10\%)^1$|
|A bond product with interest rate of 10% p.a. and semiannual compounding|$p(1+\frac{10}2 \%)^2$|
|quarterly compounding|$p(1+\frac{10}{4}\%)^4$|
# NPV(Net Present Value)
money has time value: <font color = orange>present value and future value</font>. The money in future should devalue compared to its present value.
Therefore, we can valuate projects with multiple cashflows by NPV method.
it can be calculated by: $$NPV=\sum_{k=1}^n \frac{c_i}{(1+i)^k}$$ $c_i$ is the cashflow, $i$ is the interest rate.
MATLAB function: `pvvar(cashFlows, rate)` or `pvfix()` (only when profit is fixed)can solve it quickly.
# IRR(Internal Rate of Return)
## Definition of IRR
IRR is the discount rate that makes the present value of this project exactly zero.
## Example of IRR
Suspect a project requires:
- intial investment of 100 in $t_0$ 
- payoff 35 in $t_1$ , 55 in $t_2$ , 78 in $t_3$
IRR is the rate subject to:$$-100+\frac{35}{1+i}+\frac{55}{(1+i)^2}+\frac{78}{(1+i)^3}=0$$ we can calculate it by MATLAB function: `irr(cashFlow)` 
## Apply of IRR
A given market rate as opportunity cost (e.g., deposit rate) vs IRR
- Suppose these 2 options are exclusive
- If IRR > deposit, invest in the project
- If IRR < deposit, save your money in the bank

# How to choose NPV and IRR?
<font color = orange>NPV is a universal rule that leads to right decision</font>, however, sometimes it’s hard to find the right “discount rate”.So,the IRR can help you make quick judgements(but it some-times can be misleading).

