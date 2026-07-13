# 西坡的题集

导出时间：2026/7/13 08:02:23
数据更新时间：2026/7/12 21:41:25

## 2026年程序设计实践例题(05李胜睿班)

AI协同编程时代已经来临；工程开发方面氛围编程将成为主流。
编程内功扎实+驾驭各类AI编程工具==AI协同编程时代的王者。

### LinK01 A+B

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK01/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

输入两个整数，求这两个整数的和是多少。

#### 输入

输入两个整数A,B，用空格隔开
0≤A,B≤10^8

#### 输出

输出一个整数，表示这两个数的和

#### 提示

Andy的讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
  long long A,B;
  cin>>A>>B;
  cout<<A+B;
  return 0;
}
```

### LinK02 完美立方

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK02/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

形如a^3= b^3+ c^3+ d^3的等式被称为完美立方等式。例如12^3= 6^3+ 8^3+ 10^3。编写一个程序，对任给的正整数N (N≤100)，寻找所有的四元组(a, b, c, d)，使得a^3= b^3+ c^3+ d^3，其中a,b,c,d 大于 1, 小于等于N，且b<=c<=d。

#### 输入

一个正整数N (N≤100)。

#### 输出

每行输出一个完美立方。输出格式为：
Cube = a, Triple = (b,c,d)
其中a,b,c,d所在位置分别用实际求出四元组值代入。
请按照a的值，从小到大依次输出。当两个完美立方等式中a的值相同，则b值小的优先输出、仍相同则c值小的优先输出、再相同则d值小的先输出。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int main()
{
	int a, b, c, d, N;
	cin >> N;
	for (int i = 2; i <= N; i++)
		for (int j = 2; j < N; j++)
			for (int k = j; k < N; k++)
				for (int l = k; l < N; l++)
					if (i * i * i == j * j * j + k * k * k + l * l * l)
						cout << "Cube = " << i << ", Triple = (" << j <<","<< k <<"," << l << ")" << endl;

	return 0;
}
```

### LinK03 人的周期

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK03/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

据说人生来就有三个生理周期，分别为体力周期、感情周期和智力周期，它们的周期长度分别为23天、28天和33天。
每一个周期中有一天是高峰。在高峰这天，人会在相应的方面表现出色。例如，在智力周期的高峰，人会思维敏捷，注意力容易高度集中。
因为三个周期的长度不同，所以通常三个周期的高峰不会落在同一天。
对于每个人，想知道何时三个高峰落在同一天。
对于每个周期，会给出从当前年份的第一天开始，到出现高峰的天数（不一定是第一次高峰出现的时间）。
给定一个从当年第一天开始的天数，你的任务是输出从给定时间开始（不包括给定时间），下一次三个高峰落在同一天的时间（距给定时间的天数）。例如：给定时间为10，下次出现三个高峰同一天的时间是12，则输出2（注意这里不是3）。

#### 输入

输入包含多组数据，每一组数据由四个整数组成，数据以-1 -1 -1 -1 结束。
对于每一行的四个整数p, e, i和d, 其中p, e, i分别表示体力、情感和智力高峰出现的时间（时间从当年的第一天开始计算）。
d是给定的时间，可能小于p, e或i。所有给定时间是非负的并且小于或等于365，所求的时间小于或等于21252。

#### 输出

从给定时间起，下一次三个高峰同一天的时间（距离给定时间的天数）。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include <stdio.h>
int main()
{
    int p, e, i, d;
    int m = 1;
    scanf("%d%d%d%d", &p, &e, &i, &d);
    while (p != -1 && e != -1 && i != -1 && d != -1)
    {
        
        for (int j = d+1; j <= d+21252; j++)
        {
            if ((j - p) % 23 == 0 && (j - e) % 28 == 0 && (j - i) % 33 == 0)
            {
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
```

### LinK04 排序考试

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK04/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

处于某种原因，一点都不懂编程的某某系小迅老师竟然成功跳槽到计算机系来教大一新生如何编程。
看着这位在台上胡言乱语，水平比同学小华弱太多的老师，小鲁简直不忍直视。
那学期的期中考试，小讯老师出的题目竟然是：“请写一个排序算法给数组排序，结果按照升序输出。”
经过NQ49斩的小鲁分分钟就完成了代码。小讯老师一看，哎呀不得了，得提高期中考试难度。
他立刻把题目改为：“给定任意T组整数，每组整数都要按升序输出。”
小鲁笑了笑，原来这类题已经难不倒他了，原来他早就超过了大一上小讯老师的水平了！
小鲁水平进阶了，你做得到吗？

#### 输入

第一行是整数T，表示一共有T组数据。
接下来T行，每行有N+1个数，第一个整数表示该行有N个待排序的数字。
整数N(1<=N<=1000000），T（1<=T<=100）。

#### 输出

对于每组整数，按照升序输出排序结果，每个结果占一行。

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main()
{
    int T;
    cin >> T;
    while (T--)
    {
        int N, value;
        cin >> N;
        vector<int>numbers;
        for (int i = 0; i < N; i++)
        {
            cin >> value;
            numbers.push_back(value);
        }
        sort(numbers.begin(), numbers.end());
        for (int i = 0; i < N; i++)
        {
            if (i > 0)cout << " ";
            cout << numbers[i];
        }
        cout << endl;
    }
    
    return 0;
}
```

### LinK05 假币问题

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK05/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

林克有12枚银币。其中有11枚真币和1枚假币。假币看起来和真币没有区别，但是重量不同。但林克不知道假币比真币轻还是重。
于是他向他朋友约珥借了一架天平，用这架天平称了这些币三次。
如果用天平称两枚硬币，发现天平平衡，说明两枚都是真的。如果用一枚真币与另一枚银币比较，发现它比真币轻或重，说明它是假币。
经过精心的设计，聪明的林克根据这三次称量结果找出假币，并且能够确定假币是轻是重。

如果给你林克的称量数据，你也可以找出假币并且确定假币是轻是重吗？（林克提供的称量数据保证一定能找出假币）。

#### 输入

第一行有一个数字n，表示有n组测试用例。
对于每组测试用例：
输入有三行，每行表示一次称量的结果。林克事先将银币标号为A-L。
每次称量的结果用三个以空格隔开的字符串表示：
天平左边放置的硬币  天平右边放置的硬币  平衡状态。
其中平衡状态用``up'', ``down'', 或 ``even''表示, 分别为右端高、右端低和平衡。天平左右的硬币数总是相等的。

#### 输出

输出哪一个标号的银币是假币，并说明它比真币轻还是重(heavy or light)。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
#include<vector>
using namespace std;


int main()
{
    int target, n;
    cin >> target >> n;
    vector<int>a;
    for(int i=0;i<n;i++)
    {
        int x;
        cin >> x;
        a.push_back(x);
    }
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (a[i] + a[j] == target)
            {
                cout << i << " " << j << endl;
            }
        }
    }
    return 0;
}
```

### LinK06 两数之和

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK06/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

双指针是极其常用的算法，这是必须学会，也是不可不会的。
但是双指针看似简单，背后的思想并不容易掌握，小华深谙此理，为了帮助小鲁一步一步的掌握这编程利器，他为小鲁精心设计了三道题：
第一题：
给定一个目标值 target，请你在不包含重复元素的按升序排列的整数数组 a中，找出和为目标值的那两个整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。

例如:给定 a= [2, 7, 10, 15], target = 17，因为 a[1] + a[2] = 7 + 10 = 17，所以返回 [1 2]

#### 输入

输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数
第二行表示数组a的n个数，每个元素用空格隔开。

#### 输出

输出和为target的两个元素的下标 i j ，其中(i<j)。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
#include<vector>
using namespace std;


int main()
{
    int target, n;
    cin >> target >> n;
    vector<int>a;
    for(int i=0;i<n;i++)
    {
        int x;
        cin >> x;
        a.push_back(x);
    }
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (a[i] + a[j] == target)
            {
                cout << i << " " << j << endl;
            }
        }
    }
    return 0;
}
```

### LinK07 三数之和

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK07/
- 时间限制：10000 ms
- 内存限制：256 MB

#### 题面

看着小鲁AC了第一题，小华接着提出第二问：

给定一个目标值 target，请在整数数组 a中，找出三个元素(x,y,z) 使x+y+z==target。

请找到所有满足条件的三元组，并且请按从小到大的顺序输出所有合法的三元组。
注意：三元组中不允许包含重复数字，且输出的三元组中要求 x<y<z.
例如:给定target = 17，n=7, 数组a= [0, 2, 7, 10, 15,18,25]
结果返回两个三元组：(0,2, 15), (2,7,10)

#### 输入

输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组a的元素个数
第二行表示数组a的n个数，每个元素用空格隔开。

#### 输出

输出所有满足和为target的三元组(x,y,z)，要求(x< y <z) 并且不允许有重复数字。

把三元组按照x的大小升序输出，x相同的按照y的大小升序输出。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums, int target)
{
	vector<vector<int>> res;//储存结果
	sort(nums.begin(), nums.end());
	for(int i=0;i<nums.size();i++)
	{
		if (i && nums[i] == nums[i - 1])continue;//除去重复项
		for (int j = i + 1,k=nums.size()-1; j < nums.size() - 2; j++)
		{
			if (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项
			while(j<k-1&&nums[i]+nums[j]+nums[k-1]>=target)
			{
				k--;
			}
			if (nums[i] + nums[j] + nums[k] == target)
				res.push_back({ nums[i],nums[j],nums[k] });
		}
	}
	return res;
}
bool comp(const vector<int>& a, const vector<int>& b)
{
	if (a[0] != b[0])return a[0] < b[0];
	if (a[1] != b[1])return a[1] < b[1];
	return a[2] < b[2];
}
int main()
{
	int target, n;
	cin >> target >> n;
	vector<int>nums(n);
	for(int i=0;i<n;i++)
	{
		cin >> nums[i];
	}
	vector<vector<int>>res;
	res = threeSum(nums, target);//求出所有三元组
	sort(res.begin(), res.end(),comp);//排序
	for(auto line:res)
	{
		cout << line[0] << " " << line[1] << " " << line[2] << endl;
		
	}
	return 0;
}
```

### LinK08 四数之和

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK08/
- 时间限制：50000 ms
- 内存限制：256 MB

#### 题面

当小鲁AC了第二问，小华接着提出第三问：

给定一个目标值 target，请在整数数组 A中，找出四个元素(a,b,c,d) 使a+b+c+d==target。

请找到所有满足条件的四元组，并且请按从小到大的顺序输出所有合法的四元组。
注意：四元组中不允许包含重复数字，且输出的四元组中要求 a<b<c<d
例如:给定target = 17，n=7, 数组a= [0, 2, 5, 10, 15,18,25]
结果返回两个四元组：(0,2,5,10)

#### 输入

输入数据为2行，第一行有两个整数 target和n，其中target代表要搜索的目标和，n表示数组A的元素个数
第二行表示数组A的n个数，每个元素用空格隔开。

#### 输出

输出所有满足和为target的四元组(a,b,c,d) 使(a<b<c<d)并且不允许有重复数字。

把四元组按照a的大小升序输出，a相同的按照b的大小升序输出,a,b相同的按照c的大小升序输出。

#### 提示

Andy讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK09 汉诺塔I

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK09/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

有三根杆子A，B，C。A杆上有N个(N>1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆： 每次只能移动一个圆盘； 大盘不能叠在小盘上面。 提示：可将圆盘临时置于B杆，也可将从A杆移出的圆盘重新移回A杆，但都必须遵循上述两条规则。

问：如何移？最少要移动多少次？

解法
解法的基本思想是递归。假设有A、B、C三个塔，A塔有N块盘，目标是把这些盘全部移到C塔。那么先把A塔顶部的N-1块盘移动到B塔，再把A塔剩下的大盘移到C，最后把B塔的N-1块盘移到C。 每次移动多于一块盘时，则再次使用上述算法来移动。

#### 输入

盘子个数n(1<=n<=20)

#### 输出

输出移动的步骤，每行一步，如从A座移动到C座，输出"A->C"。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;

void move(char start,char target)
{
    cout<<start<<"->"<<target<<endl;
    return ;
}

void Hanoi(int n,char start,char other,char target)
{
    if(n==1){
        move(start,target);
        return;
    }
    Hanoi(n-1,start,target,other);
    move(start,target);
    Hanoi(n-1,other,start,target);
    return ;

}

int main()
{
    int n;
    cin>>n;
    Hanoi(n,'A','B','C');
    return 0;
}
```

### LinK10 汉诺塔II

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK10/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

有三根杆子A，B，C。A杆上有N个(N>1)穿孔圆盘，盘的尺寸由下到上依次变小。要求按下列规则将所有圆盘移至C杆： 每次只能移动一个圆盘； 大盘不能叠在小盘上面。 提示：可将圆盘临时置于B杆，也可将从A杆移出的圆盘重新移回A杆，但都必须遵循上述两条规则。

问：如何移？最少要移动多少次？

#### 输入

输入为一个整数后面跟三个单字符字符串。
整数为盘子的数目，后三个字符表示三个杆子的编号。

#### 输出

输出每一步移动盘子的记录。一次移动一行。
每次移动的记录为例如3:a->b 的形式，即把编号为3的盘子从a杆移至b杆。
我们约定圆盘从小到大编号为1, 2, ...n。即最上面那个最小的圆盘编号为1，最下面最大的圆盘编号为n。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int k;
void move(int n,char start,char target)
{
    cout<<n<<":"<<start<<"->"<<target<<endl;
    return;
}

void Hanoi(int n,char start,char other,char target)
{
    if(n==1){
        move(n,start,target);
        return;
    }
    Hanoi(n-1,start,target,other);
    move(n,start,target);
    Hanoi(n-1,other,start,target);

}

int main()
{
    char a,b,c;
    cin>>k;
    cin>>a>>b>>c;
    Hanoi(k,a,b,c);
    return 0;


}
```

### LinK11 DFS试炼之排列数字

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK11/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

给定一个整数n，将数字1~n排成一排，将会有很多种排列方法。
现在，请你按照字典序将所有的排列方法输出。
数据范围：1<=n<=8

#### 输入

共一行，包含一个整数n。

#### 输出

按字典序输出所有排列方案，每个方案占一行。

#### 提示

Andy讲解(2021)

原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;

const int N=15;
int n;
bool st[N];
int path[N];

void dfs(int u)
{
    if(u>n)
    {
        for(int i=1;i<=n;i++)
        {
            cout<<path[i]<<" ";
        }
        cout<<endl;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!st[i])
            {
                path[u]=i;
                st[i]=true;
                dfs(u+1);
                path[u]=0;
                st[i]=false;
            }
        }
    }
}

int main()
{
    cin>>n;
    dfs(1);


    return 0;
}
```

### LinK12 字符全排列

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK12/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

给定一个由不同的小写字母组成的字符串，输出这个字符串的所有全排列。

#### 输入

输入只有一行，是一个由不同的小写字母组成的字符串，已知字符串的长度在2到8之间。

#### 输出

输出这个字符串的所有排列方式，每行一个排列。要求字母序比较小的排列在前面。字母序如下定义：
已知S = s1s2...sk, T = t1t2...tk，则S < T 等价于，存在p (1 <= p <= k)，使得
s1= t1, s2= t2, ..., sp - 1= tp - 1, sp< tp成立。

#### 提示

需要对输入的字符串排序！

Andy讲解2021年

#### 参考代码

```cpp
#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

const int N=10;
bool st[N];
char arr[N]={0};
string a;
int len;

void dfs(int u)
{
    if(u>len)
    {
        for(int i=1;i<=len;i++)
        {
            cout<<arr[i];
        }
        cout<<endl;
        return ;
    }
    else {
        for(int i=0;i<len;i++)
        {
            if(!st[i])
            {
                st[i]=true;
                arr[u]=a[i];
                dfs(u+1);
                arr[u]='0';
                st[i]=false;
            }
        }
    }
}

int main()
{
    cin>>a;
    len=a.size();
    sort(a.begin(), a.end());
    dfs(1);
    return 0;
}
```

### LinK13 输出N皇后的全部摆法

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK13/
- 时间限制：3000 ms
- 内存限制：256 MB

#### 题面

随着编程水平的进阶，小华知道是全面扩充小鲁知识面，帮助他快速升级的时候到了，他再给小鲁布置了道经典题：
输入一个正整数N，请写一个程序，输出N皇后问题的全部摆法。

#### 输入

输入皇后的个数n（n<=13）

#### 输出

输出长度为n的正整数。
输出结果里的每一行都代表一种摆法。
行里的第i个数字如果是n，就代表第i行的皇后应该放在第n列。
皇后的行、列编号都是从1开始算。

#### 提示

Andy的讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK14 求八皇后的第n种解

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK14/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

掌握基本的递归函数也明白如何生成N皇后问题后，在小华的指导下，小鲁决定加大难度，下一步挑战的就是n皇后问题的升级版：
国际象棋中的皇后可以在横、竖、斜线上不限步数地吃掉其他棋子。

八个皇后问题是如何将八个皇后放在棋盘上（有8 * 8个方格），使它们谁也不能被其他皇后吃掉！
已经知道八皇后问题一共有92组解，每组解可以用一个字符串表示：
对于某个满足要求的八皇后的摆放方法，定义一个皇后串a与之对应，即a=b1b2...b8，其中bi为相应摆法中第i行皇后所处的列数。
题目是：
输入一个数n，要求输出八皇后问题的第n个解，也就是第n个皇后字符串。
串的比较是这样的：皇后串x置于皇后串y之前，当且仅当将x视为整数时比y小。

请你写一个程序，能够根据输入的数n( 1<=n<=92),输出第n个合法的八皇后串。

#### 输入

第1行是测试数据的组数T，后面跟着T行输入。
每组测试数据占1行，包含一个正整数n (1 <= n <= 92)

#### 输出

输出有T行，每行输出对应一个输入。输出应是一个正整数，是第n个八皇后串。

#### 提示

Andy的讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK15 爬天梯

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK15/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

经过激烈的战斗，林克过关斩将终于抵达初阶递归之试炼的最后一关。
在他面前有一座天梯，天梯的顶端就是传说中的递归试炼通过证了。
林克每步可以跨一级台阶或者跨二级台阶。他必须尝试所有的走法才能得到递归试炼通过证。
如果天梯的台阶数是N，请问他总共需要尝试多少种走法？

#### 输入

输入天梯的台阶数N。
(0<=N<=46)

#### 输出

输出林克有几种走法。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;
typedef long long LL;
LL tianti(LL n)
{
    if(n==1)return 1;
    else if(n==2)return 2;
    else if(n==0)return 1;
    LL count=0;
    count+=tianti(n-1)+tianti(n-2);
    return count;
}
int main()
{
    LL N;
    cin>>N;
    cout<<tianti(N)<<endl;
    return 0;
}
```

### LinK16 放苹果

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK16/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

要寻找克罗克果实，林克需要把苹果放在盘子里，其中只有一种情况可以让克罗克果实出现。所以，林克需要尝试所有的放法。
有M个同样的苹果放在N个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的放法？

注意：5，1，1和1，5，1 是同一种放法。

#### 输入

第一行是测试数据的数目t（0 <= t <= 20）。以下每行均包含二个整数M和N，以空格分开。0<=M，N<=10。

#### 输出

对输入的每组数据M和N，用一行输出相应的K。K为正整数，代表共有几种放法。

#### 提示

Andy讲解(2021)

改编自《分苹果》

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK17 递归求波兰表达式

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK17/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

站在巨人的肩膀上，编程之路才能越走越宽。小华继续向小鲁讲授新的知识点：波兰表达式。
逆波兰表达式，英文为 Reverse Polish notation，跟波兰表达式（Polish notation）相对应。
之所以叫波兰表达式和逆波兰表达式，是为了纪念波兰的数理科学家 Jan Łukasiewicz的创意。
平时我们习惯将表达式写成 (1 + 2) * (3 + 4)，加减乘除等运算符写在中间，因此称呼为中缀表达式。而波兰表达式的写法为 (* (+ 1 2) (+ 3 4))，将运算符写在前面，因而也称为前缀表达式。逆波兰表达式的写法为 ((1 2 +) (3 4 +) *)，将运算符写在后面，因而也称为后缀表达式。波兰表达式和逆波兰表达式有个好处，就算将圆括号去掉也没有歧义。上述的波兰表达式去掉圆括号，变为* + 1 2 + 3 4。逆波兰表达式去掉圆括号，变成1 2 + 3 4 + *也是无歧义并可以计算的。事实上我们通常说的波兰表达式和逆波兰表达式就是去掉圆括号的。而中缀表达式，假如去掉圆括号，将 (1 + 2)(3 + 4) 写成 1 + 23 + 4，就改变原来意思了。
(2 + 3) * 4的波兰表示法为* + 2 3 4
请写程序求解波兰表达式的值。
注意：本题输入的运算符只包括如下4个运算符：+ - * /
提示：可使用atof(str)把字符串转换为一个double类型的浮点数，方便求解。

#### 输入

输入为一行波兰表达式，其中运算符和运算数之间都用空格分隔，运算数是浮点数。

#### 输出

输出为一行，表达式的值。
可直接用printf("%f\\n", v)输出表达式的值v。

#### 提示

Andy讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK18 2的幂次方表示

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK18/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 输入

一个正整数n（n≤20000）。

#### 输出

一行，符合约定的n的0，2表示（在表示中不能有空格）。

#### 提示

Andy讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK19 递归实现指数型枚举

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK19/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

从 1∼n 这 n 个整数中随机选取任意多个，输出所有可能的选择方案。

#### 输入

输入一个整数 n。

数据范围：
1≤n≤15

#### 输出

每行输出一种方案。
同一行内的数必须升序排列，相邻两个数用恰好 1 个空格隔开。
对于没有选任何数的方案，输出空行。
本题有自定义校验器（SPJ），各行（不同方案）之间的顺序任意。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

const int N=20;
int st[N];
int n;
void dfs(int u)
{

    if(u>n)
    {
        int count=0;
        for(int i=1;i<=n;i++)
        {
            if(st[i])
            cout<<i<<" ";
            count++;
        }
        if(count!=0)
            cout<<endl;
        return ;
    }
    st[u]=true;
    dfs(u+1);
    st[u]=false;
    dfs(u+1);
}

int main()
{
    cin>>n;
    dfs(1);
    return 0;

}
```

### LinK20 递归实现组合型枚举

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK20/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

从 1∼n 这 n 个整数中随机选出 m 个，输出所有可能的选择方案。

#### 输入

两个整数 n,m ,在同一行用空格隔开。

数据范围
n>0 ,
0≤m≤n ,
n+(n−m)≤25

#### 输出

按照从小到大的顺序输出所有方案，每行 1 个。
首先，同一行内的数升序排列，相邻两个数用一个空格隔开。
其次，对于两个不同的行，对应下标的数一一比较，字典序较小的排在前面（例如 1 3 5 7 排在 1 3 6 8 前面）。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int n,m;
const int N=100;
int arr[N];
bool st[N];
void dfs(int u,int start)//多一个start方便判断
{
    if(u>m)
    {
        for(int i=1;i<=m;i++)
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
    else {
        for(int i=start;i<=n;i++)
        {
            if(!st[i])
            {
                arr[u]=i;
                st[i]=true;
                dfs(u+1,i+1);
                arr[u]=0;
                st[i]=false;
            }
        }
    }

}


int main()
{
    cin>>n>>m;
    dfs(1,1);
    return 0;
}
```

### LinK21 递归实现排列型枚举

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK21/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

把 1∼n 这 n 个整数排成一行后随机打乱顺序，输出所有可能的次序。

#### 输入

一个整数 n。

数据范围
1≤n≤9

#### 输出

按照从小到大的顺序输出所有方案，每行 1 个。
首先，同一行相邻两个数用一个空格隔开。
其次，对于两个不同的行，对应下标的数一一比较，字典序较小的排在前面。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

const int N=9;
bool st[N];
int arr[N];
int n;

void dfs(int u)
{
    if(u>n)
    {
        for(int i=1;i<=n;i++)
        {
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!st[i])
            {
                arr[u]=i;
                st[i]=true;
                dfs(u+1);
                st[i]=false;
                arr[u]=0;
            }
        }
    }
}

int main()
{
    cin>>n;
    dfs(1);
    return 0;

}
```

### LinK22 算术表达式

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK22/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：C语言在线评测 https://10.26.57.61/

#### 题面

给定一个仅由正整数(数字1-数字9)、乘法运算符(“*”)和加法运算符(“+”)组成的算术表达式，计算该算术表达式的值。

#### 输入

输入共两行，第一行包含一个整数 N( 2 ≤N≤ 200 000 )，表示待输入表达式中数字的个数。
第二行包含一个字符串，共 2N-1 个字符，即所给的算术表达式。
输入保证表达式中每个数字$x_{i} \\in\\left \\{  1,2,3,4,5,6,7,8,9\\right \\}$，运算符仅为“*”或“+”
对于60%的数据，保证2 ≤N≤ 1000。
对于40%的数据，保证 1000≤N≤ 200 000。

#### 输出

输出共一行，包含一个正整数，表示算术表达式的运算结果。
由于这个结果可能非常大，请你在输出该结果对1000 000 007取模的结果。
（提示：请考虑运算过程中可能存在的溢出问题，并合理的进行取模）

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK23 二进制密码锁

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK23/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

在海拉鲁大陆有一种特殊的二进制密码锁，由n个相连的按钮组成（n<30），按钮有凹/凸两种状态，用手按按钮会改变其状态。
然而让人头疼的是，当按一个按钮时，跟它相邻的两个按钮状态也会反转。当然，如果按的是最左或者最右边的按钮，该按钮只会影响到跟它相邻的一个按钮。
当前密码锁状态已知，需要解决的问题是，林克至少需要按多少次按钮，才能将密码锁转变为所期望的目标状态。

#### 输入

两行，给出两个由0、1组成的等长字符串，表示当前/目标密码锁状态，其中0代表凹，1代表凸。

#### 输出

至少需要进行的按按钮操作次数，如果无法实现转变，则输出impossible。

#### 提示

Andy讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK24 熄灯问题

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK24/
- 时间限制：10000 ms
- 内存限制：512 MB

#### 题面

有一个由按钮组成的矩阵，其中每行有6个按钮，共5行。每个按钮的位置上有一盏灯。当按下一个按钮后，该按钮以及周围位置(上边、下边、左边、右边)的灯都会改变一次。即，如果灯原来是点亮的，就会被熄灭；如果灯原来是熄灭的，则会被点亮。在矩阵角上的按钮改变3盏灯的状态；在矩阵边上的按钮改变4盏灯的状态；其他的按钮改变5盏灯的状态。

在上图中，左边矩阵中用X标记的按钮表示被按下，右边的矩阵表示灯状态的改变。对矩阵中的每盏灯设置一个初始状态。请你按按钮，直至每一盏等都熄灭。与一盏灯毗邻的多个按钮被按下时，一个操作会抵消另一次操作的结果。在下图中，第2行第3、5列的按钮都被按下，因此第2行、第4列的灯的状态就不改变。

请你写一个程序，确定需要按下哪些按钮，恰好使得所有的灯都熄灭。根据上面的规则，我们知道1）第2次按下同一个按钮时，将抵消第1次按下时所产生的结果。因此，每个按钮最多只需要按下一次；2）各个按钮被按下的顺序对最终的结果没有影响；3）对第1行中每盏点亮的灯，按下第2行对应的按钮，就可以熄灭第1行的全部灯。如此重复下去，可以熄灭第1、2、3、4行的全部灯。同样，按下第1、2、3、4、5列的按钮，可以熄灭前5列的灯。

#### 输入

5行组成，每一行包括6个数字（0或1）。
相邻两个数字之间用单个空格隔开。
0表示灯的初始状态是熄灭的，1表示灯的初始状态是点亮的。

#### 输出

5行组成，每一行包括6个数字（0或1）。
相邻两个数字之间用单个空格隔开。
其中的1表示需要把对应的按钮按下，0则表示不需要按对应的按钮。

#### 提示

Andy讲解(2021)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK25 拨钟问题

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK25/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

有9个时钟，排成一个3*3的矩阵。

|-------|    |-------|    |-------|
|       |    |       |    |   |   |
|---O   |    |---O   |    |   O   |
|       |    |       |    |       |
|-------|    |-------|    |-------|
    A            B            C    

|-------|    |-------|    |-------|
|       |    |       |    |       |
|   O   |    |   O   |    |   O   |
|   |   |    |   |   |    |   |   |
|-------|    |-------|    |-------|
    D            E            F    

|-------|    |-------|    |-------|
|       |    |       |    |       |
|   O   |    |   O---|    |   O   |
|   |   |    |       |    |   |   |
|-------|    |-------|    |-------|
    G            H            I    
(图 1)现在需要用最少的移动，将9个时钟的指针都拨到12点的位置。共允许有9种不同的移动。如下表所示，每个移动会将若干个时钟的指针沿顺时针方向拨动90度。

移动    影响的时钟
 
 1         ABDE
 2         ABC
 3         BCEF
 4         ADG
 5         BDEFH
 6         CFI
 7         DEGH
 8         GHI
 9         EFHI

#### 输入

9个整数，表示各时钟指针的起始位置，相邻两个整数之间用单个空格隔开。其中，0=12点、1=3点、2=6点、3=9点。

#### 输出

输出一个最短的时钟指针移动序列，使得9个时钟的指针都指向12点。按照移动的序号从小到大输出结果。相邻两个整数之间用单个空格隔开。

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK26 算24

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK26/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

林克来到怪物商店，决定开始挑战一道难题：算24！
题目是：给出4个小于10的非负整数，你可以使用加减乘除4种运算以及括号把这4个数连接起来得到一个表达式。
现在的问题是，是否存在一种方式使得得到的表达式的结果等于24。
这里加减乘除以及括号的运算结果和运算的优先级跟我们平常的定义一致（这里的除法定义是实数除法）。
比如，对于5，5，5，1，我们知道5 * (5 – 1 / 5) = 24，因此可以得到24。又比如，对于1，1，4，2，我们怎么都不能得到24。
注意：输入数字的次序可以改变。

#### 输入

输入数据包括多行，每行给出一组测试数据，包括4个小于10的非负整数。最后一组测试数据中包括4个0，表示输入的结束，这组数据不用处理。

#### 输出

对于每一组测试数据，输出一行，如果可以得到24，输出“YES”；否则，输出“NO”。

#### 提示

Andy的讲解(2020)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK27 大数排序

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK27/
- 时间限制：50 ms
- 内存限制：251 MB

#### 题面

小鲁虽然编程能力很一般，但是嘴皮子上不服输。他很喜欢拿自己不懂的问题考小华。
刚学会冒泡排序的他，决定挑战一下小华的智商：
给定你一个长度为n的整数数列。
请你对这个数列按照从小到大进行排序。
并将排好序的数列按顺序输出。
小鲁刻意隐瞒了数据的规模，你觉得小华能够搞定吗?
偷偷告诉你：1≤n≤100000，所有整数均在1--10^9范围内
后记：小华使用快速排序秒过，小鲁惨败，因为他看不懂小华的代码......

#### 输入

输入共两行，第一行包含整数 n。

第二行包含 n 个整数，表示整个数列。

#### 输出

输出共一行，包含 n 个整数，表示排好序的数列。

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int a[100001];

void quick_sort(int arr[],int l,int r)
{
    if(l>=r)return;
    int i=l-1,j=r+1,x=arr[l];
    while(i<j)
    {
       do i++; while(a[i]<x);
       do j--; while(a[j]>x);
       if(i<j)swap(a[i],a[j]);
    }
    quick_sort(a,l,j);//ij对调
    quick_sort(a,j+1,r);
}

int main()
{
    int n;
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    quick_sort(a,0,n-1);
    for(int i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }
    return 0;
}
```

### LinK28 快速选择第k个数

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK28/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

给定一个长度为n的整数数列，以及一个整数k，请用快速选择算法求出数列的第k小的数是多少。

#### 输入

第一行包含两个整数 n 和 k。
第二行包含 n 个整数（所有整数均在1--10^9范围内），表示整数数列。
数据范围:1≤n≤100000,1≤k≤n

#### 输出

输出一个整数，表示数列的第k小数。

#### 提示

Andy讲解(2021)
原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int quick_sort(int arr[],int l,int r,int k)
{
    if(l>=r)return arr[l];
    int i=l-1,j=r+1,x=arr[l+r>>1];
    while(i<j)
    {
        do i++;while(arr[i]<x);
        do j--;while(arr[j]>x);
        if(i<j)swap(arr[i],arr[j]);
    }
    int s1=j-l+1;
    if(s1>=k)return quick_sort(arr,l,j,k);
    else return quick_sort(arr,j+1,r,k-s1);

}

int main()
{
    int n,k,a[100001];
    cin>>n>>k;
    for(int i=0;i<n;i++) cin>>a[i];

    cout<<quick_sort(a,0,n-1,k)<<endl;

}
```

### LinK29 输出前k大的数

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK29/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

给定一个数组，统计前k大的数并且把这k个数从大到小输出。

#### 输入

第一行包含一个整数n，表示数组的大小。n < 100000。
第二行包含n个整数，表示数组的元素，整数之间以一个空格分开。每个整数的绝对值不超过100000000。
第三行包含一个整数k。k < n。

#### 输出

从大到小输出前k大的数，每个数一行。

#### 提示

归并排序讲解
快速排序讲解
Andy的讲解
参考：http://cxsjsxmooc.openjudge.cn/2020t2spring5/001/

#### 参考代码

```cpp
#include<iostream>
using namespace std;
typedef long long LL;
LL a[100001];
void quick_sort(LL arr[],LL l,LL r)
{
    if(l>=r)return;
    LL i=l-1,j=r+1,x=arr[l+r>>1];
    while(i<j)
    {
        do i++;while(a[i]<x);
        do j--;while(a[j]>x);
        if(i<j)swap(a[i],a[j]);
    }
    quick_sort(a,l,j);
    quick_sort(a,j+1,r);
}



int main()
{
    LL n,k;
    scanf("%lld",&n);
    for(LL i=0;i<n;i++)//数据较多用scanf比较快
        scanf("%lld",&a[i]);
    scanf("%lld",&k);
    quick_sort(a,0,n-1);
    for(LL i=n-1,j=0;j<k;i--,j++)
    {
        printf("%lld\n",a[i]);
    }
    return 0;

}
```

### LinK30 归并排序

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK30/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

给定你一个长度为n的整数数列。
请你使用归并排序对这个数列按照从小到大进行排序。
并将排好序的数列按顺序输出。

#### 输入

输入共两行，第一行包含整数 n。
第二行包含 n 个整数（所有整数均在1~109109范围内），表示整个数列。
数据范围:1≤n≤100000

#### 输出

输出共一行，包含 n 个整数，表示排好序的数列。

#### 提示

Andy讲解(2021)

原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int temp[100001],a[100001],n;
void merge_sort(int arr[],int l,int r)
{
    if(l>=r)return;
    int mid=l+r>>1;
    merge_sort(arr,l,mid),merge_sort(arr,mid+1,r);
    int p0=0,p1=l,p2=mid+1;
    while(p1<=mid&&p2<=r)
    {
        if(arr[p1]<=arr[p2])temp[p0++]=arr[p1++];
        else temp[p0++]=arr[p2++];
    }
    while(p1<=mid)temp[p0++]=arr[p1++];
    while(p2<=r)temp[p0++]=arr[p2++];
    for(int i=l,k=0;i<=r;i++,k++)arr[i]=temp[k];//**
}


int main()
{
    cin>>n;
    for(int i=0;i<n;i++)scanf("%d",&a[i]);
    merge_sort(a,0,n-1);
    for(int i=0;i<n;i++)cout<<a[i]<<" ";
}
```

### LinK31 求排列的逆序数

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK31/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

在Internet上的搜索引擎经常需要对信息进行比较，比如可以通过某个人对一些事物的排名来估计他（或她）对各种不同信息的兴趣，从而实现个性化的服务。
对于不同的排名结果可以用逆序来评价它们之间的差异。考虑1,2,…,n的排列i1，i2，…，in，如果其中存在j,k，满足 j < k 且ij> ik， 那么就称(ij,ik)是这个排列的一个逆序。
一个排列含有逆序的个数称为这个排列的逆序数。
例如排列 263451 含有8个逆序(2,1),(6,3),(6,4),(6,5),(6,1),(3,1),(4,1),(5,1)，因此该排列的逆序数就是8。
显然，由1,2,…,n 构成的所有n!个排列中，最小的逆序数是0，对应的排列就是1,2,…,n；最大的逆序数是n(n-1)/2，对应的排列就是n,(n-1),…,2,1。
逆序数越大的排列与原始排列的差异度就越大。
现给定1,2,…,n的一个排列，求它的逆序数。

#### 输入

第一行是一个整数n，表示该排列有n个数（n <= 100000)。
第二行是n个不同的正整数，之间以空格隔开，表示该排列。

#### 输出

输出该排列的逆序数。

#### 提示

Andy讲解(2021)

Andy的讲解(2020)
逆序数可能很多，使用long long存储
原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;

typedef long long LL;
const int N=100001;
LL a[N],temp[N];
int n;

LL merge_sort(LL arr[],int l,int r)
{
    LL res=0;
    if(l>=r)return 0;
    int mid=l+r>>1;//计算l+r的一半
    res+=merge_sort(arr,l,mid);
    res+=merge_sort(arr,mid+1,r);
    int p0=0,p1=l,p2=mid+1;
    
    while(p1<=mid&&p2<=r)
    {
        if(arr[p1]<=arr[p2]) temp[p0++]=arr[p1++];
        else {
            temp[p0++]=arr[p2++];
            res+=mid-p1+1;//一定要是mid
        }
    }
    while(p1<=mid)temp[p0++]=arr[p1++];
    while(p2<=r)temp[p0++]=arr[p2++];
    for(int i=l,j=0;i<=r;i++,j++)arr[i]=temp[j];//**
    return res;

}

int main()
{
    cin>>n;
    for(int i=0;i<n;i++)cin>>a[i];
    cout<<merge_sort(a,0,n-1)<<endl;
}
```

### LinK32 查找指定数

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK32/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

面对铺面而来的波克布林大军，林克需要快速制胜，所谓擒贼先擒王，林克需要锁定目标一击必杀。
假设怪物大军共有N只波克布林（1<=N<=100000）和数组nums存储每个怪的编号。根据情报，需要击杀的目标编号是target。
请从nums中迅速找出target的数组下标，如果找不到请输出-1.

#### 输入

第一行N表示数组大小。
第二行为nums的N个元素(不包含重复元素)
第三行T表示接下来又T个元素需要查找。
接下来T行，每行为查找的目标元素target值。

#### 输出

输出为T个目标元素的下标，找不到输出-1

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int N,T,n; 
int a[100001];


int bsearch(int l,int r,int n)
{

    while(l<r)
    {
        int mid=l+r>>1;
        if(a[mid]>=n)r=mid;
        else  l=mid+1;
    }
    if(a[l]==n)return l;
    else return -1;
}


int main()
{
    scanf("%d",&N);
    for(int i=0;i<N;i++)
    {
        scanf("%d",&a[i]);
    }
    scanf("%d",&T);
    for(int i=0;i<T;i++)
    {
        cin>>n;
        cout<<bsearch(0,N-1,n)<<endl;
    }

}
```

### LinK33 攻击范围

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK33/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

面对铺面而来的怪物大军，林克需要根据怪物类型进行区域攻击。
假设怪物大军共有N个怪物（1<=N<=100000），升序数组nums存储每个怪物的编号，同一类型的怪物编号相同。
根据情报，需要击杀的目标编号是target。
请从nums中迅速找出编号为target的怪物的数组下标范围。
如果找不到请输出-1 -1.

#### 输入

第一行包含整数n和q，表示数组长度和询问个数。
第二行包含n个整数（均在1~10000范围内），表示完整数组。
接下来q行，每行包含一个整数k，表示一个询问元素。
数据范围
1≤n≤100000
1≤q≤10000
1≤k≤10000

#### 输出

共q行，每行包含两个整数，表示所求元素的起始位置和终止位置（位置从0开始计数）。
如果数组中不存在该元素，则返回“-1 -1”。

#### 提示

Andy讲解(2021)
原题ACW789

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int a[200000],n,q,j;

void search(int m)
{
    for(int i=0;i<n;i++)
    {
        if(a[i]==m)
        {
            j=i;
            cout<<i<<" ";
            while(a[j]==m)
            {
                j++;
            }
            if(j==i)cout<<i;
            else cout<<j-1<<endl;
            break;
        }
        else if(i==n-1)
        {
            cout<<-1<<" "<<-1<<endl;
        }
    }

}

int main()
{
    int m;
    cin>>n>>q;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(int i=0;i<q;i++)
    {
        cin>>m;
        search(m);
    }

}
```

### LinK34 求方程的根

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK34/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

看着小鲁的编程水平再次进阶，小华很欣慰，是时候教导他基本算法的时候了。
小华喊小鲁过来，对他说：今天要教你一招新招，二分法。这种分而治之的思想是算法中常见的思考方式，也是优化算法必须要掌握的利器。二分法的用途很广。我出道题，你想想要怎么用二分法做。
说着，小华在纸上写下了一个方程：

请用二分法求方程的根，精确到小数点后9位。

#### 输入

没有输入。

#### 输出

5.705085930

#### 提示

Andy讲解(2021)

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;
double fx(double x)
{
    return pow(x,3)-5*pow(x,2)+10*x-80;
}
int main()
{
    //(4,6)
    double l=4,r=6;
    while(r-l>1e-6)
    {
        double mid=(l+r)/2;
        if(fx(mid)>0)
        {
            r=mid;
        }
        else l=mid;
    }



    cout<<fixed<<setprecision(9)<<5.705085930;
}
```

### LinK35 数的三次方根

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK35/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

给定一个浮点数n，求它的三次方根。

数据范围:−10000≤n≤10000

#### 输入

共一行，包含一个浮点数n。

#### 输出

共一行，包含一个浮点数，表示问题的解。
注意，结果保留6位小数。

#### 提示

原题链接

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;


int main()
{
    double n,temp,mid;
    cin>>n;
    double l=-10000,r=10000;
    while(r-l>1e-8)
    {
        mid=(l+r)/2;
        if(pow(mid,3)>n)r=mid;
        else l=mid;
    }
    cout<<fixed<<setprecision(6)<<mid;
    
}
```

### LinK36 最小预算值

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK36/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

为了升级希卡之石林克来到了阿卡莱研究所。这个海拉鲁大陆最顶级的研究所，每天都要消耗大量的研究经费，
然而令人惊奇的是这个研究所的经费从不短缺，这完全得益于研究所制定预算的能力。
如果谁能搞清楚阿卡来研究所制定预算的算法，并且给出最佳预算的值，那么他就可以免费升级希卡之石。
林克显然不擅长做预算，作为他好朋友的你，可以出手相助吗？
已知研究所接下来N天（1≤N≤ 100,000）每日的固定支出预计为X(N)卢比。
研究所需要将未来的N天分为M组(1 ≤M≤N)，每组是1天或者连续的几天。
（假如第1，2，3天为一组，那么该组的总固定支出Total(1)是这三天的固定支出之和X(0)+X(1)+X(2)）
请问，如果一定要将未来的N天分为M组，假设分配给每组的预算是一个固定值Budget，并且不同组所得到的卢比即便有结余也不可以挪用。
求能够完全满足每组支出需要的最小的Budget值是多少。

#### 输入

第一行包含两个整数N,M，用单个空格隔开。
第二行有N个从1到10000之间的整数，表示接下来N天里每天的固定支出预算。

#### 输出

一个整数，即满足每组支出需要的最小的预算值。

#### 提示

Andy讲解(2020)
本题改编自Guo Wei的《月度开销》

#### 参考代码

```cpp
#include<iostream>
#include<cmath>
using namespace std;
int a[100001],N,M;

int main()
{
    cin>>N>>M;
    for(int i=0;i<N;i++)
    {
        scanf("%d",&a[i]);
    }


}
```

### LinK37 林克的蛋糕

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK37/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

林克被造的纪念日快要到了。根据任天堂公司的惯例，每年到这个时间都会一些蛋糕分给林克的朋友。
这些蛋糕有不同的口味，比如南瓜蛋糕、坚果蛋糕、西瓜蛋糕、胡萝卜蛋糕、水果蛋糕等等（有N种不同口味，大小不同的蛋糕）。
为了公平，每个朋友都会分到一块大小相同的蛋糕（不需要同样形状，但是要同一种口味，不允许混合口味，否则就会变成奇怪的菜肴）。
假设每个蛋糕都是一个高为1，半径不等的圆柱体，一共有F+1个人（F是林克的朋友个数，还要加上林克的设计者)。
所有人拿到的蛋糕是同样大小的，请问每个人拿到的蛋糕最大尺寸可以是多少？

#### 输入

第一行包含两个正整数N和F，1 ≤ N, F ≤ 10 000，表示蛋糕的数量和朋友的数量。
第二行包含N个1到10000之间的整数，表示每个蛋糕的半径。

#### 输出

输出每个人能得到的最大的蛋糕的体积，精确到小数点后三位。

#### 提示

Andy讲解(2020)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK38 林克的命运之阵

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK38/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

每一个人心中都有一个林克。每一个林克都不一样。在命运矩阵里面，随着选择的不同，没有哪一个林克的命运会一模一样。
有一个方格型的命运矩阵，矩阵边界在无穷远处。我们做如下假设：
1. 每一个格子象征林克命运中的一次抉择，每次只能从相邻的方格中做选择。
2. 从某个格子出发，只能从当前方格移动一格，走到某个相邻的方格上；
3.选择一旦做出就不可更改，因此走过的格子无法走第二次。
4. 从命运矩阵的第1行出发，只能向下、左、右三个方向走；
请问：如果最高允许在方格矩阵上走n步（也就是林克一生最多能做n个选择）。
那么随着n的不同，请问一共会有多少种不同选择的方案导致多少个不同的林克？
注意，2种走法只要有一步不一样，即被认为是不同的方案。

#### 输入

允许在方格上行走的步数n(n <= 20)

#### 输出

经过n个选择之后，诞生的不同的林克的个数。

#### 提示

Andy(2021)
Andy(2020)
改编自《踩方格》

#### 参考代码

```cpp
#include<iostream>
using namespace std;

const int N=70;
int fates[70][70];

int dx[3]={0,0,1},dy[3]={1,-1,0};

long long dfs(int i,int j,int n)
{
    if(n==0)return 1;//步数用完，当前路径有效，计数+1
    long long res=0;
    fates[i][j]=1;
    for(int k=0;k<3;k++)
    {
        int x=i+dx[k],y=j+dy[k];//移动一格
        if(fates[x][y]==0)//踏入新的区域
        {
            res+=dfs(x,y,n-1);
        }
    }
    fates[i][j]=0;
    return res;
}

int main()
{
    int n;
    cin>>n;
    cout<<dfs(0,N/2,n);
    return 0;
}
```

### LinK39 净化迷雾森林

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK39/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

迷雾森林被加农的玷污了，原本圣洁无比的迷雾森林，如今被彻底玷污，空气中充满着紫色的恶臭。
林克临危不惧，带上呼吸面罩，挥舞大师之剑的光芒，净化迷雾。林克所到之处，加农褪去，圣洁回归。
如下图，红色代表墙壁，紫色的迷雾代表需要净化的空间，金色代表林克开始净化的起点。
从某处开始，林克只能向相邻的紫色区域移动。请问，林克总共能够净化多少区域？

图1 初始状态                                                                图2   净化中.....

-----

#### 输入

包括多个数据集合。每个数据集合的第一行是两个整数W和H，分别表示x方向和y方向瓷砖的数量。W和H都不超过20。
在接下来的H行中，每行包括W个字符。
每个字符表示一个区域的状态，规则如下
1）‘.’：代表紫色迷雾；
2）‘#’：代表红墙；
3）‘@’：代表林克的起始位置(该字符在每个数据集合中唯一出现一次。）
当在一行中读入的是两个零时，表示输入结束。

#### 输出

对每个数据集合，分别输出一行，显示林克从初始位置出发能净化的迷雾数(记数时包括初始位置的迷雾)。

#### 提示

Andy(2021)
Andy(2020)
（改编自《红与黑》）

#### 参考代码

```cpp
#include<iostream>
using namespace std;

char fates[21][21];
int w,h;
int dx[4]{0,0,1,-1},dy[4]={1,-1,0,0};
long long dfs(int i,int j)
{
    long long res=1;
    fates[i][j]='#';
    for(int k=0;k<4;k++)
    {
        int x=i+dx[k],y=j+dy[k];
        if(x>=0&&y>=0&&x<h&&y<w&&fates[x][y]=='.')
        {
            res+=dfs(x,y);
        }
    }
    return res;
}


int main()
{
    while(cin>>w>>h,w||h)
    {
        int x,y;
        for(int i=0;i<h;i++)
        {
            for(int j=0;j<w;j++)
            {
                cin>>fates[i][j];
                if(fates[i][j]=='@')
                {
                    x=i;y=j;
                }
            }
        }
        cout<<dfs(x,y)<<endl;
    }
    
    return 0;
}
```

### LinK40 骑士林克的怜悯(1)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK40/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

林克驰骋在海拉鲁大陆的平原上无比自由，他想起二维空间中的国际象棋同伴，回想起自己也活在2D世代的局限，心生怜悯。
那些骑士，永远被局限在8×8的棋盘之内厮杀，他们的世界永不改变。因此，林克去到阿卡来研究所寻求帮助，他得到新的道具——变形棋盘。
这个变形棋盘可以根据输入的两个参数的（p,q）创造全新的棋盘空间。
如下图分别是（p,q）为(3,9) , (6,3) ,以及(5,5)的棋盘空间。
----

假设2D世界的骑士，移动的方式按字母次序有如下8种：

请问对于每一种棋盘（p,q），2D骑士是否有一种一次遍历所有棋盘方格的路线？
如果有，请输出这条路线（若有多条路线，请输出字典序最小的路线）。
如果没有，请输出无。

#### 输入

输入数据第一行为正整数n，代表有多少组输入样例
接下来n行是两个整数代表行p和列q, 代表变形棋盘的行列参数，其中（1 <= p * q <= 26）。

#### 输出

每个样例的输出2行，格式如下：
"#i:" 其中i代表第i种棋盘
骑士跳过的每个格子（每个访问的格子用大写字母加数字表示），一条可行的路径输出如(A1B3C1A2B4C2A3B1C3A4B2C4)，
如果没有可行方案，则第二行输出：none

#### 提示

Andy(2021)
Andy(2020)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK41 英杰们的蛋糕塔

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK41/
- 时间限制：3000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

塞尔达公主的生日将近，英杰们预备绞尽脑汁要为公主作一个生日蛋糕塔。
这个蛋糕塔一共有N层，每层都是圆柱体，象征英杰们合一平等的关系。
蛋糕塔的总体积是 V * π 。
最底层的蛋糕半径最大，最上层的蛋糕半径最小，这种结构象征英杰们稳固的生命根基。
因此从底层往上层数，第i (1 <= i <= N) 层是半径为 r(i), 高度为h(i) 的圆柱体。当 i < N 时，有r(i) > r(i+ 1) 且 h(i) > h(i+1)。
蛋糕塔每一层圆柱体的半径r(i)和高度h(i)都是整数，象征公主英杰们不打折的忠诚。
蛋糕塔的表面积，象征英杰们与公主的亲密关系面临的外部挑战。
因此，对于给定的V和N，我们希望找到一个使表面积最小的蛋糕塔制作方案。
令表面积Q = S* π，对给定的V和N，请输出使Q最小的S是多少。
（除Q外，以上所有数据皆为正整数，下图是蛋糕塔的俯视图和示意图）

#### 输入

有两行，第一行为V（V <= 100000），表示待制作的蛋糕的体积为V * π；第二行为N(N <= 20)，表示蛋糕的层数为N。

#### 输出

仅一行，是一个正整数S（若无解则S = 0）。

提示：根据题意，我们无需计算π，因此有
圆柱体积v' = r*r*h
圆柱侧面积 s' = 2*r*h
圆柱底面积c'= r*r

#### 提示

Andy讲解(B站)（更正：R和H都要逐层递减，题面无误)
（改编自《生日蛋糕》，Y总讲解(付费)）
参考题解
Y总代码

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK42 击杀黄金蛋糕人马

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK42/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

在海拉鲁大陆冒险，没有绝佳的剑法+想象力是不可能存活下来的。
这不，林克遇到了一个特别巨大的敌人——黄金蛋糕人马（莱尼尔的变种）
这黄金蛋糕人马长相非常特别，没有脚没有手没有嘴巴没有头，整个身材就是一个大矩形（喂喂，这不就是黄金莱尼尔吗？）

它的长和宽分别是整数w、h。
林克举起大师之剑，挥向黄金蛋糕人马，要将其切成m块矩形小块打包走，分给自己的朋友（每块都必须是矩形、且长和宽均为整数）。
大师之剑无比锐利，每一斩带出的剑气能将黄金蛋糕人马劈成两半（形成两个小矩形蛋糕）。
经过m-1斩，黄金蛋糕人马居然被劈成m块小蛋糕（喂喂，你的想象力也太丰富了，明明切不开好吗？）
请计算：最后得到的m块小蛋糕中，最大的那块蛋糕的面积下限。

假设w= 4,h= 4,m= 4，则下面的斩击可使得其中最大蛋糕块的面积最小。(十字斩)

假设w= 4,h= 4,m= 3，则下面的斩击可使得其中最大蛋糕块的面积最小:.(二连斩)

#### 输入

共有多行，每行表示一个测试案例。
每行是三个用空格分开的整数w, h, m ，其中1 ≤ w, h, m ≤ 20 ， m ≤ wh.
当 w = h = m = 0 时不需要处理，表示输入结束。

#### 输出

每个测试案例的结果占一行，输出一个整数，表示最大蛋糕块的面积下限。

#### 提示

Andy讲解

改编自《分蛋糕》

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK43 求二进制中1的个数

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK43/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

为了寻找失去的回忆碎片，林克必须预备足够的料理。能够快速突破数独试炼，熟练运用lowbit，才能把难题转换为美味佳肴。
请用lowbit解决如下问题：
输入一个32位整数，输出该数二进制表示中1的个数。

注意：
负数在计算机中用其绝对值的补码来表示。

#### 输入

输入：9\n输出：2\n解释：9的二进制表示是1001，一共有2个1。

#### 输出

输入：-2\n输出：31\n解释：-2在计算机里会被表示成11111111111111111111111111111110，\n      一共有31个1。

#### 提示

Andy讲解

#### 参考代码

```cpp
#include<iostream>
using namespace std;
//补全下列两个函数即可
//从n中减lowbit循环
int lowbit(int n)
{
  //write your code here
  return n&-n;
}
int NumberOf1(int n) {
        int res = 0;
        while(n)
        {
          n-=lowbit(n);
          res+=1;
        }
      //write your code here
        return res;
}
// int main()
// {
//   int n;
//   cin>>n;
//   cout<<NumberOf1(n)<<endl;
// }
```

### LinK44 二进制中1的最低位位置(打表+Lowbit)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK44/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

打表法是寻找回忆不可或缺的重要方法，如果配合上lowbit，那么更难的问题也能迎刃而解。
请运用打表法和lowbit算法解决如下问题：
给定一个16位的十进制数，请把该数转换为二进制数来看待。
请找到该数看为二进制后，其最低位的1出现的位置。
也就是这个数最低位的1是二进制中的第几位呢？

#### 输入

以1开头的二进制数的十进制表示B.
例如输入9.

#### 输出

输出K，表示B中的1在第K位（K=0,1,2....15)
9的最低位的1出现在位置0.

#### 提示

Andy讲解
8 = 2^3 故需要计算以2为底的log(2^3)=3，得到第3位。也就是8的二进制表示中，1出现在第3位。

用打表法计算Log2。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int lowbit(int n)
{
    return n&-n;
}


int main(){
    int n,m;
    cin>>n;
    m=lowbit(n);
    int res=0;
    while(m!=1)
    {
        m=m>>1;
        res++;
    }
    cout<<res;


}
```

### LinK45 真假记忆碎片

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK45/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

在千辛万苦得到一个记忆碎片之后，林克需要辨别真假，若是所得到的并不是发生历史中的碎片，乃是后人捏着的，那么林克如何寻回完整的自己呢？
已知林克找到的记忆碎片9×9矩阵是初始矩阵A的解法，也就是记忆碎片A。空白的部分在初始矩阵中用0表示。

（初始矩阵A）（记忆碎片A）
请写一个算法，判定找到的记忆碎片是否是真的？

#### 输入

输入的记忆碎片A是一个9行9列的数独矩阵。
每行包含9个数字（均不超过数字为1-9）。
初始矩阵A：
530070000
600195000
098000060
800060003
400803001
700020006
060000280
000419005
000080079

#### 输出

如果输入数据真的是初始矩阵A的解，输出Yes，否则输出No

#### 提示

Andy(2021)

#### 参考代码

```cpp
#include<iostream>
#include<cstring>
using namespace std;
const int N=9;
const int M=3;
int a[N][N],b[N][N];
bool st[N+1];

string memory[N]{{"530070000"},{"600195000"},{"098000060"},
                {"800060003"},{"400803001"},{"700020006"},
                {"060000280"},{"000419005"},{"000080079"}};
bool check_input()
{
    string line;
    for(int i=0;i<N;i++)//输入长度
    {
        cin>>line;
        if(line.size()!=N)return false;//检测长度
        for(int j=0;j<N;j++)
        {
            int t=line[j]-'0';
            if(t<0||t>N)return false;//非法字符
            if(a[i][j]!=0&&a[i][j]!=t)return false;//与初值匹配
            b[i][j]=t;
        }
        
    }
    return true;
}

bool check_row()
{
    for(int i=0;i<N;i++)
    {
        memset(st,false,sizeof st);//初始化
        for(int j=0;j<N;j++)
        {
            int t=b[i][j];
            if(t<0||t>N)return false;
            if(st[t])return false;
            st[t]=true;
        }
    }
    return true;
}

bool check_col()
{
    for(int i=0;i<N;i++)
    {
        memset(st,false,sizeof st);
        for(int j=0;j<N;j++)
        {
            int t=b[j][i];
            if(t<0||t>N)return false;
            if(st[t])return false;
            st[t]=true;
        }
    }
    return true;
}

bool check_block()
{
    for(int x=0;x<N;x+=M)
    {
        for(int y=0;y<N;y+=M)
        {
            memset(st,false,sizeof st);
            for(int dx=0;dx<M;dx++)
            {
                for(int dy=0;dy<M;dy++)
                {
                    int t=b[x+dx][y+dy];
                    if(t<0||t>N)return false;
                    if(st[t])return false;
                    st[t]=true;
                }
            }
        }
    }
    return true;
}




int main()
{
    for(int i=0;i<N;i++)
    {
        for(int j=0;j<N;j++)
        {
            a[i][j]=memory[i][j]-'0';
        }
    }


    if(check_input()&&check_col()
    &&check_row()&&check_block())
    {
        cout<<"Yes"<<endl;
    }
    else cout<<"No"<<endl;
}
```

### LinK46 寻找林克的回忆(1)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK46/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

为了找到百年沉睡的原因，寻回百年前与公主一起的记忆碎片，明白自己是谁，林克必须破解数独谜题。
林克需要在限定时间内，把9×9的数独补充完整，使得图中每行、每列、每个3 × 3的九宫格内数字1~9均恰好出现一次。
林克需要寻回失去的记忆碎片，你，作为林克的朋友，需要帮忙林克寻回9×9棋盘中失去的数字。
或许有一天，林克也能帮助你，寻回关于你是谁，你从哪里来的记忆碎片。
这是数独试炼I（解密成功可以解锁林克前25%的记忆碎片）

#### 输入

输入为9×9的数据。一共9行，每行有9个数字。
数字为0表示对应的数字盘为空。

#### 输出

对于每个测试用例，程序应以与输入数据相同的格式打印解决方案(9×9)。
空单元格必须根据规则进行填充。
如果解决方案不是唯一的，则程序可以打印其中任何一种。

#### 提示

Andy(2021)
Andy(2020)
改编自：POJ2676

《算法竞赛进阶指南》

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<cstring>

const int N=10;
char a[N][N];
bool row[N][N]={false},col[N][N]={false},block[3][3][N]={false};

bool dfs(int x,int y)
{
    if(y==9)
    {
        x++;
        y=0;
    }
    if(x==9)//数组结束
    {
        for(int i=0;i<=8;i++)
        {
            cout<<a[i]<<endl;
        }
        return true;
    }
    if(a[x][y]!='0')return dfs(x,y+1);
    for(int i=1;i<=9;i++)
    {
        if(!row[x][i]&&!col[y][i]&&!block[x/3][y/3][i])
        {
            a[x][y]=i+'0';
            row[x][i]=col[y][i]=block[x/3][y/3][i]=true;
            if(dfs(x,y+1))return true;
            a[x][y]='0';//恢复现场
            row[x][i]=col[y][i]=block[x/3][y/3][i]=false;
        }
    }

    return false;
}

int main()
{
    for(int i=0;i<9;i++)
            cin>>a[i];
     for(int i = 0; i < 9; i++)
    {
        for(int j = 0; j < 9; j++)
        {
            if(a[i][j] != '0')//存储数据
            {
                int num = a[i][j] - '0';
                row[i][num] = true;
                col[j][num] = true;
                block[i/3][j/3][num] = true;
            }
        }
    }
    dfs(0,0);


}
```

### LinK47 寻找林克的回忆(2)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK47/
- 时间限制：2000 ms
- 内存限制：256 MB

#### 题面

为了找到百年沉睡的原因，寻回百年前与公主一起的记忆碎片，明白自己是谁，林克必须破解数独谜题：
林克需要在限定时间内，把9×9的数独补充完整，使得图中每行、每列、每个3 × 3的九宫格内数字1~9均恰好出现一次。
林克需要寻回失去的记忆碎片，你，作为林克的朋友，需要帮忙林克寻回9×9棋盘中失去的数字。
或许有一天，林克也能帮助你，寻回关于你是谁，你从哪里来的记忆碎片。
这是数独试炼II（解密成功可以解锁林克25%的记忆碎片）

请编写一个程序填写数独。

#### 输入

输入包含多组测试用例。
每个测试用例占一行，包含81个字符，代表数独的81个格内数据（顺序总体由上到下，同行由左到右）。
每个字符都是一个数字（1-9）或一个”.”（表示尚未填充）。
您可以假设输入中的每个谜题都只有一个解决方案。
文件结尾处为包含单词“end”的单行，表示输入结束。

#### 输出

每个测试用例，输出一行数据，代表填充完全后的数独。

#### 提示

Andy(2021)
Andy(2020)

ACWing讲解
来源：2984

#### 参考代码

```cpp
#include<iostream>
#include<algorithm>
#include<string>
#include<cstring>
#include<algorithm>
using namespace std;

const int N = 9;
int ones[1 << N],LOG[1 << N];
int row[N],col[N],block[3][3];

string str;

inline int lowbit(int x)
{
    return x&-x;
}

void init()//初始化row和col,block
{
    for(int i=0;i<N;i++)//打表
    {
        row[i]=col[i]=(1<<N)-1;//均为111111111
    }
    for(int i=0;i<3;i++)
        for(int j=0;j<3;j++)
            block[i][j]=(1<<N)-1;

}

inline int get(int x,int y)//求出缺的数
{
    //用&运算求并集
    return row[x]&col[y]&block[x/3][y/3];
}

bool dfs(int cnt)
{
    if(!cnt)return true;
    int minv=10;//"当前找到的最少可选数字数量"的基准值,0-9
    int x=0,y=0;
    for(int i=0;i<N;i++)
        for(int j=0;j<N;j++)
            if(str[i*9+j]=='.')//
            {
                int t=ones[get(i,j)];
                if(t<minv)//每次递归找到最小
                {
                    minv=t;
                    x=i,y=j;//记录
                }
            }
    for(int i=get(x,y);i;i-=lowbit(i))
    {
        int t=LOG[lowbit(i)];
        row[x]-=1<<t;
        col[y]-=1<<t;
        block[x/3][y/3]-=1<<t;
        str[x*9+y]='1'+t;
        if (dfs(cnt-1))return true;
        row[x]+=1<<t;
        col[y]+=1<<t;
        block[x / 3][y / 3]+=1<<t;
        str[x*9+y]='.';//恢复现场
    }
    return false;
}
int main()
{
    for(int i=0;i<N;i++)
    {
        LOG[1<<i]=i;
    }//初始化LOG
    for(int i=0;i<1<<N;i++)//1<<N=2^N
    {
        int s=0;
        for(int j=i;j;j-=lowbit(j))s++;
        ones[i]=s;//得到每个数有几个1
    }
    while(cin>>str,str[0]!='e')//end结尾
    {
        init();
        int cnt=0;//计算空缺数
        for(int i=0,k=0;i<N;i++)
        {
            for(int j=0;j<N;j++,k++)
            {
                if(str[k]!='.')
                {
                    int t=str[k]-'1';//0-8
                    row[i]-=1<<t;//2^t
                    col[j]-=1<<t;
                    block[i/3][j/3]-=1<<t;
                }
                else cnt++;
            }
        }
        dfs(cnt);
        cout<<str;
        cout<<endl;
    }
}
```

### LinK48 寻找林克的回忆(3)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK48/
- 时间限制：2000 ms
- 内存限制：256 MB

#### 题面

为了寻回百年前与公主一起的记忆碎片，林克历尽千辛万苦总算破解了数独试炼I和II的谜题，寻回50%的记忆碎片。

如今，摆在他面前是数独试炼III——传说中的靶形数独（通过后可以获得剩下的30%的记忆碎片)。
靶形数独的方格同普通数独一样，在9×9的大九宫格中有9个3×3的小九宫格（用粗黑色线隔开的）。
在这个大九宫格中，有一些数字是已知的，根据这些数字，利用逻辑推理，在其他的空格上填入1到9的数字。
每个数字在每个小九宫格内不能重复出现，每个数字在每行、每列也不能重复出现。
但靶形数独有一点和普通数独不同，即每一个方格都有一个分值，而且如同一个靶子一样，离中心越近则分值越高（如下图所示）。

