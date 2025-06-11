#include<iostream>
using namespace std;

class Person {
    string name;
    string *hobbies_ptr;

    public:     
        Person(string name , string &hobby){
            this->name = name;
            string *hobbies_ptr = new string;
        }

        void display(){

        }
};

int main() {

    return 0;
}