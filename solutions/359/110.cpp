#include<iostream>
#include<string>
#include<cstring>
#include<algorithm>
#include<vector>
using namespace std;
typedef long long LL;

vector<int>add(vector<int> &A,vector<int>&B)
{
    vector<int>C;
    for(int i=0,t=0;i<A.size()||i<B.size()||t;i++)
    {
        if(i<A.size())t+=A[i];
        if(i<B.size())t+=B[i];
        C.push_back(t%10);
        t/=10;
    }
    return C;
}

void print(vector<int>A)
{
    for(int i=A.size()-1;i>=0;i--)
        cout<<A[i];
    cout<<endl;
}

int main()
{
    string a,b;
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

    print(add(A,B));

}




// int main()
// {
//     string arr[3];
//     int a[3][100001]={0};
//     cin>>arr[0];
//     cin>>arr[1];
//     int a0=arr[0].length(),a1=arr[1].length();
//     int m=max(a0,a1);
//     for(int i=0;i<a0;i++)
//     {
//         a[0][i]=arr[0][a0-i-1]-'0';
//     }
//     for(int i=0;i<a1;i++)
//     {
//         a[1][i]=arr[1][a1-i-1]-'0';
//     }
//     for(int i=0;i<m;i++)
//     {
//         a[2][i]+=a[0][i]+a[1][i];
//         if(a[2][i]>=10)
//         {
//             a[2][i]-=10;
//             a[2][i+1]++;
//         }
//     }
//     for(int i=m;i>=0;i--)
//     {
//         if(i==m&&a[2][m]==0)continue;
//         cout<<a[2][i];
//     }





// }