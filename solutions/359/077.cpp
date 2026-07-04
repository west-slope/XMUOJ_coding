#include<iostream>
using namespace std;
#include<string>
#include<cstring>
int main()
{
    string a;
    int c[26]={0};
    getline(cin,a);
    char m;
    for(int i=0;a[i]!='\0';i++)
    {
        c[a[i]-'a']++;
        
    }
    for(int i=0;a[i]!='\0';i++)
    {
        if(c[a[i]-'a']==1)
        {
            cout<<a[i]<<endl;
            break;
        } 
        if(a[i+1]=='\0')
        {
            cout<<"no"<<endl;
        }
    }
}