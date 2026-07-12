#include <iostream>
using namespace std;

const int N = 20;
int n;
char board[N][N];
bool col[N], dg[N], udg[N]; // 列、主对角线、副对角线

// 逐行放置皇后，r为当前行
void dfs(int r) {
    if (r == n) {
        // 输出解
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << board[i][j];
            }
            cout << '\n';
        }
        cout << '\n'; // 解之间空行
        return;
    }

    for (int c = 0; c < n; c++) {
        // r+c相同→同一主对角线，r-c+n相同→同一副对角线
        if (!col[c] && !dg[r + c] && !udg[r - c + n]) {
            col[c] = dg[r + c] = udg[r - c + n] = true;
            board[r][c] = 'Q';
            dfs(r + 1);
            board[r][c] = '.';
            col[c] = dg[r + c] = udg[r - c + n] = false;
        }
    }
}

int main() {
    cin >> n;
    // 初始化棋盘
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            board[i][j] = '.';
        }
    }
    dfs(0);
    return 0;
}
