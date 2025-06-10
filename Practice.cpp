#include<iostream>
using namespace std;

class firstClass {
    public:
    firstClass(){
        cout << "Constructor.\n";
    }
    ~firstClass(){
        cout << "Destructor.\n";
    }
};

int main() {
    if(true){
        static firstClass f1;    
    }
    cout << "Program ended.\n";
   return 0;
}