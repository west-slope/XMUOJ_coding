#include <iostream>
#include <cstring>
#include <cmath>
#include <algorithm>

using namespace std;

#define _For(a,b,c) for(int a=b;a<=c;++a)
#define _RFor(a,b,c) for(int a=b;a>=c;--a)
#define Clear(a,b) memset(a,b,sizeof(a))

const int Inf = 0x3f3f3f3f; 
const int Inf2 = 0x7fffffff;

int W, H, M; // 宽、高、切成M块(只需要M-1斩)
int minMax[27][27][407]; // W, H最高是20, 所以M最多斩成400块

// DFS 搜索函数
int dfs(int wide, int height, int cutNumber) {
    // 如果当前矩形的格子总数小于需要的切块数（切块数+1），不够切，返回无穷大
    if (wide * height < cutNumber + 1) 
        return Inf;
    
    // 切割完毕（不需要再切了），当前子矩形面积即为返回值
    if (cutNumber == 0) 
        return wide * height;
    
    // 记忆化：如果该状态已被搜索过（不为初始值-1），直接返回结果
    if (minMax[wide][height][cutNumber] != -1) 
        return minMax[wide][height][cutNumber];

    int minMArea = Inf;

    // 第一斩是竖斩，产生的各种状态
    _For(i, 1, wide - 1) {
        // 枚举左右两半的各种切法，若左边切为k块，右边就是cutNumber-1-k
        _For(k, 0, cutNumber - 1) {
            int m1 = dfs(i, height, k); // 搜索左侧的切法
            int m2 = dfs(wide - i, height, cutNumber - 1 - k); // 搜索右侧的切法
            minMArea = min(minMArea, max(m1, m2)); // 取当前方案下的最小最大值
        }
    }

    // 第一斩是横斩，产生的各种状态
    _For(j, 1, height - 1) {
        // 枚举上下两半的各种切法
        _For(k, 0, cutNumber - 1) {
            int r1 = dfs(wide, j, k); // 搜索上半的切法
            int r2 = dfs(wide, height - j, cutNumber - 1 - k); // 搜索下半的切法
            minMArea = min(minMArea, max(r1, r2));
        }
    }

    // 记录并返回当前状态的最优解
    return minMax[wide][height][cutNumber] = minMArea;
}

int main() {
    // 多组输入，直到遇到 W=0 且 H=0 结束
    while (true) {
        cin >> W >> H >> M;
        if (W == 0 && H == 0)
            break;
            
        // 初始化记忆化数组为 -1（表示未访问）
        Clear(minMax, -1);
        
        // 调用 dfs，注意这里传的 cutNumber 是 M-1（因为M块需要切M-1刀）
        cout << dfs(W, H, M - 1) << endl;
    }
    return 0;
}