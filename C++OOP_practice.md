## 🥇 OOP Practice Problem #1: *Class & Object Basics*

**Problem:**

Create a class called `Student` with the following:

* Private members: `name` (string), `age` (int)
* Public methods:

  * `setData(string, int)` — to set name and age
  * `display()` — to print the student’s name and age

**Task:**
In `main()`, create two `Student` objects and:

* Set different data for each using `setData()`
* Display both using `display()`

---

**Rules:**

* No constructors yet. This is just raw object + method combo.
* Don’t forget access modifiers.
```cpp
#include<iostream>
using namespace std;

class Student {
    string name;
    int age;
    public:
        void setData(string name, int age){
            this->name = name;
            this->age = age;
        }

        void display(){
            cout << "Name : " << name << endl;
            cout << "Age : " << age << endl;
            cout << endl;
        }
};

int main() {
    
    Student s1 , s2;
    
    s1.setData("Mahmud" , 21);
    s2.setData("Mohaimin" , 17);

    s1.display();
    s2.display();

    return 0;
}       
```
## 🥈 OOP Practice Problem #2: *Access Modifiers + Method Separation*

**Problem:**

Create a class called `BankAccount` with the following:

- 🛡️ **Private data members**:
  - `accountHolderName` (string)
  - `balance` (float)

- 🛠️ **Public methods**:
  - `setAccount(string, float)` — sets the account holder’s name and initial balance  
  - `deposit(float)` — adds money to balance  
  - `withdraw(float)` — deducts money *only if* balance is sufficient  
  - `showAccount()` — displays account holder name and current balance

---

**Rules:**

- If the withdraw amount is greater than the current balance, print `Insufficient Balance.` and don’t change the balance.
- Use proper access modifiers. Keep `balance` and `accountHolderName` private — anything else is illegal in OOP land 👮‍♂️
- Stick to basics: no constructors yet.

---

**Objective:**

- Practice **encapsulation** properly.
- Use conditionals inside class methods.
- Don’t let functions mess with private members directly — that's the whole point of OOP bruh.
```cpp
#include<iostream>
using namespace std;

class bankAccount {
    string accountHolderName;
    float balance;

public: 
    void setAccount(string accountHolderName, float balance) {
        this->accountHolderName = accountHolderName;
        this->balance = balance;
    }

    float deposit(float depositAmount) {
        balance += depositAmount;
        return balance;
    }

    float withdraw(float withdrawAmount) {
        if (withdrawAmount > balance) {
            cout << "Insufficient Balance.\n";
        } else {
            balance -= withdrawAmount;
        }
        return balance;
    }

    void showAccount() {
        cout << "Name : " << accountHolderName << endl;
        cout << "Balance : " << balance << " tk." << endl;
        cout << endl;
    }
};

int main() {
    bankAccount a1;
    a1.setAccount("Mahmud", 0); 
    a1.deposit(5);
    a1.deposit(5);
    a1.deposit(5);
    a1.deposit(5);

    a1.withdraw(30);

    a1.showAccount();

    return 0;
}
```
## 🥉 OOP Practice Problem #3: *Constructors - Non-Parameterized & Parameterized*

**Problem:**

Create a class called `Rectangle` that models a rectangle shape.

- 📦 **Private members:**
  - `length` (int)
  - `width` (int)

- ⚙️ **Public:**
  - A **non-parameterized constructor** that sets both `length` and `width` to `1`
  - A **parameterized constructor** that sets `length` and `width` to given values
  - A method `area()` that returns the area of the rectangle
  - A method `display()` that shows `length`, `width`, and area

---

**Task:**

In `main()`:
1. Create one object using the default constructor
2. Create another object using the parameterized constructor (`length = 10`, `width = 5`)
3. Call `display()` on both objects

---

**Rules:**

- Don't take input. Hardcode the values as instructed.
- Emphasize the difference in constructor use.
- Make sure both constructors are working perfectly.
- No setter methods allowed this time — let the constructors do the setup work.

---

**Objective:**

Master the **constructor overloading** concept and get comfy with default object setup.
```cpp
#include<iostream>
using namespace std;

class Rectangle {
    int length , width;
    public:
        Rectangle(){
            length = 1;
            width = 1;
        }

        Rectangle(int length , int width){
            this->length = length;
            this->width = width;
        }

        int area(){
            return length * width;
        }

        void display(){
            cout << "Length : " << length << "\n";
            cout << "Width : " << width << "\n";
            cout << "\n";
            cout << "Area : " << area() << "\n";
            cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
        }
};

int main() {

    Rectangle r1 , r2(10 , 5);

    r1.display();
    r2.display();

    return 0;
}
```

