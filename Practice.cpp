#include<iostream>
#include<iomanip>

using namespace std;

void drawBoard(char *spaces);
void playerMove(char player , char *spaces);

int main(){
    char spaces[9] = {' ',' ',' ',' ',' ',' ',' ',' ',' '};//9 empty spaces (Grids)
    bool running = true;
    char player = 'X';

    drawBoard(spaces);

    while(running){
        playerMove(player , spaces);
    }

    return 0;
}

void drawBoard(char *spaces){
    cout << "     |     |     " << endl;
    cout << " "<<spaces[0]<<"   |  "<<spaces[1]<<"  |  "<<spaces[2]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[3]<<"   |  "<<spaces[4]<<"  |  "<<spaces[5]<<"   " << endl;
    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;
    cout << " "<<spaces[6]<<"   |  "<<spaces[7]<<"  |  "<<spaces[8]<<"   " << endl;
    cout << "     |     |     " << endl;
}
void playerMove(char player , char *spaces){
    int number;
    cout << "Enter a number to place a marker.\n";
}