#include<iostream>//输入样例有误
#include<string>
using namespace std;
int main()
{
    string a;
    char b;
    cin>>a;
    cin>>b;
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]==b)a[i]='#';
    }
    cout<<a<<endl;
}