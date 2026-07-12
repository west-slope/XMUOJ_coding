#include<iostream>
#include<string>

using namespace std;

int a[100001],b[100001];
int n,m,k;
int main()
{
    cin>>n>>m>>k;
    for(int i=0;i<n;i++)cin>>a[i];
    for(int i=0;i<m;i++)cin>>b[i];

    int i=0,j=m-1,t=a[i]+b[j];

    while(t!=k)
    {
        if(t<k)i++;
        else if(t>k)j--;
        t=a[i]+b[j];
    }
    cout<<i<<" "<<j;
}