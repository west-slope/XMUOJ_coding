//深搜+数独
#include<iostream>
using namespace std;
#include<cstring>

const int N=10;
char a[N][N];
bool row[N][N]={false},col[N][N]={false},block[3][3][N]={false};//判断行，列，3*3是否有数字n

bool dfs(int x,int y)
{
    if(y==9)//进入下一行
    {
        x++;
        y=0;
    }
    if(x==9)//数组结束
    {
        for(int i=0;i<=8;i++)
        {
            cout<<a[i]<<endl;
        }
        return true;
    }
    if(a[x][y]!='0')return dfs(x,y+1);//深搜下一个位置
    for(int i=1;i<=9;i++)
    {
        if(!row[x][i]&&!col[y][i]&&!block[x/3][y/3][i])
        {
            a[x][y]=i+'0';
            row[x][i]=col[y][i]=block[x/3][y/3][i]=true;//设置路径
            if(dfs(x,y+1))return true;
            a[x][y]='0';//恢复现场
            row[x][i]=col[y][i]=block[x/3][y/3][i]=false;
        }
    }

    return false;
}

int main()
{
    for(int i=0;i<9;i++)
            cin>>a[i];
     for(int i = 0; i < 9; i++)
    {
        for(int j = 0; j < 9; j++)
        {
            if(a[i][j] != '0')//存储数据
            {
                int num = a[i][j] - '0';
                row[i][num] = true;
                col[j][num] = true;
                block[i/3][j/3][num] = true;
            }
        }
    }
    dfs(0,0);


}

//总结：综合度较高，结合了数独，深搜