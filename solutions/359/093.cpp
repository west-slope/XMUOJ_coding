#include<iostream>
using namespace std;

int dengjie(int n)
{
    if(n==1)return 1;//n=1只有一种走法
    if(n==2)return 2;
    int res=0;//总的结果数，用于计数
    res=dengjie(n-1)+dengjie(n-2);
    return res;//返回res的值
}

int main()
{
    int n;
    cin>>n;//输入n
    cout<<dengjie(n); //输出res的值
}