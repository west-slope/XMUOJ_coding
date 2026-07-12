#include <iostream>
#include <stack>
#include <string>
#include <unordered_map>
using namespace std;

// 判断字符是否为数字
bool isDigit(char c) {
    return c >= '0' && c <= '9';
}

// 计算两个数的结果
int calc(int a, int b, char op) {
    if (op == '+') return a + b;
    if (op == '-') return a - b;
    if (op == '*') return a * b;
    if (op == '/') return a / b;  // 题目保证整除
    return 0;
}

int main() {
    string s;
    cin >> s;
    
    stack<int> num;      // 数字栈
    stack<char> op;      // 运算符栈
    
    // 优先级映射：数值越大优先级越高
    unordered_map<char, int> priority = {
        {'+', 1},
        {'-', 1},
        {'*', 2},
        {'/', 2}
    };
    
    for (int i = 0; i < s.size(); i++) {
        char c = s[i];
        
        // 1. 遇到数字：读取完整数字（可能有多位）
        if (isDigit(c)) {
            int x = 0;
            while (i < s.size() && isDigit(s[i])) {
                x = x * 10 + (s[i] - '0');
                i++;
            }
            i--;  // 回退一步，因为for循环会自增
            num.push(x);
        }
        // 2. 遇到左括号：直接入栈
        else if (c == '(') {
            op.push(c);
        }
        // 3. 遇到右括号：一直计算到左括号
        else if (c == ')') {
            while (!op.empty() && op.top() != '(') {
                int b = num.top(); num.pop();
                int a = num.top(); num.pop();
                char oper = op.top(); op.pop();
                num.push(calc(a, b, oper));
            }
            if (!op.empty()) op.pop();  // 弹出左括号
        }
        // 4. 遇到运算符：处理优先级
        else if (c == '+' || c == '-' || c == '*' || c == '/') {
            // 当前运算符优先级 <= 栈顶运算符优先级时，先计算栈顶
            while (!op.empty() && op.top() != '(' && priority[op.top()] >= priority[c]) {
                int b = num.top(); num.pop();
                int a = num.top(); num.pop();
                char oper = op.top(); op.pop();
                num.push(calc(a, b, oper));
            }
            op.push(c);  // 当前运算符入栈
        }
    }
    
    // 5. 处理剩余的运算符
    while (!op.empty()) {
        int b = num.top(); num.pop();
        int a = num.top(); num.pop();
        char oper = op.top(); op.pop();
        num.push(calc(a, b, oper));
    }
    
    cout << num.top() << endl;
    return 0;
}