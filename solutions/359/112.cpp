#include<iostream>
#include<algorithm>
#include<string>
#include<vector>

using namespace std;

string a,b;

vector<int> mul(vector<int>&A,vector<int>&B)
{
    vector<int>C(A.size()+B.size());
    for(int i=0;i<A.size();i++)
    {
        for(int j=0;j<B.size();j++)
        {
            C[i+j]+=A[i]*B[j];
        }
    }
    for(int i=0,t=0;i<C.size();i++)
    {
        t+=C[i];
        C[i]=t%10;
        t/=10;
    }
    while(C.back()==0&&C.size()>1)C.pop_back();
    return C;
}

void print(vector<int>A)
{
    for(int i=A.size()-1;i>=0;i--)
        cout<<A[i];
}

int main()
{
    cin>>a>>b;
    vector<int>A,B;
    for(int i=a.size()-1;i>=0;i--)
    {
        A.push_back(a[i]-'0');
    }
    for(int i=b.size()-1;i>=0;i--)
    {
        B.push_back(b[i]-'0');
    }

    print(mul(A,B));

    return 0;
}