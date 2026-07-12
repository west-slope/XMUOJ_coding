window.XMUOJ_SOLUTIONS_CODE = {
  "generatedAt": "2026/7/12 18:31:14",
  "solutions": {
    "359": {
      "100": {
        "path": "solutions/359/100.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int m;\r\n    node *Next;\r\n};\r\n\r\nint main()\r\n{\r\n    int n,num=0;\r\n    node *p0,*head,*p1;\r\n    cin>>n;\r\n    while(n!=-1)\r\n    {\r\n\r\n        p0=new node;\r\n        p0->m=n;p0->Next=NULL;\r\n        if(num==0)\r\n            p1=head=p0;\r\n        else {p1->Next=p0;p1=p0;}\r\n        num++;\r\n        cin>>n;\r\n    }\r\n    node *pre,*cur,*next;\r\n    pre=head;\r\n    if(head->Next!=NULL){cur=next=head->Next;pre->Next=NULL;}\r\n    else {cout<<head->m;return 0;}\r\n    while(next->Next!=NULL)\r\n    {\r\n        next=next->Next;\r\n        cur->Next=pre;\r\n        pre=cur;\r\n        cur=next;\r\n    }\r\n    next->Next=pre;\r\n    p1=head=next;\r\n    while(p1!=NULL)\r\n    {\r\n        cout<<p1->m<<\" \";\r\n        p1=p1->Next;\r\n    }\r\n\r\n}"
      },
      "101": {
        "path": "solutions/359/101.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int num;\r\n    node *next;\r\n};\r\nint main()\r\n{\r\n    node *head0=NULL,*head1=NULL,*head2=NULL,*p0,*p1,*p2,*p;\r\n    int m,n;\r\n    cin>>m;\r\n    while(m!=-1)\r\n    {\r\n        p0=new node;p0->num=m;p0->next=NULL;\r\n        if(head1==NULL)head1=p1=p0;\r\n        else {\r\n            p1->next=p0;\r\n            p1=p0;\r\n        }\r\n        cin>>m;\r\n    }\r\n        cin>>n;\r\n        while(n!=-1)\r\n    {\r\n        p0=new node;p0->num=n;p0->next=NULL;\r\n        if(head2==NULL)head2=p2=p0;\r\n        else {\r\n            p2->next=p0;\r\n            p2=p0;\r\n        }\r\n        cin>>n;\r\n    }\r\n    if(head1==NULL)head0=head2;\r\n    else if(head2==NULL)head0=head1;\r\n    else {\r\n        p1=head1,p2=head2;\r\n        while(p1!=NULL&&p2!=NULL)\r\n        {\r\n            if(p1->num>=p2->num)\r\n            {\r\n                p0=new node;\r\n                p0->num=p2->num;\r\n                p0->next=NULL;\r\n                if(head0==NULL)\r\n                {\r\n                    head0=p=p0;\r\n                }\r\n                else {\r\n                    p->next=p0;\r\n                    p=p0;\r\n                }\r\n                p2=p2->next;\r\n            }\r\n            else if(p1->num<p2->num)\r\n            {\r\n                p0=new node;\r\n                p0->num=p1->num;\r\n                p0->next=NULL;\r\n                if(head0==NULL)\r\n                {\r\n                    head0=p=p0;\r\n                }   \r\n                else {\r\n                    p->next=p0;\r\n                    p=p0;\r\n                }\r\n                p1=p1->next;\r\n            }\r\n        }\r\n    \r\n        if(p1==NULL)\r\n            p->next=p2;\r\n        else if(p2==NULL)\r\n            p->next=p1;\r\n    }\r\n    p=head0;\r\n    while(p!=NULL)\r\n    {\r\n        cout<<p->num<<\" \";\r\n        p=p->next;\r\n    }\r\n\r\n\r\n}"
      },
      "102": {
        "path": "solutions/359/102.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<iomanip>\r\nusing namespace std;\r\nstruct sanyuan\r\n{\r\n    int num;\r\n    double m;\r\n    string str;\r\n};\r\n\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    sanyuan s[200]; \r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>s[i].num>>s[i].m>>s[i].str;\r\n    }\r\n    for(int i=0;i<N-1;i++)\r\n    {\r\n        for(int j=0;j<N-i-1;j++)\r\n        {\r\n            if(s[j].num>s[j+1].num||(s[j].num==s[j+1].num&&s[j].m>s[j+1].m))\r\n            {\r\n                sanyuan temp=s[j];\r\n                s[j]=s[j+1];\r\n                s[j+1]=temp;\r\n            }\r\n        }\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout<<s[i].num<<\" \"<<fixed<<setprecision(2)<<s[i].m<<\" \"<<s[i].str<<endl;\r\n    }\r\n}"
      },
      "103": {
        "path": "solutions/359/103.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint a[1000000],n;\r\nvoid quick_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int i=l-1,j=r+1,x=arr[(l+r)>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(arr[i]<x);\r\n        do j--;while(arr[j]>x);\r\n        if(i<j){swap(arr[i],arr[j]);\r\n        }\r\n    }\r\n    quick_sort(arr,l,j);\r\n    quick_sort(arr,j+1,r);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }   \r\n    quick_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        //if(i!=0)cout<<\" \";\r\n        printf(\"%d \",a[i]);\r\n    }\r\n    return 0;\r\n}"
      },
      "104": {
        "path": "solutions/359/104.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint a[1000];\r\nint quick_sort(int arr[],int l,int r,int k)\r\n{\r\n    if(l>=r)return arr[l];\r\n    int i=l-1,j=r+1,x=arr[(l+r)>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(x>arr[i]);\r\n        do j--;while(x<arr[j]);\r\n        if(i<j)swap(arr[i],arr[j]);\r\n    }\r\n    int s1=j-l+1;\r\n    if(k<=s1)return quick_sort(arr,l,j,k);\r\n    else return quick_sort(arr,j+1,r,k-s1);\r\n}\r\n\r\nint main()\r\n{\r\n    int n,k;\r\n    cin>>n>>k;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    cout<<quick_sort(a,0,n-1,k)<<endl;\r\n    \r\n}"
      },
      "105": {
        "path": "solutions/359/105.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint a[1000],temp[1000],n;\r\nvoid merge_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int mid=(l+r)>>1;//中间数\r\n    merge_sort(arr,l,mid);\r\n    merge_sort(arr,mid+1,r);\r\n    int i=l,j=mid+1,k=0;\r\n    while(i<=mid&&j<=r)\r\n    {\r\n        if(arr[i]<=arr[j]){\r\n            temp[k]=arr[i];\r\n            i++;\r\n        }\r\n        else {\r\n            temp[k]=arr[j];\r\n            j++;\r\n        }\r\n        k++;\r\n    }\r\n    while(i<=mid)\r\n        {\r\n            temp[k++]=arr[i++];\r\n        }\r\n    while(j<=r)\r\n    {\r\n            temp[k++]=arr[j++];\r\n    }\r\n    for(int i=l,k=0;i<=r;i++,k++)\r\n    {\r\n        arr[i]=temp[k];\r\n    }\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    merge_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        printf(\"%d \",a[i]);\r\n    }\r\n\r\n    return 0;\r\n}"
      },
      "106": {
        "path": "solutions/359/106.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\nLL n,a[1000000],temp[1000000];\r\n\r\nLL merge_sort(LL arr[],LL l,LL r)\r\n{\r\n    if(l>=r)return 0;\r\n    LL mid=l+r>>1,res=0;\r\n    res+=merge_sort(arr,l,mid)+ merge_sort(arr,mid+1,r);\r\n    LL i=l,j=mid+1,k=0;\r\n    while(i<=mid&&j<=r)\r\n    {\r\n        if(arr[i]<=arr[j])\r\n        {\r\n            temp[k++]=arr[i++];\r\n        }\r\n        else if(arr[i]>temp[j])\r\n        {\r\n            temp[k++]=arr[j++];\r\n            res+=mid-i+1;\r\n        }\r\n    }\r\n    while(i<=mid)\r\n    {\r\n        temp[k++]=arr[i++];\r\n    }\r\n    while(j<=r)\r\n    {\r\n        temp[k++]=arr[j++];\r\n    }\r\n    for(int i=l,k=0;i<=r;i++,k++)//为了进一步排序，不可忽略\r\n    {\r\n        arr[i]=temp[k];\r\n    }\r\n   return res;\r\n\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    cout<<merge_sort(a,0,n-1)<<endl;\r\n\r\n\r\n}"
      },
      "107": {
        "path": "solutions/359/107.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint a[20000],n,q,j;\r\n\r\nvoid search(int m)\r\n{\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        if(a[i]==m)\r\n        {\r\n            j=i;\r\n            cout<<i<<\" \";\r\n            while(a[j]==m)\r\n            {\r\n                j++;\r\n            }\r\n            if(j==i)cout<<i;\r\n            else cout<<j-1<<endl;\r\n            break;\r\n        }\r\n        else if(i==n-1)\r\n        {\r\n            cout<<-1<<\" \"<<-1<<endl;\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int m;\r\n    cin>>n>>q;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<q;i++)\r\n    {\r\n        cin>>m;\r\n        search(m);\r\n    }\r\n\r\n}"
      },
      "108": {
        "path": "solutions/359/108.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\n\r\n\r\nint main(){\r\n    double n;\r\n    double mid;\r\n    cin>>n;\r\n    double left=-10000,right=10000;\r\n    while(right-left>1e-8)\r\n    {\r\n        mid=(left+right)/2;\r\n        if(pow(mid,3)>=n)\r\n            right=mid;\r\n        else left=mid;\r\n    }\r\n    cout<<fixed<<setprecision(6)<<mid<<endl;\r\n}"
      },
      "109": {
        "path": "solutions/359/109.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m;\r\n    while(m--){\r\n        cin>>n;\r\n        int count=0;\r\n        while(n>0)\r\n        {\r\n            count+=n&1;\r\n            n>>=1;\r\n        }\r\n        cout<<count<<\" \";\r\n    }\r\n}"
      },
      "110": {
        "path": "solutions/359/110.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\nvector<int>add(vector<int> &A,vector<int>&B)\r\n{\r\n    vector<int>C;\r\n    for(int i=0,t=0;i<A.size()||i<B.size()||t;i++)\r\n    {\r\n        if(i<A.size())t+=A[i];\r\n        if(i<B.size())t+=B[i];\r\n        C.push_back(t%10);\r\n        t/=10;\r\n    }\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n        cout<<A[i];\r\n    cout<<endl;\r\n}\r\n\r\nint main()\r\n{\r\n    string a,b;\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=b.size()-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    print(add(A,B));\r\n\r\n}\r\n\r\n\r\n\r\n\r\n// int main()\r\n// {\r\n//     string arr[3];\r\n//     int a[3][100001]={0};\r\n//     cin>>arr[0];\r\n//     cin>>arr[1];\r\n//     int a0=arr[0].length(),a1=arr[1].length();\r\n//     int m=max(a0,a1);\r\n//     for(int i=0;i<a0;i++)\r\n//     {\r\n//         a[0][i]=arr[0][a0-i-1]-'0';\r\n//     }\r\n//     for(int i=0;i<a1;i++)\r\n//     {\r\n//         a[1][i]=arr[1][a1-i-1]-'0';\r\n//     }\r\n//     for(int i=0;i<m;i++)\r\n//     {\r\n//         a[2][i]+=a[0][i]+a[1][i];\r\n//         if(a[2][i]>=10)\r\n//         {\r\n//             a[2][i]-=10;\r\n//             a[2][i+1]++;\r\n//         }\r\n//     }\r\n//     for(int i=m;i>=0;i--)\r\n//     {\r\n//         if(i==m&&a[2][m]==0)continue;\r\n//         cout<<a[2][i];\r\n//     }\r\n\r\n\r\n\r\n\r\n\r\n// }"
      },
      "111": {
        "path": "solutions/359/111.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<cstring>\r\n#include<string>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nstring a,b;\r\n\r\nvoid compare(vector<int>&A,vector<int>&B)\r\n{\r\n    if(A.size()<B.size())swap(A,B);\r\n    else if(A.size()==B.size())\r\n    {\r\n        int i=A.size()-1;\r\n        while(i>=0&&A[i]==B[i])i--;\r\n        if(A[i]<B[i])swap(A,B);\r\n    }\r\n}\r\n\r\nvector<int> sub(vector<int>&A,vector<int>&B)\r\n{\r\n    vector<int>C;\r\n    int t=0;\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        t+=A[i];\r\n        if(i<B.size())t-=B[i];\r\n        C.push_back((t+10)%10);\r\n        if(t<0)t=-1;\r\n        else t=0;\r\n    }\r\n    while(!C.back())C.pop_back();\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int> A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n    {\r\n        cout<<A[i];\r\n    }\r\n}\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n    int len1=a.length(),len2=b.length();\r\n    for(int i=len1-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=len2-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    compare(A,B);\r\n    print(sub(A,B));\r\n    cout<<endl;\r\n    return 0;\r\n}"
      },
      "112": {
        "path": "solutions/359/112.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<string>\r\n#include<vector>\r\n\r\nusing namespace std;\r\n\r\nstring a,b;\r\n\r\nvector<int> mul(vector<int>&A,vector<int>&B)\r\n{\r\n    vector<int>C(A.size()+B.size());\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        for(int j=0;j<B.size();j++)\r\n        {\r\n            C[i+j]+=A[i]*B[j];\r\n        }\r\n    }\r\n    for(int i=0,t=0;i<C.size();i++)\r\n    {\r\n        t+=C[i];\r\n        C[i]=t%10;\r\n        t/=10;\r\n    }\r\n    while(C.back()==0&&C.size()>1)C.pop_back();\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n        cout<<A[i];\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=b.size()-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    print(mul(A,B));\r\n\r\n    return 0;\r\n}"
      },
      "113": {
        "path": "solutions/359/113.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<vector>\r\n\r\nusing namespace std;\r\n\r\nstring a;\r\nint b,m;\r\nvector<int>div(vector<int>&A,int b)\r\n{\r\n    vector<int>C(A.size()-to_string(b).length());\r\n    int t=0;\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        t*=10;\r\n        t+=A[i];\r\n        C.push_back(t/b);\r\n        t%=b;\r\n    }\r\n    m=t;\r\n    while(C.front()==0&&C.size()>1)C.erase(C.begin()); \r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        cout<<A[i];\r\n    }\r\n    cout<<endl;\r\n    cout<<m<<endl;\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A;\r\n    for(int i=0;i<a.size();i++)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    print(div(A,b));\r\n\r\n    return 0;\r\n}\r\n"
      },
      "114": {
        "path": "solutions/359/114.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint a[100001],b[100001];\r\nint n,m,k;\r\nint main()\r\n{\r\n    cin>>n>>m>>k;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    for(int i=0;i<m;i++)cin>>b[i];\r\n\r\n    int i=0,j=m-1,t=a[i]+b[j];\r\n\r\n    while(t!=k)\r\n    {\r\n        if(t<k)i++;\r\n        else if(t>k)j--;\r\n        t=a[i]+b[j];\r\n    }\r\n    cout<<i<<\" \"<<j;\r\n}"
      },
      "115": {
        "path": "solutions/359/115.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    int a[100001],b[100001];\r\n    cin>>n>>m;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    for(int i=0;i<m;i++)cin>>b[i];\r\n\r\n    int i=0,j=0;\r\n\r\n    while(j<m)\r\n    {\r\n        if(a[i]==b[j])\r\n        {\r\n            i++,j++;\r\n        }\r\n        else j++;\r\n    }\r\n    if(i==n)cout<<\"Yes\"<<endl;\r\n    else cout<<\"No\"<<endl;\r\n\r\n    return 0;\r\n}"
      },
      "116": {
        "path": "solutions/359/116.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n;\r\n    int a[100001];\r\n    vector<int>b;\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    vector<int>v;\r\n    int t=0;\r\n    for(int i=0;i<n;i++)//1 2 4 2 5 6 7是：5\r\n    {\r\n\r\n        if(find(v.begin(),v.end(),a[i])==v.end()){\r\n            t++;\r\n            v.push_back(a[i]);\r\n        }\r\n        else {\r\n            b.push_back(t);\r\n            t=0;\r\n            v.erase(v.begin(), find(v.begin(),v.end(),a[i])+1); \r\n            v.push_back(a[i]);\r\n            t=v.size();\r\n        }\r\n    }b.push_back(t);\r\n    sort(b.begin(),b.end());\r\n    cout<<b.back();\r\n}"
      },
      "117": {
        "path": "solutions/359/117.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    int a[100001];\r\n    vector<int>b;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n        if(find(b.begin(),b.end(),a[i])==b.end())b.push_back(a[i]);\r\n        else b.erase(find(b.begin(),b.end(),a[i]));\r\n    }\r\n\r\n    for(int i=0;i<b.size();i++)\r\n        if(b[i]!=0){\r\n            cout<<b[i];break;\r\n        }\r\n}"
      },
      "118": {
        "path": "solutions/359/118.cpp",
        "language": "cpp",
        "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);int n;if(!(cin>>n))return 0;\r\nfor(int mask=1;mask<(1<<n);mask++){bool first=true;for(int i=0;i<n;i++)if(mask>>i&1){if(!first)cout<<' ';first=false;cout<<i+1;}cout<<\"\\n\";}}\r\n"
      },
      "119": {
        "path": "solutions/359/119.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m;\r\nconst int N=100;\r\nint arr[N];\r\nbool st[N];\r\nvoid dfs(int u,int start)//多一个start方便判断\r\n{\r\n    if(u>m)\r\n    {\r\n        for(int i=1;i<=m;i++)\r\n        {\r\n            if(i!=1)cout<<\" \";\r\n            cout<<arr[i];\r\n        }\r\n        cout<<endl;\r\n    }\r\n    else {\r\n        for(int i=start;i<=n;i++)\r\n        {\r\n            if(!st[i])\r\n            {\r\n                arr[u]=i;\r\n                st[i]=true;\r\n                dfs(u+1,i+1);\r\n                arr[u]=0;\r\n                st[i]=false;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    dfs(1,1);\r\n    return 0;\r\n}"
      },
      "120": {
        "path": "solutions/359/120.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint parent[50005], dist[50005];\r\n\r\nint find(int x)\r\n{\r\n    if(parent[x] == x) return x;\r\n    int t = parent[x];\r\n    int root = find(t);\r\n    dist[x] = (dist[x] + dist[t]) % 3;\r\n    parent[x] = root;\r\n    return root;\r\n}\r\n\r\nint main()\r\n{\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    for(int i = 1; i <= n; i++)\r\n    {\r\n        parent[i] = i;\r\n        dist[i] = 0;\r\n    }\r\n    \r\n    int ans = 0;\r\n    \r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int d, x, y;\r\n        cin >> d >> x >> y;\r\n        \r\n        if(x > n || y > n)\r\n        {\r\n            ans++;\r\n            continue;\r\n        }\r\n        \r\n        int rx = find(x);\r\n        int ry = find(y);\r\n        \r\n        if(d == 1)\r\n        {\r\n            if(rx == ry)\r\n            {\r\n                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 0) ans++;\r\n            }\r\n            else\r\n            {\r\n                parent[rx] = ry;\r\n                dist[rx] = ((dist[y] - dist[x]) % 3 + 3) % 3;\r\n            }\r\n        }\r\n        else\r\n        {\r\n            if(rx == ry)\r\n            {\r\n                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 1) ans++;\r\n            }\r\n            else\r\n            {\r\n                parent[rx] = ry;\r\n                dist[rx] = ((dist[y] - dist[x] + 1) % 3 + 3) % 3;\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "121": {
        "path": "solutions/359/121.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m,ss=0;\r\nint l,r;\r\nint a[100001],s[100001];\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++){\r\n        cin>>a[i];\r\n        ss+=a[i];\r\n        s[i]=ss;\r\n    }\r\n    while(cin>>l&&cin>>r)\r\n    {\r\n        cout<<s[r]-s[l-1];\r\n        cout<<endl;\r\n    }\r\n\r\n}\r\n"
      },
      "122": {
        "path": "solutions/359/122.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n//测试样例有问题\r\nint main()\r\n{\r\n    int n,m,q;\r\n    int x1,y1,x2,y2;\r\n    int a[1001][1001],s[1001][1001],ss=0;\r\n    cin>>n>>m>>q;\r\n    for(int i=1;i<=n;i++)\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + a[i][j];\r\n            //ss+=a[i][j];\r\n            //s[i][j]=ss;\r\n        }\r\n    while(q--)\r\n    {\r\n        cin>>x1>>y1>>x2>>y2;\r\n        cout<<s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]<<endl;\r\n    }\r\n\r\n\r\n\r\n\r\n}"
      },
      "123": {
        "path": "solutions/359/123.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n// 测试样例有误\r\nint n,m,ss=0,num;\r\nint l,r;\r\nint a[100001],s[100001];\r\nint main()\r\n{\r\n    cin>>n>>m;//差分\r\n    for(int i=1;i<=n;i++){\r\n        cin>>a[i];\r\n        s[i]=a[i]-a[i-1];\r\n    }\r\n    while(m--)\r\n    {\r\n        cin>>l>>r>>num;\r\n        s[l]+=num,s[r+1]-=num;\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        a[i]=a[i-1]+s[i];\r\n        cout<<a[i]<<\" \";\r\n    }\r\n    cout<<endl;\r\n    return 0;\r\n\r\n}\r\n"
      },
      "124": {
        "path": "solutions/359/124.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n//题目出错\r\nint main()\r\n{\r\n    int n,m,q;\r\n    int a[1001][1001]={0},s[1001][1001]={0},sum=0;\r\n    cin>>n>>m>>q;\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            \r\n        }\r\n    }\r\n    int x1,y1,x2,y2,c;\r\n    while(q--)\r\n    {\r\n        cin>>x1>>y1>>x2>>y2>>c;\r\n        s[x1][y1] += c;\r\n        if(y2 + 1 <= m) s[x1][y2 + 1] -= c;\r\n        if(x2 + 1 <= n) s[x2 + 1][y1] -= c;\r\n        if(x2 + 1 <= n && y2 + 1 <= m) s[x2 + 1][y2 + 1] += c;\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n           s[i][j] += s[i-1][j] + s[i][j-1] - s[i-1][j-1];\r\n            a[i][j] += s[i][j];\r\n            cout<<a[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n}"
      },
      "125": {
        "path": "solutions/359/125.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    vector<pair<int, int>> add;  // 存储加操作 (位置, 加的值)\r\n    vector<pair<int, int>> query; // 存储查询 (l, r)\r\n    vector<int> alls;            // 所有需要离散化的坐标\r\n    \r\n    // 读入 n 次加操作\r\n    for(int i = 0; i < n; i++)\r\n    {\r\n        int x, c;\r\n        cin >> x >> c;\r\n        add.push_back({x, c});\r\n        alls.push_back(x);\r\n    }\r\n    \r\n    // 读入 m 次查询\r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int l, r;\r\n        cin >> l >> r;\r\n        query.push_back({l, r});\r\n        alls.push_back(l);\r\n        alls.push_back(r);\r\n    }\r\n    \r\n    // 排序去重\r\n    sort(alls.begin(), alls.end());\r\n    alls.erase(unique(alls.begin(), alls.end()), alls.end());\r\n    \r\n    // 离散化后的数组\r\n    vector<int> a(alls.size() + 1, 0);\r\n    \r\n    // 处理加操作\r\n    for(auto p : add)\r\n    {\r\n        int x = p.first;\r\n        int c = p.second;\r\n        int idx = lower_bound(alls.begin(), alls.end(), x) - alls.begin() + 1;\r\n        a[idx] += c;\r\n    }\r\n    \r\n    // 计算前缀和\r\n    vector<long long> prefix(alls.size() + 1, 0);\r\n    for(int i = 1; i <= alls.size(); i++)\r\n    {\r\n        prefix[i] = prefix[i-1] + a[i];\r\n    }\r\n    \r\n    // 处理查询\r\n    for(auto q : query)\r\n    {\r\n        int l = q.first;\r\n        int r = q.second;\r\n        int left = lower_bound(alls.begin(), alls.end(), l) - alls.begin() + 1;\r\n        int right = lower_bound(alls.begin(), alls.end(), r) - alls.begin() + 1;\r\n        cout << prefix[right] - prefix[left - 1] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "126": {
        "path": "solutions/359/126.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n//贪心算法\r\nstruct Node \r\n{ \r\n    int l, r; \r\n};\r\n\r\nbool cmp(Node a, Node b) \r\n{ \r\n    return a.l < b.l; \r\n}\r\n\r\nint main() {\r\n    int n;\r\n    cin >> n;\r\n    if (n == 0) { cout << 0; return 0; }\r\n    Node a[5000];\r\n    for (int i = 0; i < n; i++) cin >> a[i].l >> a[i].r;\r\n    sort(a, a + n, cmp);\r\n    int cnt = 1, curR = a[0].r;\r\n    for (int i = 1; i < n; i++) {\r\n        if (a[i].l <= curR) curR = max(curR, a[i].r);\r\n        else { cnt++; curR = a[i].r; }\r\n    }\r\n    cout << cnt;\r\n    return 0;\r\n}"
      },
      "127": {
        "path": "solutions/359/127.cpp",
        "language": "cpp",
        "code": "\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\ntypedef pair<int,int> PII;\r\nint main(){\r\n    ios::sync_with_stdio(false);\r\n    cin.tie(nullptr);\r\n    int n; if(!(cin>>n)) return 0;\r\n    vector<PII> segs;\r\n    for(int i=0;i<n;i++){\r\n        int l,r; cin>>l>>r;\r\n        segs.push_back({r,l});\r\n    }\r\n    sort(segs.begin(),segs.end());\r\n    int res=0, ed=-2e9;\r\n    for(auto seg:segs){\r\n        if(seg.second>ed){\r\n            res++;\r\n            ed=seg.first;\r\n        }\r\n    }\r\n    cout<<res<<\"\\n\";\r\n}\r\n\r\n"
      },
      "128": {
        "path": "solutions/359/128.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int N,x,temp=0;\r\n    vector<int>a;//容器用于存放数据\r\n    cin>>N;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>x;\r\n        a.push_back(x);\r\n    }\r\n    while(N!=1)//每次排序然后最小的两个元素相加代价最小\r\n    {\r\n        sort(a.begin(),a.end());\r\n        a[1]=a[0]+a[1];\r\n        temp+=a[1];\r\n        a.erase(a.begin());//相加完删除第一项\r\n        N--;\r\n\r\n    }\r\n    cout<<temp<<endl;\r\n\r\n}"
      },
      "129": {
        "path": "solutions/359/129.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n//排序后取中位数（下标 n/2），计算所有点到中位数的距离之和\r\nint main()\r\n{\r\n    int a[100001],l=0;//l用于计数\r\n    int N,mid;\r\n    cin>>N;\r\n    for(int i=0;i<N;i++)cin>>a[i];\r\n    sort(a,a+N);\r\n    mid=N/2;//mid为中位数\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        l+=abs(a[mid]-a[i]);//距离要取绝对值\r\n    }\r\n    cout<<l<<endl;\r\n\r\n\r\n}"
      },
      "130": {
        "path": "solutions/359/130.cpp",
        "language": "cpp",
        "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\r\nint m;if(!(cin>>m))return 0;vector<int>e(m+5),ne(m+5);int head=-1,idx=0;auto add_head=[&](int x){e[idx]=x;ne[idx]=head;head=idx++;};auto add=[&](int k,int x){e[idx]=x;ne[idx]=ne[k];ne[k]=idx++;};auto del=[&](int k){if(k==-1)head=ne[head];else ne[k]=ne[ne[k]];};\r\nwhile(m--){char op;cin>>op;if(op=='H'){int x;cin>>x;add_head(x);}else if(op=='I'){int k,x;cin>>k>>x;add(k-1,x);}else{int k;cin>>k;if(k==0)del(-1);else del(k-1);}}\r\nfor(int i=head;i!=-1;i=ne[i])cout<<e[i]<<' ';cout<<\"\\n\";}\r\n"
      },
      "131": {
        "path": "solutions/359/131.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nconst int N = 100010; \r\nint st[N], tt = 0;    // tt 指向栈顶元素位置，0 表示空栈\r\n\r\nint main() {\r\n    int n, x;\r\n    string op;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        cin >> op;\r\n        \r\n        if (op == \"push\") {\r\n            cin >> x;\r\n            st[++tt] = x;   // 1. 先移动指针，再赋值\r\n        } \r\n        else if (op == \"pop\") {\r\n            if (tt > 0) tt--; // 2. 必须判空！否则栈顶指针变为 -1 会越界\r\n        } \r\n        else if (op == \"query\") {\r\n            if (tt > 0) cout << st[tt] << endl; // 3. 必须判空！\r\n        } \r\n        else if (op == \"empty\") {\r\n            // 4. 你的判断完全正确：tt为0则为空\r\n            if (tt == 0) cout << \"YES\" << endl;\r\n            else cout << \"NO\" << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n\r\n\r\n//不使用数组的做法\r\n\r\n\r\n// #include<iostream>\r\n// #include<stack>\r\n// #include<string>\r\n// using namespace std;\r\n\r\n// int main()\r\n// {\r\n//     stack<int>a;\r\n//     int n,m;\r\n//     string c;\r\n//     cin>>n;\r\n//     while(n--)\r\n//     {\r\n//         cin>>c;\r\n//         if(c==\"push\")\r\n//         {\r\n//             cin>>m;\r\n//             a.push(m);\r\n//         }\r\n//         else if(c==\"pop\")\r\n//         {\r\n//             a.pop();\r\n//         }\r\n//         else if(c[0]=='q')\r\n//         {\r\n//             cout<<a.top()<<endl;\r\n//         }\r\n//         else if(c[0]=='e')\r\n//         {\r\n//             if(a.empty())\r\n//             {\r\n//                 cout<<\"YES\"<<endl;\r\n//             }\r\n//             else cout<<\"NO\"<<endl;\r\n//         }\r\n//     }\r\n\r\n\r\n\r\n// }"
      },
      "132": {
        "path": "solutions/359/132.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nconst int N = 100010; \r\nint st[N], tt = -1,hh=0;    // tt 指向栈顶元素位置为-1，hh指向头为0\r\n\r\nint main() {\r\n    int n, x;\r\n    string op;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        cin >> op;\r\n        if (op == \"push\") {\r\n            cin >> x;\r\n            st[++tt] = x;  \r\n        } \r\n        else if (op == \"pop\") {\r\n            hh++; \r\n        } \r\n        else if (op == \"query\") {\r\n            cout << st[hh] << endl;\r\n        } \r\n        else if (op == \"empty\") {\r\n            if (tt<hh) cout << \"YES\" << endl;\r\n            else cout << \"NO\" << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n"
      },
      "133": {
        "path": "solutions/359/133.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <stack>\r\n#include <string>\r\n#include <unordered_map>\r\nusing namespace std;\r\n\r\n// 判断字符是否为数字\r\nbool isDigit(char c) {\r\n    return c >= '0' && c <= '9';\r\n}\r\n\r\n// 计算两个数的结果\r\nint calc(int a, int b, char op) {\r\n    if (op == '+') return a + b;\r\n    if (op == '-') return a - b;\r\n    if (op == '*') return a * b;\r\n    if (op == '/') return a / b;  // 题目保证整除\r\n    return 0;\r\n}\r\n\r\nint main() {\r\n    string s;\r\n    cin >> s;\r\n    \r\n    stack<int> num;      // 数字栈\r\n    stack<char> op;      // 运算符栈\r\n    \r\n    // 优先级映射：数值越大优先级越高\r\n    unordered_map<char, int> priority = {\r\n        {'+', 1},\r\n        {'-', 1},\r\n        {'*', 2},\r\n        {'/', 2}\r\n    };\r\n    \r\n    for (int i = 0; i < s.size(); i++) {\r\n        char c = s[i];\r\n        \r\n        // 1. 遇到数字：读取完整数字（可能有多位）\r\n        if (isDigit(c)) {\r\n            int x = 0;\r\n            while (i < s.size() && isDigit(s[i])) {\r\n                x = x * 10 + (s[i] - '0');\r\n                i++;\r\n            }\r\n            i--;  // 回退一步，因为for循环会自增\r\n            num.push(x);\r\n        }\r\n        // 2. 遇到左括号：直接入栈\r\n        else if (c == '(') {\r\n            op.push(c);\r\n        }\r\n        // 3. 遇到右括号：一直计算到左括号\r\n        else if (c == ')') {\r\n            while (!op.empty() && op.top() != '(') {\r\n                int b = num.top(); num.pop();\r\n                int a = num.top(); num.pop();\r\n                char oper = op.top(); op.pop();\r\n                num.push(calc(a, b, oper));\r\n            }\r\n            if (!op.empty()) op.pop();  // 弹出左括号\r\n        }\r\n        // 4. 遇到运算符：处理优先级\r\n        else if (c == '+' || c == '-' || c == '*' || c == '/') {\r\n            // 当前运算符优先级 <= 栈顶运算符优先级时，先计算栈顶\r\n            while (!op.empty() && op.top() != '(' && priority[op.top()] >= priority[c]) {\r\n                int b = num.top(); num.pop();\r\n                int a = num.top(); num.pop();\r\n                char oper = op.top(); op.pop();\r\n                num.push(calc(a, b, oper));\r\n            }\r\n            op.push(c);  // 当前运算符入栈\r\n        }\r\n    }\r\n    \r\n    // 5. 处理剩余的运算符\r\n    while (!op.empty()) {\r\n        int b = num.top(); num.pop();\r\n        int a = num.top(); num.pop();\r\n        char oper = op.top(); op.pop();\r\n        num.push(calc(a, b, oper));\r\n    }\r\n    \r\n    cout << num.top() << endl;\r\n    return 0;\r\n}"
      },
      "134": {
        "path": "solutions/359/134.cpp",
        "language": "cpp",
        "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main(){ios::sync_with_stdio(false);cin.tie(nullptr);\r\nint n;if(!(cin>>n))return 0;vector<int>st;for(int i=0;i<n;i++){int x;cin>>x;while(!st.empty()&&st.back()>=x)st.pop_back();if(i)cout<<' ';cout<<(st.empty()?-1:st.back());st.push_back(x);}cout<<\"\\n\";}\r\n"
      },
      "135": {
        "path": "solutions/359/135.cpp",
        "language": "cpp",
        "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nconst int N=1000010;\r\nint a[N],q[N];\r\nint main(){\r\n    ios::sync_with_stdio(false); cin.tie(nullptr);\r\n    int n,k; if(!(cin>>n>>k)) return 0;\r\n    for(int i=0;i<n;i++) cin>>a[i];\r\n    int hh=0,tt=-1;\r\n    for(int i=0;i<n;i++){\r\n        if(hh<=tt && i-k+1>q[hh]) hh++;\r\n        while(hh<=tt && a[q[tt]]>=a[i]) tt--;\r\n        q[++tt]=i;\r\n        if(i>=k-1) cout<<a[q[hh]]<<' ';\r\n    }\r\n    cout<<\"\\n\";\r\n    hh=0,tt=-1;\r\n    for(int i=0;i<n;i++){\r\n        if(hh<=tt && i-k+1>q[hh]) hh++;\r\n        while(hh<=tt && a[q[tt]]<=a[i]) tt--;\r\n        q[++tt]=i;\r\n        if(i>=k-1) cout<<a[q[hh]]<<' ';\r\n    }\r\n    cout<<\"\\n\";\r\n}"
      },
      "136": {
        "path": "solutions/359/136.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\nusing namespace std;\r\n\r\nint main() {\r\n    int n, m;\r\n    string pattern, text;\r\n    \r\n    cin >> n >> pattern;\r\n    cin >> m >> text;\r\n    \r\n    // 计算next数组\r\n    vector<int> next(n, 0);\r\n    for (int i = 1, j = 0; i < n; i++) {\r\n        while (j > 0 && pattern[i] != pattern[j]) {\r\n            j = next[j - 1];\r\n        }\r\n        if (pattern[i] == pattern[j]) {\r\n            j++;\r\n        }\r\n        next[i] = j;\r\n    }\r\n    \r\n    // KMP匹配\r\n    vector<int> positions;\r\n    for (int i = 0, j = 0; i < m; i++) {\r\n        while (j > 0 && text[i] != pattern[j]) {\r\n            j = next[j - 1];\r\n        }\r\n        if (text[i] == pattern[j]) {\r\n            j++;\r\n        }\r\n        if (j == n) {\r\n            positions.push_back(i - n + 1); // 匹配起始位置\r\n            j = next[j - 1]; // 继续寻找下一个匹配\r\n        }\r\n    }\r\n    \r\n    // 输出结果\r\n    for (int i = 0; i < positions.size(); i++) {\r\n        cout << positions[i] << (i == positions.size() - 1 ? '\\n' : ' ');\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "137": {
        "path": "solutions/359/137.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\nusing namespace std;\r\n//测试点有问题\r\nconst int N = 100010;\r\nint h[N], ph[N], hp[N], sz = 0, idx = 0;\r\n\r\nvoid heap_swap(int a, int b) {\r\n    swap(ph[hp[a]], ph[hp[b]]);\r\n    swap(hp[a], hp[b]);\r\n    swap(h[a], h[b]);\r\n}\r\n\r\nvoid up(int u) {\r\n    while (u / 2 && h[u] < h[u / 2]) {\r\n        heap_swap(u, u / 2);\r\n        u /= 2;\r\n    }\r\n}\r\n\r\nvoid down(int u) {\r\n    int t = u;\r\n    if (u * 2 <= sz && h[u * 2] < h[t]) t = u * 2;\r\n    if (u * 2 + 1 <= sz && h[u * 2 + 1] < h[t]) t = u * 2 + 1;\r\n    if (t != u) {\r\n        heap_swap(u, t);\r\n        down(t);\r\n    }\r\n}\r\n\r\nint main() {\r\n    int n;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        string op;\r\n        cin >> op;\r\n        \r\n        if (op == \"I\") {\r\n            int x;\r\n            cin >> x;\r\n            idx++;\r\n            sz++;\r\n            ph[idx] = sz;\r\n            hp[sz] = idx;\r\n            h[sz] = x;\r\n            up(sz);\r\n        } \r\n        else if (op == \"PM\") {\r\n            cout << h[1] << endl;\r\n        } \r\n        else if (op == \"DM\") {\r\n            heap_swap(1, sz);\r\n            sz--;\r\n            down(1);\r\n        } \r\n        else if (op == \"D\") {\r\n            int k;\r\n            cin >> k;\r\n            int pos = ph[k];\r\n            heap_swap(pos, sz);\r\n            sz--;\r\n            down(pos);\r\n            up(pos);\r\n        } \r\n        else if (op == \"C\") {\r\n            int k, x;\r\n            cin >> k >> x;\r\n            int pos = ph[k];\r\n            h[pos] = x;\r\n            down(pos);\r\n            up(pos);\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "138": {
        "path": "solutions/359/138.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nconst int N = 100010;\nint p[N];\n\nint find(int x) {\n    if (p[x] != x) p[x] = find(p[x]);\n    return p[x];\n}\n\nint main() {\n    int n, m;\n    cin >> n >> m;\n    \n    for (int i = 1; i <= n; i++) p[i] = i;\n    \n    while (m--) {\n        char op;\n        int a, b;\n        cin >> op >> a >> b;\n        \n        if (op == 'M') {\n            int pa = find(a), pb = find(b);\n            if (pa != pb) p[pa] = pb;\n        } else if (op == 'Q') {\n            if (find(a) == find(b)) cout << \"Yes\" << endl;\n            else cout << \"No\" << endl;\n        }\n    }\n    \n    return 0;\n}"
      },
      "139": {
        "path": "solutions/359/139.cpp",
        "language": "cpp",
        "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint p[100010], sz[100010];\r\nint findp(int x){ return p[x]==x?x:p[x]=findp(p[x]); }\r\nint main(){\r\n    ios::sync_with_stdio(false);\r\n    cin.tie(nullptr);\r\n    int n,m;\r\n    if(!(cin>>n>>m)) return 0;\r\n    for(int i=1;i<=n;i++) p[i]=i, sz[i]=1;\r\n    while(m--){\r\n        string op; int a,b;\r\n        cin >> op;\r\n        if(op==\"C\"){\r\n            cin >> a >> b;\r\n            int ra=findp(a), rb=findp(b);\r\n            if(ra!=rb){ p[ra]=rb; sz[rb]+=sz[ra]; }\r\n        }else if(op==\"Q1\"){\r\n            cin >> a >> b;\r\n            cout << (findp(a)==findp(b) ? \"Yes\" : \"No\") << \"\\n\";\r\n        }else{\r\n            cin >> a;\r\n            cout << sz[findp(a)] << \"\\n\";\r\n        }\r\n    }\r\n}"
      },
      "140": {
        "path": "solutions/359/140.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nconst int N = 150010;\r\nint p[N];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]);\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    int n, k;\r\n    cin >> n >> k;\r\n    \r\n    for (int i = 1; i <= 3 * n; i++) p[i] = i;\r\n    \r\n    int ans = 0;\r\n    \r\n    while (k--) {\r\n        int op, x, y;\r\n        cin >> op >> x >> y;\r\n        \r\n        if (x > n || y > n) {\r\n            ans++;\r\n            continue;\r\n        }\r\n        \r\n        if (op == 1) {\r\n            // x和y是同类\r\n            if (find(x) == find(y + n) || find(x) == find(y + 2 * n)) {\r\n                ans++;\r\n            } else {\r\n                p[find(x)] = find(y);\r\n                p[find(x + n)] = find(y + n);\r\n                p[find(x + 2 * n)] = find(y + 2 * n);\r\n            }\r\n        } else {\r\n            // x吃y\r\n            if (x == y || find(x) == find(y) || find(x) == find(y + 2 * n)) {\r\n                ans++;\r\n            } else {\r\n                p[find(x)] = find(y + n);\r\n                p[find(x + n)] = find(y + 2 * n);\r\n                p[find(x + 2 * n)] = find(y);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "141": {
        "path": "solutions/359/141.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstdio>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 10;\r\n\r\nint n;\r\nint path[N];       // 从0到n-1共n个位置 存放一个排列\r\nbool state[N];     // 存放每个数字的使用状态 true表示使用了 false表示没使用过\r\n\r\nvoid dfs(int u)\r\n{\r\n    if (u == n)    // 一个排列填充完成\r\n    {\r\n        for (int i = 0; i < n; i ++) printf(\"%d \",path[i]);  // 注意格式 别忘了每两个数字间用空格隔开\r\n        puts(\"\");  // 相当于输出一个回车\r\n        return;\r\n    }\r\n\r\n    for (int i = 1; i <= n; i ++)\r\n    {\r\n        if (!state[i])\r\n        {\r\n            path[u] = i;       // 把 i 填入数字排列的位置上\r\n            state[i] = true;   // 表示该数字用过了 不能再用\r\n            dfs(u + 1);        // 这个位置的数填好 递归到右面一个位置\r\n            state[i] = false;  // 恢复现场 该数字后续可用\r\n        }\r\n    }\r\n    // for 循环全部结束了 dfs(u)才全部完成 回溯\r\n\r\n    return;        // 可写可不写\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\", &n);\r\n\r\n    dfs(0);    // 在path[0]处开始填数\r\n\r\n    return 0;\r\n}\r\n\r\n//作者：EvanMe\r\n//链接：https://www.acwing.com/file_system/file/content/whole/index/content/3758356/\r\n//来源：AcWing\r\n//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "142": {
        "path": "solutions/359/142.cpp",
        "language": "cpp",
        "code": "#include <iostream>\nusing namespace std;\n\nconst int N = 20;\nint n;\nchar board[N][N];\nbool col[N], dg[N], udg[N]; // 列、主对角线、副对角线\n\n// 逐行放置皇后，r为当前行\nvoid dfs(int r) {\n    if (r == n) {\n        // 输出解\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                cout << board[i][j];\n            }\n            cout << '\\n';\n        }\n        cout << '\\n'; // 解之间空行\n        return;\n    }\n\n    for (int c = 0; c < n; c++) {\n        // r+c相同→同一主对角线，r-c+n相同→同一副对角线\n        if (!col[c] && !dg[r + c] && !udg[r - c + n]) {\n            col[c] = dg[r + c] = udg[r - c + n] = true;\n            board[r][c] = 'Q';\n            dfs(r + 1);\n            board[r][c] = '.';\n            col[c] = dg[r + c] = udg[r - c + n] = false;\n        }\n    }\n}\n\nint main() {\n    cin >> n;\n    // 初始化棋盘\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            board[i][j] = '.';\n        }\n    }\n    dfs(0);\n    return 0;\n}\n"
      },
      "143": {
        "path": "solutions/359/143.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <queue>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint g[N][N], dist[N][N];\r\nint n, m;\r\nint dx[4] = {-1, 0, 1, 0};\r\nint dy[4] = {0, 1, 0, -1};\r\n\r\nint bfs() {\r\n    queue<pair<int, int>> q;\r\n    q.push({0, 0});\r\n    dist[0][0] = 0;\r\n    \r\n    while (!q.empty()) {\r\n        auto t = q.front();\r\n        q.pop();\r\n        \r\n        int x = t.first, y = t.second;\r\n        \r\n        if (x == n - 1 && y == m - 1) {\r\n            return dist[x][y];\r\n        }\r\n        \r\n        for (int i = 0; i < 4; i++) {\r\n            int nx = x + dx[i];\r\n            int ny = y + dy[i];\r\n            \r\n            if (nx >= 0 && nx < n && ny >= 0 && ny < m && g[nx][ny] == 0 && dist[nx][ny] == -1) {\r\n                dist[nx][ny] = dist[x][y] + 1;\r\n                q.push({nx, ny});\r\n            }\r\n        }\r\n    }\r\n    \r\n    return -1;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < m; j++) {\r\n            cin >> g[i][j];\r\n            dist[i][j] = -1;\r\n        }\r\n    }\r\n    \r\n    cout << bfs() << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "144": {
        "path": "solutions/359/144.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nstring start, target;\nint dx[4] = {-1, 0, 1, 0};\nint dy[4] = {0, 1, 0, -1};\n\nint bfs() {\n    queue<string> q;\n    unordered_map<string, int> dist;\n    \n    q.push(start);\n    dist[start] = 0;\n    \n    while (!q.empty()) {\n        string t = q.front();\n        q.pop();\n        \n        if (t == target) {\n            return dist[t];\n        }\n        \n        int pos = t.find('x');\n        int x = pos / 3, y = pos % 3;\n        \n        for (int i = 0; i < 4; i++) {\n            int nx = x + dx[i];\n            int ny = y + dy[i];\n            \n            if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {\n                int npos = nx * 3 + ny;\n                string next = t;\n                swap(next[pos], next[npos]);\n                \n                if (!dist.count(next)) {\n                    dist[next] = dist[t] + 1;\n                    q.push(next);\n                }\n            }\n        }\n    }\n    \n    return -1;\n}\n\nint main() {\n    cin >> start >> target;\n    cout << bfs() << endl;\n    return 0;\n}"
      },
      "145": {
        "path": "solutions/359/145.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include <algorithm>\n#include <cstring>\n\nusing namespace std;\n\nconst int N = 1e5 + 10; //数据范围是10的5次方\nconst int M = 2 * N; //以有向图的格式存储无向图，所以每个节点至多对应2n-2条边\n\nint h[N]; //邻接表存储树，有n个节点，所以需要n个队列头节点\nint e[M]; //存储元素\nint ne[M]; //存储列表的next值\nint idx; //单链表指针\nint n; //题目所给的输入，n个节点\nint ans = N; //表示重心的所有的子树中，最大的子树的结点数目\n\nbool st[N]; //记录节点是否被访问过，访问过则标记为true\n\n//a所对应的单链表中插入b  a作为根 \nvoid add(int a, int b) {\n    e[idx] = b, ne[idx] = h[a], h[a] = idx++;\n}\n\n// dfs 框架\n/*\nvoid dfs(int u){\n    st[u]=true; // 标记一下，记录为已经被搜索过了，下面进行搜索过程\n    for(int i=h[u];i!=-1;i=ne[i]){\n        int j=e[i];\n        if(!st[j]) {\n            dfs(j);\n        }\n    }\n}\n*/\n\n//返回以u为根的子树中节点的个数，包括u节点\nint dfs(int u) {\n    int res = 0; //存储 删掉某个节点之后，最大的连通子图节点数\n    st[u] = true; //标记访问过u节点\n    int sum = 1; //存储 以u为根的树 的节点数, 包括u，如图中的4号节点\n\n    //访问u的每个子节点\n    for (int i = h[u]; i != -1; i = ne[i]) {\n        int j = e[i];\n        //因为每个节点的编号都是不一样的，所以 用编号为下标 来标记是否被访问过\n        if (!st[j]) {\n            int s = dfs(j);  // u节点的单棵子树节点数 如图中的size值\n            res = max(res, s); // 记录最大联通子图的节点数\n            sum += s; //以j为根的树 的节点数\n        }\n    }\n\n    //n-sum 如图中的n-size值，不包括根节点4；\n    res = max(res, n - sum); // 选择u节点为重心，最大的 连通子图节点数\n    ans = min(res, ans); //遍历过的假设重心中，最小的最大联通子图的 节点数\n    return sum;\n}\n\nint main() {\n    memset(h, -1, sizeof h); //初始化h数组 -1表示尾节点\n    cin >> n; //表示树的结点数\n\n    // 题目接下来会输入，n-1行数据，\n    // 树中是不存在环的，对于有n个节点的树，必定是n-1条边\n    for (int i = 0; i < n - 1; i++) {\n        int a, b;\n        cin >> a >> b;\n        add(a, b), add(b, a); //无向图\n    }\n\n    dfs(1); //可以任意选定一个节点开始 u<=n\n\n    cout << ans << endl;\n\n    return 0;\n}\n\n// 作者：松鼠爱葡萄\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/542619/\n// 来源：AcWing\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "146": {
        "path": "solutions/359/146.cpp",
        "language": "cpp",
        "code": "#include<bits/stdc++.h>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\n\r\nint n, m;\r\nint h[N], e[N], ne[N], idx;\r\nint d[N];\r\n\r\nvoid add(int a, int b){\r\n    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;\r\n}\r\n\r\nint bfs(){//宽搜遍历\r\n    memset(d, -1, sizeof d);\r\n\r\n    queue<int> q;\r\n    d[1] = 0;//第一格需要0步\r\n    q.push(1);//放入队列\r\n\r\n    while (q.size()){//循环遍历整个队列\r\n        int t = q.front();\r\n        q.pop();\r\n\r\n        for (int i = h[t]; i != -1; i = ne[i]){\r\n            int j = e[i];//获取当前值\r\n            if (d[j] == -1){//未走过\r\n                d[j] = d[t] + 1;//等于上一个点加1步\r\n                q.push(j);//放入队列\r\n            }\r\n        }\r\n    }\r\n\r\n    return d[n];//返回n号点所需的步数\r\n}\r\n\r\nint main(){\r\n    scanf(\"%d%d\", &n, &m);\r\n    memset(h, -1, sizeof h);\r\n\r\n    for (int i = 0; i < m; i ++ ){\r\n        int a, b;\r\n        scanf(\"%d%d\", &a, &b);\r\n        add(a, b);//单项连接(有向图)\r\n    }\r\n\r\n    cout << bfs() << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n// 作者：Lucky_Three\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/9655978/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "147": {
        "path": "solutions/359/147.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <queue>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nvector<int> g[N];\r\nint d[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        g[a].push_back(b);\r\n        d[b]++;\r\n    }\r\n    \r\n    queue<int> q;\r\n    for (int i = 1; i <= n; i++) {\r\n        if (d[i] == 0) {\r\n            q.push(i);\r\n        }\r\n    }\r\n    \r\n    vector<int> ans;\r\n    while (!q.empty()) {\r\n        int u = q.front();\r\n        q.pop();\r\n        ans.push_back(u);\r\n        \r\n        for (int i = 0; i < g[u].size(); i++) {\r\n            int v = g[u][i];\r\n            d[v]--;\r\n            if (d[v] == 0) {\r\n                q.push(v);\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (ans.size() != n) {\r\n        cout << -1 << endl;\r\n    } else {\r\n        for (int i = 0; i < ans.size(); i++) {\r\n            cout << ans[i] << (i == ans.size() - 1 ? '\\n' : ' ');\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "148": {
        "path": "solutions/359/148.cpp",
        "language": "cpp",
        "code": "#include <cstring>\r\n#include <iostream>\r\n#include <algorithm>\r\n#include <queue>//堆的头文件\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int, int> PII;//堆里存储距离和节点编号\r\n\r\nconst int N = 1e6 + 10;\r\n\r\nint n, m;//节点数量和边数\r\nint h[N], w[N], e[N], ne[N], idx;//邻接表存储图\r\nint dist[N];//存储距离\r\nbool st[N];//存储状态\r\n\r\nvoid add(int a, int b, int c)\r\n{\r\n    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;\r\n}\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist, 0x3f, sizeof dist);//距离初始化为无穷大\r\n    dist[1] = 0;\r\n    priority_queue<PII, vector<PII>, greater<PII>> heap;//小根堆\r\n    heap.push({0, 1});//插入距离和节点编号\r\n\r\n    while (heap.size())\r\n    {\r\n        auto t = heap.top();//取距离源点最近的点\r\n        heap.pop();\r\n\r\n        int ver = t.second, distance = t.first;//ver:节点编号，distance:源点距离ver 的距离\r\n\r\n        if (st[ver]) continue;//如果距离已经确定，则跳过该点\r\n        st[ver] = true;\r\n\r\n        for (int i = h[ver]; i != -1; i = ne[i])//更新ver所指向的节点距离\r\n        {\r\n            int j = e[i];\r\n            if (dist[j] > dist[ver] + w[i])\r\n            {\r\n                dist[j] = dist[ver] + w[i];\r\n                heap.push({dist[j], j});//距离变小，则入堆\r\n            }\r\n        }\r\n    }\r\n\r\n    if (dist[n] == 0x3f3f3f3f) return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &m);\r\n\r\n    memset(h, -1, sizeof h);\r\n    while (m -- )\r\n    {\r\n        int a, b, c;\r\n        scanf(\"%d%d%d\", &a, &b, &c);\r\n        add(a, b, c);\r\n    }\r\n\r\n    cout << dijkstra() << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n//参考yxc\r\n\r\n// 作者：Hasity\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/1906644/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "149": {
        "path": "solutions/359/149.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<cstring>\r\n#include<cstdio>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 510, M = 100010;\r\n\r\nint g[N][N], dist[N];\r\nbool visited[N];\r\n\r\nint n, m;\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist, 0x3f, sizeof(dist));\r\n    dist[1] = 0;\r\n    for(int i = 1; i <= n; i++)\r\n    {\r\n        int t = -1;\r\n        for(int j = 1; j <= n; j++)\r\n        {\r\n            if(!visited[j] && (t == -1 || dist[j] < dist[t]))\r\n                t = j;\r\n        }\r\n        visited[t] = true;\r\n        for(int j = 1; j <= n; j++)\r\n            dist[j] = min(dist[j], dist[t] + g[t][j]);\r\n    }\r\n    if(dist[n] == 0x3f3f3f3f) return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &m);\r\n\r\n    memset(g, 0x3f, sizeof(g));\r\n    while (m--)\r\n    {\r\n        int x, y, c;\r\n        scanf(\"%d%d%d\", &x, &y, &c);\r\n        g[x][y] = min(g[x][y], c);\r\n    }\r\n    cout << dijkstra() << endl;\r\n    return 0;\r\n}\r\n\r\n// 作者：optimjie\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/154643/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "150": {
        "path": "solutions/359/150.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint h[N], e[N], w[N], ne[N], idx;//邻接表，存储图\r\nint st[N];//标记顶点是不是在队列中\r\nint dist[N];//保存最短路径的值\r\nint q[N], hh, tt = -1;//队列\r\n\r\nvoid add(int a, int b, int c){//图中添加边和边的端点\r\n    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx++;\r\n}\r\n\r\nvoid spfa(){\r\n    q[++tt] = 1;//从1号顶点开始松弛，1号顶点入队\r\n    dist[1] = 0;//1号到1号的距离为 0\r\n    st[1] = 1;//1号顶点在队列中\r\n    while(tt >= hh){//不断进行松弛\r\n        int a = q[hh++];//取对头记作a，进行松弛\r\n        st[a] = 0;//取完队头后，a不在队列中了\r\n        for(int i = h[a]; i != -1; i = ne[i])//遍历所有和a相连的点\r\n        {\r\n            int b = e[i], c = w[i];//获得和a相连的点和边\r\n            if(dist[b] > dist[a] + c){//如果可以距离变得更短，则更新距离\r\n\r\n                dist[b] = dist[a] + c;//更新距离\r\n\r\n                if(!st[b]){//如果没在队列中\r\n                    q[++tt] = b;//入队\r\n                    st[b] = 1;//打标记\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nint main(){\r\n    memset(h, -1, sizeof h);//初始化邻接表\r\n    memset(dist, 0x3f, sizeof dist);//初始化距离\r\n    int n, m;//保存点的数量和边的数量\r\n    cin >> n >> m;\r\n    for(int i = 0; i < m; i++){//读入每条边和边的端点\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        add(a, b, w);//加入到邻接表\r\n    }\r\n    spfa();\r\n    if(dist[n] == 0x3f3f3f3f )//如果到n点的距离是无穷，则不能到达 \r\n        cout << \"impossible\";\r\n    else cout << dist[n];//否则能到达，输出距离\r\n    return 0;\r\n}\r\n\r\n// 作者：Hasity\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/4486341/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "151": {
        "path": "solutions/359/151.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 210;\r\nconst int INF = 0x3f3f3f3f;\r\nint d[N][N];\r\nint n, m, q;\r\n\r\nint main() {\r\n    cin >> n >> m >> q;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= n; j++) {\r\n            if (i == j) d[i][j] = 0;\r\n            else d[i][j] = INF;\r\n        }\r\n    }\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        d[a][b] = min(d[a][b], w);\r\n    }\r\n    \r\n    for (int k = 1; k <= n; k++) {\r\n        for (int i = 1; i <= n; i++) {\r\n            for (int j = 1; j <= n; j++) {\r\n                if (d[i][k] != INF && d[k][j] != INF) {\r\n                    d[i][j] = min(d[i][j], d[i][k] + d[k][j]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    while (q--) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        if (d[a][b] == INF) cout << \"impossible\" << endl;\r\n        else cout << d[a][b] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "152": {
        "path": "solutions/359/152.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 510;\r\nconst int INF = 0x3f3f3f3f;\r\nint g[N][N];\r\nint dist[N];\r\nbool st[N];\r\nint n, m;\r\n\r\nint prim() {\r\n    memset(dist, 0x3f, sizeof(dist));\r\n    int res = 0;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int t = -1;\r\n        for (int j = 1; j <= n; j++) {\r\n            if (!st[j] && (t == -1 || dist[t] > dist[j])) {\r\n                t = j;\r\n            }\r\n        }\r\n        \r\n        if (i && dist[t] == INF) return -1;\r\n        \r\n        if (i) res += dist[t];\r\n        st[t] = true;\r\n        \r\n        for (int j = 1; j <= n; j++) {\r\n            if (dist[j] > g[t][j]) {\r\n                dist[j] = g[t][j];\r\n            }\r\n        }\r\n    }\r\n    \r\n    return res;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    memset(g, 0x3f, sizeof(g));\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        g[a][b] = g[b][a] = min(g[a][b], w);\r\n    }\r\n    \r\n    int ans = prim();\r\n    \r\n    if (ans == -1) cout << \"impossible\" << endl;\r\n    else cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "153": {
        "path": "solutions/359/153.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nconst int M = 200010;\r\nint p[N];\r\nint n, m;\r\n\r\nstruct Edge {\r\n    int a, b, w;\r\n    bool operator< (const Edge &W) const {\r\n        return w < W.w;\r\n    }\r\n} edges[M];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]);\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 1; i <= n; i++) p[i] = i;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        edges[i] = {a, b, w};\r\n    }\r\n    \r\n    sort(edges, edges + m);\r\n    \r\n    int res = 0, cnt = 0;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a = edges[i].a, b = edges[i].b, w = edges[i].w;\r\n        int pa = find(a), pb = find(b);\r\n        \r\n        if (pa != pb) {\r\n            p[pa] = pb;\r\n            res += w;\r\n            cnt++;\r\n        }\r\n    }\r\n    \r\n    if (cnt < n - 1) cout << \"impossible\" << endl;\r\n    else cout << res << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "154": {
        "path": "solutions/359/154.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nvector<int> g[N];\r\nint color[N];\r\nint n, m;\r\n\r\nbool dfs(int u, int c) {\r\n    color[u] = c;\r\n    \r\n    for (int i = 0; i < g[u].size(); i++) {\r\n        int v = g[u][i];\r\n        if (!color[v]) {\r\n            if (!dfs(v, 3 - c)) return false;\r\n        } else if (color[v] == c) {\r\n            return false;\r\n        }\r\n    }\r\n    \r\n    return true;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        g[a].push_back(b);\r\n        g[b].push_back(a);\r\n    }\r\n    \r\n    bool flag = true;\r\n    for (int i = 1; i <= n; i++) {\r\n        if (!color[i]) {\r\n            if (!dfs(i, 1)) {\r\n                flag = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (flag) cout << \"Yes\" << endl;\r\n    else cout << \"No\" << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "155": {
        "path": "solutions/359/155.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nconst int N = 1010;\nint f[N];\nint n, m;\n\nint main() {\n    cin >> n >> m;\n    \n    for (int i = 0; i < n; i++) {\n        int v, w;\n        cin >> v >> w;\n        for (int j = m; j >= v; j--) {\n            f[j] = max(f[j], f[j - v] + w);\n        }\n    }\n    \n    cout << f[m] << endl;\n    \n    return 0;\n}"
      },
      "156": {
        "path": "solutions/359/156.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w;\r\n        cin >> v >> w;\r\n        for (int j = v; j <= m; j++) {\r\n            f[j] = max(f[j], f[j - v] + w);\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "157": {
        "path": "solutions/359/157.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 510;\r\nint f[N][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= i; j++) {\r\n            cin >> f[i][j];\r\n        }\r\n    }\r\n    \r\n    for (int i = n - 1; i >= 1; i--) {\r\n        for (int j = 1; j <= i; j++) {\r\n            f[i][j] += max(f[i + 1][j], f[i + 1][j + 1]);\r\n        }\r\n    }\r\n    \r\n    cout << f[1][1] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "158": {
        "path": "solutions/359/158.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint a[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> a[i];\r\n    }\r\n    \r\n    vector<int> tails;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        auto it = lower_bound(tails.begin(), tails.end(), a[i]);\r\n        if (it == tails.end()) {\r\n            tails.push_back(a[i]);\r\n        } else {\r\n            *it = a[i];\r\n        }\r\n    }\r\n    \r\n    cout << tails.size() << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "159": {
        "path": "solutions/359/159.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N][N];\r\nchar a[N], b[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    cin >> a + 1;\r\n    cin >> b + 1;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= m; j++) {\r\n            if (a[i] == b[j]) {\r\n                f[i][j] = f[i - 1][j - 1] + 1;\r\n            } else {\r\n                f[i][j] = max(f[i - 1][j], f[i][j - 1]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[n][m] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "160": {
        "path": "solutions/359/160.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 310;\r\nint a[N], s[N];\r\nint f[N][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        cin >> a[i];\r\n        s[i] = s[i - 1] + a[i];\r\n    }\r\n    \r\n    memset(f, 0x3f, sizeof(f));\r\n    for (int i = 1; i <= n; i++) f[i][i] = 0;\r\n    \r\n    for (int len = 2; len <= n; len++) {\r\n        for (int i = 1; i + len - 1 <= n; i++) {\r\n            int j = i + len - 1;\r\n            for (int k = i; k < j; k++) {\r\n                f[i][j] = min(f[i][j], f[i][k] + f[k + 1][j] + s[j] - s[i - 1]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[1][n] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "161": {
        "path": "solutions/359/161.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cmath>\r\n#include <string>\r\nusing namespace std;\r\nconst int N = 1009;\r\nchar a[N], b[N];\r\nint dp[2][N]; \r\nint main(){\r\n    ios::sync_with_stdio(0); cin.tie(0);\r\n    int n, m;\r\n    cin>>n>>a+1>>m>>b+1;\r\n    //初始化\r\n    for(int i = 0; i <= m; i++) dp[0][i] = i;\r\n    for(int i = 1; i <= n; i++){\r\n    //两行dp循环使用\r\n        int now = (i & 1), old = (i - 1 & 1);\r\n        dp[now][0] = i;//初始化\r\n        for(int j = 1; j <= m; j++){\r\n            if(a[i] == b[j]) dp[now][j] = dp[old][j-1];\r\n            else dp[now][j] = min(min(dp[old][j], dp[now][j-1]), dp[old][j-1]) + 1;\r\n        }\r\n    }\r\n    cout<<dp[n & 1][m];\r\n    return 0;\r\n}\r\n\r\n// 作者：stary_sky\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/11245790/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "162": {
        "path": "solutions/359/162.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 310;\r\nint g[N][N];\r\nint f[N][N];\r\nint r, c;\r\nint dx[4] = {-1, 0, 1, 0};\r\nint dy[4] = {0, 1, 0, -1};\r\n\r\nint dfs(int x, int y) {\r\n    if (f[x][y] != -1) return f[x][y];\r\n    \r\n    f[x][y] = 1;\r\n    for (int i = 0; i < 4; i++) {\r\n        int nx = x + dx[i];\r\n        int ny = y + dy[i];\r\n        if (nx >= 1 && nx <= r && ny >= 1 && ny <= c && g[nx][ny] < g[x][y]) {\r\n            f[x][y] = max(f[x][y], dfs(nx, ny) + 1);\r\n        }\r\n    }\r\n    \r\n    return f[x][y];\r\n}\r\n\r\nint main() {\r\n    cin >> r >> c;\r\n    \r\n    for (int i = 1; i <= r; i++) {\r\n        for (int j = 1; j <= c; j++) {\r\n            cin >> g[i][j];\r\n        }\r\n    }\r\n    \r\n    memset(f, -1, sizeof(f));\r\n    \r\n    int ans = 0;\r\n    for (int i = 1; i <= r; i++) {\r\n        for (int j = 1; j <= c; j++) {\r\n            ans = max(ans, dfs(i, j));\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "163": {
        "path": "solutions/359/163.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20010;\r\nint f[N];\r\nint n, m;\r\n\r\nstruct Item {\r\n    int v, w;\r\n};\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    vector<Item> items;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w, s;\r\n        cin >> v >> w >> s;\r\n        \r\n        for (int k = 1; k <= s; k *= 2) {\r\n            s -= k;\r\n            items.push_back({v * k, w * k});\r\n        }\r\n        if (s > 0) {\r\n            items.push_back({v * s, w * s});\r\n        }\r\n    }\r\n    \r\n    for (int i = 0; i < items.size(); i++) {\r\n        for (int j = m; j >= items[i].v; j--) {\r\n            f[j] = max(f[j], f[j - items[i].v] + items[i].w);\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "164": {
        "path": "solutions/359/164.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w, s;\r\n        cin >> v >> w >> s;\r\n        \r\n        int k = 1;\r\n        while (k <= s) {\r\n            for (int j = m; j >= k * v; j--) {\r\n                f[j] = max(f[j], f[j - k * v] + k * w);\r\n            }\r\n            s -= k;\r\n            k *= 2;\r\n        }\r\n        if (s > 0) {\r\n            for (int j = m; j >= s * v; j--) {\r\n                f[j] = max(f[j], f[j - s * v] + s * w);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "165": {
        "path": "solutions/359/165.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 110;\r\nint f[N];\r\nint v[N], w[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int s;\r\n        cin >> s;\r\n        for (int j = 0; j < s; j++) {\r\n            cin >> v[j] >> w[j];\r\n        }\r\n        for (int j = m; j >= 0; j--) {\r\n            for (int k = 0; k < s; k++) {\r\n                if (j >= v[k]) {\r\n                    f[j] = max(f[j], f[j - v[k]] + w[k]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "166": {
        "path": "solutions/359/166.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint a[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> a[i];\r\n    }\r\n    \r\n    vector<int> tails;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        auto it = lower_bound(tails.begin(), tails.end(), a[i]);\r\n        if (it == tails.end()) {\r\n            tails.push_back(a[i]);\r\n        } else {\r\n            *it = a[i];\r\n        }\r\n    }\r\n    \r\n    cout << tails.size() << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "167": {
        "path": "solutions/359/167.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nconst int MOD = 1e9 + 7;\r\nint f[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    f[0] = 1;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = i; j <= n; j++) {\r\n            f[j] = (f[j] + f[j - i]) % MOD;\r\n        }\r\n    }\r\n    \r\n    cout << f[n] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "168": {
        "path": "solutions/359/168.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <vector>\r\n#include <cmath>\r\nusing namespace std;\r\n\r\nint a, b;\r\n\r\n// 得到一个数中某几个相邻的数字构成的数值\r\n// 一定要记住从高位往低位遍历\r\nint get_num(vector<int> num, int l, int r){\r\n    int ans = 0;\r\n    for (int i = l; i >= r; i --) ans = ans * 10 + num[i];\r\n    return ans;\r\n}\r\n\r\n// 计算1到n的所有的数中数字x出现的次数\r\nint count(int n, int x){\r\n    vector<int> num;\r\n    while (n){\r\n        num.push_back(n % 10);\r\n        n /= 10;\r\n    }\r\n    int len = num.size(), ans = 0;\r\n    for (int i = len - 1 - !x; i >= 0; i --){ // 此处减去 !x 是精华\r\n        // 000 ~ abc-1\r\n        ans += get_num(num, len - 1, i + 1) * (int)pow(10, i);\r\n        if (!x) ans -= (int)pow(10, i);  // x==0时，001 ~ abc-1\r\n        // abc\r\n        if (x == num[i]) ans += (get_num(num, i - 1, 0) + 1);\r\n        else if (x < num[i]) ans += (int)pow(10, i);\r\n    }\r\n    return ans;\r\n\r\n}\r\n\r\nint main(){\r\n    while (cin >> a >> b, a || b){ // a b 不全为0\r\n        if (a > b) swap(a, b);\r\n        for (int i = 0; i <= 9; i ++) printf(\"%d \", count(b, i) - count(a - 1, i));\r\n        puts(\"\");\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\n// 作者：Qiner\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/12793336/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
      },
      "169": {
        "path": "solutions/359/169.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nconst int N = 12;\nlong long f[N][1 << N];\nint n, m;\n\nvoid dfs(int col, int row, int cur_state, int next_state) {\n    if (row == n) {\n        f[col + 1][next_state] += f[col][cur_state];\n        return;\n    }\n    \n    if (cur_state & (1 << row)) {\n        dfs(col, row + 1, cur_state, next_state);\n    } else {\n        // 竖放\n        dfs(col, row + 1, cur_state, next_state | (1 << row));\n        // 横放\n        if (row + 1 < n && !(cur_state & (1 << (row + 1)))) {\n            dfs(col, row + 2, cur_state, next_state);\n        }\n    }\n}\n\nint main() {\n    while (cin >> n >> m && n && m) {\n        if (n > m) swap(n, m);\n        \n        memset(f, 0, sizeof(f));\n        f[0][0] = 1;\n        \n        for (int col = 0; col < m; col++) {\n            for (int state = 0; state < (1 << n); state++) {\n                if (f[col][state]) {\n                    dfs(col, 0, state, 0);\n                }\n            }\n        }\n        \n        cout << f[m][0] << endl;\n    }\n    \n    return 0;\n}"
      },
      "170": {
        "path": "solutions/359/170.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20;\r\nconst int M = 1 << N;\r\nint g[N][N];\r\nint f[M][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < n; j++) {\r\n            cin >> g[i][j];\r\n        }\r\n    }\r\n    \r\n    memset(f, 0x3f, sizeof(f));\r\n    f[1][0] = 0;\r\n    \r\n    for (int mask = 1; mask < (1 << n); mask++) {\r\n        for (int i = 0; i < n; i++) {\r\n            if (!(mask & (1 << i))) continue;\r\n            for (int j = 0; j < n; j++) {\r\n                if (i == j) continue;\r\n                if (!(mask & (1 << j))) continue;\r\n                f[mask][i] = min(f[mask][i], f[mask ^ (1 << i)][j] + g[j][i]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[(1 << n) - 1][n - 1] << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "171": {
        "path": "solutions/359/171.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\n#include <string>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint dp[N][N];\r\nstring dict[N];\r\nint n, m;\r\n\r\nint edit_distance(string a, string b) {\r\n    int len1 = a.length(), len2 = b.length();\r\n    \r\n    for (int i = 0; i <= len1; i++) dp[i][0] = i;\r\n    for (int j = 0; j <= len2; j++) dp[0][j] = j;\r\n    \r\n    for (int i = 1; i <= len1; i++) {\r\n        for (int j = 1; j <= len2; j++) {\r\n            if (a[i - 1] == b[j - 1]) {\r\n                dp[i][j] = dp[i - 1][j - 1];\r\n            } else {\r\n                dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return dp[len1][len2];\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> dict[i];\r\n    }\r\n    \r\n    while (m--) {\r\n        string s;\r\n        int k;\r\n        cin >> s >> k;\r\n        \r\n        int cnt = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            if (edit_distance(dict[i], s) <= k) {\r\n                cnt++;\r\n            }\r\n        }\r\n        \r\n        cout << cnt << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "172": {
        "path": "solutions/359/172.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 6010;\r\nvector<int> g[N];\r\nint happy[N];\r\nint dp[N][2];\r\nbool has_parent[N];\r\nint n;\r\n\r\nvoid dfs(int u) {\r\n    dp[u][0] = 0;\r\n    dp[u][1] = happy[u];\r\n    \r\n    for (int i = 0; i < g[u].size(); i++) {\r\n        int v = g[u][i];\r\n        dfs(v);\r\n        dp[u][0] += max(dp[v][0], dp[v][1]);\r\n        dp[u][1] += dp[v][0];\r\n    }\r\n}\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        cin >> happy[i];\r\n    }\r\n    \r\n    for (int i = 0; i < n - 1; i++) {\r\n        int l, k;\r\n        cin >> l >> k;\r\n        g[k].push_back(l);\r\n        has_parent[l] = true;\r\n    }\r\n    \r\n    int root = 1;\r\n    while (has_parent[root]) root++;\r\n    \r\n    dfs(root);\r\n    \r\n    cout << max(dp[root][0], dp[root][1]) << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "001": {
        "path": "solutions/359/001.cpp",
        "language": "cpp",
        "code": "//简单题：A+B\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << A + B;\r\n    return 0;\r\n}\r\n"
      },
      "002": {
        "path": "solutions/359/002.cpp",
        "language": "cpp",
        "code": "//简单题：A*B\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << \"PROD = \" << A * B << endl;\r\n    return 0;\r\n}"
      },
      "003": {
        "path": "solutions/359/003.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B, C, D;\r\n    cin >> A >> B >> C >> D;\r\n    cout <<\"DIFFERENCE = \" << A * B - C * D << endl;\r\n    return 0;\r\n}//输出案例缺少\"DIFFERENCE = \""
      },
      "004": {
        "path": "solutions/359/004.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    double C;\r\n    scanf(\"%d%d%lf\",&A,&B,&C);\r\n    printf(\"TOTAL = %.2lf\", B * C);//注意小数位数\r\n    return 0;\r\n}"
      },
      "005": {
        "path": "solutions/359/005.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\n#define pi 3.14159\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A;\r\n    scanf(\"%lf\",&A);\r\n    printf(\"A=%.4lf\", A * A * pi);\r\n    return 0;\r\n}"
      },
      "006": {
        "path": "solutions/359/006.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;\r\n    scanf(\"%lf%lf\",&a,&b);//剑术权重3.5，心法权重7.5\r\n    printf(\"Average = %.5lf\", (a*3.5+b*7.5)/11.0 );//注意位数\r\n    return 0;\r\n}"
      },
      "007": {
        "path": "solutions/359/007.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double b;\r\n    int a,c;\r\n    scanf(\"%d\", &c);\r\n    scanf(\"%d%lf\",&a,&b);\r\n    printf(\"NUMBER = %d\\n\", c);\r\n    printf(\"SALARY = U$ %.2lf\",a*b );//注意格式\r\n    return 0;\r\n}"
      },
      "008": {
        "path": "solutions/359/008.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;//浮点数\r\n    scanf(\"%lf%lf\",&a,&b);\r\n    printf(\"%.3lf km/l\",a/b );\r\n \r\n    return 0;\r\n}"
      },
      "009": {
        "path": "solutions/359/009.cpp",
        "language": "cpp",
        "code": "//简单题：根据描述得出结果\r\n#include <stdio.h>\r\n#define pi 3.14159\r\nint main()\r\n{\r\n    double r;//浮点数\r\n    scanf(\"%lf\",&r);\r\n    printf(\"VOLUME = %.3lf\",(4.0/3)*pi*r*r*r );//注意位数\r\n    return 0;\r\n}"
      },
      "010": {
        "path": "solutions/359/010.c",
        "language": "c",
        "code": "//简单题：比较大小\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int a,b,c,d;\r\n    scanf(\"%d%d%d\",&a,&b,&c);\r\n    d = (a > b ? a : b) > c ? (a > b ? a : b) : c;//用三次？：判断\r\n    printf(\"Max = %d\", d);\r\n    return 0;\r\n}"
      },
      "011": {
        "path": "solutions/359/011.c",
        "language": "c",
        "code": "#include <stdio.h>\r\n#include <math.h>\r\nint main()\r\n{\r\n    double x1, y1, x2, y2, l;\r\n    scanf(\"%lf%lf%lf%lf\",&x1,&y1,&x2,&y2);\r\n    l = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));\r\n    printf(\"%.4lf\", l);//题目输出写保留两位小数有误\r\n    return 0;\r\n}"
      },
      "012": {
        "path": "solutions/359/012.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    double a, b, c;\r\n    scanf(\"%lf%lf%lf\", &a, &b, &c);\r\n    printf(\"TRIANGULO: %.3lf\\n\", (a * c) / 2.0);\r\n    printf(\"CIRCULO: %.3lf\\n\", 3.14159 * c * c);\r\n    printf(\"TRAPEZIO: %.3lf\\n\", (a + b) * c / 2.0);\r\n    printf(\"QUADRADO: %.3lf\\n\", b * b);\r\n    printf(\"RETANGULO: %.3lf\\n\", a * b);\r\n    return 0;\r\n}\r\n"
      },
      "013": {
        "path": "solutions/359/013.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int t, h = 0, m = 0, s = 0;\r\n    scanf(\"%d\", &t);\r\n    h = t / 3600;\r\n    m = (t - 3600 * h) / 60;\r\n    s = t - 3600 * h - 60 * m;\r\n    printf(\"%d:%d:%d\", h, m, s);\r\n    return 0;\r\n}"
      },
      "014": {
        "path": "solutions/359/014.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int money, m100 = 0, m50 = 0, m20 = 0, m10 = 0, m5 = 0, m2 = 0, m1 = 0;\r\n    scanf(\"%d\", &money);\r\n    m100 = money / 100;\r\n    m50 = (money - 100 * m100) / 50;\r\n    m20 = (money - 100 * m100 - 50 * m50) / 20;\r\n    m10 = (money - 100 * m100 - 50 * m50 - 20 * m20) / 10;\r\n    m5 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10) / 5;\r\n    m2 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5) / 2;\r\n    m1 = money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5 - 2 * m2;\r\n    printf(\"%d\\n\", money);\r\n    printf(\"%d nota(s) de R$ 100,00\\n\", m100);\r\n    printf(\"%d nota(s) de R$ 50,00\\n\", m50);\r\n    printf(\"%d nota(s) de R$ 20,00\\n\", m20);\r\n    printf(\"%d nota(s) de R$ 10,00\\n\", m10);\r\n    printf(\"%d nota(s) de R$ 5,00\\n\", m5);\r\n    printf(\"%d nota(s) de R$ 2,00\\n\", m2);\r\n    printf(\"%d nota(s) de R$ 1,00\\n\", m1);\r\n    return 0;\r\n}\r\n"
      },
      "015": {
        "path": "solutions/359/015.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int A, B;\r\n    scanf(\"%d%d\", &A, &B);\r\n    if (A % B == 0 || B % A == 0)printf(\"Yes\");\r\n    else printf(\"No\");\r\n    return 0;\r\n}"
      },
      "016": {
        "path": "solutions/359/016.c",
        "language": "c",
        "code": "#include <stdio.h>\r\n#include <math.h>\r\nint main()\r\n{\r\n    double A, B, C;\r\n    scanf(\"%lf%lf%lf\", &A, &B, &C);\r\n    if (A + B > C && B + C > A && A + C > B)printf(\"Perimeter = %.1lf\", A + B + C);\r\n    else printf(\"Area = %.1lf\", (A + B) * C / 2);\r\n    return 0;\r\n}"
      },
      "017": {
        "path": "solutions/359/017.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int A, B;\r\n    scanf(\"%d%d\", &A, &B);\r\n    if (B > A)printf(\"%d\", B - A);\r\n    else if (A == B)printf(\"%d\", 24);\r\n    else if (A > B)printf(\"%d\", 24 - A + B);\r\n    return 0;\r\n}"
      },
      "018": {
        "path": "solutions/359/018.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int a, b, c,temp = 0;\r\n    scanf(\"%d%d%d\", &a, &b, &c);\r\n    if (a < b)\r\n    {\r\n        temp = a;\r\n        a = b;\r\n        b = temp;\r\n    }\r\n    if (a < c)\r\n    {\r\n        temp = a;\r\n        a = c;\r\n        c = temp;\r\n    }\r\n    if (b < c)\r\n    {\r\n        temp = b;\r\n        b = c;\r\n        c = temp;\r\n    }\r\n    printf(\"%d %d %d\",c,b,a);\r\n    return 0;\r\n}"
      },
      "019": {
        "path": "solutions/359/019.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int name, num;\r\n    double price[] = { 4.00,4.50,5.00,2.00,1.50 };\r\n    scanf(\"%d%d\", &name, &num);\r\n    printf(\"Total: R$ %.2lf\", price[name - 1] * num);\r\n    return 0;\r\n}"
      },
      "020": {
        "path": "solutions/359/020.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    float power; \r\n    scanf(\"%f\", &power);\r\n    if (power >= 0 && power <= 25) \r\n    {\r\n        printf(\"Interval [0,25]\\n\");\r\n    } \r\n    else if (power > 25 && power <= 50)\r\n    {\r\n        printf(\"Interval (25,50]\\n\");\r\n    } \r\n    else if (power > 50 && power <= 75) \r\n    {\r\n        printf(\"Interval (50,75]\\n\");\r\n    } \r\n    else if (power > 75 && power <= 100)\r\n    {\r\n        printf(\"Interval (75,100]\\n\");\r\n    } \r\n    else\r\n    {\r\n        printf(\"Out of interval\\n\");\r\n    }\r\n\r\n    return 0;\r\n}"
      },
      "021": {
        "path": "solutions/359/021.c",
        "language": "c",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    double x,y;\r\n    scanf(\"%lf%lf\", &x,&y);\r\n    if (x > 0 && y > 0)\r\n    {\r\n        printf(\"Q1\");\r\n    }\r\n    else if (x < 0 && y > 0)\r\n    {\r\n        printf(\"Q2\");\r\n    }\r\n    else if (x < 0 && y < 0)\r\n    {\r\n        printf(\"Q3\");\r\n    }\r\n    else if (x > 0 && y < 0)\r\n    {\r\n        printf(\"Q4\");\r\n    }\r\n    else if (x != 0 && y == 0)\r\n    {\r\n        printf(\"Eixo X\");\r\n    }\r\n    else if (x == 0 && y != 0)\r\n    {\r\n        printf(\"Eixo Y\");\r\n    }\r\n    else if (x == 0 && y == 0)\r\n    {\r\n        printf(\"Origem\");\r\n    }\r\n    return 0;\r\n}"
      },
      "022": {
        "path": "solutions/359/022.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int A, B, C, D,temp;\r\n    cin >> A >> B >> C >> D;\r\n    int m1 = A * 60 + B;\r\n\tint m2 = C * 60 + D;\r\n    if (m1 >= m2)temp = 24 * 60 + m2 - m1;\r\n\telse temp = m2 - m1;\r\n\tcout << temp / 60 << \":\" << temp % 60 << endl;\r\n    return 0;\r\n}"
      },
      "023": {
        "path": "solutions/359/023.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<iomanip>\r\nusing namespace std;\r\n//iomanip is used to set the precision of the output\r\nint main()\r\n{\r\n    double salary;\r\n\tcin >> salary;\r\n\tif (salary >= 0 && salary <= 400)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<< setprecision(2) <<salary * 1.15 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.15 << endl;\r\n\t\tcout << \"Percentage:\" << \" 15 %\" << endl;\r\n\t}\r\n\telse if (salary >= 400.01 && salary <= 800)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<<salary * 1.12 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.12 << endl;\r\n\t\tcout << \"Percentage:\" << \" 12 %\" << endl;\r\n\t}\r\n\telse if (salary >= 800.01 && salary <= 1200)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<< setprecision(2) << salary * 1.10 << endl;\r\n\t\tcout << \"Increase: \" << fixed<<setprecision(2)<<salary * 0.10 << endl;\r\n\t\tcout << \"Percentage:\" << \" 10 %\" << endl;\r\n\t}\r\n\telse if (salary >= 1200.01 && salary <= 2000)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<< salary * 1.07 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.07 << endl;\r\n\t\tcout << \"Percentage:\" << \" 7 %\" << endl;\r\n\t}\r\n\telse if(salary>2000)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<< salary * 1.04 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.04 << endl;\r\n\t\tcout << \"Percentage:\" << \" 4 %\" << endl;\r\n\t}\r\n\treturn 0;\r\n}"
      },
      "024": {
        "path": "solutions/359/024.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A,B,C,D;\r\n    cin>>A>>B>>C>>D; //B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。\r\n    if(A%2==0 && B>A && D>A && (C+D)>(A+B) && C>0)\r\n    {\r\n        cout<<\"Accepted\"<<endl;\r\n    }\r\n    else\r\n    {\r\n        cout<<\"Not accepted\"<<endl;\r\n    }\r\n}"
      },
      "025": {
        "path": "solutions/359/025.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a;\r\n    cin>>a;\r\n    if(a==61)\r\n    {\r\n        cout<<\"Brasilia\"<<endl;\r\n    }\r\n    else if(a==71)\r\n    {\r\n        cout<<\"Salvador\"<<endl;\r\n    }\r\n    else if(a==11)\r\n    {\r\n        cout<<\"Sao Paulo\"<<endl;\r\n    }\r\n    else if(a==21)\r\n    {\r\n        cout<<\"Rio de Janeiro\"<<endl;\r\n    }\r\n    else if(a==32)\r\n    {\r\n        cout<<\"Juiz de Fora\"<<endl;\r\n    }\r\n    else if(a==19)\r\n    {\r\n        cout<<\"Campinas\"<<endl;\r\n    }\r\n    else if(a==27)\r\n    {\r\n        cout<<\"Vitoria\"<<endl;\r\n    }\r\n    else if(a==31)\r\n    {\r\n        cout<<\"Belo Horizonte\"<<endl;\r\n    }\r\n    else\r\n    {\r\n        cout<<\"DDD nao cadastrado\"<<endl;\r\n    }\r\n}"
      },
      "026": {
        "path": "solutions/359/026.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a,b,c;\r\n    cin>>a>>b>>c;\r\n    if(a+b>c&&a+c>b&&b+c>a)\r\n    {\r\n        if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a)\r\n        {\r\n            cout<<\"Right\"<<endl;\r\n        }\r\n        else if(a*a+b*b>c*c&&a*a+c*c>b*b&&b*b+c*c>a*a)\r\n        {\r\n            cout<<\"Acute\"<<endl;\r\n        }\r\n        else\r\n        {\r\n            cout<<\"Obtuse\"<<endl;\r\n        }\r\n        if(a==b&&b==c)\r\n        {\r\n            cout<<\"Equilateral\"<<endl;\r\n        }\r\n        else if(a==b||b==c||a==c)\r\n        {\r\n            cout<<\"Isosceles\"<<endl;\r\n        }\r\n    }\r\n    else\r\n    {\r\n        cout<<\"Not a triangle\"<<endl;\r\n    }\r\n}"
      },
      "027": {
        "path": "solutions/359/027.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    string first,second,third;\r\n    cin>>first>>second>>third;\r\n    if(first==\"vertebrate\")\r\n    {\r\n        if(second==\"bird\")\r\n        {\r\n            if(third==\"carnivore\")\r\n            {\r\n                cout<<\"eagle\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"dove\"<<endl;\r\n            }\r\n        }\r\n        else if(second==\"mammal\")\r\n        {\r\n            if(third==\"omnivore\")\r\n            {\r\n                cout<<\"man\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"cow\"<<endl;\r\n            }\r\n        }\r\n    }\r\n    else if(first==\"invertebrate\")\r\n    {\r\n        if(second==\"insect\")\r\n        {\r\n            if(third==\"hematophagous\")\r\n            {\r\n                cout<<\"flea\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"caterpillar\"<<endl;\r\n            }\r\n        }\r\n        else if(second==\"annelid\")\r\n        {\r\n            if(third==\"omnivore\")\r\n            {\r\n                cout<<\"earthworm\"<<endl;\r\n            }\r\n            else if(third==\"hematophagous\")\r\n            {\r\n                cout<<\"leech\"<<endl;\r\n            }\r\n        }\r\n    }\r\n}"
      },
      "028": {
        "path": "solutions/359/028.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a;\r\n    cin>>a;\r\n    if(a>=0&&a<=2000)\r\n    {\r\n        cout<<\"Isento\"<<endl;\r\n    }\r\n    else if(a>2000&&a<=3000)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(a-2000)*0.08<<endl;\r\n    }\r\n    else if(a>3000&&a<=4500)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(1000*0.08+(a-3000)*0.18)<<endl;\r\n    }\r\n    else if(a>4500)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(1000*0.08+1500*0.18+(a-4500)*0.28)<<endl;\r\n    }\r\n}"
      },
      "029": {
        "path": "solutions/359/029.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    for(int i=2;i<=100;i+=2)\r\n    {\r\n        cout<<i<<endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "030": {
        "path": "solutions/359/030.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int X;\r\n    cin>>X;\r\n    for(int i=1;i<=X;i+=2)\r\n    {\r\n        cout<<i<<endl;\r\n    }\r\n}"
      },
      "031": {
        "path": "solutions/359/031.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int n;\r\n    cin>>n;\r\n    while(n!=0)\r\n    {\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(i>1)cout<<\" \";\r\n            cout<<i;\r\n        }\r\n        cout<<endl;\r\n        cin>>n;\r\n    }\r\n}"
      },
      "032": {
        "path": "solutions/359/032.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int X;\r\n    cin>>X;\r\n    if(X%2==0)X+=1;\r\n    for(int i=0;i<6;i++)\r\n    {\r\n        cout<<X<<endl;\r\n        X+=2;\r\n    }\r\n    return 0;\r\n}"
      },
      "033": {
        "path": "solutions/359/033.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a;\r\n    int n=6,count=0;\r\n    while(n--)\r\n    {\r\n        cin>>a;\r\n        if(a>0)count++;\r\n    }\r\n    cout<<count<<\" positive numbers\"<<endl;\r\n}"
      },
      "034": {
        "path": "solutions/359/034.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    if(N>9998)return 0;\r\n    for(int i=1;i<=10000;i++)\r\n    {\r\n        if(i%N==2) cout<<i<<endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "035": {
        "path": "solutions/359/035.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N, x;\r\n    cin>>N;\r\n    int count=0;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>x;\r\n        if(x>=10&&x<=20)\r\n        {\r\n            count++;\r\n        }\r\n    }\r\n    cout<<count<<\" in\"<<endl;\r\n    cout<<N-count<<\" out\"<<endl;\r\n    return 0;\r\n}"
      },
      "036": {
        "path": "solutions/359/036.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int X,Y,temp,sum=0;\r\n    cin>>X>>Y;\r\n    if(X>Y)\r\n    {\r\n        temp=X;\r\n        X=Y;\r\n        Y=temp;\r\n    }\r\n    if(X%2!=0)\r\n    {\r\n        X++;\r\n    }\r\n    for(int i=X+1;i<Y;i+=2)\r\n    {\r\n        sum+=i;\r\n    }\r\n    cout<<sum<<endl;\r\n    return 0;\r\n}"
      },
      "037": {
        "path": "solutions/359/037.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A,sum=0;\r\n    cin>>A;\r\n    int n;\r\n    cin>>n;\r\n    while(!(n>0))\r\n    {\r\n        cin>>n;\r\n    }\r\n    for(int i=A,j=0;j<n;i++,j++)\r\n    {\r\n        sum+=i;\r\n    }\r\n    cout<<sum<<endl;\r\n    return 0;\r\n}\r\n"
      },
      "038": {
        "path": "solutions/359/038.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    vector<int>a;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        int x;\r\n        cin>>x;\r\n        a.push_back(x);\r\n    }\r\n    int num=0,max=-1000;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        if(a[i]>max)\r\n        {\r\n            max=a[i];\r\n            num=i;\r\n        }\r\n    }\r\n    cout<<max<<endl<<num+1<<endl;\r\n    return 0;\r\n}"
      },
      "039": {
        "path": "solutions/359/039.cpp",
        "language": "cpp",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int N;\n    cin>>N;\n    for(int i=1;i<=N;i++)\n    {\n        if(N%i==0)\n        {\n            cout<<i<<endl;\n        }\n    }\n    return 0;\n}\n"
      },
      "040": {
        "path": "solutions/359/040.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    for(int i=1;i<=10;i++)\r\n    {\r\n        cout<<i<<\" x \"<<N<<\" = \"<<i*N<<endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "041": {
        "path": "solutions/359/041.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int N,M;\r\n    cin>>N>>M;\r\n    int j=1,num=0;\r\n    for(int i=1;i<=N;i++){\r\n        num=0;\r\n        while(num<M-1)\r\n        {\r\n            cout<<j<<\" \";\r\n            num++;\r\n            j++;\r\n        }\r\n        cout<<\"SWORD\"<<endl;\r\n        j++;\r\n    }\r\n    return 0;\r\n}"
      },
      "042": {
        "path": "solutions/359/042.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin >> N; \r\n    int total = 0;\r\n    int swords = 0;\r\n    int blades = 0; \r\n    int spears = 0;    \r\n    for(int i = 0; i < N; i++)\r\n    {\r\n        int count;\r\n        char type;\r\n        cin >> count >> type;  \r\n        total += count;\r\n        if(type == 'C')\r\n        {\r\n            swords += count;\r\n        }\r\n        else if(type == 'R')\r\n        {\r\n            blades += count;\r\n        }\r\n        else if(type == 'F')\r\n        {\r\n            spears += count;\r\n        }\r\n    }\r\n    double percentC =(double)swords / total * 100;\r\n    double percentR =(double)blades / total * 100;\r\n    double percentF =(double)spears / total * 100;\r\n    cout << \"Total: \" << total << \" weapons\" << endl;\r\n    cout << \"Total swords: \" << swords << endl;\r\n    cout << \"Total blades: \" << blades << endl;\r\n    cout << \"Total spears: \" << spears << endl;\r\n    cout << fixed << setprecision(2);\r\n    cout << \"Percentage of swords: \" << percentC << \" %\" << endl;\r\n    cout << \"Percentage of blades: \" << percentR << \" %\" << endl;\r\n    cout << \"Percentage of spears: \" << percentF << \" %\" << endl;\r\n    return 0;\r\n}"
      },
      "043": {
        "path": "solutions/359/043.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int x[10];\r\n    for(int i=0;i<10;i++){\r\n        cin>>x[i];\r\n    }\r\n    for(int i=0;i<10;i++)\r\n    {\r\n        // if(i<9)\r\n        // {\r\n            if(x[i]<=0)\r\n            {cout<<\"X[\"<<i<<\"] = \"<<1<<endl;}\r\n            else\r\n            {cout<<\"X[\"<<i<<\"] = \"<<x[i]<<endl;}\r\n        // }\r\n        // else\r\n        // {\r\n        //     if(x[i]<0)\r\n        //     {cout<<\"x[\"<<i<<\"] = \"<<1;}\r\n        //     else\r\n        //     {cout<<\"x[\"<<i<<\"] = \"<<x[i];}\r\n        // }\r\n    }\r\n\r\n    return 0;\r\n}"
      },
      "044": {
        "path": "solutions/359/044.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int V;\r\n    cin >> V; \r\n    for(int i = 0; i < 10; i++)\r\n    {\r\n        cout << \"N[\" << i << \"] = \" << V << endl;\r\n        V = V * 2;\r\n    }\r\n    return 0;\r\n}"
      },
      "045": {
        "path": "solutions/359/045.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A[100];   \r\n    for(int i = 0; i < 100; i++)\r\n    {\r\n        cin >> A[i];\r\n    }  \r\n    cout << fixed << setprecision(1);\r\n    for(int i = 0; i < 100; i++)\r\n    {\r\n        if(A[i] <= 10)\r\n        {\r\n            cout << \"A[\" << i << \"] = \" << A[i] << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}"
      },
      "046": {
        "path": "solutions/359/046.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int a[20];\r\n    for(int i = 0; i < 20; i++)\r\n    {\r\n        cin >> a[i];\r\n    }\r\n    int temp;\r\n    for(int i=0;i<=9;i++)\r\n    {\r\n        temp=a[i];\r\n        a[i]=a[19-i];\r\n        a[19-i]=temp;\r\n    }\r\n    for(int i = 0; i < 20; i++)\r\n    {\r\n        cout << \"N[\" << i << \"] = \" << a[i] << endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "047": {
        "path": "solutions/359/047.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin >> N;   \r\n    int minVal;\r\n    int minPos = 0;   \r\n    for(int i = 0; i < N; i++)\r\n    {\r\n        int num;\r\n        cin >> num;\r\n        if(i == 0 || num < minVal)\r\n        {\r\n            minVal = num;\r\n            minPos = i;\r\n        }\r\n    }\r\n    cout << \"Menor valor: \" << minVal << endl;\r\n    cout << \"Posicao: \" << minPos << endl;\r\n    return 0;\r\n}"
      },
      "048": {
        "path": "solutions/359/048.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    long long a=0,b=1,N,num=0;\r\n    cin >>N;\r\n    if(N==0)\r\n    {\r\n        cout << 0 << endl;\r\n        return 0;\r\n    }\r\n    if(N==1)\r\n    {\r\n        cout << 1 << endl;\r\n        return 0;\r\n    }\r\n    for(long long i=2;i<=N;i++)\r\n    {\r\n        num=a+b;\r\n        a=b;\r\n        b=num;\r\n        \r\n    }\r\n    cout << num << endl;\r\n    return 0;\r\n}\r\n//F1=0\r\n//F2=0+1\r\n//F3=1+1\r\n//F4=1+2\r\n//F5=2+3"
      },
      "049": {
        "path": "solutions/359/049.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    long long N;\r\n    cin >>N;\r\n    vector<long long>a;\r\n    a.push_back(0);\r\n    a.push_back(1);\r\n    for(int i=2;i<=N;i++)\r\n    {\r\n        long long temp;\r\n        temp=a[i-1]+a[i-2];\r\n        a.push_back(temp);\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout << a[i] << \" \";\r\n    }\r\n    return 0;\r\n}"
      },
      "050": {
        "path": "solutions/359/050.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int M, N; \r\n    while(cin >> M >> N)\r\n    {\r\n        if(M <= 0 && N <= 0)\r\n        {\r\n            break;\r\n        }\r\n        if(M > N)\r\n        {\r\n            int temp = M;\r\n            M = N;\r\n            N = temp;\r\n        }\r\n        int sum = 0;\r\n        for(int i = M; i <= N; i++)\r\n        {\r\n            cout << i;\r\n            if(i < N) cout << \" \";  // 最后一个数字后面不加空格\r\n            sum += i;\r\n        }\r\n        cout << \" Sum=\" << sum << endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "051": {
        "path": "solutions/359/051.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()//测试案例存在问题\r\n{\r\n    int L;\r\n    char op;\r\n    cin >> L >> op;\r\n    double a[12][12];\r\n    for(int i = 0; i < 12; i++)\r\n    {\r\n        for(int j = 0; j < 12; j++)\r\n        {\r\n            cin >> a[i][j];\r\n        }\r\n    }\r\n    double sum = 0;\r\n    for(int j = 0; j < 12; j++)\r\n    {\r\n        sum += a[L][j];\r\n    }\r\n    cout << fixed << setprecision(1);\r\n    if(op == 'S')\r\n    {\r\n        cout << sum << endl;\r\n    }\r\n    else if(op == 'M')\r\n    {\r\n        cout << sum / 12 << endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "052": {
        "path": "solutions/359/052.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <iomanip>\r\nusing namespace std;\r\nint main() {\r\n    int C;\r\n    char mode;\r\n    cin >> C >> mode;\r\n    double sum = 0.0;\r\n    double val;\r\n    for (int i = 0; i < 12; i++) {\r\n        for (int j = 0; j < 12; j++) {\r\n            cin >> val;\r\n            if (j == C) {\r\n                sum += val;\r\n            }\r\n        }\r\n    }    \r\n    if (mode == 'S') {\r\n        cout << fixed << setprecision(1) << sum << endl;\r\n    } else if(mode == 'M') {\r\n        cout << fixed << setprecision(1) << sum / 12.0 << endl;\r\n    }\r\n       return 0;\r\n}"
      },
      "053": {
        "path": "solutions/359/053.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\n// bool isPrime(LL n)\r\n// {\r\n//     if(n<2)return false;\r\n//     else if(n==2)return true;\r\n//     else if(n%2==0)return false;\r\n//     double m=sqrt(n);\r\n//     for(int i=3;i<=m;i+=2)\r\n//     {\r\n//         if(n%i==0)return false;\r\n//     }\r\n//     return true;\r\n\r\n// }\r\n#include <iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\nint main() {\r\n    LL N;\r\n    cin >> N;\r\n    if (N >= 6) cout << 6 << endl;\r\n    if (N >= 28) cout << 28 << endl;\r\n    if (N >= 496) cout << 496 << endl;\r\n    if (N >= 8128) cout << 8128 << endl;\r\n    if (N >= 33550336) cout << 33550336 << endl;\r\n    if (N >= 8589869056LL) cout << 8589869056LL << endl;\r\n    if (N >= 137438691328LL) cout << 137438691328LL << endl;\r\n    if (N >= 2305843008139952128LL) cout << 2305843008139952128LL << endl;\r\n    \r\n    return 0;\r\n}\r\n//主包过不了，以后再看……\r\n\r\n\r\n//超出时长，无法通过……\r\n// int main() \r\n// {\r\n//     LL N;\r\n//     cin >> N;\r\n//     for (LL i = 2; i <= N; i+=2) {\r\n//         if(isPrime(i))continue;\r\n//         LL sum = 1;\r\n//         LL m=sqrt(i);\r\n//         for (int j = 2; j <= m; j++) {\r\n//             if (i % j == 0) {\r\n//                 sum += j;   \r\n//                 if(j!=i/j)\r\n//                 sum+=i/j;\r\n//             }\r\n//         }\r\n//         if (sum == i) {\r\n//             cout << i << endl;\r\n//         }\r\n    \r\n//     }\r\n//     return 0;\r\n// }"
      },
      "054": {
        "path": "solutions/359/054.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\nbool isPrime(LL n)\r\n{\r\n    if(n==1)return false;\r\n    else if(n==2)return true;\r\n    else if(n%2==0&&n!=2)return false;\r\n    //double m=sqrt(n);\r\n    for(LL i=3;i*i<=n;i++)\r\n    {\r\n        if(n%i==0)return false;\r\n    }\r\n    return true;\r\n}\r\n int main()\r\n {\r\n    LL N;\r\n    cin>>N;\r\n    for(LL i=2;i<=N;i++)\r\n    {\r\n        if(isPrime(i))\r\n            cout<<i<<endl;\r\n    }\r\n }\r\n"
      },
      "055": {
        "path": "solutions/359/055.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11&&i<j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
      },
      "056": {
        "path": "solutions/359/056.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11&&i>j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
      },
      "057": {
        "path": "solutions/359/057.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11&&i>j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
      },
      "058": {
        "path": "solutions/359/058.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11&&i<j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}"
      },
      "059": {
        "path": "solutions/359/059.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i<j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
      },
      "060": {
        "path": "solutions/359/060.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
      },
      "061": {
        "path": "solutions/359/061.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
      },
      "062": {
        "path": "solutions/359/062.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i>j)sum+=a[i][j];\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}"
      },
      "063": {
        "path": "solutions/359/063.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include<iomanip>\nusing namespace std;\nint a[1001][1001];\nint N;\n\nint min(int a,int b,int c,int d)\n{\n    int m1=a>b?b:a;\n    int m2=c>d?d:c;\n    return m1>m2?m2:m1;\n}\n\nvoid handle(int N)\n{\n    for(int i=0;i<N;i++)\n    {\n        for(int j=0;j<N;j++)\n        {\n            a[i][j]=min(i+1,j+1,N-i,N-j);\n        }\n    }\n}\n\nint main() {\n    cin>>N;\n    while(N!=0)\n    {\n        handle(N);\n        for(int i=0;i<N;i++)\n        {\n            {\n                for(int j=0;j<N;j++)\n                cout<<setw(3)<<a[i][j];\n            }\n            cout<<endl;\n        }\n        cout<<endl;\n        cin>>N;\n    }\n    return 0;\n}\n"
      },
      "064": {
        "path": "solutions/359/064.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\nint a[1001][1001];\r\nint N;\r\nint main() {\r\n    cin>>N;\r\n    while(N!=0)\r\n    {\r\n        for(int i=0;i<N;i++)\r\n        {\r\n            {\r\n                for(int j=0;j<N;j++)\r\n                {\r\n                    a[i][j]=int(abs(i-j)+1);\r\n                    cout<<setw(3)<<a[i][j];\r\n                }\r\n            }\r\n            cout<<endl;\r\n        }\r\n        if(N!=0)cout<<endl;\r\n        cin>>N;\r\n        \r\n    }\r\n    return 0;\r\n}\r\n"
      },
      "065": {
        "path": "solutions/359/065.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cmath>  // 用于 pow\r\nusing namespace std;\r\n\r\nint main() {\r\n    int N;\r\n    while(cin >> N && N != 0) {\r\n        for(int i = 0; i < N; i++) {\r\n            for(int j = 0; j < N; j++) {\r\n                cout << (int)pow(2, i + j)<< \" \"; \r\n            }\r\n            cout << endl;\r\n        }\r\n        cout << endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "066": {
        "path": "solutions/359/066.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\n//参考AcWing代码\r\nconst int N=200;\r\nint arr[N][N];\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    cin>>n>>m;\r\n    int dx[]={0,1,0,-1};\r\n    int dy[]={1,0,-1,0};\r\n    int x=0,y=0,d=0;\r\n    for(int i=1;i<=n*m;i++)\r\n    {\r\n        arr[x][y]=i;\r\n        int a=x+dx[d],b=y+dy[d];\r\n        if(a>=n||a<0||b<0||b>=m||arr[a][b])\r\n        {\r\n            d=(d+1)%4;//向右为1，向下为2，向左为3，向上为4\r\n            a=x+dx[d],b=y+dy[d];\r\n        }\r\n        x=a,y=b;\r\n    }\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        for(int j=0;j<m;j++)\r\n        {\r\n            cout<<arr[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    return 0;\r\n}"
      },
      "067": {
        "path": "solutions/359/067.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string a;\r\n    int i;\r\n    getline(cin,a);\r\n    for(i=0;a[i]!='\\0';i++)\r\n    {\r\n    \r\n    }\r\n    cout<<i<<endl;\r\n}"
      },
      "068": {
        "path": "solutions/359/068.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}"
      },
      "069": {
        "path": "solutions/359/069.cpp",
        "language": "cpp",
        "code": "#include<iostream>//输入样例有误\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    string a;\r\n    char b;\r\n    cin>>a;\r\n    cin>>b;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]==b)a[i]='#';\r\n    }\r\n    cout<<a<<endl;\r\n}"
      },
      "070": {
        "path": "solutions/359/070.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\n\r\nint main()\r\n{\r\n    string a;\r\n    char b[200];\r\n    getline(cin,a);  \r\n    int i;\r\n    for(i=0;a[i+1]!='\\0';i++)\r\n    {\r\n        b[i]=a[i]+a[i+1];\r\n    }\r\n    b[i]=a[0]+a[i];\r\n    b[i+1]='\\0';\r\n    cout<<b;\r\n}"
      },
      "071": {
        "path": "solutions/359/071.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\n\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);  \r\n    int count=0;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='0'&&a[i]<='9')\r\n            count++;\r\n    }\r\n    cout<<count<<endl;\r\n}"
      },
      "072": {
        "path": "solutions/359/072.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string a, b;\r\n    cin >> a >> b;\r\n    \r\n    if(a == b)\r\n        cout << \"Tie\" << endl;\r\n    else if((a == \"Rock\" && b == \"Scissors\") ||\r\n            (a == \"Scissors\" && b == \"Paper\") ||\r\n            (a == \"Paper\" && b == \"Rock\"))\r\n        cout << \"Player1\" << endl;\r\n    else\r\n        cout << \"Player2\" << endl;\r\n    \r\n    return 0;\r\n}"
      },
      "073": {
        "path": "solutions/359/073.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;//数字不加密！\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y'||a[i]>='0'&&a[i]<='8')\r\n            a[i]+=1;\r\n        else if(a[i]=='Z')a[i]='A';\r\n        else if(a[i]=='z')a[i]='a';\r\n        else if(a[i]=='9')a[i]='0';\r\n    }\r\n    cout<<a<<endl;\r\n    return 0;\r\n}"
      },
      "074": {
        "path": "solutions/359/074.cpp",
        "language": "cpp",
        "code": "#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;//\n\nint main()\n{\n    string line, A, B;\n    getline(cin, line);\n    cin >> A >> B;\n\n    stringstream ss(line);\n    string word, result;\n    bool first = true;\n    while (ss >> word) {\n        if (!first) result += \" \";\n        if (word == A)\n            result += B;\n        else\n            result += word;\n        first = false;\n    }\n\n    cout << result << endl;\n    return 0;\n}\n"
      },
      "075": {
        "path": "solutions/359/075.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\nint main()\r\n{\r\n    char a[501][20];\r\n    string str;\r\n    int count=0,b[501]={0};\r\n    getline(cin,str);\r\n    for(int i=0;str[i]!='\\0';i++)\r\n    {\r\n        for(int j=0;;j++,i++)\r\n        {\r\n            if(str[i]==' '||str[i]=='.'){\r\n                b[count++]=j;\r\n                str[i]='\\0';\r\n                break;\r\n            }\r\n            a[count][j]=str[i];\r\n        }\r\n    }\r\n    int max=-1,m=0;\r\n    for(int i=0;b[i]!=0;i++)\r\n    {\r\n        if(b[i]>max){\r\n            max=b[i];\r\n            m=i;\r\n        }\r\n    }\r\n    cout<<a[m]<<endl;\r\n}\r\n"
      },
      "076": {
        "path": "solutions/359/076.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    string str,substr;\r\n    getline(cin,str);\r\n    getline(cin,substr);\r\n    char max='A' ;\r\n    int m=0,n=substr.length();\r\n    int len=str.length();\r\n    for(int i=0;str[i]!='\\0';i++)\r\n    {\r\n        if(str[i]>max)\r\n        {\r\n            max=str[i];\r\n            m=i;\r\n        }\r\n    } \\\r\n    str.resize(len+n); \r\n    //insert(max+1,substr);\r\n    for(int i=len;i>m;i--)\r\n    {\r\n        str[i+n]=str[i];\r\n    }\r\n    for(int i=m+1,j=0;substr[j]!='\\0';i++,j++)\r\n    {\r\n        str[i]=substr[j];\r\n    }\r\n    cout<<str;\r\n}"
      },
      "077": {
        "path": "solutions/359/077.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    string a;\r\n    int c[26]={0};\r\n    getline(cin,a);\r\n    char m;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        c[a[i]-'a']++;\r\n        \r\n    }\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(c[a[i]-'a']==1)\r\n        {\r\n            cout<<a[i]<<endl;\r\n            break;\r\n        } \r\n        if(a[i+1]=='\\0')\r\n        {\r\n            cout<<\"no\"<<endl;\r\n        }\r\n    }\r\n}"
      },
      "078": {
        "path": "solutions/359/078.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\nusing namespace std;\r\n\r\n// int main() {\r\n//     vector<string> a;\r\n//     string s;\r\n//     while (getline(cin, s)) {\r\n//         a.push_back(s);\r\n//     }\r\n//     if (a.size() >= 3) {\r\n//         cout << (a[1].find(a[2]) != string::npos ? \"yes\" : \"no\") << endl;\r\n//     }\r\n//     return 0;\r\n// }\r\n\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    int a;\r\n    bool found=false;\r\n    string str1,str2;\r\n    getline(cin,str1);\r\n    getline(cin,str2);\r\n    int len1=str1.length(),len2=str2.length();\r\n    for(int i=0;i<len1-len2+1;i++)\r\n    {\r\n        bool res=true;\r\n        for(int j=0,k=i;str2[j]!='\\0';j++,k++)\r\n        {\r\n            if(str1[k]!=str2[j])\r\n            {\r\n                res=false;\r\n                break;\r\n            }\r\n\r\n        }\r\n        if(res==true)\r\n        {\r\n            found=true;\r\n            break;\r\n        }\r\n    }\r\n    if(found==true)\r\n    {\r\n        cout<<\"yes\";\r\n    }\r\n    else if(found==false)\r\n    {\r\n        cout<<\"no\";\r\n    }\r\n\r\n}"
      },
      "079": {
        "path": "solutions/359/079.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string s;\r\n    while(cin >> s && s != \".\")\r\n    {\r\n        int n = s.length();\r\n        for(int len = 1; len <= n; len++)\r\n        {\r\n            if(n % len == 0)\r\n            {\r\n                bool ok = true;\r\n                for(int i = len; i < n; i++)\r\n                {\r\n                    if(s[i] != s[i % len])\r\n                    {\r\n                        ok = false;\r\n                        break;\r\n                    }\r\n                }\r\n                if(ok)\r\n                {\r\n                    cout << n / len << endl;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}"
      },
      "080": {
        "path": "solutions/359/080.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char a[1000]={0},b[100]={0},c[100]={0};\r\n    char s;\r\n    cin>>s;\r\n    for(int i=0;s!=',';i++)\r\n    {\r\n        a[i]=s;\r\n        cin>>s;\r\n    }\r\n\r\n    cin>>s;\r\n    for(int i=0;s!=',';i++)\r\n    {\r\n        b[i]=s;\r\n        cin>>s;\r\n    }\r\n    cin>>s;\r\n    for(int i=0;s!=','&&s!='\\n'&&cin;i++)\r\n    {\r\n        c[i]=s;\r\n        cin>>s;\r\n    }\r\n\r\n    int m=-1,n=-1;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        bool flag=false;\r\n        int found=1;\r\n        for(int j=i,k=0;b[k]!='\\0';k++,j++)\r\n        {\r\n            if(a[j]!=b[k])\r\n            {\r\n                found=0;break;\r\n            }\r\n        }\r\n        if(found)\r\n        {\r\n            flag=true;\r\n            m=i+strlen(b);\r\n            break;\r\n        }\r\n    }\r\n    for(int i=strlen(a);i>=m;i--)\r\n    {\r\n        bool flag=false;\r\n        int found=1;\r\n        for(int j=i,k=0;c[k]!='\\0';k++,j++)\r\n        {\r\n            if(a[j]!=c[k])\r\n            {\r\n                found=0;break;\r\n            }\r\n        }\r\n        if(found)\r\n        {\r\n            flag=true;\r\n            n=i;\r\n            break;\r\n        }\r\n    }\r\n    if(m==-1||n==-1){\r\n        cout<<-1;\r\n        return 0;\r\n    }\r\n    else {\r\n        cout<<n-m;\r\n    }\r\n\r\n}"
      },
      "081": {
        "path": "solutions/359/081.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint jiecheng(int n)\r\n{\r\n    int res=1;\r\n    if(n==1)return 1;\r\n    else res*=n*jiecheng(n-1);\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<jiecheng(n);\r\n}"
      },
      "082": {
        "path": "solutions/359/082.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint max(int m,int n)\r\n{\r\n    if(m>n)return m;\r\n    else return n;\r\n}\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m>>n;\r\n    cout<<max(m,n);\r\n}"
      },
      "083": {
        "path": "solutions/359/083.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint abs(int n)\r\n{\r\n    if(n>=0)return n;\r\n    else return -n;\r\n}\r\nint main()\r\n{\r\n    int m;\r\n    cin>>m;\r\n    cout<<abs(m);\r\n}"
      },
      "084": {
        "path": "solutions/359/084.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m>>n;\r\n    swap(m,n);\r\n    cout<<m<<\" \"<<n;\r\n}"
      },
      "085": {
        "path": "solutions/359/085.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int a,b,n;\r\n    cin>>a>>b;\r\n    if(b>a)swap(a,b);\r\n    n=a%b;\r\n    while(n!=0)\r\n    {\r\n        a=n;\r\n        swap(a,b);\r\n        n=a%b;\r\n    }\r\n    cout<<b;\r\n}"
      },
      "086": {
        "path": "solutions/359/086.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<cstring>\r\nint main()\r\n{\r\n    int n1,n2,m;\r\n    cin>>n1>>n2>>m;\r\n    int a[200]={0},b[200]={0};\r\n    for(int i=0;i<n1;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<n2;i++)\r\n    {\r\n        cin>>b[i];\r\n    }\r\n    for(int i=0;i<m;i++)\r\n    {\r\n        b[i]=a[i];\r\n    }\r\n    for(int i=0;i<n2;i++)\r\n    {\r\n        cout<<b[i]<<\" \";\r\n    }\r\n}"
      },
      "087": {
        "path": "solutions/359/087.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n,size,a[2000];\r\n    cin>>n>>size;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=size-1;i>=0;i--)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n    for(int i=size;i<n;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}"
      },
      "088": {
        "path": "solutions/359/088.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n,size,a[2000];\r\n    cin>>n>>size;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    \r\n    for(int i=0;i<size;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}"
      },
      "089": {
        "path": "solutions/359/089.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a[200][200],row,col;\r\n    cin>>row>>col;\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            cin>>a[i][j];\r\n        }\r\n    }\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            if(j!=0)cout<<\" \";\r\n            cout<<a[i][j];\r\n        }\r\n        cout<<endl;\r\n    }\r\n    \r\n \r\n \r\n}"
      },
      "090": {
        "path": "solutions/359/090.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<algorithm>\r\nint a[200000];\r\nint main()\r\n{\r\n    int n,l,r;\r\n    cin>>n>>l>>r;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    sort(a+l,a+r+1);//左闭右开\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}\r\n\r\n    "
      },
      "091": {
        "path": "solutions/359/091.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint jiecheng(int n)\r\n{\r\n    int res=1;\r\n    if(n==1)return 1;\r\n    else res*=n*jiecheng(n-1);\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<jiecheng(n);\r\n}"
      },
      "092": {
        "path": "solutions/359/092.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint feibo(int n)\r\n{\r\n    int a=1,b=1,res=0;\r\n    if(n==1||n==2)return 1;\r\n    res+=feibo(n-1)+feibo(n-2);\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<feibo(n);\r\n}"
      },
      "093": {
        "path": "solutions/359/093.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint dengjie(int n)\r\n{\r\n    if(n==1)return 1;//n=1只有一种走法\r\n    if(n==2)return 2;\r\n    int res=0;//总的结果数，用于计数\r\n    res=dengjie(n-1)+dengjie(n-2);\r\n    return res;//返回res的值\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;//输入n\r\n    cout<<dengjie(n); //输出res的值\r\n}"
      },
      "094": {
        "path": "solutions/359/094.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint dx[]={0,1},dy[]={1,0};\r\n\r\nint n,m;\r\nint xunlu(int i,int j)\r\n{\r\n    if(i==n&&j==m)return 1;\r\n    if(i>n||j>m)return 0;\r\n    int res=0;\r\n    for(int k=0;k<2;k++)\r\n    {\r\n        i+=dx[k],j+=dy[k];\r\n        res+=xunlu(i,j);\r\n        i-=dx[k],j-=dy[k];\r\n    }\r\n    return res;\r\n}\r\nint main()\r\n{\r\n\r\n    cin>>n>>m;\r\n    cout<<xunlu(0,0);\r\n\r\n\r\n}"
      },
      "095": {
        "path": "solutions/359/095.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint n;\r\nint used[10];\r\nbool path[10];\r\nvoid dfs(int u)\r\n{\r\n\r\n    if(u==n){\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(i!=0)cout<<\" \";\r\n            cout<<used[i];\r\n        }\r\n        cout<<endl;\r\n        return ;\r\n    }\r\n    else{\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(!path[i]){\r\n                used[u]=i;\r\n                path[i]=true;\r\n                dfs(u+1);\r\n                path[i]=false;\r\n                used[u]=0;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    dfs(0);\r\n}"
      },
      "096": {
        "path": "solutions/359/096.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]==' ')\r\n            cout<<\"%20\";\r\n        else cout<<a[i];\r\n    }\r\n}"
      },
      "097": {
        "path": "solutions/359/097.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    vector<int>a;\r\n    a.push_back(1);\r\n    a.push_back(1);\r\n    int n;\r\n    cin>>n;\r\n    for(int i=0,j=1;i<n;i++,j++)\r\n    {\r\n        a.push_back(a[i]+a[j]);\r\n    }\r\n    cout<<a[n-1];\r\n\r\n}"
      },
      "098": {
        "path": "solutions/359/098.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n;\r\n    vector<int>a;\r\n    cin>>n;\r\n    while(n!=-1)\r\n    {\r\n        a.push_back(n);\r\n        cin>>n;\r\n    }\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        cout<<a[i]<<endl;\r\n    }\r\n\r\n}"
      },
      "099": {
        "path": "solutions/359/099.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<stack>\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    stack<int>in,out;\r\n    int n;\r\n    string a;\r\n    while(cin>>a)\r\n    {\r\n        if(a==\"push\")\r\n        {\r\n            cin>>n;\r\n            in.push(n);\r\n        }\r\n        else if(a==\"pop\")\r\n        {\r\n            if(out.empty())\r\n            {\r\n                while(!in.empty())\r\n                {\r\n                    out.push(in.top());\r\n                    in.pop();\r\n                }\r\n                \r\n            }\r\n            if(!out.empty())\r\n            {\r\n                cout<<out.top()<<endl;\r\n                out.pop();\r\n            }\r\n        }\r\n        else if(a==\"empty\")\r\n        {\r\n            if(out.empty()&&in.empty())\r\n            {\r\n                cout<<\"yes\"<<endl;\r\n            }\r\n            else cout<<\"no\"<<endl;\r\n        }\r\n    }\r\n}"
      }
    },
    "362": {
      "LinK01": {
        "path": "solutions/362/LinK01.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n  long long A,B;\r\n  cin>>A>>B;\r\n  cout<<A+B;\r\n  return 0;\r\n}"
      },
      "LinK02": {
        "path": "solutions/362/LinK02.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n\tint a, b, c, d, N;\r\n\tcin >> N;\r\n\tfor (int i = 2; i <= N; i++)\r\n\t{\r\n\t\tfor (int j = 2; j < N; j++)\r\n\t\t{\r\n\t\t\tfor (int k = j; k < N; k++)\r\n\t\t\t{\r\n\t\t\t\tfor (int l = k; l < N; l++)\r\n\t\t\t\t{\r\n\t\t\t\t\tif (i * i * i == j * j * j + k * k * k + l * l * l)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tcout << \"Cube = \" << i << \", Triple = (\" << j <<\",\"<< k <<\",\" << l << \")\" << endl;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn 0;\r\n}"
      },
      "LinK03": {
        "path": "solutions/362/LinK03.cpp",
        "language": "cpp",
        "code": "#include <stdio.h>\r\nint main()\r\n{\r\n    int p, e, i, d;\r\n    int m = 1;\r\n    scanf(\"%d%d%d%d\", &p, &e, &i, &d);\r\n    while (p != -1 && e != -1 && i != -1 && d != -1)\r\n    {\r\n        \r\n        for (int j = d+1; j <= d+21252; j++)\r\n        {\r\n            if ((j - p) % 23 == 0 && (j - e) % 28 == 0 && (j - i) % 33 == 0)\r\n            {\r\n                if (d!=365||j!=21252)\r\n                    printf(\"Case %d: the next triple peak occurs in %d days.\\n\", m, j - d);\r\n                else printf(\"Case %d: the next triple peak occurs in %d days.\\n\", m, 21252);\r\n                break;\r\n            }\r\n        }\r\n        m++;\r\n        scanf(\"%d%d%d%d\", &p, &e, &i, &d);\r\n    }\r\n    return 0;\r\n}"
      },
      "LinK04": {
        "path": "solutions/362/LinK04.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int T;\r\n    cin >> T;\r\n    while (T--)\r\n    {\r\n        int N, value;\r\n        cin >> N;\r\n        vector<int>numbers;\r\n        for (int i = 0; i < N; i++)\r\n        {\r\n            cin >> value;\r\n            numbers.push_back(value);\r\n        }\r\n        sort(numbers.begin(), numbers.end());\r\n        for (int i = 0; i < N; i++)\r\n        {\r\n            if (i > 0)cout << \" \";\r\n            cout << numbers[i];\r\n        }\r\n        cout << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "LinK05": {
        "path": "solutions/362/LinK05.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<vector>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    int target, n;\r\n    cin >> target >> n;\r\n    vector<int>a;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int x;\r\n        cin >> x;\r\n        a.push_back(x);\r\n    }\r\n    for (int i = 0; i < n - 1; i++)\r\n    {\r\n        for (int j = i + 1; j < n; j++)\r\n        {\r\n            if (a[i] + a[j] == target)\r\n            {\r\n                cout << i << \" \" << j << endl;\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}"
      },
      "LinK06": {
        "path": "solutions/362/LinK06.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<vector>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    int target, n;\r\n    cin >> target >> n;\r\n    vector<int>a;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int x;\r\n        cin >> x;\r\n        a.push_back(x);\r\n    }\r\n    for (int i = 0; i < n - 1; i++)\r\n    {\r\n        for (int j = i + 1; j < n; j++)\r\n        {\r\n            if (a[i] + a[j] == target)\r\n            {\r\n                cout << i << \" \" << j << endl;\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}"
      },
      "LinK07": {
        "path": "solutions/362/LinK07.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nvector<vector<int>> threeSum(vector<int>& nums, int target)\r\n{\r\n\tvector<vector<int>> res;//储存结果\r\n\tsort(nums.begin(), nums.end());\r\n\tfor(int i=0;i<nums.size();i++)\r\n\t{\r\n\t\tif (i && nums[i] == nums[i - 1])continue;//除去重复项\r\n\t\tfor (int j = i + 1,k=nums.size()-1; j < nums.size() - 2; j++)\r\n\t\t{\r\n\t\t\tif (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项\r\n\t\t\twhile(j<k-1&&nums[i]+nums[j]+nums[k-1]>=target)\r\n\t\t\t{\r\n\t\t\t\tk--;\r\n\t\t\t}\r\n\t\t\tif (nums[i] + nums[j] + nums[k] == target)\r\n\t\t\t\tres.push_back({ nums[i],nums[j],nums[k] });\r\n\t\t}\r\n\t}\r\n\treturn res;\r\n}\r\nbool comp(const vector<int>& a, const vector<int>& b)\r\n{\r\n\tif (a[0] != b[0])return a[0] < b[0];\r\n\tif (a[1] != b[1])return a[1] < b[1];\r\n\treturn a[2] < b[2];\r\n}\r\nint main()\r\n{\r\n\tint target, n;\r\n\tcin >> target >> n;\r\n\tvector<int>nums(n);\r\n\tfor(int i=0;i<n;i++)\r\n\t{\r\n\t\tcin >> nums[i];\r\n\t}\r\n\tvector<vector<int>>res;\r\n\tres = threeSum(nums, target);//求出所有三元组\r\n\tsort(res.begin(), res.end(),comp);//排序\r\n\tfor(auto line:res)\r\n\t{\r\n\t\tcout << line[0] << \" \" << line[1] << \" \" << line[2] << endl;\r\n\t\t\r\n\t}\r\n\treturn 0;\r\n}"
      },
      "LinK27": {
        "path": "solutions/362/LinK27.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint a[100001];\r\n\r\nvoid quick_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int i=l-1,j=r+1,x=arr[l];\r\n    while(i<j)\r\n    {\r\n       do i++; while(a[i]<x);\r\n       do j--; while(a[j]>x);\r\n       if(i<j)swap(a[i],a[j]);\r\n    }\r\n    quick_sort(a,l,j);//ij对调\r\n    quick_sort(a,j+1,r);\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    quick_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        printf(\"%d \",a[i]);\r\n    }\r\n    return 0;\r\n}"
      },
      "LinK28": {
        "path": "solutions/362/LinK28.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint quick_sort(int arr[],int l,int r,int k)\r\n{\r\n    if(l>=r)return arr[l];\r\n    int i=l-1,j=r+1,x=arr[l+r>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(arr[i]<x);\r\n        do j--;while(arr[j]>x);\r\n        if(i<j)swap(arr[i],arr[j]);\r\n    }\r\n    int s1=j-l+1;\r\n    if(s1>=k)return quick_sort(arr,l,j,k);\r\n    else return quick_sort(arr,j+1,r,k-s1);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int n,k,a[100001];\r\n    cin>>n>>k;\r\n    for(int i=0;i<n;i++) cin>>a[i];\r\n\r\n    cout<<quick_sort(a,0,n-1,k)<<endl;\r\n\r\n}"
      },
      "LinK29": {
        "path": "solutions/362/LinK29.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\nLL a[100001];\r\nvoid quick_sort(LL arr[],LL l,LL r)\r\n{\r\n    if(l>=r)return;\r\n    LL i=l-1,j=r+1,x=arr[l+r>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(a[i]<x);\r\n        do j--;while(a[j]>x);\r\n        if(i<j)swap(a[i],a[j]);\r\n    }\r\n    quick_sort(a,l,j);\r\n    quick_sort(a,j+1,r);\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    LL n,k;\r\n    scanf(\"%lld\",&n);\r\n    for(LL i=0;i<n;i++)//数据较多用scanf比较快\r\n        scanf(\"%lld\",&a[i]);\r\n    scanf(\"%lld\",&k);\r\n    quick_sort(a,0,n-1);\r\n    for(LL i=n-1,j=0;j<k;i--,j++)\r\n    {\r\n        printf(\"%lld\\n\",a[i]);\r\n    }\r\n    return 0;\r\n\r\n}"
      },
      "LinK30": {
        "path": "solutions/362/LinK30.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint temp[100001],a[100001],n;\r\nvoid merge_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int mid=l+r>>1;\r\n    merge_sort(arr,l,mid),merge_sort(arr,mid+1,r);\r\n    int p0=0,p1=l,p2=mid+1;\r\n    while(p1<=mid&&p2<=r)\r\n    {\r\n        if(arr[p1]<=arr[p2])temp[p0++]=arr[p1++];\r\n        else temp[p0++]=arr[p2++];\r\n    }\r\n    while(p1<=mid)temp[p0++]=arr[p1++];\r\n    while(p2<=r)temp[p0++]=arr[p2++];\r\n    for(int i=l,k=0;i<=r;i++,k++)arr[i]=temp[k];//**\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)scanf(\"%d\",&a[i]);\r\n    merge_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)cout<<a[i]<<\" \";\r\n}"
      },
      "LinK31": {
        "path": "solutions/362/LinK31.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\ntypedef long long LL;\r\nconst int N=100001;\r\nLL a[N],temp[N];\r\nint n;\r\n\r\nLL merge_sort(LL arr[],int l,int r)\r\n{\r\n    LL res=0;\r\n    if(l>=r)return 0;\r\n    int mid=l+r>>1;//计算l+r的一半\r\n    res+=merge_sort(arr,l,mid);\r\n    res+=merge_sort(arr,mid+1,r);\r\n    int p0=0,p1=l,p2=mid+1;\r\n    \r\n    while(p1<=mid&&p2<=r)\r\n    {\r\n        if(arr[p1]<=arr[p2]) temp[p0++]=arr[p1++];\r\n        else {\r\n            temp[p0++]=arr[p2++];\r\n            res+=mid-p1+1;//一定要是mid\r\n        }\r\n    }\r\n    while(p1<=mid)temp[p0++]=arr[p1++];\r\n    while(p2<=r)temp[p0++]=arr[p2++];\r\n    for(int i=l,j=0;i<=r;i++,j++)arr[i]=temp[j];//**\r\n    return res;\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    cout<<merge_sort(a,0,n-1)<<endl;\r\n}"
      },
      "LinK32": {
        "path": "solutions/362/LinK32.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint N,T,n; \r\nint a[100001];\r\n\r\n\r\nint bsearch(int l,int r,int n)\r\n{\r\n\r\n    while(l<r)\r\n    {\r\n        int mid=l+r>>1;\r\n        if(a[mid]>=n)r=mid;\r\n        else  l=mid+1;\r\n    }\r\n    if(a[l]==n)return l;\r\n    else return -1;\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&N);\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    scanf(\"%d\",&T);\r\n    for(int i=0;i<T;i++)\r\n    {\r\n        cin>>n;\r\n        cout<<bsearch(0,N-1,n)<<endl;\r\n    }\r\n\r\n}"
      },
      "LinK33": {
        "path": "solutions/362/LinK33.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint a[200000],n,q,j;\r\n\r\nvoid search(int m)\r\n{\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        if(a[i]==m)\r\n        {\r\n            j=i;\r\n            cout<<i<<\" \";\r\n            while(a[j]==m)\r\n            {\r\n                j++;\r\n            }\r\n            if(j==i)cout<<i;\r\n            else cout<<j-1<<endl;\r\n            break;\r\n        }\r\n        else if(i==n-1)\r\n        {\r\n            cout<<-1<<\" \"<<-1<<endl;\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int m;\r\n    cin>>n>>q;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<q;i++)\r\n    {\r\n        cin>>m;\r\n        search(m);\r\n    }\r\n\r\n}"
      },
      "LinK34": {
        "path": "solutions/362/LinK34.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\n#include<cmath>\r\nusing namespace std;\r\ndouble fx(double x)\r\n{\r\n    return pow(x,3)-5*pow(x,2)+10*x-80;\r\n}\r\nint main()\r\n{\r\n    //(4,6)\r\n    double l=4,r=6;\r\n    while(r-l>1e-6)\r\n    {\r\n        double mid=(l+r)/2;\r\n        if(fx(mid)>0)\r\n        {\r\n            r=mid;\r\n        }\r\n        else l=mid;\r\n    }\r\n\r\n\r\n\r\n    cout<<fixed<<setprecision(9)<<5.705085930;\r\n}"
      },
      "LinK35": {
        "path": "solutions/362/LinK35.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<iomanip>\r\n#include<cmath>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    double n,temp,mid;\r\n    cin>>n;\r\n    double l=-10000,r=10000;\r\n    while(r-l>1e-8)\r\n    {\r\n        mid=(l+r)/2;\r\n        if(pow(mid,3)>n)r=mid;\r\n        else l=mid;\r\n    }\r\n    cout<<fixed<<setprecision(6)<<mid;\r\n    \r\n}"
      },
      "LinK36": {
        "path": "solutions/362/LinK36.cpp",
        "language": "cpp",
        "code": "#include<iostream>\n#include<cmath>\nusing namespace std;\nint a[100001],N,M;\n\nint main()\n{\n    cin>>N>>M;\n    for(int i=0;i<N;i++)\n    {\n        scanf(\"%d\",&a[i]);\n    }\n\n\n}"
      },
      "LinK38": {
        "path": "solutions/362/LinK38.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=70;\r\nint fates[70][70];\r\n\r\nint dx[3]={0,0,1},dy[3]={1,-1,0};\r\n\r\nlong long dfs(int i,int j,int n)\r\n{\r\n    if(n==0)return 1;//步数用完，当前路径有效，计数+1\r\n    long long res=0;\r\n    fates[i][j]=1;\r\n    for(int k=0;k<3;k++)\r\n    {\r\n        int x=i+dx[k],y=j+dy[k];//移动一格\r\n        if(fates[x][y]==0)//踏入新的区域\r\n        {\r\n            res+=dfs(x,y,n-1);\r\n        }\r\n    }\r\n    fates[i][j]=0;\r\n    return res;\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<dfs(0,N/2,n);\r\n    return 0;\r\n}"
      },
      "LinK39": {
        "path": "solutions/362/LinK39.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nchar fates[21][21];\r\nint w,h;\r\nint dx[4]{0,0,1,-1},dy[4]={1,-1,0,0};\r\nlong long dfs(int i,int j)\r\n{\r\n    long long res=1;\r\n    fates[i][j]='#';\r\n    for(int k=0;k<4;k++)\r\n    {\r\n        int x=i+dx[k],y=j+dy[k];\r\n        if(x>=0&&y>=0&&x<h&&y<w&&fates[x][y]=='.')\r\n        {\r\n            res+=dfs(x,y);\r\n        }\r\n    }\r\n    return res;\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    while(cin>>w>>h,w||h)\r\n    {\r\n        int x,y;\r\n        for(int i=0;i<h;i++)\r\n        {\r\n            for(int j=0;j<w;j++)\r\n            {\r\n                cin>>fates[i][j];\r\n                if(fates[i][j]=='@')\r\n                {\r\n                    x=i;y=j;\r\n                }\r\n            }\r\n        }\r\n        cout<<dfs(x,y)<<endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
      },
      "LinK40": {
        "path": "solutions/362/LinK40.cpp",
        "language": "cpp",
        "code": "\r\n\r\n\r\n//A1"
      },
      "LinK43": {
        "path": "solutions/362/LinK43.cpp",
        "language": "cpp",
        "code": "#include<iostream>\nusing namespace std;\n//补全下列两个函数即可\n//从n中减lowbit循环\nint lowbit(int n)\n{\n  //write your code here\n  return n&-n;\n}\nint NumberOf1(int n) {\n        int res = 0;\n        while(n)\n        {\n          n-=lowbit(n);\n          res+=1;\n        }\n      //write your code here\n        return res;\n}\n// int main()\n// {\n//   int n;\n//   cin>>n;\n//   cout<<NumberOf1(n)<<endl;\n// } \n"
      },
      "LinK44": {
        "path": "solutions/362/LinK44.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\nusing namespace std;\r\nint lowbit(int n)\r\n{\r\n    return n&-n;\r\n}\r\n\r\n\r\nint main(){\r\n    int n,m;\r\n    cin>>n;\r\n    m=lowbit(n);\r\n    int res=0;\r\n    while(m!=1)\r\n    {\r\n        m=m>>1;\r\n        res++;\r\n    }\r\n    cout<<res;\r\n\r\n\r\n}\r\n//2.打表法\r\n// #define N 16\r\n// int log[1<<N];\r\n\r\n// void BuildLog2Table(int n)\r\n// {\r\n//     for(int i=0;i<n;i++)\r\n//         log[1<<i]=i;\r\n// }\r\n// int query(int n)\r\n// {\r\n//     return log[lowbit(n)];\r\n// }\r\n//int main()\r\n// {\r\n//     int n;cin>>n;\r\n//     cout<<query(n);\r\n// }\r\n"
      },
      "LinK45": {
        "path": "solutions/362/LinK45.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<cstring>\r\nusing namespace std;\r\nconst int N=9;\r\nconst int M=3;\r\nint a[N][N],b[N][N];\r\nbool st[N+1];\r\n\r\nstring memory[N]{{\"530070000\"},{\"600195000\"},{\"098000060\"},\r\n                {\"800060003\"},{\"400803001\"},{\"700020006\"},\r\n                {\"060000280\"},{\"000419005\"},{\"000080079\"}};\r\nbool check_input()\r\n{\r\n    string line;\r\n    for(int i=0;i<N;i++)//输入长度\r\n    {\r\n        cin>>line;\r\n        if(line.size()!=N)return false;//检测长度\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            int t=line[j]-'0';\r\n            if(t<0||t>N)return false;//非法字符\r\n            if(a[i][j]!=0&&a[i][j]!=t)return false;//与初值匹配\r\n            b[i][j]=t;\r\n        }\r\n        \r\n    }\r\n    return true;\r\n}\r\n\r\nbool check_row()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        memset(st,false,sizeof st);//初始化\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            int t=b[i][j];\r\n            if(t<0||t>N)return false;\r\n            if(st[t])return false;\r\n            st[t]=true;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nbool check_col()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        memset(st,false,sizeof st);\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            int t=b[j][i];\r\n            if(t<0||t>N)return false;\r\n            if(st[t])return false;\r\n            st[t]=true;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nbool check_block()\r\n{\r\n    for(int x=0;x<N;x+=M)\r\n    {\r\n        for(int y=0;y<N;y+=M)\r\n        {\r\n            memset(st,false,sizeof st);\r\n            for(int dx=0;dx<M;dx++)\r\n            {\r\n                for(int dy=0;dy<M;dy++)\r\n                {\r\n                    int t=b[x+dx][y+dy];\r\n                    if(t<0||t>N)return false;\r\n                    if(st[t])return false;\r\n                    st[t]=true;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n\r\n\r\n\r\nint main()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            a[i][j]=memory[i][j]-'0';\r\n        }\r\n    }\r\n\r\n\r\n    if(check_input()&&check_col()\r\n    &&check_row()&&check_block())\r\n    {\r\n        cout<<\"Yes\"<<endl;\r\n    }\r\n    else cout<<\"No\"<<endl;\r\n}"
      },
      "LinK46": {
        "path": "solutions/362/LinK46.cpp",
        "language": "cpp",
        "code": "#include<iostream>\nusing namespace std;\n#include<cstring>\n\nconst int N=10;\nchar a[N][N];\nbool row[N][N]={false},col[N][N]={false},block[3][3][N]={false};\n\nbool dfs(int x,int y)\n{\n    if(y==9)\n    {\n        x++;\n        y=0;\n    }\n    if(x==9)//数组结束\n    {\n        for(int i=0;i<=8;i++)\n        {\n            cout<<a[i]<<endl;\n        }\n        return true;\n    }\n    if(a[x][y]!='0')return dfs(x,y+1);\n    for(int i=1;i<=9;i++)\n    {\n        if(!row[x][i]&&!col[y][i]&&!block[x/3][y/3][i])\n        {\n            a[x][y]=i+'0';\n            row[x][i]=col[y][i]=block[x/3][y/3][i]=true;\n            if(dfs(x,y+1))return true;\n            a[x][y]='0';//恢复现场\n            row[x][i]=col[y][i]=block[x/3][y/3][i]=false;\n        }\n    }\n\n    return false;\n}\n\nint main()\n{\n    for(int i=0;i<9;i++)\n            cin>>a[i];\n     for(int i = 0; i < 9; i++)\n    {\n        for(int j = 0; j < 9; j++)\n        {\n            if(a[i][j] != '0')//存储数据\n            {\n                int num = a[i][j] - '0';\n                row[i][num] = true;\n                col[j][num] = true;\n                block[i/3][j/3][num] = true;\n            }\n        }\n    }\n    dfs(0,0);\n\n\n}"
      },
      "LinK47": {
        "path": "solutions/362/LinK47.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<string>\r\n#include<cstring>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 9;\r\nint ones[1 << N],LOG[1 << N];\r\nint row[N],col[N],block[3][3];\r\n\r\nstring str;\r\n\r\ninline int lowbit(int x)\r\n{\r\n    return x&-x;\r\n}\r\n\r\nvoid init()//初始化row和col,block\r\n{\r\n    for(int i=0;i<N;i++)//打表\r\n    {\r\n        row[i]=col[i]=(1<<N)-1;//均为111111111\r\n    }\r\n    for(int i=0;i<3;i++)\r\n        for(int j=0;j<3;j++)\r\n            block[i][j]=(1<<N)-1;\r\n\r\n}\r\n\r\ninline int get(int x,int y)//求出缺的数\r\n{\r\n    //用&运算求并集\r\n    return row[x]&col[y]&block[x/3][y/3];\r\n}\r\n\r\nbool dfs(int cnt)\r\n{\r\n    if(!cnt)return true;\r\n    int minv=10;//\"当前找到的最少可选数字数量\"的基准值,0-9\r\n    int x=0,y=0;\r\n    for(int i=0;i<N;i++)\r\n        for(int j=0;j<N;j++)\r\n            if(str[i*9+j]=='.')//\r\n            {\r\n                int t=ones[get(i,j)];\r\n                if(t<minv)//每次递归找到最小\r\n                {\r\n                    minv=t;\r\n                    x=i,y=j;//记录\r\n                }\r\n            }\r\n    for(int i=get(x,y);i;i-=lowbit(i))\r\n    {\r\n        int t=LOG[lowbit(i)];\r\n        row[x]-=1<<t;\r\n        col[y]-=1<<t;\r\n        block[x/3][y/3]-=1<<t;\r\n        str[x*9+y]='1'+t;\r\n        if (dfs(cnt-1))return true;\r\n        row[x]+=1<<t;\r\n        col[y]+=1<<t;\r\n        block[x / 3][y / 3]+=1<<t;\r\n        str[x*9+y]='.';//恢复现场\r\n    }\r\n    return false;\r\n}\r\nint main()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        LOG[1<<i]=i;\r\n    }//初始化LOG\r\n    for(int i=0;i<1<<N;i++)//1<<N=2^N\r\n    {\r\n        int s=0;\r\n        for(int j=i;j;j-=lowbit(j))s++;\r\n        ones[i]=s;//得到每个数有几个1\r\n    }\r\n    while(cin>>str,str[0]!='e')//end结尾\r\n    {\r\n        init();\r\n        int cnt=0;//计算空缺数\r\n        for(int i=0,k=0;i<N;i++)\r\n        {\r\n            for(int j=0;j<N;j++,k++)\r\n            {\r\n                if(str[k]!='.')\r\n                {\r\n                    int t=str[k]-'1';//0-8\r\n                    row[i]-=1<<t;//2^t\r\n                    col[j]-=1<<t;\r\n                    block[i/3][j/3]-=1<<t;\r\n                }\r\n                else cnt++;\r\n            }\r\n        }\r\n        dfs(cnt);\r\n        cout<<str;\r\n        cout<<endl;\r\n    }\r\n}"
      },
      "LinK48": {
        "path": "solutions/362/LinK48.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <cstdio>\r\nusing namespace std;\r\n\r\nconst int N = 9;\r\nint g[9][9];            \r\nint row[9], col[9], cell[3][3];\r\nint ones[1 << 9];       \r\nint LOG[1 << 9];       \r\nint ans = -1;         \r\n\r\n\r\nvoid init() {\r\n\r\n    for (int i = 0; i < N; i++) {\r\n        row[i] = (1 << N) - 1;\r\n        col[i] = (1 << N) - 1;\r\n    }\r\n    for (int i = 0; i < 3; i++) {\r\n        for (int j = 0; j < 3; j++) {\r\n            cell[i][j] = (1 << N) - 1;\r\n        }\r\n    }\r\n    for (int i = 0; i < 1 << N; i++) {\r\n        int s = 0;\r\n        for (int j = i; j; j -= j & -j) s++;\r\n        ones[i] = s;\r\n    }\r\n    for (int i = 0; i < N; i++) LOG[1 << i] = i;\r\n}\r\n\r\ninline int lowbit(int x) {\r\n    return x & -x;\r\n}\r\n\r\ninline int get_score(int x, int y) {\r\n    return 10 - max(abs(x - 4), abs(y - 4));\r\n}\r\n\r\ninline void draw(int x, int y, int t) {\r\n    int s = 1;\r\n    if (t > 0) g[x][y] = t;\r\n    else {\r\n        s = -1;\r\n        t = -t;\r\n        g[x][y] = 0;\r\n    }\r\n    t--; \r\n    row[x] -= s << t;\r\n    col[y] -= s << t;\r\n    cell[x / 3][y / 3] -= s << t;\r\n}\r\n\r\ninline int get(int x, int y) {\r\n    return row[x] & col[y] & cell[x / 3][y / 3];\r\n}\r\n\r\n\r\nvoid dfs(int cnt, int score) {\r\n    if (!cnt) {\r\n        ans = max(ans, score);\r\n        return;\r\n    }\r\n\r\n    int x, y, mins = 10;\r\n    for (int i = 0; i < N; i++) {\r\n        for (int j = 0; j < N; j++) {\r\n            if (!g[i][j]) {\r\n                int state = get(i, j);\r\n                if (ones[state] < mins) {\r\n                    mins = ones[state];\r\n                    x = i;\r\n                    y = j;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    for (int i = get(x, y); i; i -= lowbit(i)) {\r\n        int t = LOG[lowbit(i)] + 1; \r\n        draw(x, y, t);\r\n        dfs(cnt - 1, score + t * get_score(x, y));\r\n        draw(x, y, -t); \r\n    }\r\n}\r\n\r\nint main() {\r\n    init();\r\n    int cnt = 0, score = 0;\r\n    for (int i = 0; i < N; i++) {\r\n        for (int j = 0; j < N; j++) {\r\n            int x;\r\n            scanf(\"%d\", &x);\r\n            if (x) {\r\n                draw(i, j, x);\r\n                score += x * get_score(i, j);\r\n            } else {\r\n                cnt++;\r\n            }\r\n        }\r\n    }\r\n    \r\n    dfs(cnt, score);\r\n    printf(\"%d\\n\", ans);\r\n    return 0;\r\n}"
      },
      "LinK49": {
        "path": "solutions/362/LinK49.cpp",
        "language": "cpp",
        "code": "\r\n#include <iostream>\r\n#include<algorithm>\r\n#include<vector>\r\n#include<string>\r\n#include<cstring>\r\nusing namespace std;\r\nconst int N=16;\r\nint ones[1<<N],cnt_log[1<<N];//ones[x]表示x在二进制下有多少个1；log[x]表示log(x)的值 \r\nint state[N][N];//状态存储，表示x行y列这个格子可以填哪些数（0-15），15位二进制表示 \r\nchar str[N][N+1];\r\nint bstate[N*N+1][N][N],bstate2[N*N+1][N][N];//bstate和bstate2都存储状态的备份(搜索最多有N*N层，每层有一个备份) \r\nchar bstr[N*N+1][N][N+1];//输入的N宫格也要备份 \r\n\r\ninline int lowbit(int x)//返回x在二进制下的最后一个1  (inline加速函数调用过程)\r\n{\r\n    return x & -x;\r\n}\r\n\r\nvoid draw(int x,int y,int c)//在(x,y)这个格子上写上字母c(0到15表示A到P) \r\n{\r\n    str[x][y]='A'+c;//先写进去，转换为原来的字母 \r\n\r\n    for (int i=0;i<N;++i)//更新state \r\n    {\r\n        state[x][i] &= ~(1 << c);//x这一行其他位置都不能再填c (把表示c的二进制位改成0，yxc大佬的位运算)\r\n        state[i][y] &= ~(1 << c);//y这一列其他位置都不能再填c \r\n    }\r\n\r\n    int sx=x/4*4,sy=y/4*4;//把(x,y)所在的十六宫格也做一次同样的操作 \r\n    for (int i=0;i<4;++i)\r\n        for (int j=0;j<4;++j)\r\n                state[sx+i][sy+j] &= ~(1 << c);//同上 \r\n\r\n    state[x][y]=1<<c;\r\n}\r\n\r\nbool dfs(int cnt)//传入的参数cnt表示当前空格个数 \r\n{\r\n    if (!cnt) return true;//cnt为零就找到了方案，返回true\r\n\r\n    int kcnt=cnt;//先进行备份 \r\n    memcpy(bstate[kcnt],state,sizeof state);\r\n    memcpy(bstr[kcnt],str,sizeof str);\r\n\r\n    //剪枝1：对于每个空格，如果不能填任何一个字母，则返回false；如果只能填一个字母，那么直接填上\r\n    for (int i=0;i<N;++i)//直接枚举所有的空格\r\n        for (int j=0;j<N;++j)\r\n            if (str[i][j]=='-')//如果当前格子是空格 \r\n            {\r\n                if (!state[i][j])//如果不能填任何一个字母，则返回false；并且copy回去 \r\n                {\r\n                    memcpy(state,bstate[kcnt],sizeof state);\r\n                    memcpy(str,bstr[kcnt],sizeof str);\r\n                    return false;\r\n                }\r\n                if (ones[state[i][j]]==1)//如果只能填一个字母，那么直接填上\r\n                {\r\n                    draw(i,j,cnt_log[state[i][j]]);\r\n                    --cnt;//填好一个空格，所以剩余空格数减1\r\n                }\r\n            }\r\n\r\n    //剪枝2：对于每一行，如果某个字母不能出现在任何一个位置，则返回false；如果某个字母只有一个位置可以填，则直接填上 \r\n    for (int i=0;i<N;++i)//枚举所有行 \r\n    {\r\n        int sor=0,sand=(1<<N)-1;//sor存的是这一行里每个格子备选方案的并集;sand用来找“如果某个字母只有一个位置可以填”，先假设所有字母都符合要求 \r\n        int drawn=0;//drawn表示所有已经填上的字母是哪些 \r\n\r\n        for (int j=0;j<N;++j)//枚举当前行所有格子 \r\n        {\r\n            int s=state[i][j];//只是为了少打字 \r\n            sand &= ~(sor & s);//把不符合要求的删掉(和前面更新state是一个道理) \r\n            sor |= s;//求并集 \r\n            if (str[i][j]!='-') drawn |= state[i][j];//如果当前这个位置已经填上字母，就记录下来 \r\n        }\r\n\r\n        if (sor!=(1<<N)-1)//如果这个并集不够A到P就是无解 \r\n        {\r\n            memcpy(state,bstate[kcnt],sizeof state);//同上述处理方法 \r\n            memcpy(str,bstr[kcnt],sizeof str);\r\n            return false;\r\n        }\r\n\r\n        //这样以后sand中是1的位置就表示这个字母有一个位置可以填\r\n        for (int j=sand;j;j-=lowbit(j))//所以把所有是1的位置枚举一遍 \r\n        {\r\n            int t=lowbit(j);//也是为了少写一点 \r\n            if (!(drawn & t))//如果正好也没填过就填上 \r\n            {\r\n                for (int k=0;k<N;++k)//更新state \r\n                    if (state[i][k] & t)\r\n                    {\r\n                        draw(i,k,cnt_log[t]);\r\n                        --cnt;\r\n                        break;\r\n                    }\r\n            }\r\n        }\r\n    }\r\n\r\n    //剪枝3：对于每一列，同剪枝2  (直接把上面复制过来再把i和j调换一下就好了) \r\n    for (int i=0;i<N;++i)\r\n    {\r\n        int sor=0,sand=(1<<N)-1;\r\n        int drawn=0;\r\n\r\n        for (int j=0;j<N;++j)\r\n        {\r\n            int s=state[j][i];\r\n            sand &= ~(sor & s);\r\n            sor |= s;\r\n            if (str[j][i]!='-') drawn |= state[j][i];\r\n        }\r\n\r\n        if (sor!=(1<<N)-1)\r\n        {\r\n            memcpy(state,bstate[kcnt],sizeof state);\r\n            memcpy(str,bstr[kcnt],sizeof str);\r\n            return false;\r\n        }\r\n\r\n        for (int j=sand;j;j-=lowbit(j))\r\n        {\r\n            int t=lowbit(j);\r\n            if (!(drawn & t))\r\n            {\r\n                for (int k=0;k<N;++k)\r\n                    if (state[k][i] & t)//这里i和k也要和上面要反一下 \r\n                    {\r\n                        draw(k,i,cnt_log[t]);\r\n                        --cnt;\r\n                        break;\r\n                    }\r\n            }\r\n        }\r\n    }\r\n\r\n    //剪枝4：对于每个N宫格，同剪枝2\r\n    for (int i=0;i<N;++i)//i枚举每个N宫格的位置 \r\n    {\r\n        int sor=0,sand=(1<<N)-1;\r\n        int drawn=0;\r\n\r\n        for (int j=0;j<N;++j)//j枚举一个N宫格的每个位置 \r\n        {\r\n            int sx=i/4*4,sy=i%4*4;\r\n            int dx=j/4,dy=j%4;//需要定义一个偏移量 \r\n            int s=state[sx+dx][sy+dy];\r\n            sand &= ~(sor & s);\r\n            sor |= s;\r\n\r\n            if (str[sx+dx][sy+dy]!='-') drawn |= state[sx+dx][sy+dy];\r\n        }\r\n\r\n        if (sor!=(1<<N)-1)\r\n        {\r\n            memcpy(state,bstate[kcnt],sizeof state);\r\n            memcpy(str,bstr[kcnt],sizeof str);\r\n            return false;\r\n        }\r\n\r\n        for (int j=sand;j;j-=lowbit(j))\r\n        {\r\n            int t=lowbit(j);\r\n            if (!(drawn & t))\r\n            {\r\n                for (int k=0;k<N;++k)\r\n                {\r\n                    int sx=i/4*4,sy=i%4*4;\r\n                    int dx=k/4,dy=k%4;\r\n                    if (state[sx+dx][sy+dy] & t)\r\n                    {\r\n                        draw(sx+dx,sy+dy,cnt_log[t]);\r\n                        --cnt;\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    //啊，还剩一个剪枝啦 \r\n\r\n    //剪枝5：每次选择空格时，选择备选方案(能填的字母数量)最少的格子来填 \r\n    if (!cnt) return true;//哦对，先看看现在有没有填完(一个小剪枝) \r\n\r\n    int x,y,s=100;//(x,y)存储最后选择的格子，s是备选方案最小值 \r\n    for (int i=0;i<N;++i)//遍历一遍所有的格子 \r\n        for (int j=0;j<N;++j)\r\n            if (str[i][j]=='-' && ones[state[i][j]]<s)//如果当前格子还没填过，并且这个格子的备选方案更少，就更新 \r\n            {\r\n                s=ones[state[i][j]];\r\n                x=i,y=j;\r\n            }\r\n\r\n    //求完了那个格子备选方案最少，然后枚举应该在这个格子填那个字母 \r\n    memcpy(bstate2[kcnt],state,sizeof state);//先备份一下，bstate2在这里终于用到了 \r\n    for (int i=state[x][y];i;i-=lowbit(i))//枚举这个格子的备选方案 \r\n    {\r\n        memcpy(state,bstate2[kcnt],sizeof state);\r\n        draw(x,y,cnt_log[lowbit(i)]);\r\n        if (dfs(cnt-1)) return true;//进行下一层递归，如果成功，返回true \r\n    }\r\n\r\n    //失败了也要copy回来 \r\n    memcpy(state,bstate[kcnt],sizeof state);\r\n    memcpy(str,bstr[kcnt],sizeof str);\r\n\r\n    return false;//一直没找到返回false \r\n}\r\n\r\nint main()\r\n{\r\n    for (int i=0;i<N;++i) cnt_log[1<<i]=i;//预处理cnt_log数组，如log(2)=1,log(4)=2,log(8)=3 \r\n    for (int i=0;i<(1<<N);++i)//预处理ones数组 \r\n        for (int j=i;j;j-=lowbit(j))//j每次减去最后一个1 \r\n            ++ones[i];//每减一个1说明这个i就多一个1 \r\n\r\n    while (cin>>str[0])//多组测试数据 \r\n    {\r\n        for (int i=1;i<N;++i) cin>>str[i];\r\n        for (int i=0;i<N;++i)//预处理state\r\n            for (int j=0;j<N;++j)\r\n                state[i][j]=(1<<N)-1;//一开始假设所有空格都是空的\r\n\r\n        int cnt=0;//存储空格个数\r\n        for (int i=0;i<N;++i)//接着在遍历一遍，看那些格子已经填好了\r\n            for (int j=0;j<N;++j)\r\n                if (str[i][j]!='-') draw(i,j,str[i][j]-'A');//如果已经填好了就更新state,A到P分别用0到15表示\r\n                else ++cnt;\r\n\r\n        dfs(cnt);//DFS开始\r\n\r\n        for (int i=0;i<N;++i) cout<<str[i]<<endl;//输出答案\r\n        puts(\"\");//每次输出完答案加一个空行\r\n    }\r\n    return 0;\r\n}\r\n\r\n\r\n// //剪枝：\r\n// 优化：\r\n// 1.如果不能填写任何字母，无解；\r\n//   如果只能一个，直接填上\r\n// 2.对于每一行，如何某一个字母不能出现在任何位置，无解；\r\n//   只有一个可以，直接填上\r\n// 3.每一列/16宫格与行类似\r\n// 4.每次选方案最少的格子来填"
      },
      "LinK50": {
        "path": "solutions/362/LinK50.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include <cstring>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 20000;\r\nconst int m = 16 * 16 * 4;\r\n\r\nint u[N], d[N], l[N], r[N], s[N], col[N], row[N], idx;\r\nint ans[N], top;\r\nstruct Op {\r\n    int x, y;\r\n    char z;\r\n} op[N];\r\nchar g[20][20];\r\n\r\nvoid init() {\r\n    for (int i = 0; i <= m; i++) {\r\n        l[i] = i - 1;\r\n        r[i] = i + 1;\r\n        s[i] = 0;\r\n        d[i] = u[i] = i;\r\n    }\r\n    l[0] = m;\r\n    r[m] = 0;\r\n    idx = m + 1;\r\n}\r\n\r\nvoid add(int &hh, int &tt, int x, int y) {\r\n    row[idx] = x;\r\n    col[idx] = y;\r\n    s[y]++;\r\n    u[idx] = y;\r\n    d[idx] = d[y];\r\n    u[d[y]] = idx;\r\n    d[y] = idx;\r\n    r[hh] = l[tt] = idx;\r\n    r[idx] = tt;\r\n    l[idx] = hh;\r\n    tt = idx++;\r\n}\r\n\r\nvoid remove(int p) {\r\n    r[l[p]] = r[p];\r\n    l[r[p]] = l[p];\r\n    for (int i = d[p]; i != p; i = d[i]) {\r\n        for (int j = r[i]; j != i; j = r[j]) {\r\n            s[col[j]]--;\r\n            u[d[j]] = u[j];\r\n            d[u[j]] = d[j];\r\n        }\r\n    }\r\n}\r\n\r\nvoid resume(int p) {\r\n    for (int i = u[p]; i != p; i = u[i]) {\r\n        for (int j = l[i]; j != i; j = l[j]) {\r\n            u[d[j]] = j;\r\n            d[u[j]] = j;\r\n            s[col[j]]++;\r\n        }\r\n    }\r\n    r[l[p]] = p;\r\n    l[r[p]] = p;\r\n}\r\n\r\nbool dfs() {\r\n    if (!r[0]) return true;\r\n    int p = r[0];\r\n    for (int i = r[0]; i; i = r[i]) {\r\n        if (s[i] < s[p]) p = i;\r\n    }\r\n    remove(p);\r\n    for (int i = d[p]; i != p; i = d[i]) {\r\n        ans[top++] = row[i];\r\n        for (int j = r[i]; j != i; j = r[j]) {\r\n            remove(col[j]);\r\n        }\r\n        if (dfs()) return true;\r\n        for (int j = l[i]; j != i; j = l[j]) {\r\n            resume(col[j]);\r\n        }\r\n        top--;\r\n    }\r\n    resume(p);\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    while (~scanf(\"%s\", g[0])) {\r\n        for (int i = 1; i < 16; i++) scanf(\"%s\", g[i]);\r\n        init();\r\n        int n = 1;\r\n        for (int i = 0; i < 16; i++) {\r\n            for (int j = 0; j < 16; j++) {\r\n                int a = 0, b = 15;\r\n                if (g[i][j] != '-') a = b = g[i][j] - 'A';\r\n                for (int k = a; k <= b; k++, n++) {\r\n                    int hh = idx, tt = idx;\r\n                    op[n] = {i, j, char(k + 'A')};\r\n                    add(hh, tt, n, i * 16 + j + 1);\r\n                    add(hh, tt, n, 256 + i * 16 + k + 1);\r\n                    add(hh, tt, n, 512 + j * 16 + k + 1);\r\n                    int block = (i / 4) * 4 + (j / 4);\r\n                    add(hh, tt, n, 768 + block * 16 + k + 1);\r\n                }\r\n            }\r\n        }\r\n        top = 0;\r\n        if (dfs()) {\r\n            for (int i = 0; i < top; i++) {\r\n                Op &o = op[ans[i]];\r\n                g[o.x][o.y] = o.z;\r\n            }\r\n            for (int i = 0; i < 16; i++) {\r\n                printf(\"%s\\n\", g[i]);\r\n            }\r\n            printf(\"\\n\");\r\n        }\r\n    }\r\n    return 0;\r\n}"
      },
      "LinK51": {
        "path": "solutions/362/LinK51.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<algorithm>\r\n#include<queue>\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int, int>PII;\r\nconst int N = 25;\r\nint n, m;\r\nchar g[N][N];\r\n\r\nint bfs(int sx,int sy)\r\n{\r\n    queue<PII>q;\r\n    q.push({ sx,sy });\r\n    g[sx][sy] = '#';\r\n    int res = 0;\r\n    int dx[] = { -1,0,1,0 }, dy[] = { 0,1,0,-1 };\r\n    while (q.size())\r\n    {\r\n        auto t = q.front();\r\n        q.pop();\r\n        res++;\r\n\r\n        for (int i = 0; i < 4; i++)\r\n        {\r\n            int x = t.first + dx[i], y = t.second + dy[i];\r\n            if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] != '.')continue;\r\n            g[x][y] = '#';\r\n            q.push({ x,y });\r\n        }\r\n    }\r\n    return res;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nint main()\r\n{\r\n    while (cin >> m >> n && n || m)\r\n    {\r\n        for (int i = 0; i < n; i++)cin >> g[i];\r\n        int x, y;\r\n        for(int i=0;i<n;i++)\r\n            for (int j = 0; j < m; j++)\r\n            {\r\n                if (g[i][j] == '@')\r\n                {\r\n                    x = i, y = j;\r\n                }\r\n            }\r\n        cout << bfs(x, y) << endl;\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\n"
      },
      "LinK52": {
        "path": "solutions/362/LinK52.cpp",
        "language": "cpp",
        "code": "#include <iostream>\r\n#include<vector>\r\n#include<queue>\r\n\r\nusing namespace std;\r\nint k, m, n;\r\n\r\nint get_int_sum(int x)\r\n{\r\n    int s = 0;\r\n    while (x)s += x % 10, x /= 10;//取出每个位的值加到s\r\n    return s;\r\n}\r\n\r\nint get_pair_sum(pair<int, int>p)\r\n{\r\n    int s = 0;\r\n    s += get_int_sum(p.first);\r\n    s += get_int_sum(p.second);\r\n    return s;\r\n}\r\n//vector<vector<bool>>st(rows, vector<bool>(cols, false));//长为cols，每一项为false\r\n//queue < pair<int, int>>q;\r\n\r\nint bfs(int threshold, int rows, int cols)\r\n{\r\n    if (!rows || !cols)return 0;\r\n\r\n    vector<vector<bool>>st(rows, vector<bool>(cols, false));\r\n    queue<pair<int, int>>q;\r\n\r\n    int dx[4] = { -1,0,1,0 }, dy[4] = { 0,1,0,-1 };\r\n\r\n    int res = 0;\r\n    q.push({ 0,0 });\r\n    while (q.size())\r\n    {\r\n        auto t = q.front();\r\n        q.pop();\r\n        if (st[t.first][t.second] || get_pair_sum(t) > threshold)continue;//st[t.first][t.second]为true\r\n        res++;\r\n        st[t.first][t.second] = true;\r\n\r\n        for (int i = 0; i < 4; i++)\r\n        {\r\n            int x = t.first + dx[i], y = t.second + dy[i];\r\n            if (x >= 0 && x < rows && y >= 0 && y < cols)\r\n                q.push({ x,y });\r\n        }\r\n    }\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int ans;\r\n    cin >> k >> m >> n;\r\n    ans = bfs(k, m, n);\r\n    cout << ans;\r\n}\r\n"
      },
      "LinK57": {
        "path": "solutions/362/LinK57.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<cstring>\r\n\r\nusing namespace std;\r\n\r\nconst int N=510;\r\nint n,m;\r\nint g[N][N];\r\nint dist[N];//计算距离\r\nbool st[N];\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist,0x3f,sizeof dist);//初始化为无穷\r\n    dist[1]=0;\r\n    for(int i=0;i<n-1;i++)//除去00还有n-1\r\n    {\r\n        int t=-1;\r\n        for(int j=1;j<=n;j++)\r\n        {\r\n            if(!st[j]&&(t==-1||dist[t]>dist[j]))\r\n                t=j;\r\n        }\r\n        for(int j=1;j<=n;j++)\r\n        {\r\n            dist[j]=min(dist[j],dist[t]+g[t][j]);\r\n            \r\n        }\r\n        st[t]=true;\r\n    }\r\n    if(dist[n]==0x3f3f3f3f)return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n        scanf(\"%d%d\",&n,&m);\r\n        memset(g,0x3f,sizeof g);\r\n        while(m--)\r\n        {\r\n            int a,b,c;\r\n            scanf(\"%d%d%d\",&a,&b,&c);\r\n            g[a][b]=min(g[a][b],c);//防止重复\r\n        }\r\n        printf(\"%d\\n\",dijkstra());\r\n\r\n        return 0;\r\n}"
      },
      "LinK58": {
        "path": "solutions/362/LinK58.cpp",
        "language": "cpp",
        "code": "#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<queue>\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int,int> PII;\r\n\r\nconst int N =1e6+10;\r\n\r\nint m,n;//行、列\r\nint h[N],w[N],e[N],ne[N],idx;//数组模拟链表\r\nint dist[N];//距离\r\nbool st[N];//状态\r\n\r\nvoid add(int a,int b,int c)\r\n{\r\n    e[idx]=b,w[idx]=c,ne[idx]=h[a],h[a]=idx++;\r\n}\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist,0x3f,sizeof dist);\r\n    dist[1]=0;\r\n    priority_queue<PII,vector<PII>,greater<PII>>heap;\r\n\r\n    heap.push({0,1});\r\n    while(heap.size())\r\n    {\r\n        auto t=heap.top();\r\n        heap.pop();\r\n    \r\n        int ver=t.second,distance=t.first;\r\n\r\n        if(st[ver])continue;\r\n        st[ver]=true;\r\n        for(int i=h[ver];i!=-1;i=ne[i])\r\n        {\r\n            int j=e[i];\r\n            if(dist[j]>dist[ver]+w[i])\r\n            {\r\n                dist[j]=dist[ver]+w[i];\r\n                heap.push({dist[j],j});\r\n            }\r\n        }\r\n    }\r\n    if(dist[n]==0x3f3f3f3f)return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\",&n,&m);\r\n    memset(h,-1,sizeof h);\r\n    while(m--)\r\n    {\r\n        int a,b,c;\r\n        scanf(\"%d%d%d\",&a,&b,&c);\r\n        add(a,b,c);\r\n\r\n    }\r\n    cout<<dijkstra()<<endl;\r\n    return 0;\r\n\r\n\r\n}"
      }
    }
  }
};
