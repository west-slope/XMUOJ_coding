#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 6010;
vector<int> g[N];
int happy[N];
int dp[N][2];
bool has_parent[N];
int n;

void dfs(int u) {
    dp[u][0] = 0;
    dp[u][1] = happy[u];
    
    for (int i = 0; i < g[u].size(); i++) {
        int v = g[u][i];
        dfs(v);
        dp[u][0] += max(dp[v][0], dp[v][1]);
        dp[u][1] += dp[v][0];
    }
}

int main() {
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        cin >> happy[i];
    }
    
    for (int i = 0; i < n - 1; i++) {
        int l, k;
        cin >> l >> k;
        g[k].push_back(l);
        has_parent[l] = true;
    }
    
    int root = 1;
    while (has_parent[root]) root++;
    
    dfs(root);
    
    cout << max(dp[root][0], dp[root][1]) << endl;
    
    return 0;
}