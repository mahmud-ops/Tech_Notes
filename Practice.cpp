#include<iostream>
#include<string>

using namespace std;

class student{ // Physics and math inherits from student
    protected:
        string name;
};

class physics : public student{
    public:
        int marks;
    void display(string name , int marks){
        this -> name = name;
        this -> marks = marks;

        cout << name << " got " << marks << " in physics.\n";
    }
};

class math : public student{
    public:
        int marks;
    
        void display(string name , int marks){
        this -> name = name;
        this -> marks = marks;

        cout << name << " got " << marks << " in math.\n";
    }
};

int main(){

    physics p1;
    p1.display("Mahmud" , 64);
    
    math m1;
    m1.display("Mahmud" , 75);

    return 0;
}