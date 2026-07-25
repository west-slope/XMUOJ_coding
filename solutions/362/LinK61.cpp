#include <iostream>
#include <cstring>
#include <algorithm>
#include <queue>

using namespace std;

// 使用数组实现邻接表，无向图
const int N = 1010;          // 顶点数（城市）
const int M = 10100;         // 边的数目
const int maxCapacity = 107; // 油箱容量

int oilPrice[N];             // 每个城市的油价
int expenses[N][maxCapacity]; // 记录在当前城市、当前剩余油量下的最少花费
int head[N], Next[2 * M], ver[2 * M], dist[2 * M], tot = -1; // 邻接表
bool visited[N][maxCapacity]; // 记录是否已经访问过某个(城市, 油量)状态

// 添加无向边
void add(int x, int y, int z) {
    ver[++tot] = y;      // 这条边到达的点
    Next[tot] = head[x]; // 链表链接
    head[x] = tot;       // 标记 x 起点
    dist[tot] = z;       // 边权值（此路径消耗的油量）
}

struct node {
    int city, fuel, money; // 城市, 赛车油量, 累计花费
    
    node(int x, int y, int z) : city(x), fuel(y), money(z) {}
    
    // 重载 < 运算符，使得优先队列按 money 从小到大的顺序排列（小根堆）
    friend bool operator<(node a, node b) {
        return a.money > b.money; 
    }
};

priority_queue<node> q; // 优先队列

// 判断并执行在当前城市买 1 升油的操作
bool buyOneOil(int city, int fuel, int c) {
    // 如果油还在油箱限制内，且这买油一定更好的话
    if (fuel + 1 <= c && !visited[city][fuel + 1] && 
        (expenses[city][fuel + 1] > expenses[city][fuel] + oilPrice[city])) {
        return true;
    } else {
        return false;
    }
}

// 判断并执行沿着当前路径前往下一个城市的操作
bool isNextRoad(int fuel, int cityid, int d, int money) {
    // 剩余油大于路径花费油、下一个状态未被访问过、并且花费更便宜
    if (fuel >= d && !visited[cityid][fuel - d] && 
        expenses[cityid][fuel - d] > money) {
        return true;
    } else {
        return false;
    }
}

// Dijkstra 算法逻辑
int BFS(int currentCapacity, int start, int target) {
    // 清空优先队列，避免上次查询的数据残留
    while (!q.empty()) q.pop();
    
    // 初始化状态数组
    memset(visited, false, sizeof(visited));
    memset(expenses, 0x3f, sizeof(expenses));
    
    // 从起点开始搜索
    expenses[start][0] = 0;
    q.push(node(start, 0, 0)); // s 为起点，0 为剩余油量，0 为初始花费
    
    while (!q.empty()) {
        node qHead = q.top();
        q.pop();
        
        int city = qHead.city;
        int fuel = qHead.fuel;
        int money = qHead.money;
        
        // 如果已经找到终点，直接返回最小花费（优先队列保证了最优性）
        if (city == target) return money;
        
        // 如果当前状态已经计算过（防止重复入队），则跳过
        if (visited[city][fuel]) continue;
        visited[city][fuel] = true; // 标记为已访问
        
        // 操作 1：在当前城市买一升油
        if (buyOneOil(city, fuel, currentCapacity)) {
            expenses[city][fuel + 1] = expenses[city][fuel] + oilPrice[city];
            q.push(node(city, fuel + 1, expenses[city][fuel + 1]));
        }
        
        // 操作 2：前往相邻城市
        for (int i = head[city]; i != -1; i = Next[i]) {
            int nextCity = ver[i];
            int d = dist[i]; // 此路径需要消耗的油量
            if (isNextRoad(fuel, nextCity, d, money)) {
                expenses[nextCity][fuel - d] = money; // 沿着道路走，花费不增加
                q.push(node(nextCity, fuel - d, money));
            }
        }
    }
    
    return -1; // 无可达路径
}

int main() {
    // 关闭流同步，提高 I/O 效率
    ios::sync_with_stdio(false);
    
    int n, m;
    cin >> n >> m;
    
    // 代表 n 个城市的单位油价
    for (int i = 0; i < n; i++) {
        cin >> oilPrice[i];
    }
    
    // 初始化头结点为 -1 (注意与截图源代码保持一致，通常用 -1 作为邻接表终点)
    memset(head, -1, sizeof(head));

    // 每一行包括三个整数 u, v, d，表示城市 u 与城市 v 之间存在道路，且赛车从 u 到 v 消耗油量为 d
    for (int i = 1; i <= m; i++) {
        int u, v, d;
        cin >> u >> v >> d;
        add(u, v, d); // 无向图 (u, v)
        add(v, u, d); // 无向图 (v, u)
    }
    
    // 整数 questions，代表问题数量
    int questions;
    cin >> questions;
    
    // 处理每一个询问
    while (questions--) {
        // 每行包含三个整数 c, s, e，分别表示赛车油箱容量 c、起点城市 s、终点城市 e
        int c, s, e;
        cin >> c >> s >> e;
        int res = BFS(c, s, e);
        if (res == -1) {
            printf("impossible\n");
        } else {
            printf("%d\n", res);
        }
    }
    
    return 0;
}