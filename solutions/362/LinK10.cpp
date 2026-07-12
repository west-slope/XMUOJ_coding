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