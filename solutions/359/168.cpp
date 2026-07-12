#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>
using namespace std;

int a, b;

// 得到一个数中某几个相邻的数字构成的数值
// 一定要记住从高位往低位遍历
int get_num(vector<int> num, int l, int r){
    int ans = 0;
    for (int i = l; i >= r; i --) ans = ans * 10 + num[i];
    return ans;
}

// 计算1到n的所有的数中数字x出现的次数
int count(int n, int x){
    vector<int> num;
    while (n){
        num.push_back(n % 10);
        n /= 10;
    }
    int len = num.size(), ans = 0;
    for (int i = len - 1 - !x; i >= 0; i --){ // 此处减去 !x 是精华
        // 000 ~ abc-1
        ans += get_num(num, len - 1, i + 1) * (int)pow(10, i);
        if (!x) ans -= (int)pow(10, i);  // x==0时，001 ~ abc-1
        // abc
        if (x == num[i]) ans += (get_num(num, i - 1, 0) + 1);
        else if (x < num[i]) ans += (int)pow(10, i);
    }
    return ans;

}

int main(){
    while (cin >> a >> b, a || b){ // a b 不全为0
        if (a > b) swap(a, b);
        for (int i = 0; i <= 9; i ++) printf("%d ", count(b, i) - count(a - 1, i));
        puts("");
    }

    return 0;
}

// 作者：Qiner
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/12793336/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。