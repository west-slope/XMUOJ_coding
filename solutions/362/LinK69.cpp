//数字三角形DP

//闫氏DP分析法
//状态分析
//状态表示


//优化后，优化思路同Link62数字三角形法2
#include<iostream>
#include<algorithm>

using namespace std;

const int N=1010;
int T,n,m;
int f[N][N];

int main()
{
    cin>>T;
    while(T--)
    {
        cin>>n>>m;
        for(int i=1;i<=n;i++)
            for(int j=1;j<=m;j++)
                cin>>f[i][j];

        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=m;j++)
            {
                f[i][j]+=max(f[i-1][j],f[i][j-1]);
            }
        }
        cout<<f[n][m]<<endl;
    }

    return 0;
}