#include <iostream>
#include<cmath>
#include<iomanip>
using namespace std;
int a[1001][1001];
int N;
int main() {
    cin>>N;
    while(N!=0)
    {
        for(int i=0;i<N;i++)
        {
            {
                for(int j=0;j<N;j++)
                {
                    a[i][j]=int(abs(i-j)+1);
                    cout<<setw(3)<<a[i][j];
                }
            }
            cout<<endl;
        }
        if(N!=0)cout<<endl;
        cin>>N;
        
    }
    return 0;
}
