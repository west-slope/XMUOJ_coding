#include<iostream>
using namespace std;
// 测试样例有误
int n,m,ss=0,num;
int l,r;
int a[100001],s[100001];
int main()
{
    cin>>n>>m;//差分
    for(int i=1;i<=n;i++){
        cin>>a[i];
        s[i]=a[i]-a[i-1];
    }
    while(m--)
    {
        cin>>l>>r>>num;
        s[l]+=num,s[r+1]-=num;
    }
    for(int i=1;i<=n;i++)
    {
        a[i]=a[i-1]+s[i];
        cout<<a[i]<<" ";
    }
    cout<<endl;
    return 0;

}
