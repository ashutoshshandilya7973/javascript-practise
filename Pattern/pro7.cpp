#include<iostream>
using namespace std;

int combination(int a, int b) {
    
    int result = 1;
    for (int i = 1; i <= b; i++) {
        result *= a--;
        result /= i;
    }
    return result;
}

int main(){
    int n;
    cout<<"Enter the no of effected rows you want"<<endl;
    cin>>n;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        int x=2*(i+1)-1;
        int deno=i;
        for(int j=0;j<x;j++){
            if(j%2!=0){
                cout<<" ";
            }else{
                int temp=combination(i,deno);
                deno=deno-1;
                cout<<temp;
            }
        }
        cout<<endl;

    }
    return 0;
}