#include<iostream>

using namespace std;

class Student{
    
    public:    
    string name;
    double *cgpaPtr;

        Student(string name ,double cgpa){
            this -> name = name;
            cgpaPtr = new double;
            *cgpaPtr = cgpa;
        }

        Student(Student &obj){ 
            this -> name = obj.name;
            cgpaPtr = new double; // New memory allocated
            *cgpaPtr = *(obj.cgpaPtr);
        }

        ~ Student(){
            delete cgpaPtr;
        }

        void display(){
            cout << "Name : " << name << endl;
            cout << "CGPA : " << *cgpaPtr << endl;
            cout << endl;
        }
};

int main(){

    Student s1("Mahmud" , 3.35) , s2(s1);

    s1.display();
    *(s2.cgpaPtr) = 3.45;
    s1.display();

    return 0;
}