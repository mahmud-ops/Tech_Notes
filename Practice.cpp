#include<iostream>
using namespace std;

class Player {
    int score;
    public:     
        Player(int score){
            this->score = score;
        }
    friend class Coach;
    // You don't need to declare the function here , by making a friend class you already gave 'Coach' all the access of 'Player'
};

class Coach {
    public:
    int boostScore(const Player &obj){
        return obj.score + 10;
    }
};
int main() {
    Player p1(90);
    Coach c1;
    cout << c1.boostScore(p1);
    
   return 0;
}