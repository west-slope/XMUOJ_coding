#include<bits/stdc++.h>
using namespace std;

const int N = 100010;

int n, m;
int h[N], e[N], ne[N], idx;
int d[N];

void add(int a, int b){
    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;
}

int bfs(){//宽搜遍历
    memset(d, -1, sizeof d);

    queue<int> q;
    d[1] = 0;//第一格需要0步
    q.push(1);//放入队列

    while (q.size()){//循环遍历整个队列
        int t = q.front();
        q.pop();

        for (int i = h[t]; i != -1; i = ne[i]){
            int j = e[i];//获取当前值
            if (d[j] == -1){//未走过
                d[j] = d[t] + 1;//等于上一个点加1步
                q.push(j);//放入队列
            }
        }
    }

    return d[n];//返回n号点所需的步数
}

int main(){
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);

    for (int i = 0; i < m; i ++ ){
        int a, b;
        scanf("%d%d", &a, &b);
        add(a, b);//单项连接(有向图)
    }

    cout << bfs() << endl;

    return 0;
}

// 作者：Lucky_Three
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/9655978/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。