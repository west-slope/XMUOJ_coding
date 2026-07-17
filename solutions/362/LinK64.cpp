#include<iostream>

using namespace std;
const int N=1010;
int f[N][N];
int v[N],w[N];//V为体积，W为价格

int main()
{
    int n,m;
    cin>>n>>m;
    for(int i=1;i<=n;i++)
        cin>>v[i]>>w[i];//存储数据
    for(int i=1;i<=n;i++)//枚举物品数
    {
        for(int j=0;j<=m;j++)//枚举体积数
        {
            for(int k=0;k*v[i]<=j;k++)//同一个物品选的个数
            {
                f[i][j]=max(f[i][j],f[i-1][j-k*v[i]]+k*w[i]);
            }
        }
    }

    cout<<f[n][m]<<endl;
}