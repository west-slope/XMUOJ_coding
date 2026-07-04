#include<iostream>
using namespace std;
#include<string>
int main()
{
    string a;
    getline(cin,a);
    for(int i=0;a[i]!='\0';i++)
    {
        cout<<a[i]<<" ";
    }
}