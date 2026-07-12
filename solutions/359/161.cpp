#include <iostream>
#include <cmath>
#include <string>
using namespace std;
const int N = 1009;
char a[N], b[N];
int dp[2][N]; 
int main(){
    ios::sync_with_stdio(0); cin.tie(0);
    int n, m;
    cin>>n>>a+1>>m>>b+1;
    //初始化
    for(int i = 0; i <= m; i++) dp[0][i] = i;
    for(int i = 1; i <= n; i++){
    //两行dp循环使用
        int now = (i & 1), old = (i - 1 & 1);
        dp[now][0] = i;//初始化
        for(int j = 1; j <= m; j++){
            if(a[i] == b[j]) dp[now][j] = dp[old][j-1];
            else dp[now][j] = min(min(dp[old][j], dp[now][j-1]), dp[old][j-1]) + 1;
        }
    }
    cout<<dp[n & 1][m];
    return 0;
}

// 作者：stary_sky
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/11245790/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。