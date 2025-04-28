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
```

**Checking if the address was assigned in a pointer** 
```cpp
#include<iostream>
#include<iomanip>

using namespace std;
int main(){
    int *pointer = nullptr;
    int x = 128;

    if(pointer == nullptr){
        cout << "Address was not assigned.\n";
    }
    else{
        cout << "Address was assigned.\n";
    }
    return 0;
}

//output : Address was not assigned.
```
```cpp
#include<iostream>
#include<iomanip>

using namespace std;
int main(){
    int *pointer = nullptr;
    int x = 128;

    pointer = &x;//Assigned address

    if(pointer == nullptr){
        cout << "Address was not assigned.\n";
    }
    else{
        cout << "Address was assigned.\n";
    }
    return 0;
}

//output : Address was assigned.
```
*It's not safe to dereference a null pointer*

## Project 1 : Tic Tac Toe
[tutorial](https://youtu.be/-TkoO8Z07hI?t=16037)

**Step 1 : Draw the board**

```cpp
#include<iostream>
#include<iomanip>

using namespace std;
void drawBoard(char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)'
    bool running = true; // Keeping the game running.

    drawBoard(spaces);
    return 0;
}

void drawBoard(char *spaces){
    cout << "     |     |     " << endl; //5 spaces in each grid
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
}
```
If I put any value at a specific adress in the `spaces` array the value will show up in the grid.

`void drawBoard(char *spaces);` draws the grindlines , gets value at the address of `spaces` and has the ability to change it if we want.

**Step 2: Enter player's move**

1. Player will place `X` as an array element in `spaces` array at an specific index.
2. **Edge case :** Is the cell occupied ??

```cpp
#include<iostream>
#include<iomanip>

using namespace std;

void drawBoard(char *spaces);
void playerMove(char player , char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)
    bool running = true;
    char player = 'X';

    drawBoard(spaces);
    
    while(running){
        playerMove(player , spaces);
    }
    
    return 0;
}

void drawBoard(char *spaces){
    cout << "     |     |     " << endl;
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
}
void playerMove(char player , char *spaces){
    int number;
    cout << "Enter a number from 1 to 9 to place a marker.\n";
    cin >> number;

    if(number >= 1 && number <= 9){
        if(spaces[number - 1] == ' '){
            spaces[number - 1] = player;
            drawBoard(spaces);
        }
        else{
            cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
            cout << "That cell is occupied.\n";
            cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
        }
    }
    else{
        cout << "From 1 to 9.\n";
    }
}
```
**Step 3 : Computer's move**

- Computer will place at a random position. `(from 0 to 8)`
```cpp
#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

int main() {
    // Seed the random number generator
    srand(time(0));

    // Generate a random number between 0 and 8
    int random_number = rand() % 9;  // 9 is exclusive, so it generates numbers from 0 to 8

    std::cout << "Random number between 0 and 8: " << random_number << std::endl;

    return 0;
}
```
**Code**

Did some debugging.

```cpp
#include<iomanip>
#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

using namespace std;

void drawBoard(char *spaces);
void playerMove(char player , char *spaces);
void computerMove(char computer , char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)
    bool running = true;
    char player = 'X';
    char computer = 'O';
    
    while(running){
        computerMove(computer , spaces);
        drawBoard(spaces);
        playerMove(player , spaces);    
    }

    
    return 0;
}

void drawBoard(char *spaces){
    cout << "     |     |     " << endl;
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
}
void playerMove(char player , char *spaces){
    int number;
    cout << "Enter a number from 1 to 9 to place a marker.\n";
    cin >> number;
    
    while(true){
        if(number >= 1 && number <= 9){
            if(spaces[number - 1] == ' '){
                spaces[number - 1] = player;
                break;
            }
            else{
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cout << "That cell is occupied . Enter another number.\n";
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cin >> number;
            }
        }
        else{
            cout << "From 1 to 9.\n";
        }
    }
    
}
void computerMove(char computer , char *spaces){
    
    srand(time(0));
    
    while(true){
        int positon = rand() % 9; //Generates a random number from 0 to 8
        if(spaces[positon] == ' '){
            spaces[positon] = computer;
            break;
        }
    }
}
```

**Step 4 : Winner determiner**

Stop the program if someone wins

```cpp
#include<iomanip>
#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

