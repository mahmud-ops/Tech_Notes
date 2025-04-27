#include<iostream>
#include<iomanip>
#include<ctime>
#include<cstdlib>

using namespace std;
template <typename T>// Define T
T Max(T x , T y){ // Replace with T
    return (x > y) ? x:y;
}

int main(){
    cout << Max(1,3) << '\n';
    cout << Max('a' , 'b') << '\n';
    cout << Max(1.1,3.5) << '\n';
    return 0;
}