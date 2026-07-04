#include<iostream>
#include<stack>
#include<string>
using namespace std;
int main()
{
    stack<int>in,out;
    int n;
    string a;
    while(cin>>a)
    {
        if(a=="push")
        {
            cin>>n;
            in.push(n);
        }
        else if(a=="pop")
        {
            if(out.empty())
            {
                while(!in.empty())
                {
                    out.push(in.top());
                    in.pop();
                }
                
            }
            if(!out.empty())
            {
                cout<<out.top()<<endl;
                out.pop();
            }
        }
        else if(a=="empty")
        {
            if(out.empty()&&in.empty())
            {
                cout<<"yes"<<endl;
            }
            else cout<<"no"<<endl;
        }
    }
}