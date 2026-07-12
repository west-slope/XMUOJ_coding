#include<iostream>
using namespace std;
//测试样例有问题
int main()
{
    int n,m,q;
    int x1,y1,x2,y2;
    int a[1001][1001],s[1001][1001],ss=0;
    cin>>n>>m>>q;
    for(int i=1;i<=n;i++)
        for(int j=1;j<=m;j++)
        {
            cin>>a[i][j];
            s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + a[i][j];
            //ss+=a[i][j];
            //s[i][j]=ss;
        }
    while(q--)
    {
        cin>>x1>>y1>>x2>>y2;
        cout<<s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]<<endl;
    }




}