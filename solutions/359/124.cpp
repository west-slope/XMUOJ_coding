#include<iostream>
using namespace std;
//题目出错
int main()
{
    int n,m,q;
    int a[1001][1001]={0},s[1001][1001]={0},sum=0;
    cin>>n>>m>>q;
    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=m;j++)
        {
            cin>>a[i][j];
            
        }
    }
    int x1,y1,x2,y2,c;
    while(q--)
    {
        cin>>x1>>y1>>x2>>y2>>c;
        s[x1][y1] += c;
        if(y2 + 1 <= m) s[x1][y2 + 1] -= c;
        if(x2 + 1 <= n) s[x2 + 1][y1] -= c;
        if(x2 + 1 <= n && y2 + 1 <= m) s[x2 + 1][y2 + 1] += c;
    }
    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=m;j++)
        {
           s[i][j] += s[i-1][j] + s[i][j-1] - s[i-1][j-1];
            a[i][j] += s[i][j];
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
}