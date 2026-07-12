#include <iostream>
#include <cstring>
using namespace std;

const int N = 310;
int g[N][N];
int f[N][N];
int r, c;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

int dfs(int x, int y) {
    if (f[x][y] != -1) return f[x][y];
    
    f[x][y] = 1;
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        if (nx >= 1 && nx <= r && ny >= 1 && ny <= c && g[nx][ny] < g[x][y]) {
            f[x][y] = max(f[x][y], dfs(nx, ny) + 1);
        }
    }
    
    return f[x][y];
}

int main() {
    cin >> r >> c;
    
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            cin >> g[i][j];
        }
    }
    
    memset(f, -1, sizeof(f));
    
    int ans = 0;
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            ans = max(ans, dfs(i, j));
        }
    }
    
    cout << ans << endl;
    
    return 0;
}