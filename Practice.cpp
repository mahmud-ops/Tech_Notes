#include<iostream>
#include<iomanip>
#include<ctime>
#include<cstdlib>

enum day{saturday , sunday , monday , tuesday , wednesday , thursday , friday};
// saturday = 10 : Explicitly assigned the integer value.


using namespace std;
int main(){
    switch (saturday)
    {
    case 0:
        cout << "It's saturday\n";
        break;
    
    case 1:
        cout << "It's sunday\n";
        break;
    
    case 2:
        cout << "It's monday\n";
        break;
    
    case 3:
        cout << "It's tuesday\n";
        break;
    
    case 4:
        cout << "It's wednesday\n";
        break;
    
    case 5:
        cout << "It's thursday\n";
        break;
    
    case 6:
        cout << "It's friday\n";
        break;
    
    default:
        cout << "ERROR-404";
        break;
    }
    return 0;
}