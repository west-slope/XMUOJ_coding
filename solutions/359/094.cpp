#include<iostream>
using namespace std;
int dx[]={0,1},dy[]={1,0};

int n,m;
int xunlu(int i,int j)
{
    if(i==n&&j==m)return 1;
    if(i>n||j>m)return 0;
    int res=0;
    for(int k=0;k<2;k++)
    {
        i+=dx[k],j+=dy[k];
        res+=xunlu(i,j);
        i-=dx[k],j-=dy[k];
    }
    return res;
}
int main()
{

    cin>>n>>m;
    cout<<xunlu(0,0);


}