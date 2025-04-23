#include<iomanip>
#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

using namespace std;

void drawBoard(char *spaces);
void playerMove(char player , char *spaces);
void computerMove(char computer , char *spaces);
bool winner(char player , char computer , char *spaces);
bool tie(char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)
    bool running = true;
    char player = 'X';
    char computer = 'O';
    
    while(running){
        computerMove(computer , spaces);
        if(winner(player , computer , spaces)){
            running = false;
            break;
        }
        
        drawBoard(spaces);
        
        
        playerMove(player , spaces);    
        if(winner(player , computer , spaces)){
            running = false;
            break;
        }
        else if(tie(spaces)){
            running = false;
            break;
        }
    }
    
    
        return 0;
    }
    
    void drawBoard(char *spaces){
    cout << '\n';
    cout << "     |     |     " << endl;
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
    cout << '\n';
}
void playerMove(char player , char *spaces){
    int number;
    cout << "Enter a number from 1 to 9 to place a marker.\n";
    cin >> number;
    
    while(true){
        if(number >= 1 && number <= 9){
            if(spaces[number - 1] == ' '){
                spaces[number - 1] = player;
                break;
            }
            else{
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cout << "That cell is occupied . Enter another number.\n";
                cout << "~~~~~~~~~~~~~~~~~~~~~~\n";
                cin >> number;
            }
        }
        else{
            cout << "From 1 to 9.\n";
        }
    }
    
}
void computerMove(char computer , char *spaces){
    
    srand(time(0));
    
    while(true){
        int positon = rand() % 9; //Generates a random number from 0 to 8
        if(spaces[positon] == ' '){
            spaces[positon] = computer;
            break;
        }
    }
    }
bool winner(char player , char computer , char *spaces){
    if(spaces[0] != ' ' && spaces[0] == spaces[1] && spaces[1] == spaces[2]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[3] != ' ' && spaces[3] == spaces[4] && spaces[4] == spaces[5]){
        spaces[3] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[6] != ' ' && spaces[6] == spaces[7] && spaces[7] == spaces[8]){
        spaces[6] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[0] != ' ' && spaces[0] == spaces[3] && spaces[3] == spaces[6]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[1] != ' ' && spaces[1] == spaces[4] && spaces[4] == spaces[7]){
        spaces[1] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[2] != ' ' && spaces[2] == spaces[5] && spaces[5] == spaces[8]){
        spaces[2] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[0] != ' ' && spaces[0] == spaces[4] && spaces[4] == spaces[8]){
        spaces[0] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else if(spaces[2] != ' ' && spaces[2] == spaces[4] && spaces[4] == spaces[6]){
        spaces[2] == player ? cout << "You win.\n" : cout << "You lose.\n";
    }
    else{
        return false;
    }

    return true;
}
    bool tie(char *spaces){
        for(int i = 0 ; i < 9 ; i++){
            if(spaces[i] == ' '){
                return false;
            }
        }
        cout << "It's a tie.\n";
        return true;
    }