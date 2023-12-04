# 1 语法规则

```
目标 ... : 依赖 ...
	命令1
	命令2
	...
```

1. 目标文件
2. 依赖文件
3. 变量
4. 命名

<font color = orange>prerequisites中如果有一个以上的文件比target文件要新的话，recipe所定义的命令就会被执行。</font>
# 2 通配符 `%` 和 `wildcard *` 的区别
`wildcard` 寻找系统目录下符合的文件，而 `%` 寻找目标下符合的文件
例如：
```makefile
cc = g++
target = result
source = ${wildcard *.cpp}
obj = ${source:%.cpp = %.o}

${target}: ${obj}
	g++ -o ${target} ${obj}

%.o: %.cpp
	g++ -c -Wall -o $@ $<
```

# 3 `$@` `$^` `$<` `$?` 的含义
1. `$@` 表示目标
2. `$^` 表示全部依赖
3. `$<` 表示第一个依赖
4. `$?` 表示该片段更新的依赖

# 4 `@` 的作用
在命令前加上 `@` 可以使命令不在命令行中显示出来

# 5 `:=`  和 `?=`
1. `:=` 是直接赋值。且后续的重新的赋值不会影响前面的赋值，‘=’ 反之
2. `?=` 意为如果该变量还没被赋值则进行赋值

# 6 模式规则
模式规则类似于普通规则。只是在模式规则中，目标名中需要包含有模式字符"%"，包含有模式字符"%"的目标被用来匹配一个文件名，"%" 可以匹配任何非空字符串。规则的依赖文件中同样可以使用"%"，依赖文件中模式字符"%"的取值情况由目标中的"%"来决定。
例如：对于模式规则"%.o : %.c"，它表示的含义是：所有的.o文件依赖于对应的.c文件。
下列示例就是一个makefile內建的模式规则，由所有的.c文件生成对应的.o文件：

```makefile
%.o : %.c
    $(CC) -c $(CFLAGS) $< -o $@
```

# 7 案例

```makefile
cc = g++
target = result
buildDir = build
buildMode = -std=c++17 -Wall

source := $(wildcard *.cpp)
objs := $(source:%.cpp=$(buildDir)/%.o)
all: $(buildDir) $(target)
  
$(target): $(objs)
    $(cc) -o $@ $^
$(buildDir)/%.o: $(buildDir)/%.s
    @$(cc) -c -o $@ $<
$(buildDir)/%.s: $(buildDir)/%.i
    @$(cc) -S $(buildMode) -o $@ $<
$(buildDir)/%.i: %.cpp
    @$(cc) -E $(buildMode) -o $@ $<
    @echo $? updated
    
.PHONY: clean
.SECONDARY: #保留中间文件

clean:
    del  *.o *.exe *.s *.i /F/Q
    rd $(buildDir) /Q/S
$(buildDir):
    @md $@
```

注意点：
1. 不能写成`$(target): $(buildDir)/%.o` ，因为链接是<font color = dark red>合并的过程</font>
2. `.SECONDARY` 伪目标保留中间文件
3. 整个流程：<font color = dark red>预处理 -> 编译 -> 汇编 -> 链接</font>
4. `@echo $? updated` 输出更新的 cpp 文件，其中 `@` 表示隐藏该命令