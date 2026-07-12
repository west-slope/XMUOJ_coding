#include <iostream>
#include <queue>
#include <unordered_map>
#include <string>
using namespace std;

string start, target;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

int bfs() {
    queue<string> q;
    unordered_map<string, int> dist;
    
    q.push(start);
    dist[start] = 0;
    
    while (!q.empty()) {
        string t = q.front();
        q.pop();
        
        if (t == target) {
            return dist[t];
        }
        
        int pos = t.find('x');
        int x = pos / 3, y = pos % 3;
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {
                int npos = nx * 3 + ny;
                string next = t;
                swap(next[pos], next[npos]);
                
                if (!dist.count(next)) {
                    dist[next] = dist[t] + 1;
                    q.push(next);
                }
            }
        }
    }
    
    return -1;
}

int main() {
    cin >> start >> target;
    cout << bfs() << endl;
    return 0;
}