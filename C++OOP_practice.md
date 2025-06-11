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