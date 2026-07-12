#include <iostream>
#include <cstring>
#include <string>
using namespace std;

const int N = 1010;
int dp[N][N];
string dict[N];
int n, m;

int edit_distance(string a, string b) {
    int len1 = a.length(), len2 = b.length();
    
    for (int i = 0; i <= len1; i++) dp[i][0] = i;
    for (int j = 0; j <= len2; j++) dp[0][j] = j;
    
    for (int i = 1; i <= len1; i++) {
        for (int j = 1; j <= len2; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
            }
        }
    }
    
    return dp[len1][len2];
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        cin >> dict[i];
    }
    
    while (m--) {
        string s;
        int k;
        cin >> s >> k;
        
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if (edit_distance(dict[i], s) <= k) {
                cnt++;
            }
        }
        
        cout << cnt << endl;
    }
    
    return 0;
}