## 🥇 OOP Practice Problem #4: *Copy Constructor Basics*

**Problem:**

Create a class `Book` with:

- Private members:
  - `title` (string)
  - `pages` (int)

- Public:
  - A **parameterized constructor** to set `title` and `pages`
  - A **copy constructor** that creates a new `Book` by copying another `Book` object
  - A method `display()` to show the title and pages

---

**Task:**

In `main()`:

1. Create a `Book` object `b1` with title `"C++ Guide"` and pages `350`
2. Create another `Book` object `b2` by copying `b1` (using the copy constructor)
3. Call `display()` on both objects

---

**Rules:**

- Implement the copy constructor explicitly.
- Don’t use assignment (`=`) to copy objects in `main()`.
- Focus on how the copy constructor works under the hood.

---

**Objective:**

Understand how to write a copy constructor and why it’s useful.
```cpp
#include<iostream>
using namespace std;

class Book {
    string title;
    int pages;

    public:
        Book(string title , int pages){
            this->title = title;
            this->pages = pages;
        }

        Book(Book &original_obj){ 
            cout << "Custom copy constructor.\n";
            this->title = original_obj.title;
            this->pages = original_obj.pages;
        }

        void display(){
            cout << title << " has " << pages << " pages.\n";
        }
};

int main() {
    Book b1("ANSI C", 350) , b2(b1);
    b1.display();
    b2.display();
    return 0;
}
```
## 🥇 OOP Practice Problem #5: *Shallow vs Deep Copy*

**Problem:**

Create a class `Person` with:

- Private members:
  - `name` (string)
  - `hobbies` (string pointer)

- Public:
  - A **constructor** that takes a `string name` and a `string hobby`, and dynamically allocates memory for the hobby.
  - A **copy constructor**:
    - Do a **deep copy** so `hobbies` isn’t just pointing to the same memory.
  - A `display()` method to show the name and hobby.

---

**Task:**

In `main()`:

1. Create a `Person` object `p1` with `"Mahmud"` and `"Coding"`
2. Create `p2` using copy constructor (copy of `p1`)
3. Change `p1`'s hobby to `"Gaming"` (manually overwrite pointer value)
4. Display both objects — see if `p2`'s hobby stayed `"Coding"` or not

---

**Rules:**

- You **must** use dynamic memory for the `hobbies` string.
- Copy constructor must handle **deep copy**.
- Avoid memory leaks, use `delete` if needed (optional for now, destructor practice comes later).

---

**Objective:**

Grasp the difference between **shallow copy** and **deep copy**, and how pointers can mess up your day if you don't clone memory properly.
```cpp
#include <iostream>
using namespace std;

class Person {
    string name;
    string *hobbies_ptr;

public:
    // Constructor
    Person(string name, string hobby) {
        this->name = name;
        hobbies_ptr = new string(hobby); // Deep allocation
    }

    // Copy Constructor (Deep Copy)
    Person(const Person &p) {
        name = p.name;
        hobbies_ptr = new string(*(p.hobbies_ptr)); // Cloning the actual hobby string
    }

    // Display Method
    void display() {
        cout << "Name: " << name << endl;
        cout << "Hobby: " << *hobbies_ptr << endl;
    }

    // Destructor (to prevent memory leaks)
    ~Person() {
        delete hobbies_ptr;
    }

    // Function to change hobby manually
    void changeHobby(string newHobby) {
        *hobbies_ptr = newHobby;
    }
};

int main() {
    Person p1("Mahmud", "Coding");

    Person p2 = p1; // Copy constructor triggered here

    p1.changeHobby("Gaming"); // Changing p1's hobby

    cout << "--- p1 ---" << endl;
    p1.display();

    cout << "--- p2 ---" << endl;
    p2.display(); // p2 should still say "Coding"!

    return 0;
}
```
## 🥇 OOP Practice Problem #6: *Deep Copy with Integer Pointer*

**Problem:**

Create a class `Box` with:

- Private member:
  - `content` (an `int` pointer)

- Public:
  - A **constructor** that takes an `int` and dynamically allocates memory for `content`.
  - A **copy constructor** that performs a **deep copy**.
  - A method `setContent(int newVal)` to change the content value.
  - A method `display()` to print the current content value.

---

**Task:**

In `main()`:

1. Create a `Box` object `b1` with content `100`.
2. Create `b2` as a copy of `b1` using the copy constructor.
3. Change `b1`'s content to `200` using `setContent()`.
4. Display contents of both `b1` and `b2` to verify `b2` still has `100`.

