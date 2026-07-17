//二分算法
#include<iostream>
using namespace std;
int N,T,n; 
int a[100001];


int bsearch(int l,int r,int n)
{

    while(l<r)
    {
        int mid=l+r>>1;//取中间的数
        if(a[mid]>=n)r=mid;//中间的大于n那么就在左半边找
        else  l=mid+1;//否则取右半边
    }
    if(a[l]==n)return l;//找到的标志
    else return -1;
}

//注意：输入的数据的排序后的，从小到大
int main()
{
    scanf("%d",&N);
    for(int i=0;i<N;i++)
    {
        scanf("%d",&a[i]);//用scanf比cin快一点
    }
    scanf("%d",&T);
    for(int i=0;i<T;i++)
    {
        cin>>n;
        cout<<bsearch(0,N-1,n)<<endl;
    }

}
//二分法可以快速求解，减少运算次数