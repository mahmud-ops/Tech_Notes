#include<iostream>
#include<utility>
#include<vector>
#include<climits>

using namespace std;
int main(){
    
    vector<pair<string , int>> student;
    int n;
    
    cout << "How many students are there ?\n";
    cin >> n;

    string name;
    int score;
    for(int i = 0 ; i < n ; i++){

        cout << "What's the name of student - " << i+1 << " ";
        cin >> name;

        cout << '\n';

        cout << "How much did he score ? : ";
        cin >> score;

        student.push_back({name , score});
        
    }
    
    int max_marks = INT_MIN;
    string topper;

    for(int i = 0 ; i < n ; i++){
        if(student[i].second > max_marks){
            max_marks = student[i].second;
            topper = student[i].first;
        }
    }

    cout << "Topper : " << topper << '\n';
    cout << "Score : " << max_marks << '\n';

    return 0;
}