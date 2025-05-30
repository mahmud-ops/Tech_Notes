#include<iostream>
#include<vector>

using namespace std;
int main(){

    vector <int> vec_1 = {1,2,3,4,5,6};

    cout << "Element : ";

    vec_1.erase(vec_1.begin() + 4); // + index

    for(int number : vec_1){
        cout << number << " ";
    }

    cout << '\n';
 
    

    return 0;
}