#include <iostream>
#include <cstring>
using namespace std;

const int N = 210;
const int INF = 0x3f3f3f3f;
int d[N][N];
int n, m, q;

int main() {
    cin >> n >> m >> q;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == j) d[i][j] = 0;
            else d[i][j] = INF;
        }
    }
    
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        d[a][b] = min(d[a][b], w);
    }
    
    for (int k = 1; k <= n; k++) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (d[i][k] != INF && d[k][j] != INF) {
                    d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
                }
            }
        }
    }
    
    while (q--) {
        int a, b;
        cin >> a >> b;
        if (d[a][b] == INF) cout << "impossible" << endl;
        else cout << d[a][b] << endl;
    }
    
    return 0;
}