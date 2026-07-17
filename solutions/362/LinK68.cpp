#include<iostream>
#include<cstring>
#include<algorithm>

using namespace std;

const int N=1007;
int n,m;
int f[N];

int main()
{
    cin>>n>>m;
    //枚举物品
    for(int i=0;i<n;i++)
    {
        int v,w,s;
        cin>>v>>w>>s;
        //根据s分成三类处理
        if(!s)//完全背包
        {
            for(int j=v;j<=m;j++)//枚举体积
                f[j]=max(f[j],f[j-v]+w);
        }
        else 
        {
            if(s==-1)s=1;//转换为多重背包物品只有1件的求解方法
            //解多重背包的问题，采用二进制优化
            for(int k=1;k<=s;k*=2)
            {
                for(int j=m;j>=k*v;j--)
                    f[j]=max(f[j],f[j-k*v]+k*w);
                s-=k;
            }
            if(s)
            {
                for(int j=m;j>=s*v;j--)
                    f[j]=max(f[j],f[j-s*v]+s*w);
            }
        }
    }
    cout<<f[m]<<endl;
    return 0;


}