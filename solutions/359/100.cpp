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