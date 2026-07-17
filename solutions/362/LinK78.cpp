#include<iostream>
#include<cstring>
#include<cstdio>
#include<algorithm>
using namespace std;


typedef pair<int, int>PII;
const int N=50;

int n;
int w[N];
unsigned f[N][N];// f[l][r] 表示中序遍历区间 [l, r] 构成的二叉树的最大加分
int root[N][N];// root[l][r] 记录区间 [l, r] 获得最大加分时的根节点编号，用于最终建树输出

void dfs(int l,int r)
{
    if(l>r)return;

    int k=root[l][r];
    printf("%d ",k);//输出根节点
    dfs(l,k-1);
    dfs(k+1,r);

}





int main()
{
    scanf("%d",&n);
    for(int i=1;i<=n;i++)scanf("%d",&w[i]);
    for(int len=1;len<=n;len++)//枚举区间长度
    {
        for(int l=1;l+len-1<=n;l++)//枚举左端点
        {
            int r=l+len-1;//计算右端点

            for(int k=l;k<=r;k++)//枚举当前区间l到r
            {
                int left=k==l?1:f[l][k-1];//如果左子树为空（k==1），为1
                int right=k==r?1:f[k+1][r];

                int score=left*right+w[k];//计算分数（左*右+中）
                if(l==r)score=w[k];

                if(f[l][r]<score)//当前方案得分更高
                {
                    f[l][r]=score;//更改记录
                    root[l][r]=k;
                }
            }


        }
    }
    printf("%d\n",f[1][n]);
    dfs(1,n);
    puts("");

    return 0;
}