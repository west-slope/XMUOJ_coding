#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int>a;
    a.push_back(1);
    a.push_back(1);
    int n;
    cin>>n;
    for(int i=0,j=1;i<n;i++,j++)
    {
        a.push_back(a[i]+a[j]);
    }
    cout<<a[n-1];

}