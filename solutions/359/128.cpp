#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int N,x,temp=0;
    vector<int>a;//容器用于存放数据
    cin>>N;
    for(int i=0;i<N;i++)
    {
        cin>>x;
        a.push_back(x);
    }
    while(N!=1)//每次排序然后最小的两个元素相加代价最小
    {
        sort(a.begin(),a.end());
        a[1]=a[0]+a[1];
        temp+=a[1];
        a.erase(a.begin());//相加完删除第一项
        N--;

    }
    cout<<temp<<endl;

}