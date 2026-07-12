#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 100010;
vector<int> g[N];
int color[N];
int n, m;

bool dfs(int u, int c) {
    color[u] = c;
    
    for (int i = 0; i < g[u].size(); i++) {
        int v = g[u][i];
        if (!color[v]) {
            if (!dfs(v, 3 - c)) return false;
        } else if (color[v] == c) {
            return false;
        }
    }
    
    return true;
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    
    bool flag = true;
    for (int i = 1; i <= n; i++) {
        if (!color[i]) {
            if (!dfs(i, 1)) {
                flag = false;
                break;
            }
        }
    }
    
    if (flag) cout << "Yes" << endl;
    else cout << "No" << endl;
    
    return 0;
}