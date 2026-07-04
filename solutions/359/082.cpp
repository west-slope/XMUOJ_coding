#include<iostream>
using namespace std;

int max(int m,int n)
{
    if(m>n)return m;
    else return n;
}
int main()
{
    int m,n;
    cin>>m>>n;
    cout<<max(m,n);
}