---
dg-publish: true
importance: medium
Matlab: False
Python: True
---
# 1 基本操作
## 1.1 定义变量

```python
# 有Symbol和symbols两个函数
from sympy import *
x = Symbol('x')
x,y,z = symbols('x y z')
```
## 1.2 赋值操作

```python
#subs函数
from sympy import *
x,y,z = symbols('x y z')
expr1 = x**2
expr2 = x**2 + y**2 + z**2
expr1.subs(x, 1)
expr2.subs([(x, 1), (y, 2), (z, 3)])
#输出为1和14
```

## 1.3 简化操作

```python
from sympy import *
x = Symbol('x')
#simplify()函数
expr = sin(x)**2 + cos(x)**2
simplify(expr) #

#factor()函数
expr = x**2 + 2*x + 1
factor(expr) #输出为(x+1)^2

#expand()函数
expr = (x+1)**2
expand(expr) #输出为x^2 + 2x + 1

#lambdify()函数
f = lambdify([x, y], x + y)
```

# 2 求极限

```python
from sympy inport *
x = Symbol('x')
#limit()函数
limit(x/sin(x), x, 0) #输出为1
limit(1/x, x, 0, '+') #输出为+inf
#Limit()函数和doit()函数
expr = Limit(x/sin(x), x, 0)
expr.doit() #输出为1
```

# 3 微积分

```python
from sympy import *
x = Symbol('x')
#求微分
diff(x**3, x, x) #输出为6x
diff(x**3, x, 2) #输出为6x
diff(exp(x*y), x, y) #先对x求偏导，再对y求偏导

#求积分
integrate(x**2, x) #求不定积分
integrate(x**2, (x, 0, oo)) #求定积分

#解微分方程（解析解）
y = Function('y')
dsolve(y(x).diff(x,2) - y(x) + x**2, ics = {y(x).subs(x,0):1, y(1):2})
```

# 4 求泰勒级数

```python
from sympy import *
x = Symbol('x')
expr = exp(x)
expr.series(x,0,5) #求展开到5次的泰勒展开
```