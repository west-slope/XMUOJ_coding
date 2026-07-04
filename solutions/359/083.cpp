#include<iostream>
using namespace std;

int abs(int n)
{
    if(n>=0)return n;
    else return -n;
}
int main()
{
    int m;
    cin>>m;
    cout<<abs(m);
}