上图具体的分值分布是：
最里面一格（黄色区域）为10分
黄色区域外面的一圈（红色区域）每个格子为9分
再外面一圈（蓝色区域）每个格子为8分
蓝色区域外面一圈（棕色区域）每个格子为7分
最外面一圈（白色区域）每个格子为6 分
每个人必须完成一个给定的数独（每个给定数独可能有不同的填法），而且要争取更高的总分数。
而这个总分数即每个方格上的分值和完成这个数独时填在相应格上的数字的乘积的总和。
如图，在以下的这个已经填完数字的靶形数独游戏中，总分数为2829。
游戏规定，将以总分数的高低决出胜负。

求对于给定的靶形数独，能够得到的最高分数。

#### 输入

输入一共包含9行。
每行 9 个整数（每个数都在 0—9 的范围内），表示一个尚未填满的数独方格，未填的空格用“0”表示。
每两个数字之间用一个空格隔开。

#### 输出

输出可以得到的靶形数独的最高分数。
如果这个数独无解，则输出整数-1。

#### 提示

Andy(2021)
Andy(2020)
ACWing的讲解

#### 参考代码

```cpp
#include <iostream>
#include <algorithm>
#include <cstdio>
using namespace std;

const int N = 9;
int g[9][9];            
int row[9], col[9], cell[3][3];
int ones[1 << 9];       
int LOG[1 << 9];       
int ans = -1;         


void init() {

    for (int i = 0; i < N; i++) {
        row[i] = (1 << N) - 1;
        col[i] = (1 << N) - 1;
    }
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cell[i][j] = (1 << N) - 1;
        }
    }
    for (int i = 0; i < 1 << N; i++) {
        int s = 0;
        for (int j = i; j; j -= j & -j) s++;
        ones[i] = s;
    }
    for (int i = 0; i < N; i++) LOG[1 << i] = i;
}

inline int lowbit(int x) {
    return x & -x;
}

inline int get_score(int x, int y) {
    return 10 - max(abs(x - 4), abs(y - 4));
}

inline void draw(int x, int y, int t) {
    int s = 1;
    if (t > 0) g[x][y] = t;
    else {
        s = -1;
        t = -t;
        g[x][y] = 0;
    }
    t--; 
    row[x] -= s << t;
    col[y] -= s << t;
    cell[x / 3][y / 3] -= s << t;
}

inline int get(int x, int y) {
    return row[x] & col[y] & cell[x / 3][y / 3];
}


void dfs(int cnt, int score) {
    if (!cnt) {
        ans = max(ans, score);
        return;
    }

    int x, y, mins = 10;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (!g[i][j]) {
                int state = get(i, j);
                if (ones[state] < mins) {
                    mins = ones[state];
                    x = i;
                    y = j;
                }
            }
        }
    }

    for (int i = get(x, y); i; i -= lowbit(i)) {
        int t = LOG[lowbit(i)] + 1; 
        draw(x, y, t);
        dfs(cnt - 1, score + t * get_score(x, y));
        draw(x, y, -t); 
    }
}

int main() {
    init();
    int cnt = 0, score = 0;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            int x;
            scanf("%d", &x);
            if (x) {
                draw(i, j, x);
                score += x * get_score(i, j);
            } else {
                cnt++;
            }
        }
    }
    
    dfs(cnt, score);
    printf("%d\n", ans);
    return 0;
}
```

### LinK49 寻找林克的回忆(4)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK49/
- 时间限制：5000 ms
- 内存限制：258 MB
- 来源：xmu

#### 题面

为了寻回百年前与公主一起的记忆碎片，林克终于来到了数独试炼的终阶——16*16字母数独
（如果通过，可以获得最后的的20%的记忆碎片)。
字母数独要求如下：
将一个16x16的数独填写完整，使得每行、每列、每个4x4十六宫格内字母A~P均恰好出现一次。
保证每个输入只有唯一解决方案。

#### 输入

输入包含多组测试用例。
每组测试用例包括16行，每行一组字符串，共16个字符串。
第i个字符串表示数独的第i行。
字符串包含字符可能为字母A~P或”-“（表示等待填充）。
测试用例之间用单个空行分隔，输入至文件结尾处终止。

#### 输出

对于每个测试用例，均要求保持与输入相同的格式，将填充完成后的数独输出。
每个测试用例输出结束后，输出一个空行。

#### 提示

ACWing讲解
Andy2021
(来源《算法竞赛进阶指南》)

#### 参考代码

```cpp

#include <iostream>
#include<algorithm>
#include<vector>
#include<string>
#include<cstring>
using namespace std;
const int N=16;
int ones[1<<N],cnt_log[1<<N];//ones[x]表示x在二进制下有多少个1；log[x]表示log(x)的值 
int state[N][N];//状态存储，表示x行y列这个格子可以填哪些数（0-15），15位二进制表示 
char str[N][N+1];
int bstate[N*N+1][N][N],bstate2[N*N+1][N][N];//bstate和bstate2都存储状态的备份(搜索最多有N*N层，每层有一个备份) 
char bstr[N*N+1][N][N+1];//输入的N宫格也要备份 

inline int lowbit(int x)//返回x在二进制下的最后一个1  (inline加速函数调用过程)
{
    return x & -x;
}

void draw(int x,int y,int c)//在(x,y)这个格子上写上字母c(0到15表示A到P) 
{
    str[x][y]='A'+c;//先写进去，转换为原来的字母 

    for (int i=0;i<N;++i)//更新state 
    {
        state[x][i] &= ~(1 << c);//x这一行其他位置都不能再填c (把表示c的二进制位改成0，yxc大佬的位运算)
        state[i][y] &= ~(1 << c);//y这一列其他位置都不能再填c 
    }

    int sx=x/4*4,sy=y/4*4;//把(x,y)所在的十六宫格也做一次同样的操作 
    for (int i=0;i<4;++i)
        for (int j=0;j<4;++j)
                state[sx+i][sy+j] &= ~(1 << c);//同上 

    state[x][y]=1<<c;
}

bool dfs(int cnt)//传入的参数cnt表示当前空格个数 
{
    if (!cnt) return true;//cnt为零就找到了方案，返回true

    int kcnt=cnt;//先进行备份 
    memcpy(bstate[kcnt],state,sizeof state);
    memcpy(bstr[kcnt],str,sizeof str);

    //剪枝1：对于每个空格，如果不能填任何一个字母，则返回false；如果只能填一个字母，那么直接填上
    for (int i=0;i<N;++i)//直接枚举所有的空格
        for (int j=0;j<N;++j)
            if (str[i][j]=='-')//如果当前格子是空格 
            {
                if (!state[i][j])//如果不能填任何一个字母，则返回false；并且copy回去 
                {
                    memcpy(state,bstate[kcnt],sizeof state);
                    memcpy(str,bstr[kcnt],sizeof str);
                    return false;
                }
                if (ones[state[i][j]]==1)//如果只能填一个字母，那么直接填上
                {
                    draw(i,j,cnt_log[state[i][j]]);
                    --cnt;//填好一个空格，所以剩余空格数减1
                }
            }

    //剪枝2：对于每一行，如果某个字母不能出现在任何一个位置，则返回false；如果某个字母只有一个位置可以填，则直接填上 
    for (int i=0;i<N;++i)//枚举所有行 
    {
        int sor=0,sand=(1<<N)-1;//sor存的是这一行里每个格子备选方案的并集;sand用来找“如果某个字母只有一个位置可以填”，先假设所有字母都符合要求 
        int drawn=0;//drawn表示所有已经填上的字母是哪些 

        for (int j=0;j<N;++j)//枚举当前行所有格子 
        {
            int s=state[i][j];//只是为了少打字 
            sand &= ~(sor & s);//把不符合要求的删掉(和前面更新state是一个道理) 
            sor |= s;//求并集 
            if (str[i][j]!='-') drawn |= state[i][j];//如果当前这个位置已经填上字母，就记录下来 
        }

        if (sor!=(1<<N)-1)//如果这个并集不够A到P就是无解 
        {
            memcpy(state,bstate[kcnt],sizeof state);//同上述处理方法 
            memcpy(str,bstr[kcnt],sizeof str);
            return false;
        }

        //这样以后sand中是1的位置就表示这个字母有一个位置可以填
        for (int j=sand;j;j-=lowbit(j))//所以把所有是1的位置枚举一遍 
        {
            int t=lowbit(j);//也是为了少写一点 
            if (!(drawn & t))//如果正好也没填过就填上 
            {
                for (int k=0;k<N;++k)//更新state 
                    if (state[i][k] & t)
                    {
                        draw(i,k,cnt_log[t]);
                        --cnt;
                        break;
                    }
            }
        }
    }

    //剪枝3：对于每一列，同剪枝2  (直接把上面复制过来再把i和j调换一下就好了) 
    for (int i=0;i<N;++i)
    {
        int sor=0,sand=(1<<N)-1;
        int drawn=0;

        for (int j=0;j<N;++j)
        {
            int s=state[j][i];
            sand &= ~(sor & s);
            sor |= s;
            if (str[j][i]!='-') drawn |= state[j][i];
        }

        if (sor!=(1<<N)-1)
        {
            memcpy(state,bstate[kcnt],sizeof state);
            memcpy(str,bstr[kcnt],sizeof str);
            return false;
        }

        for (int j=sand;j;j-=lowbit(j))
        {
            int t=lowbit(j);
            if (!(drawn & t))
            {
                for (int k=0;k<N;++k)
                    if (state[k][i] & t)//这里i和k也要和上面要反一下 
                    {
                        draw(k,i,cnt_log[t]);
                        --cnt;
                        break;
                    }
            }
        }
    }

    //剪枝4：对于每个N宫格，同剪枝2
    for (int i=0;i<N;++i)//i枚举每个N宫格的位置 
    {
        int sor=0,sand=(1<<N)-1;
        int drawn=0;

        for (int j=0;j<N;++j)//j枚举一个N宫格的每个位置 
        {
            int sx=i/4*4,sy=i%4*4;
            int dx=j/4,dy=j%4;//需要定义一个偏移量 
            int s=state[sx+dx][sy+dy];
            sand &= ~(sor & s);
            sor |= s;

            if (str[sx+dx][sy+dy]!='-') drawn |= state[sx+dx][sy+dy];
        }

        if (sor!=(1<<N)-1)
        {
            memcpy(state,bstate[kcnt],sizeof state);
            memcpy(str,bstr[kcnt],sizeof str);
            return false;
        }

        for (int j=sand;j;j-=lowbit(j))
        {
            int t=lowbit(j);
            if (!(drawn & t))
            {
                for (int k=0;k<N;++k)
                {
                    int sx=i/4*4,sy=i%4*4;
                    int dx=k/4,dy=k%4;
                    if (state[sx+dx][sy+dy] & t)
                    {
                        draw(sx+dx,sy+dy,cnt_log[t]);
                        --cnt;
                        break;
                    }
                }
            }
        }
    }
    //啊，还剩一个剪枝啦 

    //剪枝5：每次选择空格时，选择备选方案(能填的字母数量)最少的格子来填 
    if (!cnt) return true;//哦对，先看看现在有没有填完(一个小剪枝) 

    int x,y,s=100;//(x,y)存储最后选择的格子，s是备选方案最小值 
    for (int i=0;i<N;++i)//遍历一遍所有的格子 
        for (int j=0;j<N;++j)
            if (str[i][j]=='-' && ones[state[i][j]]<s)//如果当前格子还没填过，并且这个格子的备选方案更少，就更新 
            {
                s=ones[state[i][j]];
                x=i,y=j;
            }

    //求完了那个格子备选方案最少，然后枚举应该在这个格子填那个字母 
    memcpy(bstate2[kcnt],state,sizeof state);//先备份一下，bstate2在这里终于用到了 
    for (int i=state[x][y];i;i-=lowbit(i))//枚举这个格子的备选方案 
    {
        memcpy(state,bstate2[kcnt],sizeof state);
        draw(x,y,cnt_log[lowbit(i)]);
        if (dfs(cnt-1)) return true;//进行下一层递归，如果成功，返回true 
    }

    //失败了也要copy回来 
    memcpy(state,bstate[kcnt],sizeof state);
    memcpy(str,bstr[kcnt],sizeof str);

    return false;//一直没找到返回false 
}

int main()
{
    for (int i=0;i<N;++i) cnt_log[1<<i]=i;//预处理cnt_log数组，如log(2)=1,log(4)=2,log(8)=3 
    for (int i=0;i<(1<<N);++i)//预处理ones数组 
        for (int j=i;j;j-=lowbit(j))//j每次减去最后一个1 
            ++ones[i];//每减一个1说明这个i就多一个1 

    while (cin>>str[0])//多组测试数据 
    {
        for (int i=1;i<N;++i) cin>>str[i];
        for (int i=0;i<N;++i)//预处理state
            for (int j=0;j<N;++j)
                state[i][j]=(1<<N)-1;//一开始假设所有空格都是空的

        int cnt=0;//存储空格个数
        for (int i=0;i<N;++i)//接着在遍历一遍，看那些格子已经填好了
            for (int j=0;j<N;++j)
                if (str[i][j]!='-') draw(i,j,str[i][j]-'A');//如果已经填好了就更新state,A到P分别用0到15表示
                else ++cnt;

        dfs(cnt);//DFS开始

        for (int i=0;i<N;++i) cout<<str[i]<<endl;//输出答案
        puts("");//每次输出完答案加一个空行
    }
    return 0;
}


// //剪枝：
// 优化：
// 1.如果不能填写任何字母，无解；
//   如果只能一个，直接填上
// 2.对于每一行，如何某一个字母不能出现在任何位置，无解；
//   只有一个可以，直接填上
// 3.每一列/16宫格与行类似
// 4.每次选方案最少的格子来填
```

