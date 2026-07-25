#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// 9种操作对9个时钟的影响（0~8对应A~I，操作编号1~9）
int moveEffect[9][9] = {
    {1, 1, 0, 1, 1, 0, 0, 0, 0}, // 操作1: ABDE
    {1, 1, 1, 0, 0, 0, 0, 0, 0}, // 操作2: ABC
    {0, 1, 1, 0, 1, 1, 0, 0, 0}, // 操作3: BCEF
    {1, 0, 0, 1, 0, 0, 1, 0, 0}, // 操作4: ADG
    {0, 1, 0, 1, 1, 1, 0, 1, 0}, // 操作5: BDEFH
    {0, 0, 1, 0, 0, 1, 0, 0, 1}, // 操作6: CFI
    {0, 0, 0, 1, 1, 0, 1, 1, 0}, // 操作7: DEGH
    {0, 0, 0, 0, 0, 0, 1, 1, 1}, // 操作8: GHI
    {0, 0, 0, 0, 1, 1, 0, 1, 1}  // 操作9: EFHI
};

int init[9];          // 初始时钟状态
int times[9];         // 当前枚举的每种操作次数
int bestTimes[9];     // 最优解的操作次数
int minTotal = 1e9;   // 最小总步数

// 检查当前方案是否可行
bool check() {
    int temp[9] = {0};
    for (int i = 0; i < 9; i++) {
        if (times[i] == 0) continue;
        for (int j = 0; j < 9; j++) {
            temp[j] += times[i] * moveEffect[i][j];
        }
    }
    for (int j = 0; j < 9; j++) {
        if ((init[j] + temp[j]) % 4 != 0) return false;
    }
    return true;
}

// 递归枚举所有操作次数（0~3）
void dfs(int op) {
    if (op == 9) {
        if (check()) {
            int total = 0;
            for (int i = 0; i < 9; i++) total += times[i];
            // 取总次数最小的方案，若总次数相同，取字典序最小（枚举顺序天然满足）
            if (total < minTotal) {
                minTotal = total;
                for (int i = 0; i < 9; i++) bestTimes[i] = times[i];
            }
        }
        return;
    }
    for (int i = 0; i < 4; i++) {
        times[op] = i;
        dfs(op + 1);
    }
}

int main() {
    for (int i = 0; i < 9; i++) cin >> init[i];

    dfs(0);

    // 输出最优解的操作序列（按操作编号升序，重复输出每个操作 bestTimes[i] 次）
    bool first = true;
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < bestTimes[i]; j++) {
            if (!first) cout << " ";
            cout << i + 1;
            first = false;
        }
    }
    cout << endl;

    return 0;
}