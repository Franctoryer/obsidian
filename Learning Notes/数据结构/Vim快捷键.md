---
importance: basic
---
# 1 NOMAL模式

1. `hjkl` 控制光标左下上右
2. `x` 删除当前字符，`3x` 删除后三个字符
3. `w` 向前移动一个单词，`b` 向后移动一个单词
4. `W` 向前移动一个单词，但忽略一些标点；`B` 同理
5. `e` 移动到单词末尾，`E` 移动到单词末尾，如果末尾有标点符号，移动到该标点符号
6. `f<letter>` 找下一个这个字母，`F<letter>` 反向查找
7. `t<letter>` 找下一个这个字母之前，`T<letter>` 反向查找
8. 配合上面的使用，`;` 向后重复；`,` 向前重复
9. `u` 撤销
10. `yy` 复制当前行
11. `dd` 剪切当前行，`dj` 删除本行和下一行，`dk` 删除本行和上一行，`D` 删除至本行末尾，`dw` 删除一个单词，`3dw` 删除后面3个单词，`db` 删除前一个单词
12. `^` 移到本行第一个非空白字符，`0` 移到本行第一个字符，`$` 移动本行末尾字符
13. `gg` 移到文件头部，`G` 移到文件末尾
14. `p` 在后一行粘贴，`P` 在本行粘贴
15. `ddp` 交换本行和下一行
16. `:1,3d` 删除一到三行
17. `4J` 合并下四行
18. `xgg` 移动到第x行
19. `<C-]>` 查看函数原型，`<C-t>` 返回
20. `gcc` 注释当行，`gc3j` 注释当前行和下面三行
21. `gd` 查看函数定义，`gh` 查看函数列表
22. `<C-o>` 上一个buffer，`<C-i>` 下一个buffer
23. == 缩进本行，` gg==G` 缩进全文 ，`3==` 缩进包括本行的下三行
24. `<C-y>` 滚轮向上移动；`<C-e>` 滚轮向下移动 
25. `r` 替换改字并保持normal模式
26. `ZZ` 保存并退出
27. `-` 返回上一行的第一个非空白字符
28. `+` 或 `<CR>` 跳转到下一行的第一个非空白字符
29. `(` `)` 往前/后移动一句；`{` `}` 往前、后移动一段
30. `zc` `zo` 折叠、打开代码段
31. <font color = orange>``</font> 返回上次的编辑处
32. `K` 查看manpage
33. `~` 对当前字母进行但小写转化
34. `v` 进入可视化模式；`V` 进入行可视化模式；`<C-v>` 进入块可视化模式，`<C-q>` 可以切换模式
35. `vi)`，`vi]` 选中括号里面的内容；`va)`，`va]` 选中括号（包括括号）里的内容
36. `zz` 将光标所在行放到屏幕中央
37. `g~~` 更改当前行的大小写；`guu` 把当前行都改成小写；`gUU` 把当前行都改成大写
38. `guj`，`gUj` 同理，`guw`、`gUw` 改变单词大小写
39. `O` (大写的o)：向上插入一行 ; `A` 在行尾插入；`I` 在行首插入
40. `*` 高亮所有光标后面的单词，`#` 高亮所有光标前面的单词
41. `m <a-z | A-Z>` 打标记，`<反引号> <a-z | A-Z>` 返回标记处

自定义：
1. `nm` 上下移动
2. `,.` 行首行
3. `jj` 返回正常模式
4. `<space>ff` 查找文件
5. `<space>fg` 模糊搜索
6. `<space>e` 打开文件夹
7. `H` `L` 往前往后一个buffer

# 2 INSERT模式
1. `<Esc>` 或者 `<C[>` 返回正常模式；两者的 ASCII 值相同
2. `<C-R>=` 做运算

# 3 COMMAND 模式
1. `:%s/<string>/<substring>`：全局替换
2. `1,3s/<str>/<sub>/g` ：替换1到3行所有的字符串（`/g` 表示所有）【支持[[正则表达式]]】
3. `:pwd` 打印当前目录
4. `:cd <path>` 改变工作目录
5. `:make` 编译当前文件
6. `:sort` 正序排序
7. `:sort!` 倒序排序
8. `:noh` 取消高亮

# 4 VISUAL 模式
1. `y` 复制
2. `d` 删除
3. `c` 修改
4. `p` :在光标后边粘贴