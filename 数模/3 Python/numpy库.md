---
Python: True
picture: True
---

# 1 [[最小二乘法]]下的多项式拟合
## 1.1 polyfit()函数

```python
import numpy as np
from random import *
import matplotlib.pyplot as plt

x = np.linspace(0, 20,10)
y = [2, 4, 5.6, 7.8, 8.4, 9.1, 10.2, 11.3, 12.4, 14.1]
p = np.polyfit(x, y, 1)
x_fit = np.linspace(0, 20)
y_fit = np.polyval(p, x_fit)

plt.plot(x, y, 'o')
plt.plot(x_fit, y_fit, 'r-')
plt.show()
```

![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example7.png)


## 1.2 用[[最小二乘法]]算法
```python
import numpy as np

x = np.linspace(0, 20,10)
y = [2, 4, 5.6, 7.8, 8.4, 9.1, 10.2, 11.3, 12.4, 14.1]
A = np.vstack([x, np.ones(len(x))]).T
p = np.linalg.pinv(A) @ y    #伪逆矩阵点乘输出向量

print(p)
```