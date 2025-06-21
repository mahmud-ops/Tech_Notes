
## Vector

- Dynamic array.
- Automatically resizes when a new element is added.

**Header Inclusion**

```cpp
#include <vector>
vector <int> numbers;
vector <data_type> variable_name;
```

---

**Applications**

```cpp
vector <int> vec_1 = {1 , 2};
vector <int> vec_2(3, 2);          // 3 elements, all value 2
vector <int> vec_3(vec_2);         // copy vec_2
```

---

### Basic Functions (Time Complexity: O(1))

```cpp
vector <int> vec_1;
```

| Function / Iterator  | What it does                      | Example                                            |
| -------------------- | --------------------------------- | -------------------------------------------------- |
| `push_back()`        | Adds new element to the back      | `vec_1.push_back(1)` ➡️ Adds `1` at the last index |
| `pop_back()`         | Removes the last element          | `vec_1.pop_back()` ➡️ Removes last element         |
| `emplace_back()`     | Constructs & adds element at back | `vec_1.emplace_back(2)` ➡️ Adds `2` efficiently    |
| `at()` / `[]`        | Access element at given index     | `vec_1.at(0)` or `vec_1[0]` ➡️ Gets first element  |
| `front()` / `back()` | First and last element            | `vec_1.front()` / `vec_1.back()`                   |

---

### Size and Capacity

> Capacity doesn’t grow by 1 each time. It **doubles**, creating a new array under the hood.

```cpp
vector<int> vec_1;
vec_1.push_back(1);
vec_1.push_back(2);
```

```cpp
cout << "Size: " << vec_1.size();        // 2
cout << "Capacity: " << vec_1.capacity(); // 2
```

**Add another one**

```cpp
vec_1.push_back(3);
```

```
Size: 3
Capacity: 4 (doubled)
```

**Add a fourth**

```cpp
vec_1.push_back(4);
```

```
Size: 4
Capacity: 4 (still fits)
```

---

### Expensive Operations (Time Complexity: O(n))

| Function   | What it does                                   | Example                  |
| ---------- | ---------------------------------------------- | ------------------------ |
| `erase()`  | Erases value at position (iterator, not index) | `vec.erase(vec.begin())` |
| `insert()` | *(not explained yet — optional to fill)*       |                          |

---

### Erase

**Erase Specific Index**

```cpp
vector<int> vec_1 = {1,2,3,4,5,6};
vec_1.erase(vec_1.begin() + 4); // index 4 = 5
```

**Erase a Range**

```cpp
vec_1.erase(vec_1.begin(), vec_1.begin() + 4); // [0 to 3]
```

**Erase All Elements**

```cpp
vec_1.erase(vec_1.begin(), vec_1.end());
```

> `erase()` removes values, but **capacity stays the same**

---

### Clear

```cpp
vector<int> nums = {1,2,3,4,5};
nums.clear();
```

```cpp
cout << "Size = " << nums.size();     // 0
cout << "Capacity = " << nums.capacity(); // stays the same
```

### Reverse iterator
`.rbegin()` and `.rend()` are reverse iterator

**Printing this array with the help of iterators**
```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){
    
    vector<int> nums = {1,2,3,4,5};

    vector<int>::iterator i;
    for(i = nums.begin(); i != nums.end(); i++){
        cout << *i << endl;
    }
   
    return 0;
}
```
```
1
2
3
4
5
```
**We can `reverse` it by using reverse iterators**

AND, We don't actually have to define the iterator,
```cpp
vector<int>::iterator i;
```
We can just use `auto` and the it gets automatically defined.
```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){
    
    vector<int> nums = {1,2,3,4,5};

    for(auto i = nums.rbegin(); i != nums.rend(); i++){
        cout << *i << endl;
    }
   
    return 0;
}
```
```
5
4
3
2
1
```
Why `*i` ? => iterators are **pointers** , so here we're printing **value at the address of `i`.**
---

### Recap

* `push_back()` adds elements
* `pop_back()` removes the last one
* `erase()` deletes by position or range
* `clear()` wipes data but not memory
* Capacity doubles when needed, not per element

## List
```cpp
#include<list>
list<int> l = {1,2,3}
```
**Basic functions**
- `push_back()` and `push_front()`
- `emplace_back()` and `emplace_front()`
- `pop_back()` and `pop_front()`
- `size()`,`erase()`,`clear()`,`begin()`,`end()`,`rbegin()`,`rend()`,`insert()`,`front`,`back()`
 ```cpp
#include<iostream>
#include<list>

using namespace std;
int main(){
    
    list<int> l;
    l.push_back(2);
    l.push_back(3);
    l.push_back(4);
    l.push_back(5);
    l.push_back(10);
    
    l.push_front(1);
   
    l.pop_back();
    l.pop_front();

    for(int element:l){
        cout << element << " ";
    }
    cout << '\n';

    return 0;
}
```
```
2 3 4 5
```
```cpp
cout << l[2];
```
```
ERROR
```
We can't access a random value from a list.

