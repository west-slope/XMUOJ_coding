#include<iostream>
using namespace std;

int a[1000];
int quick_sort(int arr[],int l,int r,int k)
{
    if(l>=r)return arr[l];
    int i=l-1,j=r+1,x=arr[(l+r)>>1];
    while(i<j)
    {
        do i++;while(x>arr[i]);
        do j--;while(x<arr[j]);
        if(i<j)swap(arr[i],arr[j]);
    }
    int s1=j-l+1;
    if(k<=s1)return quick_sort(arr,l,j,k);
    else return quick_sort(arr,j+1,r,k-s1);
}

int main()
{
    int n,k;
    cin>>n>>k;
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    cout<<quick_sort(a,0,n-1,k)<<endl;
    
}