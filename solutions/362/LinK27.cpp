//分治算法
//思路已在代码中标出
#include<iostream>
using namespace std;

int a[100001];

void quick_sort(int arr[],int l,int r)//传入数组，左端和右端
{
    if(l>=r)return;//左右相等，只有一个元素，说明排序完成
    int i=l-1,j=r+1,x=arr[l];//后面有i++，j++所以先减1，x作为基准进行比较
    while(i<j)
    {
       do i++; while(a[i]<x);//i移动知道a[i]>x
       do j--; while(a[j]>x);//j移动知道a[j]<x
       if(i<j)swap(a[i],a[j]);//还没完全排序，就交换二者继续排序
    }
    quick_sort(a,l,j);//ij对调，同样传入左右端
    quick_sort(a,j+1,r);
}

int main()
{
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;i++)//读取数据
    {
        scanf("%d",&a[i]);
    }
    quick_sort(a,0,n-1);//快速排序
    for(int i=0;i<n;i++)//输出
    {
        printf("%d ",a[i]);
    }
    return 0;
}
//总结：快速排序可以大大提高排序速度。
