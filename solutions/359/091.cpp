#include<iostream>
using namespace std;

int jiecheng(int n)
{
    int res=1;
    if(n==1)return 1;
    else res*=n*jiecheng(n-1);
    return res;
}
int main()
{
    int n;
    cin>>n;
    cout<<jiecheng(n);
}