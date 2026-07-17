//只是n皇后换一下记录方式而已
#include<iostream>
#include<vector>
//行从0开始，列从1开始
using namespace std;

int N;
vector<vector<char>>res;


bool xiebian(int r,int c)//只需要检查上方
{
    for(int i=r,j=c;i>=0&&j>=1;j--,i--)
    {
        if(res[i][j]=='Q')
            return false;
    }
    for(int i=r,j=c;i>=0&&j<=N;j++,i--)
    {
        if(res[i][j]=='Q')
            return false;
    }
    return true;
}

void dfs(int n)
{
    if(n>=N)
    {
        for(int i=0;i<N;i++)
        {
            for(int j=1;j<=N;j++)
            {
                cout<<res[i][j];
            }
            cout<<endl;
        }
        cout<<endl;
        return;//必须有return
    }
    for(int i=1;i<=N;i++)
    {
        int k;
        for(k=0;k<n;k++)//检查列
        {
            if(res[k][i]=='Q')break;
        }
        if(!xiebian(n,i))continue;//检查斜边
        if(k==n)
        {
            res[n][i]='Q';//设置路径
            dfs(n+1);
            res[n][i]='.';//恢复现场
            
        }
    }

}

int main()
{
    cin>>N;
    res.resize(N, vector<char>(N+1, '.'));//初始化为'.'
    dfs(0);

    return 0;
}