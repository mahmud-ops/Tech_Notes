#include<iostream>
#include<string>

using namespace std;

class parentClass {
    public:
        virtual void show(){
            cout << "Parent class.\n";
        }
};

class childClass : public parentClass {
    public:
        void show(){
            cout << "Child class.\n";
        }
};

int main(){

    parentClass p1;
    parentClass *ptr; 
    ptr = &p1; // Parent obj is stored

    ptr->show(); // Q. Which one will be called ?

    return 0;
}