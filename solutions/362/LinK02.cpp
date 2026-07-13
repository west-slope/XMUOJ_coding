#include<iostream>
using namespace std;

int main()
{
	int a, b, c, d, N;
	cin >> N;
	for (int i = 2; i <= N; i++)
		for (int j = 2; j < N; j++)
			for (int k = j; k < N; k++)
				for (int l = k; l < N; l++)
					if (i * i * i == j * j * j + k * k * k + l * l * l)
						cout << "Cube = " << i << ", Triple = (" << j <<","<< k <<"," << l << ")" << endl;

	return 0;
}