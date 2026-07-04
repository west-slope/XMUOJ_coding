#include <iostream>
#include <cmath>  // 用于 pow
using namespace std;

int main() {
    int N;
    while(cin >> N && N != 0) {
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                cout << (int)pow(2, i + j)<< " "; 
            }
            cout << endl;
        }
        cout << endl;
    }
    return 0;
}