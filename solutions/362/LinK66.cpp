//……
//数据范围较大
//二进制优化方法
#include<iostream>
using namespace std;

const int N=12010,M=2010;
int n,m;
int v[N],w[N];
int f[M];//体积<M

int main()
{
    cin>>n>>m;//物品数，容积
    int cnt=0;//分组的组别
    for(int i=1;i<=n;i++)
    {
        int a,b,s;
        cin>>a>>b>>s;//体积，价值，件数
        int k=1;//组别内的个数
        while(k<=s)
        {
            cnt++;
            v[cnt]=a*k;
            w[cnt]=b*k;
            s-=k;//s要减小
            k*=2;//组别个数增加
        }
        //剩余的一组
        if(s>0)
        {
            cnt++;
            v[cnt]=a*s;
            w[cnt]=b*s;
        }
    }
    n=cnt;

    for(int i=1;i<=n;i++)
        for(int j=m;j>=v[i];j--)
            f[j]=max(f[j],f[j-v[i]]+w[i]);
    cout<<f[m]<<endl;

    return 0;
}