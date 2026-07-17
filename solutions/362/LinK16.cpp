//
//1.苹果个数小于盘子个数f(m,n)=f(m,m)
//2.苹果个数不小于盘子个数
//总放法=空一个盘子(递归)+没空盘子
//f(m,n)=f(m,n-1)+f(m-n,n)<都先分一个苹果>
#include<iostream>
using namespace std;
//f(0,n)=1
//f(m,0)无解

int f(int m,int n)
{
    if(n>m) return f(m,m);
    if(m==0)return 1;
    if(n==0)return 0;

    return f(m,n-1)+f(m-n,n);//f(m,n)=f(m,n-1)+f(m-n,n)<都先分一个苹果>
}




int main()
{
    int m,n,t;
    cin>>t;
    while(t--)
    {
        cin>>m>>n;
        cout<<f(m,n)<<endl;
    }

    return 0;
}
//有一个空盘子通过递归可以衍生n个空盘子的情况