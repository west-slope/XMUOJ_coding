#include<iostream>
using namespace std;
int a[1000],temp[1000],n;
void merge_sort(int arr[],int l,int r)
{
    if(l>=r)return;
    int mid=(l+r)>>1;//中间数
    merge_sort(arr,l,mid);
    merge_sort(arr,mid+1,r);
    int i=l,j=mid+1,k=0;
    while(i<=mid&&j<=r)
    {
        if(arr[i]<=arr[j]){
            temp[k]=arr[i];
            i++;
        }
        else {
            temp[k]=arr[j];
            j++;
        }
        k++;
    }
    while(i<=mid)
        {
            temp[k++]=arr[i++];
        }
    while(j<=r)
    {
            temp[k++]=arr[j++];
    }
    for(int i=l,k=0;i<=r;i++,k++)
    {
        arr[i]=temp[k];
    }
}



int main()
{
    cin>>n;
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    merge_sort(a,0,n-1);
    for(int i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }

    return 0;
}