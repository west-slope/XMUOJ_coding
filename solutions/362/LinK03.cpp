//枚举算法
#include <stdio.h>
int main()
{
    int p, e, i, d;//体力，情感，智力，时间
    int m = 1;
    scanf("%d%d%d%d", &p, &e, &i, &d);
    while (p != -1 && e != -1 && i != -1 && d != -1)//结束标志
    {
        
        for (int j = d+1; j <= d+21252; j++)//注意：上限为21252
        {//周期长度分别为23天、28天和33天。
            if ((j - p) % 23 == 0 && (j - e) % 28 == 0 && (j - i) % 33 == 0)
            {//从j+1开始枚举，若这些余数均为0则为答案
                if (d!=365||j!=21252)
                    printf("Case %d: the next triple peak occurs in %d days.\n", m, j - d);
                else printf("Case %d: the next triple peak occurs in %d days.\n", m, 21252);
                break;
            }
        }
        m++;
        scanf("%d%d%d%d", &p, &e, &i, &d);
    }
    return 0;
}
//总结：完成了一道较为复杂的枚举类型题目，巩固的枚举算法