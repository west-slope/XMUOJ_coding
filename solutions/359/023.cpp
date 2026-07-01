#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
#include<iomanip>
using namespace std;
//iomanip is used to set the precision of the output
int main()
{
    double salary;
	cin >> salary;
	if (salary >= 0 && salary <= 400)
	{
		cout << "New salary: " << fixed<< setprecision(2) <<salary * 1.15 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.15 << endl;
		cout << "Percentage:" << " 15 %" << endl;
	}
	else if (salary >= 400.01 && salary <= 800)
	{
		cout << "New salary: " << fixed<<setprecision(2)<<salary * 1.12 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.12 << endl;
		cout << "Percentage:" << " 12 %" << endl;
	}
	else if (salary >= 800.01 && salary <= 1200)
	{
		cout << "New salary: " << fixed<< setprecision(2) << salary * 1.10 << endl;
		cout << "Increase: " << fixed<<setprecision(2)<<salary * 0.10 << endl;
		cout << "Percentage:" << " 10 %" << endl;
	}
	else if (salary >= 1200.01 && salary <= 2000)
	{
		cout << "New salary: " << fixed<<setprecision(2)<< salary * 1.07 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.07 << endl;
		cout << "Percentage:" << " 7 %" << endl;
	}
	else if(salary>2000)
	{
		cout << "New salary: " << fixed<<setprecision(2)<< salary * 1.04 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.04 << endl;
		cout << "Percentage:" << " 4 %" << endl;
	}
	return 0;
}