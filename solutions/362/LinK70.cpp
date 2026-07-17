//数字三角形DP

//必须在(2N - 1)个单位时间穿越出去
//不可走回头路

#include <iostream>
using namespace std;

const int N=110,INF = 1e9;
int n;
int w[N][N];
int f[N][N];
int main() {
    ios::sync_with_stdio(false);//提升速度，禁用scsanf，printf
    cin.tie(nullptr);//cin 不再强制刷新 cout，进一步节省了时间

    cin>>n;
    for(int i=1;i<=n;i++)
        for(int j=1;j<=n;j++)
            cin>>w[i][j];
    for(int i=1;i<=n;i++)
        for(int j=1;j<=n;j++)
            if(i==1&&j==1)f[i][j]=w[i][j];//特判左上角
            else{
                f[i][j]=INF;//初始化
                if(i>1)f[i][j]=min(f[i][j],f[i-1][j]+w[i][j]);//只有不在第一行才可以从上面过来
                //第一列只能运算该式子
                if(j>1)f[i][j]=min(f[i][j],f[i][j-1]+w[i][j]);//只有不在第一列才可以从左边过来
                //第一行只能运算该式子
                //其余的两个均运算并比较大小
            }

            cout<<f[n][n]<<endl;

    return 0;
}
