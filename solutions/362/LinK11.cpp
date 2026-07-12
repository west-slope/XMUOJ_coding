#include<iostream>
using namespace std;

const int N=15;
int n;
bool st[N];
int path[N];

void dfs(int u)
{
    if(u>n)
    {
        for(int i=1;i<=n;i++)
        {
            cout<<path[i]<<" ";
        }
        cout<<endl;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!st[i])
            {
                path[u]=i;
                st[i]=true;
                dfs(u+1);
                path[u]=0;
                st[i]=false;
            }
        }
    }
}

int main()
{
    cin>>n;
    dfs(1);


    return 0;
}