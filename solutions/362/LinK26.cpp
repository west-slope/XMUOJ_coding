#include<iostream>
using namespace std;

int arr[4];
bool dfs(int u)
{
    int res=0;
    if(u==1)res+=arr[0];
    if(u>=4)
    {
        if(res==24)return 1;
        else return 0;
    }
    for(int i=1;i<=4;i++)
    {
        switch(i)
        {
            case 1:res+=arr[u];return dfs(u+1);break;
            case 2:res-=arr[u];return dfs(u+1);break;
            case 3:res*=arr[u];return dfs(u+1);break;
            case 4:res/=arr[u];return dfs(u+1);break;
        }
    }



}

int main()
{
    while(cin>>arr[0]&&cin>>arr[1]&&cin>>arr[2]&&cin>>arr[3])
    {
        if(dfs(1))cout<<"YES"<<endl;
        else cout<<"NO"<<endl;
    }

    return 0;
}