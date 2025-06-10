#include<iostream>
#include<string>

using namespace std;

class parentClass {
    public:
    void show(){
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
    p1.show();
    
    childClass c1;
    c1.show();

    return 0;
}