#include<iostream>
#include<string>

using namespace std;

class characteristics_1{
    protected:
        string name;
        int age;
};

class characteristics_2{
    protected:
        int roll;
        string research_area;
};

class student : public characteristics_1 , characteristics_2 { // Inherit from characteristics_1 and characteristics_2
    public: 
        student(string name , int age , int roll , string research_area){
            this -> name = name;
            this -> age = age;
            this -> roll = roll;
            this -> research_area = research_area;

            cout << "\n";
            cout << "Name : " << name << endl;
            cout << "Age : " << age << endl;
            cout << "Roll : " << roll << endl;
            cout << "Research area : " << research_area << endl;
    }

    ~student(){
        cout << "END.\n";
    }
};

int main(){

    student s1("Mahmud" , 21 , 240137 , "Cybersecurity");
    student s2("Abdullah" , 21 , 240138 , "Machine learning");

    return 0;
}