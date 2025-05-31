## Vector
- Dynamic array.
- Automatically resizes when new element is added.

**header inclusion. : `#include <vector>`**

```cpp
vector <int> numbers;
vector <data_type> variable_name;
```
**Application**
```cpp
vector <int> vec_1 = {1 , 2};
vector <int> vec_2(3,2);
vector <int> vec_3(vec_2);
```
**Functions (Time complexity : O(1))**
```cpp
vector <int> vec_1;
```
| Function / Iterator / others| What does it do                  | Example                                                          |
| -------------------- | --------------------------------------- | ---------------------------------------------------------------- |
| `push_back();`       | Adds new element to the back            | `vec_1.push_back(1)` ➡️ Adds `1` at the last index               |
| `pop_back();`        | Removes the last element                | `vec_1.pop_back()` ➡️ Removes last element                       |
| `emplace_back();`    | Constructs and adds element at the back | `vec_1.emplace_back(2)` ➡️ Adds `2` efficiently at the end       |
| `at()` or `[]`       | Accesses element at given index         | `vec_1.at(0)` or `vec_1[0]` ➡️ Gets first element                |
| `front()` & `back()` | Accesses first and last elements        | `vec_1.front()` ➡️ first element, `vec_1.back()` ➡️ last element |

**Size and capacity (Internal working of vector)**

When we declare a vector and use `push_back` to add an element, the size increases by one, and the capacity usually doubles.
> **Myth busted:** The capacity doesn’t actually increase dynamically in place. Instead, the old array is deleted, and a new array with double the capacity is created.

```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){

    vector <int> vec_1;

    cout << "Element : ";

    vec_1.push_back(1);
    vec_1.push_back(2); // Added 2 elements

    for(int number : vec_1){
        cout << number << " ";
    }

    cout << '\n';
 
    cout << "Size : " << vec_1.size() << '\n'; 
    cout << "Capacity : " << vec_1.capacity() << '\n';

    return 0;
}
```
```
Element : 1 2 
Size : 2
Capacity : 2
```

**What if i add another one ?**
```cpp
vec_1.push_back(1);
vec_1.push_back(2);
vec_1.push_back(3);
```
```
Element : 1 2 3 
Size : 3 (size in increased by 1)
Capacity : 4 (Capacity doubled)
```

**Let's add another one**

```cpp
vec_1.push_back(1);
vec_1.push_back(2);
vec_1.push_back(3);
vec_1.push_back(4);
```
```
Element : 1 2 3 4
Size : 4 (size in increased by 1)
Capacity : 4 (Capacity stays the same)
```
Capacity stays the same because the vector hasn’t reached its limit yet, so no new allocation is needed.

**Some more functions (Time complexity : O(n))**

|1|2|3|4|5|6|
|-|-|-|-|-|-|


|Function | What does it do ? | Example |
|-----|----|---|
| erase( ); | erases the value at the specified position (Not index , Accessed be iterators ) | `vec.erase(vec.begin())` ➡️ Removes the 1st element (1)|
| insert( ); |||

**What if I want to remove `5` ?**
```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){

    vector <int> vec_1 = {1,2,3,4,5,6};
 
    cout << "Element : ";

    vec_1.erase(vec_1.begin() + 4); // + index

    for(int number : vec_1){
        cout << number << " ";
    }

    cout << '\n';

    return 0;
}
```
|1|2|3|4|6|
|-|-|-|-|-|

**Now I want to erase from 1 to 4**
```cpp
vec_1.erase(vec_1.begin() , vec_1.begin() + 4); // ending range + (index + 1)
```
|6|
|-|

**Empty the array**
```cpp
vec_1.erase(vec_1.begin() , vec_1.end()); 
```