#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the no of rows effected"<<endl;
    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        for(int j=0;j<2*(i+1)-1;j++){
            if(j==0||j==(2*(i+1)-2)){
                cout<<"*";
            }else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
    for(int i=0;i<n-1;i++){
        for(int j=0;j<=i;j++){
            cout<<" ";
        }
        for(int j=0;j<2*(n-i-1)-1;j++){
            if(j==0||j==2*(n-i-1)-2){
                cout<<"*";
            }else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
}