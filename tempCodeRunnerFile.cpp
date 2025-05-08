#include<iostream>
#include<utility> // For pair

using namespace std;
int main(){
    pair<string , pair <int , double>> student; // Pair inside pair

    student.first = "Mahmud";
    student.second.first = 20;
    student.second.second = 3.00;

    cout <<  student.first << " is " << student.second.first << " years old . " << "His gpa is : " << student.second.second << '\n';
    
    return 0;
}