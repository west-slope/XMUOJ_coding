//整型浮点数转字符串: to_string( )
//字符串转浮点数：stof( )

#include<iostream>
#include<string>

using namespace std;

string a;

double p()
{
    cin>>a;
    switch(a[0])
    {
        case '+':return p()+p();break;
        case '-':return p()-p();break;
        case '*':return p()*p();break;
        case '/':return p()/p();break;
        default:return stof(a);break;
    }


}


int main()
{
    printf("%f\n", p());

    return 0;
}
//先看符号，后做运算