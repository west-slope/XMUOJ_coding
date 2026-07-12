#include<iostream>
#include<cmath>
#include<iomanip>
using namespace std;


int main(){
    double n;
    double mid;
    cin>>n;
    double left=-10000,right=10000;
    while(right-left>1e-8)
    {
        mid=(left+right)/2;
        if(pow(mid,3)>=n)
            right=mid;
        else left=mid;
    }
    cout<<fixed<<setprecision(6)<<mid<<endl;
}