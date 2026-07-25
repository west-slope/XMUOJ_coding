#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

// 预计算10的幂次
int p10[10] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000};

// 获取数字n中从第l位到第r位构成的数值（从高位到低位）
// 例如：num = [1,2,3,4]（表示数字1234），l=3, r=1，返回234
int get_num(vector<int>& num, int l, int r) {
    if (l < r) return 0;
    int ans = 0;
    for (int i = l; i >= r; i--) {
        ans = ans * 10 + num[i];
    }
    return ans;
}

// 统计从1到n中数字x出现的次数
int count(int n, int x) {
    if (n <= 0) return 0;
    
    // 将n的每一位存入数组，num[0]存个位
    vector<int> num;
    while (n) {
        num.push_back(n % 10);
        n /= 10;
    }
    
    int len = num.size();
    int ans = 0;
    
    // 从高位向低位遍历
    // 如果x==0，跳过最高位，因为最高位不能为0
    for (int i = len - 1 - (x == 0); i >= 0; i--) {
        // 当前位左边的高位部分
        int high = get_num(num, len - 1, i + 1);
        // 当前位右边的低位部分的位数
        int low_len = i;
        
        // 情况1：高位部分取 0 到 high-1
        // 当前位固定为x，低位任意
        ans += high * p10[low_len];
        
        // 当x==0时，高位不能全为0（否则会产生前导零）
        if (x == 0) {
            ans -= p10[low_len];
        }
        
        // 情况2：高位部分取 high
        // 比较当前位数字与x的关系
        if (num[i] == x) {
            // 当前位相等，低位取 0 到 low_num
            int low_num = get_num(num, i - 1, 0);
            ans += (low_num + 1);
        } else if (num[i] > x) {
            // 当前位大于x，低位任意
            ans += p10[low_len];
        }
        // 如果当前位小于x，贡献为0
    }
    
    return ans;
}

int main() {
    int a, b;
    while (cin >> a >> b) {
        if (a == 0 && b == 0) break;
        if (a > b) swap(a, b);
        
        for (int i = 0; i < 10; i++) {
            int result = count(b, i) - count(a - 1, i);
            if (i > 0) cout << " ";
            cout << result;
        }
        cout << endl;
    }
    return 0;
}