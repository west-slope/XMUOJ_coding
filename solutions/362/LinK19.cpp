#include<iostream>
using namespace std;

const int N=20;
int st[N];
int n;
void dfs(int u)
{

    if(u>n)
    {
        int count=0;
        for(int i=1;i<=n;i++)
        {
            if(st[i])
            cout<<i<<" ";
            count++;
        }
        if(count!=0)
            cout<<endl;
        return ;
    }
    st[u]=true;
    dfs(u+1);
    st[u]=false;
    dfs(u+1);
}

int main()
{
    cin>>n;
    dfs(1);
    return 0;

}