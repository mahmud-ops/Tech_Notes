#include<iostream>
#include<vector>

using namespace std;
int main(){
    vector<pair<int , string>> student;

    student.push_back({20 , "Mahmud"});
    student.push_back({22 , "Rahad"});
    student.push_back({21 , "Shrabon"});

    for(int i = 0 ; i < 3 ; i++){
        cout << student[i].second << " is " << student[i].first << " years old.\n";
    }

    return 0;
}