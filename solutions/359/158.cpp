#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 100010;
int a[N];
int n;

int main() {
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    vector<int> tails;
    
    for (int i = 0; i < n; i++) {
        auto it = lower_bound(tails.begin(), tails.end(), a[i]);
        if (it == tails.end()) {
            tails.push_back(a[i]);
        } else {
            *it = a[i];
        }
    }
    
    cout << tails.size() << endl;
    
    return 0;
}