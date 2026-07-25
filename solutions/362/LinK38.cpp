//深搜
#include<iostream>
using namespace std;

const int N=70;
int fates[70][70];

int dx[3]={0,0,1},dy[3]={1,-1,0};

long long dfs(int i,int j,int n)
{
    if(n==0)return 1;//步数用完，当前路径有效，计数+1
    long long res=0;
    fates[i][j]=1;
    for(int k=0;k<3;k++)
    {
        int x=i+dx[k],y=j+dy[k];//移动一格
        if(fates[x][y]==0)//踏入新的区域
        {
            res+=dfs(x,y,n-1);
        }
    }
    fates[i][j]=0;
    return res;
}

int main()
{
    int n;
    cin>>n;
    cout<<dfs(0,N/2,n);
    return 0;
}

//总结：套用深搜模板