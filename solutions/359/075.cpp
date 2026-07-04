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
