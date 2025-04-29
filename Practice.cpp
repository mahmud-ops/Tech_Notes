#include<iostream>
#include<string>

using namespace std;

class car{
    private:
        int insurance_number;
    public:
        car(){ 
            brand = "Toyota"; // Every car will be from toyota.
        }
        string brand;
        string color;
        int year;
        double price;
};

int main(){

    car c1; 
    car c2; 

    cout << c1.brand << '\n';
    cout << c2.brand << '\n';

    return 0;
}