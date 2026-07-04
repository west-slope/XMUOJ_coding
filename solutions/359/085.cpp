#include<iostream>
using namespace std;

int main()
{
    int a,b,n;
    cin>>a>>b;
    if(b>a)swap(a,b);
    n=a%b;
    while(n!=0)
    {
        a=n;
        swap(a,b);
        n=a%b;
    }
    cout<<b;
}