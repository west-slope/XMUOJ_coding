//广搜
#include <iostream>
#include<vector>
#include<queue>

using namespace std;
int k, m, n;

int get_int_sum(int x)//用于计算行列坐标和
{
    int s = 0;
    while (x)s += x % 10, x /= 10;//取出每个位的值加到s
    return s;
}

int get_pair_sum(pair<int, int>p)
{
    int s = 0;
    s += get_int_sum(p.first);
    s += get_int_sum(p.second);
    return s;
}
//vector<vector<bool>>st(rows, vector<bool>(cols, false));//长为cols，每一项为false
//queue < pair<int, int>>q;

int bfs(int threshold, int rows, int cols)
{
    if (!rows || !cols)return 0;

    vector<vector<bool>>st(rows, vector<bool>(cols, false));
    queue<pair<int, int>>q;

    int dx[4] = { -1,0,1,0 }, dy[4] = { 0,1,0,-1 };

    int res = 0;
    q.push({ 0,0 });
    while (q.size())//广搜模板
    {
        auto t = q.front();
        q.pop();
        if (st[t.first][t.second] || get_pair_sum(t) > threshold)continue;//st[t.first][t.second]为true
        res++;
        st[t.first][t.second] = true;

        for (int i = 0; i < 4; i++)
        {
            int x = t.first + dx[i], y = t.second + dy[i];
            if (x >= 0 && x < rows && y >= 0 && y < cols)
                q.push({ x,y });
        }
    }
    return res;
}
int main()
{
    int ans;
    cin >> k >> m >> n;
    ans = bfs(k, m, n);
    cout << ans;
}

//总结：广搜模板加上判断区域

