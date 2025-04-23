## **Variables and basic data types**  
**Description:** Variables are containers for storing data, and data types define the type of data a variable can hold.  
**Example code:**  
```cpp
int num = 10;
float pi = 3.14;
```
**DSA:** Basic concept, often used in arrays or linked lists to define node values.

---

## **Const**  
**Description:** `const` is used to declare constant variables that cannot be modified after initialization.  
**Example code:**  
```cpp
const int MAX_LIMIT = 100;
```
**DSA:** Used to define fixed sizes in data structures like arrays.

---

## **Namespaces**  
**Description:** Namespaces are used to organize code and avoid name conflicts.  
**Example code:**  
```cpp
namespace MyNamespace {
    int x = 10;
}
```
**DSA:** Helps in modular programming, ensuring unique names in large projects.

---

## **Typedef and type aliases**  
**Description:** `typedef` or `using` allows creating custom data type names for readability.  
**Example code:**  
```cpp
typedef unsigned long long ull;
using ll = long long;
```
**DSA:** Often used in competitive programming for large integer types.

---

## **Arithmetic operators**  
**Description:** Arithmetic operators perform basic calculations like addition, subtraction, etc.  
**Example code:**  
```cpp
int sum = 5 + 3; 
int product = 5 * 3;
```
**DSA:** Fundamental for algorithmic calculations, especially in dynamic programming.

---

## **Type conversion**  
**Description:** Type conversion allows changing one data type to another.  
**Example code:**  
```cpp
int a = 5;
float b = (float)a;
```
**DSA:** Important when dealing with numeric algorithms and precision control.

---

## **User input**  
**Description:** Allows taking input from the user at runtime.  
**Example code:**  
```cpp
int age;
cin >> age;
```
**DSA:** Essential for interactive problems or when taking array or matrix inputs.

---

## **Useful math related functions**  
**Description:** C++ provides several built-in functions for mathematical operations.  
**Example code:**  
```cpp
#include <cmath>
double result = sqrt(16);
```
**DSA:** Helps with algorithms that require computations like sorting or optimization.

---

## **Hypotenuse calculator practice program**  
**Description:** Calculates the hypotenuse of a right triangle using Pythagoras’ theorem.  
**Example code:**  
```cpp
#include <cmath>
double hypotenuse = sqrt(pow(a, 2) + pow(b, 2));
```
**DSA:** Utilized in geometric algorithms or pathfinding problems.

---

## **If statements**  
**Description:** A basic conditional statement for decision-making.  
**Example code:**  
```cpp
if (x > y) {
    cout << "x is greater";
}
```
**DSA:** Used in control flow, often in searching algorithms.

---

## **Switches**  
**Description:** Used to select one of many code blocks to execute.  
**Example code:**  
```cpp
switch (day) {
    case 1:
        cout << "Monday";
        break;
}
```
**DSA:** Helps in managing multiple cases or scenarios efficiently in algorithms.

---

## **Console calculator program**  
**Description:** A simple program that performs basic calculations like add, subtract, etc.  
**Example code:**  
```cpp
int a, b;
cin >> a >> b;
cout << "Sum: " << a + b;
```
**DSA:** Not typically used in DSA but good for practice with basic operators.

---

## **Ternary operator**  
**Description:** A shorthand for if-else.  
**Example code:**  
```cpp
int result = (x > y) ? x : y;
```
**DSA:** Useful in simplifying code where conditionals are involved.

---

## **Logical operators**  
**Description:** Used for logical comparisons like AND, OR, and NOT.  
**Example code:**  
```cpp
if (x > 10 && y < 20) {
    cout << "Condition met";
}
```
**DSA:** Used in search, sorting, or recursive algorithms.

---

## **Temperature conversion program**  
**Description:** Converts between Celsius and Fahrenheit.  
**Example code:**  
```cpp
float celsius = (fahrenheit - 32) * 5 / 9;
```
**DSA:** Not directly related, but useful in practical coding.

---

## **Useful string methods in C++**  
**Description:** C++ provides several built-in functions to manipulate strings.  
**Example code:**  
```cpp
string str = "Hello";
cout << str.length();
```
**DSA:** Useful in string matching or search algorithms.

