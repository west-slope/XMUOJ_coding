#include<iostream>
using namespace std;
int a[1000000],n;
void quick_sort(int arr[],int l,int r)
{
    if(l>=r)return;
    int i=l-1,j=r+1,x=arr[(l+r)>>1];
    while(i<j)
    {
        do i++;while(arr[i]<x);
        do j--;while(arr[j]>x);
        if(i<j){swap(arr[i],arr[j]);
        }
    }
    quick_sort(arr,l,j);
    quick_sort(arr,j+1,r);

}

int main()
{
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }   
    quick_sort(a,0,n-1);
    for(int i=0;i<n;i++)
    {
        //if(i!=0)cout<<" ";
        printf("%d ",a[i]);
    }
    return 0;
}