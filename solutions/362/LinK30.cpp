//分治算法
#include<iostream>
using namespace std;
int temp[100001],a[100001],n;
void merge_sort(int arr[],int l,int r)//归并排序
{
    if(l>=r)return;
    int mid=l+r>>1;//找出中间的
    merge_sort(arr,l,mid),merge_sort(arr,mid+1,r);//分成两部分进行归并排序
    int p0=0,p1=l,p2=mid+1;
    while(p1<=mid&&p2<=r)
    {
        if(arr[p1]<=arr[p2])temp[p0++]=arr[p1++];//对比两个部分比较大小进行合并
        else temp[p0++]=arr[p2++];
    }
    while(p1<=mid)temp[p0++]=arr[p1++];//当一半的所有元素全部合并后，另一半不用比较直接合并
    while(p2<=r)temp[p0++]=arr[p2++];
    for(int i=l,k=0;i<=r;i++,k++)arr[i]=temp[k];//转移回arr数组，为了后面的输出
}


int main()
{
    cin>>n;
    for(int i=0;i<n;i++)scanf("%d",&a[i]);
    merge_sort(a,0,n-1);
    for(int i=0;i<n;i++)cout<<a[i]<<" ";
}
//总结：归并排序的实用性较强，这个思想可以在多方面应用
