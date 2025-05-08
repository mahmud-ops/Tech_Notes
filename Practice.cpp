#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<int> v;
    int n;
    cout << "How many elements ?\n";
    cin >> n;

    for(int i = 0 ; i < n ; i++){
        int num;
        cin >> num;
        v.push_back(num);
    }

    cout << "Original array : \n";
    for(int i = 0 ; i < n ; i++){
        cout << v[i] << " ";
    }

    cout << '\n';

    int target;
    cout << "Which element do you want to remove ?\n";
    cin >> target;
    vector<int> w;
    for(int i = 0 ; i < n ; i++){
        if(v[i] != target){
            w.push_back(v[i]);
        }
    }

    cout << "After removing " << target << "\n";
    for(int i = 0 ; i < w.size() ; i++){
        cout << w[i] << " ";
    }
    return 0;
}