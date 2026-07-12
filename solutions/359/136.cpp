#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int n, m;
    string pattern, text;
    
    cin >> n >> pattern;
    cin >> m >> text;
    
    // 计算next数组
    vector<int> next(n, 0);
    for (int i = 1, j = 0; i < n; i++) {
        while (j > 0 && pattern[i] != pattern[j]) {
            j = next[j - 1];
        }
        if (pattern[i] == pattern[j]) {
            j++;
        }
        next[i] = j;
    }
    
    // KMP匹配
    vector<int> positions;
    for (int i = 0, j = 0; i < m; i++) {
        while (j > 0 && text[i] != pattern[j]) {
            j = next[j - 1];
        }
        if (text[i] == pattern[j]) {
            j++;
        }
        if (j == n) {
            positions.push_back(i - n + 1); // 匹配起始位置
            j = next[j - 1]; // 继续寻找下一个匹配
        }
    }
    
    // 输出结果
    for (int i = 0; i < positions.size(); i++) {
        cout << positions[i] << (i == positions.size() - 1 ? '\n' : ' ');
    }
    
    return 0;
}