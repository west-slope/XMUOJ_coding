//线性DP
//外层循环所有以i结尾是上升子序列
//内层循环找到所有比a[i]小的假设放入并比较大小
#include<iostream>
#include<algorithm>
using namespace std;

const int N=1010;
int n;
int a[N],f[N];

int main()
{
    cin>>n;
    for(int i=1;i<=n;i++)cin>>a[i];

    for(int i=1;i<=n;i++)
    {
        f[i]=1;//只有a[i]一个数
        for(int j=1;j<i;j++)
        {
            if(a[j]<a[i])//既然 a[j] < a[i]，那么以 a[i] 结尾的新序列长度 = 以 a[j] 结尾的最长长度 + 1（当前这个数）
                f[i]=max(f[i],f[j]+1);//从1~j的子序列+1，实质是找前面的每列序列最大
        }
    }
    int res=0;
    for(int i=1;i<=n;i++)res=max(res,f[i]);
    cout<<res<<endl;

    return 0;
}
//总结：线性DP
