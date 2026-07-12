#include<iostream>
using namespace std;
typedef long long LL;
LL n,a[1000000],temp[1000000];

LL merge_sort(LL arr[],LL l,LL r)
{
    if(l>=r)return 0;
    LL mid=l+r>>1,res=0;
    res+=merge_sort(arr,l,mid)+ merge_sort(arr,mid+1,r);
    LL i=l,j=mid+1,k=0;
    while(i<=mid&&j<=r)
    {
        if(arr[i]<=arr[j])
        {
            temp[k++]=arr[i++];
        }
        else if(arr[i]>temp[j])
        {
            temp[k++]=arr[j++];
            res+=mid-i+1;
        }
    }
    while(i<=mid)
    {
        temp[k++]=arr[i++];
    }
    while(j<=r)
    {
        temp[k++]=arr[j++];
    }
    for(int i=l,k=0;i<=r;i++,k++)//为了进一步排序，不可忽略
    {
        arr[i]=temp[k];
    }
   return res;


}

int main()
{
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    cout<<merge_sort(a,0,n-1)<<endl;


}