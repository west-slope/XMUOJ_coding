//枚举算法
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
#include<vector>
using namespace std;


int main()
{
    int target, n;
    cin >> target >> n;
    vector<int>a;
    for(int i=0;i<n;i++)
    {
        int x;
        cin >> x;
        a.push_back(x);
    }
    for (int i = 0; i < n - 1; i++)//把所有情况遍历一遍；现在想想可以两个指针分别在首位来进行移动
    {
        for (int j = i + 1; j < n; j++)//从i+1开始遍历（复杂度较高）
        {
            if (a[i] + a[j] == target)
            {
                cout << i << " " << j << endl;
            }
        }
    }
    return 0;
}
//总结：该解法复杂度较高，较大数据可能无法处理，需要学习新的算法。