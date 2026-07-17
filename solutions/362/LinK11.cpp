//递归算法
#include<iostream>
using namespace std;

const int N=15;
int n;
bool st[N];
int path[N];

void dfs(int u)//已排列的个数
{
    if(u>n)//递归出口
    {
        for(int i=1;i<=n;i++)
        {
            cout<<path[i]<<" ";
        }
        cout<<endl;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!st[i])
            {
                path[u]=i;//设置路径
                st[i]=true;
                dfs(u+1);
                path[u]=0;//恢复现场（避免i+1传入出现问题）
                st[i]=false;
            }
        }
    }
}

int main()
{
    cin>>n;
    dfs(1);//从第一个开始

    return 0;
}
//总结：递归应包含设计路径和恢复现场，避免影响以后的循环