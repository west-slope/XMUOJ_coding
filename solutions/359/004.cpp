//简单题：根据描述得出结果

#include <iostream>
using namespace std;
int main()
{
    int A, B;
    double C;
    scanf("%d%d%lf",&A,&B,&C);
    printf("TOTAL = %.2lf", B * C);//注意小数位数
    return 0;
}