#include<iostream>
using namespace std;

int main()
{
    int m,n;
    cin>>m;
    while(m--){
        cin>>n;
        int count=0;
        while(n>0)
        {
            count+=n&1;
            n>>=1;
        }
        cout<<count<<" ";
    }
}