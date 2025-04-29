## C++ Object oriented Programming

## classes and obejects

Sure thing. Here's the full note with the **basic format of a class** included — clean, simple, and in your writing style:

---

**Objects** are like the entities in the real world.  
**Classes** are the blueprints of the objects.

> **For example** Toyota made a blueprint (`class`) of cars. By using the blueprint they can build multiple cars (`object`).

A class can be a group of objects.

**Classes** are used as templates, so the developer doesn't need to write the same code multiple times.

---

### Properties and Methods

- **Properties** are the variables that hold data related to the object.  
  Example: In a `Car` class — `color`, `model`, `brand`, `speed` are properties.

- **Methods** are functions inside the class that define the behavior of the object.  
  Example: In a `Car` class — `startEngine()`, `accelerate()`, `brake()` are methods.

```cpp
#include<iostream>
#include<string>

using namespace std;

int main(){

    class class_name{
        // properties


        // methods
    };

    return 0;
}
```

**Example code**

```cpp
#include<iostream>
#include<string>

using namespace std;

class car{
    // properties or attributes
    string brand;
    string color;
    int year;
    double price;

    // methods or member functions
    string paintCar(car , string newColor){
        color = newColor;
    }
};

int main(){

    car c1; // Kinda like struct.

    c1.brand = "Toyota";
    c1.color = "Red";

    cout << c1.brand;

    return 0;
}
```
> Practice.cpp:23:8: error: 'std::__cxx11::string car::brand' is **private** within this context
     c1.brand = "Toyota";
        ^~~~~
Practice.cpp:8:12: note: declared **private** here
     string brand;
            ^~~~~
Practice.cpp:24:8: error: 'std::__cxx11::string car::color' is **private** within this context
     c1.color = "Red";
        ^~~~~
Practice.cpp:9:12: note: declared **private** here
     string color;
            ^~~~~
Practice.cpp:26:16: error: 'std::__cxx11::string car::brand' is **private** within this context
     cout << c1.brand;
                ^~~~~
Practice.cpp:8:12: note: declared **private** here
     string brand;
            ^~~~~
PS C:\Users\Abullah Al Mahmud\OneDrive\Desktop\Coding notes> 

Error : What is this `Private` thing ?? 🤷‍♂️
*Proceed to access modifiers*

---

## Access modifiers

**Private :** Data & methods are accessible `inside class`. (`Default`)

**Public :** Data & methods are accessible `to everyone`.

**Protected :** Data & methods are accessible inside class and to it's derived class.

**Previous code error fix**
```cpp
#include<iostream>
#include<string>

using namespace std;

class car{
    public: // Made the class public.
        string brand;
        string color;
        int year;
        double price;

    // methods or member functions
    string paintCar(car , string newColor){
        color = newColor;
    }
};

int main(){

    car c1; // Kinda like struct.

    c1.brand = "Toyota";
    c1.color = "Red";

    cout << c1.brand;

    return 0;
}
```
> Toyota

Even other classes can access a public class.

**Use of private access modifiers**
```cpp
#include<iostream>
#include<string>

using namespace std;

class car{
    private:
        int insurance_number; // The insurance number shouls be kept private.🤐
    public:
        string brand;
        string color;
        int year;
        double price;

    // methods or member functions
    string paintCar(car , string newColor){
        color = newColor;
    }
};

int main(){

    car c1; // Kinda like struct.

    c1.brand = "Toyota";
    c1.color = "Red";
    c1.insurance_number;

    cout << c1.brand;

    return 0;
}
```
> int car::insurance_number' is `private` within this context

**We can set and get the values of a private attribute..**
With the help of a public function.

```cpp
#include<iostream>
#include<string>

using namespace std;

class car{
    private:
        int insurance_number; // The insurance number shouls be kept private.🤐
    public:
        string brand;
        string color;
        int year;
        double price;

    // Public functions.
        // setter : Sets the insurance number.
        int setIns(int newIns){
            insurance_number = newIns; // This function is inside the same class . so it can access the private attribute.
        }

        // getter : gets the insurance number.
        int getIns(){
            cout << insurance_number << '\n';
        }
};

int main(){

    car c1; // Kinda like struct.

    c1.setIns(33155);

    c1.getIns(); // Accessed private value.
    return 0;
}
```

**Encapsulation**

Encapsulation is wraping up of data and member function in a single unit called `class`.

> so , Encapsulation is the process of making a class.

**Data hiding :** Putting a data or method in private access modifier.

## Constructors

Is an special method that gets ivoked automatically at time of object creation. Used for initialisation .

- Same name as class.
- No return type.
- Only called once (automatically) , at object creation.
- Memory allocation happens when object is called.

---

A class doesn't take up any memory space . But when an object is created , it takes up some space. 

**Constructor example**
```cpp
#include<iostream>
#include<string>

using namespace std;

class car{
    private:
        int insurance_number;
    public:
        car(){ // Constructor
            cout << "This? It's a constructor, bro.\n";
        }
        string brand;
        string color;
        int year;
        double price;

    string paintCar(car , string newColor){
        color = newColor;
    }

    int setIns(int newIns){
        insurance_number = newIns; 
    }

    int getIns(){
        cout << insurance_number << '\n';
    }
};

int main(){

    car c1; 
    car c2; 
    car c3; 

    c1.setIns(33155);
    c1.getIns();

    // Didn't call any method / function here.
    return 0;
}
```
> This? It's a constructor, bro. (still printed this [`constructor`]) for c1
> This? It's a constructor, bro. (still printed this [`constructor`]) for c2
> This? It's a constructor, bro. (still printed this [`constructor`]) for c3
> 33155

Each time an object is created the constructor gets evoked automatically.

**We can assign common values for an object in a constructor**
```cpp
#include<iostream>
#include<string>

using namespace std;

class car{
    private:
        int insurance_number;
    public:
        car(){ 
            brand = "Toyota"; // Every car will be from toyota.
        }
        string brand;
        string color;
        int year;
        double price;
};

int main(){

    car c1; 
    car c2; 

    // Didn't assign any value. Stull it's print 'Toyota' twice for c1 and c2.

    cout << c1.brand << '\n';
    cout << c2.brand << '\n';

    return 0;
}
```
> Toyota
> Toyota

---

There are 3 types of constructors
1. Non-parameterized constructor.
2. Parameterized constructor.
3. Copy constructor.