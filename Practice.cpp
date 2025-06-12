#include<iostream>
using namespace std;

class Inventory {
    string owner;
    int *items;
    int size;

    public:
        Inventory(string owner , int sz){
            this->owner = owner;
            size = sz;
            items = new int[sz];
        }

        Inventory(const Inventory &original){
            size = original.size;
            owner = original.owner;
            items = new int[size];

            for(int i = 0 ; i < size ; i++){
                items[i] = original.items[i];
            }
        }

        void setItems(int index , int value){

            items[index] = value;
        }

        void display(){
            cout << "Owner : " << owner << endl;
            cout << "Size : " << size << endl;
            for(int i = 0 ; i < size ; i++){
                cout << items[i] << " ";
            }
            cout << '\n';
            cout << "------------------\n";
        }
};

int main() {
    Inventory inv1("Mahmud",3);
    
    inv1.setItems(0,100);
    inv1.setItems(1,200);
    inv1.setItems(2,300);
    
    Inventory inv2(inv1);
    
    inv1.setItems(0,111);
    inv1.setItems(1,222);
    inv1.setItems(2,333);

    inv1.display();
    inv2.display();

   return 0;
}