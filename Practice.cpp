#include<iostream>
#include<iomanip>
#include<ctime>
#include<cstdlib>

using namespace std;
struct student
{
    string Name;
    string dept;
    int batch;
};

int main(){

    student student_1 , student_2 , student_3;

    student_1.Name = "Mahmud";
    student_1.dept = "CSE";
    student_1.batch = 16;

    student_2.Name = "Tanvir";
    student_2.dept = "EEE";
    student_2.batch = 16;

    student_3.Name = "Rahad";
    student_3.dept = "Civil";
    student_3.batch = 16;

    cout << student_1.Name << " , " << student_1.dept << " " << student_1.batch << "th batch.\n";  
    cout << student_2.Name << " , " << student_2.dept << " " << student_2.batch << "th batch.\n";  
    cout << student_3.Name << " , " << student_3.dept << " " << student_3.batch << "th batch.\n";  

    return 0;
}