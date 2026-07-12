#include<iostream>
#include<algorithm>
using namespace std;
//排序后取中位数（下标 n/2），计算所有点到中位数的距离之和
int main()
{
    int a[100001],l=0;//l用于计数
    int N,mid;
    cin>>N;
    for(int i=0;i<N;i++)cin>>a[i];
    sort(a,a+N);
    mid=N/2;//mid为中位数
    for(int i=0;i<N;i++)
    {
        l+=abs(a[mid]-a[i]);//距离要取绝对值
    }
    cout<<l<<endl;


}