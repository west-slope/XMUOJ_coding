#include<iostream>
using namespace std;

//参考AcWing代码
const int N=200;
int arr[N][N];

int main()
{
    int n,m;
    cin>>n>>m;
    int dx[]={0,1,0,-1};
    int dy[]={1,0,-1,0};
    int x=0,y=0,d=0;
    for(int i=1;i<=n*m;i++)
    {
        arr[x][y]=i;
        int a=x+dx[d],b=y+dy[d];
        if(a>=n||a<0||b<0||b>=m||arr[a][b])
        {
            d=(d+1)%4;//向右为1，向下为2，向左为3，向上为4
            a=x+dx[d],b=y+dy[d];
        }
        x=a,y=b;
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}