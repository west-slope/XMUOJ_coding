//该代码会超出时长，无法通过……
#include <iostream>
#include <cmath>
using namespace std;
typedef long long LL;
bool isPrime(LL n)
{
    if(n<2)return false;
    else if(n==2)return true;
    else if(n%2==0)return false;
    double m=sqrt(n);
    for(int i=3;i<=m;i+=2)
    {
        if(n%i==0)return false;
    }
    return true;

}

int main() 
{
    LL N;
    cin >> N;
    for (LL i = 2; i <= N; i+=2) {
        if(isPrime(i))continue;
        LL sum = 1;
        LL m=sqrt(i);
        for (int j = 2; j <= m; j++) {
            if (i % j == 0) {
                sum += j;   
                if(j!=i/j)
                sum+=i/j;
            }
        }
        if (sum == i) {
            cout << i << endl;
        }
    
    }
    return 0;
}