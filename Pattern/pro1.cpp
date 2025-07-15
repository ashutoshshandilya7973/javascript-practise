#include<iostream>
using namespace std;

int main(){
    int n;
    cout<<"enter the number of row you wanted";
    cin>>n;
    int x=n/2+1;
    for(int i=1;i<=x;i++){
       for(int j=0;j<i;j++){
          cout<<"*";
       }
       cout<<endl;
    }
    for(int i=0;i<n-x;i++){
        for(int j=0;j<n-x-i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}