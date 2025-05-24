#include<iostream>
#include<stack>

using namespace std;
int main(){

    stack<char> str;
    stack<char> str_rev;

    string input;
    cin >> input;


    for(char ch : input){
        str.push(ch);
    }

    while(!str.empty()){
        str_rev.push(str.top());
        cout << str_rev.top();
        str.pop();
    }

    

    return 0;
}