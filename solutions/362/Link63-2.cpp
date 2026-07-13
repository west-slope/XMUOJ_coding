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
    for(int i=1;i<=n;i++)//枚举物品数
        for(int j=0;j<=m;j++)//枚举体积
        {
            f[j]=f[j];//左半边（如果不选）
            if(j>=v[i])//剩余体积比第i个大，包含第i个的选法（如果可以选）
                f[j]=max(f[j],f[j-v[i]]+w[i]);
            //f[i][j]=max(f[i][j],f[i-1][j-v[i]]+w[i]);
        }
    cout<<f[n][m]<<endl;
}