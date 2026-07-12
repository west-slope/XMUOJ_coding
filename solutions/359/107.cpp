#include<iostream>
using namespace std;
int a[20000],n,q,j;

void search(int m)
{
    for(int i=0;i<n;i++)
    {
        if(a[i]==m)
        {
            j=i;
            cout<<i<<" ";
            while(a[j]==m)
            {
                j++;
            }
            if(j==i)cout<<i;
            else cout<<j-1<<endl;
            break;
        }
        else if(i==n-1)
        {
            cout<<-1<<" "<<-1<<endl;
        }
    }

}

int main()
{
    int m;
    cin>>n>>q;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(int i=0;i<q;i++)
    {
        cin>>m;
        search(m);
    }

}