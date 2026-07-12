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