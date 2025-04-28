#include<iostream>
#include<iomanip>
#include<ctime>
#include<cstdlib>

using namespace std;

struct car
{
    string name;
    int year;
    string color;
};

void printCar(car &car); // Called by ref

int main(){
    car car1 , car2;
    
    car1.name = "Mustang";
    car1.year = 2023;
    car1.color = "Red";
    
    car2.name = "Supra";
    car2.year = 2024;
    car2.color = "Black";

    printCar(car1); 

    cout << '\n';

    printCar(car2); 
    
    return 0;
}
void printCar(car &car){
    cout << car.name << endl;
    cout << &car.name << endl;
    cout << &car << endl;
}

