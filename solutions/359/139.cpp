#include <bits/stdc++.h>
using namespace std;
int p[100010], sz[100010];
int findp(int x){ return p[x]==x?x:p[x]=findp(p[x]); }
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n,m;
    if(!(cin>>n>>m)) return 0;
    for(int i=1;i<=n;i++) p[i]=i, sz[i]=1;
    while(m--){
        string op; int a,b;
        cin >> op;
        if(op=="C"){
            cin >> a >> b;
            int ra=findp(a), rb=findp(b);
            if(ra!=rb){ p[ra]=rb; sz[rb]+=sz[ra]; }
        }else if(op=="Q1"){
            cin >> a >> b;
            cout << (findp(a)==findp(b) ? "Yes" : "No") << "\n";
        }else{
            cin >> a;
            cout << sz[findp(a)] << "\n";
        }
    }
}