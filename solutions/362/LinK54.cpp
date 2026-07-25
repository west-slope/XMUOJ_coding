//广搜
#include<iostream>
#include<queue>
#include<cstring>
using namespace std;

const int N=160;
int c,r,x,y;
char g[N][N],m;//g数组用于存储地图
int st[N][N];//记录走过的步数
typedef pair<int,int>PII;
string a;

int dx[8]={-2,-2,-1,-1,1,1,2,2};
int dy[8]={-1,1,-2,2,-2,2,-1,1};

int bfs()
{
    memset(st,-1,sizeof st);
    queue<PII>q;
    q.push({x,y});
    st[x][y]=0;
    while(q.size())//queue中还有
    {
        auto t=q.front();//取出第一个
        q.pop();
        for(int i=0;i<8;i++)//遍历所有当前位置的走法
        {
            int x0=t.first+dx[i],y0=t.second+dy[i];
            if(x0<0||x0>=r||y0<0||y0>=c)continue;//跳过地图外、‘*’和st为-1的点
            if(g[x0][y0]=='H')return st[t.first][t.second]+1;//找到终点
            if(g[x0][y0]=='*'||st[x0][y0]!=-1)continue;//踩到*或者走过的路跳过
            st[x0][y0]=st[t.first][t.second]+1;//记录从起点到当前位置道德步数
            q.push({x0,y0});//塞入新位置的坐标
        }
    }
    return -1;//所有方法未找到
}


int main()
{
    cin>>c>>r;
    for(int i=0;i<r;i++)
    {
        for(int j=0;j<c;j++)
        {
            cin>>m;
            g[i][j]=m;
            if(m=='K')
            {
                x=i,y=j;//记录K的位置
            }
        }
    }

    cout<<bfs()<<endl;
    return 0;
}
//总结：采用广搜的模板进行修改