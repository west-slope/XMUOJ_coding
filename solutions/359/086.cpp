#include<iostream>
using namespace std;
#include<cstring>
int main()
{
    int n1,n2,m;
    cin>>n1>>n2>>m;
    int a[200]={0},b[200]={0};
    for(int i=0;i<n1;i++)
    {
        cin>>a[i];
    }
    for(int i=0;i<n2;i++)
    {
        cin>>b[i];
    }
    for(int i=0;i<m;i++)
    {
        b[i]=a[i];
    }
    for(int i=0;i<n2;i++)
    {
        cout<<b[i]<<" ";
    }
}