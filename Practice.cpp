#include<iostream>
#include<iomanip>

using namespace std;

class student {
    private:

    public:
        student(string name, string sub , string dept){ // parameterised constructor
            this -> name = name;
            this -> sub = sub;
            this -> dept = dept;
        }

        //Custom copy constructor
        student(student &original_object){
            cout << "This is a custom copy constructor." << endl;
            this -> name = original_object.name; // Copies only the name from the original object.
        }
        
    
        void display(){
            cout << name << endl;
            cout << sub << endl;
            cout << dept << endl;
        }

    string name;
    string sub;
    string dept;
};

int main(){
    student s1("Mahmud" , "C++" , "CSE"); // Create an object with parameters.
    
    student s2(s1); // We can copy the properties of s1 just by passing s1 in s2.
    // Default copy constructor...copies all properties.
    
    s2.display(); //---> Same output as s1.display();

    return 0;
}