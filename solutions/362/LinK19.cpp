//递归算法
//通过bool类型st数组来判断是否放入u
#include<iostream>
using namespace std;

const int N=20;
int st[N];
int n;
void dfs(int u)//第u次
{

    if(u>n)//递归出口
    {
        int count=0;
        for(int i=1;i<=n;i++)
        {
            if(st[i])
            cout<<i<<" ";
            count++;
        }
        if(count!=0)
            cout<<endl;
        return ;
    }
    st[u]=true;//第u个数放入
    dfs(u+1);
    st[u]=false;//第u个不放入
    dfs(u+1);
}

int main()
{
    cin>>n;
    dfs(1);
    return 0;

}
//总结：st数组来区别是否有数字u