---

**Rules:**

- You **must** use dynamic memory allocation for `content`.
- Copy constructor must do **deep copy**.
- Destructor is optional for now but recommended later to avoid memory leaks.

---

**Objective:**

Understand how deep copying pointer data avoids unwanted side effects in copies.

```cpp
#include<iostream>
using namespace std;

class Box {
    int *content;
    public:
        Box(){
            content = new int();
        }

        Box(const Box &original_obj){
            content = new int(*(original_obj.content));
        }

        void setContent(int newVal){
            *content = newVal;
        }
        
        void display(){
            cout << *content << endl;
        }

        ~Box(){
            delete content;
        }
};

int main() {
    Box b1;
    b1.setContent(100);

    Box b2(b1);
    b1.setContent(200);

    b1.display();
    b2.display();
}
```
## 🥇 OOP Practice Problem #7: *Deep Copy with Arrays*

**Problem:**

Create a class `Inventory` with:

- Private members:
  - `owner` (string)
  - `items` (int pointer)
  - `size` (int)

- Public:
  - A **constructor** that:
    - Takes `string owner` and `int sz`
    - Dynamically allocates an array of size `sz`
  - A **copy constructor**:
    - Deep copy the array into new memory
  - A `setItem(int index, int value)` method to set item values
  - A `display()` method to show all item values and owner name

---

**Task:**

In `main()`:

1. Create `Inventory inv1("Mahmud", 3)`  
2. Set items: 100, 200, 300  
3. Create a copy `inv2` using the copy constructor  
4. Modify `inv1`'s items to 111, 222, 333  
5. Display both — see if `inv2` is untouched (deep copy check)

---

**Rules:**

- Must use `new int[size]` to dynamically allocate array
- Copy constructor must create a **new array** and clone all values
- No STL arrays or vectors for now — just raw pointer arrays

---

**Objective:**

Get comfy with **deep copy for arrays**, because strings are just the warm-up. This is where you build muscle 💪
```cpp
#include<iostream>
using namespace std;

class Inventory {
    string owner;
    int *items;
    int size;

    public:
        Inventory(string owner , int sz){
            this->owner = owner;
            size = sz;
            items = new int[sz];
        }

        Inventory(const Inventory &original){
            size = original.size;
            owner = original.owner;
            items = new int[size];

            for(int i = 0 ; i < size ; i++){
                items[i] = original.items[i];
            }
        }

        void setItems(int index , int value){

            items[index] = value;
        }

        void display(){
            cout << "Owner : " << owner << endl;
            cout << "Size : " << size << endl;
            for(int i = 0 ; i < size ; i++){
                cout << items[i] << " ";
            }
            cout << '\n';
            cout << "------------------\n";
        }
};

int main() {
    Inventory inv1("Mahmud",3);
    
    inv1.setItems(0,100);
    inv1.setItems(1,200);
    inv1.setItems(2,300);
    
    Inventory inv2(inv1);
    
    inv1.setItems(0,111);
    inv1.setItems(1,222);
    inv1.setItems(2,333);

    inv1.display();
    inv2.display();

   return 0;
}
```

## 🧠 **Copy Constructor — Quick Definition**

> Special constructor that **copies** an object into a new one.

```cpp
ClassName(const ClassName &oldObj);
```

---

### ⚔️ **Shallow Copy (🚫 Bad)**

```cpp
items = original.items; // Just copying the pointer
```

* 🧨 Both objects share same memory
* 🛑 Changing one affects the other

---

### ✅ **Deep Copy (Do this!)**

```cpp
items = new int[size];  
for(int i = 0; i < size; i++)
    items[i] = original.items[i];
```

* ✔️ New memory
* ✔️ Each object is independent

---

### 🔁 **Why Same Name (`items`) Works**

* Inside each object, `items` is scoped.
* Same name ≠ same memory (if deep copy done right)

---

### 💀 Shallow Copy Analogy:

> Sharing 1 toothbrush 🪥 → one brushes, both gag.

### 😎 Deep Copy Analogy:

> Everyone gets their own toothbrush → peace & hygiene ✌️

---

### 🧪 Mini Test Code

```cpp
Inventory inv1("Mahmud", 3);
inv1.setItems(0, 100);

Inventory inv2(inv1); // COPY

inv1.setItems(0, 999);

inv1.display(); // 999
inv2.display(); // 100 (✅ if deep copy)
```

---

### 🧹 Next Up?

Destructor `~ClassName()` — the cleanup crew.

