#include<iostream>
using namespace std;
int n;
int used[10];
bool path[10];
void dfs(int u)
{

    if(u==n){
        for(int i=0;i<n;i++)
        {
            if(i!=0)cout<<" ";
            cout<<used[i];
        }
        cout<<endl;
        return ;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!path[i]){
                used[u]=i;
                path[i]=true;
                dfs(u+1);
                path[i]=false;
                used[u]=0;
            }
        }
    }

}


int main()
{
    cin>>n;
    dfs(0);
}