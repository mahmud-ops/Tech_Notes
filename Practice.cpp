#include<iostream>
#include<iomanip>
#include<ctime>
#include<cstdlib>

using namespace std;
int main(){
    int size;
    cout << "Enter size : " << '\n';
    
    char *pNum;
    cin >> size;
    pNum = new char[size];

    for(int i = 0 ; i < size ; i++){
        cout << "Enter element no. " << i+1 << ": ";
        cin >> pNum[i];
    }

    for(int i = 0 ; i < size ; i++){
        cout << pNum[i] << " ";
    }
 
    delete[] pNum;
    
    return 0;
}