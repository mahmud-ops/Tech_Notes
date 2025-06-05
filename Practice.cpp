#include<iostream>

using namespace std;

class sum{
    public:
        int add(int a, int b){
            return (a + b);
        }
        int add(int a, int b, int c){
            return (a + b + c);
        }
};

int main(){
    sum s1;
    cout << s1.add(1,2) << "\n";
    cout << s1.add(1,2,3) << "\n";

    return 0;
}