#include<iostream>
#include<cmath>
using namespace std;
typedef long long LL;
bool isPrime(LL n)
{
    if(n==1)return false;
    else if(n==2)return true;
    else if(n%2==0&&n!=2)return false;
    for(LL i=3;i*i<=n;i++)
    {
        if(n%i==0)return false;
    }
    return true;
}
 int main()
 {
    LL N;
    cin>>N;
    for(LL i=2;i<=N;i++)
    {
        if(isPrime(i))
            cout<<i<<endl;
    }
 }
