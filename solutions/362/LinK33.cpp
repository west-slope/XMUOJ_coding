//利用循环思想
//或许还有其他更好的方法
//可以用二分算法
#include<iostream>
using namespace std;
int a[200000],n,q,j;

void search(int m)
{
    for(int i=0;i<n;i++)
    {
        if(a[i]==m)//先找到第一个m
        {
            j=i;
            cout<<i<<" ";
            while(a[j]==m)//一样就一直循环
            {
                j++;
            }
            if(j==i)cout<<i;//只有一个数
            else cout<<j-1<<endl;//多个j会到m最后一位的下一位，要减1
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