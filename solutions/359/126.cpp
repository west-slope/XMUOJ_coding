#include<iostream>
#include<algorithm>
using namespace std;
//贪心算法
struct Node 
{ 
    int l, r; 
};

bool cmp(Node a, Node b) 
{ 
    return a.l < b.l; 
}

int main() {
    int n;
    cin >> n;
    if (n == 0) { cout << 0; return 0; }
    Node a[5000];
    for (int i = 0; i < n; i++) cin >> a[i].l >> a[i].r;
    sort(a, a + n, cmp);
    int cnt = 1, curR = a[0].r;
    for (int i = 1; i < n; i++) {
        if (a[i].l <= curR) curR = max(curR, a[i].r);
        else { cnt++; curR = a[i].r; }
    }
    cout << cnt;
    return 0;
}