#include<iostream>
using namespace std;
#include<algorithm>
int a[200000];
int main()
{
    int n,l,r;
    cin>>n>>l>>r;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    sort(a+l,a+r+1);//左闭右开
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
}

    