#include<iostream>
#include<algorithm>
#include<cmath>
#include<iomanip>
using namespace std;

const double PI=acos(-1.0);
const double eps=1e-6;
double cakes[10001];
int N,F;
int Min=1<<30,Max=-1;
bool hasEnoughCake(double sizeofcake)
{
    if(sizeofcake<eps)return true;
    int count=0;
    for(int i=0;i<N;i++)
    {
        if(sizeofcake>cakes[i])continue;
        int pieces=cakes[i]/sizeofcake;
        count+=pieces;
        if(count>=F)return true;
    }
    return false;
}

double binarySearch(double cakes[],int n)
{
    double l=Min/F,r=Max,mid;
    while(r-l>eps)
    {
        mid=l+(r-l)/2;
        if(hasEnoughCake(mid))
        {
            l=mid+eps;
        }
        else r=mid;
    }
    return l;
}



int main()
{
    int c;
    cin>>N>>F;
    F++;
    for(int i=0;i<N;i++)
    {
        cin>>c;
        cakes[i]=c*c;
        if(cakes[i]>Max)Max=cakes[i];
        if(cakes[i]<Min)Min=cakes[i];
    }
    cout<<fixed<<setprecision(3)<<binarySearch(cakes,N)*PI;

    return 0;
}