//数独
#include<iostream>
#include<cstring>
using namespace std;
const int N=9;
const int M=3;
int a[N][N],b[N][N];
bool st[N+1];
//初始化地图
string memory[N]{{"530070000"},{"600195000"},{"098000060"},
                {"800060003"},{"400803001"},{"700020006"},
                {"060000280"},{"000419005"},{"000080079"}};
bool check_input()
{
    string line;
    for(int i=0;i<N;i++)//输入长度
    {
        cin>>line;
        if(line.size()!=N)return false;//检测长度
        for(int j=0;j<N;j++)
        {
            int t=line[j]-'0';
            if(t<0||t>N)return false;//非法字符
            if(a[i][j]!=0&&a[i][j]!=t)return false;//与初值匹配
            b[i][j]=t;
        }
        
    }
    return true;
}

bool check_row()
{
    for(int i=0;i<N;i++)
    {
        memset(st,false,sizeof st);//初始化
        for(int j=0;j<N;j++)
        {
            int t=b[i][j];
            if(t<0||t>N)return false;
            if(st[t])return false;
            st[t]=true;
        }
    }
    return true;
}

bool check_col()
{
    for(int i=0;i<N;i++)
    {
        memset(st,false,sizeof st);
        for(int j=0;j<N;j++)
        {
            int t=b[j][i];
            if(t<0||t>N)return false;
            if(st[t])return false;
            st[t]=true;
        }
    }
    return true;
}

bool check_block()
{
    for(int x=0;x<N;x+=M)
    {
        for(int y=0;y<N;y+=M)
        {
            memset(st,false,sizeof st);
            for(int dx=0;dx<M;dx++)
            {
                for(int dy=0;dy<M;dy++)
                {
                    int t=b[x+dx][y+dy];
                    if(t<0||t>N)return false;
                    if(st[t])return false;
                    st[t]=true;
                }
            }
        }
    }
    return true;
}




int main()
{
    for(int i=0;i<N;i++)
    {
        for(int j=0;j<N;j++)
        {
            a[i][j]=memory[i][j]-'0';
        }
    }


    if(check_input()&&check_col()
    &&check_row()&&check_block())
    {
        cout<<"Yes"<<endl;
    }
    else cout<<"No"<<endl;

    return 0;
}

//判断行列和3*3是否冲突，有无解