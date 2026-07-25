//数独+深搜
#include<iostream>
#include<algorithm>
#include<string>
#include<cstring>
#include<algorithm>
using namespace std;

const int N = 9;
int ones[1 << N],LOG[1 << N];
int row[N],col[N],block[3][3];

string str;

inline int lowbit(int x)
{
    return x&-x;
}

void init()//初始化row和col,block
{
    for(int i=0;i<N;i++)//打表
    {
        row[i]=col[i]=(1<<N)-1;//均为111111111
    }
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            block[i][j]=(1<<N)-1;

}

inline int get(int x,int y)//求出缺的数
{
    //用&运算求并集
    return row[x]&col[y]&block[x/3][y/3];
}

bool dfs(int cnt)
{
    if(!cnt)return true;
    int minv=10;//"当前找到的最少可选数字数量"的基准值,0-9
    int x=0,y=0;
    for(int i=0;i<N;i++)
        for(int j=0;j<N;j++)
            if(str[i*9+j]=='.')//
            {
                int t=ones[get(i,j)];
                if(t<minv)//每次递归找到最小
                {
                    minv=t;
                    x=i,y=j;//记录
                }
            }
    for(int i=get(x,y);i;i-=lowbit(i))
    {
        int t=LOG[lowbit(i)];
        row[x]-=1<<t;
        col[y]-=1<<t;
        block[x/3][y/3]-=1<<t;
        str[x*9+y]='1'+t;
        if (dfs(cnt-1))return true;
        row[x]+=1<<t;
        col[y]+=1<<t;
        block[x / 3][y / 3]+=1<<t;
        str[x*9+y]='.';//恢复现场
    }
    return false;
}
int main()
{
    for(int i=0;i<N;i++)
    {
        LOG[1<<i]=i;
    }//初始化LOG
    for(int i=0;i<1<<N;i++)//1<<N=2^N
    {
        int s=0;
        for(int j=i;j;j-=lowbit(j))s++;
        ones[i]=s;//得到每个数有几个1
    }
    while(cin>>str,str[0]!='e')//end结尾
    {
        init();
        int cnt=0;//计算空缺数
        for(int i=0,k=0;i<N;i++)
        {
            for(int j=0;j<N;j++,k++)
            {
                if(str[k]!='.')
                {
                    int t=str[k]-'1';//0-8
                    row[i]-=1<<t;//2^t
                    col[j]-=1<<t;
                    block[i/3][j/3]-=1<<t;
                }
                else cnt++;
            }
        }
        dfs(cnt);
        cout<<str;
        cout<<endl;
    }
}
//总结：利用二进制进行剪枝