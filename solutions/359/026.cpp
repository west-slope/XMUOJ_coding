#include<iostream>
using namespace std;
int main()
{
    double a,b,c;
    cin>>a>>b>>c;
    if(a+b>c&&a+c>b&&b+c>a)
    {
        if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a)
        {
            cout<<"Right"<<endl;
        }
        else if(a*a+b*b>c*c&&a*a+c*c>b*b&&b*b+c*c>a*a)
        {
            cout<<"Acute"<<endl;
        }
        else
        {
            cout<<"Obtuse"<<endl;
        }
        if(a==b&&b==c)
        {
            cout<<"Equilateral"<<endl;
        }
        else if(a==b||b==c||a==c)
        {
            cout<<"Isosceles"<<endl;
        }
    }
    else
    {
        cout<<"Not a triangle"<<endl;
    }
}