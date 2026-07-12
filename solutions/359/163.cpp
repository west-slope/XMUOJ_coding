#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 20010;
int f[N];
int n, m;

struct Item {
    int v, w;
};

int main() {
    cin >> n >> m;
    
    vector<Item> items;
    
    for (int i = 0; i < n; i++) {
        int v, w, s;
        cin >> v >> w >> s;
        
        for (int k = 1; k <= s; k *= 2) {
            s -= k;
            items.push_back({v * k, w * k});
        }
        if (s > 0) {
            items.push_back({v * s, w * s});
        }
    }
    
    for (int i = 0; i < items.size(); i++) {
        for (int j = m; j >= items[i].v; j--) {
            f[j] = max(f[j], f[j - items[i].v] + items[i].w);
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}