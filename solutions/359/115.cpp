#include<iostream>
#include<string>

using namespace std;

int main()
{
    int n,m;
    int a[100001],b[100001];
    cin>>n>>m;
    for(int i=0;i<n;i++)cin>>a[i];
    for(int i=0;i<m;i++)cin>>b[i];

    int i=0,j=0;

    while(j<m)
    {
        if(a[i]==b[j])
        {
            i++,j++;
        }
        else j++;
    }
    if(i==n)cout<<"Yes"<<endl;
    else cout<<"No"<<endl;

    return 0;
}