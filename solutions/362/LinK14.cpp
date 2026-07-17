//递归算法
//由n皇后修改

#include<iostream>
#include<vector>
using namespace std;

int T;
vector<int>res;
vector<vector<int>>a;
void dfs(int n)//当前行数
{
    if(n>=8)//n==N时递归出口
    {
        a.push_back(res);//改为存入所有8皇后的值
        return ;
    }
    for(int i=1;i<=8;i++)//列数
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
    int n;
    cin>>T;
    res.resize(8);
    dfs(0);//列数从0开始
    while(T--)
    {
        cin>>n;
        for(int i=0;i<8;i++)//查表
        {
            cout<<a[n-1][i];
        }
        cout<<endl;
    }
    return 0;
}
//dfs传入的是行数，通过遍历列数判断是否可以
