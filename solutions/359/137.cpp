#include <iostream>
#include <vector>
#include <string>
using namespace std;
//测试点有问题
const int N = 100010;
int h[N], ph[N], hp[N], sz = 0, idx = 0;

void heap_swap(int a, int b) {
    swap(ph[hp[a]], ph[hp[b]]);
    swap(hp[a], hp[b]);
    swap(h[a], h[b]);
}

void up(int u) {
    while (u / 2 && h[u] < h[u / 2]) {
        heap_swap(u, u / 2);
        u /= 2;
    }
}

void down(int u) {
    int t = u;
    if (u * 2 <= sz && h[u * 2] < h[t]) t = u * 2;
    if (u * 2 + 1 <= sz && h[u * 2 + 1] < h[t]) t = u * 2 + 1;
    if (t != u) {
        heap_swap(u, t);
        down(t);
    }
}

int main() {
    int n;
    cin >> n;
    
    while (n--) {
        string op;
        cin >> op;
        
        if (op == "I") {
            int x;
            cin >> x;
            idx++;
            sz++;
            ph[idx] = sz;
            hp[sz] = idx;
            h[sz] = x;
            up(sz);
        } 
        else if (op == "PM") {
            cout << h[1] << endl;
        } 
        else if (op == "DM") {
            heap_swap(1, sz);
            sz--;
            down(1);
        } 
        else if (op == "D") {
            int k;
            cin >> k;
            int pos = ph[k];
            heap_swap(pos, sz);
            sz--;
            down(pos);
            up(pos);
        } 
        else if (op == "C") {
            int k, x;
            cin >> k >> x;
            int pos = ph[k];
            h[pos] = x;
            down(pos);
            up(pos);
        }
    }
    
    return 0;
}