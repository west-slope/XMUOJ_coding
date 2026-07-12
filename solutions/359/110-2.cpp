#include<iostream>
#include<string>
#include<cstring>
#include<algorithm>
#include<vector>
using namespace std;


int main()
{
    string arr[3];
    int a[3][100001]={0};
    cin>>arr[0];
    cin>>arr[1];
    int a0=arr[0].length(),a1=arr[1].length();
    int m=max(a0,a1);
    for(int i=0;i<a0;i++)
    {
        a[0][i]=arr[0][a0-i-1]-'0';
    }
    for(int i=0;i<a1;i++)
    {
        a[1][i]=arr[1][a1-i-1]-'0';
    }
    for(int i=0;i<m;i++)
    {
        a[2][i]+=a[0][i]+a[1][i];
        if(a[2][i]>=10)
        {
            a[2][i]-=10;
            a[2][i+1]++;
        }
    }
    for(int i=m;i>=0;i--)
    {
        if(i==m&&a[2][m]==0)continue;
        cout<<a[2][i];
    }
}