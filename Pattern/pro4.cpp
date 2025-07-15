#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"Enter the no of effected row"<<endl;
    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-1-i;j++){
            cout<<" ";
        }
        for(int j=0;j<2*(i+1)-1;j++){
            if(j%2==0){
                cout<<"*";
            }else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
}