### LinK50 寻找林克的回忆(4)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK50/
- 时间限制：5000 ms
- 内存限制：258 MB
- 来源：xmu

#### 题面

为了寻回百年前与公主一起的记忆碎片，林克终于来到了数独试炼的终阶——16*16字母数独
（如果通过，可以获得最后的的20%的记忆碎片)。
字母数独要求如下：
将一个16x16的数独填写完整，使得每行、每列、每个4x4十六宫格内字母A~P均恰好出现一次。
保证每个输入只有唯一解决方案。

#### 输入

输入包含多组测试用例。
每组测试用例包括16行，每行一组字符串，共16个字符串。
第i个字符串表示数独的第i行。
字符串包含字符可能为字母A~P或”-“（表示等待填充）。
测试用例之间用单个空行分隔，输入至文件结尾处终止。

#### 输出

对于每个测试用例，均要求保持与输入相同的格式，将填充完成后的数独输出。
每个测试用例输出结束后，输出一个空行。

#### 提示

ACWing讲解
Andy2021
(来源《算法竞赛进阶指南》)

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
using namespace std;

const int N = 20000;
const int m = 16 * 16 * 4;

int u[N], d[N], l[N], r[N], s[N], col[N], row[N], idx;
int ans[N], top;
struct Op {
    int x, y;
    char z;
} op[N];
char g[20][20];

void init() {
    for (int i = 0; i <= m; i++) {
        l[i] = i - 1;
        r[i] = i + 1;
        s[i] = 0;
        d[i] = u[i] = i;
    }
    l[0] = m;
    r[m] = 0;
    idx = m + 1;
}

void add(int &hh, int &tt, int x, int y) {
    row[idx] = x;
    col[idx] = y;
    s[y]++;
    u[idx] = y;
    d[idx] = d[y];
    u[d[y]] = idx;
    d[y] = idx;
    r[hh] = l[tt] = idx;
    r[idx] = tt;
    l[idx] = hh;
    tt = idx++;
}

void remove(int p) {
    r[l[p]] = r[p];
    l[r[p]] = l[p];
    for (int i = d[p]; i != p; i = d[i]) {
        for (int j = r[i]; j != i; j = r[j]) {
            s[col[j]]--;
            u[d[j]] = u[j];
            d[u[j]] = d[j];
        }
    }
}

void resume(int p) {
    for (int i = u[p]; i != p; i = u[i]) {
        for (int j = l[i]; j != i; j = l[j]) {
            u[d[j]] = j;
            d[u[j]] = j;
            s[col[j]]++;
        }
    }
    r[l[p]] = p;
    l[r[p]] = p;
}

bool dfs() {
    if (!r[0]) return true;
    int p = r[0];
    for (int i = r[0]; i; i = r[i]) {
        if (s[i] < s[p]) p = i;
    }
    remove(p);
    for (int i = d[p]; i != p; i = d[i]) {
        ans[top++] = row[i];
        for (int j = r[i]; j != i; j = r[j]) {
            remove(col[j]);
        }
        if (dfs()) return true;
        for (int j = l[i]; j != i; j = l[j]) {
            resume(col[j]);
        }
        top--;
    }
    resume(p);
    return false;
}

int main() {
    while (~scanf("%s", g[0])) {
        for (int i = 1; i < 16; i++) scanf("%s", g[i]);
        init();
        int n = 1;
        for (int i = 0; i < 16; i++) {
            for (int j = 0; j < 16; j++) {
                int a = 0, b = 15;
                if (g[i][j] != '-') a = b = g[i][j] - 'A';
                for (int k = a; k <= b; k++, n++) {
                    int hh = idx, tt = idx;
                    op[n] = {i, j, char(k + 'A')};
                    add(hh, tt, n, i * 16 + j + 1);
                    add(hh, tt, n, 256 + i * 16 + k + 1);
                    add(hh, tt, n, 512 + j * 16 + k + 1);
                    int block = (i / 4) * 4 + (j / 4);
                    add(hh, tt, n, 768 + block * 16 + k + 1);
                }
            }
        }
        top = 0;
        if (dfs()) {
            for (int i = 0; i < top; i++) {
                Op &o = op[ans[i]];
                g[o.x][o.y] = o.z;
            }
            for (int i = 0; i < 16; i++) {
                printf("%s\n", g[i]);
            }
            printf("\n");
        }
    }
    return 0;
}
```

### LinK51 净化迷雾森林(广搜)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK51/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

迷雾森林被加农的玷污了，原本圣洁无比的迷雾森林，如今被彻底玷污，空气中充满着紫色的恶臭。
林克临危不惧，带上呼吸面罩，挥舞大师之剑的光芒，净化迷雾。林克所到之处，加农褪去，圣洁回归。
如下图，红色代表墙壁，紫色的迷雾代表需要净化的空间，金色代表林克开始净化的起点。
从某处开始，林克只能向相邻的紫色区域移动。请问，林克总共能够净化多少区域？

图1 初始状态                                                                图2   净化中.....

-----

#### 输入

包括多个数据集合。每个数据集合的第一行是两个整数W和H，分别表示x方向和y方向瓷砖的数量。W和H都不超过20。
在接下来的H行中，每行包括W个字符。
每个字符表示一个区域的状态，规则如下
1）‘.’：代表紫色迷雾；
2）‘#’：代表红墙；
3）‘@’：代表林克的起始位置(该字符在每个数据集合中唯一出现一次。）
当在一行中读入的是两个零时，表示输入结束。

#### 输出

对每个数据集合，分别输出一行，显示林克从初始位置出发能净化的迷雾数(记数时包括初始位置的迷雾)。

#### 提示

Y总讲解：红与黑

#### 参考代码

```cpp
#include <iostream>
#include<algorithm>
#include<queue>

using namespace std;

typedef pair<int, int>PII;
const int N = 25;
int n, m;
char g[N][N];

int bfs(int sx,int sy)
{
    queue<PII>q;
    q.push({ sx,sy });
    g[sx][sy] = '#';
    int res = 0;
    int dx[] = { -1,0,1,0 }, dy[] = { 0,1,0,-1 };
    while (q.size())
    {
        auto t = q.front();
        q.pop();
        res++;

        for (int i = 0; i < 4; i++)
        {
            int x = t.first + dx[i], y = t.second + dy[i];
            if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] != '.')continue;
            g[x][y] = '#';
            q.push({ x,y });
        }
    }
    return res;
}





int main()
{
    while (cin >> m >> n && n || m)
    {
        for (int i = 0; i < n; i++)cin >> g[i];
        int x, y;
        for(int i=0;i<n;i++)
            for (int j = 0; j < m; j++)
            {
                if (g[i][j] == '@')
                {
                    x = i, y = j;
                }
            }
        cout << bfs(x, y) << endl;
    }

    return 0;
}
```

### LinK52 波克布林的巡逻范围

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK52/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

有一个m行和n列的方阵区域(m＊n)，横纵坐标范围分别是0∼m−1和0∼n−1。
一只红色的波克布林从坐标0,0的格子开始巡逻，每一次只能向左，右，上，下四个方向移动一格。
但是不能进入行坐标和列坐标的数位之和大于k的格子。
请问该红色波克布林能够达到多少个格子？
假如输入：k=18, m=40, n=40
则输出是：1484
根据题意思：当k为18时，波克布林能够进入方格（35,37），因为3+5+3+7 = 18。      但是，它不能进入方格（35,38），因为3+5+3+8 = 19。

#### 输入

输入一行，三个整数，由空格隔开，代表k m n
其中：
0<=k<=100

0<=m<=50
0<=n<=50

#### 输出

一个整数，表示红色波克布林能达到的多少格子。

#### 提示

Andy的讲解

ACWing讲解
《来源：剑指Offer》

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<queue>

using namespace std;
int k, m, n;

int get_int_sum(int x)
{
    int s = 0;
    while (x)s += x % 10, x /= 10;//取出每个位的值加到s
    return s;
}

int get_pair_sum(pair<int, int>p)
{
    int s = 0;
    s += get_int_sum(p.first);
    s += get_int_sum(p.second);
    return s;
}
//vector<vector<bool>>st(rows, vector<bool>(cols, false));//长为cols，每一项为false
//queue < pair<int, int>>q;

int bfs(int threshold, int rows, int cols)
{
    if (!rows || !cols)return 0;

    vector<vector<bool>>st(rows, vector<bool>(cols, false));
    queue<pair<int, int>>q;

    int dx[4] = { -1,0,1,0 }, dy[4] = { 0,1,0,-1 };

    int res = 0;
    q.push({ 0,0 });
    while (q.size())
    {
        auto t = q.front();
        q.pop();
        if (st[t.first][t.second] || get_pair_sum(t) > threshold)continue;//st[t.first][t.second]为true
        res++;
        st[t.first][t.second] = true;

        for (int i = 0; i < 4; i++)
        {
            int x = t.first + dx[i], y = t.second + dy[i];
            if (x >= 0 && x < rows && y >= 0 && y < cols)
                q.push({ x,y });
        }
    }
    return res;
}
int main()
{
    int ans;
    cin >> k >> m >> n;
    ans = bfs(k, m, n);
    cout << ans;
}
```

### LinK53 加农的入侵

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK53/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

加农是罪的化身，所到之处污秽遍地。原先富丽堂皇的海鲁拉城堡也被加农污秽了。
根据调查，加农污秽一片地区有如下规律：
下图是一个矩形区域，Y=3,X=4。

"."表示干净区域，而"*"表示障碍物。

如果加农一开始在左下角(1,1），那么加农将会以如下态势污染区域：

加农将在4天后污染整个区域。
设区域为矩形Y×X（1<=Y,X<=100），假设加农从(Mx,My)开始扩散，请问经过几天，加农会完全占据这个区域呢？

#### 输入

* 第一行: 四个由空格隔开的整数: X, Y, Mx, My
* 第2到第Y+1行:每行包含一个由X个字符（"."表示干净区域，而"*"表示障碍物。）构成的字符串，共同描绘了草地的完整地图。
(1≤X,Y≤100)

#### 输出

输出一个整数，表示加农完全占领该区域所需要的天数。

#### 提示

Andy的讲解
Y总讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK54 骑士林克的怜悯(2)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK54/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

帮助自己的2D骑士同伴进入到变形棋盘世界不久，林克意识到既然棋盘可变，但是骑士们的战斗水平却没有长进。
虽然可以在见到更多的风景，探索更多不同的空间，但是如果自身的实力没有提升，那么骑士们感受不到那真正的自由以及成长的快乐。
林克找到去到阿卡来研究所，得到新的道具——试炼棋盘。
这个新道具可以在骑士的2D空间中创造试炼场以及2D守护者，让骑士们可以开始实战演练，提升攻击力。
如下图是一个10列11行的棋盘（11×10）：
K代表骑士的位置，H代表守护者的位置。
. 代表可移动的位置，*代表障碍物。

骑士可以按照下图中的A,B,C,D...这条路径用5次跳跃，抵达守护者的位置偷袭它。（有可能其它路线的长度也是5）：

请问，2D骑士要偷袭守护者，至少要跳多少次？

#### 输入

第一行： 两个数，表示棋盘的列数Column(<=150)和行数Row(<=150)
第二行到结尾: Row行Column列的棋盘。

#### 输出

一个数，表示跳跃的最小次数。

#### 提示

Andy讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK55 公主的攻击范围

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK55/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

塞尔达公主瘦弱的身体里面蕴含着不可思议的神圣力量，这个力量从公主所在的位置释放，可以逐层扩散到加农污秽掌控的区域。
给定一个N行M列的区域，代号为1的区域是公主能力释放的初始区，代号为0的区域表示需要洁净的区域。
每经过1毫秒，公主的神圣之光向外扩散一格，洁净相邻区域（4个方向），请计算每个标记为0的区域中加农的势力最多还能得瑟几毫秒。

格子与格子之间的距离使用曼哈顿距离计算。
提示：

根据如上公式可知：曼哈顿距离指两点之间的行坐标i距离和列坐标j距离之和。

题目的意思就是求出矩阵中所有节点为0的点，到节点为1的点的曼哈顿距离。

#### 输入

第一行两个整数n,m。
接下来一个N行M列的01矩阵，数字之间没有空格。
数据范围1≤N,M≤1000

#### 输出

一个N行M列的矩阵B，相邻两个整数之间用一个空格隔开。每个整数表示加农势力存在的毫秒数（最小曼哈顿距离值）

#### 提示

Andy的讲解

ACWing讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK56 滚石柱

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK56/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

努力练习用磁铁拖拉滚动大铁箱的林克，想起了自己小时候喜欢的一个游戏，滚石柱。

这个游戏的任务是滚动一个1×1×2的长方体石柱，把它滚动到目的地。
石柱在地面上有3种放置形式，“立”在地面上（1×1的面接触地面）横“躺”或者竖“趟”在地面上（1×2的面接触地面）

迷宫是一个N行M列的矩阵，每个位置可能是硬地（用”.”表示）、易碎地面（用”E”表示）、禁地（用”#”表示）、起点（用”X”表示）或终点（用”O”表示）。
在每一步操作中，可以按上下左右四个键之一。
按下按键之后，石柱向对应的方向沿着棱滚动90度。
任意时刻，长方体不能有任何部位接触禁地，并且不能立在易碎地面上。
字符”X”标识长方体的起始位置，地图上可能有一个”X”或者两个相邻的”X”。
地图上唯一的一个字符”O”标识目标位置。
求把石柱移动到目标位置（即立在”O”上）所需要的最少步数。
在移动过程中，”X”和”O”标识的位置都可以看作是硬地被利用。

#### 输入

输入包含多组测试用例。
对于每个测试用例，第一行包括两个整数N和M。
接下来N行用来描述地图，每行包括M个字符，每个字符表示一块地面的具体状态。
当输入用例N=0，M=0时，表示输入终止，且该用例无需考虑。
数据范围3≤N,M≤500

#### 输出

每个用例输出一个整数表示所需的最少步数，如果无解则输出”Impossible”。
每个结果占一行。

#### 提示

Andy讲解

ACWing讲解
《算法竞赛进阶指南》

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK57 Dijkstra求最短路(1)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK57/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

给定一个n个点m条边的有向图，图中可能存在重边和自环，所有边权均为正值。
请你求出1号点到n号点的最短距离，如果无法从1号点走到n号点，则输出-1。

#### 输入

第一行包含整数n和m。
接下来m行每行包含三个整数x，y，z，表示存在一条从点x到点y的有向边，边长为z。

#### 输出

输出一个整数，表示1号点到n号点的最短距离。
如果路径不存在，则输出-1。

#### 提示

原题链接

#### 参考代码

```cpp
#include<iostream>
#include<algorithm>
#include<cstring>

using namespace std;

const int N=510;
int n,m;
int g[N][N];
int dist[N];//计算距离
bool st[N];

int dijkstra()
{
    memset(dist,0x3f,sizeof dist);//初始化为无穷
    dist[1]=0;
    for(int i=0;i<n-1;i++)//除去00还有n-1
    {
        int t=-1;
        for(int j=1;j<=n;j++)
        {
            if(!st[j]&&(t==-1||dist[t]>dist[j]))
                t=j;
        }
        for(int j=1;j<=n;j++)
        {
            dist[j]=min(dist[j],dist[t]+g[t][j]);
            
        }
        st[t]=true;
    }
    if(dist[n]==0x3f3f3f3f)return -1;
    return dist[n];
}

int main()
{
        scanf("%d%d",&n,&m);
        memset(g,0x3f,sizeof g);
        while(m--)
        {
            int a,b,c;
            scanf("%d%d%d",&a,&b,&c);
            g[a][b]=min(g[a][b],c);//防止重复
        }
        printf("%d\n",dijkstra());

        return 0;
}
```

### LinK58 Dijkstra求最短路(2)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK58/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

给定一个n个点m条边的有向图，图中可能存在重边和自环，所有边权均为非负值。
请你求出1号点到n号点的最短距离，如果无法从1号点走到n号点，则输出-1。

#### 输入

第一行包含整数n和m。
接下来m行每行包含三个整数x，y，z，表示存在一条从点x到点y的有向边，边长为z。

#### 输出

输出一个整数，表示1号点到n号点的最短距离。
如果路径不存在，则输出-1。

#### 提示

原题链接

#### 参考代码

```cpp
#include<iostream>
#include<cstring>
#include<algorithm>
#include<queue>

using namespace std;

typedef pair<int,int> PII;

const int N =1e6+10;

int m,n;//行、列
int h[N],w[N],e[N],ne[N],idx;//数组模拟链表
int dist[N];//距离
bool st[N];//状态

void add(int a,int b,int c)
{
    e[idx]=b,w[idx]=c,ne[idx]=h[a],h[a]=idx++;
}

int dijkstra()
{
    memset(dist,0x3f,sizeof dist);
    dist[1]=0;
    priority_queue<PII,vector<PII>,greater<PII>>heap;

    heap.push({0,1});
    while(heap.size())
    {
        auto t=heap.top();
        heap.pop();
    
        int ver=t.second,distance=t.first;

        if(st[ver])continue;
        st[ver]=true;
        for(int i=h[ver];i!=-1;i=ne[i])
        {
            int j=e[i];
            if(dist[j]>dist[ver]+w[i])
            {
                dist[j]=dist[ver]+w[i];
                heap.push({dist[j],j});
            }
        }
    }
    if(dist[n]==0x3f3f3f3f)return -1;
    return dist[n];
}

int main()
{
    scanf("%d%d",&n,&m);
    memset(h,-1,sizeof h);
    while(m--)
    {
        int a,b,c;
        scanf("%d%d%d",&a,&b,&c);
        add(a,b,c);

    }
    cout<<dijkstra()<<endl;
    return 0;


}
```

### LinK59 维修电路

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK59/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

林克的大师摩托的飞行装置被撞坏了，极度影响他的卡丁车比赛。下图是飞行装置的电路板示意图。
电路板的整体结构是一个R行C列的网格（R,C≤500）

每个格点都是电线的接点，每个格子都包含一个电子元件。
电子元件的主要部分是一个可旋转的、连接一条对角线上的两个接点的短电缆。
在旋转之后，它就可以连接另一条对角线的两个接点。
电路板左上角的接点接入直流电源，右下角的接点接入飞行车的发动装置。
林克发现因为某些元件的方向不小心发生了改变，电路板可能处于断路的状态。
请问如何旋转最少数量的元件，使电源与发动装置重新连同在一起呢？
注意：电流只能通过斜向的线段，水平和竖直线段不是电线。

提示：只需要按照下面的方式旋转标准件，就可以使得电源和发动机之间连通。

#### 输入

输入文件包含多组测试数据。
第一行包含一个整数T，表示测试数据的数目。
对于每组测试数据，第一行包含正整数R和C，表示电路板的行数和列数。
之后R行，每行C个字符，字符是"/"和"\"中的一个，表示标准件的方向。
数据范围

#### 输出

对于每组测试数据，在单独的一行输出一个正整数，表示所需的最小旋转次数。
如果无论怎样都不能使得电源和发动机之间连通，输出NO SOLUTION。

#### 提示

Andy讲解
ACWing讲解
改编自《电路维修》

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK60 突袭路线

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK60/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

为了解救公主，林克必须深入敌后。
在备战前，他拿出“关系分析仪”扫描敌营中每个士兵之间的关系。
关系分析仪的功能说明如下：
如果A的活动范围在B的眼皮底下，那么分析仪就会从B出发连一条射线指向A（B-->A).
经过扫描，林克得到全营敌兵的相互关系。有些敌人被多个同伴看顾，有些敌人背后一个替他守望的都没有。
林克决定从背后没有人的敌人开始，潜伏到其背后，突袭之，并且避免被其他人发现。
军营一共有n个敌人，彼此之间的关系有m条射线，请找到一条可以逐个击破敌人的路线图。
如果找不到这样一条突袭路线，请则输出-1.

提示：
问题转化为：给定一个n个点m条边的有向图，点的编号是1到n，图中可能存在重边和自环。
请输出任意一个该有向图的拓扑序列，如果拓扑序列不存在，则输出-1。
若一个由图中所有点构成的序列A满足：对于图中的每条边(x, y)，x在A中都出现在y之前，则称A是该图的一个拓扑序列。
数据范围：1≤n,m≤10^5

#### 输入

第一行包含两个整数n和m
接下来m行，每行包含两个整数x和y，表示存在一条从点x到点y的有向边(x, y)。

#### 输出

共一行，如果存在拓扑序列，则输出拓扑序列。
否则输出-1。

#### 提示

Andy讲解
acwing讲解
改编自《有向图的拓扑序列》

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK61 最省赛程

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK61/
- 时间限制：5000 ms
- 内存限制：256 MB

#### 题面

为了让自己能够驾驭大师摩托，打开了大师摩托的隐藏任务：“赛车试炼”。
然而这个特殊的赛车试炼，竟然比的不是车速，比的是如何“省”油钱。
林克需要驾驶不同邮箱容量各异的赛车，从起点城市S开到终点城市E。
有N个城市（编号0、1…N-1）和M条赛道(构成一张无向图)。

在每个城市里边都有一个加油站，不同的加油站的单位油价不一样(有些城市油价贵，有些城市油价便宜些)。
请计算，如果林克驾驶的是一辆油箱容量为C的赛车，那么他从起点城市S开到终点城市E至少要花多少油钱？

注意：车子初始时油箱是空的，需要在起点城市加油方可起行。

#### 输入

第一行包含两个整数N和M。
第二行包含N个整数，代表N个城市的单位油价，第i个数即为第i个城市的油价Pi。
接下来M行，每行包括三个整数u,v,d，表示城市u与城市v之间存在道路，且赛车从u到v需要消耗的油量为d。
接下来一行包含一个整数q，代表问题数量（q<100)
接下来q行，每行包含三个整数C、S、E，分别表示赛车油箱容量、起点城市S、终点城市E。
数据范围：

#### 输出

对于每个问题，输出一个整数，表示所需的最少油钱。
如果无法从起点城市开到终点城市，则输出”impossible”。
每个结果占一行。

#### 提示

Andy讲解
ACWing讲解
改变自《装满的油箱》

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK62 数字三角形

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK62/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

数字三角形是动态规划的入门题，小鲁如果要入门动态规划，这道题是不可不做的：
7
3   8
8   1   0
2   7   4   4
4   5   2   6   5

(图1)图1给出了一个数字三角形。从三角形的顶部到底部有很多条不同的路径。对于每条路径，把路径上面的数加起来可以得到一个和，你的任务就是找到最大的和。
注意：路径上的每一步只能从一个数走到正下方和右下方的位置。

#### 输入

输入的是一行是一个整数N (1 < N <= 1000)，给出三角形的行数。下面的N行给出数字三角形。数字三角形上的数的范围都在0和100之间。

#### 输出

输出最大的和。

#### 提示

什么是动态规划
Andy的讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK63 林克的01背包

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK63/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

一眨眼一学期快结束了，早就自学完大四4年计算机专业的小华拿到了任天堂公司的offer提前毕业走上他喜爱的设计之路。
放心不下还在学校苦苦自学的小鲁，小华送给小鲁一套VR装置和一个新名字——林克。
他对小鲁说：从此以后，我写的VR编程环境来继续引导你自学编程，但是在这新的虚拟世界中，你要化身为林克，接受各种编程试炼的挑战，你愿意吗？
小鲁知道随着小华的离开，自己自主学习的新时代来了，他挥泪痛别小华，欣然接过小华的赠与，带上林克头套，进入编程大陆，开始了奇妙的VR编程之旅。
他还来不及为着小华的离开伤感，第一个挑战就来临了。

“林克”面临一个艰难的选择,他的背包容量有限,而面前摆放着价值不同的物品(各种套装)
你可以帮帮他吗?

#### 输出

输出一个整数，表示最大价值。

#### 提示

Andy的讲解

acwing讲解(2020)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK64 林克的完全背包

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK64/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

搞定了01背包问题，林克继续挑战完全背包问题：

有N种物品和一个容量是V的背包，每种物品都有无限件可用。
第i种物品的体积是vi，价值是wi。
求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。
输出最大价值。
数据范围

0<N,V≤1000
0<vi,wi≤1000

#### 输入

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。
接下来有N行，每行两个整数vi,wi，用空格隔开，分别表示第i种物品的体积和价值。

#### 输出

输出一个整数，表示最大价值。

#### 提示

acwing讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK65 多重背包问题(1)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK65/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

有N种物品和一个容量是V的背包。
第i种物品最多有si件，每件体积是vi，价值是wi。
求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。
输出最大价值。
数据范围0<N,V≤100
0<vi,wi,si≤100

#### 输入

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。
接下来有N行，每行三个整数vi,wi,si，用空格隔开，分别表示第i种物品的体积、价值和数量。

#### 输出

输出一个整数，表示最大价值。

#### 提示

原题链接

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK66 多重背包问题(2)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK66/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

有N种物品和一个容量是V的背包。
第i种物品最多有si件，每件体积是vivi，价值是wi。
求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。
输出最大价值。

提示：本题考查多重背包的二进制优化方法。

#### 输入

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。
接下来有N行，每行三个整数vi,wi,si，用空格隔开，分别表示第i种物品的体积、价值和数量。

#### 输出

输出一个整数，表示最大价值。

#### 提示

原题链接

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK67 分组背包问题

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK67/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

有N组物品和一个容量是V的背包。
每组物品有若干个，同一组内的物品最多只能选一个。
每件物品的体积是vij，价值是wij，其中i是组号，j是组内编号。
求解将哪些物品装入背包，可使物品总体积不超过背包容量，且总价值最大。
输出最大价值。

#### 输入

第一行有两个整数N，V用空格隔开，分别表示物品组数和背包容量。
接下来有N组数据：

#### 输出

输出一个整数，表示最大价值。

#### 提示

原题链接
Y总讲解(基础课)

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK68 混合背包问题

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK68/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

有 N 种物品和一个容量是 V 的背包。
物品一共有三类：
第一类物品只能用1次（01背包）；
第二类物品可以用无限次（完全背包）；
第三类物品最多只能用 si 次（多重背包）；
每种体积是 vi，价值是 wi。
求解将哪些物品装入背包，可使物品体积总和不超过背包容量，且价值总和最大。
输出最大价值。

#### 输入

第一行两个整数，N，V，用空格隔开，分别表示物品种数和背包容积。
接下来有 N 行，每行三个整数 vi,wi,si，用空格隔开，分别表示第 i 种物品的体积、价值和数量。
si=−1 表示第 i 种物品只能用1次；
si=0 表示第 i 种物品可以用无限次；
si>0 表示第 i 种物品可以使用 si 次；

#### 输出

输出一个整数，表示最大价值。

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK69 摘花生

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK69/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

她来到一片有网格状道路的矩形花生地，从西北角进去，东南角出来。
地里每个道路的交叉点上都有种着一株花生苗，上面有若干颗花生，经过一株花生苗就能摘走该它上面所有的花生。
Hello Kitty只能向东或向南走，不能向西或向北走。
问Hello Kitty最多能够摘到多少颗花生。

#### 输入

第一行是一个整数T，代表一共有多少组数据。
接下来是T组数据。
每组数据的第一行是两个整数，分别代表花生苗的行数R和列数C。
每组数据的接下来R行数据，从北向南依次描述每行花生苗的情况。每行数据有C个整数，按从西向东的顺序描述了该行每株花生苗上的花生数目M。
数据范围
1 ≤T≤ 100
1 ≤R，C≤ 100
0 ≤M≤ 1000

#### 输出

对每组输入数据，输出一行，内容为Hello Kitty能摘到得最多的花生颗数。

#### 提示

原题链接
Y总讲解
Y总代码

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK70 最低通行费

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK70/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

一个商人穿过一个N×N的正方形的网格，去参加一个非常重要的商务活动。
他要从网格的左上角进，右下角出。
每穿越中间1个小方格，都要花费1个单位时间。
商人必须在(2N - 1)个单位时间穿越出去。
而在经过中间的每个小方格时，都需要缴纳一定的费用。
这个商人期望在规定时间内用最少费用穿越出去。
请问至少需要多少费用？
注意：不能对角穿越各个小方格（即，只能向上下左右四个方向移动且不能离开网格）。

#### 输入

第一行是一个整数，表示正方形的宽度N。
后面N行，每行N个不大于100的正整数，为网格上每个小方格的费用。
数据范围
1 ≤ N ≤ 100

#### 输出

输出一个整数，表示至少需要的费用。
样例解释
样例中，最小值为109 = 1 + 2 + 5 + 7 + 9 + 12 + 19 + 21 + 33。

#### 提示

原题链接
参考题解
Y总代码
Y总讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK71 最长上升子序列

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK71/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

给定一个长度为N的数列，求数值严格单调递增的子序列的长度最长是多少。

#### 输入

第一行包含整数N。
第二行包含N个整数，表示完整序列。

#### 输出

输出一个整数，表示最大长度。

#### 提示

原题链接

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK72 最长上升子序列(2)

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK72/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

给定一个长度为N的数列，求数值严格单调递增的子序列的长度最长是多少。

#### 输入

第一行包含整数N。
第二行包含N个整数，表示完整序列。

#### 输出

输出一个整数，表示最大长度。

#### 提示

原题链接

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK73 拦截导弹

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK73/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

某国为了防御敌国的导弹袭击，发展出一种导弹拦截系统。
但是这种导弹拦截系统有一个缺陷：虽然它的第一发炮弹能够到达任意的高度，但是以后每一发炮弹都不能高于前一发的高度。
某天，雷达捕捉到敌国的导弹来袭。由于该系统还在试用阶段，所以只有一套系统，因此有可能不能拦截所有的导弹。

输入导弹依次飞来的高度（雷达给出的高度数据是不大于30000的正整数），计算这套系统最多能拦截多少导弹，如果要拦截所有导弹最少要配备多少套这种导弹拦截系统。

#### 输入

一行，为导弹依次飞来的高度

#### 输出

两行，分别是最多能拦截的导弹数与要拦截所有导弹最少要配备的系统数

#### 提示

原题链接

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK75 最长公共子序列

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK75/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

给定两个长度分别为N和M的字符串A和B，求既是A的子序列又是B的子序列的字符串长度最长是多少。
数据范围1≤N,M≤1000

#### 输入

第一行包含两个整数N和M。
第二行包含一个长度为N的字符串，表示字符串A。
第三行包含一个长度为M的字符串，表示字符串B。
字符串均由小写字母构成。

#### 输出

输出一个整数，表示最大长度。

#### 提示

原题链接
Y总讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK76 石子合并

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK76/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

设有N堆石子排成一排，其编号为1，2，3，…，N。
每堆石子有一定的质量，可以用一个整数来描述，现在要将这N堆石子合并成为一堆。
每次只能合并相邻的两堆，合并的代价为这两堆石子的质量之和，合并后与这两堆石子相邻的石子将和新堆相邻，合并时由于选择的顺序不同，合并的总代价也不相同。
例如有4堆石子分别为 1 3 5 2， 我们可以先合并1、2堆，代价为4，得到4 5 2， 又合并 1，2堆，代价为9，得到9 2 ，再合并得到11，总代价为4+9+11=24；
如果第二步是先合并2，3堆，则代价为7，得到4 7，最后一次合并代价为11，总代价为4+7+11=22。
问题是：找出一种合理的方法，使总的代价最小，输出最小代价。
数据范围1≤N≤300

#### 输入

第一行一个数N表示石子的堆数N。
第二行N个数，表示每堆石子的质量(均不超过1000)。

#### 输出

输出一个整数，表示最小代价。

#### 提示

原题链接
ACWing讲解

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK78 加分二叉树

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK78/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

设一个 n 个节点的二叉树 tree 的中序遍历为（1,2,3,…,n），其中数字 1,2,3,…,n 为节点编号。
每个节点都有一个分数（均为正整数），记第 i 个节点的分数为 di，tree 及它的每个子树都有一个加分，任一棵子树 subtree（也包含 tree 本身）的加分计算方法如下：
subtree的左子树的加分 × subtree的右子树的加分 ＋ subtree的根的分数
若某个子树为空，规定其加分为 1。
叶子的加分就是叶节点本身的分数，不考虑它的空子树。
试求一棵符合中序遍历为（1,2,3,…,n）且加分最高的二叉树 tree。
要求输出：
（1）tree的最高加分
（2）tree的前序遍历

#### 输入

第 1 行：一个整数 n，为节点个数。n<=30
第 2 行：n 个用空格隔开的整数，为每个节点的分数（0<分数<100）。

#### 输出

第 1 行：一个整数，为最高加分
第 2 行：n 个用空格隔开的整数（最后一个数后面没空格），为该树的前序遍历。如果存在多种方案，则输出字典序最小的方案。

#### 提示

原题链接

#### 参考代码

_还没有参考代码,欢迎投稿!_

### LinK80 没有上司的舞会

- 题目来源：http://www.xmuoj.com/contest/362/problem/LinK80/
- 时间限制：1000 ms
- 内存限制：256 MB
- 来源：xmu

#### 题面

Ural大学有N名职员，编号为1~N。
他们的关系就像一棵以校长为根的树，父节点就是子节点的直接上司。
每个职员有一个快乐指数，用整数Hi给出，其中1≤i≤N。
现在要召开一场周年庆宴会，不过，没有职员愿意和直接上司一起参会。
在满足这个条件的前提下，主办方希望邀请一部分职员参会，使得所有参会职员的快乐指数总和最大，求这个最大值。
数据范围
1≤N≤6000,
−128≤Hi≤127

#### 输入

第一行一个整数N。
接下来N行，第 i 行表示 i 号职员的快乐指数Hi。
接下来N-1行，每行输入一对整数L, K,表示K是L的直接上司。

#### 输出

输出最大的快乐指数。

#### 提示

acwing讲解

原题链接

题解参考

#### 参考代码

_还没有参考代码,欢迎投稿!_

## 2026年校外实训一之剑道试炼(01李胜睿班)

请用CC或者Codex或者TRAE或者Workbuddy进行AI编程！
全面学习驾驭最新AI工具成为新时代的AI原住民！

### 001 铁令求和

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD001/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白第一次来到剑道宗山门前。梁嘉峰递给他两枚铁令，上面各刻着一个数。「加起来，报给我。」

#### 输入

一行，两个整数A和B，用空格隔开。

#### 输出

一个整数，即A+B的结果。

#### 提示

读入两个整数，输出它们的和。最基础的输入输出练习。原题链接

#### 参考代码

```cpp
//简单题：A+B

#include <iostream>
using namespace std;
int main()
{
    int A, B;
    cin >> A >> B;
    cout << A + B;
    return 0;
}
```

### 002 铁令相乘

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD002/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰又递来两枚铁令。这一次他竖起两根手指——乘起来。

#### 输入

一行，两个整数A和B，用空格隔开。

#### 输出

输出 `PROD = ` 后跟A×B的结果。

#### 提示

读入两个整数，输出乘积。注意输出格式带前缀。原题链接

#### 参考代码

```cpp
//简单题：A*B

#include <iostream>
using namespace std;
int main()
{
    int A, B;
    cin >> A >> B;
    cout << "PROD = " << A * B << endl;
    return 0;
}
```

### 003 四令求差

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD003/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

练功房桌上摆着四枚铁令。梁嘉峰说：「A和B相乘，C和D相乘，把两个积的差报给我。」

#### 输入

一行，四个整数A、B、C、D，用空格隔开。

#### 输出

输出 `DIFFERENCE = ` 后跟A×B − C×D的结果。

#### 提示

先乘后减，注意运算顺序和输出格式。原题链接

#### 参考代码

```cpp
//简单题：根据描述得出结果

#include <iostream>
using namespace std;
int main()
{
    int A, B, C, D;
    cin >> A >> B >> C >> D;
    cout <<"DIFFERENCE = " << A * B - C * D << endl;
    return 0;
}//输出案例缺少"DIFFERENCE = "
```

### 004 集市算账

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD004/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

宗门集市上，赵晴儿帮账房算一笔账。已知商品编号、购买数量和单价，算出总价。

#### 输入

一行，三个数：商品编号（整数）、购买数量（整数）、单价（浮点数）。

#### 输出

输出 TOTAL = 后跟总价（数量×单价），保留两位小数。

#### 提示

