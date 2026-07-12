#include <iostream>
#include <algorithm>
using namespace std;

const int N = 100010;
const int M = 200010;
int p[N];
int n, m;

struct Edge {
    int a, b, w;
    bool operator< (const Edge &W) const {
        return w < W.w;
    }
} edges[M];

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main() {
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) p[i] = i;
    
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        edges[i] = {a, b, w};
    }
    
    sort(edges, edges + m);
    
    int res = 0, cnt = 0;
    
    for (int i = 0; i < m; i++) {
        int a = edges[i].a, b = edges[i].b, w = edges[i].w;
        int pa = find(a), pb = find(b);
        
        if (pa != pb) {
            p[pa] = pb;
            res += w;
            cnt++;
        }
    }
    
    if (cnt < n - 1) cout << "impossible" << endl;
    else cout << res << endl;
    
    return 0;
}