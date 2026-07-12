#include<iostream>
#include<string>
#include<algorithm>
#include<vector>

using namespace std;

string a;
int b,m;
vector<int>div(vector<int>&A,int b)
{
    vector<int>C(A.size()-to_string(b).length());
    int t=0;
    for(int i=0;i<A.size();i++)
    {
        t*=10;
        t+=A[i];
        C.push_back(t/b);
        t%=b;
    }
    m=t;
    while(C.front()==0&&C.size()>1)C.erase(C.begin()); 
    return C;
}

void print(vector<int>A)
{

    for(int i=0;i<A.size();i++)
    {
        cout<<A[i];
    }
    cout<<endl;
    cout<<m<<endl;
}

int main()
{
    cin>>a>>b;
    vector<int>A;
    for(int i=0;i<a.size();i++)
    {
        A.push_back(a[i]-'0');
    }
    print(div(A,b));

    return 0;
}
