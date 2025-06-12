#include<iostream>
using namespace std;

class Box {
    int *content;
    public:
        Box(){
            content = new int();
        }

        Box(const Box &original_obj){
            content = new int(*(original_obj.content));
        }

        void setContent(int newVal){
            *content = newVal;
        }
        
        void display(){
            cout << *content << endl;
        }

        ~Box(){
            delete content;
        }
};

int main() {
    Box b1;
    b1.setContent(100);

    Box b2(b1);
    b1.setContent(200);

    b1.display();
    b2.display();
}