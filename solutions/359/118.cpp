#include <bits/stdc++.h>
using namespace std;
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;if(!(cin>>n))return 0;
for(int mask=1;mask<(1<<n);mask++){bool first=true;for(int i=0;i<n;i++)if(mask>>i&1){if(!first)cout<<' ';first=false;cout<<i+1;}cout<<"\n";}}
