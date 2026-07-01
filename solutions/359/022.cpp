#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
using namespace std;

int main()
{
    int A, B, C, D,temp;
    cin >> A >> B >> C >> D;
    int m1 = A * 60 + B;
	int m2 = C * 60 + D;
    if (m1 >= m2)temp = 24 * 60 + m2 - m1;
	else temp = m2 - m1;
	cout << temp / 60 << ":" << temp % 60 << endl;
    return 0;
}