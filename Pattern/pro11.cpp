#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the number of row you want"<<endl;
    cin>>n;
    for(int i=0;i<n;i++){
         for(int j=0;j<n-i-1;j++){
            cout<<" ";
         }
         for(int j=0;j<n;j++){
            if(i==0||i==n-1){
                cout<<"*";
            }else{
                if(j==0||j==n-1){
                    cout<<"*";
                }else{
                    cout<<" ";
                }
            }
         }
         cout<<endl;
    }
}