#include<iostream>
using namespace std;

 int main(){
    int n;
    cout<<"Enter the no of effected rows"<<endl;
    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        int x=2*(i+1)-1;
        for(int j=0;j<x;j++){
            if(i==n-1){
                cout<<"*";
            }else{
                if(j==0||j==x-1){
                    cout<<"*";
                }else{
                    cout<<" ";
                }
            }
        }
        cout<<endl;
    }
 }