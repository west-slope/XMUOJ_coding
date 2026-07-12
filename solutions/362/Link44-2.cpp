//2.打表法
#include<iostream>
using namespace std;
#define N 16
int log[1<<N];

int lowbit(int n)
{
    return n&-n;
}

void BuildLog2Table(int n)
{
    for(int i=0;i<n;i++)
        log[1<<i]=i;
}

int query(int n)
{
    return log[lowbit(n)];
}

int main()
{
    int n;
    cin>>n;
    cout<<query(n);
}
