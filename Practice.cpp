#include<iostream>
#include<string>

using namespace std;

class car{
    private:
        int insurance_number; // The insurance number shouls be kept private.🤐
    public:
        string brand;
        string color;
        int year;
        double price;

    // methods or member functions
    string paintCar(car , string newColor){
        color = newColor;
    }

    // setter : Sets the insurance number.
    int setIns(int newIns){
        insurance_number = newIns; // This function is inside the same class . so it can access the private attribute.
    }

    // getter : gets the insurance number.
    int getIns(){
        cout << insurance_number << '\n';
    }
};

int main(){

    car c1; // Kinda like struct.

    c1.setIns(33155);

    c1.getIns(); // Accessed private value.
    return 0;
}