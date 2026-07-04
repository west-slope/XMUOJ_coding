#include<iostream>
#include<vector>
using namespace std;
int main()
{
    int n;
    vector<int>a;
    cin>>n;
    while(n!=-1)
    {
        a.push_back(n);
        cin>>n;
    }
    for(int i=a.size()-1;i>=0;i--)
    {
        cout<<a[i]<<endl;
    }

}