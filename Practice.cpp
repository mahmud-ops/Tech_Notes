// Input n numbers
// Store them in a vector
// Find the largest number
// Print it out

#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<int> v;
    int n , num , max = -10000;

    cout << "How many elements do you want to enter ?\n";
    cin >> n;
    
    for(int i = 0 ; i < n ; i++){
        cin >> num;
        v.push_back(num);
        if(v[i] > max){
            max = v[i];
        }
    }

    cout << "Max = " << max;
    return 0;
}