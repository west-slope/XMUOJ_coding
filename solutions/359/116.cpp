#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int n;
    int a[100001];
    vector<int>b;
    cin>>n;
    for(int i=0;i<n;i++)cin>>a[i];
    vector<int>v;
    int t=0;
    for(int i=0;i<n;i++)//1 2 4 2 5 6 7是：5
    {

        if(find(v.begin(),v.end(),a[i])==v.end()){
            t++;
            v.push_back(a[i]);
        }
        else {
            b.push_back(t);
            t=0;
            v.erase(v.begin(), find(v.begin(),v.end(),a[i])+1); 
            v.push_back(a[i]);
            t=v.size();
        }
    }b.push_back(t);
    sort(b.begin(),b.end());
    cout<<b.back();
}