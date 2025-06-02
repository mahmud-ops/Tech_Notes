#include<iostream>

using namespace std;

class person{
    protected:
        int classNum;
    public:
        person(int classNum){
            cout << "Parent constructor.\n";
        }
    
    void getInfo(){
        cout << "classNum : " << classNum << endl;
    }
};

class student : public person{
    int roll;
    string name;
    
    public:
        student(int roll , string name , int classNum): person(classNum){
            cout << "Child constructor.\n";
            this -> roll = roll;
            this -> name = name;
            this -> classNum = classNum;
        }
    
    void getInfo(){
        cout << "Name : " << name << endl;
        cout << "Class : " << classNum << endl;
        cout << "Roll : " << roll << endl;
        cout << endl;
    }
};
int main(){

    student s1( 37 , "Mahmud" , 10);
    student s2( 38 , "Rifat" , 10);
    student s3( 39 , "Rafi" , 10);
    student s4( 40 , "Ninad" , 10);

    s1.getInfo();
    s2.getInfo();
    s3.getInfo();
    s4.getInfo();

    return 0;
}