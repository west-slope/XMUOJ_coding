#include <iostream>
#include <cstring>
using namespace std;

const int N = 12;
long long f[N][1 << N];
int n, m;

void dfs(int col, int row, int cur_state, int next_state) {
    if (row == n) {
        f[col + 1][next_state] += f[col][cur_state];
        return;
    }
    
    if (cur_state & (1 << row)) {
        dfs(col, row + 1, cur_state, next_state);
    } else {
        // 竖放
        dfs(col, row + 1, cur_state, next_state | (1 << row));
        // 横放
        if (row + 1 < n && !(cur_state & (1 << (row + 1)))) {
            dfs(col, row + 2, cur_state, next_state);
        }
    }
}

int main() {
    while (cin >> n >> m && n && m) {
        if (n > m) swap(n, m);
        
        memset(f, 0, sizeof(f));
        f[0][0] = 1;
        
        for (int col = 0; col < m; col++) {
            for (int state = 0; state < (1 << n); state++) {
                if (f[col][state]) {
                    dfs(col, 0, state, 0);
                }
            }
        }
        
        cout << f[m][0] << endl;
    }
    
    return 0;
}