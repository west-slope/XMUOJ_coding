#include<iostream>
using namespace std;

int feibo(int n)
{
    int a=1,b=1,res=0;
    if(n==1||n==2)return 1;
    res+=feibo(n-1)+feibo(n-2);
    return res;
}
int main()
{
    int n;
    cin>>n;
    cout<<feibo(n);
}