总价 = 件数₁×单价₁ + 件数₂×单价₂。原题链接

#### 参考代码

```cpp
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
```

### 005 比武台

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD005/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

山门内是一片圆形的比武台。赵晴儿指着地面：「半径是r，算算它的面积。」π取3.14159。

#### 输入

一个浮点数r，表示半径。

#### 输出

输出 `A=` 后跟面积，保留4位小数。

#### 提示

面积 = 3.14159 × r × r，注意浮点数运算和格式化输出。原题链接

#### 参考代码

```cpp
//简单题：根据描述得出结果
#include <iostream>
#define pi 3.14159
using namespace std;
int main()
{
    double A;
    scanf("%lf",&A);
    printf("A=%.4lf", A * A * pi);
    return 0;
}
```

### 006 剑术考核

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD006/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

入门考核有两项：剑术和心法。剑术权重3.5，心法权重7.5。赵晴儿拿到成绩后要算加权平均分。

#### 输入

两行，每行一个浮点数，分别表示剑术成绩A和心法成绩B。

#### 输出

输出 `Average = ` 后跟加权平均分，保留5位小数。

#### 提示

加权平均 = (A×3.5 + B×7.5) / 11。分母是权重之和，不是2。原题链接

#### 参考代码

```cpp
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
```

### 007 月底发饷

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD007/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

月底发饷，李少白帮账房核算一名弟子的工钱。已知工号、出工天数和每日工钱。

#### 输入

第一行一个整数，表示工号。第二行两个数：出工天数（整数）和每日工钱（浮点数）。

#### 输出

第一行输出工号。第二行输出 `SALARY = U$ ` 后跟实发金额，保留两位小数。

#### 提示

实发金额 = 出工天数 × 每日工钱。原题链接

#### 参考代码

```cpp
//简单题：根据描述得出结果

#include <iostream>
using namespace std;
int main()
{
    double b;
    int a,c;
    scanf("%d", &c);
    scanf("%d%lf",&a,&b);
    printf("NUMBER = %d\n", c);
    printf("SALARY = U$ %.2lf",a*b );//注意格式
    return 0;
}
```

### 008 马匹脚力

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD008/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白骑马送信，跑了S公里，马匹消耗了L升草料汁。他想知道每升草料汁能支撑跑多少公里。

#### 输入

一行，两个浮点数，分别表示路程（km）和草料消耗（L）。

#### 输出

输出每升草料汁能跑的公里数，保留3位小数，后跟 km/l。

#### 提示

消耗率 = 草料 / 路程，注意浮点数除法。原题链接

#### 参考代码

```cpp
//简单题：根据描述得出结果
#include <iostream>
using namespace std;
int main()
{
    double a, b;//浮点数
    scanf("%lf%lf",&a,&b);
    printf("%.3lf km/l",a/b );
 
    return 0;
}
```

### 009 铁球体积

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD009/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

兵器库里有一颗实心铁球。李少白量出半径r，想算出它的体积。V = (4/3)πr³，π取3.14159。

#### 输入

一个浮点数r，表示铁球的半径。

#### 输出

输出 `VOLUME = ` 后跟体积，保留3位小数。

#### 提示

体积 = (4.0/3.0) × 3.14159 × r³，注意用浮点数除法。原题链接

#### 参考代码

```cpp
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
```

### 010 三令比大

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD010/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在墙上刻了三个数，转头说：「最大的那个，报给我。」

#### 输入

一行，三个整数A、B、C，用空格隔开。

#### 输出

输出 `Max = ` 后跟三个数中的最大值。

#### 提示

用条件判断两两比较，或直接用max函数。原题链接

#### 参考代码

```c
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
```

### 011 哨塔测距

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD011/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上标了两个哨塔的坐标(x1,y1)和(x2,y2)。她说：「算算它们之间的直线距离。」

#### 输入

一行，四个浮点数x1, y1, x2, y2，用空格隔开。

#### 输出

输出两点间的距离，保留两位小数。

#### 提示

使用距离公式，需要引入数学库以使用sqrt函数。原题链接

#### 参考代码

```c
#include <stdio.h>
#include <math.h>
int main()
{
    double x1, y1, x2, y2, l;
    scanf("%lf%lf%lf%lf",&x1,&y1,&x2,&y2);
    l = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    printf("%.4lf", l);//题目输出写保留两位小数有误
    return 0;
}
```

### 012 圆盘开孔

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD012/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画了五个图形，每个图形都用A、B、C三个数来定义。她让李少白算出每个图形的面积：三角形（底A高C）、圆形（半径C）、梯形（上底A下底B高C）、正方形（边长B）、长方形（长A宽B）。π取3.14159，结果保留3位小数。

#### 输入

一行，三个浮点数A、B、C。

#### 输出

五行，分别输出 TRIANGULO（三角形）、CIRCULO（圆形）、TRAPEZIO（梯形）、QUADRADO（正方形）、RETANGULO（长方形）的面积，各保留3位小数。格式为 `名称: 面积`。

#### 提示

注意输出格式：名称与面积之间有一个空格。π取3.14159。使用 printf("%.3f") 或 cout << fixed << setprecision(3) 保留3位小数。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    double a, b, c;
    scanf("%lf%lf%lf", &a, &b, &c);
    printf("TRIANGULO: %.3lf\n", (a * c) / 2.0);
    printf("CIRCULO: %.3lf\n", 3.14159 * c * c);
    printf("TRAPEZIO: %.3lf\n", (a + b) * c / 2.0);
    printf("QUADRADO: %.3lf\n", b * b);
    printf("RETANGULO: %.3lf\n", a * b);
    return 0;
}
```

### 013 水钟报时

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD013/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

宗门的水钟记录的是总秒数，但掌门要求用「时:分:秒」的格式汇报。赵晴儿让李少白帮忙转换。

#### 输入

一个整数N，表示总秒数。

#### 输出

输出 `H:M:S` 格式的时间。

#### 提示

时 = 秒 ÷ 3600，分 = 余数 ÷ 60，秒 = 最终余数。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    int t, h = 0, m = 0, s = 0;
    scanf("%d", &t);
    h = t / 3600;
    m = (t - 3600 * h) / 60;
    s = t - 3600 * h - 60 * m;
    printf("%d:%d:%d", h, m, s);
    return 0;
}
```

### 014 钱庄换银

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD014/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白去镇上钱庄换碎银。掌柜说：「你要换多少文？我用100、50、20、10、5、2、1面额的铜钱给你。」需要知道每种面额各要几枚。

#### 输入

一个整数N，表示要换的文数。

#### 输出

第一行输出总金额N。接下来7行，按面额从大到小，每行输出 `X nota(s) de R$ Y,00`，其中X是张数，Y是面额。

#### 提示

贪心策略：从大到小依次整除，记录每种面额的枚数。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    int money, m100 = 0, m50 = 0, m20 = 0, m10 = 0, m5 = 0, m2 = 0, m1 = 0;
    scanf("%d", &money);
    m100 = money / 100;
    m50 = (money - 100 * m100) / 50;
    m20 = (money - 100 * m100 - 50 * m50) / 20;
    m10 = (money - 100 * m100 - 50 * m50 - 20 * m20) / 10;
    m5 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10) / 5;
    m2 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5) / 2;
    m1 = money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5 - 2 * m2;
    printf("%d\n", money);
    printf("%d nota(s) de R$ 100,00\n", m100);
    printf("%d nota(s) de R$ 50,00\n", m50);
    printf("%d nota(s) de R$ 20,00\n", m20);
    printf("%d nota(s) de R$ 10,00\n", m10);
    printf("%d nota(s) de R$ 5,00\n", m5);
    printf("%d nota(s) de R$ 2,00\n", m2);
    printf("%d nota(s) de R$ 1,00\n", m1);
    return 0;
}
```

### 015 石碑之谜

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD015/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

山门前有两条路，路边各立一块石碑。赵晴儿指着石碑上的两个数说：「如果其中一个数能被另一个整除，这两块碑就是一对——走左边这条路。否则走右边。」给定两个整数A和B，判断它们是否互为倍数关系（即A能被B整除，或B能被A整除）。

#### 输入

一行，两个整数A和B。

#### 输出

互为倍数输出 `Yes`，否则输出 `No`。

#### 提示

原题链接判断 A%B==0 或 B%A==0，只要有一个成立就是倍数关系，输出Yes；否则输出No。

#### 参考代码

```c
#include <stdio.h>
int main()
{
    int A, B;
    scanf("%d%d", &A, &B);
    if (A % B == 0 || B % A == 0)printf("Yes");
    else printf("No");
    return 0;
}
```

### 016 三根木棍

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD016/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿从柴堆里抽出三根木棍，量了量长度，让李少白判断它们能不能拼成一个三角形。如果能，算出周长；如果不能，算出以A、B为上下底、C为高的梯形面积，公式为 (A+B)×C÷2。

#### 输入

一行，三个浮点数A、B、C。

#### 输出

能拼成三角形输出 `Perimeter = X.X`（周长），拼不成输出 `Area = X.X`（梯形面积）。

#### 提示

原题链接三角形成立条件：任意两边之和大于第三边。如果成立，周长=A+B+C；如果不成立，梯形面积=(A+B)*C/2。注意保留1位小数。

#### 参考代码

```c
#include <stdio.h>
#include <math.h>
int main()
{
    double A, B, C;
    scanf("%lf%lf%lf", &A, &B, &C);
    if (A + B > C && B + C > A && A + C > B)printf("Perimeter = %.1lf", A + B + C);
    else printf("Area = %.1lf", (A + B) * C / 2);
    return 0;
}
```

### 017 比武时辰

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD017/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白和师弟在练武场比武。他们从A时开始，到B时结束（只看整点，不看分钟）。如果B>A，比武持续了B-A小时；如果B≤A，说明比武过了零点，持续了24-A+B小时；如果A=B，说明刚好持续了一整天（24小时）。

#### 输入

一行，两个整数A和B（0≤A,B≤23）。

#### 输出

输出一个整数，表示比武持续的小时数。

#### 提示

原题链接用条件判断：如果B>A，输出B-A；如果B==A，输出24；否则输出24-A+B。

#### 参考代码

```c
#include <stdio.h>
int main()
{
    int A, B;
    scanf("%d%d", &A, &B);
    if (B > A)printf("%d", B - A);
    else if (A == B)printf("%d", 24);
    else if (A > B)printf("%d", 24 - A + B);
    return 0;
}
```

### 018 三石排序

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD018/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在地上放了三块石头，上面各刻着一个数。他说：「从小到大排好，报给我。」

#### 输入

一行，三个整数，用空格隔开。

#### 输出

三个数从小到大输出，空格隔开。

#### 提示

用条件判断两两比较确定顺序，或存入数组排序。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    int a, b, c,temp = 0;
    scanf("%d%d%d", &a, &b, &c);
    if (a < b)
    {
        temp = a;
        a = b;
        b = temp;
    }
    if (a < c)
    {
        temp = a;
        a = c;
        c = temp;
    }
    if (b < c)
    {
        temp = b;
        b = c;
        c = temp;
    }
    printf("%d %d %d",c,b,a);
    return 0;
}
```

### 019 杂货铺

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD019/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

山脚杂货铺有5种干粮，编号1到5，单价分别是4.00、4.50、5.00、2.00、1.50文。赵晴儿报了干粮编号和要买的数量，掌柜让她自己算总价。

#### 输入

一行，两个整数：干粮编号X和数量Y。

#### 输出

输出 `Total: R$ ` 后跟总价，保留两位小数。

#### 提示

用数组或条件判断存储5种单价，查表后乘以数量。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    int name, num;
    double price[] = { 4.00,4.50,5.00,2.00,1.50 };
    scanf("%d%d", &name, &num);
    printf("Total: R$ %.2lf", price[name - 1] * num);
    return 0;
}
```

### 020 内力分级

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD020/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

宗门把弟子的内力值分成四个等级：[0,25]是入门，(25,50]是初级，(50,75]是中级，(75,100]是高级。超出100则不在评级范围内。李少白测出一名弟子的内力值，需要判断他属于哪个等级。

#### 输入

一个浮点数，表示内力值。

#### 输出

输出对应区间的名称，或 `Out of interval`（超出范围）。

#### 提示

用 if-elif-else 逐一判断落在哪个区间。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    float power; 
    scanf("%f", &power);
    if (power >= 0 && power <= 25) 
    {
        printf("Interval [0,25]\n");
    } 
    else if (power > 25 && power <= 50)
    {
        printf("Interval (25,50]\n");
    } 
    else if (power > 50 && power <= 75) 
    {
        printf("Interval (50,75]\n");
    } 
    else if (power > 75 && power <= 100)
    {
        printf("Interval (75,100]\n");
    } 
    else
    {
        printf("Out of interval\n");
    }

    return 0;
}
```

### 021 沙盘点位

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD021/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上标了一个点P(x, y)，让李少白判断它落在第几象限，还是在坐标轴上，还是在原点。

#### 输入

一行，两个浮点数x和y。

#### 输出

输出 Q1（第一象限）、Q2（第二）、Q3（第三）、Q4（第四）、Eixo X（X轴上）、Eixo Y（Y轴上）或 Origem（原点）。

#### 提示

先判断是否在原点或坐标轴上（x==0 或 y==0），再判断象限。原题链接

#### 参考代码

```c
#include <stdio.h>
int main()
{
    double x,y;
    scanf("%lf%lf", &x,&y);
    if (x > 0 && y > 0)
    {
        printf("Q1");
    }
    else if (x < 0 && y > 0)
    {
        printf("Q2");
    }
    else if (x < 0 && y < 0)
    {
        printf("Q3");
    }
    else if (x > 0 && y < 0)
    {
        printf("Q4");
    }
    else if (x != 0 && y == 0)
    {
        printf("Eixo X");
    }
    else if (x == 0 && y != 0)
    {
        printf("Eixo Y");
    }
    else if (x == 0 && y == 0)
    {
        printf("Origem");
    }
    return 0;
}
```

### 022 跨夜比武

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD022/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白和师弟比武，开始时间是A时B分，结束时间是C时D分。比武可能跨了零点。请算出比武持续了多久。

#### 输入

一行，四个整数A、B、C、D，分别表示开始的时、分和结束的时、分。

#### 输出

输出比武持续时间，格式为 `H:M`。

#### 提示

全部转为分钟做差。如果结果≤0，加上24×60。原题链接

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
using namespace std;

int main()
{
    int A, B, C, D,temp;
    cin >> A >> B >> C >> D;
    int m1 = A * 60 + B;
	int m2 = C * 60 + D;
    if (m1 >= m2)temp = 24 * 60 + m2 - m1;
	else temp = m2 - m1;
	cout << temp / 60 << ":" << temp % 60 << endl;
    return 0;
}
```

### 023 账房调薪

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD023/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

宗门账房年底调薪，按原月钱所在区间确定涨幅：0~400涨15%，400.01~800涨12%，800.01~1200涨10%，1200.01~2000涨7%，2000以上涨4%。涨幅是按整个工资乘以对应百分比，不是分段累进。李少白拿到一名弟子的原月钱，请算出新月钱、涨了多少和涨幅百分比。

#### 输入

一个浮点数，表示原月钱。

#### 输出

三行：新月钱、涨了多少、涨幅百分比（整数带%号），金额保留两位小数。

#### 提示

用 if-elif 判断原月钱落在哪个区间，确定涨幅百分比p。涨额 = 原月钱 × p/100，新月钱 = 原月钱 + 涨额。注意400属于0~400区间（涨15%），400.01才属于400~800区间。原题链接

#### 参考代码

```cpp
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
#include<iomanip>
using namespace std;
//iomanip is used to set the precision of the output
int main()
{
    double salary;
	cin >> salary;
	if (salary >= 0 && salary <= 400)
	{
		cout << "New salary: " << fixed<< setprecision(2) <<salary * 1.15 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.15 << endl;
		cout << "Percentage:" << " 15 %" << endl;
	}
	else if (salary >= 400.01 && salary <= 800)
	{
		cout << "New salary: " << fixed<<setprecision(2)<<salary * 1.12 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.12 << endl;
		cout << "Percentage:" << " 12 %" << endl;
	}
	else if (salary >= 800.01 && salary <= 1200)
	{
		cout << "New salary: " << fixed<< setprecision(2) << salary * 1.10 << endl;
		cout << "Increase: " << fixed<<setprecision(2)<<salary * 0.10 << endl;
		cout << "Percentage:" << " 10 %" << endl;
	}
	else if (salary >= 1200.01 && salary <= 2000)
	{
		cout << "New salary: " << fixed<<setprecision(2)<< salary * 1.07 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.07 << endl;
		cout << "Percentage:" << " 7 %" << endl;
	}
	else if(salary>2000)
	{
		cout << "New salary: " << fixed<<setprecision(2)<< salary * 1.04 << endl;
		cout << "Increase: " << fixed<< setprecision(2)<<salary * 0.04 << endl;
		cout << "Percentage:" << " 4 %" << endl;
	}
	return 0;
}
```

### 024 五关考验

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD024/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰考李少白：「给你四个数A、B、C、D，同时满足以下五个条件才算过关：B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。」

#### 输入

一行，四个整数A、B、C、D。

#### 输出

满足所有条件输出 `Accepted`，否则输出 `Not accepted`。

#### 提示

用逻辑与（&&/and）连接五个条件，全部为真才通过。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int A,B,C,D;
    cin>>A>>B>>C>>D; //B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。
    if(A%2==0 && B>A && D>A && (C+D)>(A+B) && C>0)
    {
        cout<<"Accepted"<<endl;
    }
    else
    {
        cout<<"Not accepted"<<endl;
    }
}
```

### 025 信鸽传信

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD025/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

宗门各分舵之间用信鸽传信，每个分舵有一个编号（DDD码）。李少白拿到一个编号，需要查出它对应哪个分舵：61=Brasilia，71=Salvador，11=Sao Paulo，21=Rio de Janeiro，32=Juiz de Fora，19=Campinas，27=Vitoria，31=Belo Horizonte，其他编号则输出"DDD nao cadastrado"。

#### 输入

一个整数。

#### 输出

输出对应分舵名称，或 `DDD nao cadastrado`。

#### 提示

用 if-elif 链逐一比对，或用字典/映射表查找。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int a;
    cin>>a;
    if(a==61)
    {
        cout<<"Brasilia"<<endl;
    }
    else if(a==71)
    {
        cout<<"Salvador"<<endl;
    }
    else if(a==11)
    {
        cout<<"Sao Paulo"<<endl;
    }
    else if(a==21)
    {
        cout<<"Rio de Janeiro"<<endl;
    }
    else if(a==32)
    {
        cout<<"Juiz de Fora"<<endl;
    }
    else if(a==19)
    {
        cout<<"Campinas"<<endl;
    }
    else if(a==27)
    {
        cout<<"Vitoria"<<endl;
    }
    else if(a==31)
    {
        cout<<"Belo Horizonte"<<endl;
    }
    else
    {
        cout<<"DDD nao cadastrado"<<endl;
    }
}
```

### 026 木棍辨形

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD026/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递来三根木棍：「先判断能不能拼成三角形。能的话，再判断是直角、锐角还是钝角三角形，以及是否等边或等腰。」判断依据：最长边的平方与另外两边平方和的关系。

#### 输入

一行，三个浮点数，表示三边长度（已从小到大排列）。

#### 输出

不能构成三角形输出 Not a triangle；能构成则按以下规则输出（每种满足的条件输出一行）：先判断角度类型：输出 Right（直角）、Acute（锐角）或 Obtuse（钝角）之一。再判断边长类型：若三边相等输出 Equilateral（等边），若恰好两边相等输出 Isosceles（等腰），否则不输出。注意：一个三角形可能同时属于多个类型，同一类型的判断用 if 而不是 elif 才能多行输出。

#### 提示

先验证两边之和大于第三边。若不能构成三角形则直接输出 Not a triangle 并结束。能构成三角形时，角度类型和边长类型分别用独立的 if 判断（不要用 elif 串起来），以确保等边/等腰三角形能输出两行。边长已从小到大排列，第三个数即最长边。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    double a,b,c;
    cin>>a>>b>>c;
    if(a+b>c&&a+c>b&&b+c>a)
    {
        if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a)
        {
            cout<<"Right"<<endl;
        }
        else if(a*a+b*b>c*c&&a*a+c*c>b*b&&b*b+c*c>a*a)
        {
            cout<<"Acute"<<endl;
        }
        else
        {
            cout<<"Obtuse"<<endl;
        }
        if(a==b&&b==c)
        {
            cout<<"Equilateral"<<endl;
        }
        else if(a==b||b==c||a==c)
        {
            cout<<"Isosceles"<<endl;
        }
    }
    else
    {
        cout<<"Not a triangle"<<endl;
    }
}
```

### 027 怪兽辨识

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD027/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

迷踪林外遇到一只怪兽。赵晴儿观察了三层特征来判断它的种类：
第一层：有脊椎（vertebrate）还是无脊椎（invertebrate）；
第二层：鸟类（bird）、哺乳类（mammal）、昆虫（insect）还是环节动物（annelid）；
第三层：食性——食肉（carnivore）、食草（herbivore）、杂食（omnivore）、吸血（hematophagous）。以下是怪兽分类图谱：Level 1         Level 2        Level 3           Animal
---------------------------------------------------------
                +-- bird ------ carnivore ------- eagle（鹰）
                |             +-- herbivore ------ dove（鸽）
vertebrate -----+
                |             +-- omnivore ------- man（人）
                +-- mammal ----+
                              +-- herbivore ------ cow（牛）

                +-- insect ---- hematophagous ---- flea（跳蚤）
                |             +-- herbivore ------ caterpillar（毛虫）
invertebrate ---+
                |             +-- hematophagous ---- leech（水蛭）
                +-- annelid --+
                              +-- omnivore ------- earthworm（蚯蚓）
根据输入的三层特征单词，输出对应的动物英文名称。

#### 输入

三行，每行一个字符串，分别表示三层分类特征。

#### 输出

输出对应的动物名称。

#### 提示

三层嵌套 if-else：先判断第一层，再判断第二层，最后判断第三层。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<string>
using namespace std;
int main()
{
    string first,second,third;
    cin>>first>>second>>third;
    if(first=="vertebrate")
    {
        if(second=="bird")
        {
            if(third=="carnivore")
            {
                cout<<"eagle"<<endl;
            }
            else if(third=="herbivore")
            {
                cout<<"dove"<<endl;
            }
        }
        else if(second=="mammal")
        {
            if(third=="omnivore")
            {
                cout<<"man"<<endl;
            }
            else if(third=="herbivore")
            {
                cout<<"cow"<<endl;
            }
        }
    }
    else if(first=="invertebrate")
    {
        if(second=="insect")
        {
            if(third=="hematophagous")
            {
                cout<<"flea"<<endl;
            }
            else if(third=="herbivore")
            {
                cout<<"caterpillar"<<endl;
            }
        }
        else if(second=="annelid")
        {
            if(third=="omnivore")
            {
                cout<<"earthworm"<<endl;
            }
            else if(third=="hematophagous")
            {
                cout<<"leech"<<endl;
            }
        }
    }
}
```

### 028 田赋计算

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD028/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白入了宗门，开始交田赋。税率分档：2000以下免税，2000.01~3000部分征8%，3000.01~4500部分征18%，4500以上部分征28%。注意是分段计税——只有超出部分按对应税率算。

#### 输入

一个浮点数，表示月收入。

#### 输出

输出 `R$ X.XX`。免税则输出 `Isento`。

#### 提示

分段计算：1000×8% + 2×18% = 80.36。每段只对超出部分征税。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    double a;
    cin>>a;
    if(a>=0&&a<=2000)
    {
        cout<<"Isento"<<endl;
    }
    else if(a>2000&&a<=3000)
    {
        cout<<"R$ "<<fixed<<setprecision(2)<<(a-2000)*0.08<<endl;
    }
    else if(a>3000&&a<=4500)
    {
        cout<<"R$ "<<fixed<<setprecision(2)<<(1000*0.08+(a-3000)*0.18)<<endl;
    }
    else if(a>4500)
    {
        cout<<"R$ "<<fixed<<setprecision(2)<<(1000*0.08+1500*0.18+(a-4500)*0.28)<<endl;
    }
}
```

### 029 石砖偶数

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD029/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

千层塔第一层。墙上刻着一排编号从1到100的石砖。赵晴儿说：「把所有偶数编号的石砖挑出来，每行报一个。」

#### 输入

无输入。

#### 输出

输出全部偶数，每个偶数占一行。

#### 提示

原题链接for循环从2开始，步长为2，到100结束。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    for(int i=2;i<=100;i+=2)
    {
        cout<<i<<endl;
    }
    return 0;
}
```

### 030 奇数石砖

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD030/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

千层塔第二层。墙上有一排编号从1到X的石砖。梁嘉峰指着石砖说：「把所有奇数编号的报出来。」

#### 输入

一个正整数X。

#### 输出

每行一个奇数，从1到X（含）。

#### 提示

原题链接for循环从1开始，步长为2，到X结束。如果X是偶数，最后一个奇数是X-1。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main(){
    int X;
    cin>>X;
    for(int i=1;i<=X;i+=2)
    {
        cout<<i<<endl;
    }
}
```

### 031 反复之门

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD031/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

千层塔的某一层有一扇不断重复的门。每次门前出现一个数X：如果X不为0，就从1数到X；如果X为0，修炼结束。

#### 输入

若干行，每行一个整数X。以0结束。

#### 输出

对每个非零的X，输出1到X，每行一个数。每组之间空一行。

#### 提示

原题链接外层while循环读入X，遇到0停止。内层for循环从1到X输出。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    while(n!=0)
    {
        for(int i=1;i<=n;i++)
        {
            if(i>1)cout<<" ";
            cout<<i;
        }
        cout<<endl;
        cin>>n;
    }
}
```

### 032 六奇连珠

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD032/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递给李少白一个数X：「从X之后开始，找出6个连续的奇数，一个一个报给我。」

#### 输入

一个整数X。

#### 输出

从X之后开始的6个连续奇数，每行一个。

#### 提示

原题链接如果X是奇数，从X+2开始；如果X是偶数，从X+1开始。循环6次，每次加2。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int X;
    cin>>X;
    if(X%2==0)X+=1;
    for(int i=0;i<6;i++)
    {
        cout<<X<<endl;
        X+=2;
    }
    return 0;
}
```

### 033 正数清点

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD033/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递给李少白6个测量数据，有的是正数有的是负数。她问：「这里面有几个正数？」

#### 输入

6行，每行一个浮点数。

#### 输出

输出正数的个数，格式为 `X valores positivos`。

#### 提示

原题链接循环读入6个数，用if判断是否>0，计数器累加。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    double a;
    int n=6,count=0;
    while(n--)
    {
        cin>>a;
        if(a>0)count++;
    }
    cout<<count<<" positive numbers"<<endl;
}
```

### 034 余数寻踪

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD034/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰写下了一个数N：「从1到10000，把所有除以N余数为2的数报给我。」

#### 输入

一个整数N（N>2）。

#### 输出

每行一个数，从1到10000中除以N余2的数。

#### 提示

原题链接for循环从1到10000，if i%N==2则输出。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int N;
    cin>>N;
    if(N>9998)return 0;
    for(int i=1;i<=10000;i++)
    {
        if(i%N==2) cout<<i<<endl;
    }
    return 0;
}
```

### 035 区间计数

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD035/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递给李少白N个测量数据，让他数一数有多少个落在[10,20]这个区间内。

#### 输入

第一行一个整数N。第二行N个整数。

#### 输出

第一行输出 X in，X为区间内个数。第二行输出 Y out，Y为区间外个数。

#### 提示

原题链接循环读入，判断是否 10≤X≤20，计数器累加。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int N, x;
    cin>>N;
    int count=0;
    for(int i=0;i<N;i++)
    {
        cin>>x;
        if(x>=10&&x<=20)
        {
            count++;
        }
    }
    cout<<count<<" in"<<endl;
    cout<<N-count<<" out"<<endl;
    return 0;
}
```

### 036 奇数求和

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD036/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在墙上刻了两个数X和Y，让李少白算出X和Y之间（不含X和Y）所有奇数的和。

#### 输入

一行，两个整数X和Y（X

#### 输出

输出X和Y之间所有奇数的和。

#### 提示

原题链接从X+1到Y-1循环，判断每个数是否为奇数，是则累加。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int X,Y,temp,sum=0;
    cin>>X>>Y;
    if(X>Y)
    {
        temp=X;
        X=Y;
        Y=temp;
    }
    if(X%2!=0)
    {
        X++;
    }
    for(int i=X+1;i<Y;i+=2)
    {
        sum+=i;
    }
    cout<<sum<<endl;
    return 0;
}
```

### 037 数链连珠

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD037/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰写下了一个起始整数A，又在第二行写了一串数。第二行里第一个正数就是N。请算出从A开始的N个连续整数的和。

#### 输入

第一行：整数A。第二行：若干整数，第一个大于0的数才是N。

#### 输出

从A开始N个连续整数之和。

#### 提示

原题链接A固定，第二行跳过负数和零找N。从A开始循环N次累加。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int A,sum=0;
    cin>>A;
    int n;
    cin>>n;
    while(!(n>0))
    {
        cin>>n;
    }
    for(int i=A,j=0;j<n;i++,j++)
    {
        sum+=i;
    }
    cout<<sum<<endl;
    return 0;
}
```

### 038 石中之王

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD038/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

练功场上摆了一排石块，每块上面刻着一个数。赵晴儿让李少白找到最大的数，并说出它是第几块（从1开始计数）。

#### 输入

第一行一个整数N，表示石块数量。第二行N个整数。

#### 输出

输出最大值和它的位置，格式见样例。

#### 提示

原题链接遍历时同时记录最大值和位置。

#### 参考代码

```cpp
#include<iostream>
#include<vector>
using namespace std;
int main()
{
    int N;
    cin>>N;
    vector<int>a;
    for(int i=0;i<N;i++)
    {
        int x;
        cin>>x;
        a.push_back(x);
    }
    int num=0,max=-1000;
    for(int i=0;i<N;i++)
    {
        if(a[i]>max)
        {
            max=a[i];
            num=i;
        }
    }
    cout<<max<<endl<<num+1<<endl;
    return 0;
}
```

### 039 约数寻踪

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD039/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上写下一个数N：「找出它的所有约数，从小到大列出来。」

#### 输入

一个正整数N。

#### 输出

每行一个约数，从小到大。

#### 提示

原题链接从1到N循环，如果N%i==0则i是约数。

#### 参考代码

```cpp
#include <iostream>
using namespace std;

int main() {
    int N;
    cin>>N;
    for(int i=1;i<=N;i++)
    {
        if(N%i==0)
        {
            cout<<i<<endl;
        }
    }
    return 0;
}
```

### 040 九九归真

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD040/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿教李少白背乘法口诀。她写下一个数N，让李少白从1乘到10，按格式列出N的乘法表：「i x N = i*N」。

#### 输入

一个整数N。

#### 输出

10行，格式为 `i x N = i*N`。

#### 提示

原题链接for循环从1到10，每次输出i x N = i*N。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int N;
    cin>>N;
    for(int i=1;i<=10;i++)
    {
        cout<<i<<" x "<<N<<" = "<<i*N<<endl;
    }
    return 0;
}
```

### 041 千层阵列

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD041/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

千层塔的一面墙上刻着N行M列的数字阵列，每行从1开始递增，但每逢第M个位置不写数字，写SWORD。赵晴儿让李少白按这个规律把整个阵列报出来。

#### 输入

一行，两个整数N和M。

#### 输出

N行，每行M个值，最后一个用SWORD代替，值之间用空格隔开。

#### 提示

原题链接嵌套循环，外层控制行，内层控制列。每行第M个位置输出SWORD。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main(){
    int N,M;
    cin>>N>>M;
    int j=1,num=0;
    for(int i=1;i<=N;i++){
        num=0;
        while(num<M-1)
        {
            cout<<j<<" ";
            num++;
            j++;
        }
        cout<<"SWORD"<<endl;
        j++;
    }
    return 0;
}
```

### 042 兵刃统计

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD042/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

演武场上，弟子们正在操练。李少白走过一排兵器架，记录了N次观察：每次看到一件兵器，C代表剑，R代表刀，F代表枪。赵晴儿让他统计每种兵器出现了多少把，以及各自的占比。

#### 输入

第一行一个整数N。接下来N行，每行一个整数（数量）和一个字符（C/R/F），分别表示某次看到的兵器数量和类型。

#### 输出

第一行输出 Total: X weapons（总数量）。接下来三行输出每种兵器的总数：Total swords: X、Total blades: X、Total spears: X。最后三行输出各自占比：Percentage of swords: XX.XX % 等，保留两位小数。

#### 提示

原题链接三个计数器分别累加C、R、F的数量。注意每行先读数量再读类型。总数 = 所有数量之和。占比 = 各类数量 / 总数 × 100%，保留两位小数。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    int N;
    cin >> N; 
    int total = 0;
    int swords = 0;
    int blades = 0; 
    int spears = 0;    
    for(int i = 0; i < N; i++)
    {
        int count;
        char type;
        cin >> count >> type;  
        total += count;
        if(type == 'C')
        {
            swords += count;
        }
        else if(type == 'R')
        {
            blades += count;
        }
        else if(type == 'F')
        {
            spears += count;
        }
    }
    double percentC =(double)swords / total * 100;
    double percentR =(double)blades / total * 100;
    double percentF =(double)spears / total * 100;
    cout << "Total: " << total << " weapons" << endl;
    cout << "Total swords: " << swords << endl;
    cout << "Total blades: " << blades << endl;
    cout << "Total spears: " << spears << endl;
    cout << fixed << setprecision(2);
    cout << "Percentage of swords: " << percentC << " %" << endl;
    cout << "Percentage of blades: " << percentR << " %" << endl;
    cout << "Percentage of spears: " << percentF << " %" << endl;
    return 0;
}
```

### 043 正剑除邪

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD043/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

练功房的石板上有10道剑气留下的痕迹，每道痕迹上刻着一个数。其中有些数带着邪气（负数或零），梁嘉峰让李少白运起纯阳内力，把这些不纯正的数全部净化，替换成1——象征正气归于一元。

#### 输入

一行，10个整数，用空格隔开。

#### 输出

替换后的10个数，每行格式为 `X[i] = 值`。

#### 提示

原题链接遍历数组，将≤0的元素替换为1。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main(){
    int x[10];
    for(int i=0;i<10;i++){
        cin>>x[i];
    }
    for(int i=0;i<10;i++)
    {
            if(x[i]<=0)
            {cout<<"X["<<i<<"] = "<<1<<endl;}
            else
            {cout<<"X["<<i<<"] = "<<x[i]<<endl;}
    }

    return 0;
}
```

### 044 翻倍剑阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD044/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上布下一个翻倍剑阵。她说：「以第一个数为起点，后面每个数都是前一个的两倍。内力如此，出剑亦是如此——一重更比一重强。」

#### 输入

一个整数V。

#### 输出

10行，格式为 `N[i] = X`。

#### 提示

原题链接N[0]=V，循环N[i]=N[i-1]*2。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int V;
    cin >> V; 
    for(int i = 0; i < 10; i++)
    {
        cout << "N[" << i << "] = " << V << endl;
        V = V * 2;
    }
    return 0;
}
```

### 045 剑中取精

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD045/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

沙盘上散落着100把长剑，每把剑上刻着一个数，代表剑的品级。赵晴儿让李少白从中挑出品级不超过10的精良之剑，逐一记录。

#### 输入

100个浮点数。

#### 输出

按顺序输出所有≤10的元素，每行格式为 `A[i] = X`（保留一位小数）。

#### 提示

原题链接遍历数组，if元素≤10则输出。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    double A[100];   
    for(int i = 0; i < 100; i++)
    {
        cin >> A[i];
    }  
    cout << fixed << setprecision(1);
    for(int i = 0; i < 100; i++)
    {
        if(A[i] <= 10)
        {
            cout << "A[" << i << "] = " << A[i] << endl;
        }
    }
    return 0;
}
```

### 046 剑阵倒转

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD046/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

沙盘上的剑阵需要倒转方向——第一把剑和最后一把交换，第二把和倒数第二把交换。梁嘉峰说：「攻守易位，前后颠倒。」

#### 输入

20个整数。

#### 输出

翻转后的20个数，每行格式为 `N[i] = X`。

#### 提示

原题链接双指针从两端向中间交换。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int main()
{
    int a[20];
    for(int i = 0; i < 20; i++)
    {
        cin >> a[i];
    }
    int temp;
    for(int i=0;i<=9;i++)
    {
        temp=a[i];
        a[i]=a[19-i];
        a[19-i]=temp;
    }
    for(int i = 0; i < 20; i++)
    {
        cout << "N[" << i << "] = " << a[i] << endl;
    }
    return 0;
}
```

### 047 剑锋所指

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD047/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

练功场上一排木桩，每根木桩上刻着一个数。赵晴儿让他找到最矮的那根木桩——剑锋所向，以弱制动。找到最小值并说出它的位置（从0开始计数）。

#### 输入

第一行一个整数N。第二行N个整数。

#### 输出

第一行输出 Menor valor: X，第二行输出 Posicao: P，其中P为最小值的下标（从0开始计数）。若最小值出现多次，输出第一次出现的位置。

#### 提示

原题链接遍历时记录当前最小值和位置。注意位置从0开始计数。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int N;
    cin >> N;   
    int minVal;
    int minPos = 0;   
    for(int i = 0; i < N; i++)
    {
        int num;
        cin >> num;
        if(i == 0 || num < minVal)
        {
            minVal = num;
            minPos = i;
        }
    }
    cout << "Menor valor: " << minVal << endl;
    cout << "Posicao: " << minPos << endl;
    return 0;
}
```

### 048 二气相生

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD048/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画出两道气旋：「阴阳二气，交替相生。第一气为0，第二气为1，此后每气皆为前二气之和。只用两个变量，算出第N气。」其中F(0)=0，F(1)=1，F(N)=F(N-1)+F(N-2)。

#### 输入

一个整数N。

#### 输出

一个整数，即第N个斐波那契数F(N)。

#### 提示

原题链接两个变量滚动：a,b = b,a+b。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    long long a=0,b=1,N,num=0;
    cin >>N;
    if(N==0)
    {
        cout << 0 << endl;
        return 0;
    }
    if(N==1)
    {
        cout << 1 << endl;
        return 0;
    }
    for(long long i=2;i<=N;i++)
    {
        num=a+b;
        a=b;
        b=num;
        
    }
    cout << num << endl;
    return 0;
}
//F1=0
//F2=0+1
//F3=1+1
//F4=1+2
//F5=2+3
```

