#include <iostream>
#include<string>
using namespace std;

const int N = 100010; 
int st[N], tt = -1,hh=0;    // tt 指向栈顶元素位置为-1，hh指向头为0

int main() {
    int n, x;
    string op;
    cin >> n;
    
    while (n--) {
        cin >> op;
        if (op == "push") {
            cin >> x;
            st[++tt] = x;  
        } 
        else if (op == "pop") {
            hh++; 
        } 
        else if (op == "query") {
            cout << st[hh] << endl;
        } 
        else if (op == "empty") {
            if (tt<hh) cout << "YES" << endl;
            else cout << "NO" << endl;
        }
    }
    return 0;
}
