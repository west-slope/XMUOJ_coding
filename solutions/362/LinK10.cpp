//递归算法
//本题大部分与汉诺塔I相同
#include<iostream>
using namespace std;
int k;
void move(int n,char start,char target)//打印输出
{
    cout<<n<<":"<<start<<"->"<<target<<endl;//增加一个n的所在位置
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
//总结：跟汉诺塔I相比就差一个n的输出，并无太大区别