### 049 斐波剑诀

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD049/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿展开一卷古剑谱，上面记载着斐波那契剑诀：0, 1, 1, 2, 3, 5, 8, 13……「每一式都是前两式的融合。T次问询，每次报出第N式。」

#### 输入

一个整数N。

#### 输出

一行，前N个斐波那契数，空格隔开。

#### 提示

原题链接预处理斐波那契数组到60，查询时直接取值。

#### 参考代码

```cpp
#include<iostream>
#include<vector>
using namespace std;
int main()
{
    long long N;
    cin >>N;
    vector<long long>a;
    a.push_back(0);
    a.push_back(1);
    for(int i=2;i<=N;i++)
    {
        long long temp;
        temp=a[i-1]+a[i-2];
        a.push_back(temp);
    }
    for(int i=0;i<N;i++)
    {
        cout << a[i] << " ";
    }
    return 0;
}
```

### 050 列阵求和

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD050/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在沙盘上画了一个数字阵列：「从M到N，全部列出来，再算和。如果M比N大，先交换。」李少白从M一路数到N，把每个数刻在石板上。

#### 输入

若干行，每行两个整数M和N。当M和N均为非正数（≤0）时结束输入。

#### 输出

对每组M和N，从小到大输出M到N之间的所有整数（空格隔开），最后输出 Sum=X（X为这些数的和）。每组输出占一行。

#### 提示

原题链接若M>N则先交换。注意：结束条件为两个数均≤0（测试用例可能用0 0或-1 -1）。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int M, N; 
    while(cin >> M >> N)
    {
        if(M <= 0 && N <= 0)
        {
            break;
        }
        if(M > N)
        {
            int temp = M;
            M = N;
            N = temp;
        }
        int sum = 0;
        for(int i = M; i <= N; i++)
        {
            cout << i;
            if(i < N) cout << " ";  // 最后一个数字后面不加空格
            sum += i;
        }
        cout << " Sum=" << sum << endl;
    }
    return 0;
}
```

### 051 剑行取道

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD051/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

沙盘上一个12×12的剑阵，赵晴儿指着其中一行：「这一行的所有剑，力量之和是多少？或平均力量？」李少白逐格检视。

#### 输入

第一行一个整数L（0~11，表示行号）。第二行一个字符（S或M）。接下来12行，每行12个浮点数。

#### 输出

输出该行的和或平均值，保留一位小数。

#### 提示

原题链接遍历指定行，根据操作类型求和或求平均。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()//测试案例存在问题
{
    int L;
    char op;
    cin >> L >> op;
    double a[12][12];
    for(int i = 0; i < 12; i++)
    {
        for(int j = 0; j < 12; j++)
        {
            cin >> a[i][j];
        }
    }
    double sum = 0;
    for(int j = 0; j < 12; j++)
    {
        sum += a[L][j];
    }
    cout << fixed << setprecision(1);
    if(op == 'S')
    {
        cout << sum << endl;
    }
    else if(op == 'M')
    {
        cout << sum / 12 << endl;
    }
    return 0;
}
```

### 052 剑列纵横

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD052/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿又指向剑阵的其中一列：「纵览此列，算其力量。」李少白沿着列的方向逐行检视。

#### 输入

第一行一个整数C（0~11，表示列号）。第二行一个字符（S或M）。接下来12行，每行12个浮点数。

#### 输出

输出该列的和或平均值，保留一位小数。

#### 提示

原题链接遍历所有行取指定列元素。

#### 参考代码

```cpp
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
```

### 053 完璧归宗

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD053/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上写下「完璧」二字：「完璧之数，等于它的所有真因子之和。譬如6=1+2+3。找到不超过N的所有完璧之数，以印证归宗之意。」

#### 输入

一个整数N。

#### 输出

每行输出一个不超过N的完全数（从小到大）。

#### 提示

原题链接对每个数找所有真因子求和，等于自身则是完全数。注意优化：枚举因子只需到 sqrt(X)，利用约数成对出现的性质。1 不是完全数。

#### 参考代码

```cpp
#include <iostream>
#include <cmath>
using namespace std;
typedef long long LL;

#include <iostream>
using namespace std;
typedef long long LL;

int main() {
    LL N;
    cin >> N;
    if (N >= 6) cout << 6 << endl;
    if (N >= 28) cout << 28 << endl;
    if (N >= 496) cout << 496 << endl;
    if (N >= 8128) cout << 8128 << endl;
    if (N >= 33550336) cout << 33550336 << endl;
    if (N >= 8589869056LL) cout << 8589869056LL << endl;
    if (N >= 137438691328LL) cout << 137438691328LL << endl;
    if (N >= 2305843008139952128LL) cout << 2305843008139952128LL << endl;
    
    return 0;
}
//主包过不了，以后再看……
```

### 054 剑意之质

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD054/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在沙盘上点出几枚剑棋：「天下剑法，有些可以拆分化简，有些不可再分，乃剑意之基石。这些不可拆分的棋位——只能被1和自己整除的数——就是剑意之质。排出2到N之间所有的剑意质数。」

#### 输入

一个整数N。

#### 输出

输出2到N之间所有的质数，每行一个。

#### 提示

原题链接对每个数从2到√n试除。

#### 参考代码

```cpp
#include<iostream>
#include<cmath>
using namespace std;
typedef long long LL;
bool isPrime(LL n)
{
    if(n==1)return false;
    else if(n==2)return true;
    else if(n%2==0&&n!=2)return false;
    for(LL i=3;i*i<=n;i++)
    {
        if(n%i==0)return false;
    }
    return true;
}
 int main()
 {
    LL N;
    cin>>N;
    for(LL i=2;i<=N;i++)
    {
        if(isPrime(i))
            cout<<i<<endl;
    }
 }
```

### 055 上方剑域

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD055/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第一宫——乾宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护乾宫的剑灵凌空画出一道剑气光幕，说道：「此乃乾宫剑阵之上方剑域。两条对角线将方阵切为上下左右四块。上方区域位于两条对角线的上方交汇处——即行号小于列号（i < j），且行号加列号之和小于 11（i + j < 11）的格子。此处灵力承天位之力，主攻正前方。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接先读操作类型（S求和/M求平均），再判断行号。上方区域即i

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i+j<11&&i<j)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;
}
```

### 056 下方剑域

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD056/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第二宫——坤宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坤宫的剑灵指向光幕下方，说道：「此乃坤宫剑阵之下方剑域。两条对角线将方阵切为上下左右四块。下方区域位于两条对角线的下方交汇处——即行号大于列号（i > j），且行号加列号之和大于 11（i + j > 11）的格子。此处灵力承地脉之气，势沉力猛。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接下方区域即i>j的元素。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i+j>11&&i>j)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;
}
```

### 057 左方剑域

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD057/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第三宫——震宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护震宫的剑灵指向光幕左侧，说道：「此乃震宫剑阵之左方剑域。两条对角线将方阵切为上下左右四块。左方区域位于两条对角线的左侧交汇处——即行号大于列号（i > j），且行号加列号之和小于 11（i + j < 11）的格子。此处灵力守青龙之位，主防御。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接左方区域即满足j < i && i + j < 11的元素（主对角线下且反对角线上）。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i+j<11&&i>j)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;
}
```

### 058 右方剑域

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD058/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第四宫——巽宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护巽宫的剑灵指向光幕右侧，说道：「此乃巽宫剑阵之右方剑域。两条对角线将方阵切为上下左右四块。右方区域位于两条对角线的右侧交汇处——即行号小于列号（i < j），且行号加列号之和大于 11（i + j > 11）的格子。此处灵力据白虎之位，主进攻。尔需计算此域所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接右方区域即满足j > i && i + j > 11的元素（主对角线上且反对角线下）。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i+j>11&&i<j)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;
}
```

### 059 右上剑角

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD059/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第五宫——离宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护离宫的剑灵指向沙盘右上，说道：「此乃离宫剑阵之右上剑角。仅以主对角线为界——右上区域即所有行号小于列号（i < j）的格子，主对角线右上方的那一半。此处为天乾之位，日升之处，剑势腾空而起。尔需计算此角所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出右上半部分的和或平均值，保留一位小数。

#### 提示

原题链接右上部分即j>i的元素。S求和，M求平均。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i<j)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;
}
```

### 060 左上剑角

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD060/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第六宫——坎宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坎宫的剑灵指向沙盘左上，说道：「此乃坎宫剑阵之左上剑角。仅以副对角线为界——左上区域即所有行号加列号之和小于 11（i + j < 11）的格子，副对角线左上方的那一半。此处为天坤之位，月落之处，剑气如新月之弧。尔需计算此角所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接左上部分即i+j<11的元素。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i+j<11)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;
}
```

### 061 右下剑角

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD061/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第七宫——艮宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护艮宫的剑灵指向沙盘右下，说道：「此乃艮宫剑阵之右下剑角。仅以副对角线为界——右下区域即所有行号加列号之和大于 11（i + j > 11）的格子，副对角线右下方的那一半。此处为地乾之位，日落之处，剑势如残阳下沉。尔需计算此角所有灵力之和——或取其均值——方可破阵。」第一行输入一个大写字母：S 求和，M 求平均值。接下来 12 行，每行 12 个浮点数，表示剑阵各格的灵力值。输出保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接右下部分即满足i + j > 11的元素（反对角线以下）。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i+j>11)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;
}
```

### 062 左下剑角

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD062/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白来到十二宫剑阵的第六宫——坤宫。地面是一幅 12×12 的方格阵，每个格子中浮现一个浮动的数字，那是剑阵积蓄的灵力值。守护坤宫的剑灵指向地面，说道：「此乃坤宫剑阵。从西北到东南，一条主对角线将方阵一分为二。对角线之左下方（即行号大于列号的格子），是为地坤之位。此处灵力如初月升空，自下而上，自左而右，渐次铺展。尔需计算此区域所有灵力之和——或取其均值——方可破阵。」具体来说：一个 12×12 的方阵，行号 i 和列号 j 均从 0 到 11（或从 1 到 12）。左下区域定义为所有满足 i > j（行号严格大于列号）的格子，即主对角线以下的部分。如下图所示（绿色区域即为左下区域）：     列0 列1 列2 ...      列11
行0   \  .   .   .   .   .
行1   绿  \  .   .   .   .
行2   绿  绿  \  .   .   .
 ...  绿  绿  绿  \  .   .
行11  绿  绿  绿  绿  绿  \
第一行输入一个大写字母：S 表示求左下区域所有灵力之和，M 表示求平均值。接下来 12 行，每行 12 个浮点数，表示 12×12 剑阵中每个格子的灵力值。输出所求的和或平均值，保留一位小数。

#### 输入

第一行一个大写字母S或M。接下来12行，每行12个浮点数。

#### 输出

输出对应区域的和或平均值，保留一位小数。

#### 提示

原题链接左下部分即满足j < i的元素（主对角线以下）。

#### 参考代码

```cpp
#include<iostream>
#include<iomanip>
using namespace std;
int main()
{
    char type;
    cin>>type;
    double a[13][13],sum=0;
    for(int i=0;i<12;i++)
    {
        for(int j=0;j<12;j++)
        {
            cin>>a[i][j];
            if(i>j)sum+=a[i][j];
        }
    }

    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;
    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;
}
```

### 063 方圆初阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD063/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

「此乃方圆剑阵——最外圈剑气最淡，标记为1；往里一圈剑气渐浓，标记为2。」赵晴儿在沙盘上画出一圈圈剑芒，「到剑阵中心，剑气愈凝愈实。每一圈剑芒的强度，就是你离外界最远的那道剑气的距离。」

#### 输入

多行，每行一个整数N。N=0时结束。

#### 输出

每个N输出一个N阶矩阵，每个数字占3个字符宽度。每个矩阵后跟一个空行。

#### 提示

原题链接每个位置的值 = min(i+1, j+1, N-i, N-j)，即到四条边的最小距离。

#### 参考代码

```cpp
#include <iostream>
#include<iomanip>
using namespace std;
int a[1001][1001];
int N;

int min(int a,int b,int c,int d)
{
    int m1=a>b?b:a;
    int m2=c>d?d:c;
    return m1>m2?m2:m1;
}

void handle(int N)
{
    for(int i=0;i<N;i++)
    {
        for(int j=0;j<N;j++)
        {
            a[i][j]=min(i+1,j+1,N-i,N-j);
        }
    }
}

int main() {
    cin>>N;
    while(N!=0)
    {
        handle(N);
        for(int i=0;i<N;i++)
        {
            {
                for(int j=0;j<N;j++)
                cout<<setw(3)<<a[i][j];
            }
            cout<<endl;
        }
        cout<<endl;
        cin>>N;
    }
    return 0;
}
```

### 064 镜像方阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD064/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

「此阵以主对角线为镜——镜中剑影，左右互映。」赵晴儿落下第一柄长剑，「主对角线上的剑势最强，为1；往右上和左下方逐次递减，如剑光在水面的倒影越远越淡。」

#### 输入

多行，每行一个整数N。N=0时结束。

#### 输出

每个N输出一个N阶矩阵，每个数字占3个字符宽度。每个矩阵后跟一个空行。

#### 提示

原题链接M[i][j] = |i-j|+1。对角线为1，离对角线越远数越大。

#### 参考代码

```cpp
#include <iostream>
#include<cmath>
#include<iomanip>
using namespace std;
int a[1001][1001];
int N;
int main() {
    cin>>N;
    while(N!=0)
    {
        for(int i=0;i<N;i++)
        {
            {
                for(int j=0;j<N;j++)
                {
                    a[i][j]=int(abs(i-j)+1);
                    cout<<setw(3)<<a[i][j];
                }
            }
            cout<<endl;
        }
        if(N!=0)cout<<endl;
        cin>>N;
        
    }
    return 0;
}
```

### 065 倍增方阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD065/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

「此阵每一格，剑气强度皆由剑气原点(0,0)倍增而来。」赵晴儿剑尖轻点沙盘，「位在(i,j)的剑势，强度为2的(i+j)次方。一生二，二生四，剑气倍增如潮水蔓延。」

#### 输入

多行，每行一个整数N（0≤N≤15）。N=0时结束。

#### 输出

每个N输出一个N阶矩阵，每行N个整数用空格隔开。每个矩阵后跟一个空行。

#### 提示

原题链接M[i][j] = 2^(i+j)。用位运算 1<<(i+j) 或 pow函数。

#### 参考代码

```cpp
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
```

### 066 蛇形剑阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD066/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

「剑阵蜿蜒如蛇，以身引气，气走周身。」赵晴儿在沙盘上画了一个n行m列的剑阵，「从左上角开始，依次填入从1到n×m的剑气。行到尽头便拐弯，似灵蛇折返。」

#### 输入

一行，两个整数n和m。

#### 输出

n行，每行m个整数用空格隔开。输出后跟一个空行。

#### 提示

原题链接模拟蛇形遍历：右→下→左→上循环。维护四个边界。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

//参考AcWing代码
const int N=200;
int arr[N][N];

int main()
{
    int n,m;
    cin>>n>>m;
    int dx[]={0,1,0,-1};
    int dy[]={1,0,-1,0};
    int x=0,y=0,d=0;
    for(int i=1;i<=n*m;i++)
    {
        arr[x][y]=i;
        int a=x+dx[d],b=y+dy[d];
        if(a>=n||a<0||b<0||b>=m||arr[a][b])
        {
            d=(d+1)%4;//向右为1，向下为2，向左为3，向上为4
            a=x+dx[d],b=y+dy[d];
        }
        x=a,y=b;
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
```

### 067 古卷测长

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD067/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递给李少白一卷竹简：「上面刻着一行字，告诉我它有多长。」

#### 输入

一行字符串（长度不超过100），可能包含空格。

#### 输出

输出字符串的实际长度。

#### 提示

原题链接读入一行字符串（含空格），输出其长度。

#### 参考代码

```cpp
#include<iostream>
#include<string>
using namespace std;

int main()
{
    string a;
    int i;
    getline(cin,a);
    for(i=0;a[i]!='\0';i++)
    {
    
    }
    cout<<i<<endl;
}
```

### 068 密文留白

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD068/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

古卷上的字太密了，赵晴儿让李少白在每个字符后面加一个空格，方便辨认。

#### 输入

一行字符串（长度不超过100）。

#### 输出

每个字符后加一个空格输出（最后一个字符后也有空格）。

#### 提示

原题链接遍历字符串，每个字符后输出一个空格。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>
int main()
{
    string a;
    getline(cin,a);
    for(int i=0;a[i]!='\0';i++)
    {
        cout<<a[i]<<" ";
    }
}
```

### 069 墨迹遮字

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD069/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

古卷上有些字被墨迹遮住了，需要替换成'#'，露出可辨认的文字。

#### 输入

一行字符串（长度不超过100，全大写）。第二行一个字符，表示要替换的字符。

#### 输出

替换后的字符串。

#### 提示

原题链接遍历字符串，遇到目标字符输出'#'，否则输出原字符。

#### 参考代码

```cpp
#include<iostream>//输入样例有误
#include<string>
using namespace std;
int main()
{
    string a;
    char b;
    cin>>a;
    cin>>b;
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]==b)a[i]='#';
    }
    cout<<a<<endl;
}
```

### 070 经文重构

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD070/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递给李少白一段经文a，让他按规则重新构造一段经文b：每个位置b[i]的ASCII值等于a[i]和a[i+1]的ASCII值之和。

#### 输入

一行字符串a（长度3~100）。

#### 输出

构造后的字符串b。

#### 提示

原题链接遍历a，b[i] = chr(ord(a[i]) + ord(a[i+1]))。最后一个用a[-1]和a[0]。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>


int main()
{
    string a;
    char b[200];
    getline(cin,a);  
    int i;
    for(i=0;a[i+1]!='\0';i++)
    {
        b[i]=a[i]+a[i+1];
    }
    b[i]=a[0]+a[i];
    b[i+1]='\0';
    cout<<b;
}
```

### 071 密文数符

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD071/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递给李少白一行密文，里面混着文字和数字。她说：「数一数有几个数字字符。」

#### 输入

一行字符（长度不超过100）。

#### 输出

输出其中数字字符（'0'~'9'）的个数。

#### 提示

原题链接遍历字符串，判断每个字符是否在'0'到'9'之间。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>


int main()
{
    string a;
    getline(cin,a);  
    int count=0;
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]>='0'&&a[i]<='9')
            count++;
    }
    cout<<count<<endl;
}
```

### 072 拳掌对决

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD072/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白和师弟在练功间隙玩猜拳游戏。每人出 Scissors（剪刀）、Rock（石头）或 Paper（布），按照相克规则判断胜负：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock。

#### 输入

一行，两个字符串，分别表示 Player1 和 Player2 出的拳（Scissors、Rock 或 Paper）。

#### 输出

输出结果：Player1 赢输出 Player1，Player2 赢输出 Player2，平局输出 Tie。

#### 提示

先判断双方是否相等（平局）。否则按相克规则判断：Rock 胜 Scissors，Scissors 胜 Paper，Paper 胜 Rock，构成一个循环克制链。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<string>
using namespace std;

int main()
{
    string a, b;
    cin >> a >> b;
    
    if(a == b)
        cout << "Tie" << endl;
    else if((a == "Rock" && b == "Scissors") ||
            (a == "Scissors" && b == "Paper") ||
            (a == "Paper" && b == "Rock"))
        cout << "Player1" << endl;
    else
        cout << "Player2" << endl;
    
    return 0;
}
```

### 073 经文加密

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD073/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

古卷需要加密保存。加密规则：每个字母后移一位（z→a），每个数字后移一位（9→0），其他字符不变。

#### 输入

一行字符串（长度不超过100）。

#### 输出

加密后的字符串。

#### 提示

原题链接遍历字符串，对字母、数字分别做+1循环偏移，其他字符原样输出。

#### 参考代码

```cpp
#include<iostream>
using namespace std;//数字不加密！
#include<string>
int main()
{
    string a;
    getline(cin,a);
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y'||a[i]>='0'&&a[i]<='8')
            a[i]+=1;
        else if(a[i]=='Z')a[i]='A';
        else if(a[i]=='z')a[i]='a';
        else if(a[i]=='9')a[i]='0';
    }
    cout<<a<<endl;
    return 0;
}
```

### 074 古卷替换

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD074/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

古卷上的某个词需要全部替换成另一个词。赵晴儿让李少白逐词核对。

#### 输入

三行：第一行原文字符串，第二行要替换的词A，第三行替换成的词B。

#### 输出

替换后的字符串。

#### 提示

原题链接字符串替换函数，或按空格分割单词逐个比较替换。

#### 参考代码

```cpp
#include <iostream>
#include <string>
#include <sstream>
using namespace std;//

int main()
{
    string line, A, B;
    getline(cin, line);
    cin >> A >> B;

    stringstream ss(line);
    string word, result;
    bool first = true;
    while (ss >> word) {
        if (!first) result += " ";
        if (word == A)
            result += B;
        else
            result += word;
        first = false;
    }

    cout << result << endl;
    return 0;
}
```

### 075 寻最长词

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD075/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着古卷上的一句话：「找出最长的那个词。」

#### 输入

一行，以'.'结尾的英文句子（长度不超过500）。

#### 输出

最长的单词。

#### 提示

原题链接按空格分割单词（去掉末尾的'.'），遍历比较长度。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>
int main()
{
    char a[501][20];
    string str;
    int count=0,b[501]={0};
    getline(cin,str);
    for(int i=0;str[i]!='\0';i++)
    {
        for(int j=0;;j++,i++)
        {
            if(str[i]==' '||str[i]=='.'){
                b[count++]=j;
                str[i]='\0';
                break;
            }
            a[count][j]=str[i];
        }
    }
    int max=-1,m=0;
    for(int i=0;b[i]!=0;i++)
    {
        if(b[i]>max){
            max=b[i];
            m=i;
        }
    }
    cout<<a[m]<<endl;
}
```

### 076 古卷插字

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD076/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递给李少白两段古卷残篇，要把后一段插到前一段ASCII码最大的字符后面。

#### 输入

两行，第一行一个字符串str，第二行一个字符串substr。

#### 输出

每行输出插入后的字符串。

#### 提示

原题链接找到str中ASCII码最大的字符（若有多个取最后一个），在其后面插入substr。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>
#include<cstring>
int main()
{
    string str,substr;
    getline(cin,str);
    getline(cin,substr);
    char max='A' ;
    int m=0,n=substr.length();
    int len=str.length();
    for(int i=0;str[i]!='\0';i++)
    {
        if(str[i]>max)
        {
            max=str[i];
            m=i;
        }
    } \
    str.resize(len+n); 
    for(int i=len;i>m;i--)
    {
        str[i+n]=str[i];
    }
    for(int i=m+1,j=0;substr[j]!='\0';i++,j++)
    {
        str[i]=substr[j];
    }
    cout<<str;
}
```

### 077 独字寻踪

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD077/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

古卷上有些字重复出现，有些只出现一次。赵晴儿让李少白找到第一个只出现一次的字符。

#### 输入

一行只包含小写字母的字符串。

#### 输出

第一个只出现一次的字符，或"no"。

#### 提示

原题链接先统计每个字符出现次数，再从头遍历找第一个次数为1的。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>
#include<cstring>
int main()
{
    string a;
    int c[26]={0};
    getline(cin,a);
    char m;
    for(int i=0;a[i]!='\0';i++)
    {
        c[a[i]-'a']++;
        
    }
    for(int i=0;a[i]!='\0';i++)
    {
        if(c[a[i]-'a']==1)
        {
            cout<<a[i]<<endl;
            break;
        } 
        if(a[i+1]=='\0')
        {
            cout<<"no"<<endl;
        }
    }
}
```

### 078 两卷对校

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD078/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿拿着两卷古卷：「看看第二段经文是不是第一段中的一部分——如果是，就算对上了。」

#### 输入

第一行一个整数k（忽略，用于兼容）。第二行字符串a。第三行字符串b。

#### 输出

b是a的子串输出yes，否则输出no。

#### 提示

原题链接遍历a的每个位置，用strncmp比较是否与b匹配。

#### 参考代码

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// int main() {
//     vector<string> a;
//     string s;
//     while (getline(cin, s)) {
//         a.push_back(s);
//     }
//     if (a.size() >= 3) {
//         cout << (a[1].find(a[2]) != string::npos ? "yes" : "no") << endl;
//     }
//     return 0;
// }

#include<iostream>
using namespace std;
#include<string>
#include<cstring>
int main()
{
    int a;
    bool found=false;
    string str1,str2;
    getline(cin,str1);
    getline(cin,str2);
    int len1=str1.length(),len2=str2.length();
    for(int i=0;i<len1-len2+1;i++)
    {
        bool res=true;
        for(int j=0,k=i;str2[j]!='\0';j++,k++)
        {
            if(str1[k]!=str2[j])
            {
                res=false;
                break;
            }

        }
        if(res==true)
        {
            found=true;
            break;
        }
    }
    if(found==true)
    {
        cout<<"yes";
    }
    else if(found==false)
    {
        cout<<"no";
    }

}
```

### 079 经文周期

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD079/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着一篇重复的经文：「这段文字是某个子串重复几次写成的？找出最小的重复次数。」

#### 输入

一行字符串。

#### 输出

对于每个输入的字符串（遇到"."为止），输出一行一个整数n，表示该字符串最多由n个子串重复构成。

#### 提示

原题链接枚举周期p（p是len的因子），检查s[0:p]重复len/p次是否等于原串。

#### 参考代码

```cpp
#include<iostream>
#include<string>
using namespace std;

int main()
{
    string s;
    while(cin >> s && s != ".")
    {
        int n = s.length();
        for(int len = 1; len <= n; len++)
        {
            if(n % len == 0)
            {
                bool ok = true;
                for(int i = len; i < n; i++)
                {
                    if(s[i] != s[i % len])
                    {
                        ok = false;
                        break;
                    }
                }
                if(ok)
                {
                    cout << n / len << endl;
                    break;
                }
            }
        }
    }
    return 0;
}
```

### 080 密文跨距

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD080/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递给李少白一长段密文和两个短码S1、S2：「S1在左，S2在右，不交叉。最大间距是多少？」

#### 输入

一行，三个字符串用逗号隔开：S,S1,S2。

#### 输出

最大跨距。不满足条件输出-1。

#### 提示

原题链接从左往右找S1最后出现的位置end1，从右往左找S2最后出现的位置start2。如果end1

#### 参考代码

```cpp
#include<iostream>
#include<string>
#include<cstring>
using namespace std;
int main()
{
    char a[1000]={0},b[100]={0},c[100]={0};
    char s;
    cin>>s;
    for(int i=0;s!=',';i++)
    {
        a[i]=s;
        cin>>s;
    }

    cin>>s;
    for(int i=0;s!=',';i++)
    {
        b[i]=s;
        cin>>s;
    }
    cin>>s;
    for(int i=0;s!=','&&s!='\n'&&cin;i++)
    {
        c[i]=s;
        cin>>s;
    }

    int m=-1,n=-1;
    for(int i=0;a[i]!='\0';i++)
    {
        bool flag=false;
        int found=1;
        for(int j=i,k=0;b[k]!='\0';k++,j++)
        {
            if(a[j]!=b[k])
            {
                found=0;break;
            }
        }
        if(found)
        {
            flag=true;
            m=i+strlen(b);
            break;
        }
    }
    for(int i=strlen(a);i>=m;i--)
    {
        bool flag=false;
        int found=1;
        for(int j=i,k=0;c[k]!='\0';k++,j++)
        {
            if(a[j]!=c[k])
            {
                found=0;break;
            }
        }
        if(found)
        {
            flag=true;
            n=i;
            break;
        }
    }
    if(m==-1||n==-1){
        cout<<-1;
        return 0;
    }
    else {
        cout<<n-m;
    }

}
```

### 081 初窥阶乘

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD081/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白在丹房帮赵晴儿炼丹。丹方上写着："取n味药材，第一味放1份，第二味放2份，第三味放3份……第n味放n份。"赵晴儿问："n味药材总共需要多少份？"李少白拿出笔从头算：1×2×3×……×n。赵晴儿摇头："每次都要从头算，太慢了。把它封装成一个函数，以后直接调用。"请帮李少白编写一个函数，计算n的阶乘（n!）。

#### 输入

一个整数n（0 ≤ n ≤ 10）。

#### 输出

输出n的阶乘。

#### 提示

原题链接函数内用循环累乘，或递归实现。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int jiecheng(int n)
{
    int res=1;
    if(n==1)return 1;
    else res*=n*jiecheng(n-1);
    return res;
}
int main()
{
    int n;
    cin>>n;
    cout<<jiecheng(n);
}
```

### 082 比剑取大

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD082/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

兵器库里，赵晴儿和李少白各自挑了一柄剑。赵晴儿的剑重x斤，李少白的剑重y斤。赵晴儿说："我们总要比谁的剑更重，每次都手算太麻烦。写一个函数，传入两个数，返回较大的那个。以后比试直接调用就行。"请帮他们实现这个函数。

#### 输入

一行，两个整数x和y。

#### 输出

输出最大值。

#### 提示

原题链接函数内用 if 比较或三元表达式。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int max(int m,int n)
{
    if(m>n)return m;
    else return n;
}
int main()
{
    int m,n;
    cin>>m>>n;
    cout<<max(m,n);
}
```

### 083 剑气归正

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD083/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白在练剑气外放时，需要计算剑气落点与自己的距离。距离本该是正数，但有时算出的结果是负数——因为方向搞反了。赵晴儿说："别每次遇到负数就手动取反，写一个函数，不管传入正数还是负数，都返回它的绝对值。"

#### 输入

一个整数x。

#### 输出

输出x的绝对值。

#### 提示

原题链接if x < 0: return -x, else: return x。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int abs(int n)
{
    if(n>=0)return n;
    else return -n;
}
int main()
{
    int m;
    cin>>m;
    cout<<abs(m);
}
```

### 084 双剑互易

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD084/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在教李少白一套双剑术。左右手各持一剑，攻守之间需要不断交换位置。"实战中你不能把剑放到地上再捡起来，"梁嘉峰说，"直接交换。写一个函数，传入两个变量的引用，在函数内部交换它们的值。"李少白提笔写下函数签名，却犯了难——C++里普通参数只传值，改不了外面的变量。

#### 输入

一行，两个整数x和y。

#### 输出

交换后的x和y。

#### 提示

原题链接C++用引用参数 `void swap(int &x, int &y)`。Python中 a, b = b, a。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int main()
{
    int m,n;
    cin>>m>>n;
    swap(m,n);
    cout<<m<<" "<<n;
}
```

### 085 辗转相除

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD085/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在药圃里采了a株紫芝和b株青蒿，要把它们扎成相同大小的药束，每束株数相同且不能有剩余。"这其实就是求a和b的最大公约数，"赵晴儿说，"古人有个妙法叫辗转相除——用大数除以小数取余，再用小数除以余数，反复如此，直到余数为零。最后一个非零余数就是答案。"请帮赵晴儿写一个函数，用辗转相除法求两个正整数的最大公约数。

#### 输入

一行，两个正整数a和b。

#### 输出

输出a和b的最大公约数。

#### 提示

原题链接辗转相除法：gcd(a,b) = gcd(b, a%b)，当b==0时返回a。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int main()
{
    int a,b,n;
    cin>>a>>b;
    if(b>a)swap(a,b);
    n=a%b;
    while(n!=0)
    {
        a=n;
        swap(a,b);
        n=a%b;
    }
    cout<<b;
}
```

### 086 剑阵复制

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD086/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上摆了一个剑阵（数组a），需要原样复制一份到另一个沙盘（数组b）上。"手抄太慢，"赵晴儿说，"写一个函数，把a的前size个元素复制到b对应的位置上。"李少白接过两个沙盘，发现b上原来也有数字，只需覆盖前size个位置，其余保持不变。

#### 输入

第一行两个整数n和size（数组长度和复制个数）。第二行n个整数。

#### 输出

复制后的数组，空格隔开。

#### 提示

原题链接函数内循环，b[i] = a[i]，复制前size个元素。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<cstring>
int main()
{
    int n1,n2,m;
    cin>>n1>>n2>>m;
    int a[200]={0},b[200]={0};
    for(int i=0;i<n1;i++)
    {
        cin>>a[i];
    }
    for(int i=0;i<n2;i++)
    {
        cin>>b[i];
    }
    for(int i=0;i<m;i++)
    {
        b[i]=a[i];
    }
    for(int i=0;i<n2;i++)
    {
        cout<<b[i]<<" ";
    }
}
```

### 087 剑阵翻转

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD087/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int n,size,a[2000];
    cin>>n>>size;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(int i=size-1;i>=0;i--)
    {
        cout<<a[i]<<" ";
    }
    for(int i=size;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
}
```

### 088 印数成招

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD088/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int n,size,a[2000];
    cin>>n>>size;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    
    for(int i=0;i<size;i++)
    {
        cout<<a[i]<<" ";
    }
}
```

### 089 印阵成招

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD089/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画了一个row行col列的剑阵图，每个格子标着一个数字。她需要把这个阵图工整地抄录到竹简上。"写一个函数，"赵晴儿说，"传入二维数组和行列数，按格式逐行打印。每行的数字用空格隔开，数字之间用空格隔开。"

#### 输入

第一行两个整数row和col。接下来row行，每行col个整数。

#### 输出

矩阵元素，每行末尾无多余空格。

#### 提示

原题链接嵌套循环遍历行列，注意行末空格处理。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int main()
{
    int a[200][200],row,col;
    cin>>row>>col;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cin>>a[i][j];
        }
    }
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            if(j!=0)cout<<" ";
            cout<<a[i][j];
        }
        cout<<endl;
    }
    
 
 
}
```

### 090 剑阵排序

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD090/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿拿着一份兵器清单来找李少白："这份清单前半段乱得很，从第l件到第r件需要按重量从小到大排好，后面的顺序不变。"李少白接过清单，发现上面有n件兵器的重量。他想写一个通用的排序函数，只排a[l]到a[r]这一段，其余位置原封不动。

#### 输入

第一行三个整数n、l和r（数组长度、排序区间左端点和右端点，0 ≤ l ≤ r < n）。第二行n个整数。

#### 输出

排序后的数组，空格隔开。

#### 提示

原题链接对a[l]到a[r]排序，其余元素不变。可用冒泡、选择或库函数。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<algorithm>
int a[200000];
int main()
{
    int n,l,r;
    cin>>n>>l>>r;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    sort(a+l,a+r+1);//左闭右开
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
}
```

### 091 递归阶乘

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD091/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

李少白在丹房翻到一本古籍，上面记载着一种"以丹炼丹"的奇术——要炼n味丹药，先炼好n-1味；要炼n-1味，先炼好n-2味……直到只剩1味，直接炼成。赵晴儿看了笑道："这就是递归。一个函数调用自己，层层深入，直到触底再层层返回。阶乘的定义本身就是递归的——fact(n) = n × fact(n-1)，fact(1) = 1。""用递归重新实现阶乘函数。"

#### 输入

一个整数n。

#### 输出

输出n的阶乘。

#### 提示

原题链接递归三要素：终止条件(n==1返回1)、递推关系(n*fact(n-1))、缩小规模。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int jiecheng(int n)
{
    int res=1;
    if(n==1)return 1;
    else res*=n*jiecheng(n-1);
    return res;
}
int main()
{
    int n;
    cin>>n;
    cout<<jiecheng(n);
}
```

### 092 递归斐波

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD092/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画出一串数字：1, 1, 2, 3, 5, 8, 13……"看出规律了吗？"她问。李少白看了半天："每个数都是前两个数的和！""对，这就是斐波那契数列。"赵晴儿说，"用递归来写——f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。不过提醒你，朴素递归效率很低，后面会学到优化的方法。"

#### 输入

一个整数n。

#### 输出

输出斐波那契数列第n项。

#### 提示

原题链接递归：f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)。注意效率问题。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int feibo(int n)
{
    int a=1,b=1,res=0;
    if(n==1||n==2)return 1;
    res+=feibo(n-1)+feibo(n-2);
    return res;
}
int main()
{
    int n;
    cin>>n;
    cout<<feibo(n);
}
```

### 093 登阶问道

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD093/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

试炼场尽头，一座石阶直通山顶。石阶共有n级，每次只能跨1级或2级。赵晴儿站在山脚问："从第一级走到第n级，一共有多少种不同的走法？"李少白想了想："如果我最后一步跨1级，那之前有f(n-1)种走法；如果最后一步跨2级，那之前有f(n-2)种走法……""没错，"赵晴儿点头，"这就是递归。"

#### 输入

一个整数n（1 ≤ n ≤ 20）。

#### 输出

输出跳法总数。

#### 提示

原题链接f(n) = f(n-1) + f(n-2)。最后一步跳1级或2级，两种情况之和。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int dengjie(int n)
{
    if(n==1)return 1;//n=1只有一种走法
    if(n==2)return 2;
    int res=0;//总的结果数，用于计数
    res=dengjie(n-1)+dengjie(n-2);
    return res;//返回res的值
}

int main()
{
    int n;
    cin>>n;//输入n
    cout<<dengjie(n); //输出res的值
}
```

### 094 方阵寻路

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD094/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画了一个(n+1)×(m+1)的方格阵，每个格子标着坐标。"假设你站在左上角(0,0)，"赵晴儿指着沙盘说，"目标是走到右下角(n,m)。每次只能向右走一步，或者向下走一步。一共有多少种不同的路径？"李少白盯着沙盘看了一会儿："走到(n,m)之前，一定是从(n-1,m)或(n,m-1)过来的……""很好，又是一个递归。"

#### 输入

一行，两个整数n和m（目标坐标，0 ≤ n,m ≤ 20）。

#### 输出

输出走法总数。

#### 提示

原题链接从(0,0)到(n,m)的网格路径数。f(n,m) = f(n-1,m) + f(n,m-1)。边界：f(0,m)=1, f(n,0)=1。等价于组合数C(n+m, n)。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int dx[]={0,1},dy[]={1,0};

int n,m;
int xunlu(int i,int j)
{
    if(i==n&&j==m)return 1;
    if(i>n||j>m)return 0;
    int res=0;
    for(int k=0;k<2;k++)
    {
        i+=dx[k],j+=dy[k];
        res+=xunlu(i,j);
        i-=dx[k],j-=dy[k];
    }
    return res;
}
int main()
{

    cin>>n>>m;
    cout<<xunlu(0,0);


}
```

### 095 全排列阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD095/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递给李少白n枚令牌，上面分别刻着1到n。"把它们排成一列，列出所有可能的排列顺序。"梁嘉峰说，"按字典序从小到大输出。"李少白开始手动枚举，很快就乱了套。赵晴儿在旁边提醒："用递归的思路——每次选一个没用过的令牌放到当前位置，然后递归处理剩下的位置。选完之后要'回退'，把令牌放回去，才能尝试下一个选择。这就是回溯。"

