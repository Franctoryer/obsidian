# 1 算法思路
- 把 $n$ 个节点标号为 $0,1,2,\cdots n-1$
- 写出没有中转节点时两两节点的距离（结果用一个<font color = red>邻接矩阵</font>来表示）
- 若有中转节点 0，更新两者距离
- 循环上面的步骤，若有中转节点 $0,1,2,\cdots, n-1$ ，得出两者的距离

# 2 代码实现
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/PixPin_2023-12-24_10-33-50.png)

# 3 算法复杂度

$O(n^3)$