#include <iostream>
#include <cstdio>

using namespace std;

const int N = 10;

int n;
int path[N];       // 从0到n-1共n个位置 存放一个排列
bool state[N];     // 存放每个数字的使用状态 true表示使用了 false表示没使用过

void dfs(int u)
{
    if (u == n)    // 一个排列填充完成
    {
        for (int i = 0; i < n; i ++) printf("%d ",path[i]);  // 注意格式 别忘了每两个数字间用空格隔开
        puts("");  // 相当于输出一个回车
        return;
    }

    for (int i = 1; i <= n; i ++)
    {
        if (!state[i])
        {
            path[u] = i;       // 把 i 填入数字排列的位置上
            state[i] = true;   // 表示该数字用过了 不能再用
            dfs(u + 1);        // 这个位置的数填好 递归到右面一个位置
            state[i] = false;  // 恢复现场 该数字后续可用
        }
    }
    // for 循环全部结束了 dfs(u)才全部完成 回溯

    return;        // 可写可不写
}

int main()
{
    scanf("%d", &n);

    dfs(0);    // 在path[0]处开始填数

    return 0;
}

//作者：EvanMe
//链接：https://www.acwing.com/file_system/file/content/whole/index/content/3758356/
//来源：AcWing
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。