#include<iostream>
using namespace std;

int factorial(int num);
int main(){
    int result = factorial(5);
    cout << result;
    return 0;
}

//Functon definition
int factorial(int num){

    if(num == 1 || num == 0){// Base case
        return 1;
    }
    else{
        return num * factorial(num - 1);// Recursive call
    }

}