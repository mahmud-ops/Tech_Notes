#include<iostream>
#include<string>

using namespace std;

class person{
    protected:
        string name;
        int age;
};

class student : public person{ // student inherits the name and age from person class
    protected:
        int roll;
};

class gradStudent : public student{ // gradStudent inherits the roll from student class
    public:
        string research_area;

    void setValue(string name , int age , int roll , string research_area){
        this -> name = name;
        this -> age = age;
        this -> roll = roll;
        this -> research_area = research_area;
    }

    void display(){
        cout << "Name : " << name << "\n";
        cout << "Age : " << age << "\n";
        cout << "Roll : " << roll << "\n";
        cout << "Research area : " << research_area << "\n";
    }
};

int main(){

    gradStudent s1;
    s1.setValue("Mahmud" , 21 , 240137 , "NULL");
    s1.display();

    return 0;
}