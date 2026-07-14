#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int m;
    if (!(cin >> m)) return 0;

    vector<int> e(m + 5), ne(m + 5);
    int head = -1, idx = 0;

    auto add_head = [&](int x) {
        e[idx] = x;
        ne[idx] = head;
        head = idx++;
    };

    auto add = [&](int k, int x) {
        e[idx] = x;
        ne[idx] = ne[k];
        ne[k] = idx++;
    };

    auto del = [&](int k) {
        if (k == -1) head = ne[head];
        else ne[k] = ne[ne[k]];
    };

    while (m--)
    {
        char op;
        cin >> op;
        if (op == 'H')
        {
            int x;
            cin >> x;
            add_head(x);
        }
        else if (op == 'I')
        {
            int k, x;
            cin >> k >> x;
            add(k - 1, x);
        }
        else
        {
            int k;
            cin >> k;
            if (k == 0) del(-1);
            else del(k - 1);
        }
    }

    for (int i = head; i != -1; i = ne[i]) cout << e[i] << ' ';
    cout << "\n";
}
