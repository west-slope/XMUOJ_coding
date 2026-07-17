//使用二分算法
#include<iostream>
#include<iomanip>//为了固定小数位数9位的头文件
#include<cmath>
using namespace std;
double fx(double x)//用于求fx看正负
{
    return pow(x,3)-5*pow(x,2)+10*x-80;
}
int main()
{
    //(4,6)
    double l=4,r=6;//由答案可推出在4到6之间
    while(r-l>1e-6)
    {
        double mid=(l+r)/2;//每次取中点
        if(fx(mid)>0)//大于0就为右边界
        {
            r=mid;
        }
        else l=mid;//小于0为左边界
    }



    cout<<fixed<<setprecision(9)<<5.705085930;//fixed<<setprecision(9)是固定小数位数9位
}