# 1 CPU的功能
## 1.1 控制器的功能

1. 取指令
2. 分析指令
3. 执行指令
4. 控制程序输入及结果的输出
5. 总线管理
6. 处理异常情况和特殊请求

## 1.2 运算器的功能
实现算数运算和逻辑运算

总之，CPU 可以实现以下功能：
1. 指令控制
2. 操作控制
3. 时间控制
4. 数据加工
5. 处理中断


# 2 CPU 的结构框图
![](https://obsdian-img-1319433252.cos.ap-shanghai.myqcloud.com/2023-11-4-1.jpg)
1. 控制总线和数据总线都是双向的，CPU 的控制命令会传入控制总线，外设的控制命令也会通过控制总线传给 CPU。数据总线也是双向的，CPU 会把运算结果输出到数据总线存入主存，也会接受来自数据总线的数据
2. 地址总线是单向的，只能由CPU 发出
3. CPU中有很多寄存器，例如 IR（指令寄存器）、ACC（累加寄存器）
4. CPU 中由很多控制单元进行操作控制和时间控制
5. CPU 中有很多算逻单元做运算
6. CPU 中由中断系统处理中断

# 3 CPU的寄存器
# 3.1 用户可见寄存器
1. 通用寄存器（存放操作数，或者用于某种寻址方式所需的专用寄存器（例如：[[寻址方式#3.7 基址寻址]]、[[寻址方式#3.8 变址寻址]]））
2. 数据寄存器（存放操作数、运算结果）
3. 地址寄存器（存放地址）
4. 条件码寄存器（存放条件码、例如：正、负、零、溢出、进位）

## 3.2 控制和状态寄存器
### 3.2.1 控制寄存器
$$PC\rightarrow MAR \rightarrow M \rightarrow MDR \rightarrow IR$$

1. PC 是程序计数器，存放当前指令的地址
2. MAR：主存地址寄存器
3. MDR：主存数据寄存器
4. IR：指令寄存器

其中 MAR、MDR、IR 用户不可见；PC 用户可见

### 3.2.2 状态寄存器
例如：PSW 寄存器，用来存放程序状态字（程序运行情况、断点情况）

# 4 控制单元 CU 和中断系统

CU 产生全部指令的微操作命令序列，有组合逻辑设计和微程序设计两种。