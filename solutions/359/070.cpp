#include<iostream>
using namespace std;
#include<string>


int main()
{
    string a;
    char b[200];
    getline(cin,a);  
    int i;
    for(i=0;a[i+1]!='\0';i++)
    {
        b[i]=a[i]+a[i+1];
    }
    b[i]=a[0]+a[i];
    b[i+1]='\0';
    cout<<b;
}