#include <iostream>
#include<string>
using namespace std;

const int N = 100010; 
int st[N], tt = 0;    // tt 指向栈顶元素位置，0 表示空栈

int main() {
    int n, x;
    string op;
    cin >> n;
    
    while (n--) {
        cin >> op;
        
        if (op == "push") {
            cin >> x;
            st[++tt] = x;   // 1. 先移动指针，再赋值
        } 
        else if (op == "pop") {
            if (tt > 0) tt--; // 2. 必须判空！否则栈顶指针变为 -1 会越界
        } 
        else if (op == "query") {
            if (tt > 0) cout << st[tt] << endl; // 3. 必须判空！
        } 
        else if (op == "empty") {
            // 4. 你的判断完全正确：tt为0则为空
            if (tt == 0) cout << "YES" << endl;
            else cout << "NO" << endl;
        }
    }
    return 0;
}


//不使用数组的做法


// #include<iostream>
// #include<stack>
// #include<string>
// using namespace std;

// int main()
// {
//     stack<int>a;
//     int n,m;
//     string c;
//     cin>>n;
//     while(n--)
//     {
//         cin>>c;
//         if(c=="push")
//         {
//             cin>>m;
//             a.push(m);
//         }
//         else if(c=="pop")
//         {
//             a.pop();
//         }
//         else if(c[0]=='q')
//         {
//             cout<<a.top()<<endl;
//         }
//         else if(c[0]=='e')
//         {
//             if(a.empty())
//             {
//                 cout<<"YES"<<endl;
//             }
//             else cout<<"NO"<<endl;
//         }
//     }



// }