using namespace std;

void drawBoard(char *spaces);
void playerMove(char player , char *spaces);
void computerMove(char computer , char *spaces);
bool winner(char player , char computer , char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)
    bool running = true;
    char player = 'X';
    char computer = 'O';
    
    while(running){
        computerMove(computer , spaces);
        if(winner(player , computer , spaces)){
            running = false;
        }

        drawBoard(spaces);

        
        playerMove(player , spaces);    
        if(winner(player , computer , spaces)){
            running = false;        }
    }
        
    
        return 0;
    }

void drawBoard(char *spaces){
    cout << '\n';
    cout << "     |     |     " << endl;
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
    cout << '\n';
}
void playerMove(char player , char *spaces){
    int number;
    cout << "Enter a number from 1 to 9 to place a marker.\n";
    cin >> number;
    
    while(true){
        if(number >= 1 && number <= 9){
            if(spaces[number - 1] == ' '){
                spaces[number - 1] = player;
                break;
            }
            else{
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cout << "That cell is occupied . Enter another number.\n";
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cin >> number;
            }
        }
        else{
            cout << "From 1 to 9.\n";
        }
    }
    
}
void computerMove(char computer , char *spaces){
    
    srand(time(0));
    
    while(true){
        int positon = rand() % 9; //Generates a random number from 0 to 8
        if(spaces[positon] == ' '){
            spaces[positon] = computer;
            break;
            }
        }
    }
bool winner(char player , char computer , char *spaces){
    if(spaces[0] != ' ' && spaces[0] == spaces[1] && spaces[1] == spaces[2]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[3] != ' ' && spaces[3] == spaces[4] && spaces[4] == spaces[5]){
        spaces[3] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[6] != ' ' && spaces[6] == spaces[7] && spaces[7] == spaces[8]){
        spaces[6] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[0] != ' ' && spaces[0] == spaces[3] && spaces[3] == spaces[6]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[1] != ' ' && spaces[1] == spaces[4] && spaces[4] == spaces[7]){
        spaces[1] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[2] != ' ' && spaces[2] == spaces[5] && spaces[5] == spaces[8]){
        spaces[2] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[0] != ' ' && spaces[0] == spaces[4] && spaces[4] == spaces[8]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[2] != ' ' && spaces[2] == spaces[4] && spaces[4] == spaces[6]){
        spaces[2] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else{
        return false;// No one won yet
    }

    return true; // Someone won.
}
```
**Step 5 : Check if it's a tie**

```cpp
#include<iomanip>
#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

using namespace std;

void drawBoard(char *spaces);
void playerMove(char player , char *spaces);
void computerMove(char computer , char *spaces);
bool winner(char player , char computer , char *spaces);
bool tie(char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)
    bool running = true;
    char player = 'X';
    char computer = 'O';
    
    while(running){
        computerMove(computer , spaces);
        if(winner(player , computer , spaces)){
            running = false;
            break;
        }
        
        drawBoard(spaces);
        
        
        playerMove(player , spaces);    
        if(winner(player , computer , spaces)){
            running = false;
            break;
        }
        else if(tie(spaces)){
            running = false;
            break;
        }
    }
    
    
        return 0;
    }
    
    void drawBoard(char *spaces){
    cout << '\n';
    cout << "     |     |     " << endl;
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
    cout << '\n';
}
void playerMove(char player , char *spaces){
    int number;
    cout << "Enter a number from 1 to 9 to place a marker.\n";
    cin >> number;
    
    while(true){
        if(number >= 1 && number <= 9){
            if(spaces[number - 1] == ' '){
                spaces[number - 1] = player;
                break;
            }
            else{
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cout << "That cell is occupied . Enter another number.\n";
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cin >> number;
            }
        }
        else{
            cout << "From 1 to 9.\n";
        }
    }
    
}
void computerMove(char computer , char *spaces){
    
    srand(time(0));
    
    while(true){
        int positon = rand() % 9; //Generates a random number from 0 to 8
        if(spaces[positon] == ' '){
            spaces[positon] = computer;
            break;
        }
    }
    }
