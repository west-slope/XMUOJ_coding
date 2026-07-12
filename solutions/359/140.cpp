#include <iostream>
#include <vector>
using namespace std;

const int N = 150010;
int p[N];

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main() {
    int n, k;
    cin >> n >> k;
    
    for (int i = 1; i <= 3 * n; i++) p[i] = i;
    
    int ans = 0;
    
    while (k--) {
        int op, x, y;
        cin >> op >> x >> y;
        
        if (x > n || y > n) {
            ans++;
            continue;
        }
        
        if (op == 1) {
            // x和y是同类
            if (find(x) == find(y + n) || find(x) == find(y + 2 * n)) {
                ans++;
            } else {
                p[find(x)] = find(y);
                p[find(x + n)] = find(y + n);
                p[find(x + 2 * n)] = find(y + 2 * n);
            }
        } else {
            // x吃y
            if (x == y || find(x) == find(y) || find(x) == find(y + 2 * n)) {
                ans++;
            } else {
                p[find(x)] = find(y + n);
                p[find(x + n)] = find(y + 2 * n);
                p[find(x + 2 * n)] = find(y);
            }
        }
    }
    
    cout << ans << endl;
    
    return 0;
}