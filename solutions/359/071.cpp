#include<iostream>
using namespace std;
#include<string>


int main()
{
    string a;
    getline(cin,a);  
    int count=0;
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]>='0'&&a[i]<='9')
            count++;
    }
    cout<<count<<endl;
}