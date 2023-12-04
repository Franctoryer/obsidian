# 1 定义单向链表

```cpp
#include <forward_list>
#include <iostream>

int main()
{

	std::forward_list<int> first;                      // default: empty
	std::forward_list<int> second (3,77);              // fill: 3 seventy-sevens
	std::forward_list<int> third (second.begin(), second.end()); // range initialization
	std::forward_list<int> fourth (third);            // copy constructor
	std::forward_list<int> fifth (std::move(fourth));  // move ctor. (fourth wasted)
	std::forward_list<int> sixth = {3, 52, 25, 90};    // initializer_list constructor
	
	std::cout << "first:" ; for (int& x: first)  std::cout << " " << x; std::cout << '\n';
	std::cout << "second:"; for (int& x: second) std::cout << " " << x; std::cout << '\n';
	std::cout << "third:";  for (int& x: third)  std::cout << " " << x; std::cout << '\n';
	std::cout << "fourth:"; for (int& x: fourth) std::cout << " " << x; std::cout << '\n';
	std::cout << "fifth:";  for (int& x: fifth)  std::cout << " " << x; std::cout << '\n';
	std::cout << "sixth:";  for (int& x: sixth)  std::cout << " " << x; std::cout << '\n';

  return 0;
}
```

# 2 成员函数
- `begin()` ：获取指向链表第一个元素的指针
- `end()` ：获取最后一个指针
- `merge()` ：合并两个链表
- `insert_after()` ：插入元素
- `erase_after()` ：删除元素
- `...`  [[https://cplusplus.com/reference/forward_list]]

```cpp
// std::begin / std::end example
#include <iostream>     // std::cout
#include <vector>       // std::vector, std::begin, std::end

int main () {
  int foo[] = {10,20,30,40,50};
  std::vector<int> bar;

  // iterate foo: inserting into bar
  for (auto it = std::begin(foo); it!=std::end(foo); ++it)
    bar.push_back(*it);

  // iterate bar: print contents:
  std::cout << "bar contains:";
  for (auto it = std::begin(bar); it!=std::end(bar); ++it)
    std::cout << ' ' << *it;
  std::cout << '\n';

  return 0;
}
```

<font color = orange>注：在 `++it` 和 `it++` 同时成立的情况下最好使用 `++it` ，因为对于前自增符的重载，只要自身加1直接 return 即可；然而对于后自增符的重载，需要先创建一个对象保存原先的值，再自身加1，返回原先的值。</font>