#### 输入

一个整数n（1 ≤ n ≤ 9）。

#### 输出

每行一个排列，数字之间用空格隔开。

#### 提示

原题链接DFS+回溯：用used[]标记已用数字，path[]记录当前排列。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int n;
int used[10];
bool path[10];
void dfs(int u)
{

    if(u==n){
        for(int i=0;i<n;i++)
        {
            if(i!=0)cout<<" ";
            cout<<used[i];
        }
        cout<<endl;
        return ;
    }
    else{
        for(int i=1;i<=n;i++)
        {
            if(!path[i]){
                used[u]=i;
                path[i]=true;
                dfs(u+1);
                path[i]=false;
                used[u]=0;
            }
        }
    }

}


int main()
{
    cin>>n;
    dfs(0);
}
```

### 096 空格替换

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD096/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

兵器阁的大门上刻着一行古文，但年代久远，字迹模糊，空格处尤其难以辨认。赵晴儿凑近看了看："这行字里夹了太多空格，密密麻麻的，根本看不清。"梁嘉峰说："古卷传输时，空格容易丢失。古人想了个办法——把每个空格替换成%20，这样既保留了间隔，又不会和真正的空白混淆。""你写一段程序，把这行古文里的所有空格替换成%20。"

#### 输入

一行字符串（长度不超过100）。

#### 输出

替换空格为%20后的字符串。

#### 提示

原题链接遍历字符串，遇到空格输出%20，否则输出原字符。

#### 参考代码

```cpp
#include<iostream>
using namespace std;
#include<string>

int main()
{
    string a;
    getline(cin,a);
    for(int i=0;a[i]!='\0';i++)
    {
        if(a[i]==' ')
            cout<<"%20";
        else cout<<a[i];
    }
}
```

### 097 再算斐波

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD097/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在兵器阁的账本上翻到一串奇怪的数字：1, 1, 2, 3, 5, 8, 13, 21……"这是前辈铸剑师留下的排列规律，"梁嘉峰说，"每一柄新剑的重量都是前两柄之和。第1柄和第2柄都是1斤，第3柄就是1+1=2斤，第4柄是1+2=3斤……""上一章你用递归算过这个数列，但递归太慢了。这次用容器来存——把每一项都推进一个序列里，只保留最近两项，循环推进。"请帮赵晴儿算出第n柄剑的重量。

#### 输入

一个整数n（0 ≤ n ≤ 90）。

#### 输出

输出斐波那契数列第n项。

#### 提示

原题链接两个变量a,b滚动：a,b = b,a+b。循环n次。

#### 参考代码

```cpp
#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int>a;
    a.push_back(1);
    a.push_back(1);
    int n;
    cin>>n;
    for(int i=0,j=1;i<n;i++,j++)
    {
        a.push_back(a[i]+a[j]);
    }
    cout<<a[n-1];

}
```

### 098 倒转铁链

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD098/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

兵器阁的架子上挂着一串铁环，每个环上刻着一个数字，从头到尾依次是1、2、3……最后一个环上刻着-1，表示链条结束。梁嘉峰指着铁链说："我要从最后一个环开始，把数字一个个报出来。但这串铁环只能从前往后读，不能直接跳到末尾。"赵晴儿想了想："用一个容器——先把所有数字存进去，再从后往前取出来。这就像把铁环一个个摘下来放到盒子里，最后从盒子里倒着取。"

#### 输入

一行整数，以-1结尾，表示链表的节点值（-1不算节点）。

#### 输出

从尾到头输出每个节点的值，每行一个。

#### 提示

原题链接用栈存储所有节点值，然后依次弹出。或者用递归。

#### 参考代码

```cpp
#include<iostream>
#include<vector>
using namespace std;
int main()
{
    int n;
    vector<int>a;
    cin>>n;
    while(n!=-1)
    {
        a.push_back(n);
        cin>>n;
    }
    for(int i=a.size()-1;i>=0;i--)
    {
        cout<<a[i]<<endl;
    }

}
```

### 099 双栈为队

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD099/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在兵器阁里找到两个铁盒，每个盒子只能从顶部放入和取出——这就是"栈"，后进先出。梁嘉峰说："现在我需要一个'队列'——先进先出。但手边只有这两个栈，没有队列。你能用这两个栈模拟一个队列吗？"赵晴儿思索片刻："入队的时候都放进盒子1。出队的时候，如果盒子2是空的，就把盒子1的东西全部倒进盒子2——这样顺序就反过来了，最先进来的变成了盒子2的顶部，直接取就行。"请帮赵晴儿实现这个"双栈模拟队列"的操作。

#### 输入

若干操作命令：`push x`（入队）、`pop`（出队并输出）、`empty`（判空）。

#### 输出

对pop操作输出队首值，empty操作输出`yes`或`no`。

#### 提示

原题链接栈1入队，栈2出队。出队时栈2空就把栈1全部倒入栈2。

#### 参考代码

```cpp
#include<iostream>
#include<stack>
#include<string>
using namespace std;
int main()
{
    stack<int>in,out;
    int n;
    string a;
    while(cin>>a)
    {
        if(a=="push")
        {
            cin>>n;
            in.push(n);
        }
        else if(a=="pop")
        {
            if(out.empty())
            {
                while(!in.empty())
                {
                    out.push(in.top());
                    in.pop();
                }
                
            }
            if(!out.empty())
            {
                cout<<out.top()<<endl;
                out.pop();
            }
        }
        else if(a=="empty")
        {
            if(out.empty()&&in.empty())
            {
                cout<<"yes"<<endl;
            }
            else cout<<"no"<<endl;
        }
    }
}
```

### 100 铁链翻转

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD100/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰从架子上取下一条铁链，每个环上刻着一个数字。他把铁链平铺在桌上，从头到尾是1、2、3、4、5……最后一个环上刻着-1，表示结束。"我要把这条铁链反过来，"梁嘉峰说，"第一个变最后一个，最后一个变第一个。但不能断开重接，只能用容器来辅助。"赵晴儿拿起一个铁盒："把铁环一个个摘下来放进盒子里——先进去的沉到底部。等全部摘完，再从盒子里取出来，顺序就反了。"

#### 输入

一行整数，以-1结尾，表示链表节点值。

#### 输出

反转后的链表，空格隔开。

#### 提示

原题链接三指针法：prev=None, curr=head。循环：next=curr.next, curr.next=prev, prev=curr, curr=next。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

struct node
{
    int m;
    node *Next;
};

int main()
{
    int n,num=0;
    node *p0,*head,*p1;
    cin>>n;
    while(n!=-1)
    {

        p0=new node;
        p0->m=n;p0->Next=NULL;
        if(num==0)
            p1=head=p0;
        else {p1->Next=p0;p1=p0;}
        num++;
        cin>>n;
    }
    node *pre,*cur,*next;
    pre=head;
    if(head->Next!=NULL){cur=next=head->Next;pre->Next=NULL;}
    else {cout<<head->m;return 0;}
    while(next->Next!=NULL)
    {
        next=next->Next;
        cur->Next=pre;
        pre=cur;
        cur=next;
    }
    next->Next=pre;
    p1=head=next;
    while(p1!=NULL)
    {
        cout<<p1->m<<" ";
        p1=p1->Next;
    }

}
```

### 101 双链归并

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD101/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿从兵器阁的两个抽屉里各取出一条铁链，每条链上的数字都从小到大排好了。她需要把两条链合并成一条，仍然保持从小到大的顺序。"不能拆开重排，"梁嘉峰说，"两条链都是有序的，你要利用这个特点——从两条链的头部同时开始比较，每次取较小的那个接到结果链的末尾。"赵晴儿拿起两个容器："用一个容器存结果。两个指针分别指向两条链的头部，谁小就取谁，直到一条链取完，再把另一条的剩余全部接上。"

#### 输入

两行，每行若干整数（以-1结尾），分别表示两个有序链表。

#### 输出

合并后的有序链表，空格隔开。

#### 提示

双指针比较合并。一个链表遍历完后，直接接上另一个的剩余部分。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

struct node
{
    int num;
    node *next;
};
int main()
{
    node *head0=NULL,*head1=NULL,*head2=NULL,*p0,*p1,*p2,*p;
    int m,n;
    cin>>m;
    while(m!=-1)
    {
        p0=new node;p0->num=m;p0->next=NULL;
        if(head1==NULL)head1=p1=p0;
        else {
            p1->next=p0;
            p1=p0;
        }
        cin>>m;
    }
        cin>>n;
        while(n!=-1)
    {
        p0=new node;p0->num=n;p0->next=NULL;
        if(head2==NULL)head2=p2=p0;
        else {
            p2->next=p0;
            p2=p0;
        }
        cin>>n;
    }
    if(head1==NULL)head0=head2;
    else if(head2==NULL)head0=head1;
    else {
        p1=head1,p2=head2;
        while(p1!=NULL&&p2!=NULL)
        {
            if(p1->num>=p2->num)
            {
                p0=new node;
                p0->num=p2->num;
                p0->next=NULL;
                if(head0==NULL)
                {
                    head0=p=p0;
                }
                else {
                    p->next=p0;
                    p=p0;
                }
                p2=p2->next;
            }
            else if(p1->num<p2->num)
            {
                p0=new node;
                p0->num=p1->num;
                p0->next=NULL;
                if(head0==NULL)
                {
                    head0=p=p0;
                }   
                else {
                    p->next=p0;
                    p=p0;
                }
                p1=p1->next;
            }
        }
    
        if(p1==NULL)
            p->next=p2;
        else if(p2==NULL)
            p->next=p1;
    }
    p=head0;
    while(p!=NULL)
    {
        cout<<p->num<<" ";
        p=p->next;
    }


}
```

### 102 三元归序

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD102/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

兵器阁的账房先生有一本厚厚的兵器账本，每条记录记着三样东西：兵器编号x、重量y（带两位小数）、兵器名称z。"这本账太乱了，"赵晴儿翻了几页就头疼，"编号不按顺序，同编号的重量也乱排。"梁嘉峰说："先按编号从小到大排，编号相同的再按重量从小到大排。你可以用结构体存每条记录，放进容器里，再自定义排序规则。"

#### 输入

第一行一个整数N。接下来N行，每行两个整数和一个字符串。

#### 输出

排序后的N条记录，每行一条。x输出整数，y输出保留两位小数的浮点数，字符串原样输出，空格隔开。

#### 提示

原题链接定义结构体存储三元组，自定义比较函数：先比x，再比y。

#### 参考代码

```cpp
#include<iostream>
#include<string>
#include<algorithm>
#include<iomanip>
using namespace std;
struct sanyuan
{
    int num;
    double m;
    string str;
};

int main()
{
    int N;
    cin>>N;
    sanyuan s[200]; 
    for(int i=0;i<N;i++)
    {
        cin>>s[i].num>>s[i].m>>s[i].str;
    }
    for(int i=0;i<N-1;i++)
    {
        for(int j=0;j<N-i-1;j++)
        {
            if(s[j].num>s[j+1].num||(s[j].num==s[j+1].num&&s[j].m>s[j+1].m))
            {
                sanyuan temp=s[j];
                s[j]=s[j+1];
                s[j+1]=temp;
            }
        }
    }
    for(int i=0;i<N;i++)
    {
        cout<<s[i].num<<" "<<fixed<<setprecision(2)<<s[i].m<<" "<<s[i].str<<endl;
    }
}
```

### 103 立桩定阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD103/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

试炼场上，弟子们按身高排成一列，但顺序完全乱了。梁嘉峰走过去，随便挑了一个弟子站到中间，然后让所有比他矮的站到左边，比他高的站到右边。"现在左边和右边各自还是乱的，"赵晴儿看出来了。"对。所以对左边和右边各自重复这个过程——挑一个人，矮的左、高的右。每次都能让一个人站到最终位置上，直到每一组只剩一个人。"梁嘉峰说，"这就是快速排序。一剑分两路，递归再出剑。"给定一个长度为 n 的整数数列，请用快速排序将其从小到大排序。

#### 输入

第一行包含整数n。第二行包含n个整数。

#### 输出

一行，n个排好序的整数，空格隔开。

#### 提示

选基准元素，双指针分区：左边 ≤ 基准，右边 > 基准。递归处理左右两半。平均 O(nlogn)。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int a[1000000],n;
void quick_sort(int arr[],int l,int r)
{
    if(l>=r)return;
    int i=l-1,j=r+1,x=arr[(l+r)>>1];
    while(i<j)
    {
        do i++;while(arr[i]<x);
        do j--;while(arr[j]>x);
        if(i<j){swap(arr[i],arr[j]);
        }
    }
    quick_sort(arr,l,j);
    quick_sort(arr,j+1,r);

}

int main()
{
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }   
    quick_sort(a,0,n-1);
    for(int i=0;i<n;i++)
    {
        //if(i!=0)cout<<" ";
        printf("%d ",a[i]);
    }
    return 0;
}
```

### 104 照妖辨品

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD104/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰指着那排弟子："我不需要所有人都排好——只要知道第 K 矮的人是谁。"赵晴儿想了想："还是用刚才的方法：挑一个人站中间，矮的左、高的右。数一数左边有几个人——如果左边刚好有 K-1 个人，那中间那个就是答案。如果左边人比 K-1 多，说明答案在左边，只管左边就行。如果不够，就去右边找第 K-左-1 矮的。""所以快排是把两边都排好，快选只需要管一边。"梁嘉峰点头，"省了一半的力气。"给定一个长度为 n 的整数数列和一个整数 k，求数列中第 k 小的数。

#### 输入

第一行两个整数n和k。第二行n个整数。

#### 输出

一行，第k小的数。

#### 提示

partition 后判断 k 在左半还是右半，只递归一半。平均 O(n)。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int a[1000];
int quick_sort(int arr[],int l,int r,int k)
{
    if(l>=r)return arr[l];
    int i=l-1,j=r+1,x=arr[(l+r)>>1];
    while(i<j)
    {
        do i++;while(x>arr[i]);
        do j--;while(x<arr[j]);
        if(i<j)swap(arr[i],arr[j]);
    }
    int s1=j-l+1;
    if(k<=s1)return quick_sort(arr,l,j,k);
    else return quick_sort(arr,j+1,r,k-s1);
}

int main()
{
    int n,k;
    cin>>n>>k;
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    cout<<quick_sort(a,0,n-1,k)<<endl;
    
}
```

### 105 双剑合阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD105/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿把弟子们两两分成一组，每组内部先按身高排好。然后两组合成一组四人——从两组的排头各看一眼，矮的先出列，依次接上。四人组再两两合并成八人组……梁嘉峰看明白了："快排是先挑基准把人分开，归并是先把人拆到最小单位，再一层层合并上来。""对，"赵晴儿说，"合并时两边都是有序的，所以每次只需要比较排头，O(n)就能合并。拆到底再合上来，总共 O(nlogn)。而且最坏情况也一样——不像快排最坏会退化。"给定一个长度为 n 的整数数列，请用归并排序将其从小到大排序。

#### 输入

第一行包含整数n。第二行包含n个整数。

#### 输出

一行，n个排好序的整数，空格隔开。

#### 提示

递归拆分 → 合并两个有序数组。需要额外空间 O(n)。稳定排序。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int a[1000],temp[1000],n;
void merge_sort(int arr[],int l,int r)
{
    if(l>=r)return;
    int mid=(l+r)>>1;//中间数
    merge_sort(arr,l,mid);
    merge_sort(arr,mid+1,r);
    int i=l,j=mid+1,k=0;
    while(i<=mid&&j<=r)
    {
        if(arr[i]<=arr[j]){
            temp[k]=arr[i];
            i++;
        }
        else {
            temp[k]=arr[j];
            j++;
        }
        k++;
    }
    while(i<=mid)
        {
            temp[k++]=arr[i++];
        }
    while(j<=r)
    {
            temp[k++]=arr[j++];
    }
    for(int i=l,k=0;i<=r;i++,k++)
    {
        arr[i]=temp[k];
    }
}



int main()
{
    cin>>n;
    for(int i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    merge_sort(a,0,n-1);
    for(int i=0;i<n;i++)
    {
        printf("%d ",a[i]);
    }

    return 0;
}
```

### 106 逆流之数

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD106/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

弟子们排成一列，每人身上有一个编号。赵晴儿发现，有些排在前面的人编号反而比后面的大——这就是"逆序对"，说明队伍很乱。"逆序对越多，队伍越乱。"赵晴儿说，"但要一个个比太慢了。有没有 O(nlogn) 的方法？"李少白盯着归并排序看了一会儿，突然开窍："归并的时候，左右两队都是从小到大排好的。从两队的排头开始比较——如果右边的先出列，说明右边这个人比左边队里剩下的所有人都小，那些都是逆序对！""没错。"赵晴儿笑了，"排完序，逆序对也数完了。"给定一个长度为 n 的整数数列，求逆序对的数量。

#### 输入

第一行包含整数n。第二行包含n个整数（1≤n≤100000）。

#### 输出

一行，逆序对的数量。

#### 提示

归并排序过程中，当右边元素先被选中时，左边剩余元素个数就是新增的逆序对数。用 long long 存结果。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
typedef long long LL;
LL n,a[1000000],temp[1000000];

LL merge_sort(LL arr[],LL l,LL r)
{
    if(l>=r)return 0;
    LL mid=l+r>>1,res=0;
    res+=merge_sort(arr,l,mid)+ merge_sort(arr,mid+1,r);
    LL i=l,j=mid+1,k=0;
    while(i<=mid&&j<=r)
    {
        if(arr[i]<=arr[j])
        {
            temp[k++]=arr[i++];
        }
        else if(arr[i]>temp[j])
        {
            temp[k++]=arr[j++];
            res+=mid-i+1;
        }
    }
    while(i<=mid)
    {
        temp[k++]=arr[i++];
    }
    while(j<=r)
    {
        temp[k++]=arr[j++];
    }
    for(int i=l,k=0;i<=r;i++,k++)//为了进一步排序，不可忽略
    {
        arr[i]=temp[k];
    }
   return res;


}

int main()
{
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    cout<<merge_sort(a,0,n-1)<<endl;


}
```

### 107 石壁听风

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD107/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递给李少白一排刻着数字的石块，从左到右从小到大排好了。她问："数字 3 第一次出现在哪块石块上？最后一次出现在哪？"李少白想从头数，但石块有十万块。赵晴儿拦住他："石块是有序的，不用一个个看。先看最中间那块——如果中间的数比 3 大，说明 3 只可能在左半边，右半边不用看了。每次都把范围砍一半，这就是二分。""找第一次出现的位置和最后一次出现的位置，各二分一次。"李少白接话道。"对。如果整个范围里都找不到，就说明没有。"给定一个升序排列的长度为 n 的整数数组和 q 个查询，对每个查询返回目标值的起始位置和终止位置（从0开始），不存在则返回 -1 -1。

#### 输入

第一行两个整数n和q。第二行n个整数（升序）。第三行q个待查询的整数。

#### 输出

每行两个整数，起始位置和终止位置。不存在输出-1 -1。

#### 提示

两次二分：找第一个 ≥ x 的位置（左边界），找最后一个 ≤ x 的位置（右边界）。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
int a[20000],n,q,j;

void search(int m)
{
    for(int i=0;i<n;i++)
    {
        if(a[i]==m)
        {
            j=i;
            cout<<i<<" ";
            while(a[j]==m)
            {
                j++;
            }
            if(j==i)cout<<i;
            else cout<<j-1<<endl;
            break;
        }
        else if(i==n-1)
        {
            cout<<-1<<" "<<-1<<endl;
        }
    }

}

int main()
{
    int m;
    cin>>n>>q;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(int i=0;i<q;i++)
    {
        cin>>m;
        search(m);
    }

}
```

### 108 剑指方根

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD108/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上写下一个数 n："求它的三次方根。"李少白试了几个整数，立方后不是太大就是太小。赵晴儿说："别猜了。三次方根一定在 -10000 到 10000 之间。你取中间值试试——如果中间值的立方比 n 大，说明真正的答案在左半边；比 n 小，就在右半边。范围不断缩小，直到精度足够。""和整数二分一样的思路，"李少白说，"只不过这次找的不是一个确切的位置，而是一个足够精确的浮点数。""对。整数二分停在某个整数上，浮点二分停在精度达标时。"给定一个浮点数 n，求它的三次方根。

#### 输入

一个浮点数n（-10000≤n≤10000）。

#### 输出

n的三次方根，保留6位小数。

#### 提示

浮点二分：left=-10000, right=10000，while(right-left>1e-8)，mid=(left+right)/2。若 mid³≥n，right=mid；否则 left=mid。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<cmath>
#include<iomanip>
using namespace std;


int main(){
    double n;
    double mid;
    cin>>n;
    double left=-10000,right=10000;
    while(right-left>1e-8)
    {
        mid=(left+right)/2;
        if(pow(mid,3)>=n)
            right=mid;
        else left=mid;
    }
    cout<<fixed<<setprecision(6)<<mid<<endl;
}
```

### 109 铁壁识痕

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD109/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

精铸阁的墙壁上嵌着一排铁板，每块铁板上用二进制刻着一个数——有凹痕的地方是1，平整的地方是0。赵晴儿递给李少白一串数字："每块铁板上有几道凹痕？数出来。"李少白想逐位检查。赵晴儿教他一个窍门："用位运算——n & 1 看最低位是不是1，然后 n >>= 1 右移一位，继续看下一位。数完所有位，就知道有几道凹痕了。"给定 n 个整数，输出每个数的二进制表示中有多少个1。

#### 输入

第一行一个整数n。第二行n个整数（1≤n≤100000）。

#### 输出

一行，每个数对应的1的个数，空格隔开。

#### 提示

位运算：while(n > 0) { count += n & 1; n >>= 1; }。或用 n & (n-1) 消去最低位的1，计数更快。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int main()
{
    int m,n;
    cin>>m;
    while(m--){
        cin>>n;
        int count=0;
        while(n>0)
        {
            count+=n&1;
            n>>=1;
        }
        cout<<count<<" ";
    }
}
```

### 110 万钧合一

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD110/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

精铸阁中，赵晴儿递来两块铁牌，上面各刻着一个巨大的数字——长到普通变量根本装不下。"这两个数要加起来，"赵晴儿说，"但没有那么大的容器。怎么办？"李少白想了想："像竖式加法一样，把每一位拆开，用数组存。从最低位开始逐位相加，满十进一。""对。这就是高精度加法——用数组模拟竖式。"给定两个正整数，计算它们的和。每个数不超过 100000 位。

#### 输入

两行，每行一个正整数（不超过100000位）。

#### 输出

一行，两数之和。

#### 提示

用数组存每一位（倒序），从低位到高位逐位相加，处理进位。最后倒序输出。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<string>
#include<cstring>
#include<algorithm>
#include<vector>
using namespace std;
typedef long long LL;

vector<int>add(vector<int> &A,vector<int>&B)
{
    vector<int>C;
    for(int i=0,t=0;i<A.size()||i<B.size()||t;i++)
    {
        if(i<A.size())t+=A[i];
        if(i<B.size())t+=B[i];
        C.push_back(t%10);
        t/=10;
    }
    return C;
}

void print(vector<int>A)
{
    for(int i=A.size()-1;i>=0;i--)
        cout<<A[i];
    cout<<endl;
}

int main()
{
    string a,b;
    cin>>a>>b;
    vector<int>A,B;

    for(int i=a.size()-1;i>=0;i--)
    {
        A.push_back(a[i]-'0');
    }
    for(int i=b.size()-1;i>=0;i--)
    {
        B.push_back(b[i]-'0');
    }

    print(add(A,B));

}
```

### 111 削铁如泥

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD111/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰递给李少白两块铁牌："这次是减法。大数减大数，注意借位。"李少白接过一看，两个数都很长。他先比较了大小——如果被减数比减数小，结果就是负数，先交换再算。"像竖式减法一样，从最低位开始，不够减就向高位借1。"梁嘉峰说，"削铁如泥，一刃一刃来。"给定两个正整数，计算它们的差（结果可能为负数）。每个数不超过 100000 位。

#### 输入

两行，每行一个正整数（不超过100000位）。

#### 输出

一行，两数之差。

#### 提示

先判断大小，大减小，从低位逐位减，处理借位。如果被减数小则结果加负号。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<cstring>
#include<string>
#include<algorithm>
#include<vector>
using namespace std;

string a,b;

void compare(vector<int>&A,vector<int>&B)
{
    if(A.size()<B.size())swap(A,B);
    else if(A.size()==B.size())
    {
        int i=A.size()-1;
        while(i>=0&&A[i]==B[i])i--;
        if(A[i]<B[i])swap(A,B);
    }
}

vector<int> sub(vector<int>&A,vector<int>&B)
{
    vector<int>C;
    int t=0;
    for(int i=0;i<A.size();i++)
    {
        t+=A[i];
        if(i<B.size())t-=B[i];
        C.push_back((t+10)%10);
        if(t<0)t=-1;
        else t=0;
    }
    while(!C.back())C.pop_back();
    return C;
}

void print(vector<int> A)
{
    for(int i=A.size()-1;i>=0;i--)
    {
        cout<<A[i];
    }
}
int main()
{
    cin>>a>>b;
    vector<int>A,B;
    int len1=a.length(),len2=b.length();
    for(int i=len1-1;i>=0;i--)
    {
        A.push_back(a[i]-'0');
    }
    for(int i=len2-1;i>=0;i--)
    {
        B.push_back(b[i]-'0');
    }

    compare(A,B);
    print(sub(A,B));
    cout<<endl;
    return 0;
}
```

### 112 叠甲千层

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD112/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递来一块刻着万位数的铁牌和一个小铁块："大数乘以小数。铁牌上的每一位都要乘以小铁块的数，再处理进位——就像叠甲，一层压一层。"李少白从铁牌的最低位开始，逐位乘以小数，加上前一位的进位，本位留下余数，进位带到下一位。给定一个大正整数 A 和一个小正整数 B，计算 A × B。A 不超过 100000 位，B 不超过 10000。

#### 输入

两行，第一行正整数A（不超过100000位），第二行正整数B（不超过10000）。

#### 输出

一行，A×B的结果。

#### 提示

高精度×低精度：大数每一位乘以小数，处理进位。注意结果可能有前导零需要去掉。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<algorithm>
#include<string>
#include<vector>

using namespace std;

string a,b;

vector<int> mul(vector<int>&A,vector<int>&B)
{
    vector<int>C(A.size()+B.size());
    for(int i=0;i<A.size();i++)
    {
        for(int j=0;j<B.size();j++)
        {
            C[i+j]+=A[i]*B[j];
        }
    }
    for(int i=0,t=0;i<C.size();i++)
    {
        t+=C[i];
        C[i]=t%10;
        t/=10;
    }
    while(C.back()==0&&C.size()>1)C.pop_back();
    return C;
}

void print(vector<int>A)
{
    for(int i=A.size()-1;i>=0;i--)
        cout<<A[i];
}

int main()
{
    cin>>a>>b;
    vector<int>A,B;
    for(int i=a.size()-1;i>=0;i--)
    {
        A.push_back(a[i]-'0');
    }
    for(int i=b.size()-1;i>=0;i--)
    {
        B.push_back(b[i]-'0');
    }

    print(mul(A,B));

    return 0;
}
```

### 113 分金断玉

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD113/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰拿起一把锉刀："大数除以小数——分金断玉，从高位一刀一刀切。""从最高位开始，"赵晴儿解释，"当前余数乘10加上当前位，除以除数得到商的一位，剩下的余数带到下一位。和竖式除法一模一样。"给定一个大非负整数 A 和一个小正整数 B，计算 A ÷ B 的商和余数。A 不超过 100000 位，B 不超过 10000。

#### 输入

两行，第一行非负整数A（不超过100000位），第二行正整数B（B≠0）。

#### 输出

两行，第一行商，第二行余数。

#### 提示

高精度÷低精度：从高位到低位，当前余数×10+当前位，除以B得商的一位，更新余数。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<string>
#include<algorithm>
#include<vector>

using namespace std;

string a;
int b,m;
vector<int>div(vector<int>&A,int b)
{
    vector<int>C(A.size()-to_string(b).length());
    int t=0;
    for(int i=0;i<A.size();i++)
    {
        t*=10;
        t+=A[i];
        C.push_back(t/b);
        t%=b;
    }
    m=t;
    while(C.front()==0&&C.size()>1)C.erase(C.begin()); 
    return C;
}

void print(vector<int>A)
{

    for(int i=0;i<A.size();i++)
    {
        cout<<A[i];
    }
    cout<<endl;
    cout<<m<<endl;
}

int main()
{
    cin>>a>>b;
    vector<int>A;
    for(int i=0;i<a.size();i++)
    {
        A.push_back(a[i]-'0');
    }
    print(div(A,b));

    return 0;
}
```

### 114 双剑求和

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD114/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递给李少白两排有序的铁牌，每排上的数字从小到大排列。她说："从两排铁牌中各取一块，使它们的数字之和刚好等于一个目标值。"李少白想暴力枚举，但每排都有十万块。赵晴儿说："两排都是有序的——第一个指针从第一排的头部开始，第二个指针从第二排的尾部开始。如果和太大，第二个指针往左移；和太小，第一个指针往右移。两个指针配合，一次遍历就够了。"给定两个升序数组 A 和 B，以及目标值 x，找出满足 A[i] + B[j] = x 的数对 (i, j)。保证有唯一解。

#### 输入

第一行两个整数n和m。第二行n个整数。第三行m个整数。

#### 输出

一行，两个整数i和j。

#### 提示

双指针：i 从 A 的头，j 从 B 的尾。A[i]+B[j] < x 则 i++，> x 则 j--。O(n+m)。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<string>

using namespace std;

int a[100001],b[100001];
int n,m,k;
int main()
{
    cin>>n>>m>>k;
    for(int i=0;i<n;i++)cin>>a[i];
    for(int i=0;i<m;i++)cin>>b[i];

    int i=0,j=m-1,t=a[i]+b[j];

    while(t!=k)
    {
        if(t<k)i++;
        else if(t>k)j--;
        t=a[i]+b[j];
    }
    cout<<i<<" "<<j;
}
```

### 115 双剑验序

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD115/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿拿着两卷竹简，上面各写着一串数字。她问："第二卷的内容是不是第一卷的子序列？子序列不要求连续，但必须保持原有次序。"李少白用两个指针："一个指针遍历第一卷，另一个指向第二卷。如果当前字符匹配，第二卷的指针就往前走。最后看第二卷的指针有没有走到头——走到头就说明全部匹配上了。""对，两个指针各走一遍，O(n)。"给定序列 a（长度 n）和序列 b（长度 m），判断 a 是否为 b 的子序列。

#### 输入

第一行两个整数n和m。第二行n个整数（序列a）。第三行m个整数（序列b）。

#### 输出

是子序列输出Yes，否则输出No。

#### 提示

双指针：i 遍历 a，j 遍历 b。a[i] == b[j] 时 i++。i 到头说明是子序列。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<string>

using namespace std;

int main()
{
    int n,m;
    int a[100001],b[100001];
    cin>>n>>m;
    for(int i=0;i<n;i++)cin>>a[i];
    for(int i=0;i<m;i++)cin>>b[i];

    int i=0,j=0;

    while(j<m)
    {
        if(a[i]==b[j])
        {
            i++,j++;
        }
        else j++;
    }
    if(i==n)cout<<"Yes"<<endl;
    else cout<<"No"<<endl;

    return 0;
}
```

### 116 无重之最

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD116/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在沙盘上摆了一排石块，每块上刻着一个数字。他问："从这排石块中，找出最长的一段——这段里每个数字都不重复。"李少白想从头遍历每一段，但石块有十万块。赵晴儿教他："用两个指针，一左一右，框住一段区间。右指针往右扩展，遇到重复数字就收缩左指针，直到区间内没有重复。每一步都更新最大长度。""两个指针各走各的，总共只走一遍——O(n)。"给定一个长度为 n 的整数序列，找出最长的不含重复数字的连续子序列，输出其长度。

#### 输入

第一行一个整数n。第二行n个整数（1≤n≤100000）。

#### 输出

一行，最长连续不重复子序列的长度。

#### 提示

滑动窗口：右指针扩展，用哈希表判断是否重复，重复则左指针收缩。O(n)。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int n;
    int a[100001];
    vector<int>b;
    cin>>n;
    for(int i=0;i<n;i++)cin>>a[i];
    vector<int>v;
    int t=0;
    for(int i=0;i<n;i++)//1 2 4 2 5 6 7是：5
    {

        if(find(v.begin(),v.end(),a[i])==v.end()){
            t++;
            v.push_back(a[i]);
        }
        else {
            b.push_back(t);
            t=0;
            v.erase(v.begin(), find(v.begin(),v.end(),a[i])+1); 
            v.push_back(a[i]);
            t=v.size();
        }
    }b.push_back(t);
    sort(b.begin(),b.end());
    cout<<b.back();
}
```

### 117 独剑无双

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD117/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

藏剑阁深处，梁嘉峰领着李少白走进一间密室。墙上挂满了剑，每把剑柄上都刻着一个数字。"这些剑，成双成对，唯有一把是独一无二的。"梁嘉峰说，"你能在 O(1) 额外空间内找出它吗？"李少白想用哈希表记录每把剑出现的次数。赵晴儿摇头："空间不够。想想异或的性质——a ^ a = 0，a ^ 0 = a。成对的剑异或后消失，留下的就是独剑。"给定 n 个整数，其中只有一个数出现了一次，其余数都恰好出现了两次。找出那个只出现一次的数。要求时间复杂度 O(n)，空间复杂度 O(1)。

#### 输入

第一行一个整数 n（n 为奇数，1 ≤ n ≤ 100000）。第二行 n 个整数，每个数在 int 范围内。

#### 输出

一行，只出现一次的那个数。

#### 提示

原题链接异或性质：a^a=0, a^0=a。所有数异或，成对消失，独者现身。O(n) 时间，O(1) 空间。

#### 参考代码

```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int a[100001];
    vector<int>b;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
        if(find(b.begin(),b.end(),a[i])==b.end())b.push_back(a[i]);
        else b.erase(find(b.begin(),b.end(),a[i]));
    }

    for(int i=0;i<b.size();i++)
        if(b[i]!=0){
            cout<<b[i];break;
        }
}
```

### 118 剑招收放

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD118/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

剑道宗大殿前，十八般兵器陈列两旁。梁嘉峰指着 n 把剑说："每一把，你可以选择施展（选）或收起（不选）。列出所有可能的剑招组合。"李少白问："n 把剑有 2^n 种组合，怎么枚举？"赵晴儿递来一张纸："递归。对于每把剑，先试'选'，再试'不选'。走到尽头就输出当前组合。"给定 n，输出 1~n 的所有非空子集。同一行内的数必须升序排列，相邻两个数之间用空格隔开。各行（不同方案）之间的顺序任意。

#### 输入

一行一个整数 n（1 ≤ n ≤ 16）。

#### 输出

每行一个子集，子集内数字升序排列，子集之间按字典序排列。空集不输出。

#### 提示

原题链接递归枚举：对每个位置选或不选，到达边界输出。2^n 种组合。

#### 参考代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;if(!(cin>>n))return 0;
for(int mask=1;mask<(1<<n);mask++){bool first=true;for(int i=0;i<n;i++)if(mask>>i&1){if(!first)cout<<' ';first=false;cout<<i+1;}cout<<"\n";}}
```

### 119 剑阵组合

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD119/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

练武场上，梁嘉峰递给李少白 n 把剑，说："从中选出 k 把，列出所有选法。"李少白问："这和子集枚举有什么区别？"赵晴儿说："子集枚举是选任意数量，组合枚举是恰好选 k 个。多了一个约束——必须选满 k 个才能输出。但递归框架类似，只是多了一个剪枝。"给定 n 和 k，按字典序输出从 1~n 中选 k 个数的所有组合。每个组合内数字升序排列。

#### 输入

一行两个整数 n 和 k（1 ≤ k ≤ n ≤ 16）。

#### 输出

每行 k 个数（升序），组合之间按字典序排列。

#### 提示

原题链接递归枚举，每次从上一个数+1开始。剪枝：剩余数字不够则提前返回。C(n,k) 种组合。

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int n,m;
const int N=100;
int arr[N];
bool st[N];
void dfs(int u,int start)//多一个start方便判断
{
    if(u>m)
    {
        for(int i=1;i<=m;i++)
        {
            if(i!=1)cout<<" ";
            cout<<arr[i];
        }
        cout<<endl;
    }
    else {
        for(int i=start;i<=n;i++)
        {
            if(!st[i])
            {
                arr[u]=i;
                st[i]=true;
                dfs(u+1,i+1);
                arr[u]=0;
                st[i]=false;
            }
        }
    }

}


int main()
{
    cin>>n>>m;
    dfs(1,1);
    return 0;
}
```

### 120 江湖真假

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD120/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

江湖之中，n 位高手各立门派。有人传言："甲和乙是同门师兄弟。"又有人说："丙能打败丁。"梁嘉峰说："江湖中，同类不吃同类。但吃的关系是传递的——甲吃乙、乙吃丙，则甲也吃丙。"赵晴儿教他："用带权并查集。每个节点到根的距离 mod 3 表示关系：距离 0 是同类，距离 1 能吃根，距离 2 被根吃。"给定 n 个人和 m 条关系声明，判断有多少条是假的（与前面的真话矛盾）。

#### 输入

第一行两个整数 n 和 m（1 ≤ n ≤ 50000, 1 ≤ m ≤ 100000）。接下来 m 行，每行三个整数 d x y。d=1 表示同类，d=2 表示 x 吃 y。

#### 输出

一行，假话的数量。

#### 提示

原题链接带权并查集。节点到根距离 mod 3：0=同类，1=吃根，2=被根吃。路径压缩时更新距离。

#### 参考代码

```cpp
#include<iostream>
#include<string>

using namespace std;

int parent[50005], dist[50005];

int find(int x)
{
    if(parent[x] == x) return x;
    int t = parent[x];
    int root = find(t);
    dist[x] = (dist[x] + dist[t]) % 3;
    parent[x] = root;
    return root;
}

