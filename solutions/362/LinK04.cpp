//使用容器内的sort函数即可
#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main()
{
    int T;
    cin >> T;
    while (T--)
    {
        int N, value;
        cin >> N;
        vector<int>numbers;//用容器方便排序
        for (int i = 0; i < N; i++)//装入数据
        {
            cin >> value;
            numbers.push_back(value);
        }
        sort(numbers.begin(), numbers.end());//排序
        for (int i = 0; i < N; i++)//输出
        {
            if (i > 0)cout << " ";
            cout << numbers[i];
        }
        cout << endl;
    }
    
    return 0;
}

//总结：学习了vetctor的用法