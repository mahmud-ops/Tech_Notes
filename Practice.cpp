#include<iostream>
#include<iomanip>

using namespace std;
class costructor_practice{
    private: 

    public:

    costructor_practice(int a){ // Parameterised constructor
        cout << "Parameterised constructor created , a = " << a << '\n';
    }

    ~costructor_practice(){ // Destructor - Prevents memory leak.
        cout << "Constructor destroyed. \n";
    }
};
int main(){
    costructor_practice c1(5);
    return 0;
}