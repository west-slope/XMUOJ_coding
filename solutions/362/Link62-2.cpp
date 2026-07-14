//从三角形底部网上计算
//每一个点计算下面两条路线的最大值
//优化版
#include<iostream>
#include<cstring>
#include<algorithm>

using namespace std;

const int N=1010;
int n;
int f[N][N];

int main()
{
    cin>>n;
    for(int i=1;i<=n;i++)
        for(int j=1;j<=i;j++)   
            cin>>f[i][j];

    for(int i=n-1;i;i--)
        for(int j=1;j<=i;j++)
            f[i][j]+=max(f[i+1][j],f[i+1][j+1]);//每一个点计算下面两条路线的最大值
    cout<<f[1][1]<<endl;


    return 0;
}