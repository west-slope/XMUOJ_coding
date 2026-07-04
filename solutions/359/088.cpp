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
    
    for(int i=0;i<size;i++)
    {
        cout<<a[i]<<" ";
    }
}