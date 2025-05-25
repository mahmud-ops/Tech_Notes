#include<iostream>

using namespace std;
int main(){

    class Dec2Oct{
        double dec;

        public:
            Dec2Oct(double dec){
                this -> dec = dec;
                cout << "Decimal = " << dec << endl;
            }

            ~Dec2Oct(){
                dec = 0;
                cout << "Decimal = " << dec << endl;
            }

            double convert(){
                double octal = 0;

                int digit = dec;
                while (digit > 1)
                {
                   int digit = dec/10;
                   digit %= 8;
                   octal += digit*10;
                }
                
                cout << octal << endl;
            }

    };

    Dec2Oct num_1(123);
    num_1.convert();

    return 0;
}