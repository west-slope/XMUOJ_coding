//游戏链接：https://www.albinoblacksheep.com/games/bloxorz
#include<cstring>
#include<iostream>
#include<queue>
#include<algorithm>
using namespace std;

struct Stone{
    int x,y,z;//x，y为石头坐标，z：0表示站立，1为横躺，2为竖躺
    Stone(int a,int b,int c){x=a,y=b,z=c;};
    Stone():x(0),y(0),z(0){};
};


int n,m;
const int N=510;
char area[N][N];
int dist[N][N][3];

queue<Stone>q;
Stone start,target;

//四种方向 UP=0，DOWN-1，LEFT=2，RIGHT=3，stone从0，1，2变化
//每种状态的坐标以方块的左上的格子为基准点
int dxyz[4][3][3]{{{-2,0,2},{-1,0,1},{-1,0,0}},
                  {{1,0,2},{1,0,1},{2,0,0}},
                  {{0,-2,1},{0,-1,0},{0,-1,2}},
                  {{0,1,1},{0,2,0},{0,1,2}}};

void displayStone(Stone &s)
{
    cout<<"("<<s.x<<" "<<s.y<<" "<<s.z<<")";
}

Stone moveStone(Stone &p,int i)
{//返回下一状态
    int x=p.x+dxyz[i][p.z][0];//计算偏移量
    int y=p.y+dxyz[i][p.z][1];//计算偏移量
    int z=dxyz[i][p.z][2];//查表得状态
    return Stone(x,y,z);
}

bool isInside(int x,int y){return x>=0&&x<n&&y>=0&&y<m;}

bool isValid(Stone t)//判断：在范围内stone的左上块为基准点判定
{
    if(!isInside(t.x,t.y)||area[t.x][t.y]=='#')return false;//不在范围内
    if(t.z==2&&(!isInside(t.x+1,t.y)||area[t.x+1][t.y]=='#'))
        return false;//竖躺到禁区
    if(t.z==1&&(!isInside(t.x,t.y+1)||area[t.x][t.y+1]=='#'))
        return false;
    if(t.z==0&&area[t.x][t.y]=='E')
        return false;

    return true;
}

bool isVisited(Stone t)
{
    return dist[t.x][t.y][t.z]!=-1;//该状态没有被访问过
}

void BuildMap(int n,int m)
{
    memset(area,'#',sizeof(area));
    memset(dist,-1,sizeof(dist));

    for(int i=0;i<n;i++)cin>>area[i];

    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            char t=area[i][j];
            if(t=='X'){
                start.x=i,start.y=j,start.z=0;
                area[i][j]='.';//找到起点，站立
                //搜索相邻格子是否有'X'
                if(isInside(i,j+1)&&area[i][j+1]=='X')
                    start.z=1,area[i][j+1]='.';//横躺
                if(isInside(i+1,j)&&area[i+1][j]=='X')
                    start.z=2,area[i+1][j]='.';//竖躺
            }
            //找到目标点，记录状态target
            if(t=='O')
                target.x=i,target.y=j,target.z=0;//必须站立才能通关
        }
    }

}//end of BuildMap

int bfs(Stone &s)
{
    while(q.size())q.pop();//清空队列
    //压入顶点
    q.push(s);
    dist[s.x][s.y][s.z]=0;//起始步数为0

    while(q.size()){
        auto t=q.front();//栈顶
        q.pop();

        //搜索四个方向
        for(int i=0;i<4;i++)
        {
            //扩展t得到下一个坐标格
            Stone s=moveStone(t,i);
            if(!isValid(s))continue;//不合法
            //更新next结点距离
            if(!isVisited(s))
            {
                dist[s.x][s.y][s.z]=dist[t.x][t.y][t.z]+1;
                q.push(s);
                //如果next是终点
                if(s.x==target.x&&s.y==target.y&&s.z==target.z)
                    return dist[s.x][s.y][s.z];
            }
        }
    }//end of while
    return -1;

}//end of bfs



int main()
{
    while(cin>>n>>m&&n)
    {
        BuildMap(n,m);
        int res=bfs(start);
        if(res==-1)cout<<"Impossible"<<endl;
        else cout<<res<<endl;
    }

    return 0;
}