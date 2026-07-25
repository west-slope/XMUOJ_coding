//DP
//（1）状态表示
//     1.集合
//     2.属性
//（2）状态计算

//对于f(i,j)
//包含f(i-1,j-1),f(i-1,j),f(i,j-1),f(i,j)
//00,01,10,11
//00包含于01，10
#include<iostream>
using namespace std;

const int N=1010;
int n,m;
char a[N],b[N];
int f[N][N];

int main()
{
    cin>>n>>m>>a+1>>b+1;//字符串下标从1开始

    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=m;j++)
        {
            f[i][j]=max(f[i-1][j],f[i][j-1]);
            if(a[i]==b[j])f[i][j]=max(f[i][j],f[i-1][j-1]+1);//11,最后两个一定都选
        }
    }
    cout<<f[n][m]<<endl;
    return 0;
}

//总结：闫氏DP分析法