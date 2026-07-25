//深搜算法
#include<iostream>
#include<cstring>
#include<vector>
#include<utility>
using namespace std;

const int N=27;
int p,q;
bool st[N][N];
vector<pair<char,int>>path;//存储马的跳跃轨迹

int dx[8]={-2,-2,-1,-1,1,1,2,2};
int dy[8]={-1,1,-2,2,-2,2,-1,1};

bool dfs(int x,int y,int cnt)
{
    path.push_back({char(x+'A'),y+1});//从1A开始计数，要加1

    if(cnt==p*q)
    {
        for(auto a:path)cout<<a.first<<a.second;
        return true;
    }
    st[x][y]=true;
    for(int i=0;i<=7;i++)
    {
        int a=x+dx[i],b=y+dy[i];
        if(a<0||a>=q||b<0||b>=p)continue;
        if(st[a][b])continue;
        if(dfs(a,b,cnt+1))return true;
    }
    st[x][y]=false;//恢复现场
    path.pop_back();

    return false;
}

int main()
{
    int T;
    cin>>T;
    for(int t=1;t<=T;t++)
    {
        cout<<"#"<<t<<":"<<endl;
        cin>>p>>q;
        path.clear();
        memset(st,0,sizeof(st));
        bool flag=false;
        for(int i=0;i<q;i++)//遍历棋盘的起点
        {
            for(int j=0;j<p;j++)
            {
                if(dfs(i,j,1))
                {
                    flag=true;
                    break;
                }
            }
        }
        if(!flag)cout<<"none";
        cout<<endl;
    }
    return 0;
}