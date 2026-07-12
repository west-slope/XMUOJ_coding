#include <bits/stdc++.h>
using namespace std;
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);
int n;if(!(cin>>n))return 0;vector<int>st;for(int i=0;i<n;i++){int x;cin>>x;while(!st.empty()&&st.back()>=x)st.pop_back();if(i)cout<<' ';cout<<(st.empty()?-1:st.back());st.push_back(x);}cout<<"\n";}