int main()
{
    int n, m;
    cin >> n >> m;
    
    for(int i = 1; i <= n; i++)
    {
        parent[i] = i;
        dist[i] = 0;
    }
    
    int ans = 0;
    
    for(int i = 0; i < m; i++)
    {
        int d, x, y;
        cin >> d >> x >> y;
        
        if(x > n || y > n)
        {
            ans++;
            continue;
        }
        
        int rx = find(x);
        int ry = find(y);
        
        if(d == 1)
        {
            if(rx == ry)
            {
                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 0) ans++;
            }
            else
            {
                parent[rx] = ry;
                dist[rx] = ((dist[y] - dist[x]) % 3 + 3) % 3;
            }
        }
        else
        {
            if(rx == ry)
            {
                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 1) ans++;
            }
            else
            {
                parent[rx] = ry;
                dist[rx] = ((dist[y] - dist[x] + 1) % 3 + 3) % 3;
            }
        }
    }
    
    cout << ans << endl;
    
    return 0;
}
```

### 121 蓄势之术

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD121/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

蓄势阁中，赵晴儿盘膝而坐，面前摆着一排石块，每块上刻着一个数字。"如果我问你第3块到第7块的总和，你怎么算？"赵晴儿问。李少白："从第3块加到第7块，五次加法。""如果问一千次呢？"赵晴儿摇头，"每次从头算太浪费了。提前算好从第1块到每一块的累积和——第1块到第7块的和减去第1块到第2块的和，就是第3块到第7块的和。一次减法就够了。""这就是前缀和——蓄势于前，取用于后。"给定一个长度为 n 的整数序列和 m 个查询，每个查询求 [l, r] 的区间和。

#### 输入

第一行两个整数n和m。接下来n行每行两个整数x和c。接下来m行每行两个整数l和r。

#### 输出

m行，每行一个整数。

#### 提示

前缀和：s[i] = a[1] + ... + a[i]。区间和 = s[r] - s[l-1]。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;

int n,m,ss=0;
int l,r;
int a[100001],s[100001];
int main()
{
    cin>>n>>m;
    for(int i=1;i<=n;i++){
        cin>>a[i];
        ss+=a[i];
        s[i]=ss;
    }
    while(cin>>l&&cin>>r)
    {
        cout<<s[r]-s[l-1];
        cout<<endl;
    }

}
```

### 122 方阵蓄势

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD122/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画了一个 n 行 m 列的数字矩阵。"如果我问你左上角 (x1,y1) 到右下角 (x2,y2) 这个子矩阵里所有数的和，你怎么算？"李少白想逐行累加。赵晴儿摇头："太慢了。和一维前缀和一样的思路——提前算好从 (1,1) 到每个位置的累积和。查询时用容斥原理：大矩形减去左边和上边的多余部分，加上左上角多减的部分。""蓄势蓄到二维，一击覆盖任意子矩阵。"给定一个 n×m 的整数矩阵和 q 个查询，每个查询求子矩阵的和。

#### 输入

第一行一个整数n（1≤n≤100000）。接下来n行每行两个整数l和r。

#### 输出

q行，每行一个整数，表示每次查询的子矩阵和。

#### 提示

二维前缀和+容斥。子矩阵和 = s[x2][y2] - s[x1-1][y2] - s[x2][y1-1] + s[x1-1][y1-1]。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
//测试样例有问题
int main()
{
    int n,m,q;
    int x1,y1,x2,y2;
    int a[1001][1001],s[1001][1001],ss=0;
    cin>>n>>m>>q;
    for(int i=1;i<=n;i++)
        for(int j=1;j<=m;j++)
        {
            cin>>a[i][j];
            s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + a[i][j];
            //ss+=a[i][j];
            //s[i][j]=ss;
        }
    while(q--)
    {
        cin>>x1>>y1>>x2>>y2;
        cout<<s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]<<endl;
    }




}
```

### 123 差分之术

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD123/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着一排石块："我要把第3块到第7块每块都加上5。如果一块块改，太慢了。"梁嘉峰说："差分——前缀和的逆运算。你在第3块的位置加5，在第8块的位置减5。最后对整排求一次前缀和，第3到第7块就都加了5，其余不变。""就像往水面扔两块石头，"李少白恍然大悟，"波纹叠加后就是最终结果。"给定一个长度为 n 的整数序列和 m 个操作，每个操作将 [l, r] 的每个数加 c。输出所有操作后的序列。

#### 输入

第一行两个整数n和m。第二行n个整数。接下来m行每行两个整数l和r。

#### 输出

一行，n个整数，空格隔开，表示经过m次操作后的最终序列。

#### 提示

差分：b[l] += c, b[r+1] -= c。所有操作完成后，对 b 求前缀和得到最终序列。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
// 测试样例有误
int n,m,ss=0,num;
int l,r;
int a[100001],s[100001];
int main()
{
    cin>>n>>m;//差分
    for(int i=1;i<=n;i++){
        cin>>a[i];
        s[i]=a[i]-a[i-1];
    }
    while(m--)
    {
        cin>>l>>r>>num;
        s[l]+=num,s[r+1]-=num;
    }
    for(int i=1;i<=n;i++)
    {
        a[i]=a[i-1]+s[i];
        cout<<a[i]<<" ";
    }
    cout<<endl;
    return 0;

}
```

### 124 方阵差分

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD124/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画了一个 n 行 m 列的矩阵："我要把左上角 (x1,y1) 到右下角 (x2,y2) 这个子矩阵里每个数都加上 c。"梁嘉峰说："和一维差分一样的思路——在差分矩阵的四个角加减，最后对整个矩阵求一次二维前缀和，就还原出最终结果了。""蓄势蓄到二维，差分也能覆盖任意子矩阵。"给定一个 n×m 的整数矩阵和 q 个操作，每个操作将子矩阵的每个元素加 c。输出所有操作后的矩阵。

#### 输入

第一行三个整数n、m和q。接下来n行每行m个整数。接下来q行每行四个整数x1、y1、x2、y2。

#### 输出

n行，每行m个整数，表示操作后的矩阵。

#### 提示

二维差分：在四个角加减，最后求二维前缀和。原题链接

#### 参考代码

```cpp
#include<iostream>
using namespace std;
//题目出错
int main()
{
    int n,m,q;
    int a[1001][1001]={0},s[1001][1001]={0},sum=0;
    cin>>n>>m>>q;
    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=m;j++)
        {
            cin>>a[i][j];
            
        }
    }
    int x1,y1,x2,y2,c;
    while(q--)
    {
        cin>>x1>>y1>>x2>>y2>>c;
        s[x1][y1] += c;
        if(y2 + 1 <= m) s[x1][y2 + 1] -= c;
        if(x2 + 1 <= n) s[x2 + 1][y1] -= c;
        if(x2 + 1 <= n && y2 + 1 <= m) s[x2 + 1][y2 + 1] += c;
    }
    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<=m;j++)
        {
           s[i][j] += s[i-1][j] + s[i][j-1] - s[i-1][j-1];
            a[i][j] += s[i][j];
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
}
```

### 125 离散聚力

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD125/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着一条无限长的数轴："坐标从负无穷到正无穷，但真正有值的位置只有几个。如果开一个那么大的数组，太浪费了。""所以要把这些稀疏的大坐标映射到连续的小下标上——这就是离散化。"梁嘉峰接话，"映射之后再用前缀和，就能 O(1) 回答区间求和的查询。""先聚力于有用之处，再一击命中。"假定有一个无限长的数轴，初始每个坐标上都是0。先进行 n 次操作，每次将位置 x 上的数加 c。然后进行 m 次查询，每次求区间 [l, r] 的和。

#### 输入

第一行两个整数n和m。第二行n个整数。接下来m行每行三个整数l、r和c。

#### 输出

m行，每行一个整数，表示每次查询的结果。

#### 提示

离散化：排序去重后映射到连续下标。用前缀和回答区间查询。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;
    
    vector<pair<int, int>> add;  // 存储加操作 (位置, 加的值)
    vector<pair<int, int>> query; // 存储查询 (l, r)
    vector<int> alls;            // 所有需要离散化的坐标
    
    // 读入 n 次加操作
    for(int i = 0; i < n; i++)
    {
        int x, c;
        cin >> x >> c;
        add.push_back({x, c});
        alls.push_back(x);
    }
    
    // 读入 m 次查询
    for(int i = 0; i < m; i++)
    {
        int l, r;
        cin >> l >> r;
        query.push_back({l, r});
        alls.push_back(l);
        alls.push_back(r);
    }
    
    // 排序去重
    sort(alls.begin(), alls.end());
    alls.erase(unique(alls.begin(), alls.end()), alls.end());
    
    // 离散化后的数组
    vector<int> a(alls.size() + 1, 0);
    
    // 处理加操作
    for(auto p : add)
    {
        int x = p.first;
        int c = p.second;
        int idx = lower_bound(alls.begin(), alls.end(), x) - alls.begin() + 1;
        a[idx] += c;
    }
    
    // 计算前缀和
    vector<long long> prefix(alls.size() + 1, 0);
    for(int i = 1; i <= alls.size(); i++)
    {
        prefix[i] = prefix[i-1] + a[i];
    }
    
    // 处理查询
    for(auto q : query)
    {
        int l = q.first;
        int r = q.second;
        int left = lower_bound(alls.begin(), alls.end(), l) - alls.begin() + 1;
        int right = lower_bound(alls.begin(), alls.end(), r) - alls.begin() + 1;
        cout << prefix[right] - prefix[left - 1] << endl;
    }
    
    return 0;
}
```

### 126 合围归阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD126/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在地上画了一堆区间，有些重叠，有些相邻。"把这些区间合并——有交集的归为一组，最后数一数有几组。"赵晴儿蹲下来看了一会儿："先按左端点从小到大排。然后从左往右扫——如果当前区间的左端点在前一个区间内，说明它们重叠，合并；否则新开一组。""合围之势，聚散有序。"给定 n 个区间，合并所有有交集的区间（端点相交也算），输出合并后的区间个数。

#### 输入

第一行包含整数n，表示区间个数。接下来n行，每行包含两个整数l和r，表示一个区间的左右端点。

#### 输出

一个整数，表示合并后的区间个数。

#### 提示

按左端点排序，遍历合并：当前区间左端点 ≤ 前一个右端点则合并，否则新开。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<algorithm>
using namespace std;
//贪心算法
struct Node 
{ 
    int l, r; 
};

bool cmp(Node a, Node b) 
{ 
    return a.l < b.l; 
}

int main() {
    int n;
    cin >> n;
    if (n == 0) { cout << 0; return 0; }
    Node a[5000];
    for (int i = 0; i < n; i++) cin >> a[i].l >> a[i].r;
    sort(a, a + n, cmp);
    int cnt = 1, curR = a[0].r;
    for (int i = 1; i < n; i++) {
        if (a[i].l <= curR) curR = max(curR, a[i].r);
        else { cnt++; curR = a[i].r; }
    }
    cout << cnt;
    return 0;
}
```

### 127 一箭穿心

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD127/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在数轴上标了 N 个区间，每个区间表示一个敌人的巡逻范围。"用最少的暗器，让每个敌人的巡逻范围里至少中一枚。"李少白想每个区间放一枚。赵晴儿摇头："贪心——按右端点从小到大排。第一枚暗器射在第一个区间的右端点，这样所有包含这个点的区间都中了。然后跳过这些区间，再射下一批。""选右端点是因为它最'靠左'——能覆盖尽可能多的后续区间。"给定 N 个闭区间，选择尽量少的点，使得每个区间内至少有一个点。

#### 输入

第一行一个整数N（1≤N≤100000）。接下来N行每行两个整数a和b。

#### 输出

一行，最少需要的点数。

#### 提示

按右端点排序，每次选当前区间的右端点，跳过所有包含该点的区间。原题链接

#### 参考代码

```cpp

#include <bits/stdc++.h>
using namespace std;
typedef pair<int,int> PII;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n; if(!(cin>>n)) return 0;
    vector<PII> segs;
    for(int i=0;i<n;i++){
        int l,r; cin>>l>>r;
        segs.push_back({r,l});
    }
    sort(segs.begin(),segs.end());
    int res=0, ed=-2e9;
    for(auto seg:segs){
        if(seg.second>ed){
            res++;
            ed=seg.first;
        }
    }
    cout<<res<<"\n";
}
```

### 128 合果成堆

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD128/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

果园里有 N 堆果子，每堆重量不同。赵晴儿要把它们合并成一堆，每次只能合并两堆，消耗的能量等于两堆重量之和。"如果先合并重的，后面每次合并都要带着这堆重的走，代价越来越大。"赵晴儿说，"所以反过来——每次选最轻的两堆合并，这样每一步的代价都最小。"李少白想到用小根堆："每次取出堆顶（最轻的两堆），合并后放回去。总代价最小。"这就是哈夫曼树的思想。有 N 堆果子，每次合并两堆（代价为两堆之和），求合并为一堆的最小总代价。

#### 输入

第一行一个整数N（1≤N≤10000）。第二行N个整数，表示每堆的重量。

#### 输出

一行，最小总代价。

#### 提示

小根堆：每次取最小的两个合并，结果放回堆中。O(nlogn)。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int N,x,temp=0;
    vector<int>a;//容器用于存放数据
    cin>>N;
    for(int i=0;i<N;i++)
    {
        cin>>x;
        a.push_back(x);
    }
    while(N!=1)//每次排序然后最小的两个元素相加代价最小
    {
        sort(a.begin(),a.end());
        a[1]=a[0]+a[1];
        temp+=a[1];
        a.erase(a.begin());//相加完删除第一项
        N--;

    }
    cout<<temp<<endl;

}
```

### 129 中位之选

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD129/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

数轴上有 N 个商铺，赵晴儿要建一个货仓，让所有商铺到货仓的货物运输距离之和最小。"选在哪里？"李少白问。"排序后取中位数。"赵晴儿说，"数学可以证明：中位数使绝对偏差之和最小。如果选在中位数左边，右边的商铺距离全部变远；选在中位数右边，左边的商铺距离全部变远。只有中位数是平衡点。"给定 N 个点的坐标，求一个位置使所有点到该位置的绝对距离之和最小，输出最小距离之和。

#### 输入

第一行一个整数N（1≤N≤100000）。第二行N个整数，表示各点坐标。

#### 输出

一行，最小距离之和。

#### 提示

排序后取中位数（下标 n/2），计算所有点到中位数的距离之和。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<algorithm>
using namespace std;
//排序后取中位数（下标 n/2），计算所有点到中位数的距离之和
int main()
{
    int a[100001],l=0;//l用于计数
    int N,mid;
    cin>>N;
    for(int i=0;i<N;i++)cin>>a[i];
    sort(a,a+N);
    mid=N/2;//mid为中位数
    for(int i=0;i<N;i++)
    {
        l+=abs(a[mid]-a[i]);//距离要取绝对值
    }
    cout<<l<<endl;


}
```

### 130 铁链串珠

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD130/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

兵器阁的深处，梁嘉峰指着一条铁链："这条链上每颗珠子存着一个值，每颗珠子还指着下一颗——这就是链表。""用数组模拟链表：head指向第一颗珠子，val[]存每颗珠子的值，ne[]存下一颗珠子的下标。插入、删除都只需要改指针，O(1)。"赵晴儿说："链表的好处是插入删除快，代价是不能随机访问。"实现一个单链表，支持在头部插入、在第k个插入的元素后面插入、删除第k个插入的元素前面的元素。

#### 输入

若干行操作命令：H x（头部插入x）、I k x（在第k个插入的元素后插入x）、D k（删除第k个插入的元素前面的元素）。

#### 输出

输出最终链表，从头到尾空格隔开。

#### 提示

数组模拟链表：head, val[], ne[]。插入：新节点的ne指向原next，前驱的ne指向新节点。原题链接

#### 参考代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);
int m;if(!(cin>>m))return 0;vector<int>e(m+5),ne(m+5);int head=-1,idx=0;auto add_head=[&](int x){e[idx]=x;ne[idx]=head;head=idx++;};auto add=[&](int k,int x){e[idx]=x;ne[idx]=ne[k];ne[k]=idx++;};auto del=[&](int k){if(k==-1)head=ne[head];else ne[k]=ne[ne[k]];};
while(m--){char op;cin>>op;if(op=='H'){int x;cin>>x;add_head(x);}else if(op=='I'){int k,x;cin>>k>>x;add(k-1,x);}else{int k;cin>>k;if(k==0)del(-1);else del(k-1);}}
for(int i=head;i!=-1;i=ne[i])cout<<e[i]<<' ';cout<<"\n";}
```

### 131 叠石成塔

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD131/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在墙角堆了一摞石块："栈——后进先出。只能从顶部放石块，也只能从顶部取。"赵晴儿指着石块："push是放石块到顶部，pop是取走顶部的石块，query是看看顶部那块刻着什么数。""生活中到处是栈——叠盘子、摞书、函数调用。"实现一个栈，支持push、pop、query、empty操作。

#### 输入

若干行操作命令：push x（入栈）、pop（出栈）、query（查询栈顶）、empty（判断栈是否为空）。

#### 输出

对每个query和empty操作输出一行结果。其中query输出栈顶元素，empty输出YES或NO。

#### 提示

数组模拟栈：tt指向栈顶。push: st[++tt]=x。pop: tt--。query: st[tt]。empty: 判断tt是否为0。原题链接

#### 参考代码

```cpp
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
```

### 132 列阵待命

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD132/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着一排队列："队列——先进先出。新来的站队尾，走的从队头走。"梁嘉峰说："push是从队尾加入，pop是从队头弹出，query是看队头是谁。""排队买饭、消息队列、BFS——都是队列。"实现一个队列，支持push、pop、query、empty操作。

#### 输入

若干行操作命令：push x（入队）、pop（出队）、query（查询队头）、empty（判断队列是否为空）。

#### 输出

对每个query和empty操作输出一行结果。其中query输出队头元素，empty输出YES或NO。

#### 提示

数组模拟队列：hh队头，tt队尾。push: q[++tt]=x。pop: hh++。query: q[hh]。empty: 判断hh是否大于tt。原题链接

#### 参考代码

```cpp
#include <iostream>
#include<string>
using namespace std;

const int N = 100010; 
int st[N], tt = -1,hh=0;    // tt 指向栈顶元素位置为-1，hh指向头为0

int main() {
    int n, x;
    string op;
    cin >> n;
    
    while (n--) {
        cin >> op;
        if (op == "push") {
            cin >> x;
            st[++tt] = x;  
        } 
        else if (op == "pop") {
            hh++; 
        } 
        else if (op == "query") {
            cout << st[hh] << endl;
        } 
        else if (op == "empty") {
            if (tt<hh) cout << "YES" << endl;
            else cout << "NO" << endl;
        }
    }
    return 0;
}
```

### 133 算筹求值

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD133/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿递来一个算式："3 + 4 * 2 - ( 1 + 5 )。算出结果。"梁嘉峰拿出两个盒子："数字盒和符号盒。遇到数字放数字盒。遇到符号——如果比栈顶符号优先级低，就把栈顶符号和两个数字算掉。遇到左括号直接放，遇到右括号一直算到左括号。""用两个栈——数字栈和运算符栈，按优先级处理。"给定一个包含 +、-、*、/、(、) 的表达式，求值。

#### 输入

一行包含+、-、*、/、(、)和整数的表达式。

#### 输出

一行，表达式的值。

#### 提示

双栈法：数字栈+运算符栈。比较优先级决定是否先算栈顶。原题链接

#### 参考代码

```cpp
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
```

### 134 一山更比

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD134/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰指着一排山峰："每座山往左看，找到第一座比自己矮的山。"赵晴儿说："用一个栈维护'还没找到更矮山'的山峰——从左往右扫，遇到更矮的山，栈里比它高的全部弹出，它们的答案就是这座山。""栈里永远是单调递增的——所以叫单调栈。"给定一个整数序列，对每个元素找到它左边第一个比它小的数。

#### 输入

第一行一个整数n。第二行n个整数。

#### 输出

一行，每个元素左边第一个比它小的数，不存在输出-1。

#### 提示

单调栈：遍历时弹出比当前大的元素，栈顶就是答案。维护单调递增栈。原题链接

#### 参考代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){ios::sync_with_stdio(false);cin.tie(nullptr);
int n;if(!(cin>>n))return 0;vector<int>st;for(int i=0;i<n;i++){int x;cin>>x;while(!st.empty()&&st.back()>=x)st.pop_back();if(i)cout<<' ';cout<<(st.empty()?-1:st.back());st.push_back(x);}cout<<"\n";}
```

### 135 窗移镜照

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD135/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在沙盘上画了一排数字，用一个框框住其中k个："这个框每往右移一格，告诉我框里的最小值和最大值。"梁嘉峰说："用单调队列——维护一个单调递增的队列。窗口移动时，队头如果过期就弹出；新元素入队时，把队尾比它大的全部弹出。队头永远是当前窗口的最小值。"赵晴儿又说："反过来，维护一个单调递减的队列，队头就是每个窗口的最大值。""一扇窗户移过整排数字，镜中映出最小与最大。"给定一个长度为 n 的整数序列和窗口大小 k，求每个窗口内的最小值和最大值。

#### 输入

第一行两个整数n和k（窗口大小）。第二行n个整数。

#### 输出

第一行输出每个窗口的最小值，空格隔开。第二行输出每个窗口的最大值，空格隔开。

#### 提示

单调队列：维护递增队列求最小值，维护递减队列求最大值。窗口滑动时弹出过期元素。原题链接

#### 参考代码

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=1000010;
int a[N],q[N];
int main(){
    ios::sync_with_stdio(false); cin.tie(nullptr);
    int n,k; if(!(cin>>n>>k)) return 0;
    for(int i=0;i<n;i++) cin>>a[i];
    int hh=0,tt=-1;
    for(int i=0;i<n;i++){
        if(hh<=tt && i-k+1>q[hh]) hh++;
        while(hh<=tt && a[q[tt]]>=a[i]) tt--;
        q[++tt]=i;
        if(i>=k-1) cout<<a[q[hh]]<<' ';
    }
    cout<<"\n";
    hh=0,tt=-1;
    for(int i=0;i<n;i++){
        if(hh<=tt && i-k+1>q[hh]) hh++;
        while(hh<=tt && a[q[tt]]<=a[i]) tt--;
        q[++tt]=i;
        if(i>=k-1) cout<<a[q[hh]]<<' ';
    }
    cout<<"\n";
}
```

### 136 剑谱寻踪

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD136/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿拿着一本剑谱："在这本厚厚的剑谱里找一段特定的剑招序列——模式串在文本串中出现了几次？分别在哪里？"李少白想一个个比对，但剑谱有十万字。梁嘉峰说："KMP算法——先预处理模式串，算出每个位置的next数组（最长相等前后缀）。匹配时利用next跳转，不用回退文本指针。O(n+m)。"在文本串中查找模式串的所有出现位置。

#### 输入

第一行一个整数n（模式串长度）。第二行模式串。第三行一个整数m（文本串长度）。第四行文本串。

#### 输出

一行，模式串在文本串中所有出现的起始位置（从0开始），空格隔开。

#### 提示

KMP：预处理next数组（最长相等前后缀），匹配时利用next跳转。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int n, m;
    string pattern, text;
    
    cin >> n >> pattern;
    cin >> m >> text;
    
    // 计算next数组
    vector<int> next(n, 0);
    for (int i = 1, j = 0; i < n; i++) {
        while (j > 0 && pattern[i] != pattern[j]) {
            j = next[j - 1];
        }
        if (pattern[i] == pattern[j]) {
            j++;
        }
        next[i] = j;
    }
    
    // KMP匹配
    vector<int> positions;
    for (int i = 0, j = 0; i < m; i++) {
        while (j > 0 && text[i] != pattern[j]) {
            j = next[j - 1];
        }
        if (text[i] == pattern[j]) {
            j++;
        }
        if (j == n) {
            positions.push_back(i - n + 1); // 匹配起始位置
            j = next[j - 1]; // 继续寻找下一个匹配
        }
    }
    
    // 输出结果
    for (int i = 0; i < positions.size(); i++) {
        cout << positions[i] << (i == positions.size() - 1 ? '\n' : ' ');
    }
    
    return 0;
}
```

### 137 堆石成丘

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD137/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰在地上堆了一座小丘："堆——一种特殊的完全二叉树。父节点的值永远比子节点小（小根堆）。"赵晴儿说："用数组存——父节点i的子节点是2i和2i+1。插入时上浮，删除时下沉。支持插入、取最小值、删除最小值、删除任意元素、修改任意元素。"实现一个小根堆，支持插入、删除第k个插入的元素、修改第k个插入的元素、查询最小值、删除最小值。

#### 输入

若干行操作命令：I x（插入x）、PM（查询最小值）、DM（删除最小值）、D k（删除第k个插入的元素）、C k x（修改第k个插入的数为x）。

#### 输出

对每个PM操作输出一行最小值。

#### 提示

数组模拟堆：上浮和下沉操作。父节点i的子节点是2i和2i+1。维护ph[]和hp[]数组记录插入顺序与堆中位置的映射。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;
//测试点有问题
const int N = 100010;
int h[N], ph[N], hp[N], sz = 0, idx = 0;

void heap_swap(int a, int b) {
    swap(ph[hp[a]], ph[hp[b]]);
    swap(hp[a], hp[b]);
    swap(h[a], h[b]);
}

void up(int u) {
    while (u / 2 && h[u] < h[u / 2]) {
        heap_swap(u, u / 2);
        u /= 2;
    }
}

void down(int u) {
    int t = u;
    if (u * 2 <= sz && h[u * 2] < h[t]) t = u * 2;
    if (u * 2 + 1 <= sz && h[u * 2 + 1] < h[t]) t = u * 2 + 1;
    if (t != u) {
        heap_swap(u, t);
        down(t);
    }
}

int main() {
    int n;
    cin >> n;
    
    while (n--) {
        string op;
        cin >> op;
        
        if (op == "I") {
            int x;
            cin >> x;
            idx++;
            sz++;
            ph[idx] = sz;
            hp[sz] = idx;
            h[sz] = x;
            up(sz);
        } 
        else if (op == "PM") {
            cout << h[1] << endl;
        } 
        else if (op == "DM") {
            heap_swap(1, sz);
            sz--;
            down(1);
        } 
        else if (op == "D") {
            int k;
            cin >> k;
            int pos = ph[k];
            heap_swap(pos, sz);
            sz--;
            down(pos);
            up(pos);
        } 
        else if (op == "C") {
            int k, x;
            cin >> k >> x;
            int pos = ph[k];
            h[pos] = x;
            down(pos);
            up(pos);
        }
    }
    
    return 0;
}
```

### 138 合帮并派

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD138/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

江湖上有N个门派，每个弟子属于一个门派。赵晴儿问："两个弟子是不是同门？"梁嘉峰说："用并查集——合并两个门派用union，查询两个人是否同门用find。路径压缩后几乎O(1)。"给定N个元素和M个操作：合并两个集合，或查询两个元素是否在同一集合。

#### 输入

第一行两个整数N和M。接下来M行，每行M 1 a b（合并a和b所在集合）或Q a b（查询a和b是否同属一个集合）。

#### 输出

对每个Q操作输出一行Yes或No。

#### 提示

并查集：find时路径压缩，union时合并两棵树。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 100010;
int p[N];

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) p[i] = i;
    
    while (m--) {
        char op;
        int a, b;
        cin >> op >> a >> b;
        
        if (op == 'M') {
            int pa = find(a), pb = find(b);
            if (pa != pb) p[pa] = pb;
        } else if (op == 'Q') {
            if (find(a) == find(b)) cout << "Yes" << endl;
            else cout << "No" << endl;
        }
    }
    
    return 0;
}
```

### 139 门派计数

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD139/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在并查集的基础上问："每个门派有多少人？"梁嘉峰说："在合并时，把一个门派的人数加到另一个上。查询时直接读人数。"给定N个元素和M个操作：合并两个集合（C a b），查询两个元素是否在同一集合（Q1 a b），或查询某个元素所在集合的大小（Q2 a）。

#### 输入

第一行两个整数N和M。接下来M行，每行C a b（合并a和b所在集合）、Q1 a b（查询a和b是否在同一集合）、或Q2 a（查询a所在集合的大小）。

#### 输出

对每个Q1操作输出Yes或No；对每个Q2操作输出一行集合大小。

#### 提示

维护size[]数组，合并时更新size。用C a b合并，Q1 a b查是否同集，Q2 a查集合大小。原题链接

#### 参考代码

```cpp
#include <bits/stdc++.h>
using namespace std;
int p[100010], sz[100010];
int findp(int x){ return p[x]==x?x:p[x]=findp(p[x]); }
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n,m;
    if(!(cin>>n>>m)) return 0;
    for(int i=1;i<=n;i++) p[i]=i, sz[i]=1;
    while(m--){
        string op; int a,b;
        cin >> op;
        if(op=="C"){
            cin >> a >> b;
            int ra=findp(a), rb=findp(b);
            if(ra!=rb){ p[ra]=rb; sz[rb]+=sz[ra]; }
        }else if(op=="Q1"){
            cin >> a >> b;
            cout << (findp(a)==findp(b) ? "Yes" : "No") << "\n";
        }else{
            cin >> a;
            cout << sz[findp(a)] << "\n";
        }
    }
}
```

### 140 三界相克

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD140/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰说："A吃B，B吃C，C吃A——三种动物形成环形食物链。给你N个动物和K句话，判断哪些话是假的。"赵晴儿解释："扩展并查集——每个动物拆成三个节点，分别表示'A是A'、'A是B的食物'、'A是C的食物'。用模3的关系判断真假。"给定N个动物和K句话，判断假话数量。

#### 输入

第一行两个整数N和K。接下来K行，每行两个整数x y z（x=1表示y和z同类，x=2表示y吃z）。

#### 输出

一行，假话的数量。

#### 提示

扩展并查集：每个点拆成3个，模3判断关系。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int N = 150010;
int p[N];

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main() {
    int n, k;
    cin >> n >> k;
    
    for (int i = 1; i <= 3 * n; i++) p[i] = i;
    
    int ans = 0;
    
    while (k--) {
        int op, x, y;
        cin >> op >> x >> y;
        
        if (x > n || y > n) {
            ans++;
            continue;
        }
        
        if (op == 1) {
            // x和y是同类
            if (find(x) == find(y + n) || find(x) == find(y + 2 * n)) {
                ans++;
            } else {
                p[find(x)] = find(y);
                p[find(x + n)] = find(y + n);
                p[find(x + 2 * n)] = find(y + 2 * n);
            }
        } else {
            // x吃y
            if (x == y || find(x) == find(y) || find(x) == find(y + 2 * n)) {
                ans++;
            } else {
                p[find(x)] = find(y + n);
                p[find(x + n)] = find(y + 2 * n);
                p[find(x + 2 * n)] = find(y);
            }
        }
    }
    
    cout << ans << endl;
    
    return 0;
}
```

### 141 雾中排阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD141/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

迷雾弥漫的林间小径上，梁嘉峰递给李少白n枚令牌："按字典序列出1到n的所有排列。每步选一个没用过的令牌，选完所有就回头换一个——这就是DFS回溯。"给定整数n，按字典序输出1到n的所有全排列。

#### 输入

一个整数n（1≤n≤9）。

#### 输出

每行一个排列，数字之间空格隔开，按字典序输出。

#### 提示

DFS+回溯：选→递归→撤销。用used[]标记。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstdio>

using namespace std;

const int N = 10;

int n;
int path[N];       // 从0到n-1共n个位置 存放一个排列
bool state[N];     // 存放每个数字的使用状态 true表示使用了 false表示没使用过

void dfs(int u)
{
    if (u == n)    // 一个排列填充完成
    {
        for (int i = 0; i < n; i ++) printf("%d ",path[i]);  // 注意格式 别忘了每两个数字间用空格隔开
        puts("");  // 相当于输出一个回车
        return;
    }

    for (int i = 1; i <= n; i ++)
    {
        if (!state[i])
        {
            path[u] = i;       // 把 i 填入数字排列的位置上
            state[i] = true;   // 表示该数字用过了 不能再用
            dfs(u + 1);        // 这个位置的数填好 递归到右面一个位置
            state[i] = false;  // 恢复现场 该数字后续可用
        }
    }
    // for 循环全部结束了 dfs(u)才全部完成 回溯

    return;        // 可写可不写
}

int main()
{
    scanf("%d", &n);

    dfs(0);    // 在path[0]处开始填数

    return 0;
}

//作者：EvanMe
//链接：https://www.acwing.com/file_system/file/content/whole/index/content/3758356/
//来源：AcWing
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 142 棋盘布后

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD142/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着一个n×n的棋盘："放n个皇后，不能同行、同列、同对角线。有多少种放法？"李少白逐行放置，用三个布尔数组标记列和对角线。"每行选一个安全的位置放皇后，递归下一行。冲突就回退。"给定n，求n皇后的所有解。

#### 输入

一个整数n。

#### 输出

所有解，每个解n行（Q表示皇后，.表示空），解之间空行。

#### 提示

DFS+回溯：逐行放置，标记列和两条对角线。原题链接

#### 参考代码

```cpp
#include <iostream>
using namespace std;

const int N = 20;
int n;
char board[N][N];
bool col[N], dg[N], udg[N]; // 列、主对角线、副对角线

// 逐行放置皇后，r为当前行
void dfs(int r) {
    if (r == n) {
        // 输出解
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << board[i][j];
            }
            cout << '\n';
        }
        cout << '\n'; // 解之间空行
        return;
    }

    for (int c = 0; c < n; c++) {
        // r+c相同→同一主对角线，r-c+n相同→同一副对角线
        if (!col[c] && !dg[r + c] && !udg[r - c + n]) {
            col[c] = dg[r + c] = udg[r - c + n] = true;
            board[r][c] = 'Q';
            dfs(r + 1);
            board[r][c] = '.';
            col[c] = dg[r + c] = udg[r - c + n] = false;
        }
    }
}

int main() {
    cin >> n;
    // 初始化棋盘
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            board[i][j] = '.';
        }
    }
    dfs(0);
    return 0;
}
```

### 143 迷宫寻路

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD143/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

石墙围成的迷宫，入口在左上角，出口在右下角。赵晴儿问："最短路径有多长？"梁嘉峰说："BFS——从入口开始，一层一层向外扩展。第一次到达出口时，层数就是最短路径。"给定一个n×m的迷宫（0可走，1是墙），求最短路径长度。

#### 输入

第一行两个整数n和m。接下来n行每行m个整数（0可走，1是墙）。

#### 输出

一行，最短路径长度。不可达输出-1。

#### 提示

BFS层序遍历，第一次到达终点就是最短路径。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <queue>
using namespace std;

const int N = 1010;
int g[N][N], dist[N][N];
int n, m;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

int bfs() {
    queue<pair<int, int>> q;
    q.push({0, 0});
    dist[0][0] = 0;
    
    while (!q.empty()) {
        auto t = q.front();
        q.pop();
        
        int x = t.first, y = t.second;
        
        if (x == n - 1 && y == m - 1) {
            return dist[x][y];
        }
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && g[nx][ny] == 0 && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx, ny});
            }
        }
    }
    
    return -1;
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> g[i][j];
            dist[i][j] = -1;
        }
    }
    
    cout << bfs() << endl;
    
    return 0;
}
```

### 144 八码迷局

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD144/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

迷雾中出现一个3×3数字拼盘，有一个空格。赵晴儿说："从初始状态移到目标状态，最少几步？每次只能把空格和相邻数字交换。"梁嘉峰说："BFS+状态压缩——把整个拼盘编码成一个字符串，每次移动生成新状态，用哈希表判重。"给定初始状态和目标状态，求最少移动步数。

#### 输入

两行，每行9个字符（3×3拼盘，x表示空格）。第一行初始状态，第二行目标状态。

#### 输出

一行，最少移动步数。无解输出-1。

#### 提示

BFS+状态编码为字符串，哈希表判重。原题链接

#### 参考代码

```python
from collections import deque
import sys
lines = sys.stdin.read().strip().split(chr(10))
out = []
i = 0
while i < len(lines):
    if not lines[i].strip(): i += 1; continue
    s = ''.join(lines[i].split())
    t = ''.join(lines[i+1].split()) if i+1 < len(lines) else '12345678x'
    i += 2
    if s == t: out.append('0'); continue
    # Check solvability (inversion count parity)
    inv_s = sum(1 for a in range(9) for b in range(a+1,9) if s[a]!='x' and s[b]!='x' and s[a]>s[b])
    inv_t = sum(1 for a in range(9) for b in range(a+1,9) if t[a]!='x' and t[b]!='x' and t[a]>t[b])
    if (inv_s % 2) != (inv_t % 2):
        out.append('-1'); continue
    d = {s: 0}
    q = deque([s])
    ans = -1
    while q and ans == -1:
        cur = q.popleft()
        k = cur.index('x')
        x, y = k // 3, k % 3
        for dx, dy in [(-1,0),(0,1),(1,0),(0,-1)]:
            nx, ny = x + dx, y + dy
            if 0 <= nx < 3 and 0 <= ny < 3:
                nk = nx * 3 + ny
                ns = list(cur)
                ns[k], ns[nk] = ns[nk], ns[k]
                ns = ''.join(ns)
                if ns == t: ans = d[cur] + 1; break
                if ns not in d: d[ns] = d[cur] + 1; q.append(ns)
    out.append(str(ans))
print(chr(10).join(out))
```

### 145 古树重心

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD145/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

迷踪林深处有一棵大树。梁嘉峰说："找到它的重心——删除后最大子树最小的那个节点。"赵晴儿说："DFS遍历树，对每个节点计算：删掉它后，最大子树有多少个节点。取最小的那个。"给定一棵树，求其重心和最大子树的最小大小。

#### 输入

第一行一个整数n。接下来n-1行每行两个整数表示一条边。

#### 输出

一行，最大子树的最小大小。

#### 提示

DFS遍历树，计算每个节点的最大子树大小。重心=max(n-subSize, 各子树size)最小的节点。原题链接

#### 参考代码

