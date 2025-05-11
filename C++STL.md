# C++ Standard Template Library (STL)
## Vector
- Like a resizable array
- Stores elements contiguosly in memory like an array
- Automatically resize itself when we add more elements

`array with steroids + memory management for free`

**Methods**
| Method                            | What it does                                                        |
| --------------------------------- | ------------------------------------------------------------------- |
| `push_back(x)`                    | Adds `x` at the end of the vector                                   |
| `pop_back()`                      | Removes the last element                                            |
| `size()`                          | Number of elements currently in the vector                          |
| `empty()`                         | Checks if the vector is empty                                       |
| `clear()`                         | Deletes all elements from the vector                                |
| `front()` / `back()`              | Accesses first / last element                                       |
| `begin()` / `end()`               | Iterators to loop through the vector                                |
| `insert(pos, val)`                | Inserts `val` at a specific position                                |
| `erase(pos)` / `erase(start,end)` | Removes element(s) at position or in a range                        |
| `resize(n)` / `resize(n, val)`    | Changes the vector size, can auto-fill with a value                 |
| `at(i)`                           | Safe access to element at index `i` (throws error if out of bounds) |
| `[]`                              | Fast access to element at index `i` (no safety check)               |
| `assign(n, val)`                  | Replaces all elements with `n` copies of `val`                      |
| `swap(v2)`                        | Swaps content with another vector                                   |

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
> How many elements do you want to enter ?

> 5

> 1 2 5 3 2

> Max = 5

**⚠️ Tiny Suggestions:**
max = -10000; kinda sus 🤨
If you’re dealing with unpredictable values, you should use:
```cpp
int max = INT_MIN;  // from the header file <climits>
```
It makes your code more solid for all test cases, like negative-only input.

**Practice problem - 03**
- Input n numbers
- Store in vector
- Then input one value: target
- Remove all occurrences of that target value from the vector
- Print the final vector
```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<int> v;
    int n;
    cout << "How many elements ?\n";
    cin >> n;

    for(int i = 0 ; i < n ; i++){
        int num;
        cin >> num;
        v.push_back(num);
    }

    cout << "Original array : \n";
    for(int i = 0 ; i < n ; i++){
        cout << v[i] << " ";
    }

    cout << '\n';

    int target;
    cout << "Which element do you want to remove ?\n";
    cin >> target;
    vector<int> w;
    for(int i = 0 ; i < n ; i++){
        if(v[i] != target){
            w.push_back(v[i]);
        }
    }

    cout << "After removing " << target << "\n";
    for(int i = 0 ; i < w.size() ; i++){
        cout << w[i] << " ";
    }
    return 0;
}
```
<pre>
How many elements ?
5
1 2 3 2 1
Original array :
1 2 3 2 1
Which element do you want to remove ?
2
After removing 2
1 3 1
</pre>

## Pairs
**Why do we need this?**
Whenever you need to store two things together, like (name, score) or (x, y) coordinates — pair is your guy.
Think of it like:
```cpp
pair<int, string> p = {1, "Mahmud"}; // Like a mini struct with just two values.
```
```cpp
#include<iostream>
#include<utility> // For pair

using namespace std;
int main(){
    pair<string , int> student;

    student.first = "Mahmud";
    student.second = 20;

    cout << student.first << " is " << student.second << " years old.\n";
    return 0;
}
```
<pre>
Mahmud is 20 years old.
</pre>
**Nested pair**
```cpp
#include<iostream>
#include<utility> // For pair

using namespace std;
int main(){
    pair<string , pair <int , double>> student; // Pair inside pair

    student.first = "Mahmud";
    student.second.first = 20;
    student.second.second = 3.00;

    cout <<  student.first << " is " << student.second.first << " years old . " << "His gpa is : " << student.second.second << '\n';
    
    return 0;
}
```
<pre>
Mahmud is 20 years old . His gpa is : 3
</pre>

**Pair in vector**

**Practice problem - 01**
```cpp
#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<pair<int , string>> student;

    student.push_back({20 , "Mahmud"});
    student.push_back({22 , "Rahad"});
    student.push_back({21 , "Shrabon"});

    for(int i = 0 ; i < 3 ; i++){
        cout << student[i].second << " is " << student[i].first << " years old.\n";
    }

    return 0;
}
```
<pre>
Mahmud is 20 years old.
Rahad is 22 years old.
Shrabon is 21 years old.
</pre>

