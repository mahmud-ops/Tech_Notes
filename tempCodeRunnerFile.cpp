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
};

int main(){

    gradStudent s1;

    s1.name = "Mahmud";
    s1.age = 21;

    return 0;
}