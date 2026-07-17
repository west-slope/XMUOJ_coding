//递归算法
//与组合不同，不设置start起点，从头开始遍历
#include<iostream>
using namespace std;

const int N=9;
bool st[N];//判断是否有选过
int arr[N];//放结果
int n;

void dfs(int u)
{
    if(u>n)//递归出口
    {
        for(int i=1;i<=n;i++)//输出结果
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!st[i])
            {
                arr[u]=i;//设置路径
                st[i]=true;
                dfs(u+1);
                st[i]=false;//恢复现场
                arr[u]=0;
            }
        }
    }
}

int main()
{
    cin>>n;
    dfs(1);
    return 0;

}

//总结：与组合不同，不设置start起点，从头开始遍历