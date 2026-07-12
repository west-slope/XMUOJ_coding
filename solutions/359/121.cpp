#include<iostream>
using namespace std;

int n,m,ss=0;
int l,r;
int a[100001],s[100001];
int main()
{
    cin>>n>>m;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        ss+=a[i];
        s[i]=ss;
    }
    while(cin>>l&&cin>>r)
    {
        cout<<s[r]-s[l-1];
        cout<<endl;
    }

}
