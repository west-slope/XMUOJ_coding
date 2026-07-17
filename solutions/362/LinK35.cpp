//二分算法
//从两端逼近
#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;


int main()
{
    double n,temp,mid;
    cin>>n;
    double l=-10000,r=10000;
    while(r-l>1e-8)//确保小数位数足够多
    {
        mid=(l+r)/2;//取区间中点
        if(pow(mid,3)>n)r=mid;//大于就位右端
        else l=mid;//小于位左端
    }
    cout<<fixed<<setprecision(6)<<mid;
    
}