#include <iostream>
#include <cstring>
using namespace std;

const int N = 20010;
int f[N];
int n, m;

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        int v, w, s;
        cin >> v >> w >> s;
        
        int k = 1;
        while (k <= s) {
            for (int j = m; j >= k * v; j--) {
                f[j] = max(f[j], f[j - k * v] + k * w);
            }
            s -= k;
            k *= 2;
        }
        if (s > 0) {
            for (int j = m; j >= s * v; j--) {
                f[j] = max(f[j], f[j - s * v] + s * w);
            }
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}