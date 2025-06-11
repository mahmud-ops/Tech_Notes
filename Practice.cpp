#include<iostream>
using namespace std;

class Rectangle {
    int length , width;
    public:
        Rectangle(){
            length = 1;
            width = 1;
        }

        Rectangle(int length , int width){
            this->length = length;
            this->width = width;
        }

        int area(){
            return length * width;
        }

        void display(){
            cout << "Length : " << length << "\n";
            cout << "Width : " << width << "\n";
            cout << "\n";
            cout << "Area : " << area() << "\n";
            cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
        }
};

int main() {
    Rectangle r1 , r2(10 , 5);
    r1.display();
    r2.display();
    return 0;
}