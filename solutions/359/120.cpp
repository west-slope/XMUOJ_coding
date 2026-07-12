#include<iostream>
#include<string>

using namespace std;

int parent[50005], dist[50005];

int find(int x)
{
    if(parent[x] == x) return x;
    int t = parent[x];
    int root = find(t);
    dist[x] = (dist[x] + dist[t]) % 3;
    parent[x] = root;
    return root;
}

int main()
{
    int n, m;
    cin >> n >> m;
    
    for(int i = 1; i <= n; i++)
    {
        parent[i] = i;
        dist[i] = 0;
    }
    
    int ans = 0;
    
    for(int i = 0; i < m; i++)
    {
        int d, x, y;
        cin >> d >> x >> y;
        
        if(x > n || y > n)
        {
            ans++;
            continue;
        }
        
        int rx = find(x);
        int ry = find(y);
        
        if(d == 1)
        {
            if(rx == ry)
            {
                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 0) ans++;
            }
            else
            {
                parent[rx] = ry;
                dist[rx] = ((dist[y] - dist[x]) % 3 + 3) % 3;
            }
        }
        else
        {
            if(rx == ry)
            {
                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 1) ans++;
            }
            else
            {
                parent[rx] = ry;
                dist[rx] = ((dist[y] - dist[x] + 1) % 3 + 3) % 3;
            }
        }
    }
    
    cout << ans << endl;
    
    return 0;
}