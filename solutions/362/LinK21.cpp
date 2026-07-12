#include<iostream>
using namespace std;

const int N=9;
bool st[N];
int arr[N];
int n;

void dfs(int u)
{
    if(u>n)
    {
        for(int i=1;i<=n;i++)
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!st[i])
            {
                arr[u]=i;
                st[i]=true;
                dfs(u+1);
                st[i]=false;
                arr[u]=0;
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