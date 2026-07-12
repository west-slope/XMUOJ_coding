//简单题：根据描述得出结果
#include <stdio.h>
#define pi 3.14159
int main()
{
    double r;//浮点数
    scanf("%lf",&r);
    printf("VOLUME = %.3lf",(4.0/3)*pi*r*r*r );//注意位数
    return 0;
}