bool winner(char player , char computer , char *spaces){
    if(spaces[0] != ' ' && spaces[0] == spaces[1] && spaces[1] == spaces[2]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[3] != ' ' && spaces[3] == spaces[4] && spaces[4] == spaces[5]){
        spaces[3] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[6] != ' ' && spaces[6] == spaces[7] && spaces[7] == spaces[8]){
        spaces[6] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[0] != ' ' && spaces[0] == spaces[3] && spaces[3] == spaces[6]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[1] != ' ' && spaces[1] == spaces[4] && spaces[4] == spaces[7]){
        spaces[1] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[2] != ' ' && spaces[2] == spaces[5] && spaces[5] == spaces[8]){
        spaces[2] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[0] != ' ' && spaces[0] == spaces[4] && spaces[4] == spaces[8]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[2] != ' ' && spaces[2] == spaces[4] && spaces[4] == spaces[6]){
        spaces[2] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else{
        return false;
    }

    return true;
}
    bool tie(char *spaces){
        for(int i = 0 ; i < 9 ; i++){
            if(spaces[i] == ' '){
                return false;
            }
        }
        cout << "It's a tie.\n";
        return true;
    }
```
## Dynamic memory 
Alright, imagine this:

You're a toddler playing with blocks. You have two toy boxes:

- 🧺 **Stack Box**: It’s small and already has spots for blocks when you start playing. It’s fast, but not very flexible.
- 🧳 **Heap Box**: It's bigger and more flexible. You can ask your parents (the computer) for more blocks anytime *while* you’re playing.

Now, **dynamic memory** is like saying:

> “Hey Mom! I don’t know how many blocks I’ll need yet... Can you give me more *when I ask*?”

That’s what the **`new`** keyword does in C++ — it asks the computer for space *while* the program is running, not before.

So if you don't know how many toys (data) you're gonna play with until later, you use dynamic memory to be chill and ready for anything.

👶💬 “Gimme moar blockz!”  
💻✨ “Here you go! From the heap!”

Wanna see that in toddler-code?

```cpp
int* blocks = new int[5]; // "I need 5 blocks!" at playtime
```

Boom. Dynamic. Just like your energy at bedtime 😅

Memory that is allocated after the program
is already compiled & running.
Use the `new` operator to allocate
memory in the heap rather than the stack


Useful when we don't know how much memory
we will need. Makes our programs more flexible,
especially when accepting user input.

```cpp
#include<iostream>    
#include<iomanip>     
#include<ctime>       
#include<cstdlib>   

using namespace std;

int main(){
    int size;

    // Ask user for the number of grades to input
    cin >> size;

    // Dynamically allocate memory to store 'size' number of grades
    char *pGrades = new char[size];

    // Take input for each grade
    for(int i = 0 ; i < size ; i ++){
        cout << "Enter grade no. " << i + 1 << " : ";
        cin >> pGrades[i];
    }

    // Print all the entered grades
    for(int i = 0 ; i < size ; i++){
        cout << pGrades[i] << " ";
    }
    cout << endl;

    // Free the dynamically allocated memory to avoid memory leaks****
    delete[] pGrades;

    return 0;
}
```
**🧨 What is a Memory Leak?**

A **memory leak** happens when your program grabs memory (using `new`) but **forgets to return it** (using `delete`). That memory stays reserved forever (until the program ends), but it’s not usable anymore.

Basically:

> You rented a room. You left.  
> But you **never returned the key**, so no one else can use it.  
> That room = wasted memory. 🙃

---

**🔍 Example in Code:**

```cpp
void leakExample() {
    int* p = new int[100];  // You booked 100 rooms 🏨
    // forgot to delete[] p;
    // boom 💥 memory leak
}
```

Every time that function runs, your system loses a chunk of RAM it can’t use anymore. Stack that up and your PC starts lagging harder than a 2008 laptop running GTA V 😬.

---

**📉 Why It's Bad:**
- Wastes memory (obviously).
- Slows down performance.
- Over time, can crash the program or even the system if it's really bad.
- In long-running programs (like games, servers, or robots), it’s a big no-no 🚫.

---

**✅ How to Avoid It:**
- **Always `delete` what you `new`.**
- Even better: use **smart pointers** like `std::unique_ptr` or `std::shared_ptr` in C++. They clean up for you like a good roommate.

---

**TL;DR:**

A **memory leak** is like leaving food in the fridge and forgetting about it. You don’t eat it, no one else eats it, it just rots there… forever. 🧀🧂

## Recursion 

**Recursion** - a programming technique where a function invokes itself from within to break a complex concept into a repeatable single step.

**(iterative vs recursive)**

**Advantages:**
- less code and is cleaner
- useful for sorting and searching algorithms

**Disadvantages:**
- uses more memory
- slower

**Iterative aproach**
```cpp
#include<iostream>
using namespace std;
void walk(int steps);

int main(){

    walk(10);

    return 0;
}

//function def
void walk(int steps){
    for(int i = 0 ; i < steps ; i ++){
        cout <<  "You took a step\n";
    }
}
```

**Recursive aproach**
```cpp
#include<iostream>
using namespace std;
void walk(int steps);

int main(){

    walk(10);
    return 0;
}

//function def
void walk(int steps){
    if(steps > 0){// Edge case
        cout << "You took a step.\n";
        walk(steps - 1); // Calling the function within itself;
    }
}
```
> Didn't get this line : **Why `steps - 1`**
```cpp
walk(steps - 1); // Calling the function within itself;
```
**Step by step execution**
<pre>
`walk(5)`
 └── calls walk(5-1) = `walk(4)`
      └── calls walk(4-1) = `walk(3)`
           └── calls walk(3-1) = `walk(2)`
                └── calls walk(2-1) = `walk(1)`
                     └── calls walk(1-1) = `walk(0)`
</pre>
---

If we don't use `steps - 1` instead of `steps` it'll be an infinite loop.

A recursive function stops at the base / edge case.

**Factorial**

`5! = 5*4*3*2*1 or 1*2*3*4*5`

`n! = n*(n-1)*(n-2)*(n-3)...*1`

**Iterative aproach**
 ```cpp
 #include<iostream>
using namespace std;

int factorial(int num);
int main(){
    int result = factorial(5);
    cout << result;
    return 0;
}

//Functon definition
int factorial(int num){
    int result = 1;// start from 1
    for(int i = 1 ; i <= num ; i++){
        result *= i; // 1*1*2*3*4*5
    }

    return result;
}
```
**Recursive aproach**
```cpp
#include<iostream>
using namespace std;

int factorial(int num);
int main(){
    int result = factorial(5);
    cout << result;
    return 0;
}

//Functon definition
int factorial(int num){

    if(num == 1 || num == 0){// Base case
        return 1;
    }
    else{
        return num * factorial(num - 1);// Recursive call
    }

}
```
**Step by step execution**
<pre>
factorial(5)
   └── returns 5 * factorial(4)
         └── returns 4 * factorial(3)
               └── returns 3 * factorial(2)
                     └── returns 2 * factorial(1)
                           └── returns 1 (base case)
</pre>

`5 * 4 * 3 * 2 * 1 = 120`

## Stack overflow

**Understanding Stack Overflow in Recursion**

In computer programming, a **stack overflow** occurs when the **call stack**—the memory structure that stores information about function calls—exceeds its limit. This happens when there are too many function calls on the stack, typically due to **infinite recursion**.

**What is the Call Stack?**

The **call stack** is a data structure that keeps track of active function calls. Every time a function is called, a new "frame" is added to the stack. Each frame holds information such as local variables and the return address for the function. Once the function finishes executing, its frame is removed from the stack.

**What Happens in Recursion?**

Recursion occurs when a function calls itself. In a well-implemented recursive function, each call progresses toward a **base case**, which is the condition that stops further recursion.

However, if a recursive function lacks a proper base case or the base case is never reached, the function will continue calling itself indefinitely. As a result, the call stack grows larger and larger with each recursive call.

**The Problem: Stack Overflow**

If the recursion doesn't stop, the call stack will eventually run out of space. This is where the term **stack overflow** comes from. The system's memory is exhausted, leading to an error, and the program crashes. This is a critical issue because it can cause the system to behave unpredictably or terminate prematurely.

**Example of Stack Overflow in Recursion**

Consider the following example of faulty recursion:

```cpp
void faultyFunction(int steps) {
    cout << "Recursion in progress...\n";
    faultyFunction(steps);  // No base case, recursion never stops
}
```

In this example, the function **`faultyFunction`** calls itself with the same value for `steps`, which means it will never reach a stopping condition. As each call adds a new frame to the stack, eventually, the system runs out of memory, leading to a stack overflow.

**Preventing Stack Overflow**

To avoid a stack overflow, every recursive function must have a **base case**—a condition under which the function stops calling itself. This ensures that recursion progresses toward completion and does not continue indefinitely.

Here’s an example of a properly functioning recursive function:

```cpp
void safeFunction(int steps) {
    if (steps <= 0) return;  // Base case: stop recursion
    cout << "Recursion in progress...\n";
    safeFunction(steps - 1);  // Recursive call with reduced steps
}
```

In this case, each recursive call reduces the value of `steps`, eventually reaching the base case (`steps <= 0`), at which point the recursion stops.


A **stack overflow** is the result of excessive function calls without a proper termination condition. Properly designed recursion ensures that each call progresses towards the base case, preventing the call stack from growing uncontrollably. By ensuring a proper base case and reducing the problem size with each recursive call, we can avoid stack overflow errors and ensure efficient use of system memory.

## Function templates
- describes what a function looks like.
- Can be used to generate as many overloaded functions
- as needed, each using different data types 1    

```cpp
int max(int x , int y){
    return (x > y) ? x:y;
}
int main(){
    cout << max(1,3) << '\n';
    return 0;
}
```
What if I want to make the function return float / double / chars ?

```cpp

int max(int x , int y){
    return (x > y) ? x:y;
}
double max(double x , double y){
    return (x > y) ? x:y;
}
char max(char x , char y){
    return (x > y) ? x:y;
}

int main(){
    cout << max(1,3) << '\n';
    return 0;
}
```
> Gotta make multiple functions for different data type .

There's a way to do it in one function....`Function templates`

- Replace the datatype with `T`
- Then define `T`

```cpp
template <typename T>// Define T
T Max(T x , T y){ // Replace with T
    return (x > y) ? x:y;
}

int main(){
    cout << Max(1,3) << '\n';
    cout << Max('a' , 'b') << '\n';
    cout << Max(1.1,3.5) << '\n';
    return 0;
}
```
**output**
<pre>
3
b
3.5
</pre>
**What if we compare between 2 datatypes**
```cpp
template <typename T>// Define T
T Max(T x , T y){ // Replace with T
    return (x > y) ? x:y;
}

int main(){
    cout << Max(1,3.5) << '\n';
    return 0;
}
```
> ERROR

Here `T` is defined as one datatype.

Which means this template only works with one datatype.

So , we have to define another datatype

```cpp
template <typename T , typename U>
```
```cpp
template <typename T , typename U>// Define T
T Max(T x , U y){ // Replace with T
    return (x > y) ? x:y;
}

int main(){
    cout << Max(1,3.5) << '\n';
    return 0;
}
```
> 3

But the maximum number is 3.5

Here , the template returns an integer , cuz here `T` refers to an integer and `U` a double.

> **T** Max(T x , U y)

To return a double we have to do it like this.
> U Max(T x , U y)

There's a better method to do it .
```cpp
auto Max(T x , U y)
```
This will return all kinds of datatype.
```cpp
template <typename T , typename U>// Define T
auto Max(T x , U y){ // Replace with T
    return (x > y) ? x:y;
}

int main(){
    cout << Max(1,3.5) << '\n';
    return 0;
}
```
> 3.5
## Structs
- A structure that groups related variables under one name.
- Structs can contain many different data types (string, integer, float, etc.).
- Variables in a struct are known as "members".
- Members can be accessed with the `.` Class Member Access Operator.
```cpp
// Define the structure
struct structure_name {
    data_type variable_1;
    data_type variable_2;
    data_type variable_3;
};

// Declare structure variables
structure_name member_1, member_2;

// Assign value to a variable inside a structure
member_1.variable_1 = value;
```
**Exampla code**
```cpp
using namespace std;
// Define the structure
struct student
{
    string Name;
    string dept;
    int batch;
};

int main(){
    
    // Declare structure variables
    student student_1 , student_2 , student_3;

    // Assign value to a variable inside a structure
    student_1.Name = "Mahmud";
    student_1.dept = "CSE";
    student_1.batch = 16;

    student_2.Name = "Tanvir";
    student_2.dept = "EEE";
    student_2.batch = 16;

    student_3.Name = "Rahad";
    student_3.dept = "Civil";
    student_3.batch = 16;

    cout << student_1.Name << " , " << student_1.dept << " " << student_1.batch << "th batch.\n";  
    cout << student_2.Name << " , " << student_2.dept << " " << student_2.batch << "th batch.\n";  
    cout << student_3.Name << " , " << student_3.dept << " " << student_3.batch << "th batch.\n";  

    return 0;
}
```
> Mahmud , CSE 16th batch.
> Tanvir , EEE 16th batch.
> Rahad , Civil 16th batch.

## Passing a struct in a function
```cpp
struct car
{
    string name;
    int year;
    string color;
};

void printCar(car car); // Structure as parameter

int main(){
    car car1 , car2;
    
    car1.name = "Mustang";
    car1.year = 2023;
    car1.color = "Red";
    
    car2.name = "Supra";
    car2.year = 2024;
    car2.color = "Black";

    printCar(car1); 
    
    cout << '\n';
    
    printCar(car2); 
    
    return 0;
}
void printCar(car car){
    cout << car.name << endl;
    cout << car.year << endl;
    cout << car.color << endl;
}
```
>Mustang
2023
Red
>
>Supra
2024
Black

**Let's work with some address**

```cpp
void printCar(car car){
    cout << car.name << endl;
    cout << &car.name << endl; // Address of the name of the car.
    cout << &car << endl; // Address of the car `struct`
}
```
>Mustang
0x61fea8      (Same address)
0x61fea8      (Same address)
>
>Supra
0x61fedc      (Same address)
0x61fedc      (Same address)

Here , The address of the name and the struct are the same.

Which means , the members and the structure are stored in the same address.

This function works with a copy of the structure.

**Let's `call by reference`**
```cpp
void printCar(car &car); // Called by ref

int main(){
    car car1 , car2;
    
    car1.name = "Mustang";
    car1.year = 2023;
    car1.color = "Red";
    
    car2.name = "Supra";
    car2.year = 2024;
    car2.color = "Black";

    printCar(car1); 

    cout << '\n';

    printCar(car2); 
    
    return 0;
}
void printCar(car &car){
    cout << car.name << endl;
    cout << &car.name << endl;
    cout << &car << endl;
}
```
> Same output. Nothing happened....**YET**

**Task : Paint the cars**
```cpp
struct car
{
    string name;
    int year;
    string color;
};

void printCar(car &car); // Called by ref
void paintCar(car &car , string color); // Passed the address of the car , Now the functon will go to the address and paint the car.      

int main(){
    car car1 , car2;
    
    car1.name = "Mustang";
    car1.year = 2023;
    car1.color = "Red";
    
    car2.name = "Supra";
    car2.year = 2024;
    car2.color = "Black";

    paintCar(car1 , "Silver"); // `color` parameter --> silver
    paintCar(car2 , "Cyan");
    printCar(car1); 

    cout << '\n';

    printCar(car2); 
    
    return 0;
}
void printCar(car &car){
    cout << car.name << endl;
    cout << car.color << endl;
}
void paintCar(car &car , string color){
    car.color = color; // The color of the car will be equal to the `color` parameter.
}       
```
The address of the car is given to the function and what to work with (`Color`) as parameters. Now the `paintCar()` function will go to the address and work with the color.

## enums ( enumerations )
A user defined data-type that consist of paired named-integers constants.
> Great , If you have a set of potential options.

```cpp
nt main(){
    string day = "saturday";

    switch (day)
    {
    case "saturday":
        cout << "It's saturday\n";
        break;
    
    default:
        cout << "ERROR-404";
        break;
    }
    return 0;
}
```
> Practice.cpp:10:16: error: switch quantity not an integer;

Switch does not work on strings.

TO make it work we have can use `enum`. It will convsider the strings as some paired-named integers. 

```cpp
enum day{saturday = 10, sunday = 20, monday = 30, tuesday = 40, wednesday = 50, thursday = 60, friday = 70};
// saturday = 10 : Explicitly assigned the integer value.


using namespace std;
int main(){

    switch (saturday)
    {
    case saturday:
        cout << "It's saturday\n";
        break;
    
    case sunday:
        cout << "It's sunday\n";
        break;
    
    case monday:
        cout << "It's monday\n";
        break;
    
    case tuesday:
        cout << "It's tuesday\n";
        break;
    
    case wednesday:
        cout << "It's wednesday\n";
        break;
    
    case thursday:
        cout << "It's thursday\n";
        break;
    
    case friday:
        cout << "It's friday\n";
        break;
    
    default:
        cout << "ERROR-404";
        break;
    }
    return 0;
}
```
> It's saturday.

**We can access the strings with it's asigned values**

```cpp
enum day{saturday = 10, sunday = 20, monday = 30, tuesday = 40, wednesday = 50, thursday = 60, friday = 70};
// saturday = 10 : Explicitly assigned the integer value.


using namespace std;
int main(){

    switch (saturday)
    {
    case 10:
        cout << "It's saturday\n";
        break;
    
    case 20:
        cout << "It's sunday\n";
        break;
    
    case 30:
        cout << "It's monday\n";
        break;
    
    case 40:
        cout << "It's tuesday\n";
        break;
    
    case 50:
        cout << "It's wednesday\n";
        break;
    
    case 60:
        cout << "It's thursday\n";
        break;
    
    case 70:
        cout << "It's friday\n";
        break;
    
    default:
        cout << "ERROR-404";
        break;
    }
    return 0;
}
```
> It's saturday.

**What if we don't asign the integers ?**

It'll be implicitly assigned as 0,1,2,3.....
```cpp
int main(){
    switch (saturday)
    {
    case 0:
        cout << "It's saturday\n";
        break;
    
    case 1:
        cout << "It's sunday\n";
        break;
    
    case 2:
        cout << "It's monday\n";
        break;
    
    case 3:
        cout << "It's tuesday\n";
        break;
    
    case 4:
        cout << "It's wednesday\n";
        break;
    
    case 5:
        cout << "It's thursday\n";
        break;
    
    case 6:
        cout << "It's friday\n";
        break;
    
    default:
        cout << "ERROR-404";
        break;
    }
    return 0;
}
```
> It's saturday.
