//递归算法
#include<iostream>
using namespace std;

void move(char start,char target)//输出从start位置移到target
{
    cout<<start<<"->"<<target<<endl;
    return ;
}

void Hanoi(int n,char start,char other,char target)
{
    if(n==1){//只有一层（也是结束项）
        move(start,target);
        return;
    }
    Hanoi(n-1,start,target,other);//要先把上面n-1个移到other部分
    move(start,target);//最下面的移到target
    Hanoi(n-1,other,start,target);//再把other部分移到target
    return;

}

int main()
{
    int n;
    cin>>n;
    Hanoi(n,'A','B','C');//n是层数
    return 0;
}

//总结：递归算法要设计递归出口，以及每一次进入下一层的变化