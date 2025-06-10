#include<iostream>
using namespace std;

class firstClass {
    public:
    void incX(){
        static int x = 0; // Here
        cout << x++ << endl;
    }
};

int main() {
    firstClass f1;

    f1.incX();
    f1.incX();
    f1.incX();
    f1.incX();
    
   return 0;
}