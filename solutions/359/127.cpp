
#include <bits/stdc++.h>
using namespace std;
typedef pair<int,int> PII;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n; if(!(cin>>n)) return 0;
    vector<PII> segs;
    for(int i=0;i<n;i++){
        int l,r; cin>>l>>r;
        segs.push_back({r,l});
    }
    sort(segs.begin(),segs.end());
    int res=0, ed=-2e9;
    for(auto seg:segs){
        if(seg.second>ed){
            res++;
            ed=seg.first;
        }
    }
    cout<<res<<"\n";
}

