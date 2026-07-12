//简单题：比较大小
#include <stdio.h>
int main()
{
    int a,b,c,d;
    scanf("%d%d%d",&a,&b,&c);
    d = (a > b ? a : b) > c ? (a > b ? a : b) : c;//用三次？：判断
    printf("Max = %d", d);
    return 0;
}