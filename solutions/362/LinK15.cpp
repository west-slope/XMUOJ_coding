//递归算法
#include<iostream>
using namespace std;
typedef long long LL;//用long long防止数据溢出
LL tianti(LL n)
{
    if(n==1)return 1;
    else if(n==2)return 2;
    else if(n==0)return 1;
    LL count=0;
    count+=tianti(n-1)+tianti(n-2);//n-1走一格或n-2两格到达n这个位置
    return count;
}
int main()
{
    LL N;
    cin>>N;
    cout<<tianti(N)<<endl;
    return 0;
}