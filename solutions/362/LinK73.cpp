//求最长下降子序列，结尾越大越好
//求最少下降子序列覆盖全部

#include<iostream>
#include<sstream>//stream stream输入流
#include<algorithm>

using namespace std;

const int N=1010;
int n;
int h[N],f[N],q[N];

int main()
{
    string line;
    getline(cin,line);
    stringstream ssin(line);//后面的ssin=cin
    while(ssin>>h[n])n++;

    int res=0,cnt=0;//cnt 表示当前 q 中有效元素的个数
    for(int i=0;i<n;i++)
    {
        f[i]=1;
        for(int j=0;j<i;j++)//同最长上升子序列
            if(h[i]<=h[j])
                f[i]=max(f[i],f[j]+1);
        res=max(res,f[i]);

        int k=0;//贪心算法
        while(k<cnt&&q[k]<h[i])k++;//从 q[0] 开始向后找，找到第一个 >= h[i] 的位置。
        if(k==cnt)q[cnt++]=h[i];//说明所有列的末尾都比 h[i] 矮，没有列能接住他 → 新建一列
        else q[k]=h[i];//否则，找到了能接住他的列（第 k 列）→ 把他放在这一列的末尾，更新这一列的末尾为 h[i]

    }
    cout<<res<<endl;;
    cout<<cnt<<endl;;


    return 0;

}