#include<iostream>
using namespace std;
int main()
{
    int n,size,a[2000];
    cin>>n>>size;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(int i=size-1;i>=0;i--)
    {
        cout<<a[i]<<" ";
    }
    for(int i=size;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
}