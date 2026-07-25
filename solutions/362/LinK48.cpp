#include <iostream>
#include <algorithm>
#include <cstdio>
using namespace std;

const int N = 9;
int g[9][9];            
int row[9], col[9], cell[3][3];
int ones[1 << 9];       
int LOG[1 << 9];       
int ans = -1;         


void init() {

    for (int i = 0; i < N; i++) {
        row[i] = (1 << N) - 1;
        col[i] = (1 << N) - 1;
    }
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cell[i][j] = (1 << N) - 1;
        }
    }
    for (int i = 0; i < 1 << N; i++) {
        int s = 0;
        for (int j = i; j; j -= j & -j) s++;
        ones[i] = s;
    }
    for (int i = 0; i < N; i++) LOG[1 << i] = i;
}

inline int lowbit(int x) {
    return x & -x;
}

inline int get_score(int x, int y) {
    return 10 - max(abs(x - 4), abs(y - 4));
}

inline void draw(int x, int y, int t) {
    int s = 1;
    if (t > 0) g[x][y] = t;
    else {
        s = -1;
        t = -t;
        g[x][y] = 0;
    }
    t--; 
    row[x] -= s << t;
    col[y] -= s << t;
    cell[x / 3][y / 3] -= s << t;
}

inline int get(int x, int y) {
    return row[x] & col[y] & cell[x / 3][y / 3];
}


void dfs(int cnt, int score) {
    if (!cnt) {
        ans = max(ans, score);
        return;
    }

    int x, y, mins = 10;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (!g[i][j]) {
                int state = get(i, j);
                if (ones[state] < mins) {
                    mins = ones[state];
                    x = i;
                    y = j;
                }
            }
        }
    }

    for (int i = get(x, y); i; i -= lowbit(i)) {
        int t = LOG[lowbit(i)] + 1; 
        draw(x, y, t);
        dfs(cnt - 1, score + t * get_score(x, y));
        draw(x, y, -t); 
    }
}

int main() {
    init();
    int cnt = 0, score = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            int x;
            scanf("%d", &x);
            if (x) {
                draw(i, j, x);
                score += x * get_score(i, j);
            } else {
                cnt++;
            }
        }
    }
    
    dfs(cnt, score);
    printf("%d\n", ans);
    return 0;
}

//总结：和前面相比多了一个计算分数的，可以边深搜边算