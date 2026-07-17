//枚举算法
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
#include<vector>
using namespace std;

string Left[3];//储存左边银币
string Right[3];//储存右边银币
string result[3];//储存结果

bool isFeitCoin(char iCoin,bool isLight)//轻为true，重为false
{
    string c;
    c.push_back(iCoin);

    for(int i=0;i<3;i++)
    {
        string l=Left[i],r=Right[i];

        if(!isLight)swap(l,r);//全部转化为轻

        switch(result[i][0])
        {
            case 'e'://平衡even,找不到假币
                if(l.find(c)!=string::npos||r.find(c)!=string::npos)return false;
                    break;
            case 'u'://右边
                if(r.find(c)==string::npos)return false;//npos：未找到
                    break;
            case 'd'://左边
                if(l.find(c)==string::npos)return false;
                    break;
        }
    }
    return true;
}

int main()
{
    int n;
    cin >> n;
    while(n--)
    {
        for(int i=0;i<3;i++)cin>>Left[i]>>Right[i]>>result[i];

        for(int iCoin='A';iCoin<='L';iCoin++)//遍历从A到L
        {
            if(isFeitCoin(iCoin,true))//先假设是轻币
            {
                cout<<char(iCoin)<<" is the counterfeit coin and it is light."<<endl;
                break;
            }else if(isFeitCoin(iCoin,false)){// 再假设是重币
                cout<<char(iCoin)<<" is the counterfeit coin and it is heavy."<<endl;
                break;
            }
        }
    }
    




    return 0;
}

//总结：是通过函数的三个switch判断是否符合轻/重币。必须在even没用，up和heavy在不同侧
//传入轻重可以简化只写一次函数