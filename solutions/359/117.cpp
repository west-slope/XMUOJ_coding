#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int a[100001];
    vector<int>b;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
        if(find(b.begin(),b.end(),a[i])==b.end())b.push_back(a[i]);
        else b.erase(find(b.begin(),b.end(),a[i]));
    }

    for(int i=0;i<b.size();i++)
        if(b[i]!=0){
            cout<<b[i];break;
        }
}