//递归算法
//先转化为2的n次方，若n大于2也要转化
#include<iostream>
using namespace std;
string dfs(int n)
{
    string res;
    for(int i=14;i>=0;i--)//i位几就是除以2^i
    {
        if(n>>i&1)//相当于整除i位看是否是1
        {
            if(res.size())res+='+';//不是第一位要输出+
            if(!i)res+="2(0)";//i=0，相当于只剩下1
            else if(i==1)res+="2";
            else res+="2("+dfs(i)+")";
        }
    }
    
    return res;
}
int main()
{
    int n;
    cin>>n;
    cout<<dfs(n)<<endl;;


}

//总结：底数和指数均按二进制表示，利用递归实现