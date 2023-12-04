# 1 定义双向链表

```cpp
// constructing lists
#include <iostream>
#include <list>

int main ()
{
  // constructors used in the same order as described above:
  std::list<int> first;                                // empty list of ints
  std::list<int> second (4,100);                       // four ints with value 100
  std::list<int> third (second.begin(),second.end());  // iterating through second
  std::list<int> fourth (third);                       // a copy of third

  // the iterator constructor can also be used to construct from arrays:
  int myints[] = {16,2,77,29};
  std::list<int> fifth (myints, myints + sizeof(myints) / sizeof(int) );

  std::cout << "The contents of fifth are: ";
  for (std::list<int>::iterator it = fifth.begin(); it != fifth.end(); it++)
    std::cout << *it << ' ';

  std::cout << '\n';

  return 0;
}
```

# 2 常用函数
- `sort()` ：排序
- `insert()` ：在指定节点的前面插入
- `swap()` ：交换两个链表的元素
- `clear()` ：清除链表内的所有元素
- `size()` ：获取长度
- `max_size()` ：获取最大长度
- `resziez()`：更改链表长度，多的默认为0
- `remove()` ：删除特定值的元素


