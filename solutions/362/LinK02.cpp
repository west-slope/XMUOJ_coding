//枚举算法

#include<iostream>
using namespace std;
//扫描小于N的所有数，若存在cube^3=a^3+b^3+c^3就输出
int main()
{
	int a, b, c, d, N;
	cin >> N;//输入整数
	for (int i = 2; i <= N; i++)//相当于cube
	{
		for (int j = 2; j < N; j++)//相当于a
		{
			for (int k = j; k < N; k++)//相当于b
			{
				for (int l = k; l < N; l++)//相当于c
				{
					if (i * i * i == j * j * j + k * k * k + l * l * l)//是否a^3= b^3+ c^3+ d^3
					{
						cout << "Cube = " << i << ", Triple = (" << j <<","<< k <<"," << l << ")" << endl;
					}
				}
			}
		}
	}

	return 0;
}
//总结：复习了枚举算法