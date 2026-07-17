//递归算法
#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

const int N=10;
bool st[N];//判断是否有选过
char arr[N]={0};//记录字符重新排列的数组
string a;//记录传入字符串
int len;//字符串长度

void dfs(int u)
{
    if(u>len)//递归出口
    {
        for(int i=1;i<=len;i++)
        {
            cout<<arr[i];
        }
        cout<<endl;
        return ;
    }
    else {
        for(int i=0;i<len;i++)
        {
            if(!st[i])//未被选过
            {
                st[i]=true;//设置路径
                arr[u]=a[i];
                dfs(u+1);
                arr[u]='0';//恢复现场
                st[i]=false;
            }
        }
    }
}

int main()
{
    cin>>a;
    len=a.size();//计算字符个数，相当于上一题的n
    sort(a.begin(), a.end());//要求字母序比较小的排列在前面，进行排序
    dfs(1);
    return 0;
}
////总结：递归应包含设计路径和恢复现场，避免影响以后的循环