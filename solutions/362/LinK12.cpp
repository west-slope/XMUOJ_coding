#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

const int N=10;
bool st[N];
char arr[N]={0};
string a;
int len;

void dfs(int u)
{
    if(u>len)
    {
        for(int i=1;i<=len;i++)
        {
            cout<<arr[i];
        }
        cout<<endl;
        return ;
    }
    else {
        for(int i=0;i<len;i++)
        {
            if(!st[i])
            {
                st[i]=true;
                arr[u]=a[i];
                dfs(u+1);
                arr[u]='0';
                st[i]=false;
            }
        }
    }
}

int main()
{
    cin>>a;
    len=a.size();
    sort(a.begin(), a.end());
    dfs(1);
    return 0;
}