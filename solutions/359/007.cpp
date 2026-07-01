#include <iostream>
using namespace std;
int main()
{
    double b;
    int a,c;
    scanf("%d", &c);
    scanf("%d%lf",&a,&b);
    printf("NUMBER = %d\n", c);
    printf("SALARY = U$ %.2lf",a*b );
    return 0;
}