## Deque: Double Ended Queue
Same as list , but we can access a random value.
```cpp
#include<iostream>
#include<deque> // Header

using namespace std;
int main(){
    
    deque<int> l;
    ... ... ...
    cout << l[2];
    return 0;
}
```
```
4
```
**Basic functions**
- `push_back()` and `push_front()`
- `emplace_back()` and `emplace_front()`
- `pop_back()` and `pop_front()`
- `size()`,`erase()`,`clear()`,`begin()`,`end()`,`rbegin()`,`rend()`,`insert()`,`front`,`back()`

## Pair
It's a part of `c++ utility library`
```cpp
#include<utility>
pair<data_type_1,data_type_2> variable = {value_1,value_2} 
```
```cpp
#include<iostream>
#include<deque>

using namespace std;
int main(){
    pair<int , int> p = {1,5};

    cout << p.first << endl;
    cout << p.second << endl;
    return 0;
}
```
```
1
5
```
**Pair of pair / Nested pair**
```cpp
#include<iostream>
#include<deque>

using namespace std;
int main(){
    pair<int , pair<int,int>> myPair = {1,{2,3}};

    cout << myPair.first << endl;

    // Accessing nested pair
    cout << myPair.second.first << endl;
    cout << myPair.second.second << endl;
    return 0;
}
```
```
1
2
3
```
**Vector of pairs**
```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<pair<int,int>> myPairs = {{1,2},{3,4},{5,6}};

    myPairs.push_back({7,8});         // This is how you push_back a pair
    myPairs.emplace_back(9,10);      // emplace_back is more efficient

    for(auto i:myPairs){
        cout << i.first << " " << i.second << '\n';
    }
    return 0;
}
```
```
1 2  
3 4  
5 6  
7 8  
9 10
```

---

**In case of `push_back` and `emplace_back`...**

* `push_back({x, y})` **creates the pair first**, then pushes it into the vector.
* `emplace_back(x, y)` **constructs the pair directly inside** the vector — slightly more efficient, especially for complex objects.

> TL;DR: Use `emplace_back` for cleaner and faster insertion when you’re passing values directly.

## Stack
**Stack followa LIFO (Last In First Out) structure**
```cpp
stack<int>s
```
**Basic functions**
- `push()`,`emplace()`,`pop()`
- `top` => Accesses the top element of the stack
- `size`,`empty`,`swap`
Ayy let's break down **stack** like you're seeing it in real life — not just dry code 🍔📚

---

**🧠 What is a Stack?**

A **stack** is like a **pile of plates** or a **backpack**:

* You **add** on top (`push`)
* You **remove** from top (`pop`)
* You can only **see the top item** (`top` or `peek`)
* It follows **LIFO**: *Last In, First Out*

---

**🧱 Visual Representation**

Imagine this is your stack:

```
Top ->  [ 5 ]
        [ 4 ]
        [ 3 ]
        [ 2 ]
Bottom->[ 1 ]
```

You pushed: `1`, then `2`, then `3`, `4`, and `5`.

Now:

* `top()` returns `5`
* `pop()` removes `5`
* Next top is `4`

---

**🎮 Real-life analogies**

| Real-life thing     | Stack Concept                  |
| ------------------- | ------------------------------ |
| Stack of Pringles   | You take from top              |
| Undo in MS Word     | Undo last action               |
| Browser back button | Goes back 1 page               |
| Your coding tabs    | Last tab opened = first closed |

---

**🧑‍💻 In C++**

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> st;

    st.push(1);
    st.push(2);
    st.push(3);

    cout << st.top() << '\n';  // 3
    st.pop();
    cout << st.top() << '\n';  // 2

    return 0;
}
```
```
3
2
```
---

**🔥 TL;DR**

* LIFO = Last In, First Out
* `push()` = add
* `pop()` = remove top
* `top()` = see top
* Like a Pringles can or browser history

### Reverse printing using stack
```cpp
#include<iostream>
#include<stack>

using namespace std;
int main(){
    stack<int> mystack;
    
    mystack.push(1);
    mystack.push(2);
    mystack.push(3);
    mystack.push(4);

    while(!mystack.empty()){
        cout << mystack.top() << " ";
        mystack.pop();
    }

    return 0;
}
```
```
4 3 2 1 
```
- Print the top value
- Pop (remove) it
- Repeat until it’s empty

While loop runs:
- Prints 4, pops it
- Prints 3, pops it
- Prints 2, pops it
- Prints 1, pops it

**🖨️ Output:**
```
4 3 2 1
```