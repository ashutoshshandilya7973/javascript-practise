#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number of rows you want" << endl;
    cin >> n;

    for(int i = 0; i < n; i++) {

        for(int j = 0; j < i + 1; j++) {
            if(j == 0 || j == i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }

        for(int j = 0; j < 2 * n - (i + 1) * 2; j++) {
            cout << " ";
        }

        for(int j = 0; j < i + 1; j++) {
            if(j == 0 || j == i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }

        cout << endl; 
    }
    

    return 0;
}
