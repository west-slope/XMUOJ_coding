#include<iostream>
using namespace std;
int n,m;
const int N=1007;
int v[N],w[N];
int f[N][N];

int main()
{
    cin>>n>>m;
    for(int i=1;i<=n;i++)cin>>v[i]>>w[i];//读取
    for(int i=1;i<=n;i++)//枚举物品
        for(int j=0;j<=m;j++)//枚举体积
        {
            f[i][j]=f[i-1][j];//不选第i个，取集合左边（假设i不行）
            if(j>=v[i])//剩余体积比第i个大，包含第i个的选法（如果i可以）
                f[i][j]=max(f[i][j],f[i-1][j-v[i]]+w[i]);//比较价值大小
        }
    cout<<f[n][m]<<endl;//循环后面背包放不下就会传递都到最后一个f[n][m]中；
}