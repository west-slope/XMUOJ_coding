#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    int C;
    char mode;
    cin >> C >> mode;
    double sum = 0.0;
    double val;
    for (int i = 0; i < 12; i++) {
        for (int j = 0; j < 12; j++) {
            cin >> val;
            if (j == C) {
                sum += val;
            }
        }
    }    
    if (mode == 'S') {
        cout << fixed << setprecision(1) << sum << endl;
    } else if(mode == 'M') {
        cout << fixed << setprecision(1) << sum / 12.0 << endl;
    }
       return 0;
}