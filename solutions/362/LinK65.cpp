//与完全背包区别，有个数限制
//数据范围较小
#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;

const int N=110;
int n,m;
int f[N];

int main()
{
    cin>>n>>m;//物品数，容积
    for(int i=0;i<n;i++)
    {
        int v,w,s;
        cin>>v>>w>>s;//体积，价值，件数
        for(int j=m;j>=0;j--)
        {
            for(int k=1;k<=s&&k*v<=j;k++)
                f[j]=max(f[j],f[j-k*v]+k*w);
        }
    }
    cout<<f[m]<<endl;

    return 0;
}