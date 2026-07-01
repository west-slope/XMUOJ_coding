#include<iostream>
using namespace std;
int main()
{
    int A,B,C,D;
    cin>>A>>B>>C>>D; //B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。
    if(A%2==0 && B>A && D>A && (C+D)>(A+B) && C>0)
    {
        cout<<"Accepted"<<endl;
    }
    else
    {
        cout<<"Not accepted"<<endl;
    }
}