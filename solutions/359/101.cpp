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