#include<iostream>
#include<cstring>
#include<string>
#include<algorithm>
#include<vector>
using namespace std;

string a,b;

void compare(vector<int>&A,vector<int>&B)
{
    if(A.size()<B.size())swap(A,B);
    else if(A.size()==B.size())
    {
        int i=A.size()-1;
        while(i>=0&&A[i]==B[i])i--;
        if(A[i]<B[i])swap(A,B);
    }
}

vector<int> sub(vector<int>&A,vector<int>&B)
{
    vector<int>C;
    int t=0;
    for(int i=0;i<A.size();i++)
    {
        t+=A[i];
        if(i<B.size())t-=B[i];
        C.push_back((t+10)%10);
        if(t<0)t=-1;
        else t=0;
    }
    while(!C.back())C.pop_back();
    return C;
}

void print(vector<int> A)
{
    for(int i=A.size()-1;i>=0;i--)
    {
        cout<<A[i];
    }
}
int main()
{
    cin>>a>>b;
    vector<int>A,B;
    int len1=a.length(),len2=b.length();
    for(int i=len1-1;i>=0;i--)
    {
        A.push_back(a[i]-'0');
    }
    for(int i=len2-1;i>=0;i--)
    {
        B.push_back(b[i]-'0');
    }

    compare(A,B);
    print(sub(A,B));
    cout<<endl;
    return 0;
}