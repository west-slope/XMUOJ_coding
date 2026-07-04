#include<iostream>
#include<string>
using namespace std;

int main()
{
    string s;
    while(cin >> s && s != ".")
    {
        int n = s.length();
        for(int len = 1; len <= n; len++)
        {
            if(n % len == 0)
            {
                bool ok = true;
                for(int i = len; i < n; i++)
                {
                    if(s[i] != s[i % len])
                    {
                        ok = false;
                        break;
                    }
                }
                if(ok)
                {
                    cout << n / len << endl;
                    break;
                }
            }
        }
    }
    return 0;
}