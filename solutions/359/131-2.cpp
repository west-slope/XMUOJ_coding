//不使用数组的做法


#include<iostream>
#include<stack>
#include<string>
using namespace std;

int main()
{
    stack<int>a;
    int n,m;
    string c;
    cin>>n;
    while(n--)
    {
        cin>>c;
        if(c=="push")
        {
            cin>>m;
            a.push(m);
        }
        else if(c=="pop")
        {
            a.pop();
        }
        else if(c[0]=='q')
        {
            cout<<a.top()<<endl;
        }
        else if(c[0]=='e')
        {
            if(a.empty())
            {
                cout<<"YES"<<endl;
            }
            else cout<<"NO"<<endl;
        }
    }



}