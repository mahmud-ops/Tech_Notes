I know these stuff . so , I didn't write em down.
- Variables and basic data types
- Const
- Namespaces
- Typedef and type aliases
- Arithmetic operators
- Type conversion
- User input
- Useful math related functions
- Hypotenuse calculator practice program
- If statements
- Switches
- Console calculator program
- Ternary operator
- Logical operators
- Temperature conversion program
- Useful string methods in C++
- While loops
- Do while loops
- For loops
- Break & continue
- Nested loops
- Random number generator
- Random event generator
- Number guessing game
- User defined functions
- Return keyword
- Overloaded functions
- Variable scope
- Banking practice program
- ROCK PAPER SCISSORS game
- Arrays
- Sizeof() operator
- Iterate over an array
- Foreach loop
- Pass array to a function
- Search an array for an element
- Sort an array
- Fill() function
- Fill an array with user input
- Multidimensional arrays
- QUIZ GAME
- Memory addresses
- Pass by VALUE vs pass by REFERENCE
- Const parameters
- Credit card validator program
- Pointer

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
    // Safe to use the pointer
}

