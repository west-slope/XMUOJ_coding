#include<iostream>
using namespace std;
//只能合并相邻的两堆
const int N=310;
int n;
int s[N];
int f[N][N];

int main()
{
    cin>>n;
    for(int i=1;i<=n;i++)cin>>s[i],s[i]+=s[i-1];//存储前缀和

    for(int len=2;len<=n;len++)//合并长度从2开始枚举
    {
        for(int i=1;i+len-1<=n;i++)//i为区间左端点
        {
            int j=i+len-1;//j为区间右端点
            f[i][j]=1e8;//初始化最大值，要求最小值
            for(int k=i;k<j;k++)
            {
                f[i][j]=min(f[i][j],f[i][k]+f[k+1][j]+s[j]-s[i-1]);//分为i到k和k+1到j加上最后合并两堆的代价（为所有石头的和）
            }
        }
    }
    cout<<f[1][n]<<endl;

    return 0;
}