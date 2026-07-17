#include <iostream>
using namespace std;
 
const int N = 20;
int n;
char g[N][N];
bool col[N], dg[N], udg[N];
//col[i]表示第i列是否有皇后
//dg[u+i]表示u+i对角线是否有皇后
//udg[n-u+i]表示第n-u+i条对角线是否有皇后
void dfs(int u)
{
    if (u == n)
    {
        for (int i = 0; i < n; i++)
        {
            puts(g[i]);
        }
        puts("");
        return;
    }
    for (int i = 0; i < n; i++)
    {
        if (!col[i] && !dg[u + i] && !udg[n - u + i])
        {
            g[u][i] = 'Q';
            col[i] = dg[u + i] = udg[n - u + i] = true;
            dfs(u + 1);
            col[i] = dg[u + i] = udg[n - u + i] = false;
            g[u][i] = '.';
        }
 
    }
 
}
int main()
{
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            g[i][j] = '.';
        }
    }
    dfs(0);
    return 0;
}