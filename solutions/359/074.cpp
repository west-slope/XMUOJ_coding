#include <iostream>
#include <string>
#include <sstream>
using namespace std;//

int main()
{
    string line, A, B;
    getline(cin, line);
    cin >> A >> B;

    stringstream ss(line);
    string word, result;
    bool first = true;
    while (ss >> word) {
        if (!first) result += " ";
        if (word == A)
            result += B;
        else
            result += word;
        first = false;
    }

    cout << result << endl;
    return 0;
}
