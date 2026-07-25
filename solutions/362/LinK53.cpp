//广搜
#include<iostream>
#include<cstring>
#include<algorithm>
#include<queue>
using namespace std;

int m,n;
const int N=110;
typedef pair<int,int>PII;
char g[N][N];
int st[N][N];
PII start;


int bfs()
{
    memset(st,-1,sizeof st);//初始化
    queue<PII>q;
    q.push(start);
    st[start.first][start.second]=0;
    int res=0;

    while(q.size())//广搜模板
    {
        auto t=q.front();
        q.pop();

        for(int x=t.first-1;x<=t.first+1;x++)
        {
            for(int y=t.second-1;y<=t.second+1;y++)//遍历九宫格
            {
                if(x!=t.first||y!=t.second)
                {
                    if(x<1||x>n||y<1||y>m)continue;
                    if(g[x][y]=='*'||st[x][y]!=-1)continue;
                    st[x][y]=st[t.first][t.second]+1;//记录第几次杂草蔓延
                    res=max(res,st[x][y]);
                    q.push({x,y});
                }
            }
        }
    }
    return res;
}

int main()
{
    cin>>m>>n>>start.second>>start.first;
    start.first=n+1-start.first;
    for(int i=1;i<m;i++)cin>>g[i]+1;

    cout<<bfs()<<endl;
    return 0;
}

//总结：广搜+考虑障碍物