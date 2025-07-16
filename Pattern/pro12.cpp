#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number of rows you want to make: ";
    cin >> n;
    int temp = 1;
    int sum = (n * (n + 1));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            cout << " ";
        }
        for (int j = 0; j < n - i; j++) {
            cout << temp<<" ";
            temp = temp + 1;
        } 

        sum = sum - (n - i);
        int x = sum + 1;
        for (int j = 0; j < n - i; j++) {
            cout << x<<" ";
            x = x + 1;
        }
        cout << endl;
    }
    return 0;
}
