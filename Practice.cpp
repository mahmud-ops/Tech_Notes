#include<iostream>
#include<iomanip>

using namespace std;
int main(){
    int size;
    cout << "Enter the size of the array : \n";
    cin >> size;

    int *array = new int[size];
    int i;
    for(i = 0 ; i < size ; i++){
        cin >> array[i];
    }

    for(i = 0 ; i < size ; i++){
        cout << array[i] << " ";
    }
    cout << endl;
    cout << "Length : " << i;

    delete[] array;

    return 0;
}