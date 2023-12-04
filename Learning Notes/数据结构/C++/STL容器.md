# 1 有哪些
1. vector
2. array
3. queue
4. deque
5. forward_list
6. list
7. map

# 2 共性
顺序容器和关联容器都共有下列函数：

- `begin()` ：返回容器第一个元素的迭代器指针；
- `end()`：返回容器最后一个元素后面一位的迭代器指针；
- `rbegin()`：返回一个逆向迭代器指针，指向容器最后一个元素；
- `rend()`：返回一个逆向迭代器指针，指向容器首个元素前面一位；
- `clear()`：删除容器中的所有的元素；
- `erase(it)`：删除迭代器指针it处元素；

# C++11 for循环新特性

```cpp
#include <array>

int main() {
  std::array<int, 5> arr { 1, 2, 3, 4, 5 };
  for (int x : arr) { std::cout << x << std:endl; }
  return 0
}
```

> 它基于迭代器，因此循环过程中不能对容器进行添加或删除操作（这样会导致迭代器指针发生变化）

