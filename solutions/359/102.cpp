#include<iostream>
#include<string>
#include<algorithm>
#include<iomanip>
using namespace std;
struct sanyuan
{
    int num;
    double m;
    string str;
};

int main()
{
    int N;
    cin>>N;
    sanyuan s[200]; 
    for(int i=0;i<N;i++)
    {
        cin>>s[i].num>>s[i].m>>s[i].str;
    }
    for(int i=0;i<N-1;i++)
    {
        for(int j=0;j<N-i-1;j++)
        {
            if(s[j].num>s[j+1].num||(s[j].num==s[j+1].num&&s[j].m>s[j+1].m))
            {
                sanyuan temp=s[j];
                s[j]=s[j+1];
                s[j+1]=temp;
            }
        }
    }
    for(int i=0;i<N;i++)
    {
        cout<<s[i].num<<" "<<fixed<<setprecision(2)<<s[i].m<<" "<<s[i].str<<endl;
    }
}