---

## **While loops**  
**Description:** Repeats a block of code while a condition is true.  
**Example code:**  
```cpp
while (x < 10) {
    cout << x;
    x++;
}
```
**DSA:** Essential in iterative algorithms.

---

## **Do while loops**  
**Description:** Similar to `while` loop but always runs at least once.  
**Example code:**  
```cpp
do {
    cout << x;
    x++;
} while (x < 10);
```
**DSA:** Used when a loop must execute at least once.

---

## **For loops**  
**Description:** Used to iterate over a block of code a fixed number of times.  
**Example code:**  
```cpp
for (int i = 0; i < 10; i++) {
    cout << i;
}
```
**DSA:** Extremely common in array-based and iterative algorithms.

---

## **Break & continue**  
**Description:** `break` exits a loop early, `continue` skips the current iteration.  
**Example code:**  
```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
}
```
**DSA:** Helps optimize loops in algorithms.

---

## **Nested loops**  
**Description:** Loops inside another loop, commonly used for multi-dimensional problems.  
**Example code:**  
```cpp
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        cout << i << " " << j << endl;
    }
}
```
**DSA:** Often used in matrix-based algorithms.

---

## **Random number generator**  
**Description:** Generates random numbers within a range.  
**Example code:**  
```cpp
#include <cstdlib>
int num = rand() % 100; 
```
**DSA:** Useful for randomized algorithms or simulations.

---

## **Random event generator**  
**Description:** Generates a random event based on probabilities.  
**Example code:**  
```cpp
if (rand() % 2 == 0) cout << "Heads";
else cout << "Tails";
```
**DSA:** Used in game theory or probabilistic algorithms.

---

## **Number guessing game**  
**Description:** A simple game to guess a randomly generated number.  
**Example code:**  
```cpp
int guess;
cin >> guess;
if (guess == num) cout << "Correct!";
```
**DSA:** A basic example of conditional checks and loops.

---

## **User defined functions**  
**Description:** Functions created by the user to perform specific tasks.  
**Example code:**  
```cpp
int add(int a, int b) {
    return a + b;
}
```
**DSA:** Central to breaking down problems and creating modular code.

---

## **Return keyword**  
**Description:** Returns a value from a function.  
**Example code:**  
```cpp
int sum() {
    return 5 + 5;
}
```
**DSA:** Used in algorithms to return results from recursive functions.

---

## **Overloaded functions**  
**Description:** Functions with the same name but different parameters.  
**Example code:**  
```cpp
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
```
**DSA:** Useful in creating cleaner and more flexible algorithms.

---

## **Variable scope**  
**Description:** Defines the region in which a variable can be accessed.  
**Example code:**  
```cpp
int x = 10;
if (x > 5) {
    int y = 20;
}
```
**DSA:** Important for understanding memory and recursion.

---

## **Banking practice program**  
**Description:** A simple program to simulate banking operations like deposits and withdrawals.  
**Example code:**  
```cpp
void deposit(double amount) {
    balance += amount;
}
```
**DSA:** Basic structure for data management programs.

---

## **ROCK PAPER SCISSORS game**  
**Description:** A game where the player competes against the computer.  
**Example code:**  
```cpp
if (user_choice == comp_choice) cout << "It's a tie!";
```
**DSA:** Simple application of conditional logic.

---

## **Arrays**  
**Description:** A collection of elements of the same type.  
**Example code:**  
```cpp
int arr[5] = {1, 2, 3, 4, 5};
```
**DSA:** Foundational in many data structures like heaps and dynamic programming.

---

## **Sizeof() operator**  
**Description:** Returns the size of a variable or data type.  
**Example code:**  
```cpp
cout << sizeof(int);
```
**DSA:** Useful in memory management.

---

## **Iterate over an array**  
**Description:** Looping through elements of an array.  
**Example code:**  
```cpp
for (int i = 0; i < 5; i++) {
    cout << arr[i];
}
```
**DSA:** Core to most algorithms dealing with arrays.

---

## **Foreach loop**  
**Description:** A simpler way to iterate over containers in C++.  
**Example code:**  
```cpp
for (int i : arr) {
    cout << i;
}
```
**DSA:** Used in range-based loops for arrays and vectors.

