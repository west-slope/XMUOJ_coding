#include <iostream>
#include <cmath>
using namespace std;
typedef long long LL;
// bool isPrime(LL n)
// {
//     if(n<2)return false;
//     else if(n==2)return true;
//     else if(n%2==0)return false;
//     double m=sqrt(n);
//     for(int i=3;i<=m;i+=2)
//     {
//         if(n%i==0)return false;
//     }
//     return true;

// }
#include <iostream>
using namespace std;
typedef long long LL;

int main() {
    LL N;
    cin >> N;
    if (N >= 6) cout << 6 << endl;
    if (N >= 28) cout << 28 << endl;
    if (N >= 496) cout << 496 << endl;
    if (N >= 8128) cout << 8128 << endl;
    if (N >= 33550336) cout << 33550336 << endl;
    if (N >= 8589869056LL) cout << 8589869056LL << endl;
    if (N >= 137438691328LL) cout << 137438691328LL << endl;
    if (N >= 2305843008139952128LL) cout << 2305843008139952128LL << endl;
    
    return 0;
}
//主包过不了，以后再看……


//超出时长，无法通过……
// int main() 
// {
//     LL N;
//     cin >> N;
//     for (LL i = 2; i <= N; i+=2) {
//         if(isPrime(i))continue;
//         LL sum = 1;
//         LL m=sqrt(i);
//         for (int j = 2; j <= m; j++) {
//             if (i % j == 0) {
//                 sum += j;   
//                 if(j!=i/j)
//                 sum+=i/j;
//             }
//         }
//         if (sum == i) {
//             cout << i << endl;
//         }
    
//     }
//     return 0;
// }