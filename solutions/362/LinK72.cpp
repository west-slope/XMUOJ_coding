//利用二分法查找
//相比上一个大大优化了时间长度（Olog(n)）
#include<iostream>
#include<algorithm>
using namespace std;

const int N=100010;
int n;
int a[N];
int q[N];//q[len] 存储的是：长度为 len 的上升子序列中，最小的结尾元素值。

int main()
{
    scanf("%d",&n);
    for(int i=0;i<n;i++)cin>>a[i];

    int len=0;//记录当前最长上升子序列的长度
    for(int i=0;i<n;i++)
    {
        int l=0,r=len;//二分查找
        while(l<r)//找最后一个小于 a[i] 的位置（可能是在末尾就使len变长）（结束条件l==r）
        {
            int mid=l+r+1>>1;
            if(q[mid]<a[i])l=mid;
            else r=mid-1;
        }
        len=max(len,r+1);//如果插入后会使len变大就放入
        q[r+1]=a[i];
    }

    cout<<len;
}

//总结：二分法优化