---

## **Pass array to a function**  
**Description:** Passing an entire array to a function.  
**Example code:**  
```cpp
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) cout << arr[i];
}
```
**DSA:** Essential for handling large datasets in algorithms.

---

## **Search an array for an element**  
**Description:** Searching for an element in an array.  
**Example code:**  
```cpp
for (int i = 0; i < 5; i++) {
    if (arr[i] == target) cout << "Found!";
}
```
**DSA:** Used in linear search algorithms.

---

## **Sort an array**  
**Description:** Rearranging array elements in a particular order.  
**Example code:**  
```cpp
sort(arr, arr + n);
```
**DSA:** Core in sorting algorithms like quicksort and mergesort.

---

## **Fill() function**  
**Description:** Fills a range with a particular value.  


**Example code:**  
```cpp
fill(arr, arr + n, 0);
```
**DSA:** Useful in resetting values or initializing arrays.

---

## **Fill an array with user input**  
**Description:** Taking user input to fill an array.  
**Example code:**  
```cpp
for (int i = 0; i < n; i++) {
    cin >> arr[i];
}
```
**DSA:** Often used in data entry and processing algorithms.

---

## **Multidimensional arrays**  
**Description:** Arrays of arrays, often used in matrix representation.  
**Example code:**  
```cpp
int matrix[2][2] = {{1, 2}, {3, 4}};
```
**DSA:** Key in algorithms like matrix multiplication or dynamic programming.

---

## **QUIZ GAME**  
**Description:** A game that asks questions and checks for correct answers.  
**Example code:**  
```cpp
if (answer == correct) cout << "Correct!";
```
**DSA:** Interactive programming, focusing on decision-making and loops.

---

## **Memory addresses**  
**Description:** Each variable in memory has a unique address.  
**Example code:**  
```cpp
cout << &x; // Address of x
```
**DSA:** Vital in pointer-based data structures like linked lists.

---

## **Pass by VALUE vs pass by REFERENCE**  
**Description:** Determines whether arguments are passed by value or by reference.  
**Example code:**  
```cpp
void func(int a) { // pass by value
    a = 10;
}

void func(int &a) { // pass by reference
    a = 10;
}
```
**DSA:** Impacts performance and memory usage in algorithms.

---

## **Const parameters**  
**Description:** Prevents modification of passed parameters.  
**Example code:**  
```cpp
void func(const int x) { /* x cannot be modified */ }
```
**DSA:** Used in large algorithms to preserve input integrity.

---

## **Credit card validator program**  
**Description:** Validates credit card numbers using algorithms like Luhn’s.  
**Example code:**  
```cpp
bool isValid(int cardNumber) { /* Luhn’s Algorithm */ }
```
**DSA:** A great example of using validation algorithms.

---

## **Pointer**  
**Description:** A variable that stores the memory address of another variable.  
**Example code:**  
```cpp
int *ptr = &num;
```
**DSA:** Essential for data structures like linked lists and trees.

## Null pointers
**Null Pointers: A Quick Overview**

A **null pointer** is a special value that a pointer holds to indicate it is not pointing to any valid memory or object. It's like saying, "Hey, I don’t know where to go yet!"

In programming, when you use a pointer to store the address of a variable, a **null pointer** tells the program, "There is no address stored here right now."

---

**FAQ: Null Pointers**

**1. What is a null pointer?**  
A **null pointer** is a pointer that does not point to any valid memory location or object. It's like saying "I don't point to anything yet!"

**2. Does a null pointer take up memory?**  
Yes, even though a null pointer doesn’t point to anything useful, it still takes up memory because it is a variable. The memory required is the size needed to store the pointer itself (e.g., 4 or 8 bytes depending on the system).

**3. What happens if I try to use a null pointer?**  
Trying to access or use a null pointer (called **dereferencing**) can cause errors, like crashes or undefined behavior. The program gets confused because it’s trying to use something that points to nothing.

**4. How do I avoid null pointer errors?**  
Always check if the pointer is `null` before you try to use it:

```cpp
if (pointer != NULL) {
    
}

