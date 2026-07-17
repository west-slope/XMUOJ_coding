
//数据很大，必须全用long long！
//每次运算后都要除余
#include<iostream>
#include<string>
#include<vector>
#include<cstring>
using namespace std;


string a;//记录原始字符串
vector<long long>b;//记录剩下待相加的数
int found;//判断是否为‘*’，乘的下一个加号不用push_back(a[i-1])
long long res=0;
long long caculate(int n)
{
    int i;
    for(i=1;i<2*n-1;i+=2)
    {
        if(a[i]=='*')
        {
            long long temp=(a[i-1]-'0')*(a[i+1]-'0');//易错：字符转化为数字要-'0'
            while(i+2<2*n-1&&a[i+2]=='*')//i+2<2*n-1防止越界（易错）
            {//为了保证连乘的情况
                i+=2;
                temp*=(a[i+1]-'0');
                temp%=1000000007;//马上取余防止溢出
            }
            b.push_back(temp);
            found=1;
        }
        else if(a[i]=='+') 
        {
            if(!found)
            {
                b.push_back(a[i-1]-'0');
            }
            else found=0;//不用计入，清除状态
        }
    }
    if(a[i-2]=='+')//最后一位是加的话特殊处理
        b.push_back(a[i-1]-'0');
    for(int i=0;i<b.size();i++)//累加剩余的数
    {
        res+=b[i];
        res%=1000000007;
    }

    return res;
}


int main()
{
    long long n;
    cin>>n;
    cin>>a;
    cout<<caculate(n)<<endl;
}

//易错：连续乘法要累积处理