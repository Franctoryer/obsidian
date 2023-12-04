# 1 微分方程数值解
## 1.1 solve_ivp()函数
solve_ivp()函数的API如下：
```python
def solve_ivp(fun, t_span, y0, method='RK45', t_eval=None, dense_output=False,
              events=None, vectorized=False, args=None, **options):
              ......
```

例：求解 $y'(x)=y+x^2,\quad y(0)=1$ 
```python
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

dy = lambda x,y: y + x**2
sol = solve_ivp(dy, [0, 30], [1])

plt.plot(sol.t, sol.y[0], 'o')
```
## 1.2 odeint()函数
odeint()是老版的求解微分方程数值解的函数，其API如下：
```python
def odeint(func, y0, t, args=(), Dfun=None, col_deriv=0, full_output=0,
           ml=None, mu=None, rtol=None, atol=None, tcrit=None, h0=0.0,
           hmax=0.0, hmin=0.0, ixpr=0, mxstep=0, mxhnil=0, mxordn=12,
           mxords=5, printmessg=0, tfirst=False):
           ......
```

例：求解 $y'(x)=y+x^2,\quad y(0)=1$ 
```python
from scipy.integrate import solve_ivp, odeint
import matplotlib.pyplot as plt

dy = lambda y,x: y + x**2
xx = np.linspace(0,30)
s = odeint(dy, 1, xx)

plt.plot(xx, s, 'o')
```

==注意solve_ivp()需要函数的参数是先自变量再因变量；而odeint()需要的函数的参数是先因变量再自变量==