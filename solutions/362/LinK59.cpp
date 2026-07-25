#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <deque>

using namespace std;

#define For(i, a, b) for (int i = a; i < b; i++)
#define INF 0x3f3f3f3f

typedef pair<int, int> PII;

const int N = 507;

int n, m;                 // 数据区域的 n, m
char area[N][N];          // 电路连接图 (无向图，存储 "\" 或者 "/")
int dist[N][N];           // 顶点的距离值

// 顶点坐标是 [0, n] [0, m]
bool isInside(int x, int y) {
    return x >= 0 && x <= n && y >= 0 && y <= m;
}

int getWeight(int x, int y, int dir) {
    // 相邻对角线的 4 条边的偏移量
    int ix[4] = {-1, -1, 0, 0}, iy[4] = {-1, 0, 0, -1};
    char edge[] = "\\/\\/\\/"; // 边如果是这个方向，则权重为0，否则为1
    
    int newX = x + ix[dir], newY = y + iy[dir];
    // 读数据取边
    if (area[newX][newY] == edge[dir])
        return 0;
    else
        return 1;
}

void BuildMap(int n, int m) {
    For(i, 0, n) {
        For(j, 0, m) {
            cin >> area[i][j];
        }
    }
}

int bfs() {
    // 扩展相邻点 (对角线 4 个点), 左上、右上、右下、左下
    int dx[4] = {-1, -1, 1, 1}, dy[4] = {-1, 1, 1, -1};
    
    // 节点距离设置成正无穷大
    memset(dist, INF, sizeof(dist));
    deque<PII> dq;
    dq.push_back({0, 0});    // {0, 0} 点，从左上角开始广搜，终点是右下角
    dist[0][0] = 0;          // {0, 0} 到自己的距离
    
    while (dq.size()) {
        auto qHead = dq.front(); // 从 qHead 到 Next 点
        dq.pop_front();
        PII next;
        
        For(i, 0, 4) {
            next.first = qHead.first + dx[i];
            next.second = qHead.second + dy[i];
            
            if (isInside(next.first, next.second)) {
                int weight = getWeight(qHead.first, qHead.second, i); // 取边的权重，返回 0 或者 1
                
                if (dist[next.first][next.second] > dist[qHead.first][qHead.second] + weight) {
                    dist[next.first][next.second] = dist[qHead.first][qHead.second] + weight;
                    // 保证 dq 的 front 小，back 大
                    if (weight == 1)
                        dq.push_back(next);
                    if (weight == 0)
                        dq.push_front(next);
                }
            }
        }
    }
    
    if (dist[n][m] == 0x3f3f3f3f)
        return -1; // 无法抵达终点，无通路
    else
        return dist[n][m]; // 返回从 {0, 0} 到 {n, m} 的距离值
}

int main() {
    int T;
    cin >> T;
    while (T--) {
        cin >> n >> m;
        memset(area, -1, sizeof(area));
        BuildMap(n, m);
        
        int res = bfs();
        if (res == -1)
            cout << "NO SOLUTION" << endl;
        else
            cout << res << endl;
    }
    return 0;
}