#include<iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the number of effected rows you wanted" << endl;
    cin >> n;

    for (int i = 0; i < n; i++) {
        // Left spaces before the first pyramid
        for (int j = 0; j < n - i - 1; j++) {
            cout << " ";
        }

        // Left pyramid (hollow)
        for (int j = 0; j < 2 * i + 1; j++) {
            if (j == 0 || j == 2 * i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }


        for (int j = 0; j < (2*n-1)-2*(i+1); j++) {
            cout << " ";
        }

        
        for (int j = 0; j < 2 * i + 1; j++) {
            
            if (i == n - 1 && j == 0) {
                continue;
            }

            if (j == 0 || j == 2 * i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }

        cout << endl;
    }

    return 0;
}
