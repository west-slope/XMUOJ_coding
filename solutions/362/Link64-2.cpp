#include<iostream>

using namespace std;
const int N=1010;
int f[N];
int v[N],w[N];//V为体积，W为价格

int main()
{
    int n,m;
    cin>>n>>m;
    for(int i=1;i<=n;i++)
        cin>>v[i]>>w[i];//存储数据
    for(int i=1;i<=n;i++)//枚举物品数
    {
        for(int j=v[i];j<=m;j++)//枚举体积数
        {
            f[j]=max(f[j],f[j-v[i]]+w[i]);
        }
    }

    cout<<f[m]<<endl;
}