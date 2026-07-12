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