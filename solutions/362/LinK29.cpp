#include<iostream>
using namespace std;
typedef long long LL;
LL a[100001];
void quick_sort(LL arr[],LL l,LL r)
{
    if(l>=r)return;
    LL i=l-1,j=r+1,x=arr[l+r>>1];
    while(i<j)
    {
        do i++;while(a[i]<x);
        do j--;while(a[j]>x);
        if(i<j)swap(a[i],a[j]);
    }
    quick_sort(a,l,j);
    quick_sort(a,j+1,r);
}



int main()
{
    LL n,k;
    scanf("%lld",&n);
    for(LL i=0;i<n;i++)//数据较多用scanf比较快
        scanf("%lld",&a[i]);
    scanf("%lld",&k);
    quick_sort(a,0,n-1);
    for(LL i=n-1,j=0;j<k;i--,j++)
    {
        printf("%lld\n",a[i]);
    }
    return 0;

}