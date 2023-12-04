---
importance: medium
Matlab: False
Python: True
picture: True
---
# 1 二维图
## 1.1 柱形图
### 例1

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()

fruits = ['apple', 'blueberry', 'cherry', 'orange']
counts = [40, 100, 30, 55]
bar_labels = ['red', 'blue', '_red', 'orange']
bar_colors = [[231/255, 98/255, 84/255], [144/255,188/255,213/255], [231/255, 98/255, 84/255], [239/255, 138/255, 71/255]]

ax.bar(fruits, counts, label=bar_labels, color=bar_colors)

ax.set_ylabel('fruit supply')
ax.set_title('Fruit supply by kind and color')
ax.legend(title='Fruit color')

plt.show()

```

![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example1.png)

subplot()函数的返回值只有axes，subplots()函数的返回值有fig和axes
### 例2
```python
import numpy as np
import matplotlib.pyplot as plt
species = ("Adelie", "Chinstrap", "Gentoo")
penguin_means = {
    'Bill Depth': (18.35, 18.43, 14.98),
    'Bill Length': (38.79, 48.83, 47.50),
    'Flipper Length': (189.95, 195.82, 217.19),
}

x = np.arange(len(species))  # the label locations
width = 0.25  # the width of the bars
multiplier = 0

fig, ax = plt.subplots(layout='constrained')

for attribute, measurement in penguin_means.items():
    offset = width * multiplier
    rects = ax.bar(x + offset, measurement, width, label=attribute)
    ax.bar_label(rects, padding=3)
    multiplier += 1

# Add some text for labels, title and custom x-axis tick labels, etc.
ax.set_ylabel('Length (mm)')
ax.set_title('Penguin attributes by species')
# ax.set_xticks(x + width, species)
ax.legend(loc='upper left', ncols=3)
ax.set_ylim(0, 250)

fig.savefig('example2.pdf')
plt.show()

```
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example2.png)

当分类数目较小时，可以不用循环结构，把数据存在不同的列表里分别画
## 1.2 饼图

```python
import numpy as np
import matplotlib.pyplot as plt
# Some data
labels = 'Frogs', 'Hogs', 'Dogs', 'Logs'
fracs = [15, 30, 45, 10]

# Make figure and axes
fig, axs = plt.subplots(2, 2)

# A standard pie plot
axs[0, 0].pie(fracs, labels=labels, autopct='%1.1f%%', shadow=True)

# Shift the second slice using explode
axs[0, 1].pie(fracs, labels=labels, autopct='%.0f%%', shadow=True,
              explode=(0, 0.1, 0, 0))

# Adapt radius and text size for a smaller pie
patches, texts, autotexts = axs[1, 0].pie(fracs, labels=labels,
                                          autopct='%.0f%%',
                                          textprops={'size': 'smaller'},
                                          shadow=True, radius=0.5)
# Make percent texts even smaller
plt.setp(autotexts, size='x-small')
autotexts[0].set_color('white')

# Use a smaller explode and turn of the shadow for better visibility
patches, texts, autotexts = axs[1, 1].pie(fracs, labels=labels,
                                          autopct='%.0f%%',
                                          textprops={'size': 'smaller'},
                                          shadow=False, radius=0.5,
                                          explode=(0, 0.05, 0, 0))
plt.setp(autotexts, size='x-small')
autotexts[0].set_color('white')

fig.savefig('example3.pdf')
plt.show()
```
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example3.png)
## 1.3 散点图
```python
import matplotlib.pyplot as plt
np.random.seed(19680801)

fig, ax = plt.subplots()
N = 50
x = np.random.rand(N)
y = np.random.rand(N)
colors = np.random.rand(N)
area = (30 * np.random.rand(N))**2  # 0 to 15 point radii

ax.scatter(x, y, s=area, c=colors, alpha=0.5)
fig.savefig('example4.pdf')
plt.show()
```
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example4.png)
其中变量c是与颜色变化相关的变量
## 1.4 曲线图
```python
x = np.linspace(-np.pi/2, np.pi/2, 31)
y = np.cos(x)**3

# 1) remove points where y > 0.7
x2 = x[y <= 0.7]
y2 = y[y <= 0.7]

# 2) mask points where y > 0.7
y3 = np.ma.masked_where(y > 0.7, y)

# 3) set to NaN where y > 0.7
y4 = y.copy()
y4[y3 > 0.7] = np.nan

plt.plot(x*0.1, y, 'o-', color='lightgrey', label='No mask')
plt.plot(x2*0.4, y2, 'o-', label='Points removed')
plt.plot(x*0.7, y3, 'o-', label='Masked values')
plt.plot(x*1.0, y4, 'o-', label='NaN values')
plt.legend()
plt.title('Masked and NaN data')
plt.savefig('example5.pdf')
plt.show()
```
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example5.png)

# 2 三维图

```python
import numpy as np
import matplotlib.pyplot as plt
fig = plt.figure()
ax = plt.axes(projection = '3d')
[xMesh, yMesh] = np.meshgrid(np.linspace(-10,10,1000),np.linspace(-10,10,1000))
z = np.sin(np.sqrt(xMesh**2 + yMesh**2))
ax.plot_surface(xMesh, yMesh, z, cmap = 'RdYlBu')
fig.savefig('example6.pdf')
```
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/example6.png)