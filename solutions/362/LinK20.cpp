//递归算法
//通过start控制起点，以及设置路径和恢复现场实现递归
#include<iostream>
using namespace std;

int n,m;
const int N=100;
int arr[N];
bool st[N];//判断是否有选过
void dfs(int u,int start)//多一个start方便判断
{
    if(u>m)
    {
        for(int i=1;i<=m;i++)
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
    else {
        for(int i=start;i<=n;i++)//从start开始递增，避免还输出前面的
        {
            if(!st[i])
            {
                arr[u]=i;//设置路径
                st[i]=true;
                dfs(u+1,i+1);
                arr[u]=0;//恢复现场
                st[i]=false;
            }
        }
    }

}


int main()
{
    cin>>n>>m;
    dfs(1,1);
    return 0;
}

//总结：组合通过start来与排列区分，控制从哪里开始输出，避免出现前面的数