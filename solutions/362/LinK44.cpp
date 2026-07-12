#include<iostream>
using namespace std;
int lowbit(int n)
{
    return n&-n;
}


int main(){
    int n,m;
    cin>>n;
    m=lowbit(n);
    int res=0;
    while(m!=1)
    {
        m=m>>1;
        res++;
    }
    cout<<res;


}