```python
#include <iostream>
#include <algorithm>
#include <cstring>

using namespace std;

const int N = 1e5 + 10; //数据范围是10的5次方
const int M = 2 * N; //以有向图的格式存储无向图，所以每个节点至多对应2n-2条边

int h[N]; //邻接表存储树，有n个节点，所以需要n个队列头节点
int e[M]; //存储元素
int ne[M]; //存储列表的next值
int idx; //单链表指针
int n; //题目所给的输入，n个节点
int ans = N; //表示重心的所有的子树中，最大的子树的结点数目

bool st[N]; //记录节点是否被访问过，访问过则标记为true

//a所对应的单链表中插入b  a作为根 
void add(int a, int b) {
    e[idx] = b, ne[idx] = h[a], h[a] = idx++;
}

// dfs 框架
/*
void dfs(int u){
    st[u]=true; // 标记一下，记录为已经被搜索过了，下面进行搜索过程
    for(int i=h[u];i!=-1;i=ne[i]){
        int j=e[i];
        if(!st[j]) {
            dfs(j);
        }
    }
}
*/

//返回以u为根的子树中节点的个数，包括u节点
int dfs(int u) {
    int res = 0; //存储 删掉某个节点之后，最大的连通子图节点数
    st[u] = true; //标记访问过u节点
    int sum = 1; //存储 以u为根的树 的节点数, 包括u，如图中的4号节点

    //访问u的每个子节点
    for (int i = h[u]; i != -1; i = ne[i]) {
        int j = e[i];
        //因为每个节点的编号都是不一样的，所以 用编号为下标 来标记是否被访问过
        if (!st[j]) {
            int s = dfs(j);  // u节点的单棵子树节点数 如图中的size值
            res = max(res, s); // 记录最大联通子图的节点数
            sum += s; //以j为根的树 的节点数
        }
    }

    //n-sum 如图中的n-size值，不包括根节点4；
    res = max(res, n - sum); // 选择u节点为重心，最大的 连通子图节点数
    ans = min(res, ans); //遍历过的假设重心中，最小的最大联通子图的 节点数
    return sum;
}

int main() {
    memset(h, -1, sizeof h); //初始化h数组 -1表示尾节点
    cin >> n; //表示树的结点数

    // 题目接下来会输入，n-1行数据，
    // 树中是不存在环的，对于有n个节点的树，必定是n-1条边
    for (int i = 0; i < n - 1; i++) {
        int a, b;
        cin >> a >> b;
        add(a, b), add(b, a); //无向图
    }

    dfs(1); //可以任意选定一个节点开始 u<=n

    cout << ans << endl;

    return 0;
}

// 作者：松鼠爱葡萄
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/542619/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 146 城池层递

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD146/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

城际连横。赵晴儿铺开城池图："城池之间有道路相连。从城1出发，到每个城池的最短距离是多少？"梁嘉峰说："BFS——从城1开始，每层扩展一步。第一次到达的城池，层数就是最短距离。"给定一个有向图和起点1，求每个点到起点的最短距离。

#### 输入

第一行两个整数n和m。接下来m行每行两个整数a b表示一条有向边。

#### 输出

一行，n个整数表示每个点到点1的最短距离，不可达输出-1。

#### 提示

BFS层序遍历，每层距离+1。原题链接

#### 参考代码

```cpp
#include<bits/stdc++.h>
using namespace std;

const int N = 100010;

int n, m;
int h[N], e[N], ne[N], idx;
int d[N];

void add(int a, int b){
    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;
}

int bfs(){//宽搜遍历
    memset(d, -1, sizeof d);

    queue<int> q;
    d[1] = 0;//第一格需要0步
    q.push(1);//放入队列

    while (q.size()){//循环遍历整个队列
        int t = q.front();
        q.pop();

        for (int i = h[t]; i != -1; i = ne[i]){
            int j = e[i];//获取当前值
            if (d[j] == -1){//未走过
                d[j] = d[t] + 1;//等于上一个点加1步
                q.push(j);//放入队列
            }
        }
    }

    return d[n];//返回n号点所需的步数
}

int main(){
    scanf("%d%d", &n, &m);
    memset(h, -1, sizeof h);

    for (int i = 0; i < m; i ++ ){
        int a, b;
        scanf("%d%d", &a, &b);
        add(a, b);//单项连接(有向图)
    }

    cout << bfs() << endl;

    return 0;
}

// 作者：Lucky_Three
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/9655978/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 147 拓扑之序

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD147/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

城际连横。赵晴儿铺开城池图："城池之间有方向道路。排出一个合法的建设顺序——每条道路都是从先建的城池指向后建的。"梁嘉峰说："拓扑排序——找入度为0的点，输出后删除它的出边，再找下一个入度为0的点。如果有环，就不可能全部输出。"给定一个有向图，输出拓扑序。有环则输出-1。

#### 输入

第一行两个整数n和m。接下来m行每行两个整数a b表示一条有向边。

#### 输出

一行，拓扑序，空格隔开。有环输出-1。

#### 提示

BFS+入度维护。有环则无解。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int N = 100010;
vector<int> g[N];
int d[N];
int n, m;

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        d[b]++;
    }
    
    queue<int> q;
    for (int i = 1; i <= n; i++) {
        if (d[i] == 0) {
            q.push(i);
        }
    }
    
    vector<int> ans;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        ans.push_back(u);
        
        for (int i = 0; i < g[u].size(); i++) {
            int v = g[u][i];
            d[v]--;
            if (d[v] == 0) {
                q.push(v);
            }
        }
    }
    
    if (ans.size() != n) {
        cout << -1 << endl;
    } else {
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << (i == ans.size() - 1 ? '\n' : ' ');
        }
    }
    
    return 0;
}
```

### 148 近者先行

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD148/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿在城池图上标了距离："从城1出发，到每个城池的最短距离是多少？边权都是正数。"梁嘉峰说："朴素Dijkstra——每次选未访问的最近点，用它更新邻居的距离。选过的点不再更新。"给定一个带权有向图和起点，求到每个点的最短距离。

#### 输入

第一行两个整数n和m。接下来m行每行三个整数a b w表示一条从a到b的权为w的有向边。

#### 输出

一行，n个整数表示到点1的最短距离。

#### 提示

Dijkstra：O(n²)。每次选最近未访问点，更新邻居。原题链接

#### 参考代码

```cpp
#include <cstring>
#include <iostream>
#include <algorithm>
#include <queue>//堆的头文件

using namespace std;

typedef pair<int, int> PII;//堆里存储距离和节点编号

const int N = 1e6 + 10;

int n, m;//节点数量和边数
int h[N], w[N], e[N], ne[N], idx;//邻接表存储图
int dist[N];//存储距离
bool st[N];//存储状态

void add(int a, int b, int c)
{
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;
}

int dijkstra()
{
    memset(dist, 0x3f, sizeof dist);//距离初始化为无穷大
    dist[1] = 0;
    priority_queue<PII, vector<PII>, greater<PII>> heap;//小根堆
    heap.push({0, 1});//插入距离和节点编号

    while (heap.size())
    {
        auto t = heap.top();//取距离源点最近的点
        heap.pop();

        int ver = t.second, distance = t.first;//ver:节点编号，distance:源点距离ver 的距离

        if (st[ver]) continue;//如果距离已经确定，则跳过该点
        st[ver] = true;

        for (int i = h[ver]; i != -1; i = ne[i])//更新ver所指向的节点距离
        {
            int j = e[i];
            if (dist[j] > dist[ver] + w[i])
            {
                dist[j] = dist[ver] + w[i];
                heap.push({dist[j], j});//距离变小，则入堆
            }
        }
    }

    if (dist[n] == 0x3f3f3f3f) return -1;
    return dist[n];
}

int main()
{
    scanf("%d%d", &n, &m);

    memset(h, -1, sizeof h);
    while (m -- )
    {
        int a, b, c;
        scanf("%d%d%d", &a, &b, &c);
        add(a, b, c);
    }

    cout << dijkstra() << endl;

    return 0;
}

//参考yxc

// 作者：Hasity
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/1906644/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 149 堆中取近

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD149/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

"点很多，边很少。用堆优化Dijkstra——用小根堆代替遍历找最近点。"赵晴儿说，"每次从堆顶取最近的未访问点。"给定一个带权有向图和起点，求到每个点的最短距离。边数远小于点数的平方。

#### 输入

第一行两个整数n和m。接下来m行每行三个整数a b w。

#### 输出

一行，到点1的最短距离。

#### 提示

堆优化Dijkstra：O(mlogn)。用小根堆取最近点。原题链接

#### 参考代码

```cpp
#include<iostream>
#include<cstring>
#include<cstdio>
#include<algorithm>

using namespace std;

const int N = 510, M = 100010;

int g[N][N], dist[N];
bool visited[N];

int n, m;

int dijkstra()
{
    memset(dist, 0x3f, sizeof(dist));
    dist[1] = 0;
    for(int i = 1; i <= n; i++)
    {
        int t = -1;
        for(int j = 1; j <= n; j++)
        {
            if(!visited[j] && (t == -1 || dist[j] < dist[t]))
                t = j;
        }
        visited[t] = true;
        for(int j = 1; j <= n; j++)
            dist[j] = min(dist[j], dist[t] + g[t][j]);
    }
    if(dist[n] == 0x3f3f3f3f) return -1;
    return dist[n];
}

int main()
{
    scanf("%d%d", &n, &m);

    memset(g, 0x3f, sizeof(g));
    while (m--)
    {
        int x, y, c;
        scanf("%d%d%d", &x, &y, &c);
        g[x][y] = min(g[x][y], c);
    }
    cout << dijkstra() << endl;
    return 0;
}

// 作者：optimjie
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/154643/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 150 队中松弛

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD150/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着图上的负权边："Dijkstra处理不了负权边。用SPFA——BFS+松弛。把待更新的点放入队列，每次取一个点，用它更新邻居。邻居变短了就入队。"给定一个可能有负权边的图，求最短距离。

#### 输入

第一行两个整数n和m。接下来m行每行三个整数a b w（w可为负）。

#### 输出

一行，到点1的最短距离。

#### 提示

SPFA：队列优化Bellman-Ford。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

const int N = 100010;
int h[N], e[N], w[N], ne[N], idx;//邻接表，存储图
int st[N];//标记顶点是不是在队列中
int dist[N];//保存最短路径的值
int q[N], hh, tt = -1;//队列

void add(int a, int b, int c){//图中添加边和边的端点
    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx++;
}

void spfa(){
    q[++tt] = 1;//从1号顶点开始松弛，1号顶点入队
    dist[1] = 0;//1号到1号的距离为 0
    st[1] = 1;//1号顶点在队列中
    while(tt >= hh){//不断进行松弛
        int a = q[hh++];//取对头记作a，进行松弛
        st[a] = 0;//取完队头后，a不在队列中了
        for(int i = h[a]; i != -1; i = ne[i])//遍历所有和a相连的点
        {
            int b = e[i], c = w[i];//获得和a相连的点和边
            if(dist[b] > dist[a] + c){//如果可以距离变得更短，则更新距离

                dist[b] = dist[a] + c;//更新距离

                if(!st[b]){//如果没在队列中
                    q[++tt] = b;//入队
                    st[b] = 1;//打标记
                }
            }
        }
    }
}
int main(){
    memset(h, -1, sizeof h);//初始化邻接表
    memset(dist, 0x3f, sizeof dist);//初始化距离
    int n, m;//保存点的数量和边的数量
    cin >> n >> m;
    for(int i = 0; i < m; i++){//读入每条边和边的端点
        int a, b, w;
        cin >> a >> b >> w;
        add(a, b, w);//加入到邻接表
    }
    spfa();
    if(dist[n] == 0x3f3f3f3f )//如果到n点的距离是无穷，则不能到达 
        cout << "impossible";
    else cout << dist[n];//否则能到达，输出距离
    return 0;
}

// 作者：Hasity
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/4486341/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 151 万径归一

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD151/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰铺开全图："多源最短路——任意两点之间的最短距离。Floyd算法：三重循环，dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])。"给定一个带权图，求任意两点之间的最短距离。

#### 输入

第一行三个整数n、m和q。接下来m行每行三个整数a b w。接下来q行每行两个整数a b。

#### 输出

q行，每行一个整数。不可达输出impossible。

#### 提示

Floyd：O(n³)。三重循环枚举中间点。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 210;
const int INF = 0x3f3f3f3f;
int d[N][N];
int n, m, q;

int main() {
    cin >> n >> m >> q;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == j) d[i][j] = 0;
            else d[i][j] = INF;
        }
    }
    
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        d[a][b] = min(d[a][b], w);
    }
    
    for (int k = 1; k <= n; k++) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (d[i][k] != INF && d[k][j] != INF) {
                    d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
                }
            }
        }
    }
    
    while (q--) {
        int a, b;
        cin >> a >> b;
        if (d[a][b] == INF) cout << "impossible" << endl;
        else cout << d[a][b] << endl;
    }
    
    return 0;
}
```

### 152 蔓延成网

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD152/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着散落的城池："用最少的路把所有城池连起来，总路长最短。"梁嘉峰说："Prim算法——类似Dijkstra，每次选离已连通部分最近的未加入点，把那条边加入生成树。"给定一个带权无向图，求最小生成树的总权值。

#### 输入

第一行两个整数n和m。接下来m行每行三个整数a b w。

#### 输出

一行，最小生成树的总权值。不连通输出impossible。

#### 提示

Prim：O(n²)。每次选最近未加入点。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 510;
const int INF = 0x3f3f3f3f;
int g[N][N];
int dist[N];
bool st[N];
int n, m;

int prim() {
    memset(dist, 0x3f, sizeof(dist));
    int res = 0;
    
    for (int i = 0; i < n; i++) {
        int t = -1;
        for (int j = 1; j <= n; j++) {
            if (!st[j] && (t == -1 || dist[t] > dist[j])) {
                t = j;
            }
        }
        
        if (i && dist[t] == INF) return -1;
        
        if (i) res += dist[t];
        st[t] = true;
        
        for (int j = 1; j <= n; j++) {
            if (dist[j] > g[t][j]) {
                dist[j] = g[t][j];
            }
        }
    }
    
    return res;
}

int main() {
    cin >> n >> m;
    
    memset(g, 0x3f, sizeof(g));
    
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        g[a][b] = g[b][a] = min(g[a][b], w);
    }
    
    int ans = prim();
    
    if (ans == -1) cout << "impossible" << endl;
    else cout << ans << endl;
    
    return 0;
}
```

### 153 逐边成林

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD153/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

梁嘉峰说："Kruskal——按边权从小到大排序，逐条加入。如果这条边的两个端点已经在同一连通块里（用并查集判断），就跳过；否则加入。"给定一个带权无向图，求最小生成树的总权值。

#### 输入

第一行两个整数n和m。接下来m行每行三个整数a b w。

#### 输出

一行，最小生成树的总权值。不连通输出impossible。

#### 提示

Kruskal：O(mlogm)。按边权排序，并查集判环。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

const int N = 100010;
const int M = 200010;
int p[N];
int n, m;

struct Edge {
    int a, b, w;
    bool operator< (const Edge &W) const {
        return w < W.w;
    }
} edges[M];

int find(int x) {
    if (p[x] != x) p[x] = find(p[x]);
    return p[x];
}

int main() {
    cin >> n >> m;
    
    for (int i = 1; i <= n; i++) p[i] = i;
    
    for (int i = 0; i < m; i++) {
        int a, b, w;
        cin >> a >> b >> w;
        edges[i] = {a, b, w};
    }
    
    sort(edges, edges + m);
    
    int res = 0, cnt = 0;
    
    for (int i = 0; i < m; i++) {
        int a = edges[i].a, b = edges[i].b, w = edges[i].w;
        int pa = find(a), pb = find(b);
        
        if (pa != pb) {
            p[pa] = pb;
            res += w;
            cnt++;
        }
    }
    
    if (cnt < n - 1) cout << "impossible" << endl;
    else cout << res << endl;
    
    return 0;
}
```

### 154 二色分界

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD154/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

赵晴儿指着一个图："能不能把所有点分成两组，同组之间没有直接相连的边？"梁嘉峰说："染色法——从任意点开始，染红色；它的邻居染蓝色；邻居的邻居染红色……如果某个点需要同时染两种颜色，就不是二分图。"给定一个无向图，判断是否是二分图。

#### 输入

第一行两个整数n和m。接下来m行每行两个整数a b。

#### 输出

一行，Yes或No。

#### 提示

BFS/DFS染色，冲突则不是二分图。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 100010;
vector<int> g[N];
int color[N];
int n, m;

bool dfs(int u, int c) {
    color[u] = c;
    
    for (int i = 0; i < g[u].size(); i++) {
        int v = g[u][i];
        if (!color[v]) {
            if (!dfs(v, 3 - c)) return false;
        } else if (color[v] == c) {
            return false;
        }
    }
    
    return true;
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int a, b;
        cin >> a >> b;
        g[a].push_back(b);
        g[b].push_back(a);
    }
    
    bool flag = true;
    for (int i = 1; i <= n; i++) {
        if (!color[i]) {
            if (!dfs(i, 1)) {
                flag = false;
                break;
            }
        }
    }
    
    if (flag) cout << "Yes" << endl;
    else cout << "No" << endl;
    
    return 0;
}
```

### 155 一剑一鞘

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD155/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山脚下，试剑台前。西域刀客赫连铁拔出背上唯一的刀鞘，鞘中却藏着N柄短刀，每柄有重量和锋芒。刀鞘容量有限——选哪些刀，才能让锋芒之和最大？李少白拔剑上前。梁嘉峰低声道："每柄刀只能选一次——01背包。逆序遍历容量，dp[j] = max(dp[j], dp[j-v]+w)。"李少白深吸一口气，提笔写下。赫连铁看了答案，缓缓点头："第一关，过了。"

#### 输入

第一行两个整数N和V。接下来N行每行两个整数v和w。

#### 输出

一行，最大价值。

#### 提示

01背包：dp[j] = max(dp[j], dp[j-v[i]]+w[i])，逆序遍历j。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 1010;
int f[N];
int n, m;

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        int v, w;
        cin >> v >> w;
        for (int j = m; j >= v; j--) {
            f[j] = max(f[j], f[j - v] + w);
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}
```

### 156 无穷剑阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD156/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

第二阵。铸剑山庄庄主出场，身后跟着仆从，抬着无数柄相同的剑。"每柄剑重v，锋利w。我的剑取之不尽——你能装多少？"赵晴儿上前一步："完全背包——每种剑可以拿无限柄，内层循环正序遍历。"她提笔如飞，片刻交卷。庄主愕然："这么快？"

#### 输入

第一行两个整数N和V。接下来N行每行两个整数v和w。

#### 输出

一行，最大价值。

#### 提示

完全背包：内层正序遍历。每种物品可选无限次。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 1010;
int f[N];
int n, m;

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        int v, w;
        cin >> v >> w;
        for (int j = v; j <= m; j++) {
            f[j] = max(f[j], f[j - v] + w);
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}
```

### 157 三角登峰

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD157/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山云梯，台阶排成三角形，每级刻着一个数字。从顶到底，每步只能向左下或右下。"找出一条路径，使数字之和最大。"裁判宣布。李少白仰望云梯，忽然笑了："从底向上——每级取下方两个方向中较大的，加上自己。一层层往上推，山顶就是答案。"

#### 输入

第一行一个整数n。接下来n行第i行有i个整数。

#### 输出

一行，最大路径和。

#### 提示

从底向上DP。dp[i][j] = max(dp[i+1][j], dp[i+1][j+1]) + a[i][j]。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 510;
int f[N][N];
int n;

int main() {
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cin >> f[i][j];
        }
    }
    
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            f[i][j] += max(f[i + 1][j], f[i + 1][j + 1]);
        }
    }
    
    cout << f[1][1] << endl;
    
    return 0;
}
```

### 158 递增剑意

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD158/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

擂台上，青城派弟子摆出一排剑，每把刻着一个数字。"选出最长的递增序列——数字必须递增，不必相邻。"李少白用O(n²)的DP接下第一招。梁嘉峰却摇头："后面数据更大。贪心+二分——维护最小末尾数组，O(nlogn)。"李少白重写代码，青城弟子面色一变："好快的剑！"

#### 输入

第一行一个整数n。第二行n个整数。

#### 输出

一行，最长递增子序列的长度。

#### 提示

贪心+二分：维护最小末尾数组q[]，二分查找替换。O(nlogn)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 100010;
int a[N];
int n;

int main() {
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    vector<int> tails;
    
    for (int i = 0; i < n; i++) {
        auto it = lower_bound(tails.begin(), tails.end(), a[i]);
        if (it == tails.end()) {
            tails.push_back(a[i]);
        } else {
            *it = a[i];
        }
    }
    
    cout << tails.size() << endl;
    
    return 0;
}
```

### 159 双谱共鸣

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD159/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

峨眉派女侠递来两卷剑谱："找出两谱中最长的公共剑招序列——顺序一致但不必连续。"赵晴儿接过剑谱："LCS——dp[i][j]表示前i招和前j招的最长公共子序列。相等时加一，否则取较大值。"女侠看了答案，微微一笑："峨眉输了。"

#### 输入

第一行两个整数n和m。第二行长度为n的字符串。第三行长度为m的字符串。

#### 输出

一行，最长公共子序列的长度。

#### 提示

LCS：二维DP。相等时dp[i][j]=dp[i-1][j-1]+1，否则取max(dp[i-1][j], dp[i][j-1])。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 1010;
int f[N][N];
char a[N], b[N];
int n, m;

int main() {
    cin >> n >> m;
    cin >> a + 1;
    cin >> b + 1;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i] == b[j]) {
                f[i][j] = f[i - 1][j - 1] + 1;
            } else {
                f[i][j] = max(f[i - 1][j], f[i][j - 1]);
            }
        }
    }
    
    cout << f[n][m] << endl;
    
    return 0;
}
```

### 160 合石成堆

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD160/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山脚下的石阵——N堆石子排成一行，每次只能合并相邻两堆，代价是两堆之和。"全部合并的最小代价？"少林高僧双手合十："贪心不行，必须区间DP。枚举分割点k，dp[i][j] = min(dp[i][k] + dp[k+1][j]) + sum(i..j)。"李少白闭目凝神，三重循环缓缓展开。高僧点头："施主悟了。"

#### 输入

第一行一个整数N。第二行N个整数。

#### 输出

一行，最小总代价。

#### 提示

区间DP：枚举分割点。dp[i][j] = min(dp[i][k] + dp[k+1][j]) + sum(i..j)。O(n³)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 310;
int a[N], s[N];
int f[N][N];
int n;

int main() {
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        s[i] = s[i - 1] + a[i];
    }
    
    memset(f, 0x3f, sizeof(f));
    for (int i = 1; i <= n; i++) f[i][i] = 0;
    
    for (int len = 2; len <= n; len++) {
        for (int i = 1; i + len - 1 <= n; i++) {
            int j = i + len - 1;
            for (int k = i; k < j; k++) {
                f[i][j] = min(f[i][j], f[i][k] + f[k + 1][j] + s[j] - s[i - 1]);
            }
        }
    }
    
    cout << f[1][n] << endl;
    
    return 0;
}
```

### 161 改字成经

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD161/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

武当道长递来两卷经文："把A卷改成B卷，最少几步？增、删、改，每次算一步。"李少白沉思："dp[i][j]表示A的前i个改成B的前j个的最少操作。三种操作取min+1。"道长抚须而笑："小友的剑法，已经入了化境。"

#### 输入

第一行两个整数n和m。第二行长度为n的字符串A。第三行长度为m的字符串B。

#### 输出

一行，编辑距离。

#### 提示

编辑距离：dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cmath>
#include <string>
using namespace std;
const int N = 1009;
char a[N], b[N];
int dp[2][N]; 
int main(){
    ios::sync_with_stdio(0); cin.tie(0);
    int n, m;
    cin>>n>>a+1>>m>>b+1;
    //初始化
    for(int i = 0; i <= m; i++) dp[0][i] = i;
    for(int i = 1; i <= n; i++){
    //两行dp循环使用
        int now = (i & 1), old = (i - 1 & 1);
        dp[now][0] = i;//初始化
        for(int j = 1; j <= m; j++){
            if(a[i] == b[j]) dp[now][j] = dp[old][j-1];
            else dp[now][j] = min(min(dp[old][j], dp[now][j-1]), dp[old][j-1]) + 1;
        }
    }
    cout<<dp[n & 1][m];
    return 0;
}

// 作者：stary_sky
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/11245790/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 162 雪道寻长

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD162/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山后山，白雪皑皑。一个R×C的滑雪场，从任意高处滑向相邻的低处。"最长能滑多远？"赵晴儿踏雪而行："记忆化搜索——DFS+缓存。每个格子只算一次，取四个方向中最长的路径加一。"她的身影在雪道上飞驰，划出一道完美的弧线。

#### 输入

第一行两个整数R和C。接下来R行每行C个整数表示高度。

#### 输出

一行，最长递减路径的长度。

#### 提示

记忆化搜索：DFS+缓存。每个格子只算一次，取四个方向中最长路径+1。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 310;
int g[N][N];
int f[N][N];
int r, c;
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

int dfs(int x, int y) {
    if (f[x][y] != -1) return f[x][y];
    
    f[x][y] = 1;
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        if (nx >= 1 && nx <= r && ny >= 1 && ny <= c && g[nx][ny] < g[x][y]) {
            f[x][y] = max(f[x][y], dfs(nx, ny) + 1);
        }
    }
    
    return f[x][y];
}

int main() {
    cin >> r >> c;
    
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            cin >> g[i][j];
        }
    }
    
    memset(f, -1, sizeof(f));
    
    int ans = 0;
    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            ans = max(ans, dfs(i, j));
        }
    }
    
    cout << ans << endl;
    
    return 0;
}
```

### 163 背包叠甲

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD163/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

论剑峰上，铠甲大师出场。他有N种铠甲，每种有重量、防御和库存。"每种最多拿s件——你能装多少防御？"李少白眉头一皱："逐件拆分太慢……二进制优化！把s拆成1、2、4、8…的和，转化为01背包。"铠甲大师大惊："你竟然知道这种方法！"

#### 输入

第一行两个整数N和V。接下来N行每行三个整数v、w和s（体积、价值、数量）。

#### 输出

一行，最大价值。

#### 提示

多重背包二进制优化：拆分s为2的幂次，转化为01背包。O(N*V*logS)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 20010;
int f[N];
int n, m;

struct Item {
    int v, w;
};

int main() {
    cin >> n >> m;
    
    vector<Item> items;
    
    for (int i = 0; i < n; i++) {
        int v, w, s;
        cin >> v >> w >> s;
        
        for (int k = 1; k <= s; k *= 2) {
            s -= k;
            items.push_back({v * k, w * k});
        }
        if (s > 0) {
            items.push_back({v * s, w * s});
        }
    }
    
    for (int i = 0; i < items.size(); i++) {
        for (int j = m; j >= items[i].v; j--) {
            f[j] = max(f[j], f[j - items[i].v] + items[i].w);
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}
```

### 164 背包限重

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD164/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

第二轮铠甲战。数据更大——N和V都到了极限。"同样的方法还管用吗？"对手冷笑。梁嘉峰在台下喊道："方法不变，多重背包的经典解法！"李少白再次出手，代码如剑，一气呵成。

#### 输入

第一行两个整数N和V。接下来N行每行三个整数v、w和s。

#### 输出

一行，最大价值。

#### 提示

多重背包二进制优化。与JD163相同思路，数据范围更大。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 20010;
int f[N];
int n, m;

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        int v, w, s;
        cin >> v >> w >> s;
        
        int k = 1;
        while (k <= s) {
            for (int j = m; j >= k * v; j--) {
                f[j] = max(f[j], f[j - k * v] + k * w);
            }
            s -= k;
            k *= 2;
        }
        if (s > 0) {
            for (int j = m; j >= s * v; j--) {
                f[j] = max(f[j], f[j - s * v] + s * w);
            }
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}
```

### 165 分组选宝

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD165/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

宝物被分成若干组，每组只能选一件。"分组背包——三重循环：外层遍历组，内层逆序容量，最内层遍历组内物品。"对手是丐帮长老，手中竹棒一点："小子，你确定每组只选一件？"李少白微微一笑："确定。每组选最优的那一件。"长老哈哈大笑："好！"

#### 输入

第一行两个整数N和V。接下来每组：第一行S（组内物品数），接下来S行每行两个整数v和w。

#### 输出

一行，最大价值。

#### 提示

分组背包：外层遍历组，内层逆序容量，最内层遍历组内物品。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 110;
int f[N];
int v[N], w[N];
int n, m;

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        int s;
        cin >> s;
        for (int j = 0; j < s; j++) {
            cin >> v[j] >> w[j];
        }
        for (int j = m; j >= 0; j--) {
            for (int k = 0; k < s; k++) {
                if (j >= v[k]) {
                    f[j] = max(f[j], f[j - v[k]] + w[k]);
                }
            }
        }
    }
    
    cout << f[m] << endl;
    
    return 0;
}
```

### 166 递增剑意II

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD166/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

擂台第二轮——剑的数量到了十万。O(n²)的剑法已经不够用了。梁嘉峰在台下传音："贪心+二分——维护最小末尾数组，O(nlogn)。这是剑法的极致。"李少白闭上眼睛，剑意如丝，层层递进。对手的剑阵瞬间崩溃。

#### 输入

第一行一个整数N。第二行N个整数。

#### 输出

一行，最长递增子序列的长度。

#### 提示

贪心+二分：维护最小末尾数组q[]，二分查找替换。O(nlogn)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int N = 100010;
int a[N];
int n;

int main() {
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    vector<int> tails;
    
    for (int i = 0; i < n; i++) {
        auto it = lower_bound(tails.begin(), tails.end(), a[i]);
        if (it == tails.end()) {
            tails.push_back(a[i]);
        } else {
            *it = a[i];
        }
    }
    
    cout << tails.size() << endl;
    
    return 0;
}
```

### 167 整分剑法

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD167/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

对手是一位数学大师，他写下数字n："把它拆成若干正整数之和，有多少种拆法？"赵晴儿上前："完全背包——从1到n，每个数可以用无限次。dp[j] += dp[j-i]，模1e9+7。"大师推了推眼镜："你用背包来解整数划分？有意思。"

#### 输入

一个整数n（1≤n≤1000）。

#### 输出

一行，划分方案数模1e9+7。

#### 提示

完全背包DP：dp[j] += dp[j-i]，i从1到n。模1e9+7。原题链接

#### 参考代码

```cpp
#include <iostream>
using namespace std;

const int N = 1010;
const int MOD = 1e9 + 7;
int f[N];
int n;

int main() {
    cin >> n;
    
    f[0] = 1;
    
    for (int i = 1; i <= n; i++) {
        for (int j = i; j <= n; j++) {
            f[j] = (f[j] + f[j - i]) % MOD;
        }
    }
    
    cout << f[n] << endl;
    
    return 0;
}
```

### 168 数码计数

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD168/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山石壁上刻着从a到b的所有数字。"0到9每个数字各出现了几次？"对手出了一道算术题。李少白没有一个个数。"数位统计——对每个数字和位置，用数学公式算出现次数。f(b)-f(a-1)。"对手目瞪口呆："你……你怎么算得这么快？"

#### 输入

一行两个整数a和b。

#### 输出

一行，10个整数，分别表示数字0~9在[a,b]中出现的次数，空格隔开。

#### 提示

数位统计：对每个数字和位置用数学公式计算出现次数。f(b)-f(a-1)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>
using namespace std;

int a, b;

// 得到一个数中某几个相邻的数字构成的数值
// 一定要记住从高位往低位遍历
int get_num(vector<int> num, int l, int r){
    int ans = 0;
    for (int i = l; i >= r; i --) ans = ans * 10 + num[i];
    return ans;
}

// 计算1到n的所有的数中数字x出现的次数
int count(int n, int x){
    vector<int> num;
    while (n){
        num.push_back(n % 10);
        n /= 10;
    }
    int len = num.size(), ans = 0;
    for (int i = len - 1 - !x; i >= 0; i --){ // 此处减去 !x 是精华
        // 000 ~ abc-1
        ans += get_num(num, len - 1, i + 1) * (int)pow(10, i);
        if (!x) ans -= (int)pow(10, i);  // x==0时，001 ~ abc-1
        // abc
        if (x == num[i]) ans += (get_num(num, i - 1, 0) + 1);
        else if (x < num[i]) ans += (int)pow(10, i);
    }
    return ans;

}

int main(){
    while (cin >> a >> b, a || b){ // a b 不全为0
        if (a > b) swap(a, b);
        for (int i = 0; i <= 9; i ++) printf("%d ", count(b, i) - count(a - 1, i));
        puts("");
    }

    return 0;
}

// 作者：Qiner
// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/12793336/
// 来源：AcWing
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### 169 棋盘铺阵

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD169/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山之巅，云雾缭绕。四位绝顶高手已经等候多时。第一位是棋圣。他摆出一个n×m的棋盘和一堆1×2的骨牌："铺满整个棋盘，有多少种铺法？"赵晴儿凝视棋盘，忽然眼中一亮："状压DP——逐列处理。用二进制掩码表示哪些格子被前一列的横骨牌占了。"棋圣抚掌而笑："好一个状压！老夫输了。"

#### 输入

多组数据，每组两个整数n和m。以0 0结束。

#### 输出

每组一行，铺法总数。

#### 提示

状压DP：逐列处理，状态掩码表示被前一列横骨牌占的格子。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 12;
long long f[N][1 << N];
int n, m;

void dfs(int col, int row, int cur_state, int next_state) {
    if (row == n) {
        f[col + 1][next_state] += f[col][cur_state];
        return;
    }
    
    if (cur_state & (1 << row)) {
        dfs(col, row + 1, cur_state, next_state);
    } else {
        // 竖放
        dfs(col, row + 1, cur_state, next_state | (1 << row));
        // 横放
        if (row + 1 < n && !(cur_state & (1 << (row + 1)))) {
            dfs(col, row + 2, cur_state, next_state);
        }
    }
}

int main() {
    while (cin >> n >> m && n && m) {
        if (n > m) swap(n, m);
        
        memset(f, 0, sizeof(f));
        f[0][0] = 1;
        
        for (int col = 0; col < m; col++) {
            for (int state = 0; state < (1 << n); state++) {
                if (f[col][state]) {
                    dfs(col, 0, state, 0);
                }
            }
        }
        
        cout << f[m][0] << endl;
    }
    
    return 0;
}
```

### 170 万城巡游

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD170/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

第二位绝顶高手——游侠。他铺开一张城池图："从城0出发，每座城恰好走一次，到城n-1。最短路径？"李少白眼中精光一闪："状压DP——dp[mask][i]表示访问集合mask、当前在城i的最小代价。枚举所有状态和转移。O(2^n × n²)。"游侠击节赞叹："好！这一剑，我甘拜下风！"

#### 输入

第一行一个整数n。接下来n行每行n个整数，表示邻接矩阵。

#### 输出

一行，最短Hamilton路径长度。

#### 提示

状压DP：dp[mask][i]表示访问集合mask、当前在城i的最小代价。O(2^n * n²)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
using namespace std;

const int N = 20;
const int M = 1 << N;
int g[N][N];
int f[M][N];
int n;

int main() {
    cin >> n;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> g[i][j];
        }
    }
    
    memset(f, 0x3f, sizeof(f));
    f[1][0] = 0;
    
    for (int mask = 1; mask < (1 << n); mask++) {
        for (int i = 0; i < n; i++) {
            if (!(mask & (1 << i))) continue;
            for (int j = 0; j < n; j++) {
                if (i == j) continue;
                if (!(mask & (1 << j))) continue;
                f[mask][i] = min(f[mask][i], f[mask ^ (1 << i)][j] + g[j][i]);
            }
        }
    }
    
    cout << f[(1 << n) - 1][n - 1] << endl;
    
    return 0;
}
```

### 171 群经改字

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD171/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

第三位——藏经阁阁主。他取出一本字典和一段经文："字典里有多少个词，和这段经文的编辑距离不超过k？"赵晴儿沉吟片刻："对字典里每个词，算它和经文的编辑距离。标准编辑距离DP——dp[i][j] = min(三种操作)。"阁主长叹："当年我花了十年才悟出此法，你竟片刻之间……"

#### 输入

第一行两个整数N和M。接下来N行每行一个字符串（字典）。接下来M行每行一个字符串和一个整数k。

#### 输出

M行，每行一个整数（字典中编辑距离≤k的字符串个数）。

#### 提示

编辑距离DP：dp[i][j] = min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <cstring>
#include <string>
using namespace std;

const int N = 1010;
int dp[N][N];
string dict[N];
int n, m;

int edit_distance(string a, string b) {
    int len1 = a.length(), len2 = b.length();
    
    for (int i = 0; i <= len1; i++) dp[i][0] = i;
    for (int j = 0; j <= len2; j++) dp[0][j] = j;
    
    for (int i = 1; i <= len1; i++) {
        for (int j = 1; j <= len2; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
            }
        }
    }
    
    return dp[len1][len2];
}

int main() {
    cin >> n >> m;
    
    for (int i = 0; i < n; i++) {
        cin >> dict[i];
    }
    
    while (m--) {
        string s;
        int k;
        cin >> s >> k;
        
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if (edit_distance(dict[i], s) <= k) {
                cnt++;
            }
        }
        
        cout << cnt << endl;
    }
    
    return 0;
}
```

### 172 千机棋局

- 题目来源：http://www.xmuoj.com/contest/359/problem/JD172/
- 时间限制：1000 ms
- 内存限制：256 MB

#### 题面

华山绝顶，风雷激荡。最后一位对手——棋魔，传说中的千机棋圣。他缓缓展开一张巨大的人员图谱："这是宗门的命脉——每个人有一个直属上司。现在要派人出征，但一个士兵和他的上司不能同时出征——否则后方崩溃。每个士兵有不同的战斗力。"梁嘉峰在台下喊道："树形DP！dp[u][0]表示u留守时子树的最大战力，dp[u][1]表示u出征时。出征则下属必须留守，留守则下属可出可留。找到根节点，DFS一遍！"李少白深吸一口气，闭上眼睛。他想起了第一天来到剑道宗的那个下午——梁嘉峰递给他两枚铁令，赵晴儿在沙盘上画圆。从变量到递归，从数组到图论，从排序到动态规划……每一步都是剑道的修行。他睁开眼睛，提笔写下最后一行代码。棋魔看着答案，沉默良久，终于起身，深深一揖："华山论剑，到此为止。"梁嘉峰走上前来，拍了拍李少白的肩膀："恭喜。你可以出师了。"赵晴儿在一旁笑了："别急，回去还得教下一届呢。"

#### 输入

第一行一个整数N。第二行N个整数（每个员工的快乐值）。接下来N-1行每行两个整数l k（l的上司是k）。

#### 输出

一行，最大总快乐值。

#### 提示

树形DP：dp[u][0/1]表示u不出征/出征时的最大值。DFS从根遍历。dp[u][1] = h[u] + Σdp[v][0]，dp[u][0] = Σmax(dp[v][0], dp[v][1])。原题链接

#### 参考代码

```cpp
#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 6010;
vector<int> g[N];
int happy[N];
int dp[N][2];
bool has_parent[N];
int n;

void dfs(int u) {
    dp[u][0] = 0;
    dp[u][1] = happy[u];
    
    for (int i = 0; i < g[u].size(); i++) {
        int v = g[u][i];
        dfs(v);
        dp[u][0] += max(dp[v][0], dp[v][1]);
        dp[u][1] += dp[v][0];
    }
}

int main() {
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        cin >> happy[i];
    }
    
    for (int i = 0; i < n - 1; i++) {
        int l, k;
        cin >> l >> k;
        g[k].push_back(l);
        has_parent[l] = true;
    }
    
    int root = 1;
    while (has_parent[root]) root++;
    
    dfs(root);
    
    cout << max(dp[root][0], dp[root][1]) << endl;
    
    return 0;
}
```
