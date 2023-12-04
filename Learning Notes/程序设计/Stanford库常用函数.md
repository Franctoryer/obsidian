## 1 Vector
|  函数 | 复杂度  | 用法  |
|---|---|---|
|[add(value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:add)|O(1)|Adds a new value to the end of this vector.|
|[clear()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:clear)|O(1)|Removes all elements from this vector.|
|[equals(vec)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:equals)|O(N)|Returns `true` if the two vectors contain the same elements in the same order.|
|[get(index)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:get)|O(1)|Returns the element at the specified index in this vector.|
|[insert(index, value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:insert)|O(N)|Inserts `value` into this vector at the specified index.|
|[isEmpty()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:isEmpty)|O(1)|Returns `true` if this vector contains no elements.|
|[mapAll(fn)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:mapAll)|O(N)|Calls the specified function on each element of this vector in order of ascending index.|
|[remove(index)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:remove)|O(N)|Removes the element at the specified index from this vector.|
|[set(index, value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:set)|O(1)|Replaces the element at the specified index in this vector with `value`.|
|[size()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:size)|O(1)|Returns the number of elements in this vector.|
|[sort()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:sort)|O(NlogN)|Rearranges the elements in this vector into sorted order.|
|[subList(start, length)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:subList)|O(N)|Returns a new vector containing elements from a sub-range of this vector.|
|[toString()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Method:toString)|O(N)|Returns a printable string representation of this vector.|
|[for (ValueType elem : vec)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:foreach)|O(N)|Iterates through the elements in a vector in order of ascending index.|
|[vec[index]](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:[])|O(1)|Overloads `[]` to select elements from this vector.|
|[vec1 + vec2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:+)|O(N)|Concatenates two vectors.|
|[vec1 += vec2;](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:+=)|O(N)|Adds all of the elements from `vec2` to `vec1`.|
|[vec += value;](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:+=)|O(1)|Adds the single specified value to `vec`.|
|[vec += a, b, c;](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:,)|O(1)|Adds multiple individual values to `vec`.|
|[vec1 == vec2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:==)|O(N)|Returns `true` if `vec1` and `vec2` contain the same elements.|
|[vec1 != vec2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:!=)|O(N)|Returns `true` if `vec1` and `vec2` are different.|
|[ostream << vec](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:%3C%3C)|O(N)|Outputs the contents of the vector to the given output stream.|
|[istream >> vec](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Vector.html#Operator:%3C%3C)|O(N)|Reads the contents of the given input stream into the vector.|


## 2 queue
|  函数 | 复杂度  |  用法 |
|---|---|---|
|[clear()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:clear)|O(N)|Removes all elements from the queue.|
|[dequeue()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:dequeue)|O(1)|Removes and returns the frontmost element in the queue.|
|[enqueue(value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:enqueue)|O(1)|Adds `value` to the back of the queue.|
|[equals(q)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:equals)|O(N)|Returns `true` if the two queues contain the same elements in the same order.|
|[isEmpty()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:isEmpty)|O(1)|Returns `true` if the queue contains no elements.|
|[peek()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:peek)|O(1)|Returns the frontmost element in the queue, without removing it.|
|[size()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:size)|O(1)|Returns the number of values in the queue.|
|[toString()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Method:toString)|O(N)|Returns a printable string representation of this queue.|
|[queue1 == queue1](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Operator:==)|O(N)|Returns `true` if `queue1` and `queue2` contain the same elements.|
|[queue1 != queue2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Operator:!=)|O(N)|Returns `true` if `queue1` and `queue2` are different.|
|[ostream << queue](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Operator:%3C%3C)|O(N)|Outputs the contents of the queue to the given output stream.|
|[istream >> queue](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Queue#Operator:%3E%3E)|O(N)|Reads the contents of the given input stream into the queue.|

## 3 stack
| 函数  |  复杂度  | 用法  |
|---|---|---|
|[clear()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:clear)|O(1)|Removes all elements from this stack.|
|[equals(stack)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:equals)|O(N)|Returns `true` if the two stacks contain the same elements in the same order.|
|[isEmpty()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:isEmpty)|O(1)|Returns `true` if this stack contains no elements.|
|[peek()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:peek)|O(1)|Returns the element on top of this stack, without removing it.|
|[pop()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:pop)|O(1)|Removes the element on top of this stack and returns it.|
|[push(value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:push)|O(1)|Adds `value` onto this stack.|
|[size()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:size)|O(1)|Returns the number of values in this stack.|
|[toString()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Method:toString)|O(N)|Returns a printable string representation of this stack.|
|[stack1 == stack2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Operator:==)|O(N)|Returns `true` if `stack1` and `stack2` contain the same elements.|
|[stack1 != stack2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Operator:!=)|O(N)|Returns `true` if `stack1` and `stack2` are different.|
|[ostream << stack](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Operator:%3C%3C)|O(N)|Outputs the contents of the stack to the given output stream.|
|[istream >> stack](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Stack#Operator:%3E%3E)|O(N)|Reads the contents of the given input stream into the stack.|

## 4 set
|  函数 | 复杂度  | 用法  |
|---|---|---|
|[add(value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:add)|O(log N)|Adds an element to this set, if it was not already there.|
|[clear()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:clear)|O(N)|Removes all elements from this set.|
|[contains(value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:contains)|O(log N)|Returns `true` if the specified value is in this set.|
|[difference(otherSet)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:difference)|O(Nlog N)|Subtracts `otherSet` from this set. The difference removes those elements that appear in `otherSet`.|
|[equals(set)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:equals)|O(N)|Returns `true` if the two sets contain the same elements.|
|[first()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:first)|O(log N)|Returns the first value in this set when considered in sorted order.|
|[intersect(otherSet)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:intersect)|O(N log N)|Intersects `otherSet` with this set. The intersection retains only those elements also contained in `otherSet`.|
|[isEmpty()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:isEmpty)|O(1)|Returns `true` if this set contains no elements.|
|[isSubsetOf(otherSet)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:isSubsetOf)|O(N)|Returns `true` if this set is a subset of `otherSet`.|
|[isSupersetOf(otherSet)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:isSupersetOf)|O(N)|Returns `true` if this set is a superset of `otherSet`.|
|[last()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:last)|O(log N)|Returns the last value in this set when considered in sorted order.|
|[mapAll(fn)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:mapAll)|O(N)|Calls `fn(value)` for each element of this set.|
|[remove(value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:remove)|O(log N)|Removes an element from this set.|
|[size()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:size)|O(1)|Returns the number of elements in this set.|
|[toString()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:toString)|O(N)|Returns a printable string representation of this set.|
|[unionWith(otherSet)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Method:unionWith)|O(N log N)|Unions `otherSet` with this set. The union adds all elements from `otherSet`.|
|[for (ValueType elem : set)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:foreach)|O(N)|Iterates through the elements in a set.|
|[set1 == set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:==)|O(N)|Evaluates to `true` if `set1` and `set2` contain the same elements.|
|[set1 != set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:!=)|O(N)|Evaluates to `true` if `set1` and `set2` are different.|
|[set1 + set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:+)|O(N)|Creates a new set which is the union of `set1` with `set2`.|
|[set + value](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:+)|O(N log N)|Creates a new set which is the union of `set` with the single `value`.|
|[set1 += set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:+=)|O(N log N)|Adds all of the elements from `set2` to `set1`.|
|[set += value](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:+=)|O(log N)|Adds the single `value` to `set`.|
|[set1 - set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:-)|O(N log N)|Creates a new set containing the elements in `set1` that aren't in `set2`.|
|[set - value](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:-)|O(log N)|Creates a new set which contains all values in `set` minus `value`.|
|[set1 -= set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:-=)|O(N log N)|Removes the elements of `set2` from `set1`.|
|[set -= value](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:-=)|O(log N)|Removes the single `value` from `set`.|
|[set1 * set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:*)|O(N log N)|Creates a new set which is the intersection of `set1` and `set2`.|
|[set1 *= set2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:*=)|O(N log N)|Removes any elements from `set1` that are not present in `set2`.|
|[ostream << set](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:%3C%3C)|O(N)|Outputs the contents of `set` to the given output stream.|
|[istream >> set](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Set#Operator:%3E%3E)|O(N log N)|Reads the contents of the given input stream into `set`.|

## 4 map
|  函数 | 复杂度  | 用法  |
|---|---|---|
|[clear()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:clear)|O(N)|Removes all entries from this map.|
|[containsKey(key)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:containsKey)|O(log N)|Returns `true` if there is an entry for `key` in this map.|
|[equals(map)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:equals)|O(N)|Returns `true` if the two maps contain the same entries.|
|[firstKey()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:firstKey)|O(log N)|Returns the first key in this map in the order established by a for-each loop.|
|[get(key)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:get)|O(log N)|Returns the value associated with `key` in this map.|
|[isEmpty()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:isEmpty)|O(1)|Returns `true` if this map contains no entries.|
|[keys()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:keys)|O(N)|Returns a `Vector` copy of all keys in this map.|
|[lastKey()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:lastKey)|O(log N)|Returns the last value in this map in the order established by a for-each loop.|
|[mapAll(fn)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:mapAll)|O(N)|Iterates through the map entries and calls `fn(key, value)` for each one.|
|[put(key, value)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:put)|O(log N)|Associates `key` with `value` in this map.|
|[remove(key)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:remove)|O(log N)|Removes any entry for `key` from this map.|
|[size()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:size)|O(1)|Returns the number of entries in this map.|
|[toString()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:toString)|O(N)|Returns a printable string representation of this map.|
|[values()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Method:values)|O(N)|Returns a `Vector` copy of all values in this map.|
|[for (KeyType key : map)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:foreach)|O(N)|Iterates through the keys in a map.|
|[map[key]](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:[])|O(log N)|Selects the value associated with `key`.|
|[map1 == map1](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:==)|O(N)|Returns `true` if `map1` and `map2` contain the same entries.|
|[map1 != map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:!=)|O(N)|Returns `true` if `map1` and `map2` are different.|
|[map1 + map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:+)|O(NlogN)|Creates a new map which contains all `map1` entries added to all `map2` entries.|
|[map1 += map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:+=)|O(NlogN)|Adds all `map2` entries to `map1`.|
|[map1 - map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:-)|O(NlogN)|Creates a new map which contains all `map1` entries minus all `map2` entries.|
|[map1 -= map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:-=)|O(NlogN)|Removes all `map2` entries from `map1`.|
|[map1 * map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:*)|O(NlogN)|Creates a new map which contains all entries that appear in both `map1` and `map2`.|
|[map1 *= map2](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:*=)|O(NlogN)|Removes any entries from `map1` that are not present in `map2`.|
|[ostream << map](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:%3C%3C)|O(N)|Outputs the contents of the map to the given output stream.|
|[istream >> map](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Map#Operator:%3E%3E)|O(N log N)|Reads the contents of the given input stream into the map.|

## 5 lexicon
|  函数 | 复杂度  | 用法  |
|---|---|---|
|[contains(word)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Method:contains)|O(W)|Returns `true` if `word` is contained in the lexicon.|
|[containsPrefix(prefix)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Method:containsPrefix)|O(W)|Returns true if any words in the lexicon begin with `prefix`.|
|[size()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Method:size)|O(1)|Returns the number of words contained in the lexicon.|
|[toString()](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Method:toString)|O(1)|Returns a printable string representation of this lexicon.|
|[for (string word : lex)](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Operator:foreach)|O(N)|Iterates through the words in a lexicon in alphabetical order.|
|[ostream << lex](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Operator:%3C%3C)|O(N)|Outputs the contents of the lexicon to the given output stream.|
|[istream >> lex](https://web.stanford.edu/dept/cs_edu/resources/cslib_docs/Lexicon#Operator:%3E%3E)|O(WN)|Reads the contents of the given input stream into the lexicon.|