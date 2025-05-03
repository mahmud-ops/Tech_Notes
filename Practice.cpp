#include<iostream>
#include<iomanip>

using namespace std;

class student {
    private:

    public:
        student(string n , string sub , string dept){ // parameterised constructor
            name = n;
            subject = sub;
            department = dept;
        }
    
        void display(){
            cout << name << endl;
            cout << subject << endl;
            cout << department << endl;
        }

    string name;
    string subject;
    string department;
};

int main(){
    student s1("Mahmud" , "C++" , "CSE"); // Create an object with parameters.
    s1.display();

    return 0;
}