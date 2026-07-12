//简单题：根据描述得出结果
#include <iostream>
using namespace std;
int main()
{
    double a, b;
    scanf("%lf%lf",&a,&b);//剑术权重3.5，心法权重7.5
    printf("Average = %.5lf", (a*3.5+b*7.5)/11.0 );//注意位数
    return 0;
}