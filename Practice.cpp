#include<iostream>
#include<string>

using namespace std;

class parentClass{
    protected:
        string parent_surname;
    public:
        parentClass(string parent_surname){
            cout << "Parent constructor.\n";
            this -> parent_surname = parent_surname;
        }
};

class childClass : public parentClass {
        string firstName;
    public:
        childClass(string surName = "Alam"):parentClass(surName){
            cout << "Child constructor.\n";
        }

        void setName(){
            cout << "Enter first name : \n";
            cin >> firstName;
        }

        void showName(){
            cout << firstName << " " << parent_surname << endl;
        }
};

int main(){

    childClass child_1 , child_2 , child_3 , child_4;

    child_1.setName();
    child_2.setName();
    child_3.setName();
    child_4.setName();


    child_1.showName();
    child_2.showName();
    child_3.showName();
    child_4.showName();

    return 0;
}