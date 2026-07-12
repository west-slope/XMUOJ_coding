#include<iostream>
using namespace std;

int n,m;
const int N=100;
int arr[N];
bool st[N];
void dfs(int u,int start)//多一个start方便判断
{
    if(u>m)
    {
        for(int i=1;i<=m;i++)
        {
            if(i!=1)cout<<" ";
            cout<<arr[i];
        }
        cout<<endl;
    }
    else {
        for(int i=start;i<=n;i++)
        {
            if(!st[i])
            {
                arr[u]=i;
                st[i]=true;
                dfs(u+1,i+1);
                arr[u]=0;
                st[i]=false;
            }
        }
    }

}


int main()
{
    cin>>n>>m;
    dfs(1,1);
    return 0;
}