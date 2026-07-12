#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;
    
    vector<pair<int, int>> add;  // 存储加操作 (位置, 加的值)
    vector<pair<int, int>> query; // 存储查询 (l, r)
    vector<int> alls;            // 所有需要离散化的坐标
    
    // 读入 n 次加操作
    for(int i = 0; i < n; i++)
    {
        int x, c;
        cin >> x >> c;
        add.push_back({x, c});
        alls.push_back(x);
    }
    
    // 读入 m 次查询
    for(int i = 0; i < m; i++)
    {
        int l, r;
        cin >> l >> r;
        query.push_back({l, r});
        alls.push_back(l);
        alls.push_back(r);
    }
    
    // 排序去重
    sort(alls.begin(), alls.end());
    alls.erase(unique(alls.begin(), alls.end()), alls.end());
    
    // 离散化后的数组
    vector<int> a(alls.size() + 1, 0);
    
    // 处理加操作
    for(auto p : add)
    {
        int x = p.first;
        int c = p.second;
        int idx = lower_bound(alls.begin(), alls.end(), x) - alls.begin() + 1;
        a[idx] += c;
    }
    
    // 计算前缀和
    vector<long long> prefix(alls.size() + 1, 0);
    for(int i = 1; i <= alls.size(); i++)
    {
        prefix[i] = prefix[i-1] + a[i];
    }
    
    // 处理查询
    for(auto q : query)
    {
        int l = q.first;
        int r = q.second;
        int left = lower_bound(alls.begin(), alls.end(), l) - alls.begin() + 1;
        int right = lower_bound(alls.begin(), alls.end(), r) - alls.begin() + 1;
        cout << prefix[right] - prefix[left - 1] << endl;
    }
    
    return 0;
}