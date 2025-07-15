#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int x=n*2-1;
    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            cout<<" ";
        }
        for(int j=0;j<x-(2*i);j++){
            cout<<"*";
        }
        cout<<endl;
    }
}