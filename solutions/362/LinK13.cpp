//递归算法
//判断是否在同一对角线上|x1-x2|=|y1-y2|

#include<iostream>
#include<vector>
using namespace std;

int N;
vector<int>res;
void dfs(int n)//当前行数
{
    if(n>=N)//n==N时递归出口
    {
        for(auto x:res)cout<<x;
        cout<<endl;
        return ;
    }
    for(int i=1;i<=N;i++)//列数
    {
        int k;
        for(k=0;k<n;k++)//行数从0~n-1（已填入部分）
        {
            if((res[k]==i)||abs(i-res[k])==abs(n-k))//res[k]为行号
                break;//如果当前位置找到冲突，就跳出当前位置验证
        }
        if(k==n)//超过，找不到
        {
            res[n]=i;
            dfs(n+1);
        }
    }

}

int main()
{
    cin>>N;
    res.resize(N);
    dfs(0);//列数从0开始

    return 0;
}
//dfs传入的是行数，通过遍历列数判断是否可以
