# C++ Standard Template Library (STL)
## Vector
- Like a resizable array
- Stores elements contiguosly in memory like an array
- Automatically resize itself when we add more elements

`array with steroids + memory management for free`

**Methods**

| Method               | What it does                             |
| -------------------- | ---------------------------------------- |
| `push_back(x)`       | Add `x` at the end                       |
| `pop_back()`         | Removes last element                     |
| `size()`             | Returns number of elements               |
| `empty()`            | Checks if vector is empty                |
| `clear()`            | Removes all elements                     |
| `front()` / `back()` | First / Last element                     |
| `begin()` / `end()`  | Iterator to first / past-the-end element |

**Practice problem - 01**
- Ask the user to enter how many numbers they want to input (say n)
- Let them enter n numbers
- Store these numbers in a vector
- Calculate the sum of all numbers and print it
```cpp
#include<iostream>
#include<vector> // For using vector

using namespace std;
int main(){
    vector<int> v;
    int n , num;

    cout << "Enter size : ";
    cin >> n;

    for(int i = 0 ; i < n ; i++){
        cin >> num;
        v.push_back(num);
    }
    int sum = 0;
    for(int j = 0 ; j < n ; j++){
        sum += v[j];
    }

    cout << "Sum : " << sum;

    return 0;
}
```
> Enter size : 5
> 1 2 3 4 5
> Sum : 15

**Practice problem - 02**
- Input n numbers
- Store them in a vector
- Find the largest number
- Print it out

```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<int> v;
    int n , num , max = -10000;

    cout << "How many elements do you want to enter ?\n";
    cin >> n;
    
    for(int i = 0 ; i < n ; i++){
        cin >> num;
        v.push_back(num);
        if(v[i] > max){
            max = v[i];
        }
    }

    cout << "Max = " << max;
    return 0;
}
```