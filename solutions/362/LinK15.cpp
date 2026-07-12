#include<iostream>
using namespace std;
typedef long long LL;
LL tianti(LL n)
{
    if(n==1)return 1;
    else if(n==2)return 2;
    else if(n==0)return 1;
    LL count=0;
    count+=tianti(n-1)+tianti(n-2);
    return count;
}
int main()
{
    LL N;
    cin>>N;
    cout<<tianti(N)<<endl;
    return 0;
}