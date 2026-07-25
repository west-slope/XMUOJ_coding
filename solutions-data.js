window.XMUOJ_SOLUTIONS_CODE = {
  "generatedAt": "2026/7/25 11:19:25",
  "solutions": {
    "359": {
      "100": [
        {
          "variant": 1,
          "path": "solutions/359/100.cpp",
          "language": "cpp",
          "code": "// 思路：建立单链表后用三个指针逐步反转每条指针方向，再从新头节点输出。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int m;\r\n    node *Next;\r\n};\r\n\r\nint main()\r\n{\r\n    int n,num=0;\r\n    node *p0,*head,*p1;\r\n    cin>>n;\r\n    while(n!=-1)\r\n    {\r\n\r\n        p0=new node;\r\n        p0->m=n;p0->Next=NULL;\r\n        if(num==0)\r\n            p1=head=p0;\r\n        else {p1->Next=p0;p1=p0;}\r\n        num++;\r\n        cin>>n;\r\n    }\r\n    node *pre,*cur,*next;\r\n    pre=head;\r\n    if(head->Next!=NULL){cur=next=head->Next;pre->Next=NULL;}\r\n    else {cout<<head->m;return 0;}\r\n    while(next->Next!=NULL)\r\n    {\r\n        next=next->Next;\r\n        cur->Next=pre; // 让当前节点指向前驱节点，完成一条链的反转。\r\n        pre=cur;\r\n        cur=next;\r\n    }\r\n    next->Next=pre;\r\n    p1=head=next;\r\n    while(p1!=NULL)\r\n    {\r\n        cout<<p1->m<<\" \";\r\n        p1=p1->Next;\r\n    }\r\n\r\n}\r\n// 总结：链表反转前必须保存后继节点，否则修改指针后会丢失剩余链表。"
        }
      ],
      "101": [
        {
          "variant": 1,
          "path": "solutions/359/101.cpp",
          "language": "cpp",
          "code": "// 思路：同时遍历两个有序链表，每次取较小节点值接入新链表，最后连接剩余部分。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nstruct node\r\n{\r\n    int num;\r\n    node *next;\r\n};\r\nint main()\r\n{\r\n    node *head0=NULL,*head1=NULL,*head2=NULL,*p0,*p1,*p2,*p;\r\n    int m,n;\r\n    cin>>m;\r\n    while(m!=-1)\r\n    {\r\n        p0=new node;p0->num=m;p0->next=NULL;\r\n        if(head1==NULL)head1=p1=p0;\r\n        else {\r\n            p1->next=p0;\r\n            p1=p0;\r\n        }\r\n        cin>>m;\r\n    }\r\n        cin>>n;\r\n        while(n!=-1)\r\n    {\r\n        p0=new node;p0->num=n;p0->next=NULL;\r\n        if(head2==NULL)head2=p2=p0;\r\n        else {\r\n            p2->next=p0;\r\n            p2=p0;\r\n        }\r\n        cin>>n;\r\n    }\r\n    if(head1==NULL)head0=head2;\r\n    else if(head2==NULL)head0=head1;\r\n    else {\r\n        p1=head1,p2=head2;\r\n        while(p1!=NULL&&p2!=NULL)\r\n        {\r\n            if(p1->num>=p2->num) // 比较两个当前节点，优先复制数值较小的一方。\r\n            {\r\n                p0=new node;\r\n                p0->num=p2->num;\r\n                p0->next=NULL;\r\n                if(head0==NULL)\r\n                {\r\n                    head0=p=p0;\r\n                }\r\n                else {\r\n                    p->next=p0;\r\n                    p=p0;\r\n                }\r\n                p2=p2->next;\r\n            }\r\n            else if(p1->num<p2->num)\r\n            {\r\n                p0=new node;\r\n                p0->num=p1->num;\r\n                p0->next=NULL;\r\n                if(head0==NULL)\r\n                {\r\n                    head0=p=p0;\r\n                }   \r\n                else {\r\n                    p->next=p0;\r\n                    p=p0;\r\n                }\r\n                p1=p1->next;\r\n            }\r\n        }\r\n    \r\n        if(p1==NULL)\r\n            p->next=p2;\r\n        else if(p2==NULL)\r\n            p->next=p1;\r\n    }\r\n    p=head0;\r\n    while(p!=NULL)\r\n    {\r\n        cout<<p->num<<\" \";\r\n        p=p->next;\r\n    }\r\n\r\n\r\n}\r\n// 总结：归并有序链表的关键是双指针推进，并在一方结束后直接接上另一方。"
        }
      ],
      "102": [
        {
          "variant": 1,
          "path": "solutions/359/102.cpp",
          "language": "cpp",
          "code": "// 思路：使用冒泡排序按整数成员升序排列，整数相同时再按浮点成员升序。\r\n#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<iomanip>\r\nusing namespace std;\r\nstruct sanyuan\r\n{\r\n    int num;\r\n    double m;\r\n    string str;\r\n};\r\n\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    sanyuan s[200]; \r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>s[i].num>>s[i].m>>s[i].str;\r\n    }\r\n    for(int i=0;i<N-1;i++)\r\n    {\r\n        for(int j=0;j<N-i-1;j++)\r\n        {\r\n            if(s[j].num>s[j+1].num||(s[j].num==s[j+1].num&&s[j].m>s[j+1].m)) // 复合条件实现第一关键字和第二关键字的排序规则。\r\n            {\r\n                sanyuan temp=s[j];\r\n                s[j]=s[j+1];\r\n                s[j+1]=temp;\r\n            }\r\n        }\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout<<s[i].num<<\" \"<<fixed<<setprecision(2)<<s[i].m<<\" \"<<s[i].str<<endl;\r\n    }\r\n}\r\n// 总结：多关键字排序应先比较高优先级字段，只有相等时才比较下一字段。"
        }
      ],
      "103": [
        {
          "variant": 1,
          "path": "solutions/359/103.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint a[1000000],n;\r\nvoid quick_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int i=l-1,j=r+1,x=arr[(l+r)>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(arr[i]<x);\r\n        do j--;while(arr[j]>x);\r\n        if(i<j){swap(arr[i],arr[j]);\r\n        }\r\n    }\r\n    quick_sort(arr,l,j);\r\n    quick_sort(arr,j+1,r);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }   \r\n    quick_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        //if(i!=0)cout<<\" \";\r\n        printf(\"%d \",a[i]);\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "104": [
        {
          "variant": 1,
          "path": "solutions/359/104.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint a[100010];//数组太小过不了 \r\nint quick_sort(int arr[],int l,int r,int k)\r\n{\r\n    if(l>=r)return arr[l];\r\n    int i=l-1,j=r+1,x=arr[(l+r)>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(x>arr[i]);\r\n        do j--;while(x<arr[j]);\r\n        if(i<j)swap(arr[i],arr[j]);\r\n    }\r\n    int s1=j-l+1;\r\n    if(k<=s1)return quick_sort(arr,l,j,k);\r\n    else return quick_sort(arr,j+1,r,k-s1);\r\n}\r\n\r\nint main()\r\n{\r\n    int n,k;\r\n    cin>>n>>k;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    cout<<quick_sort(a,0,n-1,k)<<endl;\r\n    \r\n}"
        }
      ],
      "105": [
        {
          "variant": 1,
          "path": "solutions/359/105.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint a[1000],temp[1000],n;\r\nvoid merge_sort(int arr[],int l,int r)\r\n{\r\n    if(l>=r)return;\r\n    int mid=(l+r)>>1;//中间数\r\n    merge_sort(arr,l,mid);\r\n    merge_sort(arr,mid+1,r);\r\n    int i=l,j=mid+1,k=0;\r\n    while(i<=mid&&j<=r)\r\n    {\r\n        if(arr[i]<=arr[j]){\r\n            temp[k]=arr[i];\r\n            i++;\r\n        }\r\n        else {\r\n            temp[k]=arr[j];\r\n            j++;\r\n        }\r\n        k++;\r\n    }\r\n    while(i<=mid)\r\n        {\r\n            temp[k++]=arr[i++];\r\n        }\r\n    while(j<=r)\r\n    {\r\n            temp[k++]=arr[j++];\r\n    }\r\n    for(int i=l,k=0;i<=r;i++,k++)\r\n    {\r\n        arr[i]=temp[k];\r\n    }\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    merge_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        printf(\"%d \",a[i]);\r\n    }\r\n\r\n    return 0;\r\n}"
        }
      ],
      "106": [
        {
          "variant": 1,
          "path": "solutions/359/106.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\nLL n,a[1000000],temp[1000000];\r\n\r\nLL merge_sort(LL arr[],LL l,LL r)\r\n{\r\n    if(l>=r)return 0;\r\n    LL mid=l+r>>1,res=0;\r\n    res+=merge_sort(arr,l,mid)+ merge_sort(arr,mid+1,r);\r\n    LL i=l,j=mid+1,k=0;\r\n    while(i<=mid&&j<=r)\r\n    {\r\n        if(arr[i]<=arr[j])\r\n        {\r\n            temp[k++]=arr[i++];\r\n        }\r\n        else if(arr[i]>temp[j])\r\n        {\r\n            temp[k++]=arr[j++];\r\n            res+=mid-i+1;\r\n        }\r\n    }\r\n    while(i<=mid)\r\n    {\r\n        temp[k++]=arr[i++];\r\n    }\r\n    while(j<=r)\r\n    {\r\n        temp[k++]=arr[j++];\r\n    }\r\n    for(int i=l,k=0;i<=r;i++,k++)//为了进一步排序，不可忽略\r\n    {\r\n        arr[i]=temp[k];\r\n    }\r\n   return res;\r\n\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    cout<<merge_sort(a,0,n-1)<<endl;\r\n\r\n\r\n}"
        }
      ],
      "107": [
        {
          "variant": 1,
          "path": "solutions/359/107.cpp",
          "language": "cpp",
          "code": "// 思路：对每个查询在线性数组中找到目标值的首次位置，并继续扫描得到末次位置。\r\n#include<iostream>\r\nusing namespace std;\r\nint a[20000],n,q,j;\r\n\r\nvoid search(int m)\r\n{\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        if(a[i]==m)\r\n        {\r\n            j=i;\r\n            cout<<i<<\" \";\r\n            while(a[j]==m) // 从首次命中位置向后移动，直到离开连续的目标区间。\r\n            {\r\n                j++;\r\n            }\r\n            if(j==i)cout<<i;\r\n            else cout<<j-1<<endl;\r\n            break;\r\n        }\r\n        else if(i==n-1)\r\n        {\r\n            cout<<-1<<\" \"<<-1<<endl;\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int m;\r\n    cin>>n>>q;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<q;i++)\r\n    {\r\n        cin>>m;\r\n        search(m);\r\n    }\r\n\r\n}\r\n// 总结：查找重复区间要分别记录左右边界，未找到时输出两个负一。"
        }
      ],
      "108": [
        {
          "variant": 1,
          "path": "solutions/359/108.cpp",
          "language": "cpp",
          "code": "// 思路：在足够大的实数区间内二分，依据中点立方与目标值的关系逼近立方根。\r\n#include<iostream>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\n\r\n\r\nint main(){\r\n    double n;\r\n    double mid;\r\n    cin>>n;\r\n    double left=-10000,right=10000;\r\n    while(right-left>1e-8)\r\n    {\r\n        mid=(left+right)/2;\r\n        if(pow(mid,3)>=n) // 中点立方偏大时收缩右边界，否则提高左边界。\r\n            right=mid;\r\n        else left=mid;\r\n    }\r\n    cout<<fixed<<setprecision(6)<<mid<<endl;\r\n}\r\n// 总结：浮点二分使用误差作为终止条件，并保留足够迭代精度。"
        }
      ],
      "109": [
        {
          "variant": 1,
          "path": "solutions/359/109.cpp",
          "language": "cpp",
          "code": "// 思路：逐位检查每个整数的二进制最低位，并右移直到所有位处理完毕。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m;\r\n    while(m--){\r\n        cin>>n;\r\n        int count=0;\r\n        while(n>0)\r\n        {\r\n            count+=n&1; // 最低位为一时计数增加，按位与可直接取出该位。\r\n            n>>=1;\r\n        }\r\n        cout<<count<<\" \";\r\n    }\r\n}\r\n// 总结：统计二进制一的数量时，右移可以依次访问每一位。"
        }
      ],
      "110": [
        {
          "variant": 1,
          "path": "solutions/359/110.cpp",
          "language": "cpp",
          "code": "// 思路：把大整数反向存入 vector，按位相加并持续传递进位直到结束。\r\n#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\nvector<int>add(vector<int> &A,vector<int>&B)\r\n{\r\n    vector<int>C;\r\n    for(int i=0,t=0;i<A.size()||i<B.size()||t;i++)\r\n    {\r\n        if(i<A.size())t+=A[i];\r\n        if(i<B.size())t+=B[i];\r\n        C.push_back(t%10); // 当前总和的个位写入结果，剩余部分作为下一位进位。\r\n        t/=10;\r\n    }\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n        cout<<A[i];\r\n    cout<<endl;\r\n}\r\n\r\nint main()\r\n{\r\n    string a,b;\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=b.size()-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    print(add(A,B));\r\n\r\n}\r\n// 总结：循环条件要包含最终进位，避免最高位进位被遗漏。\r\n"
        },
        {
          "variant": 2,
          "path": "solutions/359/110-2.cpp",
          "language": "cpp",
          "code": "// 思路：把两个大整数按低位在前存入数组，逐位相加并处理十进制进位。\r\n#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    string arr[3];\r\n    int a[3][100001]={0};\r\n    cin>>arr[0];\r\n    cin>>arr[1];\r\n    int a0=arr[0].length(),a1=arr[1].length();\r\n    int m=max(a0,a1);\r\n    for(int i=0;i<a0;i++)\r\n    {\r\n        a[0][i]=arr[0][a0-i-1]-'0';\r\n    }\r\n    for(int i=0;i<a1;i++)\r\n    {\r\n        a[1][i]=arr[1][a1-i-1]-'0';\r\n    }\r\n    for(int i=0;i<m;i++)\r\n    {\r\n        a[2][i]+=a[0][i]+a[1][i]; // 同一数位相加后写入结果数组，再统一处理是否进位。\r\n        if(a[2][i]>=10)\r\n        {\r\n            a[2][i]-=10;\r\n            a[2][i+1]++;\r\n        }\r\n    }\r\n    for(int i=m;i>=0;i--)\r\n    {\r\n        if(i==m&&a[2][m]==0)continue;\r\n        cout<<a[2][i];\r\n    }\r\n}\r\n// 总结：高精度加法需要反向存储数位，并在最高位输出时去掉多余前导零。"
        }
      ],
      "111": [
        {
          "variant": 1,
          "path": "solutions/359/111.cpp",
          "language": "cpp",
          "code": "// 思路：先保证被减数不小于减数，再按低位到高位逐位完成高精度减法。\r\n#include<iostream>\r\n#include<cstring>\r\n#include<string>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nstring a,b;\r\n\r\nvoid compare(vector<int>&A,vector<int>&B)\r\n{\r\n    if(A.size()<B.size())swap(A,B);\r\n    else if(A.size()==B.size())\r\n    {\r\n        int i=A.size()-1;\r\n        while(i>=0&&A[i]==B[i])i--;\r\n        if(A[i]<B[i])swap(A,B);\r\n    }\r\n}\r\n\r\nvector<int> sub(vector<int>&A,vector<int>&B)\r\n{\r\n    vector<int>C;\r\n    int t=0;\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        t+=A[i];\r\n        if(i<B.size())t-=B[i];\r\n        C.push_back((t+10)%10); // 加十后取个位可同时处理当前位借位的情况。\r\n        if(t<0)t=-1;\r\n        else t=0;\r\n    }\r\n    while(!C.back())C.pop_back();\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int> A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n    {\r\n        cout<<A[i];\r\n    }\r\n}\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n    int len1=a.length(),len2=b.length();\r\n    for(int i=len1-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=len2-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    compare(A,B);\r\n    print(sub(A,B));\r\n    cout<<endl;\r\n    return 0;\r\n}\r\n// 总结：高精度减法要正确传递借位，并删除结果最高位多余的零。"
        }
      ],
      "112": [
        {
          "variant": 1,
          "path": "solutions/359/112.cpp",
          "language": "cpp",
          "code": "// 思路：把大整数按低位在前存储，先累加所有数位乘积，再统一处理进位。\r\n#include<iostream>\r\n#include<algorithm>\r\n#include<string>\r\n#include<vector>\r\n\r\nusing namespace std;\r\n\r\nstring a,b;\r\n\r\nvector<int> mul(vector<int>&A,vector<int>&B)\r\n{\r\n    vector<int>C(A.size()+B.size());\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        for(int j=0;j<B.size();j++)\r\n        {\r\n            C[i+j]+=A[i]*B[j]; // 两个数位的乘积应累加到下标 i+j 对应的结果位。\r\n        }\r\n    }\r\n    for(int i=0,t=0;i<C.size();i++)\r\n    {\r\n        t+=C[i];\r\n        C[i]=t%10;\r\n        t/=10;\r\n    }\r\n    while(C.back()==0&&C.size()>1)C.pop_back();\r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n    for(int i=A.size()-1;i>=0;i--)\r\n        cout<<A[i];\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A,B;\r\n    for(int i=a.size()-1;i>=0;i--)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    for(int i=b.size()-1;i>=0;i--)\r\n    {\r\n        B.push_back(b[i]-'0');\r\n    }\r\n\r\n    print(mul(A,B));\r\n\r\n    return 0;\r\n}\r\n// 总结：高精度乘法需要先累计卷积结果，再从低位到高位归一化进位。"
        }
      ],
      "113": [
        {
          "variant": 1,
          "path": "solutions/359/113.cpp",
          "language": "cpp",
          "code": "// 思路：按高位到低位模拟长除法，每次用前一余数拼接当前数位求商和新余数。\r\n#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\n#include<vector>\r\n\r\nusing namespace std;\r\n\r\nstring a;\r\nint b,m;\r\nvector<int>div(vector<int>&A,int b)\r\n{\r\n    vector<int>C(A.size()-to_string(b).length());\r\n    int t=0;\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        t*=10; // 把上一位余数扩大十倍后再加入当前数位。\r\n        t+=A[i];\r\n        C.push_back(t/b);\r\n        t%=b;\r\n    }\r\n    m=t;\r\n    while(C.front()==0&&C.size()>1)C.erase(C.begin()); \r\n    return C;\r\n}\r\n\r\nvoid print(vector<int>A)\r\n{\r\n\r\n    for(int i=0;i<A.size();i++)\r\n    {\r\n        cout<<A[i];\r\n    }\r\n    cout<<endl;\r\n    cout<<m<<endl;\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a>>b;\r\n    vector<int>A;\r\n    for(int i=0;i<a.size();i++)\r\n    {\r\n        A.push_back(a[i]-'0');\r\n    }\r\n    print(div(A,b));\r\n\r\n    return 0;\r\n}\r\n// 总结：高精度除以整数时要同时输出去除前导零的商和最终余数。\r\n"
        }
      ],
      "114": [
        {
          "variant": 1,
          "path": "solutions/359/114.cpp",
          "language": "cpp",
          "code": "// 思路：利用两个有序数组的单调性，让一个指针从前向后、另一个从后向前寻找目标和。\r\n#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint a[100001],b[100001];\r\nint n,m,k;\r\nint main()\r\n{\r\n    cin>>n>>m>>k;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    for(int i=0;i<m;i++)cin>>b[i];\r\n\r\n    int i=0,j=m-1,t=a[i]+b[j];\r\n\r\n    while(t!=k)\r\n    {\r\n        if(t<k)i++; // 当前和偏小时移动第一个数组指针以增大总和。\r\n        else if(t>k)j--;\r\n        t=a[i]+b[j];\r\n    }\r\n    cout<<i<<\" \"<<j;\r\n}\r\n// 总结：双指针依赖有序性，每次移动都能排除一批不可能的组合。"
        }
      ],
      "115": [
        {
          "variant": 1,
          "path": "solutions/359/115.cpp",
          "language": "cpp",
          "code": "// 思路：用双指针扫描两个数组，只有元素匹配时推进子序列指针。\r\n#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    int a[100001],b[100001];\r\n    cin>>n>>m;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    for(int i=0;i<m;i++)cin>>b[i];\r\n\r\n    int i=0,j=0;\r\n\r\n    while(j<m)\r\n    {\r\n        if(a[i]==b[j])\r\n        {\r\n            i++,j++; // 匹配成功说明子序列的当前元素已在主序列中找到。\r\n        }\r\n        else j++;\r\n    }\r\n    if(i==n)cout<<\"Yes\"<<endl;\r\n    else cout<<\"No\"<<endl;\r\n\r\n    return 0;\r\n}\r\n// 总结：判断子序列无需回退主序列，只需保持目标元素出现顺序。"
        }
      ],
      "116": [
        {
          "variant": 1,
          "path": "solutions/359/116.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n;\r\n    int a[100001];\r\n    vector<int>b;\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    vector<int>v;\r\n    int t=0;\r\n    for(int i=0;i<n;i++)//1 2 4 2 5 6 7是：5\r\n    {\r\n\r\n        if(find(v.begin(),v.end(),a[i])==v.end()){\r\n            t++;\r\n            v.push_back(a[i]);\r\n        }\r\n        else {\r\n            b.push_back(t);\r\n            t=0;\r\n            v.erase(v.begin(), find(v.begin(),v.end(),a[i])+1); \r\n            v.push_back(a[i]);\r\n            t=v.size();\r\n        }\r\n    }b.push_back(t);\r\n    sort(b.begin(),b.end());\r\n    cout<<b.back();\r\n}"
        }
      ],
      "117": [
        {
          "variant": 1,
          "path": "solutions/359/117.cpp",
          "language": "cpp",
          "code": "// 思路：用容器切换元素的存在状态，成对出现的数会相互抵消，留下未配对元素。\r\n#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    int a[100001];\r\n    vector<int>b;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n        if(find(b.begin(),b.end(),a[i])==b.end())b.push_back(a[i]); // 首次遇到元素就加入，再次遇到时将它删除。\r\n        else b.erase(find(b.begin(),b.end(),a[i]));\r\n    }\r\n\r\n    for(int i=0;i<b.size();i++)\r\n        if(b[i]!=0){\r\n            cout<<b[i];break;\r\n        }\r\n}\r\n// 总结：利用成对抵消可以寻找出现奇数次的元素，但线性查找适合数据规模较小时使用。"
        }
      ],
      "118": [
        {
          "variant": 1,
          "path": "solutions/359/118.cpp",
          "language": "cpp",
          "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint n;\nvector<int> path;\n\nvoid printPath() {\n    for (int i = 0; i < (int)path.size(); i++) {\n        if (i) cout << ' ';\n        cout << path[i];\n    }\n    cout << '\\n';\n}\n\n// 从 start 开始选择下一个数字，保证当前 path 中的数字递增\nvoid dfs(int start) {\n    for (int i = start; i <= n; i++) {\n        path.push_back(i);      // 选 i\n        printPath();            // 输出当前组合\n        dfs(i + 1);             // 继续选更大的数\n        path.pop_back();        // 回溯，不选 i\n    }\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    cin >> n;\n    dfs(1);\n\n    return 0;\n}"
        }
      ],
      "119": [
        {
          "variant": 1,
          "path": "solutions/359/119.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m;\r\nconst int N=100;\r\nint arr[N];\r\nbool st[N];\r\nvoid dfs(int u,int start)//多一个start方便判断\r\n{\r\n    if(u>m)\r\n    {\r\n        for(int i=1;i<=m;i++)\r\n        {\r\n            if(i!=1)cout<<\" \";\r\n            cout<<arr[i];\r\n        }\r\n        cout<<endl;\r\n    }\r\n    else {\r\n        for(int i=start;i<=n;i++)\r\n        {\r\n            if(!st[i])\r\n            {\r\n                arr[u]=i;\r\n                st[i]=true;\r\n                dfs(u+1,i+1);\r\n                arr[u]=0;\r\n                st[i]=false;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    dfs(1,1);\r\n    return 0;\r\n}"
        }
      ],
      "120": [
        {
          "variant": 1,
          "path": "solutions/359/120.cpp",
          "language": "cpp",
          "code": "// 思路：使用带模三关系距离的并查集维护同类与捕食关系，并统计与已有关系冲突的陈述。\r\n#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nint parent[50005], dist[50005];\r\n\r\nint find(int x)\r\n{\r\n    if(parent[x] == x) return x;\r\n    int t = parent[x];\r\n    int root = find(t);\r\n    dist[x] = (dist[x] + dist[t]) % 3; // 路径压缩时累加到根节点的关系距离并对三取模。\r\n    parent[x] = root;\r\n    return root;\r\n}\r\n\r\nint main()\r\n{\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    for(int i = 1; i <= n; i++)\r\n    {\r\n        parent[i] = i;\r\n        dist[i] = 0;\r\n    }\r\n    \r\n    int ans = 0;\r\n    \r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int d, x, y;\r\n        cin >> d >> x >> y;\r\n        \r\n        if(x > n || y > n)\r\n        {\r\n            ans++;\r\n            continue;\r\n        }\r\n        \r\n        int rx = find(x);\r\n        int ry = find(y);\r\n        \r\n        if(d == 1)\r\n        {\r\n            if(rx == ry)\r\n            {\r\n                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 0) ans++;\r\n            }\r\n            else\r\n            {\r\n                parent[rx] = ry;\r\n                dist[rx] = ((dist[y] - dist[x]) % 3 + 3) % 3;\r\n            }\r\n        }\r\n        else\r\n        {\r\n            if(rx == ry)\r\n            {\r\n                if(((dist[x] - dist[y]) % 3 + 3) % 3 != 1) ans++;\r\n            }\r\n            else\r\n            {\r\n                parent[rx] = ry;\r\n                dist[rx] = ((dist[y] - dist[x] + 1) % 3 + 3) % 3;\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：带权并查集的关键是统一关系方向，并在合并根节点时推导新的距离。"
        }
      ],
      "121": [
        {
          "variant": 1,
          "path": "solutions/359/121.cpp",
          "language": "cpp",
          "code": "// 思路：预处理前缀和，使每次区间查询都能用两个前缀值之差快速回答。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m,ss=0;\r\nint l,r;\r\nint a[100001],s[100001];\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++){\r\n        cin>>a[i];\r\n        ss+=a[i];\r\n        s[i]=ss; // s[i] 保存从第一项到第 i 项的累计和。\r\n    }\r\n    while(cin>>l&&cin>>r)\r\n    {\r\n        cout<<s[r]-s[l-1];\r\n        cout<<endl;\r\n    }\r\n\r\n}\r\n// 总结：区间 l 到 r 的和等于 s[r]-s[l-1]，预处理后每次查询只需常数时间。\r\n"
        }
      ],
      "122": [
        {
          "variant": 1,
          "path": "solutions/359/122.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n//测试样例有问题\r\nint main()\r\n{\r\n    int n,m,q;\r\n    int x1,y1,x2,y2;\r\n    int a[1001][1001],s[1001][1001],ss=0;\r\n    cin>>n>>m>>q;\r\n    for(int i=1;i<=n;i++)\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            s[i][j] = s[i-1][j] + s[i][j-1] - s[i-1][j-1] + a[i][j];\r\n            //ss+=a[i][j];\r\n            //s[i][j]=ss;\r\n        }\r\n    while(q--)\r\n    {\r\n        cin>>x1>>y1>>x2>>y2;\r\n        cout<<s[x2][y2]-s[x1-1][y2]-s[x2][y1-1]+s[x1-1][y1-1]<<endl;\r\n    }\r\n\r\n\r\n\r\n\r\n}"
        }
      ],
      "123": [
        {
          "variant": 1,
          "path": "solutions/359/123.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n// 测试样例有误\r\nint n,m,ss=0,num;\r\nint l,r;\r\nint a[100001],s[100001];\r\nint main()\r\n{\r\n    cin>>n>>m;//差分\r\n    for(int i=1;i<=n;i++){\r\n        cin>>a[i];\r\n        s[i]=a[i]-a[i-1];\r\n    }\r\n    while(m--)\r\n    {\r\n        cin>>l>>r>>num;\r\n        s[l]+=num,s[r+1]-=num;\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        a[i]=a[i-1]+s[i];\r\n        cout<<a[i]<<\" \";\r\n    }\r\n    cout<<endl;\r\n    return 0;\r\n\r\n}\r\n"
        }
      ],
      "124": [
        {
          "variant": 1,
          "path": "solutions/359/124.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n//题目出错\r\nint main()\r\n{\r\n    int n,m,q;\r\n    int a[1001][1001]={0},s[1001][1001]={0},sum=0;\r\n    cin>>n>>m>>q;\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            \r\n        }\r\n    }\r\n    int x1,y1,x2,y2,c;\r\n    while(q--)\r\n    {\r\n        cin>>x1>>y1>>x2>>y2>>c;\r\n        s[x1][y1] += c;\r\n        if(y2 + 1 <= m) s[x1][y2 + 1] -= c;\r\n        if(x2 + 1 <= n) s[x2 + 1][y1] -= c;\r\n        if(x2 + 1 <= n && y2 + 1 <= m) s[x2 + 1][y2 + 1] += c;\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n           s[i][j] += s[i-1][j] + s[i][j-1] - s[i-1][j-1];\r\n            a[i][j] += s[i][j];\r\n            cout<<a[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n}"
        }
      ],
      "125": [
        {
          "variant": 1,
          "path": "solutions/359/125.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    vector<pair<int, int>> add;  // 存储加操作 (位置, 加的值)\r\n    vector<pair<int, int>> query; // 存储查询 (l, r)\r\n    vector<int> alls;            // 所有需要离散化的坐标\r\n    \r\n    // 读入 n 次加操作\r\n    for(int i = 0; i < n; i++)\r\n    {\r\n        int x, c;\r\n        cin >> x >> c;\r\n        add.push_back({x, c});\r\n        alls.push_back(x);\r\n    }\r\n    \r\n    // 读入 m 次查询\r\n    for(int i = 0; i < m; i++)\r\n    {\r\n        int l, r;\r\n        cin >> l >> r;\r\n        query.push_back({l, r});\r\n        alls.push_back(l);\r\n        alls.push_back(r);\r\n    }\r\n    \r\n    // 排序去重\r\n    sort(alls.begin(), alls.end());\r\n    alls.erase(unique(alls.begin(), alls.end()), alls.end());\r\n    \r\n    // 离散化后的数组\r\n    vector<int> a(alls.size() + 1, 0);\r\n    \r\n    // 处理加操作\r\n    for(auto p : add)\r\n    {\r\n        int x = p.first;\r\n        int c = p.second;\r\n        int idx = lower_bound(alls.begin(), alls.end(), x) - alls.begin() + 1;\r\n        a[idx] += c;\r\n    }\r\n    \r\n    // 计算前缀和\r\n    vector<long long> prefix(alls.size() + 1, 0);\r\n    for(int i = 1; i <= alls.size(); i++)\r\n    {\r\n        prefix[i] = prefix[i-1] + a[i];\r\n    }\r\n    \r\n    // 处理查询\r\n    for(auto q : query)\r\n    {\r\n        int l = q.first;\r\n        int r = q.second;\r\n        int left = lower_bound(alls.begin(), alls.end(), l) - alls.begin() + 1;\r\n        int right = lower_bound(alls.begin(), alls.end(), r) - alls.begin() + 1;\r\n        cout << prefix[right] - prefix[left - 1] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "126": [
        {
          "variant": 1,
          "path": "solutions/359/126.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n//贪心算法\r\nstruct Node \r\n{ \r\n    int l, r; \r\n};\r\n\r\nbool cmp(Node a, Node b) \r\n{ \r\n    return a.l < b.l; \r\n}\r\n\r\nint main() {\r\n    int n;\r\n    cin >> n;\r\n    if (n == 0) { cout << 0; return 0; }\r\n    Node a[5000];\r\n    for (int i = 0; i < n; i++) cin >> a[i].l >> a[i].r;\r\n    sort(a, a + n, cmp);\r\n    int cnt = 1, curR = a[0].r;\r\n    for (int i = 1; i < n; i++) {\r\n        if (a[i].l <= curR) curR = max(curR, a[i].r);\r\n        else { cnt++; curR = a[i].r; }\r\n    }\r\n    cout << cnt;\r\n    return 0;\r\n}"
        }
      ],
      "127": [
        {
          "variant": 1,
          "path": "solutions/359/127.cpp",
          "language": "cpp",
          "code": "// 思路：按区间右端点升序排序，每次遇到未被当前点覆盖的区间就选择它的右端点。\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\ntypedef pair<int,int> PII;\r\nint main(){\r\n    ios::sync_with_stdio(false);\r\n    cin.tie(nullptr);\r\n    int n; if(!(cin>>n)) return 0;\r\n    vector<PII> segs;\r\n    for(int i=0;i<n;i++){\r\n        int l,r; cin>>l>>r;\r\n        segs.push_back({r,l});\r\n    }\r\n    sort(segs.begin(),segs.end());\r\n    int res=0, ed=-2e9;\r\n    for(auto seg:segs){\r\n        if(seg.second>ed){ // 区间左端点超过已选点时，必须新增一个点并放在当前右端点。\r\n            res++;\r\n            ed=seg.first;\r\n        }\r\n    }\r\n    cout<<res<<\"\\n\";\r\n}\r\n\r\n// 总结：区间贪心选择最靠右的可行点，可以尽量覆盖后续更多区间。\r\n"
        }
      ],
      "128": [
        {
          "variant": 1,
          "path": "solutions/359/128.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int N,x,temp=0;\r\n    vector<int>a;//容器用于存放数据\r\n    cin>>N;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>x;\r\n        a.push_back(x);\r\n    }\r\n    while(N!=1)//每次排序然后最小的两个元素相加代价最小\r\n    {\r\n        sort(a.begin(),a.end());\r\n        a[1]=a[0]+a[1];\r\n        temp+=a[1];\r\n        a.erase(a.begin());//相加完删除第一项\r\n        N--;\r\n\r\n    }\r\n    cout<<temp<<endl;\r\n\r\n}"
        }
      ],
      "129": [
        {
          "variant": 1,
          "path": "solutions/359/129.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n//排序后取中位数（下标 n/2），计算所有点到中位数的距离之和\r\nint main()\r\n{\r\n    int a[100001],l=0;//l用于计数\r\n    int N,mid;\r\n    cin>>N;\r\n    for(int i=0;i<N;i++)cin>>a[i];\r\n    sort(a,a+N);\r\n    mid=N/2;//mid为中位数\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        l+=abs(a[mid]-a[i]);//距离要取绝对值\r\n    }\r\n    cout<<l<<endl;\r\n\r\n\r\n}"
        }
      ],
      "130": [
        {
          "variant": 1,
          "path": "solutions/359/130.cpp",
          "language": "cpp",
          "code": "// 思路：用数组保存节点值和下一节点下标，模拟单链表的头插、指定位置插入和删除。\r\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main()\n{\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int m;\n    if (!(cin >> m)) return 0;\n\n    vector<int> e(m + 5), ne(m + 5);\n    int head = -1, idx = 0;\n\n    auto add_head = [&](int x) {\n        e[idx] = x;\n        ne[idx] = head;\n        head = idx++;\n    };\n\n    auto add = [&](int k, int x) {\n        e[idx] = x;\n        ne[idx] = ne[k];\n        ne[k] = idx++; // 新节点接到第 k 个节点之后，再更新该节点的后继下标。\n    };\n\n    auto del = [&](int k) {\n        if (k == -1) head = ne[head];\n        else ne[k] = ne[ne[k]];\n    };\n\n    while (m--)\n    {\n        char op;\n        cin >> op;\n        if (op == 'H')\n        {\n            int x;\n            cin >> x;\n            add_head(x);\n        }\n        else if (op == 'I')\n        {\n            int k, x;\n            cin >> k >> x;\n            add(k - 1, x);\n        }\n        else\n        {\n            int k;\n            cin >> k;\n            if (k == 0) del(-1);\n            else del(k - 1);\n        }\n    }\n\n    for (int i = head; i != -1; i = ne[i]) cout << e[i] << ' ';\n    cout << \"\\n\";\n}\r\n// 总结：数组模拟链表时输入编号通常与数组下标相差一，需要统一转换。\r\n"
        }
      ],
      "131": [
        {
          "variant": 1,
          "path": "solutions/359/131.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nconst int N = 100010; \r\nint st[N], tt = 0;    // tt 指向栈顶元素位置，0 表示空栈\r\n\r\nint main() {\r\n    int n, x;\r\n    string op;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        cin >> op;\r\n        \r\n        if (op == \"push\") {\r\n            cin >> x;\r\n            st[++tt] = x;   // 1. 先移动指针，再赋值\r\n        } \r\n        else if (op == \"pop\") {\r\n            if (tt > 0) tt--; // 2. 必须判空！否则栈顶指针变为 -1 会越界\r\n        } \r\n        else if (op == \"query\") {\r\n            if (tt > 0) cout << st[tt] << endl; // 3. 必须判空！\r\n        } \r\n        else if (op == \"empty\") {\r\n            // 4. 你的判断完全正确：tt为0则为空\r\n            if (tt == 0) cout << \"YES\" << endl;\r\n            else cout << \"NO\" << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n\r\n\r\n"
        },
        {
          "variant": 2,
          "path": "solutions/359/131-2.cpp",
          "language": "cpp",
          "code": "//不使用数组的做法\r\n\r\n\r\n#include<iostream>\r\n#include<stack>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    stack<int>a;\r\n    int n,m;\r\n    string c;\r\n    cin>>n;\r\n    while(n--)\r\n    {\r\n        cin>>c;\r\n        if(c==\"push\")\r\n        {\r\n            cin>>m;\r\n            a.push(m);\r\n        }\r\n        else if(c==\"pop\")\r\n        {\r\n            a.pop();\r\n        }\r\n        else if(c[0]=='q')\r\n        {\r\n            cout<<a.top()<<endl;\r\n        }\r\n        else if(c[0]=='e')\r\n        {\r\n            if(a.empty())\r\n            {\r\n                cout<<\"YES\"<<endl;\r\n            }\r\n            else cout<<\"NO\"<<endl;\r\n        }\r\n    }\r\n\r\n\r\n\r\n}"
        }
      ],
      "132": [
        {
          "variant": 1,
          "path": "solutions/359/132.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nconst int N = 100010; \r\nint st[N], tt = -1,hh=0;    // tt 指向栈顶元素位置为-1，hh指向头为0\r\n\r\nint main() {\r\n    int n, x;\r\n    string op;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        cin >> op;\r\n        if (op == \"push\") {\r\n            cin >> x;\r\n            st[++tt] = x;  \r\n        } \r\n        else if (op == \"pop\") {\r\n            hh++; \r\n        } \r\n        else if (op == \"query\") {\r\n            cout << st[hh] << endl;\r\n        } \r\n        else if (op == \"empty\") {\r\n            if (tt<hh) cout << \"YES\" << endl;\r\n            else cout << \"NO\" << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n"
        }
      ],
      "133": [
        {
          "variant": 1,
          "path": "solutions/359/133.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <stack>\r\n#include <string>\r\n#include <unordered_map>\r\nusing namespace std;\r\n\r\n// 判断字符是否为数字\r\nbool isDigit(char c) {\r\n    return c >= '0' && c <= '9';\r\n}\r\n\r\n// 计算两个数的结果\r\nint calc(int a, int b, char op) {\r\n    if (op == '+') return a + b;\r\n    if (op == '-') return a - b;\r\n    if (op == '*') return a * b;\r\n    if (op == '/') return a / b;  // 题目保证整除\r\n    return 0;\r\n}\r\n\r\nint main() {\r\n    string s;\r\n    cin >> s;\r\n    \r\n    stack<int> num;      // 数字栈\r\n    stack<char> op;      // 运算符栈\r\n    \r\n    // 优先级映射：数值越大优先级越高\r\n    unordered_map<char, int> priority = {\r\n        {'+', 1},\r\n        {'-', 1},\r\n        {'*', 2},\r\n        {'/', 2}\r\n    };\r\n    \r\n    for (int i = 0; i < s.size(); i++) {\r\n        char c = s[i];\r\n        \r\n        // 1. 遇到数字：读取完整数字（可能有多位）\r\n        if (isDigit(c)) {\r\n            int x = 0;\r\n            while (i < s.size() && isDigit(s[i])) {\r\n                x = x * 10 + (s[i] - '0');\r\n                i++;\r\n            }\r\n            i--;  // 回退一步，因为for循环会自增\r\n            num.push(x);\r\n        }\r\n        // 2. 遇到左括号：直接入栈\r\n        else if (c == '(') {\r\n            op.push(c);\r\n        }\r\n        // 3. 遇到右括号：一直计算到左括号\r\n        else if (c == ')') {\r\n            while (!op.empty() && op.top() != '(') {\r\n                int b = num.top(); num.pop();\r\n                int a = num.top(); num.pop();\r\n                char oper = op.top(); op.pop();\r\n                num.push(calc(a, b, oper));\r\n            }\r\n            if (!op.empty()) op.pop();  // 弹出左括号\r\n        }\r\n        // 4. 遇到运算符：处理优先级\r\n        else if (c == '+' || c == '-' || c == '*' || c == '/') {\r\n            // 当前运算符优先级 <= 栈顶运算符优先级时，先计算栈顶\r\n            while (!op.empty() && op.top() != '(' && priority[op.top()] >= priority[c]) {\r\n                int b = num.top(); num.pop();\r\n                int a = num.top(); num.pop();\r\n                char oper = op.top(); op.pop();\r\n                num.push(calc(a, b, oper));\r\n            }\r\n            op.push(c);  // 当前运算符入栈\r\n        }\r\n    }\r\n    \r\n    // 5. 处理剩余的运算符\r\n    while (!op.empty()) {\r\n        int b = num.top(); num.pop();\r\n        int a = num.top(); num.pop();\r\n        char oper = op.top(); op.pop();\r\n        num.push(calc(a, b, oper));\r\n    }\r\n    \r\n    cout << num.top() << endl;\r\n    return 0;\r\n}"
        }
      ],
      "134": [
        {
          "variant": 1,
          "path": "solutions/359/134.cpp",
          "language": "cpp",
          "code": "// 思路：维护严格递增的单调栈，为每个元素找到左侧最近且更小的值。\r\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main()\n{\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int n;\n    if (!(cin >> n)) return 0;\n\n    vector<int> st;\n    for (int i = 0; i < n; i++)\n    {\n        int x;\n        cin >> x;\n        while (!st.empty() && st.back() >= x) st.pop_back(); // 弹出所有不小于当前值的元素后，栈顶才可能是最近较小值。\n        if (i) cout << ' ';\n        cout << (st.empty() ? -1 : st.back());\n        st.push_back(x);\n    }\n    cout << \"\\n\";\n}\r\n// 总结：单调栈通过及时删除不可能成为答案的元素，把整体复杂度降为线性。\r\n"
        }
      ],
      "135": [
        {
          "variant": 1,
          "path": "solutions/359/135.cpp",
          "language": "cpp",
          "code": "// 思路：用单调队列分别维护滑动窗口中的最小值和最大值。\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\nconst int N=1000010;\r\nint a[N],q[N];\r\nint main(){\r\n    ios::sync_with_stdio(false); cin.tie(nullptr);\r\n    int n,k; if(!(cin>>n>>k)) return 0;\r\n    for(int i=0;i<n;i++) cin>>a[i];\r\n    int hh=0,tt=-1;\r\n    for(int i=0;i<n;i++){\r\n        if(hh<=tt && i-k+1>q[hh]) hh++;\r\n        while(hh<=tt && a[q[tt]]>=a[i]) tt--; // 求最小值时删除队尾所有不小于当前值的下标，保持队列递增。\r\n        q[++tt]=i;\r\n        if(i>=k-1) cout<<a[q[hh]]<<' ';\r\n    }\r\n    cout<<\"\\n\";\r\n    hh=0,tt=-1;\r\n    for(int i=0;i<n;i++){\r\n        if(hh<=tt && i-k+1>q[hh]) hh++;\r\n        while(hh<=tt && a[q[tt]]<=a[i]) tt--;\r\n        q[++tt]=i;\r\n        if(i>=k-1) cout<<a[q[hh]]<<' ';\r\n    }\r\n    cout<<\"\\n\";\r\n}\r\n// 总结：单调队列既要清理过期下标，也要维持值的单调性。"
        }
      ],
      "136": [
        {
          "variant": 1,
          "path": "solutions/359/136.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\nusing namespace std;\r\n\r\nint main() {\r\n    int n, m;\r\n    string pattern, text;\r\n    \r\n    cin >> n >> pattern;\r\n    cin >> m >> text;\r\n    \r\n    // 计算next数组\r\n    vector<int> next(n, 0);\r\n    for (int i = 1, j = 0; i < n; i++) {\r\n        while (j > 0 && pattern[i] != pattern[j]) {\r\n            j = next[j - 1];\r\n        }\r\n        if (pattern[i] == pattern[j]) {\r\n            j++;\r\n        }\r\n        next[i] = j;\r\n    }\r\n    \r\n    // KMP匹配\r\n    vector<int> positions;\r\n    for (int i = 0, j = 0; i < m; i++) {\r\n        while (j > 0 && text[i] != pattern[j]) {\r\n            j = next[j - 1];\r\n        }\r\n        if (text[i] == pattern[j]) {\r\n            j++;\r\n        }\r\n        if (j == n) {\r\n            positions.push_back(i - n + 1); // 匹配起始位置\r\n            j = next[j - 1]; // 继续寻找下一个匹配\r\n        }\r\n    }\r\n    \r\n    // 输出结果\r\n    for (int i = 0; i < positions.size(); i++) {\r\n        cout << positions[i] << (i == positions.size() - 1 ? '\\n' : ' ');\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "137": [
        {
          "variant": 1,
          "path": "solutions/359/137.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <vector>\r\n#include <string>\r\nusing namespace std;\r\n//测试点有问题\r\nconst int N = 100010;\r\nint h[N], ph[N], hp[N], sz = 0, idx = 0;\r\n\r\nvoid heap_swap(int a, int b) {\r\n    swap(ph[hp[a]], ph[hp[b]]);\r\n    swap(hp[a], hp[b]);\r\n    swap(h[a], h[b]);\r\n}\r\n\r\nvoid up(int u) {\r\n    while (u / 2 && h[u] < h[u / 2]) {\r\n        heap_swap(u, u / 2);\r\n        u /= 2;\r\n    }\r\n}\r\n\r\nvoid down(int u) {\r\n    int t = u;\r\n    if (u * 2 <= sz && h[u * 2] < h[t]) t = u * 2;\r\n    if (u * 2 + 1 <= sz && h[u * 2 + 1] < h[t]) t = u * 2 + 1;\r\n    if (t != u) {\r\n        heap_swap(u, t);\r\n        down(t);\r\n    }\r\n}\r\n\r\nint main() {\r\n    int n;\r\n    cin >> n;\r\n    \r\n    while (n--) {\r\n        string op;\r\n        cin >> op;\r\n        \r\n        if (op == \"I\") {\r\n            int x;\r\n            cin >> x;\r\n            idx++;\r\n            sz++;\r\n            ph[idx] = sz;\r\n            hp[sz] = idx;\r\n            h[sz] = x;\r\n            up(sz);\r\n        } \r\n        else if (op == \"PM\") {\r\n            cout << h[1] << endl;\r\n        } \r\n        else if (op == \"DM\") {\r\n            heap_swap(1, sz);\r\n            sz--;\r\n            down(1);\r\n        } \r\n        else if (op == \"D\") {\r\n            int k;\r\n            cin >> k;\r\n            int pos = ph[k];\r\n            heap_swap(pos, sz);\r\n            sz--;\r\n            down(pos);\r\n            up(pos);\r\n        } \r\n        else if (op == \"C\") {\r\n            int k, x;\r\n            cin >> k >> x;\r\n            int pos = ph[k];\r\n            h[pos] = x;\r\n            down(pos);\r\n            up(pos);\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "138": [
        {
          "variant": 1,
          "path": "solutions/359/138.cpp",
          "language": "cpp",
          "code": "// 思路：用并查集合并连通集合，并通过根节点是否相同回答连通性查询。\r\n#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint p[N];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]); // 递归寻找根节点的同时压缩路径，缩短后续查询链路。\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 1; i <= n; i++) p[i] = i;\r\n    \r\n    while (m--) {\r\n        char op;\r\n        int a, b;\r\n        cin >> op >> a >> b;\r\n        \r\n        if (op == 'M') {\r\n            int pa = find(a), pb = find(b);\r\n            if (pa != pb) p[pa] = pb;\r\n        } else if (op == 'Q') {\r\n            if (find(a) == find(b)) cout << \"Yes\" << endl;\r\n            else cout << \"No\" << endl;\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}\r\n// 总结：并查集适合处理只增加连接、不删除连接的动态连通问题。"
        }
      ],
      "139": [
        {
          "variant": 1,
          "path": "solutions/359/139.cpp",
          "language": "cpp",
          "code": "// 思路：在并查集连通性基础上维护每个根节点代表集合的元素数量。\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\nint p[100010], sz[100010];\r\nint findp(int x){ return p[x]==x?x:p[x]=findp(p[x]); }\r\nint main(){\r\n    ios::sync_with_stdio(false);\r\n    cin.tie(nullptr);\r\n    int n,m;\r\n    if(!(cin>>n>>m)) return 0;\r\n    for(int i=1;i<=n;i++) p[i]=i, sz[i]=1;\r\n    while(m--){\r\n        string op; int a,b;\r\n        cin >> op;\r\n        if(op==\"C\"){\r\n            cin >> a >> b;\r\n            int ra=findp(a), rb=findp(b);\r\n            if(ra!=rb){ p[ra]=rb; sz[rb]+=sz[ra]; } // 合并两个不同集合时，把被合并集合的大小累加到新根节点。\r\n        }else if(op==\"Q1\"){\r\n            cin >> a >> b;\r\n            cout << (findp(a)==findp(b) ? \"Yes\" : \"No\") << \"\\n\";\r\n        }else{\r\n            cin >> a;\r\n            cout << sz[findp(a)] << \"\\n\";\r\n        }\r\n    }\r\n}\r\n// 总结：集合大小必须存放在根节点上，查询前先找到当前根。"
        }
      ],
      "140": [
        {
          "variant": 1,
          "path": "solutions/359/140.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nconst int N = 150010;\r\nint p[N];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]);\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    int n, k;\r\n    cin >> n >> k;\r\n    \r\n    for (int i = 1; i <= 3 * n; i++) p[i] = i;\r\n    \r\n    int ans = 0;\r\n    \r\n    while (k--) {\r\n        int op, x, y;\r\n        cin >> op >> x >> y;\r\n        \r\n        if (x > n || y > n) {\r\n            ans++;\r\n            continue;\r\n        }\r\n        \r\n        if (op == 1) {\r\n            // x和y是同类\r\n            if (find(x) == find(y + n) || find(x) == find(y + 2 * n)) {\r\n                ans++;\r\n            } else {\r\n                p[find(x)] = find(y);\r\n                p[find(x + n)] = find(y + n);\r\n                p[find(x + 2 * n)] = find(y + 2 * n);\r\n            }\r\n        } else {\r\n            // x吃y\r\n            if (x == y || find(x) == find(y) || find(x) == find(y + 2 * n)) {\r\n                ans++;\r\n            } else {\r\n                p[find(x)] = find(y + n);\r\n                p[find(x + n)] = find(y + 2 * n);\r\n                p[find(x + 2 * n)] = find(y);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "141": [
        {
          "variant": 1,
          "path": "solutions/359/141.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cstdio>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 10;\r\n\r\nint n;\r\nint path[N];       // 从0到n-1共n个位置 存放一个排列\r\nbool state[N];     // 存放每个数字的使用状态 true表示使用了 false表示没使用过\r\n\r\nvoid dfs(int u)\r\n{\r\n    if (u == n)    // 一个排列填充完成\r\n    {\r\n        for (int i = 0; i < n; i ++) printf(\"%d \",path[i]);  // 注意格式 别忘了每两个数字间用空格隔开\r\n        puts(\"\");  // 相当于输出一个回车\r\n        return;\r\n    }\r\n\r\n    for (int i = 1; i <= n; i ++)\r\n    {\r\n        if (!state[i])\r\n        {\r\n            path[u] = i;       // 把 i 填入数字排列的位置上\r\n            state[i] = true;   // 表示该数字用过了 不能再用\r\n            dfs(u + 1);        // 这个位置的数填好 递归到右面一个位置\r\n            state[i] = false;  // 恢复现场 该数字后续可用\r\n        }\r\n    }\r\n    // for 循环全部结束了 dfs(u)才全部完成 回溯\r\n\r\n    return;        // 可写可不写\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\", &n);\r\n\r\n    dfs(0);    // 在path[0]处开始填数\r\n\r\n    return 0;\r\n}\r\n\r\n//作者：EvanMe\r\n//链接：https://www.acwing.com/file_system/file/content/whole/index/content/3758356/\r\n//来源：AcWing\r\n//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "142": [
        {
          "variant": 1,
          "path": "solutions/359/142.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\nusing namespace std;\r\n\r\nconst int N = 20;\r\nint n;\r\nchar board[N][N];\r\nbool col[N], dg[N], udg[N]; // 列、主对角线、副对角线\r\n\r\n// 逐行放置皇后，r为当前行\r\nvoid dfs(int r) {\r\n    if (r == n) {\r\n        // 输出解\r\n        for (int i = 0; i < n; i++) {\r\n            for (int j = 0; j < n; j++) {\r\n                cout << board[i][j];\r\n            }\r\n            cout << '\\n';\r\n        }\r\n        cout << '\\n'; // 解之间空行\r\n        return;\r\n    }\r\n\r\n    for (int c = 0; c < n; c++) {\r\n        // r+c相同→同一主对角线，r-c+n相同→同一副对角线\r\n        if (!col[c] && !dg[r + c] && !udg[r - c + n]) {\r\n            col[c] = dg[r + c] = udg[r - c + n] = true;\r\n            board[r][c] = 'Q';\r\n            dfs(r + 1);\r\n            board[r][c] = '.';\r\n            col[c] = dg[r + c] = udg[r - c + n] = false;\r\n        }\r\n    }\r\n}\r\n\r\nint main() {\r\n    cin >> n;\r\n    // 初始化棋盘\r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < n; j++) {\r\n            board[i][j] = '.';\r\n        }\r\n    }\r\n    dfs(0);\r\n    return 0;\r\n}\r\n"
        }
      ],
      "143": [
        {
          "variant": 1,
          "path": "solutions/359/143.cpp",
          "language": "cpp",
          "code": "// 思路：从左上角开始广度优先搜索，每次扩展四个方向并记录首次到达的最短距离。\r\n#include <iostream>\r\n#include <queue>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint g[N][N], dist[N][N];\r\nint n, m;\r\nint dx[4] = {-1, 0, 1, 0};\r\nint dy[4] = {0, 1, 0, -1};\r\n\r\nint bfs() {\r\n    queue<pair<int, int>> q;\r\n    q.push({0, 0});\r\n    dist[0][0] = 0;\r\n    \r\n    while (!q.empty()) {\r\n        auto t = q.front();\r\n        q.pop();\r\n        \r\n        int x = t.first, y = t.second;\r\n        \r\n        if (x == n - 1 && y == m - 1) {\r\n            return dist[x][y];\r\n        }\r\n        \r\n        for (int i = 0; i < 4; i++) {\r\n            int nx = x + dx[i];\r\n            int ny = y + dy[i];\r\n            \r\n            if (nx >= 0 && nx < n && ny >= 0 && ny < m && g[nx][ny] == 0 && dist[nx][ny] == -1) {\r\n                dist[nx][ny] = dist[x][y] + 1; // 相邻可走位置的距离等于当前距离加一。\r\n                q.push({nx, ny});\r\n            }\r\n        }\r\n    }\r\n    \r\n    return -1;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < m; j++) {\r\n            cin >> g[i][j];\r\n            dist[i][j] = -1;\r\n        }\r\n    }\r\n    \r\n    cout << bfs() << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：无权网格最短路使用 BFS，首次访问即得到最短距离。"
        }
      ],
      "144": [
        {
          "variant": 1,
          "path": "solutions/359/144.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <queue>\r\n#include <unordered_map>\r\n\r\nusing namespace std;\r\n\r\nint bfs(string start)\r\n{\r\n    //定义目标状态\r\n    string end = \"12345678x\";\r\n    //定义队列和dist数组\r\n    queue<string> q;\r\n    unordered_map<string, int> d;\r\n    //初始化队列和dist数组\r\n    q.push(start);\r\n    d[start] = 0;\r\n    //转移方式\r\n    int dx[4] = {1, -1, 0, 0}, dy[4] = {0, 0, 1, -1};\r\n\r\n    while(q.size())\r\n    {\r\n        auto t = q.front();\r\n        q.pop();\r\n        //记录当前状态的距离，如果是最终状态则返回距离\r\n        int distance = d[t];\r\n        if(t == end) return distance;\r\n        //查询x在字符串中的下标，然后转换为在矩阵中的坐标\r\n        int k = t.find('x');\r\n        int x = k / 3, y = k % 3;\r\n\r\n        for(int i = 0; i < 4; i++)\r\n        {\r\n            //求转移后x的坐标\r\n            int a = x + dx[i], b = y + dy[i];\r\n            //当前坐标没有越界\r\n            if(a >= 0 && a < 3 && b >= 0 && b < 3)\r\n            {\r\n                //转移x\r\n                swap(t[k], t[a * 3 + b]);\r\n                //如果当前状态是第一次遍历，记录距离，入队\r\n                if(!d.count(t))\r\n                {\r\n                    d[t] = distance + 1;\r\n                    q.push(t);\r\n                }\r\n                //还原状态，为下一种转换情况做准备\r\n                swap(t[k], t[a * 3 + b]);\r\n            }\r\n        }\r\n    }\r\n    //无法转换到目标状态，返回-1\r\n    return -1;\r\n}\r\n\r\nint main()\r\n{\r\n    string c, start;\r\n    //输入起始状态\r\n    for(int i = 0; i < 9; i++)\r\n    {\r\n        cin >> c;\r\n        start += c;\r\n    }\r\n\r\n    cout << bfs(start) << endl;\r\n\r\n    return 0;\r\n}\r\n"
        }
      ],
      "145": [
        {
          "variant": 1,
          "path": "solutions/359/145.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <cstring>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 1e5 + 10; //数据范围是10的5次方\r\nconst int M = 2 * N; //以有向图的格式存储无向图，所以每个节点至多对应2n-2条边\r\n\r\nint h[N]; //邻接表存储树，有n个节点，所以需要n个队列头节点\r\nint e[M]; //存储元素\r\nint ne[M]; //存储列表的next值\r\nint idx; //单链表指针\r\nint n; //题目所给的输入，n个节点\r\nint ans = N; //表示重心的所有的子树中，最大的子树的结点数目\r\n\r\nbool st[N]; //记录节点是否被访问过，访问过则标记为true\r\n\r\n//a所对应的单链表中插入b  a作为根 \r\nvoid add(int a, int b) {\r\n    e[idx] = b, ne[idx] = h[a], h[a] = idx++;\r\n}\r\n\r\n// dfs 框架\r\n/*\r\nvoid dfs(int u){\r\n    st[u]=true; // 标记一下，记录为已经被搜索过了，下面进行搜索过程\r\n    for(int i=h[u];i!=-1;i=ne[i]){\r\n        int j=e[i];\r\n        if(!st[j]) {\r\n            dfs(j);\r\n        }\r\n    }\r\n}\r\n*/\r\n\r\n//返回以u为根的子树中节点的个数，包括u节点\r\nint dfs(int u) {\r\n    int res = 0; //存储 删掉某个节点之后，最大的连通子图节点数\r\n    st[u] = true; //标记访问过u节点\r\n    int sum = 1; //存储 以u为根的树 的节点数, 包括u，如图中的4号节点\r\n\r\n    //访问u的每个子节点\r\n    for (int i = h[u]; i != -1; i = ne[i]) {\r\n        int j = e[i];\r\n        //因为每个节点的编号都是不一样的，所以 用编号为下标 来标记是否被访问过\r\n        if (!st[j]) {\r\n            int s = dfs(j);  // u节点的单棵子树节点数 如图中的size值\r\n            res = max(res, s); // 记录最大联通子图的节点数\r\n            sum += s; //以j为根的树 的节点数\r\n        }\r\n    }\r\n\r\n    //n-sum 如图中的n-size值，不包括根节点4；\r\n    res = max(res, n - sum); // 选择u节点为重心，最大的 连通子图节点数\r\n    ans = min(res, ans); //遍历过的假设重心中，最小的最大联通子图的 节点数\r\n    return sum;\r\n}\r\n\r\nint main() {\r\n    memset(h, -1, sizeof h); //初始化h数组 -1表示尾节点\r\n    cin >> n; //表示树的结点数\r\n\r\n    // 题目接下来会输入，n-1行数据，\r\n    // 树中是不存在环的，对于有n个节点的树，必定是n-1条边\r\n    for (int i = 0; i < n - 1; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        add(a, b), add(b, a); //无向图\r\n    }\r\n\r\n    dfs(1); //可以任意选定一个节点开始 u<=n\r\n\r\n    cout << ans << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n// 作者：松鼠爱葡萄\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/542619/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "146": [
        {
          "variant": 1,
          "path": "solutions/359/146.cpp",
          "language": "cpp",
          "code": "#include<bits/stdc++.h>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\n\r\nint n, m;\r\nint h[N], e[N], ne[N], idx;\r\nint d[N];\r\n\r\nvoid add(int a, int b){\r\n    e[idx] = b, ne[idx] = h[a], h[a] = idx ++ ;\r\n}\r\n\r\nint bfs(){//宽搜遍历\r\n    memset(d, -1, sizeof d);\r\n\r\n    queue<int> q;\r\n    d[1] = 0;//第一格需要0步\r\n    q.push(1);//放入队列\r\n\r\n    while (q.size()){//循环遍历整个队列\r\n        int t = q.front();\r\n        q.pop();\r\n\r\n        for (int i = h[t]; i != -1; i = ne[i]){\r\n            int j = e[i];//获取当前值\r\n            if (d[j] == -1){//未走过\r\n                d[j] = d[t] + 1;//等于上一个点加1步\r\n                q.push(j);//放入队列\r\n            }\r\n        }\r\n    }\r\n\r\n    return d[n];//返回n号点所需的步数\r\n}\r\n\r\nint main(){\r\n    scanf(\"%d%d\", &n, &m);\r\n    memset(h, -1, sizeof h);\r\n\r\n    for (int i = 0; i < m; i ++ ){\r\n        int a, b;\r\n        scanf(\"%d%d\", &a, &b);\r\n        add(a, b);//单项连接(有向图)\r\n    }\r\n\r\n    cout << bfs() << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n// 作者：Lucky_Three\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/9655978/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "147": [
        {
          "variant": 1,
          "path": "solutions/359/147.cpp",
          "language": "cpp",
          "code": "// 思路：统计每个节点入度，把所有零入度节点入队并依次删除其出边得到拓扑序。\r\n#include <iostream>\r\n#include <vector>\r\n#include <queue>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nvector<int> g[N];\r\nint d[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        g[a].push_back(b);\r\n        d[b]++;\r\n    }\r\n    \r\n    queue<int> q;\r\n    for (int i = 1; i <= n; i++) {\r\n        if (d[i] == 0) {\r\n            q.push(i);\r\n        }\r\n    }\r\n    \r\n    vector<int> ans;\r\n    while (!q.empty()) {\r\n        int u = q.front();\r\n        q.pop();\r\n        ans.push_back(u);\r\n        \r\n        for (int i = 0; i < g[u].size(); i++) {\r\n            int v = g[u][i];\r\n            d[v]--;\r\n            if (d[v] == 0) { // 邻接点入度减到零时，说明它的所有前驱都已处理，可以入队。\r\n                q.push(v);\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (ans.size() != n) {\r\n        cout << -1 << endl;\r\n    } else {\r\n        for (int i = 0; i < ans.size(); i++) {\r\n            cout << ans[i] << (i == ans.size() - 1 ? '\\n' : ' ');\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}\r\n// 总结：拓扑序长度不足节点总数说明图中存在有向环。"
        }
      ],
      "148": [
        {
          "variant": 1,
          "path": "solutions/359/148.cpp",
          "language": "cpp",
          "code": "#include <cstring>\r\n#include <iostream>\r\n#include <algorithm>\r\n#include <queue>//堆的头文件\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int, int> PII;//堆里存储距离和节点编号\r\n\r\nconst int N = 1e6 + 10;\r\n\r\nint n, m;//节点数量和边数\r\nint h[N], w[N], e[N], ne[N], idx;//邻接表存储图\r\nint dist[N];//存储距离\r\nbool st[N];//存储状态\r\n\r\nvoid add(int a, int b, int c)\r\n{\r\n    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++ ;\r\n}\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist, 0x3f, sizeof dist);//距离初始化为无穷大\r\n    dist[1] = 0;\r\n    priority_queue<PII, vector<PII>, greater<PII>> heap;//小根堆\r\n    heap.push({0, 1});//插入距离和节点编号\r\n\r\n    while (heap.size())\r\n    {\r\n        auto t = heap.top();//取距离源点最近的点\r\n        heap.pop();\r\n\r\n        int ver = t.second, distance = t.first;//ver:节点编号，distance:源点距离ver 的距离\r\n\r\n        if (st[ver]) continue;//如果距离已经确定，则跳过该点\r\n        st[ver] = true;\r\n\r\n        for (int i = h[ver]; i != -1; i = ne[i])//更新ver所指向的节点距离\r\n        {\r\n            int j = e[i];\r\n            if (dist[j] > dist[ver] + w[i])\r\n            {\r\n                dist[j] = dist[ver] + w[i];\r\n                heap.push({dist[j], j});//距离变小，则入堆\r\n            }\r\n        }\r\n    }\r\n\r\n    if (dist[n] == 0x3f3f3f3f) return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &m);\r\n\r\n    memset(h, -1, sizeof h);\r\n    while (m -- )\r\n    {\r\n        int a, b, c;\r\n        scanf(\"%d%d%d\", &a, &b, &c);\r\n        add(a, b, c);\r\n    }\r\n\r\n    cout << dijkstra() << endl;\r\n\r\n    return 0;\r\n}\r\n\r\n//参考yxc\r\n\r\n// 作者：Hasity\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/1906644/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "149": [
        {
          "variant": 1,
          "path": "solutions/359/149.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<cstring>\r\n#include<cstdio>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 510, M = 100010;\r\n\r\nint g[N][N], dist[N];\r\nbool visited[N];\r\n\r\nint n, m;\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist, 0x3f, sizeof(dist));\r\n    dist[1] = 0;\r\n    for(int i = 1; i <= n; i++)\r\n    {\r\n        int t = -1;\r\n        for(int j = 1; j <= n; j++)\r\n        {\r\n            if(!visited[j] && (t == -1 || dist[j] < dist[t]))\r\n                t = j;\r\n        }\r\n        visited[t] = true;\r\n        for(int j = 1; j <= n; j++)\r\n            dist[j] = min(dist[j], dist[t] + g[t][j]);\r\n    }\r\n    if(dist[n] == 0x3f3f3f3f) return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\", &n, &m);\r\n\r\n    memset(g, 0x3f, sizeof(g));\r\n    while (m--)\r\n    {\r\n        int x, y, c;\r\n        scanf(\"%d%d%d\", &x, &y, &c);\r\n        g[x][y] = min(g[x][y], c);\r\n    }\r\n    cout << dijkstra() << endl;\r\n    return 0;\r\n}\r\n\r\n// 作者：optimjie\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/154643/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "150": [
        {
          "variant": 1,
          "path": "solutions/359/150.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint h[N], e[N], w[N], ne[N], idx;//邻接表，存储图\r\nint st[N];//标记顶点是不是在队列中\r\nint dist[N];//保存最短路径的值\r\nint q[N], hh, tt = -1;//队列\r\n\r\nvoid add(int a, int b, int c){//图中添加边和边的端点\r\n    e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx++;\r\n}\r\n\r\nvoid spfa(){\r\n    q[++tt] = 1;//从1号顶点开始松弛，1号顶点入队\r\n    dist[1] = 0;//1号到1号的距离为 0\r\n    st[1] = 1;//1号顶点在队列中\r\n    while(tt >= hh){//不断进行松弛\r\n        int a = q[hh++];//取对头记作a，进行松弛\r\n        st[a] = 0;//取完队头后，a不在队列中了\r\n        for(int i = h[a]; i != -1; i = ne[i])//遍历所有和a相连的点\r\n        {\r\n            int b = e[i], c = w[i];//获得和a相连的点和边\r\n            if(dist[b] > dist[a] + c){//如果可以距离变得更短，则更新距离\r\n\r\n                dist[b] = dist[a] + c;//更新距离\r\n\r\n                if(!st[b]){//如果没在队列中\r\n                    q[++tt] = b;//入队\r\n                    st[b] = 1;//打标记\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nint main(){\r\n    memset(h, -1, sizeof h);//初始化邻接表\r\n    memset(dist, 0x3f, sizeof dist);//初始化距离\r\n    int n, m;//保存点的数量和边的数量\r\n    cin >> n >> m;\r\n    for(int i = 0; i < m; i++){//读入每条边和边的端点\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        add(a, b, w);//加入到邻接表\r\n    }\r\n    spfa();\r\n    if(dist[n] == 0x3f3f3f3f )//如果到n点的距离是无穷，则不能到达 \r\n        cout << \"impossible\";\r\n    else cout << dist[n];//否则能到达，输出距离\r\n    return 0;\r\n}\r\n\r\n// 作者：Hasity\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/4486341/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "151": [
        {
          "variant": 1,
          "path": "solutions/359/151.cpp",
          "language": "cpp",
          "code": "// 思路：使用 Floyd 动态规划枚举中间点，预处理任意两点间的最短距离。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 210;\r\nconst int INF = 0x3f3f3f3f;\r\nint d[N][N];\r\nint n, m, q;\r\n\r\nint main() {\r\n    cin >> n >> m >> q;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= n; j++) {\r\n            if (i == j) d[i][j] = 0;\r\n            else d[i][j] = INF;\r\n        }\r\n    }\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        d[a][b] = min(d[a][b], w);\r\n    }\r\n    \r\n    for (int k = 1; k <= n; k++) {\r\n        for (int i = 1; i <= n; i++) {\r\n            for (int j = 1; j <= n; j++) {\r\n                if (d[i][k] != INF && d[k][j] != INF) {\r\n                    d[i][j] = min(d[i][j], d[i][k] + d[k][j]); // 比较原路径与经过 k 的路径，保留距离更小者。\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    while (q--) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        if (d[a][b] == INF) cout << \"impossible\" << endl;\r\n        else cout << d[a][b] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}\r\n// 总结：Floyd 的中间点必须放在最外层循环，才能保证状态含义正确。"
        }
      ],
      "152": [
        {
          "variant": 1,
          "path": "solutions/359/152.cpp",
          "language": "cpp",
          "code": "// 思路：Prim 算法每轮选择距当前生成树最近的未选节点，并用它更新其他节点距离。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 510;\r\nconst int INF = 0x3f3f3f3f;\r\nint g[N][N];\r\nint dist[N];\r\nbool st[N];\r\nint n, m;\r\n\r\nint prim() {\r\n    memset(dist, 0x3f, sizeof(dist));\r\n    int res = 0;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int t = -1;\r\n        for (int j = 1; j <= n; j++) {\r\n            if (!st[j] && (t == -1 || dist[t] > dist[j])) {\r\n                t = j;\r\n            }\r\n        }\r\n        \r\n        if (i && dist[t] == INF) return -1;\r\n        \r\n        if (i) res += dist[t]; // 除起点外，每次选中节点时把连接它的最小边权加入答案。\r\n        st[t] = true;\r\n        \r\n        for (int j = 1; j <= n; j++) {\r\n            if (dist[j] > g[t][j]) {\r\n                dist[j] = g[t][j];\r\n            }\r\n        }\r\n    }\r\n    \r\n    return res;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    memset(g, 0x3f, sizeof(g));\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        g[a][b] = g[b][a] = min(g[a][b], w);\r\n    }\r\n    \r\n    int ans = prim();\r\n    \r\n    if (ans == -1) cout << \"impossible\" << endl;\r\n    else cout << ans << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：若某轮最小距离仍为无穷大，说明图不连通，无法形成生成树。"
        }
      ],
      "153": [
        {
          "variant": 1,
          "path": "solutions/359/153.cpp",
          "language": "cpp",
          "code": "// 思路：Kruskal 算法按边权升序扫描，用并查集选择不会形成环的边。\r\n#include <iostream>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nconst int M = 200010;\r\nint p[N];\r\nint n, m;\r\n\r\nstruct Edge {\r\n    int a, b, w;\r\n    bool operator< (const Edge &W) const {\r\n        return w < W.w;\r\n    }\r\n} edges[M];\r\n\r\nint find(int x) {\r\n    if (p[x] != x) p[x] = find(p[x]);\r\n    return p[x];\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 1; i <= n; i++) p[i] = i;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b, w;\r\n        cin >> a >> b >> w;\r\n        edges[i] = {a, b, w};\r\n    }\r\n    \r\n    sort(edges, edges + m);\r\n    \r\n    int res = 0, cnt = 0;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a = edges[i].a, b = edges[i].b, w = edges[i].w;\r\n        int pa = find(a), pb = find(b);\r\n        \r\n        if (pa != pb) { // 两个端点属于不同集合时才能安全加入当前生成树。\r\n            p[pa] = pb;\r\n            res += w;\r\n            cnt++;\r\n        }\r\n    }\r\n    \r\n    if (cnt < n - 1) cout << \"impossible\" << endl;\r\n    else cout << res << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：最小生成树最终应恰好选中 n-1 条边，否则原图不连通。"
        }
      ],
      "154": [
        {
          "variant": 1,
          "path": "solutions/359/154.cpp",
          "language": "cpp",
          "code": "// 思路：对每个连通块进行双色 DFS，相邻节点染相反颜色并检查冲突。\r\n#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nvector<int> g[N];\r\nint color[N];\r\nint n, m;\r\n\r\nbool dfs(int u, int c) {\r\n    color[u] = c;\r\n    \r\n    for (int i = 0; i < g[u].size(); i++) {\r\n        int v = g[u][i];\r\n        if (!color[v]) {\r\n            if (!dfs(v, 3 - c)) return false; // 未染色邻点递归使用另一种颜色，出现冲突则立即失败。\r\n        } else if (color[v] == c) {\r\n            return false;\r\n        }\r\n    }\r\n    \r\n    return true;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        g[a].push_back(b);\r\n        g[b].push_back(a);\r\n    }\r\n    \r\n    bool flag = true;\r\n    for (int i = 1; i <= n; i++) {\r\n        if (!color[i]) {\r\n            if (!dfs(i, 1)) {\r\n                flag = false;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (flag) cout << \"Yes\" << endl;\r\n    else cout << \"No\" << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：图是二分图当且仅当每条边连接的两个节点颜色不同。"
        }
      ],
      "155": [
        {
          "variant": 1,
          "path": "solutions/359/155.cpp",
          "language": "cpp",
          "code": "// 思路：使用一维动态规划解决零一背包，容量从大到小枚举以保证每件物品只选一次。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w;\r\n        cin >> v >> w;\r\n        for (int j = m; j >= v; j--) {\r\n            f[j] = max(f[j], f[j - v] + w); // 比较不选当前物品与选入当前物品后的最大价值。\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：零一背包必须倒序枚举容量，防止同一轮重复使用当前物品。"
        }
      ],
      "156": [
        {
          "variant": 1,
          "path": "solutions/359/156.cpp",
          "language": "cpp",
          "code": "// 思路：使用一维动态规划解决完全背包，容量从小到大枚举以允许物品重复选择。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w;\r\n        cin >> v >> w;\r\n        for (int j = v; j <= m; j++) {\r\n            f[j] = max(f[j], f[j - v] + w); // 当前状态可以继续使用本轮物品更新后的较小容量状态。\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：完全背包与零一背包转移相同，区别在于容量枚举方向。"
        }
      ],
      "157": [
        {
          "variant": 1,
          "path": "solutions/359/157.cpp",
          "language": "cpp",
          "code": "// 思路：从数字三角形倒数第二层向上合并，每个位置选择下方两个方向中的较大值。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 510;\r\nint f[N][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= i; j++) {\r\n            cin >> f[i][j];\r\n        }\r\n    }\r\n    \r\n    for (int i = n - 1; i >= 1; i--) {\r\n        for (int j = 1; j <= i; j++) {\r\n            f[i][j] += max(f[i + 1][j], f[i + 1][j + 1]); // 当前位置累加下一层两条可选路径中的最大路径和。\r\n        }\r\n    }\r\n    \r\n    cout << f[1][1] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：自底向上原地 DP 可以把最终答案汇总到三角形顶点。"
        }
      ],
      "158": [
        {
          "variant": 1,
          "path": "solutions/359/158.cpp",
          "language": "cpp",
          "code": "// 思路：维护不同长度递增子序列的最小末尾值，用二分查找更新当前位置。\r\n#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint a[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> a[i];\r\n    }\r\n    \r\n    vector<int> tails;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        auto it = lower_bound(tails.begin(), tails.end(), a[i]); // 找到第一个不小于当前数的位置，用更小末尾值替换它。\r\n        if (it == tails.end()) {\r\n            tails.push_back(a[i]);\r\n        } else {\r\n            *it = a[i];\r\n        }\r\n    }\r\n    \r\n    cout << tails.size() << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：tails 的长度等于最长严格递增子序列长度，但其中元素不一定构成原序列答案。"
        }
      ],
      "159": [
        {
          "variant": 1,
          "path": "solutions/359/159.cpp",
          "language": "cpp",
          "code": "// 思路：用二维动态规划比较两个字符串前缀，求最长公共子序列长度。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint f[N][N];\r\nchar a[N], b[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    cin >> a + 1;\r\n    cin >> b + 1;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = 1; j <= m; j++) {\r\n            if (a[i] == b[j]) {\r\n                f[i][j] = f[i - 1][j - 1] + 1; // 当前字符相同时，答案由两个前缀都去掉末字符后再加一。\r\n            } else {\r\n                f[i][j] = max(f[i - 1][j], f[i][j - 1]);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[n][m] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：字符不同时需要比较舍弃任一字符串末字符的两种状态。"
        }
      ],
      "160": [
        {
          "variant": 1,
          "path": "solutions/359/160.cpp",
          "language": "cpp",
          "code": "// 思路：按区间长度枚举石子段，并尝试每个分割点计算合并该区间的最小代价。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 310;\r\nint a[N], s[N];\r\nint f[N][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        cin >> a[i];\r\n        s[i] = s[i - 1] + a[i];\r\n    }\r\n    \r\n    memset(f, 0x3f, sizeof(f));\r\n    for (int i = 1; i <= n; i++) f[i][i] = 0;\r\n    \r\n    for (int len = 2; len <= n; len++) {\r\n        for (int i = 1; i + len - 1 <= n; i++) {\r\n            int j = i + len - 1;\r\n            for (int k = i; k < j; k++) {\r\n                f[i][j] = min(f[i][j], f[i][k] + f[k + 1][j] + s[j] - s[i - 1]); // 左右子区间代价加上当前区间总重量得到一次完整转移。\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[1][n] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：区间 DP 通常先枚举长度，再枚举左端点和分割点。"
        }
      ],
      "161": [
        {
          "variant": 1,
          "path": "solutions/359/161.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cmath>\r\n#include <string>\r\nusing namespace std;\r\nconst int N = 1009;\r\nchar a[N], b[N];\r\nint dp[2][N]; \r\nint main(){\r\n    ios::sync_with_stdio(0); cin.tie(0);\r\n    int n, m;\r\n    cin>>n>>a+1>>m>>b+1;\r\n    //初始化\r\n    for(int i = 0; i <= m; i++) dp[0][i] = i;\r\n    for(int i = 1; i <= n; i++){\r\n    //两行dp循环使用\r\n        int now = (i & 1), old = (i - 1 & 1);\r\n        dp[now][0] = i;//初始化\r\n        for(int j = 1; j <= m; j++){\r\n            if(a[i] == b[j]) dp[now][j] = dp[old][j-1];\r\n            else dp[now][j] = min(min(dp[old][j], dp[now][j-1]), dp[old][j-1]) + 1;\r\n        }\r\n    }\r\n    cout<<dp[n & 1][m];\r\n    return 0;\r\n}\r\n\r\n// 作者：stary_sky\r\n// 链接：https://www.acwing.com/file_system/file/content/whole/index/content/11245790/\r\n// 来源：AcWing\r\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"
        }
      ],
      "162": [
        {
          "variant": 1,
          "path": "solutions/359/162.cpp",
          "language": "cpp",
          "code": "// 思路：从每个格子记忆化搜索所有更低的相邻格，求最长下降路径。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 310;\r\nint g[N][N];\r\nint f[N][N];\r\nint r, c;\r\nint dx[4] = {-1, 0, 1, 0};\r\nint dy[4] = {0, 1, 0, -1};\r\n\r\nint dfs(int x, int y) {\r\n    if (f[x][y] != -1) return f[x][y];\r\n    \r\n    f[x][y] = 1;\r\n    for (int i = 0; i < 4; i++) {\r\n        int nx = x + dx[i];\r\n        int ny = y + dy[i];\r\n        if (nx >= 1 && nx <= r && ny >= 1 && ny <= c && g[nx][ny] < g[x][y]) {\r\n            f[x][y] = max(f[x][y], dfs(nx, ny) + 1); // 移动到更低位置后，把后续最长路径加一更新当前答案。\r\n        }\r\n    }\r\n    \r\n    return f[x][y];\r\n}\r\n\r\nint main() {\r\n    cin >> r >> c;\r\n    \r\n    for (int i = 1; i <= r; i++) {\r\n        for (int j = 1; j <= c; j++) {\r\n            cin >> g[i][j];\r\n        }\r\n    }\r\n    \r\n    memset(f, -1, sizeof(f));\r\n    \r\n    int ans = 0;\r\n    for (int i = 1; i <= r; i++) {\r\n        for (int j = 1; j <= c; j++) {\r\n            ans = max(ans, dfs(i, j));\r\n        }\r\n    }\r\n    \r\n    cout << ans << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：记忆化搜索可避免同一格子的最长路径被重复计算。"
        }
      ],
      "163": [
        {
          "variant": 1,
          "path": "solutions/359/163.cpp",
          "language": "cpp",
          "code": "// 思路：把每种限量物品按二进制拆成若干组，再转化为零一背包求解。\r\n#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20010;\r\nint f[N];\r\nint n, m;\r\n\r\nstruct Item {\r\n    int v, w;\r\n};\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    vector<Item> items;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w, s;\r\n        cin >> v >> w >> s;\r\n        \r\n        for (int k = 1; k <= s; k *= 2) {\r\n            s -= k;\r\n            items.push_back({v * k, w * k}); // 数量为 k 的一组物品被视为体积和价值同时放大的单件物品。\r\n        }\r\n        if (s > 0) {\r\n            items.push_back({v * s, w * s});\r\n        }\r\n    }\r\n    \r\n    for (int i = 0; i < items.size(); i++) {\r\n        for (int j = m; j >= items[i].v; j--) {\r\n            f[j] = max(f[j], f[j - items[i].v] + items[i].w);\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：二进制拆分能用对数个组表示任意选取数量，显著减少多重背包转移次数。"
        }
      ],
      "164": [
        {
          "variant": 1,
          "path": "solutions/359/164.cpp",
          "language": "cpp",
          "code": "// 思路：把每种物品数量按一、二、四等组拆分，并逐组执行零一背包更新。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20010;\r\nint f[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int v, w, s;\r\n        cin >> v >> w >> s;\r\n        \r\n        int k = 1;\r\n        while (k <= s) {\r\n            for (int j = m; j >= k * v; j--) {\r\n                f[j] = max(f[j], f[j - k * v] + k * w); // 当前二进制组作为一件物品倒序更新容量。\r\n            }\r\n            s -= k;\r\n            k *= 2;\r\n        }\r\n        if (s > 0) {\r\n            for (int j = m; j >= s * v; j--) {\r\n                f[j] = max(f[j], f[j - s * v] + s * w);\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：拆分后的每组只能选一次，因此容量仍需从大到小枚举。"
        }
      ],
      "165": [
        {
          "variant": 1,
          "path": "solutions/359/165.cpp",
          "language": "cpp",
          "code": "// 思路：按组处理物品，每组只能选择其中一件，并用倒序容量避免同组重复选择。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 110;\r\nint f[N];\r\nint v[N], w[N];\r\nint n, m;\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        int s;\r\n        cin >> s;\r\n        for (int j = 0; j < s; j++) {\r\n            cin >> v[j] >> w[j];\r\n        }\r\n        for (int j = m; j >= 0; j--) {\r\n            for (int k = 0; k < s; k++) {\r\n                if (j >= v[k]) {\r\n                    f[j] = max(f[j], f[j - v[k]] + w[k]); // 对当前组的每个候选物品尝试更新容量 j 的最大价值。\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[m] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：分组背包必须先固定容量再枚举组内物品，保证每组至多选一件。"
        }
      ],
      "166": [
        {
          "variant": 1,
          "path": "solutions/359/166.cpp",
          "language": "cpp",
          "code": "// 思路：用二分维护各长度递增子序列的最小末尾值，求最长递增子序列长度。\r\n#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 100010;\r\nint a[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> a[i];\r\n    }\r\n    \r\n    vector<int> tails;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        auto it = lower_bound(tails.begin(), tails.end(), a[i]); // 定位第一个不小于当前值的位置进行替换或扩展。\r\n        if (it == tails.end()) {\r\n            tails.push_back(a[i]);\r\n        } else {\r\n            *it = a[i];\r\n        }\r\n    }\r\n    \r\n    cout << tails.size() << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：较小的序列末尾为后续元素留下更多增长空间。"
        }
      ],
      "167": [
        {
          "variant": 1,
          "path": "solutions/359/167.cpp",
          "language": "cpp",
          "code": "// 思路：把每个正整数看作可无限使用的物品，用完全背包统计和为 n 的划分方案数。\r\n#include <iostream>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nconst int MOD = 1e9 + 7;\r\nint f[N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    f[0] = 1;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        for (int j = i; j <= n; j++) {\r\n            f[j] = (f[j] + f[j - i]) % MOD; // 加入整数 i 后，原来和为 j-i 的方案都会转化为和为 j 的方案。\r\n        }\r\n    }\r\n    \r\n    cout << f[n] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：先枚举可用整数再正序枚举总和，可以避免同一组合因顺序不同被重复计数。"
        }
      ],
      "168": [
        {
          "variant": 1,
          "path": "solutions/359/168.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <vector>\r\nusing namespace std;\r\n\r\n// 预计算10的幂次\r\nint p10[10] = {1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000};\r\n\r\n// 获取数字n中从第l位到第r位构成的数值（从高位到低位）\r\n// 例如：num = [1,2,3,4]（表示数字1234），l=3, r=1，返回234\r\nint get_num(vector<int>& num, int l, int r) {\r\n    if (l < r) return 0;\r\n    int ans = 0;\r\n    for (int i = l; i >= r; i--) {\r\n        ans = ans * 10 + num[i];\r\n    }\r\n    return ans;\r\n}\r\n\r\n// 统计从1到n中数字x出现的次数\r\nint count(int n, int x) {\r\n    if (n <= 0) return 0;\r\n    \r\n    // 将n的每一位存入数组，num[0]存个位\r\n    vector<int> num;\r\n    while (n) {\r\n        num.push_back(n % 10);\r\n        n /= 10;\r\n    }\r\n    \r\n    int len = num.size();\r\n    int ans = 0;\r\n    \r\n    // 从高位向低位遍历\r\n    // 如果x==0，跳过最高位，因为最高位不能为0\r\n    for (int i = len - 1 - (x == 0); i >= 0; i--) {\r\n        // 当前位左边的高位部分\r\n        int high = get_num(num, len - 1, i + 1);\r\n        // 当前位右边的低位部分的位数\r\n        int low_len = i;\r\n        \r\n        // 情况1：高位部分取 0 到 high-1\r\n        // 当前位固定为x，低位任意\r\n        ans += high * p10[low_len];\r\n        \r\n        // 当x==0时，高位不能全为0（否则会产生前导零）\r\n        if (x == 0) {\r\n            ans -= p10[low_len];\r\n        }\r\n        \r\n        // 情况2：高位部分取 high\r\n        // 比较当前位数字与x的关系\r\n        if (num[i] == x) {\r\n            // 当前位相等，低位取 0 到 low_num\r\n            int low_num = get_num(num, i - 1, 0);\r\n            ans += (low_num + 1);\r\n        } else if (num[i] > x) {\r\n            // 当前位大于x，低位任意\r\n            ans += p10[low_len];\r\n        }\r\n        // 如果当前位小于x，贡献为0\r\n    }\r\n    \r\n    return ans;\r\n}\r\n\r\nint main() {\r\n    int a, b;\r\n    while (cin >> a >> b) {\r\n        if (a == 0 && b == 0) break;\r\n        if (a > b) swap(a, b);\r\n        \r\n        for (int i = 0; i < 10; i++) {\r\n            int result = count(b, i) - count(a - 1, i);\r\n            if (i > 0) cout << \" \";\r\n            cout << result;\r\n        }\r\n        cout << endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "169": [
        {
          "variant": 1,
          "path": "solutions/359/169.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 12;\r\nlong long f[N][1 << N];\r\nint n, m;\r\n\r\nvoid dfs(int col, int row, int cur_state, int next_state) {\r\n    if (row == n) {\r\n        f[col + 1][next_state] += f[col][cur_state];\r\n        return;\r\n    }\r\n    \r\n    if (cur_state & (1 << row)) {\r\n        dfs(col, row + 1, cur_state, next_state);\r\n    } else {\r\n        // 竖放\r\n        dfs(col, row + 1, cur_state, next_state | (1 << row));\r\n        // 横放\r\n        if (row + 1 < n && !(cur_state & (1 << (row + 1)))) {\r\n            dfs(col, row + 2, cur_state, next_state);\r\n        }\r\n    }\r\n}\r\n\r\nint main() {\r\n    while (cin >> n >> m && n && m) {\r\n        if (n > m) swap(n, m);\r\n        \r\n        memset(f, 0, sizeof(f));\r\n        f[0][0] = 1;\r\n        \r\n        for (int col = 0; col < m; col++) {\r\n            for (int state = 0; state < (1 << n); state++) {\r\n                if (f[col][state]) {\r\n                    dfs(col, 0, state, 0);\r\n                }\r\n            }\r\n        }\r\n        \r\n        cout << f[m][0] << endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "170": [
        {
          "variant": 1,
          "path": "solutions/359/170.cpp",
          "language": "cpp",
          "code": "// 思路：用位掩码表示已访问节点集合，动态规划求从零出发到 n-1 的最短哈密顿路径。\r\n#include <iostream>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 20;\r\nconst int M = 1 << N;\r\nint g[N][N];\r\nint f[M][N];\r\nint n;\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < n; j++) {\r\n            cin >> g[i][j];\r\n        }\r\n    }\r\n    \r\n    memset(f, 0x3f, sizeof(f));\r\n    f[1][0] = 0;\r\n    \r\n    for (int mask = 1; mask < (1 << n); mask++) {\r\n        for (int i = 0; i < n; i++) {\r\n            if (!(mask & (1 << i))) continue;\r\n            for (int j = 0; j < n; j++) {\r\n                if (i == j) continue;\r\n                if (!(mask & (1 << j))) continue;\r\n                f[mask][i] = min(f[mask][i], f[mask ^ (1 << i)][j] + g[j][i]); // 去掉终点 i 后，从前驱 j 的状态转移并加上边权。\r\n            }\r\n        }\r\n    }\r\n    \r\n    cout << f[(1 << n) - 1][n - 1] << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：状态压缩 DP 适合节点较少但需要记录访问集合的路径问题。"
        }
      ],
      "171": [
        {
          "variant": 1,
          "path": "solutions/359/171.cpp",
          "language": "cpp",
          "code": "// 思路：先用动态规划计算两个字符串的编辑距离，再统计距离不超过限制的字典字符串。\r\n#include <iostream>\r\n#include <cstring>\r\n#include <string>\r\nusing namespace std;\r\n\r\nconst int N = 1010;\r\nint dp[N][N];\r\nstring dict[N];\r\nint n, m;\r\n\r\nint edit_distance(string a, string b) {\r\n    int len1 = a.length(), len2 = b.length();\r\n    \r\n    for (int i = 0; i <= len1; i++) dp[i][0] = i;\r\n    for (int j = 0; j <= len2; j++) dp[0][j] = j;\r\n    \r\n    for (int i = 1; i <= len1; i++) {\r\n        for (int j = 1; j <= len2; j++) {\r\n            if (a[i - 1] == b[j - 1]) {\r\n                dp[i][j] = dp[i - 1][j - 1];\r\n            } else {\r\n                dp[i][j] = min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1; // 字符不同时在删除、插入和替换三种操作中选择代价最小者。\r\n            }\r\n        }\r\n    }\r\n    \r\n    return dp[len1][len2];\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m;\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        cin >> dict[i];\r\n    }\r\n    \r\n    while (m--) {\r\n        string s;\r\n        int k;\r\n        cin >> s >> k;\r\n        \r\n        int cnt = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            if (edit_distance(dict[i], s) <= k) {\r\n                cnt++;\r\n            }\r\n        }\r\n        \r\n        cout << cnt << endl;\r\n    }\r\n    \r\n    return 0;\r\n}\r\n// 总结：编辑距离边界应初始化为空串到前缀所需的插入或删除次数。"
        }
      ],
      "172": [
        {
          "variant": 1,
          "path": "solutions/359/172.cpp",
          "language": "cpp",
          "code": "// 思路：在上下级关系树上做动态规划，分别计算每个职员参加和不参加时的最大快乐值。\r\n#include <iostream>\r\n#include <vector>\r\n#include <cstring>\r\nusing namespace std;\r\n\r\nconst int N = 6010;\r\nvector<int> g[N];\r\nint happy[N];\r\nint dp[N][2];\r\nbool has_parent[N];\r\nint n;\r\n\r\nvoid dfs(int u) {\r\n    dp[u][0] = 0;\r\n    dp[u][1] = happy[u];\r\n    \r\n    for (int i = 0; i < g[u].size(); i++) {\r\n        int v = g[u][i];\r\n        dfs(v);\r\n        dp[u][0] += max(dp[v][0], dp[v][1]);\r\n        dp[u][1] += dp[v][0]; // 上司参加时直属下属不能参加，只能累加下属不参加的状态。\r\n    }\r\n}\r\n\r\nint main() {\r\n    cin >> n;\r\n    \r\n    for (int i = 1; i <= n; i++) {\r\n        cin >> happy[i];\r\n    }\r\n    \r\n    for (int i = 0; i < n - 1; i++) {\r\n        int l, k;\r\n        cin >> l >> k;\r\n        g[k].push_back(l);\r\n        has_parent[l] = true;\r\n    }\r\n    \r\n    int root = 1;\r\n    while (has_parent[root]) root++;\r\n    \r\n    dfs(root);\r\n    \r\n    cout << max(dp[root][0], dp[root][1]) << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：树形 DP 要先找到没有上司的根节点，再自底向上合并子树状态。"
        }
      ],
      "001": [
        {
          "variant": 1,
          "path": "solutions/359/001.cpp",
          "language": "cpp",
          "code": "//简单题：A+B\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << A + B;\r\n    return 0;\r\n}\r\n"
        }
      ],
      "002": [
        {
          "variant": 1,
          "path": "solutions/359/002.cpp",
          "language": "cpp",
          "code": "//简单题：A*B\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    cin >> A >> B;\r\n    cout << \"PROD = \" << A * B << endl;\r\n    return 0;\r\n}"
        }
      ],
      "003": [
        {
          "variant": 1,
          "path": "solutions/359/003.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B, C, D;\r\n    cin >> A >> B >> C >> D;\r\n    cout <<\"DIFFERENCE = \" << A * B - C * D << endl;\r\n    return 0;\r\n}//输出案例缺少\"DIFFERENCE = \""
        }
      ],
      "004": [
        {
          "variant": 1,
          "path": "solutions/359/004.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A, B;\r\n    double C;\r\n    scanf(\"%d%d%lf\",&A,&B,&C);\r\n    printf(\"TOTAL = %.2lf\", B * C);//注意小数位数\r\n    return 0;\r\n}"
        }
      ],
      "005": [
        {
          "variant": 1,
          "path": "solutions/359/005.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\n#define pi 3.14159\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A;\r\n    scanf(\"%lf\",&A);\r\n    printf(\"A=%.4lf\", A * A * pi);\r\n    return 0;\r\n}"
        }
      ],
      "006": [
        {
          "variant": 1,
          "path": "solutions/359/006.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;\r\n    scanf(\"%lf%lf\",&a,&b);//剑术权重3.5，心法权重7.5\r\n    printf(\"Average = %.5lf\", (a*3.5+b*7.5)/11.0 );//注意位数\r\n    return 0;\r\n}"
        }
      ],
      "007": [
        {
          "variant": 1,
          "path": "solutions/359/007.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double b;\r\n    int a,c;\r\n    scanf(\"%d\", &c);\r\n    scanf(\"%d%lf\",&a,&b);\r\n    printf(\"NUMBER = %d\\n\", c);\r\n    printf(\"SALARY = U$ %.2lf\",a*b );//注意格式\r\n    return 0;\r\n}"
        }
      ],
      "008": [
        {
          "variant": 1,
          "path": "solutions/359/008.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n#include <iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a, b;//浮点数\r\n    scanf(\"%lf%lf\",&a,&b);\r\n    printf(\"%.3lf km/l\",a/b );\r\n \r\n    return 0;\r\n}"
        }
      ],
      "009": [
        {
          "variant": 1,
          "path": "solutions/359/009.cpp",
          "language": "cpp",
          "code": "//简单题：根据描述得出结果\r\n#include <stdio.h>\r\n#define pi 3.14159\r\nint main()\r\n{\r\n    double r;//浮点数\r\n    scanf(\"%lf\",&r);\r\n    printf(\"VOLUME = %.3lf\",(4.0/3)*pi*r*r*r );//注意位数\r\n    return 0;\r\n}"
        }
      ],
      "010": [
        {
          "variant": 1,
          "path": "solutions/359/010.c",
          "language": "c",
          "code": "//简单题：比较大小\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int a,b,c,d;\r\n    scanf(\"%d%d%d\",&a,&b,&c);\r\n    d = (a > b ? a : b) > c ? (a > b ? a : b) : c;//用三次？：判断\r\n    printf(\"Max = %d\", d);\r\n    return 0;\r\n}"
        }
      ],
      "011": [
        {
          "variant": 1,
          "path": "solutions/359/011.c",
          "language": "c",
          "code": "#include <stdio.h>\r\n#include <math.h>\r\nint main()\r\n{\r\n    double x1, y1, x2, y2, l;\r\n    scanf(\"%lf%lf%lf%lf\",&x1,&y1,&x2,&y2);\r\n    l = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));\r\n    printf(\"%.4lf\", l);//题目输出写保留两位小数有误\r\n    return 0;\r\n}"
        }
      ],
      "012": [
        {
          "variant": 1,
          "path": "solutions/359/012.c",
          "language": "c",
          "code": "// 思路：分别套用三角形、圆、梯形、正方形和矩形的面积公式完成计算。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    double a, b, c;\r\n    scanf(\"%lf%lf%lf\", &a, &b, &c);\r\n    printf(\"TRIANGULO: %.3lf\\n\", (a * c) / 2.0); // 三角形面积使用底乘高再除以二。\r\n    printf(\"CIRCULO: %.3lf\\n\", 3.14159 * c * c);\r\n    printf(\"TRAPEZIO: %.3lf\\n\", (a + b) * c / 2.0);\r\n    printf(\"QUADRADO: %.3lf\\n\", b * b);\r\n    printf(\"RETANGULO: %.3lf\\n\", a * b);\r\n    return 0;\r\n}\r\n// 总结：几何公式题需要对应好各变量含义，并统一保留三位小数。\r\n"
        }
      ],
      "013": [
        {
          "variant": 1,
          "path": "solutions/359/013.c",
          "language": "c",
          "code": "// 思路：用整除和余数把总秒数依次拆分为小时、分钟和秒。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int t, h = 0, m = 0, s = 0;\r\n    scanf(\"%d\", &t);\r\n    h = t / 3600; // 整除 3600 得到完整的小时数。\r\n    m = (t - 3600 * h) / 60;\r\n    s = t - 3600 * h - 60 * m;\r\n    printf(\"%d:%d:%d\", h, m, s);\r\n    return 0;\r\n}\r\n// 总结：时间换算可以逐级取整，再从剩余量中继续分解。"
        }
      ],
      "014": [
        {
          "variant": 1,
          "path": "solutions/359/014.c",
          "language": "c",
          "code": "// 思路：按照面额从大到小依次计算张数，并扣除已经分配的金额。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int money, m100 = 0, m50 = 0, m20 = 0, m10 = 0, m5 = 0, m2 = 0, m1 = 0;\r\n    scanf(\"%d\", &money);\r\n    m100 = money / 100; // 先尽可能使用最大面额，确定百元钞票数量。\r\n    m50 = (money - 100 * m100) / 50;\r\n    m20 = (money - 100 * m100 - 50 * m50) / 20;\r\n    m10 = (money - 100 * m100 - 50 * m50 - 20 * m20) / 10;\r\n    m5 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10) / 5;\r\n    m2 = (money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5) / 2;\r\n    m1 = money - 100 * m100 - 50 * m50 - 20 * m20 - 10 * m10 - 5 * m5 - 2 * m2;\r\n    printf(\"%d\\n\", money);\r\n    printf(\"%d nota(s) de R$ 100,00\\n\", m100);\r\n    printf(\"%d nota(s) de R$ 50,00\\n\", m50);\r\n    printf(\"%d nota(s) de R$ 20,00\\n\", m20);\r\n    printf(\"%d nota(s) de R$ 10,00\\n\", m10);\r\n    printf(\"%d nota(s) de R$ 5,00\\n\", m5);\r\n    printf(\"%d nota(s) de R$ 2,00\\n\", m2);\r\n    printf(\"%d nota(s) de R$ 1,00\\n\", m1);\r\n    return 0;\r\n}\r\n// 总结：固定面额拆分应从大到小处理，避免小面额提前占用金额。\r\n"
        }
      ],
      "015": [
        {
          "variant": 1,
          "path": "solutions/359/015.c",
          "language": "c",
          "code": "// 思路：分别检查两个整数能否整除对方，从而判断它们是否存在倍数关系。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int A, B;\r\n    scanf(\"%d%d\", &A, &B);\r\n    if (A % B == 0 || B % A == 0)printf(\"Yes\"); // 任意一个取模结果为零即可说明两数互为倍数。\r\n    else printf(\"No\");\r\n    return 0;\r\n}\r\n// 总结：倍数关系具有方向性，因此需要同时检查 A%B 和 B%A。"
        }
      ],
      "016": [
        {
          "variant": 1,
          "path": "solutions/359/016.c",
          "language": "c",
          "code": "// 思路：先用三角形不等式判断三边能否成三角形，否则按梯形公式计算面积。\r\n#include <stdio.h>\r\n#include <math.h>\r\nint main()\r\n{\r\n    double A, B, C;\r\n    scanf(\"%lf%lf%lf\", &A, &B, &C);\r\n    if (A + B > C && B + C > A && A + C > B)printf(\"Perimeter = %.1lf\", A + B + C); // 三组两边之和都大于第三边时输出三角形周长。\r\n    else printf(\"Area = %.1lf\", (A + B) * C / 2);\r\n    return 0;\r\n}\r\n// 总结：判断三角形必须同时满足三条不等式，不能只比较其中一组边。"
        }
      ],
      "017": [
        {
          "variant": 1,
          "path": "solutions/359/017.c",
          "language": "c",
          "code": "// 思路：根据开始和结束时刻的先后关系计算经过小时数，并处理跨越午夜的情况。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int A, B;\r\n    scanf(\"%d%d\", &A, &B);\r\n    if (B > A)printf(\"%d\", B - A);\r\n    else if (A == B)printf(\"%d\", 24); // 起止时刻相同时表示经过完整的二十四小时。\r\n    else if (A > B)printf(\"%d\", 24 - A + B);\r\n    return 0;\r\n}\r\n// 总结：周期时间差需要区分同日、跨日以及整周期三种情况。"
        }
      ],
      "018": [
        {
          "variant": 1,
          "path": "solutions/359/018.c",
          "language": "c",
          "code": "// 思路：通过三次两两比较交换，把三个整数整理为降序后再反向输出。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int a, b, c,temp = 0;\r\n    scanf(\"%d%d%d\", &a, &b, &c);\r\n    if (a < b) // 当前面的数更小时交换，使较大的数逐步移动到前面。\r\n    {\r\n        temp = a;\r\n        a = b;\r\n        b = temp;\r\n    }\r\n    if (a < c)\r\n    {\r\n        temp = a;\r\n        a = c;\r\n        c = temp;\r\n    }\r\n    if (b < c)\r\n    {\r\n        temp = b;\r\n        b = c;\r\n        c = temp;\r\n    }\r\n    printf(\"%d %d %d\",c,b,a);\r\n    return 0;\r\n}\r\n// 总结：少量数据可以直接比较交换，但输出顺序要与内部排序方向对应。"
        }
      ],
      "019": [
        {
          "variant": 1,
          "path": "solutions/359/019.c",
          "language": "c",
          "code": "// 思路：用价格数组保存五种商品单价，再通过商品编号找到对应价格。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int name, num;\r\n    double price[] = { 4.00,4.50,5.00,2.00,1.50 };\r\n    scanf(\"%d%d\", &name, &num);\r\n    printf(\"Total: R$ %.2lf\", price[name - 1] * num); // 商品编号从一开始，因此访问数组时需要减一。\r\n    return 0;\r\n}\r\n// 总结：编号映射固定数据时使用数组比多分支判断更简洁。"
        }
      ],
      "020": [
        {
          "variant": 1,
          "path": "solutions/359/020.c",
          "language": "c",
          "code": "// 思路：按从小到大的顺序判断数值所在区间，并准确处理每个端点的开闭。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    float power; \r\n    scanf(\"%f\", &power);\r\n    if (power >= 0 && power <= 25)  // 第一个区间同时包含零和二十五两个端点。\r\n    {\r\n        printf(\"Interval [0,25]\\n\");\r\n    } \r\n    else if (power > 25 && power <= 50)\r\n    {\r\n        printf(\"Interval (25,50]\\n\");\r\n    } \r\n    else if (power > 50 && power <= 75) \r\n    {\r\n        printf(\"Interval (50,75]\\n\");\r\n    } \r\n    else if (power > 75 && power <= 100)\r\n    {\r\n        printf(\"Interval (75,100]\\n\");\r\n    } \r\n    else\r\n    {\r\n        printf(\"Out of interval\\n\");\r\n    }\r\n\r\n    return 0;\r\n}\r\n// 总结：连续区间判断最容易出错的是边界，需逐个确认大于或大于等于。"
        }
      ],
      "021": [
        {
          "variant": 1,
          "path": "solutions/359/021.c",
          "language": "c",
          "code": "// 思路：根据横纵坐标的正负判断象限，再单独处理坐标轴和原点。\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    double x,y;\r\n    scanf(\"%lf%lf\", &x,&y);\r\n    if (x > 0 && y > 0) // 横纵坐标都为正时点位于第一象限。\r\n    {\r\n        printf(\"Q1\");\r\n    }\r\n    else if (x < 0 && y > 0)\r\n    {\r\n        printf(\"Q2\");\r\n    }\r\n    else if (x < 0 && y < 0)\r\n    {\r\n        printf(\"Q3\");\r\n    }\r\n    else if (x > 0 && y < 0)\r\n    {\r\n        printf(\"Q4\");\r\n    }\r\n    else if (x != 0 && y == 0)\r\n    {\r\n        printf(\"Eixo X\");\r\n    }\r\n    else if (x == 0 && y != 0)\r\n    {\r\n        printf(\"Eixo Y\");\r\n    }\r\n    else if (x == 0 && y == 0)\r\n    {\r\n        printf(\"Origem\");\r\n    }\r\n    return 0;\r\n}\r\n// 总结：坐标分类除了四个象限，还要覆盖两条坐标轴和原点。"
        }
      ],
      "022": [
        {
          "variant": 1,
          "path": "solutions/359/022.cpp",
          "language": "cpp",
          "code": "// 思路：把两个时刻都换算成从零点开始的分钟数，再计算包含跨日情况的时间差。\r\n#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int A, B, C, D,temp;\r\n    cin >> A >> B >> C >> D;\r\n    int m1 = A * 60 + B;\r\n\tint m2 = C * 60 + D;\r\n    if (m1 >= m2)temp = 24 * 60 + m2 - m1; // 结束时刻不晚于开始时刻时，需要补上一整天的分钟数。\r\n\telse temp = m2 - m1;\r\n\tcout << temp / 60 << \":\" << temp % 60 << endl;\r\n    return 0;\r\n}\r\n// 总结：统一换算成分钟后，时差计算和跨日处理都会更直接。"
        }
      ],
      "023": [
        {
          "variant": 1,
          "path": "solutions/359/023.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<iomanip>\r\nusing namespace std;\r\n//iomanip is used to set the precision of the output\r\nint main()\r\n{\r\n    double salary;\r\n\tcin >> salary;\r\n\tif (salary >= 0 && salary <= 400)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<< setprecision(2) <<salary * 1.15 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.15 << endl;\r\n\t\tcout << \"Percentage:\" << \" 15 %\" << endl;\r\n\t}\r\n\telse if (salary >= 400.01 && salary <= 800)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<<salary * 1.12 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.12 << endl;\r\n\t\tcout << \"Percentage:\" << \" 12 %\" << endl;\r\n\t}\r\n\telse if (salary >= 800.01 && salary <= 1200)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<< setprecision(2) << salary * 1.10 << endl;\r\n\t\tcout << \"Increase: \" << fixed<<setprecision(2)<<salary * 0.10 << endl;\r\n\t\tcout << \"Percentage:\" << \" 10 %\" << endl;\r\n\t}\r\n\telse if (salary >= 1200.01 && salary <= 2000)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<< salary * 1.07 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.07 << endl;\r\n\t\tcout << \"Percentage:\" << \" 7 %\" << endl;\r\n\t}\r\n\telse if(salary>2000)\r\n\t{\r\n\t\tcout << \"New salary: \" << fixed<<setprecision(2)<< salary * 1.04 << endl;\r\n\t\tcout << \"Increase: \" << fixed<< setprecision(2)<<salary * 0.04 << endl;\r\n\t\tcout << \"Percentage:\" << \" 4 %\" << endl;\r\n\t}\r\n\treturn 0;\r\n}"
        }
      ],
      "024": [
        {
          "variant": 1,
          "path": "solutions/359/024.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A,B,C,D;\r\n    cin>>A>>B>>C>>D; //B大于A，D大于A，C与D之和大于A与B之和，C是正数，A是偶数。\r\n    if(A%2==0 && B>A && D>A && (C+D)>(A+B) && C>0)\r\n    {\r\n        cout<<\"Accepted\"<<endl;\r\n    }\r\n    else\r\n    {\r\n        cout<<\"Not accepted\"<<endl;\r\n    }\r\n}"
        }
      ],
      "025": [
        {
          "variant": 1,
          "path": "solutions/359/025.cpp",
          "language": "cpp",
          "code": "// 思路：根据输入的电话区号逐项匹配城市，未匹配时输出未登记提示。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a;\r\n    cin>>a;\r\n    if(a==61) // 从已知区号开始逐项判断对应城市。\r\n    {\r\n        cout<<\"Brasilia\"<<endl;\r\n    }\r\n    else if(a==71)\r\n    {\r\n        cout<<\"Salvador\"<<endl;\r\n    }\r\n    else if(a==11)\r\n    {\r\n        cout<<\"Sao Paulo\"<<endl;\r\n    }\r\n    else if(a==21)\r\n    {\r\n        cout<<\"Rio de Janeiro\"<<endl;\r\n    }\r\n    else if(a==32)\r\n    {\r\n        cout<<\"Juiz de Fora\"<<endl;\r\n    }\r\n    else if(a==19)\r\n    {\r\n        cout<<\"Campinas\"<<endl;\r\n    }\r\n    else if(a==27)\r\n    {\r\n        cout<<\"Vitoria\"<<endl;\r\n    }\r\n    else if(a==31)\r\n    {\r\n        cout<<\"Belo Horizonte\"<<endl;\r\n    }\r\n    else\r\n    {\r\n        cout<<\"DDD nao cadastrado\"<<endl;\r\n    }\r\n}\r\n// 总结：固定且数量较少的映射可以使用条件链，但必须保留默认分支。"
        }
      ],
      "026": [
        {
          "variant": 1,
          "path": "solutions/359/026.cpp",
          "language": "cpp",
          "code": "// 思路：先判断三边能否组成三角形，再按边长平方关系和边相等情况分类。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a,b,c;\r\n    cin>>a>>b>>c;\r\n    if(a+b>c&&a+c>b&&b+c>a)\r\n    {\r\n        if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a) // 任意两边平方和等于第三边平方时为直角三角形。\r\n        {\r\n            cout<<\"Right\"<<endl;\r\n        }\r\n        else if(a*a+b*b>c*c&&a*a+c*c>b*b&&b*b+c*c>a*a)\r\n        {\r\n            cout<<\"Acute\"<<endl;\r\n        }\r\n        else\r\n        {\r\n            cout<<\"Obtuse\"<<endl;\r\n        }\r\n        if(a==b&&b==c)\r\n        {\r\n            cout<<\"Equilateral\"<<endl;\r\n        }\r\n        else if(a==b||b==c||a==c)\r\n        {\r\n            cout<<\"Isosceles\"<<endl;\r\n        }\r\n    }\r\n    else\r\n    {\r\n        cout<<\"Not a triangle\"<<endl;\r\n    }\r\n}\r\n// 总结：三角形分类应先验证合法性，再分别判断角类型和边类型。"
        }
      ],
      "027": [
        {
          "variant": 1,
          "path": "solutions/359/027.cpp",
          "language": "cpp",
          "code": "// 思路：按照脊椎、类别和食性三层特征建立决策树，逐级确定动物名称。\r\n#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    string first,second,third;\r\n    cin>>first>>second>>third;\r\n    if(first==\"vertebrate\") // 先用最高层特征把动物分为脊椎和无脊椎两大类。\r\n    {\r\n        if(second==\"bird\")\r\n        {\r\n            if(third==\"carnivore\")\r\n            {\r\n                cout<<\"eagle\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"dove\"<<endl;\r\n            }\r\n        }\r\n        else if(second==\"mammal\")\r\n        {\r\n            if(third==\"omnivore\")\r\n            {\r\n                cout<<\"man\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"cow\"<<endl;\r\n            }\r\n        }\r\n    }\r\n    else if(first==\"invertebrate\")\r\n    {\r\n        if(second==\"insect\")\r\n        {\r\n            if(third==\"hematophagous\")\r\n            {\r\n                cout<<\"flea\"<<endl;\r\n            }\r\n            else if(third==\"herbivore\")\r\n            {\r\n                cout<<\"caterpillar\"<<endl;\r\n            }\r\n        }\r\n        else if(second==\"annelid\")\r\n        {\r\n            if(third==\"omnivore\")\r\n            {\r\n                cout<<\"earthworm\"<<endl;\r\n            }\r\n            else if(third==\"hematophagous\")\r\n            {\r\n                cout<<\"leech\"<<endl;\r\n            }\r\n        }\r\n    }\r\n}\r\n// 总结：多级分类题应按题目给出的层次逐步缩小范围，避免条件交叉。"
        }
      ],
      "028": [
        {
          "variant": 1,
          "path": "solutions/359/028.cpp",
          "language": "cpp",
          "code": "// 思路：按收入区间分段计税，每一档只对超过该档起点的部分计算税额。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a;\r\n    cin>>a;\r\n    if(a>=0&&a<=2000)\r\n    {\r\n        cout<<\"Isento\"<<endl;\r\n    }\r\n    else if(a>2000&&a<=3000)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(a-2000)*0.08<<endl;\r\n    }\r\n    else if(a>3000&&a<=4500)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(1000*0.08+(a-3000)*0.18)<<endl;\r\n    }\r\n    else if(a>4500)\r\n    {\r\n        cout<<\"R$ \"<<fixed<<setprecision(2)<<(1000*0.08+1500*0.18+(a-4500)*0.28)<<endl; // 最高档税额由前两档满额税款和超出部分共同组成。\r\n    }\r\n}\r\n// 总结：累进税率不能对全部收入直接乘最高税率，应逐段累加。"
        }
      ],
      "029": [
        {
          "variant": 1,
          "path": "solutions/359/029.cpp",
          "language": "cpp",
          "code": "// 思路：从二开始每次增加二，直接枚举一百以内的所有正偶数。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    for(int i=2;i<=100;i+=2) // 步长设为二可以避免循环中再次判断奇偶性。\r\n    {\r\n        cout<<i<<endl;\r\n    }\r\n    return 0;\r\n}\r\n// 总结：等差序列输出时选好起点和步长能让代码更简洁。"
        }
      ],
      "030": [
        {
          "variant": 1,
          "path": "solutions/359/030.cpp",
          "language": "cpp",
          "code": "// 思路：从一开始以二为步长，输出不超过输入上限的所有正奇数。\r\n#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int X;\r\n    cin>>X;\r\n    for(int i=1;i<=X;i+=2) // 从第一个正奇数开始递增二即可只访问奇数。\r\n    {\r\n        cout<<i<<endl;\r\n    }\r\n}\r\n// 总结：直接按目标数列的规律枚举比逐个判断奇偶更高效。"
        }
      ],
      "031": [
        {
          "variant": 1,
          "path": "solutions/359/031.cpp",
          "language": "cpp",
          "code": "// 思路：反复读取 n，并输出从一到 n 的序列，读到零时结束。\r\n#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int n;\r\n    cin>>n;\r\n    while(n!=0) // 零作为终止标记，不参与序列输出。\r\n    {\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(i>1)cout<<\" \";\r\n            cout<<i;\r\n        }\r\n        cout<<endl;\r\n        cin>>n;\r\n    }\r\n}\r\n// 总结：多组不定数量输入常用哨兵值控制循环，同时要处理元素间空格。"
        }
      ],
      "032": [
        {
          "variant": 1,
          "path": "solutions/359/032.cpp",
          "language": "cpp",
          "code": "// 思路：先把输入调整为不小于它的奇数，再连续输出六个相邻奇数。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int X;\r\n    cin>>X;\r\n    if(X%2==0)X+=1; // 输入为偶数时加一，使起点变为下一个奇数。\r\n    for(int i=0;i<6;i++)\r\n    {\r\n        cout<<X<<endl;\r\n        X+=2;\r\n    }\r\n    return 0;\r\n}\r\n// 总结：先规范化起点后再按固定步长生成序列，可减少循环内判断。"
        }
      ],
      "033": [
        {
          "variant": 1,
          "path": "solutions/359/033.cpp",
          "language": "cpp",
          "code": "// 思路：读取六个实数并统计其中严格大于零的元素个数。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double a;\r\n    int n=6,count=0;\r\n    while(n--)\r\n    {\r\n        cin>>a;\r\n        if(a>0)count++; // 只有正数才计数，零和负数都不计入。\r\n    }\r\n    cout<<count<<\" positive numbers\"<<endl;\r\n}\r\n// 总结：计数题应明确比较是否包含边界值零。"
        }
      ],
      "034": [
        {
          "variant": 1,
          "path": "solutions/359/034.cpp",
          "language": "cpp",
          "code": "// 思路：枚举给定范围内的整数，输出除以 N 后余数等于二的数。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    if(N>9998)return 0;\r\n    for(int i=1;i<=10000;i++)\r\n    {\r\n        if(i%N==2) cout<<i<<endl; // 用取模结果直接筛选满足指定余数的整数。\r\n    }\r\n    return 0;\r\n}\r\n// 总结：余数筛选的核心是取模条件，同时要留意除数和枚举上界。"
        }
      ],
      "035": [
        {
          "variant": 1,
          "path": "solutions/359/035.cpp",
          "language": "cpp",
          "code": "// 思路：逐个读取 N 个整数，统计落在闭区间十到二十内的数量。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N, x;\r\n    cin>>N;\r\n    int count=0;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>x;\r\n        if(x>=10&&x<=20) // 上下界都包含在区间内，因此同时使用大于等于和小于等于。\r\n        {\r\n            count++;\r\n        }\r\n    }\r\n    cout<<count<<\" in\"<<endl;\r\n    cout<<N-count<<\" out\"<<endl;\r\n    return 0;\r\n}\r\n// 总结：区间计数完成后，区间外数量可直接用总数减去区间内数量。"
        }
      ],
      "036": [
        {
          "variant": 1,
          "path": "solutions/359/036.cpp",
          "language": "cpp",
          "code": "// 思路：先保证两个端点有序，再从内部第一个奇数开始累加到另一端点之前。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int X,Y,temp,sum=0;\r\n    cin>>X>>Y;\r\n    if(X>Y)\r\n    {\r\n        temp=X;\r\n        X=Y;\r\n        Y=temp;\r\n    }\r\n    if(X%2!=0)\r\n    {\r\n        X++;\r\n    }\r\n    for(int i=X+1;i<Y;i+=2) // 从较小端点之后开始并以二递增，只累加严格位于两数之间的奇数。\r\n    {\r\n        sum+=i;\r\n    }\r\n    cout<<sum<<endl;\r\n    return 0;\r\n}\r\n// 总结：处理两端之间的数据时要先排序端点，并明确是否包含端点。"
        }
      ],
      "037": [
        {
          "variant": 1,
          "path": "solutions/359/037.cpp",
          "language": "cpp",
          "code": "// 思路：持续读取直到得到正整数 n，再累加从 A 开始的连续 n 个整数。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int A,sum=0;\r\n    cin>>A;\r\n    int n;\r\n    cin>>n;\r\n    while(!(n>0)) // 无效的非正输入会被跳过，直到读到合法的项数。\r\n    {\r\n        cin>>n;\r\n    }\r\n    for(int i=A,j=0;j<n;i++,j++)\r\n    {\r\n        sum+=i;\r\n    }\r\n    cout<<sum<<endl;\r\n    return 0;\r\n}\r\n// 总结：连续项求和时可用双变量同时控制当前值和已经累加的项数。\r\n"
        }
      ],
      "038": [
        {
          "variant": 1,
          "path": "solutions/359/038.cpp",
          "language": "cpp",
          "code": "// 思路：保存输入序列并线性扫描，记录最大值及其首次出现的位置。\r\n#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    vector<int>a;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        int x;\r\n        cin>>x;\r\n        a.push_back(x);\r\n    }\r\n    int num=0,max=-1000;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        if(a[i]>max) // 只在严格变大时更新，因此相同最大值会保留第一次出现的位置。\r\n        {\r\n            max=a[i];\r\n            num=i;\r\n        }\r\n    }\r\n    cout<<max<<endl<<num+1<<endl;\r\n    return 0;\r\n}\r\n// 总结：位置输出采用一基编号时，要在零基数组下标上加一。"
        }
      ],
      "039": [
        {
          "variant": 1,
          "path": "solutions/359/039.cpp",
          "language": "cpp",
          "code": "// 思路：枚举一到 N 的所有整数，用整除条件筛选 N 的约数。\r\n#include <iostream>\r\nusing namespace std;\r\n\r\nint main() {\r\n    int N;\r\n    cin>>N;\r\n    for(int i=1;i<=N;i++)\r\n    {\r\n        if(N%i==0) // 余数为零说明当前 i 可以整除 N。\r\n        {\r\n            cout<<i<<endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n// 总结：直接枚举约数实现简单，关键是包含一和 N 两个边界。\r\n"
        }
      ],
      "040": [
        {
          "variant": 1,
          "path": "solutions/359/040.cpp",
          "language": "cpp",
          "code": "// 思路：枚举一到十作为乘数，按固定格式输出输入数的乘法表。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin>>N;\r\n    for(int i=1;i<=10;i++)\r\n    {\r\n        cout<<i<<\" x \"<<N<<\" = \"<<i*N<<endl; // 每一行同时输出乘法表达式和计算结果。\r\n    }\r\n    return 0;\r\n}\r\n// 总结：格式化输出题除了结果正确，还要严格匹配空格和符号。"
        }
      ],
      "041": [
        {
          "variant": 1,
          "path": "solutions/359/041.cpp",
          "language": "cpp",
          "code": "// 思路：连续生成整数，每行输出 M-1 个数字，并用 SWORD 占据该行最后一个位置。\r\n#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int N,M;\r\n    cin>>N>>M;\r\n    int j=1,num=0;\r\n    for(int i=1;i<=N;i++){\r\n        num=0;\r\n        while(num<M-1) // 每行只循环输出前 M-1 个连续数字。\r\n        {\r\n            cout<<j<<\" \";\r\n            num++;\r\n            j++;\r\n        }\r\n        cout<<\"SWORD\"<<endl;\r\n        j++;\r\n    }\r\n    return 0;\r\n}\r\n// 总结：按行分组输出时应分别维护全局序号和当前行元素数量。"
        }
      ],
      "042": [
        {
          "variant": 1,
          "path": "solutions/359/042.cpp",
          "language": "cpp",
          "code": "// 思路：累计武器总数及三种武器的分类数量，再分别计算它们所占百分比。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin >> N; \r\n    int total = 0;\r\n    int swords = 0;\r\n    int blades = 0; \r\n    int spears = 0;    \r\n    for(int i = 0; i < N; i++)\r\n    {\r\n        int count;\r\n        char type;\r\n        cin >> count >> type;  \r\n        total += count; // 每组数量先计入总数，之后再按类型加入对应分类。\r\n        if(type == 'C')\r\n        {\r\n            swords += count;\r\n        }\r\n        else if(type == 'R')\r\n        {\r\n            blades += count;\r\n        }\r\n        else if(type == 'F')\r\n        {\r\n            spears += count;\r\n        }\r\n    }\r\n    double percentC =(double)swords / total * 100;\r\n    double percentR =(double)blades / total * 100;\r\n    double percentF =(double)spears / total * 100;\r\n    cout << \"Total: \" << total << \" weapons\" << endl;\r\n    cout << \"Total swords: \" << swords << endl;\r\n    cout << \"Total blades: \" << blades << endl;\r\n    cout << \"Total spears: \" << spears << endl;\r\n    cout << fixed << setprecision(2);\r\n    cout << \"Percentage of swords: \" << percentC << \" %\" << endl;\r\n    cout << \"Percentage of blades: \" << percentR << \" %\" << endl;\r\n    cout << \"Percentage of spears: \" << percentF << \" %\" << endl;\r\n    return 0;\r\n}\r\n// 总结：百分比计算前需要转换为浮点数，避免整数除法丢失小数。"
        }
      ],
      "043": [
        {
          "variant": 1,
          "path": "solutions/359/043.cpp",
          "language": "cpp",
          "code": "// 思路：读取十个整数，输出时把非正元素替换为一并保留下标格式。\r\n#include<iostream>\r\nusing namespace std;\r\nint main(){\r\n    int x[10];\r\n    for(int i=0;i<10;i++){\r\n        cin>>x[i];\r\n    }\r\n    for(int i=0;i<10;i++)\r\n    {\r\n            if(x[i]<=0) // 小于等于零的元素统一按一输出。\r\n            {cout<<\"X[\"<<i<<\"] = \"<<1<<endl;}\r\n            else\r\n            {cout<<\"X[\"<<i<<\"] = \"<<x[i]<<endl;}\r\n    }\r\n\r\n    return 0;\r\n}\r\n// 总结：数组替换题要注意条件包含零，并按题目要求输出原下标。"
        }
      ],
      "044": [
        {
          "variant": 1,
          "path": "solutions/359/044.cpp",
          "language": "cpp",
          "code": "// 思路：从初始值开始连续输出十项，每输出一项后将数值翻倍。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int V;\r\n    cin >> V; \r\n    for(int i = 0; i < 10; i++)\r\n    {\r\n        cout << \"N[\" << i << \"] = \" << V << endl;\r\n        V = V * 2; // 当前项乘二后得到下一项。\r\n    }\r\n    return 0;\r\n}\r\n// 总结：递推序列可以边输出边更新，不必额外保存整个数组。"
        }
      ],
      "045": [
        {
          "variant": 1,
          "path": "solutions/359/045.cpp",
          "language": "cpp",
          "code": "// 思路：读入一百个实数，只输出其中小于等于十的元素及对应下标。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    double A[100];   \r\n    for(int i = 0; i < 100; i++)\r\n    {\r\n        cin >> A[i];\r\n    }  \r\n    cout << fixed << setprecision(1);\r\n    for(int i = 0; i < 100; i++)\r\n    {\r\n        if(A[i] <= 10) // 筛选条件包含恰好等于十的元素。\r\n        {\r\n            cout << \"A[\" << i << \"] = \" << A[i] << endl;\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n// 总结：数组筛选输出时应同时保留原始位置和规定的小数精度。"
        }
      ],
      "046": [
        {
          "variant": 1,
          "path": "solutions/359/046.cpp",
          "language": "cpp",
          "code": "// 思路：通过交换首尾对称位置，把二十个整数原地逆序。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int a[20];\r\n    for(int i = 0; i < 20; i++)\r\n    {\r\n        cin >> a[i];\r\n    }\r\n    int temp;\r\n    for(int i=0;i<=9;i++)\r\n    {\r\n        temp=a[i];\r\n        a[i]=a[19-i]; // 第 i 个元素与倒数第 i 个元素交换。\r\n        a[19-i]=temp;\r\n    }\r\n    for(int i = 0; i < 20; i++)\r\n    {\r\n        cout << \"N[\" << i << \"] = \" << a[i] << endl;\r\n    }\r\n    return 0;\r\n}\r\n// 总结：原地逆序只需处理数组前半段，否则会把已经交换的元素换回去。"
        }
      ],
      "047": [
        {
          "variant": 1,
          "path": "solutions/359/047.cpp",
          "language": "cpp",
          "code": "// 思路：遍历 N 个整数，动态维护最小值及其零基下标。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int N;\r\n    cin >> N;   \r\n    int minVal;\r\n    int minPos = 0;   \r\n    for(int i = 0; i < N; i++)\r\n    {\r\n        int num;\r\n        cin >> num;\r\n        if(i == 0 || num < minVal) // 首个元素负责初始化，后续只有遇到更小值才更新。\r\n        {\r\n            minVal = num;\r\n            minPos = i;\r\n        }\r\n    }\r\n    cout << \"Menor valor: \" << minVal << endl;\r\n    cout << \"Posicao: \" << minPos << endl;\r\n    return 0;\r\n}\r\n// 总结：用首元素初始化最值可避免随意设置哨兵，并能保留最小值首次出现的位置。"
        }
      ],
      "048": [
        {
          "variant": 1,
          "path": "solutions/359/048.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    long long a=0,b=1,N,num=0;\r\n    cin >>N;\r\n    if(N==0)\r\n    {\r\n        cout << 0 << endl;\r\n        return 0;\r\n    }\r\n    if(N==1)\r\n    {\r\n        cout << 1 << endl;\r\n        return 0;\r\n    }\r\n    for(long long i=2;i<=N;i++)\r\n    {\r\n        num=a+b;\r\n        a=b;\r\n        b=num;\r\n        \r\n    }\r\n    cout << num << endl;\r\n    return 0;\r\n}\r\n//F1=0\r\n//F2=0+1\r\n//F3=1+1\r\n//F4=1+2\r\n//F5=2+3"
        }
      ],
      "049": [
        {
          "variant": 1,
          "path": "solutions/359/049.cpp",
          "language": "cpp",
          "code": "// 思路：从零和一开始递推斐波那契数列，并输出前 N 项。\r\n#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    long long N;\r\n    cin >>N;\r\n    vector<long long>a;\r\n    a.push_back(0);\r\n    a.push_back(1);\r\n    for(int i=2;i<=N;i++)\r\n    {\r\n        long long temp;\r\n        temp=a[i-1]+a[i-2]; // 每个新项由前两项相加得到。\r\n        a.push_back(temp);\r\n    }\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cout << a[i] << \" \";\r\n    }\r\n    return 0;\r\n}\r\n// 总结：递推前要先准备足够的初始项，并注意大数范围使用 long long。"
        }
      ],
      "050": [
        {
          "variant": 1,
          "path": "solutions/359/050.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int M, N; \r\n    while(cin >> M >> N)\r\n    {\r\n        if(M <= 0 && N <= 0)\r\n        {\r\n            break;\r\n        }\r\n        if(M > N)\r\n        {\r\n            int temp = M;\r\n            M = N;\r\n            N = temp;\r\n        }\r\n        int sum = 0;\r\n        for(int i = M; i <= N; i++)\r\n        {\r\n            cout << i;\r\n            if(i < N) cout << \" \";  // 最后一个数字后面不加空格\r\n            sum += i;\r\n        }\r\n        cout << \" Sum=\" << sum << endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "051": [
        {
          "variant": 1,
          "path": "solutions/359/051.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()//测试案例存在问题\r\n{\r\n    int L;\r\n    char op;\r\n    cin >> L >> op;\r\n    double a[12][12];\r\n    for(int i = 0; i < 12; i++)\r\n    {\r\n        for(int j = 0; j < 12; j++)\r\n        {\r\n            cin >> a[i][j];\r\n        }\r\n    }\r\n    double sum = 0;\r\n    for(int j = 0; j < 12; j++)\r\n    {\r\n        sum += a[L][j];\r\n    }\r\n    cout << fixed << setprecision(1);\r\n    if(op == 'S')\r\n    {\r\n        cout << sum << endl;\r\n    }\r\n    else if(op == 'M')\r\n    {\r\n        cout << sum / 12 << endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "052": [
        {
          "variant": 1,
          "path": "solutions/359/052.cpp",
          "language": "cpp",
          "code": "// 思路：读取十二阶矩阵时只累计指定列，再根据模式输出该列的和或平均值。\r\n#include <iostream>\r\n#include <iomanip>\r\nusing namespace std;\r\nint main() {\r\n    int C;\r\n    char mode;\r\n    cin >> C >> mode;\r\n    double sum = 0.0;\r\n    double val;\r\n    for (int i = 0; i < 12; i++) {\r\n        for (int j = 0; j < 12; j++) {\r\n            cin >> val;\r\n            if (j == C) { // 列下标等于 C 时才把当前元素加入统计。\r\n                sum += val;\r\n            }\r\n        }\r\n    }    \r\n    if (mode == 'S') {\r\n        cout << fixed << setprecision(1) << sum << endl;\r\n    } else if(mode == 'M') {\r\n        cout << fixed << setprecision(1) << sum / 12.0 << endl;\r\n    }\r\n       return 0;\r\n}\r\n// 总结：固定十二个元素的列平均值应使用总和除以十二。"
        }
      ],
      "053": [
        {
          "variant": 1,
          "path": "solutions/359/053.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\n#include <iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\n\r\nint main() {\r\n    LL N;\r\n    cin >> N;\r\n    if (N >= 6) cout << 6 << endl;\r\n    if (N >= 28) cout << 28 << endl;\r\n    if (N >= 496) cout << 496 << endl;\r\n    if (N >= 8128) cout << 8128 << endl;\r\n    if (N >= 33550336) cout << 33550336 << endl;\r\n    if (N >= 8589869056LL) cout << 8589869056LL << endl;\r\n    if (N >= 137438691328LL) cout << 137438691328LL << endl;\r\n    if (N >= 2305843008139952128LL) cout << 2305843008139952128LL << endl;\r\n    \r\n    return 0;\r\n}\r\n//主包过不了，以后再看……\r\n"
        },
        {
          "variant": 2,
          "path": "solutions/359/053-2.cpp",
          "language": "cpp",
          "code": "//该代码会超出时长，无法通过……\r\n#include <iostream>\r\n#include <cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\nbool isPrime(LL n)\r\n{\r\n    if(n<2)return false;\r\n    else if(n==2)return true;\r\n    else if(n%2==0)return false;\r\n    double m=sqrt(n);\r\n    for(int i=3;i<=m;i+=2)\r\n    {\r\n        if(n%i==0)return false;\r\n    }\r\n    return true;\r\n\r\n}\r\n\r\nint main() \r\n{\r\n    LL N;\r\n    cin >> N;\r\n    for (LL i = 2; i <= N; i+=2) {\r\n        if(isPrime(i))continue;\r\n        LL sum = 1;\r\n        LL m=sqrt(i);\r\n        for (int j = 2; j <= m; j++) {\r\n            if (i % j == 0) {\r\n                sum += j;   \r\n                if(j!=i/j)\r\n                sum+=i/j;\r\n            }\r\n        }\r\n        if (sum == i) {\r\n            cout << i << endl;\r\n        }\r\n    \r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "054": [
        {
          "variant": 1,
          "path": "solutions/359/054.cpp",
          "language": "cpp",
          "code": "// 思路：用试除法判断每个数是否为质数，并输出二到 N 之间的全部质数。\r\n#include<iostream>\r\n#include<cmath>\r\nusing namespace std;\r\ntypedef long long LL;\r\nbool isPrime(LL n)\r\n{\r\n    if(n==1)return false;\r\n    else if(n==2)return true;\r\n    else if(n%2==0&&n!=2)return false;\r\n    for(LL i=3;i*i<=n;i++) // 只需尝试到平方根，若存在因子必有一个不超过平方根。\r\n    {\r\n        if(n%i==0)return false;\r\n    }\r\n    return true;\r\n}\r\n int main()\r\n {\r\n    LL N;\r\n    cin>>N;\r\n    for(LL i=2;i<=N;i++)\r\n    {\r\n        if(isPrime(i))\r\n            cout<<i<<endl;\r\n    }\r\n }\r\n// 总结：质数判断要单独排除一和偶数，并控制试除上界避免无效枚举。\r\n"
        }
      ],
      "055": [
        {
          "variant": 1,
          "path": "solutions/359/055.cpp",
          "language": "cpp",
          "code": "// 思路：利用行列下标关系筛选主对角线上方且副对角线上方的矩阵区域。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11&&i<j)sum+=a[i][j]; // 两个条件共同限定矩阵上方的中央三角区域。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}\r\n// 总结：矩阵区域题应把几何位置转换为 i、j 以及 i+j 的不等式。"
        }
      ],
      "056": [
        {
          "variant": 1,
          "path": "solutions/359/056.cpp",
          "language": "cpp",
          "code": "// 思路：利用行列下标关系筛选主对角线下方且副对角线下方的矩阵区域。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11&&i>j)sum+=a[i][j]; // 两个条件共同限定矩阵下方的中央三角区域。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}\r\n// 总结：对角线区域的边界不参与统计，条件必须使用严格不等号。"
        }
      ],
      "057": [
        {
          "variant": 1,
          "path": "solutions/359/057.cpp",
          "language": "cpp",
          "code": "// 思路：筛选主对角线下方且副对角线上方的元素，得到矩阵左侧区域。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11&&i>j)sum+=a[i][j]; // i 大于 j 且下标和小于十一时元素位于左侧三角区。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}\r\n// 总结：组合两条对角线条件可以准确描述矩阵的四个侧向区域。"
        }
      ],
      "058": [
        {
          "variant": 1,
          "path": "solutions/359/058.cpp",
          "language": "cpp",
          "code": "// 思路：筛选主对角线上方且副对角线下方的元素，得到矩阵右侧区域。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11&&i<j)sum+=a[i][j]; // i 小于 j 且下标和大于十一时元素位于右侧三角区。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/30<<endl;\r\n}\r\n// 总结：矩阵区域平均值的除数应对应实际包含的三十个元素。"
        }
      ],
      "059": [
        {
          "variant": 1,
          "path": "solutions/359/059.cpp",
          "language": "cpp",
          "code": "// 思路：读取矩阵时累计主对角线上方的全部元素，再按模式求和或平均。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i<j)sum+=a[i][j]; // 列下标大于行下标表示元素位于主对角线上方。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}\r\n// 总结：十二阶矩阵主对角线上方共有六十六个元素。"
        }
      ],
      "060": [
        {
          "variant": 1,
          "path": "solutions/359/060.cpp",
          "language": "cpp",
          "code": "// 思路：读取矩阵时累计副对角线上方的全部元素，再按模式输出结果。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j<11)sum+=a[i][j]; // 行列下标和小于十一表示位于副对角线上方。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}\r\n// 总结：副对角线区域判断取决于行列下标之和，而不是单独比较行列。"
        }
      ],
      "061": [
        {
          "variant": 1,
          "path": "solutions/359/061.cpp",
          "language": "cpp",
          "code": "// 思路：读取矩阵时累计副对角线下方的全部元素，再计算和或平均值。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i+j>11)sum+=a[i][j]; // 行列下标和大于十一表示位于副对角线下方。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}\r\n// 总结：严格大于可以排除副对角线自身的十二个元素。"
        }
      ],
      "062": [
        {
          "variant": 1,
          "path": "solutions/359/062.cpp",
          "language": "cpp",
          "code": "// 思路：读取矩阵时累计主对角线下方的全部元素，并按指定模式输出。\r\n#include<iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char type;\r\n    cin>>type;\r\n    double a[13][13],sum=0;\r\n    for(int i=0;i<12;i++)\r\n    {\r\n        for(int j=0;j<12;j++)\r\n        {\r\n            cin>>a[i][j];\r\n            if(i>j)sum+=a[i][j]; // 行下标大于列下标表示元素位于主对角线下方。\r\n        }\r\n    }\r\n\r\n    if(type=='S')cout<<fixed<<setprecision(1)<<sum<<endl;\r\n    else if(type=='M')cout<<fixed<<setprecision(1)<<sum/66<<endl;\r\n}\r\n// 总结：主对角线两侧元素数量相同，十二阶矩阵每侧都是六十六个。"
        }
      ],
      "063": [
        {
          "variant": 1,
          "path": "solutions/359/063.cpp",
          "language": "cpp",
          "code": "// 思路：每个位置取到四条边距离的最小值，从而生成由外向内递增的同心方阵。\r\n#include <iostream>\r\n#include<iomanip>\r\nusing namespace std;\r\nint a[1001][1001];\r\nint N;\r\n\r\nint min(int a,int b,int c,int d)\r\n{\r\n    int m1=a>b?b:a;\r\n    int m2=c>d?d:c;\r\n    return m1>m2?m2:m1;\r\n}\r\n\r\nvoid handle(int N)\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            a[i][j]=min(i+1,j+1,N-i,N-j); // 四个方向边界距离的最小值决定当前位置所在的层数。\r\n        }\r\n    }\r\n}\r\n\r\nint main() {\r\n    cin>>N;\r\n    while(N!=0)\r\n    {\r\n        handle(N);\r\n        for(int i=0;i<N;i++)\r\n        {\r\n            {\r\n                for(int j=0;j<N;j++)\r\n                cout<<setw(3)<<a[i][j];\r\n            }\r\n            cout<<endl;\r\n        }\r\n        cout<<endl;\r\n        cin>>N;\r\n    }\r\n    return 0;\r\n}\r\n// 总结：同心矩阵可以转化为点到四条边的最短距离问题。\r\n"
        }
      ],
      "064": [
        {
          "variant": 1,
          "path": "solutions/359/064.cpp",
          "language": "cpp",
          "code": "// 思路：根据行列下标差的绝对值生成主对角线为一、向两侧递增的矩阵。\r\n#include <iostream>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\nint a[1001][1001];\r\nint N;\r\nint main() {\r\n    cin>>N;\r\n    while(N!=0)\r\n    {\r\n        for(int i=0;i<N;i++)\r\n        {\r\n            {\r\n                for(int j=0;j<N;j++)\r\n                {\r\n                    a[i][j]=int(abs(i-j)+1); // 行列距离为零时值为一，距离每增加一数值也增加一。\r\n                    cout<<setw(3)<<a[i][j];\r\n                }\r\n            }\r\n            cout<<endl;\r\n        }\r\n        if(N!=0)cout<<endl;\r\n        cin>>N;\r\n        \r\n    }\r\n    return 0;\r\n}\r\n// 总结：只依赖下标的矩阵无需预处理，可以在输出时直接计算。\r\n"
        }
      ],
      "065": [
        {
          "variant": 1,
          "path": "solutions/359/065.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cmath>  // 用于 pow\r\nusing namespace std;\r\n\r\nint main() {\r\n    int N;\r\n    while(cin >> N && N != 0) {\r\n        for(int i = 0; i < N; i++) {\r\n            for(int j = 0; j < N; j++) {\r\n                cout << (int)pow(2, i + j)<< \" \"; \r\n            }\r\n            cout << endl;\r\n        }\r\n        cout << endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "066": [
        {
          "variant": 1,
          "path": "solutions/359/066.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n\r\n//参考AcWing代码\r\nconst int N=200;\r\nint arr[N][N];\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    cin>>n>>m;\r\n    int dx[]={0,1,0,-1};\r\n    int dy[]={1,0,-1,0};\r\n    int x=0,y=0,d=0;\r\n    for(int i=1;i<=n*m;i++)\r\n    {\r\n        arr[x][y]=i;\r\n        int a=x+dx[d],b=y+dy[d];\r\n        if(a>=n||a<0||b<0||b>=m||arr[a][b])\r\n        {\r\n            d=(d+1)%4;//向右为1，向下为2，向左为3，向上为4\r\n            a=x+dx[d],b=y+dy[d];\r\n        }\r\n        x=a,y=b;\r\n    }\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        for(int j=0;j<m;j++)\r\n        {\r\n            cout<<arr[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "067": [
        {
          "variant": 1,
          "path": "solutions/359/067.cpp",
          "language": "cpp",
          "code": "// 思路：读取整行字符串并逐字符计数，直到遇到字符串结尾。\r\n#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string a;\r\n    int i;\r\n    getline(cin,a);\r\n    for(i=0;a[i]!='\\0';i++) // 循环次数正好等于字符串中的字符数量。\r\n    {\r\n    \r\n    }\r\n    cout<<i<<endl;\r\n}\r\n// 总结：使用 getline 可以把空格一并读入，因此统计的是整行长度。"
        }
      ],
      "068": [
        {
          "variant": 1,
          "path": "solutions/359/068.cpp",
          "language": "cpp",
          "code": "// 思路：读取整行字符串，按原顺序输出每个字符并在字符后添加空格。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        cout<<a[i]<<\" \"; // 逐个访问字符可以保留原字符串中的顺序。\r\n    }\r\n}\r\n// 总结：逐字符处理整行文本时应使用 getline，避免输入在空格处提前结束。"
        }
      ],
      "069": [
        {
          "variant": 1,
          "path": "solutions/359/069.cpp",
          "language": "cpp",
          "code": "#include<iostream>//输入样例有误\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    string a;\r\n    char b;\r\n    cin>>a;\r\n    cin>>b;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]==b)a[i]='#';\r\n    }\r\n    cout<<a<<endl;\r\n}"
        }
      ],
      "070": [
        {
          "variant": 1,
          "path": "solutions/359/070.cpp",
          "language": "cpp",
          "code": "// 思路：把每个字符与后一个字符的编码相加，最后一个字符与首字符相加形成环。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\n\r\nint main()\r\n{\r\n    string a;\r\n    char b[200];\r\n    getline(cin,a);  \r\n    int i;\r\n    for(i=0;a[i+1]!='\\0';i++)\r\n    {\r\n        b[i]=a[i]+a[i+1]; // 相邻两个字符相加得到结果字符串当前位置。\r\n    }\r\n    b[i]=a[0]+a[i];\r\n    b[i+1]='\\0';\r\n    cout<<b;\r\n}\r\n// 总结：环形相邻处理要单独连接最后一个元素和第一个元素。"
        }
      ],
      "071": [
        {
          "variant": 1,
          "path": "solutions/359/071.cpp",
          "language": "cpp",
          "code": "// 思路：遍历整行字符串，统计字符编码位于零到九之间的数字字符。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\n\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);  \r\n    int count=0;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='0'&&a[i]<='9') // 只有处于数字字符范围内的字符才增加计数。\r\n            count++;\r\n    }\r\n    cout<<count<<endl;\r\n}\r\n// 总结：判断字符是否为数字应比较字符范围，而不是直接使用数值零到九。"
        }
      ],
      "072": [
        {
          "variant": 1,
          "path": "solutions/359/072.cpp",
          "language": "cpp",
          "code": "// 思路：先处理平局，再列出玩家一获胜的三种循环关系，其余情况归玩家二。\r\n#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string a, b;\r\n    cin >> a >> b;\r\n    \r\n    if(a == b)\r\n        cout << \"Tie\" << endl;\r\n    else if((a == \"Rock\" && b == \"Scissors\") || // 石头、剪刀、布的胜负关系用三个或条件完整描述。\r\n            (a == \"Scissors\" && b == \"Paper\") ||\r\n            (a == \"Paper\" && b == \"Rock\"))\r\n        cout << \"Player1\" << endl;\r\n    else\r\n        cout << \"Player2\" << endl;\r\n    \r\n    return 0;\r\n}\r\n// 总结：循环胜负关系适合列出一方获胜组合，再用默认分支覆盖另一方。"
        }
      ],
      "073": [
        {
          "variant": 1,
          "path": "solutions/359/073.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;//数字不加密！\r\n#include<string>\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]>='a'&&a[i]<='y'||a[i]>='A'&&a[i]<='Y'||a[i]>='0'&&a[i]<='8')\r\n            a[i]+=1;\r\n        else if(a[i]=='Z')a[i]='A';\r\n        else if(a[i]=='z')a[i]='a';\r\n        else if(a[i]=='9')a[i]='0';\r\n    }\r\n    cout<<a<<endl;\r\n    return 0;\r\n}"
        }
      ],
      "074": [
        {
          "variant": 1,
          "path": "solutions/359/074.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <string>\r\n#include <sstream>\r\nusing namespace std;//\r\n\r\nint main()\r\n{\r\n    string line, A, B;\r\n    getline(cin, line);\r\n    cin >> A >> B;\r\n\r\n    stringstream ss(line);\r\n    string word, result;\r\n    bool first = true;\r\n    while (ss >> word) {\r\n        if (!first) result += \" \";\r\n        if (word == A)\r\n            result += B;\r\n        else\r\n            result += word;\r\n        first = false;\r\n    }\r\n\r\n    cout << result << endl;\r\n    return 0;\r\n}\r\n"
        }
      ],
      "075": [
        {
          "variant": 1,
          "path": "solutions/359/075.cpp",
          "language": "cpp",
          "code": "// 思路：手动按空格和句号切分单词，记录每个单词长度并输出最长单词。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\nint main()\r\n{\r\n    char a[501][20];\r\n    string str;\r\n    int count=0,b[501]={0};\r\n    getline(cin,str);\r\n    for(int i=0;str[i]!='\\0';i++)\r\n    {\r\n        for(int j=0;;j++,i++)\r\n        {\r\n            if(str[i]==' '||str[i]=='.'){\r\n                b[count++]=j;\r\n                str[i]='\\0';\r\n                break;\r\n            }\r\n            a[count][j]=str[i];\r\n        }\r\n    }\r\n    int max=-1,m=0;\r\n    for(int i=0;b[i]!=0;i++)\r\n    {\r\n        if(b[i]>max){ // 只在长度严格增大时更新，从而保留第一个最长单词。\r\n            max=b[i];\r\n            m=i;\r\n        }\r\n    }\r\n    cout<<a[m]<<endl;\r\n}\r\n// 总结：字符串切分时既要记录内容，也要正确处理最后的句号终止符。\r\n"
        }
      ],
      "076": [
        {
          "variant": 1,
          "path": "solutions/359/076.cpp",
          "language": "cpp",
          "code": "// 思路：先找到原字符串中最大字符的位置，再扩容并把子串插入该字符之后。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    string str,substr;\r\n    getline(cin,str);\r\n    getline(cin,substr);\r\n    char max='A' ;\r\n    int m=0,n=substr.length();\r\n    int len=str.length();\r\n    for(int i=0;str[i]!='\\0';i++)\r\n    {\r\n        if(str[i]>max) // 线性扫描记录字典序最大字符及其位置。\r\n        {\r\n            max=str[i];\r\n            m=i;\r\n        }\r\n    } \\\r\n    str.resize(len+n); \r\n    for(int i=len;i>m;i--)\r\n    {\r\n        str[i+n]=str[i];\r\n    }\r\n    for(int i=m+1,j=0;substr[j]!='\\0';i++,j++)\r\n    {\r\n        str[i]=substr[j];\r\n    }\r\n    cout<<str;\r\n}\r\n// 总结：原地插入前应先扩容，并从后向前移动尾部以避免覆盖数据。"
        }
      ],
      "077": [
        {
          "variant": 1,
          "path": "solutions/359/077.cpp",
          "language": "cpp",
          "code": "// 思路：先统计每个小写字母出现次数，再按原顺序寻找第一个只出现一次的字符。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    string a;\r\n    int c[26]={0};\r\n    getline(cin,a);\r\n    char m;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        c[a[i]-'a']++;\r\n        \r\n    }\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(c[a[i]-'a']==1) // 第二次遍历保证找到的是原字符串中最靠前的不重复字符。\r\n        {\r\n            cout<<a[i]<<endl;\r\n            break;\r\n        } \r\n        if(a[i+1]=='\\0')\r\n        {\r\n            cout<<\"no\"<<endl;\r\n        }\r\n    }\r\n}\r\n// 总结：频次数组负责判断唯一性，按原串扫描负责保证位置顺序。"
        }
      ],
      "078": [
        {
          "variant": 1,
          "path": "solutions/359/078.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <string>\r\n#include <vector>\r\nusing namespace std;\r\n\r\n// int main() {\r\n//     vector<string> a;\r\n//     string s;\r\n//     while (getline(cin, s)) {\r\n//         a.push_back(s);\r\n//     }\r\n//     if (a.size() >= 3) {\r\n//         cout << (a[1].find(a[2]) != string::npos ? \"yes\" : \"no\") << endl;\r\n//     }\r\n//     return 0;\r\n// }\r\n\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n#include<cstring>\r\nint main()\r\n{\r\n    int a;\r\n    bool found=false;\r\n    string str1,str2;\r\n    getline(cin,str1);\r\n    getline(cin,str2);\r\n    int len1=str1.length(),len2=str2.length();\r\n    for(int i=0;i<len1-len2+1;i++)\r\n    {\r\n        bool res=true;\r\n        for(int j=0,k=i;str2[j]!='\\0';j++,k++)\r\n        {\r\n            if(str1[k]!=str2[j])\r\n            {\r\n                res=false;\r\n                break;\r\n            }\r\n\r\n        }\r\n        if(res==true)\r\n        {\r\n            found=true;\r\n            break;\r\n        }\r\n    }\r\n    if(found==true)\r\n    {\r\n        cout<<\"yes\";\r\n    }\r\n    else if(found==false)\r\n    {\r\n        cout<<\"no\";\r\n    }\r\n\r\n}"
        }
      ],
      "079": [
        {
          "variant": 1,
          "path": "solutions/359/079.cpp",
          "language": "cpp",
          "code": "// 思路：从短到长枚举可能的周期长度，验证整个字符串能否由该前缀重复组成。\r\n#include<iostream>\r\n#include<string>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    string s;\r\n    while(cin >> s && s != \".\")\r\n    {\r\n        int n = s.length();\r\n        for(int len = 1; len <= n; len++)\r\n        {\r\n            if(n % len == 0)\r\n            {\r\n                bool ok = true;\r\n                for(int i = len; i < n; i++)\r\n                {\r\n                    if(s[i] != s[i % len]) // 用下标对周期长度取模，比较当前位置与对应周期字符。\r\n                    {\r\n                        ok = false;\r\n                        break;\r\n                    }\r\n                }\r\n                if(ok)\r\n                {\r\n                    cout << n / len << endl;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n// 总结：第一个通过验证的长度就是最小周期，字符串长度除以它即重复次数。"
        }
      ],
      "080": [
        {
          "variant": 1,
          "path": "solutions/359/080.cpp",
          "language": "cpp",
          "code": "// 思路：在主串中寻找子串 b 的首次结束位置和子串 c 的最后开始位置，计算两者间距。\r\n#include<iostream>\r\n#include<string>\r\n#include<cstring>\r\nusing namespace std;\r\nint main()\r\n{\r\n    char a[1000]={0},b[100]={0},c[100]={0};\r\n    char s;\r\n    cin>>s;\r\n    for(int i=0;s!=',';i++)\r\n    {\r\n        a[i]=s;\r\n        cin>>s;\r\n    }\r\n\r\n    cin>>s;\r\n    for(int i=0;s!=',';i++)\r\n    {\r\n        b[i]=s;\r\n        cin>>s;\r\n    }\r\n    cin>>s;\r\n    for(int i=0;s!=','&&s!='\\n'&&cin;i++)\r\n    {\r\n        c[i]=s;\r\n        cin>>s;\r\n    }\r\n\r\n    int m=-1,n=-1;\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        bool flag=false;\r\n        int found=1;\r\n        for(int j=i,k=0;b[k]!='\\0';k++,j++)\r\n        {\r\n            if(a[j]!=b[k])\r\n            {\r\n                found=0;break;\r\n            }\r\n        }\r\n        if(found)\r\n        {\r\n            flag=true;\r\n            m=i+strlen(b); // 找到第一个 b 后记录它末尾后一位，作为中间区间起点。\r\n            break;\r\n        }\r\n    }\r\n    for(int i=strlen(a);i>=m;i--)\r\n    {\r\n        bool flag=false;\r\n        int found=1;\r\n        for(int j=i,k=0;c[k]!='\\0';k++,j++)\r\n        {\r\n            if(a[j]!=c[k])\r\n            {\r\n                found=0;break;\r\n            }\r\n        }\r\n        if(found)\r\n        {\r\n            flag=true;\r\n            n=i;\r\n            break;\r\n        }\r\n    }\r\n    if(m==-1||n==-1){\r\n        cout<<-1;\r\n        return 0;\r\n    }\r\n    else {\r\n        cout<<n-m;\r\n    }\r\n\r\n}\r\n// 总结：双子串定位要明确使用首次还是末次出现，任一不存在都应输出负一。"
        }
      ],
      "081": [
        {
          "variant": 1,
          "path": "solutions/359/081.cpp",
          "language": "cpp",
          "code": "// 思路：使用递归关系 n! 等于 n 乘以 (n-1)! 计算阶乘。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint jiecheng(int n)\r\n{\r\n    int res=1;\r\n    if(n==1)return 1;\r\n    else res*=n*jiecheng(n-1); // 当前 n 与前一阶阶乘相乘形成递归结果。\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<jiecheng(n);\r\n}\r\n// 总结：递归函数必须设置明确的终止条件，避免无限调用。"
        }
      ],
      "082": [
        {
          "variant": 1,
          "path": "solutions/359/082.cpp",
          "language": "cpp",
          "code": "// 思路：封装一个比较函数，返回两个整数中较大的一个。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint max(int m,int n)\r\n{\r\n    if(m>n)return m; // m 更大时直接返回 m，否则返回 n。\r\n    else return n;\r\n}\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m>>n;\r\n    cout<<max(m,n);\r\n}\r\n// 总结：简单函数题要保证所有条件分支都有返回值。"
        }
      ],
      "083": [
        {
          "variant": 1,
          "path": "solutions/359/083.cpp",
          "language": "cpp",
          "code": "// 思路：根据整数符号决定直接返回原值还是返回相反数。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint abs(int n)\r\n{\r\n    if(n>=0)return n; // 非负数的绝对值就是它本身。\r\n    else return -n;\r\n}\r\nint main()\r\n{\r\n    int m;\r\n    cin>>m;\r\n    cout<<abs(m);\r\n}\r\n// 总结：实现绝对值时零应归入非负分支。"
        }
      ],
      "084": [
        {
          "variant": 1,
          "path": "solutions/359/084.cpp",
          "language": "cpp",
          "code": "// 思路：使用标准交换函数互换两个整数，再按交换后的顺序输出。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int m,n;\r\n    cin>>m>>n;\r\n    swap(m,n); // swap 同时完成两个变量值的互换。\r\n    cout<<m<<\" \"<<n;\r\n}\r\n// 总结：交换变量无需手写临时变量时可以直接使用标准库函数。"
        }
      ],
      "085": [
        {
          "variant": 1,
          "path": "solutions/359/085.cpp",
          "language": "cpp",
          "code": "// 思路：反复用较大数除以较小数取余，直到余数为零，得到最大公约数。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint main()\r\n{\r\n    int a,b,n;\r\n    cin>>a>>b;\r\n    if(b>a)swap(a,b);\r\n    n=a%b;\r\n    while(n!=0) // 余数不为零时继续把问题转换为规模更小的一组数。\r\n    {\r\n        a=n;\r\n        swap(a,b);\r\n        n=a%b;\r\n    }\r\n    cout<<b;\r\n}\r\n// 总结：欧几里得算法利用 gcd(a,b)=gcd(b,a%b) 快速缩小数据。"
        }
      ],
      "086": [
        {
          "variant": 1,
          "path": "solutions/359/086.cpp",
          "language": "cpp",
          "code": "// 思路：读取两个数组后，用第一个数组的前 m 项覆盖第二个数组对应位置。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<cstring>\r\nint main()\r\n{\r\n    int n1,n2,m;\r\n    cin>>n1>>n2>>m;\r\n    int a[200]={0},b[200]={0};\r\n    for(int i=0;i<n1;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<n2;i++)\r\n    {\r\n        cin>>b[i];\r\n    }\r\n    for(int i=0;i<m;i++)\r\n    {\r\n        b[i]=a[i]; // 逐项复制前 m 个元素完成目标数组前缀替换。\r\n    }\r\n    for(int i=0;i<n2;i++)\r\n    {\r\n        cout<<b[i]<<\" \";\r\n    }\r\n}\r\n// 总结：数组复制要确保复制长度不超过源数组和目标数组的有效范围。"
        }
      ],
      "087": [
        {
          "variant": 1,
          "path": "solutions/359/087.cpp",
          "language": "cpp",
          "code": "// 思路：先逆序输出数组前 size 个元素，再顺序输出剩余元素。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n,size,a[2000];\r\n    cin>>n>>size;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=size-1;i>=0;i--) // 从 size-1 递减到零即可翻转指定前缀。\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n    for(int i=size;i<n;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}\r\n// 总结：局部逆序只改变指定区间，区间之外的数据仍按原顺序处理。"
        }
      ],
      "088": [
        {
          "variant": 1,
          "path": "solutions/359/088.cpp",
          "language": "cpp",
          "code": "// 思路：读取完整数组后，只输出从开头起的 size 个元素。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n,size,a[2000];\r\n    cin>>n>>size;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    \r\n    for(int i=0;i<size;i++) // 循环上界限制了输出的数组前缀长度。\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}\r\n// 总结：输出数组子区间时要把 size 理解为数量而不是最后一个下标。"
        }
      ],
      "089": [
        {
          "variant": 1,
          "path": "solutions/359/089.cpp",
          "language": "cpp",
          "code": "// 思路：按行列顺序读入二维数组，再保持相同布局逐行输出。\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int a[200][200],row,col;\r\n    cin>>row>>col;\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            cin>>a[i][j];\r\n        }\r\n    }\r\n    for(int i=0;i<row;i++)\r\n    {\r\n        for(int j=0;j<col;j++)\r\n        {\r\n            if(j!=0)cout<<\" \";\r\n            cout<<a[i][j]; // 双层循环按照行优先顺序访问每个矩阵元素。\r\n        }\r\n        cout<<endl;\r\n    }\r\n    \r\n \r\n \r\n}\r\n// 总结：矩阵格式输出应控制行内空格，并在每一行结束后换行。"
        }
      ],
      "090": [
        {
          "variant": 1,
          "path": "solutions/359/090.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n#include<algorithm>\r\nint a[200000];\r\nint main()\r\n{\r\n    int n,l,r;\r\n    cin>>n>>l>>r;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    sort(a+l,a+r+1);//左闭右开\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cout<<a[i]<<\" \";\r\n    }\r\n}\r\n\r\n    "
        }
      ],
      "091": [
        {
          "variant": 1,
          "path": "solutions/359/091.cpp",
          "language": "cpp",
          "code": "// 思路：利用 n! = n×(n-1)! 的递归定义计算输入整数的阶乘。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint jiecheng(int n)\r\n{\r\n    int res=1;\r\n    if(n==1)return 1;\r\n    else res*=n*jiecheng(n-1); // 递归调用先求较小阶乘，再乘以当前 n。\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<jiecheng(n);\r\n}\r\n// 总结：阶乘递归的边界是 n 等于一，输入范围还需避免整数溢出。"
        }
      ],
      "092": [
        {
          "variant": 1,
          "path": "solutions/359/092.cpp",
          "language": "cpp",
          "code": "// 思路：按斐波那契递推定义递归求解第 n 项，并把前两项设为一。\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint feibo(int n)\r\n{\r\n    int a=1,b=1,res=0;\r\n    if(n==1||n==2)return 1;\r\n    res+=feibo(n-1)+feibo(n-2); // 第 n 项由前两项递归结果相加得到。\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<feibo(n);\r\n}\r\n// 总结：朴素递归表达直观但会重复计算，只适合较小的 n。"
        }
      ],
      "093": [
        {
          "variant": 1,
          "path": "solutions/359/093.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nint dengjie(int n)\r\n{\r\n    if(n==1)return 1;//n=1只有一种走法\r\n    if(n==2)return 2;\r\n    int res=0;//总的结果数，用于计数\r\n    res=dengjie(n-1)+dengjie(n-2);\r\n    return res;//返回res的值\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;//输入n\r\n    cout<<dengjie(n); //输出res的值\r\n}"
        }
      ],
      "094": [
        {
          "variant": 1,
          "path": "solutions/359/094.cpp",
          "language": "cpp",
          "code": "// 思路：从左上角递归尝试向右和向下两种移动，统计到达目标点的路径数。\r\n#include<iostream>\r\nusing namespace std;\r\nint dx[]={0,1},dy[]={1,0};\r\n\r\nint n,m;\r\nint xunlu(int i,int j)\r\n{\r\n    if(i==n&&j==m)return 1;\r\n    if(i>n||j>m)return 0;\r\n    int res=0;\r\n    for(int k=0;k<2;k++)\r\n    {\r\n        i+=dx[k],j+=dy[k];\r\n        res+=xunlu(i,j); // 每个合法方向的递归路径数量都累加到当前状态。\r\n        i-=dx[k],j-=dy[k];\r\n    }\r\n    return res;\r\n}\r\nint main()\r\n{\r\n\r\n    cin>>n>>m;\r\n    cout<<xunlu(0,0);\r\n\r\n\r\n}\r\n// 总结：搜索后恢复坐标可以避免一次分支的移动影响下一分支。"
        }
      ],
      "095": [
        {
          "variant": 1,
          "path": "solutions/359/095.cpp",
          "language": "cpp",
          "code": "// 思路：使用深度优先搜索逐位选择未使用的数字，枚举一到 n 的所有排列。\r\n#include<iostream>\r\nusing namespace std;\r\nint n;\r\nint used[10];\r\nbool path[10];\r\nvoid dfs(int u)\r\n{\r\n\r\n    if(u==n){\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(i!=0)cout<<\" \";\r\n            cout<<used[i];\r\n        }\r\n        cout<<endl;\r\n        return ;\r\n    }\r\n    else{\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(!path[i]){\r\n                used[u]=i;\r\n                path[i]=true; // 选择数字后标记已使用，防止同一排列中重复选取。\r\n                dfs(u+1);\r\n                path[i]=false;\r\n                used[u]=0;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    dfs(0);\r\n}\r\n// 总结：回溯必须在递归返回后撤销标记，才能继续尝试其他排列。"
        }
      ],
      "096": [
        {
          "variant": 1,
          "path": "solutions/359/096.cpp",
          "language": "cpp",
          "code": "// 思路：逐字符扫描输入字符串，把空格替换为百分号二零，其余字符原样输出。\r\n#include<iostream>\r\nusing namespace std;\r\n#include<string>\r\n\r\nint main()\r\n{\r\n    string a;\r\n    getline(cin,a);\r\n    for(int i=0;a[i]!='\\0';i++)\r\n    {\r\n        if(a[i]==' ')\r\n            cout<<\"%20\"; // 遇到空格时输出编码后的三字符替代文本。\r\n        else cout<<a[i];\r\n    }\r\n}\r\n// 总结：边扫描边输出可以避免额外构造新字符串。"
        }
      ],
      "097": [
        {
          "variant": 1,
          "path": "solutions/359/097.cpp",
          "language": "cpp",
          "code": "// 思路：用动态数组保存斐波那契数列，从两个一开始递推到所需项。\r\n#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    vector<int>a;\r\n    a.push_back(1);\r\n    a.push_back(1);\r\n    int n;\r\n    cin>>n;\r\n    for(int i=0,j=1;i<n;i++,j++)\r\n    {\r\n        a.push_back(a[i]+a[j]); // 每次把相邻前两项之和追加为下一项。\r\n    }\r\n    cout<<a[n-1];\r\n\r\n}\r\n// 总结：递推数列要正确对应题目采用的一基项号和数组零基下标。"
        }
      ],
      "098": [
        {
          "variant": 1,
          "path": "solutions/359/098.cpp",
          "language": "cpp",
          "code": "// 思路：把终止标记前输入的整数依次存入数组，再从后向前输出。\r\n#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int n;\r\n    vector<int>a;\r\n    cin>>n;\r\n    while(n!=-1)\r\n    {\r\n        a.push_back(n);\r\n        cin>>n;\r\n    }\r\n    for(int i=a.size()-1;i>=0;i--) // 倒序遍历容器即可反向输出已保存的数据。\r\n    {\r\n        cout<<a[i]<<endl;\r\n    }\r\n\r\n}\r\n// 总结：哨兵值只负责结束输入，不应加入需要输出的序列。"
        }
      ],
      "099": [
        {
          "variant": 1,
          "path": "solutions/359/099.cpp",
          "language": "cpp",
          "code": "// 思路：用输入栈保存新元素、输出栈提供队首元素，从而模拟先进先出的队列。\r\n#include<iostream>\r\n#include<stack>\r\n#include<string>\r\nusing namespace std;\r\nint main()\r\n{\r\n    stack<int>in,out;\r\n    int n;\r\n    string a;\r\n    while(cin>>a)\r\n    {\r\n        if(a==\"push\")\r\n        {\r\n            cin>>n;\r\n            in.push(n);\r\n        }\r\n        else if(a==\"pop\")\r\n        {\r\n            if(out.empty())\r\n            {\r\n                while(!in.empty()) // 输出栈为空时把输入栈全部倒入，使最早元素移动到栈顶。\r\n                {\r\n                    out.push(in.top());\r\n                    in.pop();\r\n                }\r\n                \r\n            }\r\n            if(!out.empty())\r\n            {\r\n                cout<<out.top()<<endl;\r\n                out.pop();\r\n            }\r\n        }\r\n        else if(a==\"empty\")\r\n        {\r\n            if(out.empty()&&in.empty())\r\n            {\r\n                cout<<\"yes\"<<endl;\r\n            }\r\n            else cout<<\"no\"<<endl;\r\n        }\r\n    }\r\n}\r\n// 总结：双栈队列只在输出栈为空时搬运，每个元素最多搬运一次。"
        }
      ]
    },
    "362": {
      "JD120": [
        {
          "variant": 1,
          "path": "solutions/362/JD120.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n\r\nvoid move(char start,char target)\r\n{\r\n    cout<<start<<\"->\"<<target;\r\n    return ;\r\n}\r\n\r\nvoid Hanoi(int n,char start,char other,char target)\r\n{\r\n    if(n==1){\r\n        move(start,target);\r\n        return;\r\n    }\r\n    Hanoi(n-1,start,target,other);\r\n    move(start,target);\r\n    Hanoi(n-1,other,start,target);\r\n    return ;\r\n\r\n}\r\n\r\nint mian()\r\n{\r\n\r\n    int n;\r\n    cin>>n;\r\n    Hanoi(n,'A','B','C');\r\n    return 0;\r\n}"
        }
      ],
      "LinK01": [
        {
          "variant": 1,
          "path": "solutions/362/LinK01.cpp",
          "language": "cpp",
          "code": "//a+b，基础入门\r\n#include<iostream>\r\nusing namespace std;\r\nint main()\r\n{\r\n  long long A,B;\r\n  cin>>A>>B;\r\n  cout<<A+B;\r\n  return 0;\r\n}"
        }
      ],
      "LinK02": [
        {
          "variant": 1,
          "path": "solutions/362/LinK02.cpp",
          "language": "cpp",
          "code": "//枚举算法\r\n\r\n#include<iostream>\r\nusing namespace std;\r\n//扫描小于N的所有数，若存在cube^3=a^3+b^3+c^3就输出\r\nint main()\r\n{\r\n\tint a, b, c, d, N;\r\n\tcin >> N;//输入整数\r\n\tfor (int i = 2; i <= N; i++)//相当于cube\r\n\t{\r\n\t\tfor (int j = 2; j < N; j++)//相当于a\r\n\t\t{\r\n\t\t\tfor (int k = j; k < N; k++)//相当于b\r\n\t\t\t{\r\n\t\t\t\tfor (int l = k; l < N; l++)//相当于c\r\n\t\t\t\t{\r\n\t\t\t\t\tif (i * i * i == j * j * j + k * k * k + l * l * l)//是否a^3= b^3+ c^3+ d^3\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tcout << \"Cube = \" << i << \", Triple = (\" << j <<\",\"<< k <<\",\" << l << \")\" << endl;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn 0;\r\n}\r\n//总结：复习了枚举算法"
        }
      ],
      "LinK03": [
        {
          "variant": 1,
          "path": "solutions/362/LinK03.cpp",
          "language": "cpp",
          "code": "//枚举算法\r\n#include <stdio.h>\r\nint main()\r\n{\r\n    int p, e, i, d;//体力，情感，智力，时间\r\n    int m = 1;\r\n    scanf(\"%d%d%d%d\", &p, &e, &i, &d);\r\n    while (p != -1 && e != -1 && i != -1 && d != -1)//结束标志\r\n    {\r\n        \r\n        for (int j = d+1; j <= d+21252; j++)//注意：上限为21252\r\n        {//周期长度分别为23天、28天和33天。\r\n            if ((j - p) % 23 == 0 && (j - e) % 28 == 0 && (j - i) % 33 == 0)\r\n            {//从j+1开始枚举，若这些余数均为0则为答案\r\n                if (d!=365||j!=21252)\r\n                    printf(\"Case %d: the next triple peak occurs in %d days.\\n\", m, j - d);\r\n                else printf(\"Case %d: the next triple peak occurs in %d days.\\n\", m, 21252);\r\n                break;\r\n            }\r\n        }\r\n        m++;\r\n        scanf(\"%d%d%d%d\", &p, &e, &i, &d);\r\n    }\r\n    return 0;\r\n}\r\n//总结：完成了一道较为复杂的枚举类型题目，巩固的枚举算法"
        }
      ],
      "LinK04": [
        {
          "variant": 1,
          "path": "solutions/362/LinK04.cpp",
          "language": "cpp",
          "code": "//使用容器内的sort函数即可\r\n#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\nusing namespace std;\r\nint main()\r\n{\r\n    int T;\r\n    cin >> T;\r\n    while (T--)\r\n    {\r\n        int N, value;\r\n        cin >> N;\r\n        vector<int>numbers;//用容器方便排序\r\n        for (int i = 0; i < N; i++)//装入数据\r\n        {\r\n            cin >> value;\r\n            numbers.push_back(value);\r\n        }\r\n        sort(numbers.begin(), numbers.end());//排序\r\n        for (int i = 0; i < N; i++)//输出\r\n        {\r\n            if (i > 0)cout << \" \";\r\n            cout << numbers[i];\r\n        }\r\n        cout << endl;\r\n    }\r\n    \r\n    return 0;\r\n}\r\n\r\n//总结：学习了vetctor的用法"
        }
      ],
      "LinK05": [
        {
          "variant": 1,
          "path": "solutions/362/LinK05.cpp",
          "language": "cpp",
          "code": "//枚举算法\r\n#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nstring Left[3];//储存左边银币\r\nstring Right[3];//储存右边银币\r\nstring result[3];//储存结果\r\n\r\nbool isFeitCoin(char iCoin,bool isLight)//轻为true，重为false\r\n{\r\n    string c;\r\n    c.push_back(iCoin);\r\n\r\n    for(int i=0;i<3;i++)\r\n    {\r\n        string l=Left[i],r=Right[i];\r\n\r\n        if(!isLight)swap(l,r);//全部转化为轻\r\n\r\n        switch(result[i][0])\r\n        {\r\n            case 'e'://平衡even,找不到假币\r\n                if(l.find(c)!=string::npos||r.find(c)!=string::npos)return false;\r\n                    break;\r\n            case 'u'://右边\r\n                if(r.find(c)==string::npos)return false;//npos：未找到\r\n                    break;\r\n            case 'd'://左边\r\n                if(l.find(c)==string::npos)return false;\r\n                    break;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin >> n;\r\n    while(n--)\r\n    {\r\n        for(int i=0;i<3;i++)cin>>Left[i]>>Right[i]>>result[i];\r\n\r\n        for(int iCoin='A';iCoin<='L';iCoin++)//遍历从A到L\r\n        {\r\n            if(isFeitCoin(iCoin,true))//先假设是轻币\r\n            {\r\n                cout<<char(iCoin)<<\" is the counterfeit coin and it is light.\"<<endl;\r\n                break;\r\n            }else if(isFeitCoin(iCoin,false)){// 再假设是重币\r\n                cout<<char(iCoin)<<\" is the counterfeit coin and it is heavy.\"<<endl;\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    \r\n\r\n\r\n\r\n\r\n    return 0;\r\n}\r\n\r\n//总结：是通过函数的三个switch判断是否符合轻/重币。必须在even没用，up和heavy在不同侧\r\n//传入轻重可以简化只写一次函数"
        }
      ],
      "LinK06": [
        {
          "variant": 1,
          "path": "solutions/362/LinK06.cpp",
          "language": "cpp",
          "code": "//枚举算法\r\n#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\n#include<vector>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    int target, n;\r\n    cin >> target >> n;\r\n    vector<int>a;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int x;\r\n        cin >> x;\r\n        a.push_back(x);\r\n    }\r\n    for (int i = 0; i < n - 1; i++)//把所有情况遍历一遍；现在想想可以两个指针分别在首位来进行移动\r\n    {\r\n        for (int j = i + 1; j < n; j++)//从i+1开始遍历（复杂度较高）\r\n        {\r\n            if (a[i] + a[j] == target)\r\n            {\r\n                cout << i << \" \" << j << endl;\r\n            }\r\n        }\r\n    }\r\n    return 0;\r\n}\r\n//总结：该解法复杂度较高，较大数据可能无法处理，需要学习新的算法。"
        }
      ],
      "LinK07": [
        {
          "variant": 1,
          "path": "solutions/362/LinK07.cpp",
          "language": "cpp",
          "code": "//枚举优化算法\r\n#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n//按两数之和的思路无法通过\r\nvector<vector<int>> threeSum(vector<int>& nums, int target)\r\n{\r\n\tvector<vector<int>> res;//储存结果\r\n\tsort(nums.begin(), nums.end());\r\n\tfor(int i=0;i<nums.size();i++)\r\n\t{\r\n\t\tif (i && nums[i] == nums[i - 1])continue;//除去重复项\r\n\t\tfor (int j = i + 1,k=nums.size()-1; j < nums.size() - 2; j++)//从j+1到size-1\r\n\t\t{\r\n\t\t\tif (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项\r\n\t\t\twhile(j<k-1&&nums[i]+nums[j]+nums[k-1]>=target)//在j-1往前移动\r\n\t\t\t{\r\n\t\t\t\tk--;\r\n\t\t\t}\r\n\t\t\tif (nums[i] + nums[j] + nums[k] == target)\r\n\t\t\t\tres.push_back({ nums[i],nums[j],nums[k] });\r\n\t\t}\r\n\t}\r\n\treturn res;\r\n}\r\nbool comp(const vector<int>& a, const vector<int>& b)\r\n{\r\n\tif (a[0] != b[0])return a[0] < b[0];\r\n\tif (a[1] != b[1])return a[1] < b[1];\r\n\treturn a[2] < b[2];\r\n}\r\nint main()\r\n{\r\n\tint target, n;\r\n\tcin >> target >> n;\r\n\tvector<int>nums(n);\r\n\tfor(int i=0;i<n;i++)\r\n\t{\r\n\t\tcin >> nums[i];\r\n\t}\r\n\tvector<vector<int>>res;\r\n\tres = threeSum(nums, target);//求出所有三元组\r\n\tsort(res.begin(), res.end(),comp);//排序\r\n\tfor(auto line:res)\r\n\t{\r\n\t\tcout << line[0] << \" \" << line[1] << \" \" << line[2] << endl;\r\n\t\t\r\n\t}\r\n\treturn 0;\r\n}\r\n\r\n//总结：一个从后面往前遍历\r\n//每次计算前都先清除重复项"
        }
      ],
      "LinK08": [
        {
          "variant": 1,
          "path": "solutions/362/LinK08.cpp",
          "language": "cpp",
          "code": "//枚举优化算法\r\n//四数之和根据三数修改\r\n\r\n//思路：根据三数之和优化\r\n//i从0到size-1\r\n//j从i+1到size-2\r\n//l从j+1开始往右移，r从size-1开始往左移（覆盖所有数）根据结果的大小进行调整\r\n#include <iostream>\r\n#include<vector>\r\n#include<algorithm>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nvector<vector<int>> fourSum(vector<int>& nums, int target)\r\n{\r\n\tvector<vector<int>> res;//储存结果\r\n\tsort(nums.begin(), nums.end());\r\n\tfor(int i=0;i<nums.size();i++)\r\n\t{\r\n\t\tif (i && nums[i] == nums[i - 1])continue;//除去重复项\r\n\t\tfor (int j = i + 1; j < nums.size() - 1; j++)//从j+1到size-1\r\n\t\t{\r\n\t\t\tif (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项\r\n            int l=j+1,r=nums.size()-1;//l从j+1开始往右移，r从size-1开始往左移\r\n            while(l<r&&nums[i] + nums[j] + nums[l] +nums[r]!= target)//必须l在r左侧\r\n            {\r\n                while((r>l&&nums[i] + nums[j] + nums[l] +nums[r]< target)||nums[l]==nums[l-1])l++;//和比target小就l右移\r\n                while(r>l&&nums[i] + nums[j] + nums[l] +nums[r]> target||nums[r]==nums[r+1])r--;//和比target小就r左移\r\n            }\r\n\t\t\t    if (nums[i] + nums[j] + nums[l] +nums[r]== target)\r\n\t\t\t\t    res.push_back({ nums[i],nums[j],nums[l],nums[r] });\r\n            \r\n\t\t}\r\n\t}\r\n\treturn res;\r\n}\r\nbool comp(const vector<int>& a, const vector<int>& b)//排序的依据\r\n{\r\n\tif (a[0] != b[0])return a[0] < b[0];\r\n\tif (a[1] != b[1])return a[1] < b[1];\r\n\treturn a[2] < b[2];\r\n}\r\nint main()\r\n{\r\n\tint target, n;\r\n\tcin >> target >> n;\r\n\tvector<int>nums(n);\r\n\tfor(int i=0;i<n;i++)\r\n\t{\r\n\t\tcin >> nums[i];\r\n\t}\r\n\tvector<vector<int>>res;\r\n\tres = fourSum(nums, target);//求出所有三元组\r\n\tsort(res.begin(), res.end(),comp);//排序\r\n\tfor(auto line:res)\r\n\t{\r\n\t\tcout << line[0] << \" \" << line[1] << \" \" << line[2] << \" \"<<line[3]<<endl;\r\n\t\t\r\n\t}\r\n\treturn 0;\r\n}\r\n\r\n//易错：l++和r--循环外面一定要套循环（如同快速排序思想）\r\n//总结利用双指针来计算，减少复杂度"
        }
      ],
      "LinK09": [
        {
          "variant": 1,
          "path": "solutions/362/LinK09.cpp",
          "language": "cpp",
          "code": "//递归算法\n#include<iostream>\nusing namespace std;\n\nvoid move(char start,char target)//输出从start位置移到target\n{\n    cout<<start<<\"->\"<<target<<endl;\n    return ;\n}\n\nvoid Hanoi(int n,char start,char other,char target)\n{\n    if(n==1){//只有一层（也是结束项）\n        move(start,target);\n        return;\n    }\n    Hanoi(n-1,start,target,other);//要先把上面n-1个移到other部分\n    move(start,target);//最下面的移到target\n    Hanoi(n-1,other,start,target);//再把other部分移到target\n    return;\n\n}\n\nint main()\n{\n    int n;\n    cin>>n;\n    Hanoi(n,'A','B','C');//n是层数\n    return 0;\n}\n\n//总结：递归算法要设计递归出口，以及每一次进入下一层的变化"
        }
      ],
      "LinK10": [
        {
          "variant": 1,
          "path": "solutions/362/LinK10.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//本题大部分与汉诺塔I相同\r\n#include<iostream>\r\nusing namespace std;\r\nint k;\r\nvoid move(int n,char start,char target)//打印输出\r\n{\r\n    cout<<n<<\":\"<<start<<\"->\"<<target<<endl;//增加一个n的所在位置\r\n    return;\r\n}\r\n\r\nvoid Hanoi(int n,char start,char other,char target)\r\n{\r\n    if(n==1){\r\n        move(n,start,target);\r\n        return;\r\n    }\r\n    Hanoi(n-1,start,target,other);\r\n    move(n,start,target);\r\n    Hanoi(n-1,other,start,target);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    char a,b,c;\r\n    cin>>k;\r\n    cin>>a>>b>>c;\r\n    Hanoi(k,a,b,c);\r\n    return 0;\r\n\r\n}\r\n//总结：跟汉诺塔I相比就差一个n的输出，并无太大区别"
        }
      ],
      "LinK11": [
        {
          "variant": 1,
          "path": "solutions/362/LinK11.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=15;\r\nint n;\r\nbool st[N];\r\nint path[N];\r\n\r\nvoid dfs(int u)//已排列的个数\r\n{\r\n    if(u>n)//递归出口\r\n    {\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            cout<<path[i]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    else{\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(!st[i])\r\n            {\r\n                path[u]=i;//设置路径\r\n                st[i]=true;\r\n                dfs(u+1);\r\n                path[u]=0;//恢复现场（避免i+1传入出现问题）\r\n                st[i]=false;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    dfs(1);//从第一个开始\r\n\r\n    return 0;\r\n}\r\n//总结：递归应包含设计路径和恢复现场，避免影响以后的循环"
        }
      ],
      "LinK12": [
        {
          "variant": 1,
          "path": "solutions/362/LinK12.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n#include<iostream>\r\n#include<string>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nconst int N=10;\r\nbool st[N];//判断是否有选过\r\nchar arr[N]={0};//记录字符重新排列的数组\r\nstring a;//记录传入字符串\r\nint len;//字符串长度\r\n\r\nvoid dfs(int u)\r\n{\r\n    if(u>len)//递归出口\r\n    {\r\n        for(int i=1;i<=len;i++)\r\n        {\r\n            cout<<arr[i];\r\n        }\r\n        cout<<endl;\r\n        return ;\r\n    }\r\n    else {\r\n        for(int i=0;i<len;i++)\r\n        {\r\n            if(!st[i])//未被选过\r\n            {\r\n                st[i]=true;//设置路径\r\n                arr[u]=a[i];\r\n                dfs(u+1);\r\n                arr[u]='0';//恢复现场\r\n                st[i]=false;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>a;\r\n    len=a.size();//计算字符个数，相当于上一题的n\r\n    sort(a.begin(), a.end());//要求字母序比较小的排列在前面，进行排序\r\n    dfs(1);\r\n    return 0;\r\n}\r\n////总结：递归应包含设计路径和恢复现场，避免影响以后的循环"
        }
      ],
      "LinK13": [
        {
          "variant": 1,
          "path": "solutions/362/LinK13.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//判断是否在同一对角线上|x1-x2|=|y1-y2|\r\n\r\n#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nint N;\r\nvector<int>res;\r\nvoid dfs(int n)//当前行数\r\n{\r\n    if(n>=N)//n==N时递归出口\r\n    {\r\n        for(auto x:res)cout<<x;\r\n        cout<<endl;\r\n        return ;\r\n    }\r\n    for(int i=1;i<=N;i++)//列数\r\n    {\r\n        int k;\r\n        for(k=0;k<n;k++)//行数从0~n-1（已填入部分）\r\n        {\r\n            if((res[k]==i)||abs(i-res[k])==abs(n-k))//res[k]为行号\r\n                break;//如果当前位置找到冲突，就跳出当前位置验证\r\n        }\r\n        if(k==n)//超过，找不到\r\n        {\r\n            res[n]=i;\r\n            dfs(n+1);\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>N;\r\n    res.resize(N);\r\n    dfs(0);//列数从0开始\r\n\r\n    return 0;\r\n}\r\n//dfs传入的是行数，通过遍历列数判断是否可以\r\n"
        }
      ],
      "LinK14.5": [
        {
          "variant": 1,
          "path": "solutions/362/LinK14.5.cpp",
          "language": "cpp",
          "code": "//只是n皇后换一下记录方式而已\r\n#include<iostream>\r\n#include<vector>\r\n//行从0开始，列从1开始\r\nusing namespace std;\r\n\r\nint N;\r\nvector<vector<char>>res;\r\n\r\n\r\nbool xiebian(int r,int c)//只需要检查上方\r\n{\r\n    for(int i=r,j=c;i>=0&&j>=1;j--,i--)\r\n    {\r\n        if(res[i][j]=='Q')\r\n            return false;\r\n    }\r\n    for(int i=r,j=c;i>=0&&j<=N;j++,i--)\r\n    {\r\n        if(res[i][j]=='Q')\r\n            return false;\r\n    }\r\n    return true;\r\n}\r\n\r\nvoid dfs(int n)\r\n{\r\n    if(n>=N)\r\n    {\r\n        for(int i=0;i<N;i++)\r\n        {\r\n            for(int j=1;j<=N;j++)\r\n            {\r\n                cout<<res[i][j];\r\n            }\r\n            cout<<endl;\r\n        }\r\n        cout<<endl;\r\n        return;//必须有return\r\n    }\r\n    for(int i=1;i<=N;i++)\r\n    {\r\n        int k;\r\n        for(k=0;k<n;k++)//检查列\r\n        {\r\n            if(res[k][i]=='Q')break;\r\n        }\r\n        if(!xiebian(n,i))continue;//检查斜边\r\n        if(k==n)\r\n        {\r\n            res[n][i]='Q';//设置路径\r\n            dfs(n+1);\r\n            res[n][i]='.';//恢复现场\r\n            \r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>N;\r\n    res.resize(N, vector<char>(N+1, '.'));//初始化为'.'\r\n    dfs(0);\r\n\r\n    return 0;\r\n}"
        },
        {
          "variant": 2,
          "path": "solutions/362/Link14.5-2.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\nusing namespace std;\r\n \r\nconst int N = 20;\r\nint n;\r\nchar g[N][N];\r\nbool col[N], dg[N], udg[N];\r\n//col[i]表示第i列是否有皇后\r\n//dg[u+i]表示u+i对角线是否有皇后\r\n//udg[n-u+i]表示第n-u+i条对角线是否有皇后\r\nvoid dfs(int u)\r\n{\r\n    if (u == n)\r\n    {\r\n        for (int i = 0; i < n; i++)\r\n        {\r\n            puts(g[i]);\r\n        }\r\n        puts(\"\");\r\n        return;\r\n    }\r\n    for (int i = 0; i < n; i++)\r\n    {\r\n        if (!col[i] && !dg[u + i] && !udg[n - u + i])\r\n        {\r\n            g[u][i] = 'Q';\r\n            col[i] = dg[u + i] = udg[n - u + i] = true;\r\n            dfs(u + 1);\r\n            col[i] = dg[u + i] = udg[n - u + i] = false;\r\n            g[u][i] = '.';\r\n        }\r\n \r\n    }\r\n \r\n}\r\nint main()\r\n{\r\n    cin >> n;\r\n    for (int i = 0; i < n; i++)\r\n    {\r\n        for (int j = 0; j < n; j++)\r\n        {\r\n            g[i][j] = '.';\r\n        }\r\n    }\r\n    dfs(0);\r\n    return 0;\r\n}"
        }
      ],
      "LinK14": [
        {
          "variant": 1,
          "path": "solutions/362/LinK14.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//由n皇后修改\r\n\r\n#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\n\r\nint T;\r\nvector<int>res;\r\nvector<vector<int>>a;\r\nvoid dfs(int n)//当前行数\r\n{\r\n    if(n>=8)//n==N时递归出口\r\n    {\r\n        a.push_back(res);//改为存入所有8皇后的值\r\n        return ;\r\n    }\r\n    for(int i=1;i<=8;i++)//列数\r\n    {\r\n        int k;\r\n        for(k=0;k<n;k++)//行数从0~n-1（已填入部分）\r\n        {\r\n            if((res[k]==i)||abs(i-res[k])==abs(n-k))//res[k]为行号\r\n                break;//如果当前位置找到冲突，就跳出当前位置验证\r\n        }\r\n        if(k==n)//超过，找不到\r\n        {\r\n            res[n]=i;\r\n            dfs(n+1);\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>T;\r\n    res.resize(8);\r\n    dfs(0);//列数从0开始\r\n    while(T--)\r\n    {\r\n        cin>>n;\r\n        for(int i=0;i<8;i++)//查表\r\n        {\r\n            cout<<a[n-1][i];\r\n        }\r\n        cout<<endl;\r\n    }\r\n    return 0;\r\n}\r\n//dfs传入的是行数，通过遍历列数判断是否可以\r\n"
        }
      ],
      "LinK15": [
        {
          "variant": 1,
          "path": "solutions/362/LinK15.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;//用long long防止数据溢出\r\nLL tianti(LL n)\r\n{\r\n    if(n==1)return 1;\r\n    else if(n==2)return 2;\r\n    else if(n==0)return 1;\r\n    LL count=0;\r\n    count+=tianti(n-1)+tianti(n-2);//n-1走一格或n-2两格到达n这个位置\r\n    return count;\r\n}\r\nint main()\r\n{\r\n    LL N;\r\n    cin>>N;\r\n    cout<<tianti(N)<<endl;\r\n    return 0;\r\n}"
        }
      ],
      "LinK16": [
        {
          "variant": 1,
          "path": "solutions/362/LinK16.cpp",
          "language": "cpp",
          "code": "//\r\n//1.苹果个数小于盘子个数f(m,n)=f(m,m)\r\n//2.苹果个数不小于盘子个数\r\n//总放法=空一个盘子(递归)+没空盘子\r\n//f(m,n)=f(m,n-1)+f(m-n,n)<都先分一个苹果>\r\n#include<iostream>\r\nusing namespace std;\r\n//f(0,n)=1\r\n//f(m,0)无解\r\n\r\nint f(int m,int n)\r\n{\r\n    if(n>m) return f(m,m);\r\n    if(m==0)return 1;\r\n    if(n==0)return 0;\r\n\r\n    return f(m,n-1)+f(m-n,n);//f(m,n)=f(m,n-1)+f(m-n,n)<都先分一个苹果>\r\n}\r\n\r\n\r\n\r\n\r\nint main()\r\n{\r\n    int m,n,t;\r\n    cin>>t;\r\n    while(t--)\r\n    {\r\n        cin>>m>>n;\r\n        cout<<f(m,n)<<endl;\r\n    }\r\n\r\n    return 0;\r\n}\r\n//有一个空盘子通过递归可以衍生n个空盘子的情况"
        }
      ],
      "LinK17": [
        {
          "variant": 1,
          "path": "solutions/362/LinK17.cpp",
          "language": "cpp",
          "code": "//整型浮点数转字符串: to_string( )\r\n//字符串转浮点数：stof( )\r\n\r\n#include<iostream>\r\n#include<string>\r\n\r\nusing namespace std;\r\n\r\nstring a;\r\n\r\ndouble p()\r\n{\r\n    cin>>a;\r\n    switch(a[0])\r\n    {\r\n        case '+':return p()+p();break;\r\n        case '-':return p()-p();break;\r\n        case '*':return p()*p();break;\r\n        case '/':return p()/p();break;\r\n        default:return stof(a);break;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    printf(\"%f\\n\", p());\r\n\r\n    return 0;\r\n}\r\n//先看符号，后做运算"
        }
      ],
      "LinK18": [
        {
          "variant": 1,
          "path": "solutions/362/LinK18.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//先转化为2的n次方，若n大于2也要转化\r\n#include<iostream>\r\nusing namespace std;\r\nstring dfs(int n)\r\n{\r\n    string res;\r\n    for(int i=14;i>=0;i--)//i位几就是除以2^i\r\n    {\r\n        if(n>>i&1)//相当于整除i位看是否是1\r\n        {\r\n            if(res.size())res+='+';//不是第一位要输出+\r\n            if(!i)res+=\"2(0)\";//i=0，相当于只剩下1\r\n            else if(i==1)res+=\"2\";\r\n            else res+=\"2(\"+dfs(i)+\")\";\r\n        }\r\n    }\r\n    \r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<dfs(n)<<endl;;\r\n\r\n\r\n}\r\n\r\n//总结：底数和指数均按二进制表示，利用递归实现"
        }
      ],
      "LinK19": [
        {
          "variant": 1,
          "path": "solutions/362/LinK19.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//通过bool类型st数组来判断是否放入u\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=20;\r\nint st[N];\r\nint n;\r\nvoid dfs(int u)//第u次\r\n{\r\n\r\n    if(u>n)//递归出口\r\n    {\r\n        int count=0;\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(st[i])\r\n            cout<<i<<\" \";\r\n            count++;\r\n        }\r\n        if(count!=0)\r\n            cout<<endl;\r\n        return ;\r\n    }\r\n    st[u]=true;//第u个数放入\r\n    dfs(u+1);\r\n    st[u]=false;//第u个不放入\r\n    dfs(u+1);\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    dfs(1);\r\n    return 0;\r\n\r\n}\r\n//总结：st数组来区别是否有数字u\r\n"
        }
      ],
      "LinK20": [
        {
          "variant": 1,
          "path": "solutions/362/LinK20.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//通过start控制起点，以及设置路径和恢复现场实现递归\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint n,m;\r\nconst int N=100;\r\nint arr[N];\r\nbool st[N];//判断是否有选过\r\nvoid dfs(int u,int start)//多一个start方便判断\r\n{\r\n    if(u>m)\r\n    {\r\n        for(int i=1;i<=m;i++)\r\n        {\r\n            cout<<arr[i]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    else {\r\n        for(int i=start;i<=n;i++)//从start开始递增，避免还输出前面的\r\n        {\r\n            if(!st[i])\r\n            {\r\n                arr[u]=i;//设置路径\r\n                st[i]=true;\r\n                dfs(u+1,i+1);\r\n                arr[u]=0;//恢复现场\r\n                st[i]=false;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    dfs(1,1);\r\n    return 0;\r\n}\r\n\r\n//总结：组合通过start来与排列区分，控制从哪里开始输出，避免出现前面的数"
        }
      ],
      "LinK21": [
        {
          "variant": 1,
          "path": "solutions/362/LinK21.cpp",
          "language": "cpp",
          "code": "//递归算法\r\n//与组合不同，不设置start起点，从头开始遍历\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=9;\r\nbool st[N];//判断是否有选过\r\nint arr[N];//放结果\r\nint n;\r\n\r\nvoid dfs(int u)\r\n{\r\n    if(u>n)//递归出口\r\n    {\r\n        for(int i=1;i<=n;i++)//输出结果\r\n        {\r\n            cout<<arr[i]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n    else{\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            if(!st[i])\r\n            {\r\n                arr[u]=i;//设置路径\r\n                st[i]=true;\r\n                dfs(u+1);\r\n                st[i]=false;//恢复现场\r\n                arr[u]=0;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    dfs(1);\r\n    return 0;\r\n\r\n}\r\n\r\n//总结：与组合不同，不设置start起点，从头开始遍历"
        }
      ],
      "LinK22": [
        {
          "variant": 1,
          "path": "solutions/362/LinK22.cpp",
          "language": "cpp",
          "code": "\r\n//数据很大，必须全用long long！\r\n//每次运算后都要除余\r\n#include<iostream>\r\n#include<string>\r\n#include<vector>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\n\r\nstring a;//记录原始字符串\r\nvector<long long>b;//记录剩下待相加的数\r\nint found;//判断是否为‘*’，乘的下一个加号不用push_back(a[i-1])\r\nlong long res=0;\r\nlong long caculate(int n)\r\n{\r\n    int i;\r\n    for(i=1;i<2*n-1;i+=2)\r\n    {\r\n        if(a[i]=='*')\r\n        {\r\n            long long temp=(a[i-1]-'0')*(a[i+1]-'0');//易错：字符转化为数字要-'0'\r\n            while(i+2<2*n-1&&a[i+2]=='*')//i+2<2*n-1防止越界（易错）\r\n            {//为了保证连乘的情况\r\n                i+=2;\r\n                temp*=(a[i+1]-'0');\r\n                temp%=1000000007;//马上取余防止溢出\r\n            }\r\n            b.push_back(temp);\r\n            found=1;\r\n        }\r\n        else if(a[i]=='+') \r\n        {\r\n            if(!found)\r\n            {\r\n                b.push_back(a[i-1]-'0');\r\n            }\r\n            else found=0;//不用计入，清除状态\r\n        }\r\n    }\r\n    if(a[i-2]=='+')//最后一位是加的话特殊处理\r\n        b.push_back(a[i-1]-'0');\r\n    for(int i=0;i<b.size();i++)//累加剩余的数\r\n    {\r\n        res+=b[i];\r\n        res%=1000000007;\r\n    }\r\n\r\n    return res;\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    long long n;\r\n    cin>>n;\r\n    cin>>a;\r\n    cout<<caculate(n)<<endl;\r\n}\r\n\r\n//易错：连续乘法要累积处理"
        }
      ],
      "LinK23": [
        {
          "variant": 1,
          "path": "solutions/362/LinK23.cpp",
          "language": "cpp",
          "code": "//枚举算法\r\n//使用bitset来进行二进制位的取反\r\n#include<iostream>\r\n#include<bitset>\r\n#include<cstring>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    string line;\r\n    bitset<32> lock;//设置32位的二进制位\r\n    int minTimes=1<<30;//初始化按钮次数为无穷大\r\n    cin>>line;\r\n    bitset<32>sourceLock(line);\r\n    cin>>line;\r\n    bitset<32>targetLock(line);\r\n\r\n    int n=line.size();\r\n\r\n    for(int p=0;p<2;p++)//p=0表示最左边按钮不按，p=1表示最左边按\r\n    {//初始化\r\n        lock=sourceLock;\r\n        int times=0;//按下的次数\r\n        int nextButton=p;//初始化下一个按钮的状态，是否按下\r\n\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(nextButton==1)\r\n            {\r\n                times++;\r\n                if(i>0)\r\n                {\r\n                    lock.flip(i-1);//左边取反\r\n                }\r\n                lock.flip(i);//中间取反\r\n                if(i<n-1)lock.flip(i+1);\r\n            }\r\n            if(lock[i]!=targetLock[i])nextButton=1;\r\n            else nextButton=0;  \r\n        }\r\n        if(lock==targetLock)\r\n            minTimes=min(minTimes,times);   \r\n    }\r\n    \r\n    if(minTimes==1<<30)\r\n        cout<<\"impossible\"<<endl;\r\n    else\r\n        cout<<minTimes<<endl;\r\n        \r\n    return 0;\r\n}\r\n\r\n//总结：学习了bitset的用法"
        }
      ],
      "LinK24": [
        {
          "variant": 1,
          "path": "solutions/362/LinK24.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<cstring>\r\n#include<bitset>\r\n#include<memory>\r\nusing namespace std;\r\n\r\nbitset<6>source[5],//最初灯矩阵\r\n    lights[5],//不停地变化的灯矩阵\r\n    res[5],//结果按钮矩阵\r\n    line;//某一行的开关状态\r\n\r\n\r\nvoid Output(int t)\r\n{\r\n    cout<<\"PUZZLE #\"<<t<<endl;\r\n    for(int i=0;i<5;i++)\r\n    {\r\n        for(int j=0;j<6;j++)\r\n        {\r\n            cout<<res[i][j]<<\" \";\r\n        }\r\n        cout<<endl;\r\n    }\r\n}\r\n\r\nint main()\r\n{\r\n    int T;\r\n    cin>>T;\r\n    for(int t=1;t<=T;t++)\r\n    {\r\n        for(int i=0;i<5;i++)\r\n        {\r\n            for(int j=0;j<6;j++)\r\n            {\r\n                int x;\r\n                cin>>x;\r\n                source[i].set(j,x);//调用set\r\n            }\r\n        }\r\n        for(int n=0;n<64;n++)\r\n        {\r\n            for(int i=0;i<5;i++)lights[i]=source[i];\r\n            line=n;//开关初始化为n\r\n\r\n            for(int i=0;i<5;i++)\r\n            {\r\n                res[i]=line;//储存当前开关状态\r\n                for(int j=0;j<6;j++)\r\n                {\r\n                    if(line.test(j))\r\n                    {\r\n                        if(j>0)lights[i].flip(j-1);//改左灯\r\n                        lights[i].flip(j);//改开关位置\r\n                        if(j<5)lights[i].flip(j+1);//改右灯\r\n                    }\r\n                }\r\n                if(i<4)lights[i+1]^=line;//改下一行的灯\r\n                line=lights[i];//第i+1行开关方案和第i行灯情况相同\r\n            }\r\n            //调用none判断bitset是否每个位数都是0\r\n            if(lights[4].none())\r\n            {\r\n                Output(t);\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    \r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK25": [
        {
          "variant": 1,
          "path": "solutions/362/LinK25.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <vector>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\n// 9种操作对9个时钟的影响（0~8对应A~I，操作编号1~9）\r\nint moveEffect[9][9] = {\r\n    {1, 1, 0, 1, 1, 0, 0, 0, 0}, // 操作1: ABDE\r\n    {1, 1, 1, 0, 0, 0, 0, 0, 0}, // 操作2: ABC\r\n    {0, 1, 1, 0, 1, 1, 0, 0, 0}, // 操作3: BCEF\r\n    {1, 0, 0, 1, 0, 0, 1, 0, 0}, // 操作4: ADG\r\n    {0, 1, 0, 1, 1, 1, 0, 1, 0}, // 操作5: BDEFH\r\n    {0, 0, 1, 0, 0, 1, 0, 0, 1}, // 操作6: CFI\r\n    {0, 0, 0, 1, 1, 0, 1, 1, 0}, // 操作7: DEGH\r\n    {0, 0, 0, 0, 0, 0, 1, 1, 1}, // 操作8: GHI\r\n    {0, 0, 0, 0, 1, 1, 0, 1, 1}  // 操作9: EFHI\r\n};\r\n\r\nint init[9];          // 初始时钟状态\r\nint times[9];         // 当前枚举的每种操作次数\r\nint bestTimes[9];     // 最优解的操作次数\r\nint minTotal = 1e9;   // 最小总步数\r\n\r\n// 检查当前方案是否可行\r\nbool check() {\r\n    int temp[9] = {0};\r\n    for (int i = 0; i < 9; i++) {\r\n        if (times[i] == 0) continue;\r\n        for (int j = 0; j < 9; j++) {\r\n            temp[j] += times[i] * moveEffect[i][j];\r\n        }\r\n    }\r\n    for (int j = 0; j < 9; j++) {\r\n        if ((init[j] + temp[j]) % 4 != 0) return false;\r\n    }\r\n    return true;\r\n}\r\n\r\n// 递归枚举所有操作次数（0~3）\r\nvoid dfs(int op) {\r\n    if (op == 9) {\r\n        if (check()) {\r\n            int total = 0;\r\n            for (int i = 0; i < 9; i++) total += times[i];\r\n            // 取总次数最小的方案，若总次数相同，取字典序最小（枚举顺序天然满足）\r\n            if (total < minTotal) {\r\n                minTotal = total;\r\n                for (int i = 0; i < 9; i++) bestTimes[i] = times[i];\r\n            }\r\n        }\r\n        return;\r\n    }\r\n    for (int i = 0; i < 4; i++) {\r\n        times[op] = i;\r\n        dfs(op + 1);\r\n    }\r\n}\r\n\r\nint main() {\r\n    for (int i = 0; i < 9; i++) cin >> init[i];\r\n\r\n    dfs(0);\r\n\r\n    // 输出最优解的操作序列（按操作编号升序，重复输出每个操作 bestTimes[i] 次）\r\n    bool first = true;\r\n    for (int i = 0; i < 9; i++) {\r\n        for (int j = 0; j < bestTimes[i]; j++) {\r\n            if (!first) cout << \" \";\r\n            cout << i + 1;\r\n            first = false;\r\n        }\r\n    }\r\n    cout << endl;\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK26": [
        {
          "variant": 1,
          "path": "solutions/362/LinK26.cpp",
          "language": "cpp",
          "code": "//先算两个数\r\n//剩下n-1个数继续先算两个数\r\n#include<iostream>\r\n#include<cmath>\r\nusing namespace std;\r\n\r\n#define EPS 1e-6\r\n#define spacesize 4\r\ndouble inputnumber[spacesize+1];\r\nint arr[4];\r\n\r\nbool isZero(double x)\r\n{\r\n    return fabs(x)<=EPS;\r\n}\r\n\r\nbool count24(double a[],int n)\r\n{\r\n    if(n==1)\r\n    {\r\n        if(isZero(a[0]-24))\r\n            return true;\r\n        else \r\n            return false;\r\n    }\r\n    for(int i=0;i<n-1;i++)\r\n        for(int j=i+1;j<n;j++)//选出两个\r\n        {\r\n            double temp[n-1]={0};\r\n            int iTemp=0;\r\n            for(int k=0;k<n;k++)\r\n                if((k!=i)&&(k!=j))temp[iTemp++]=a[k];// 把选出剩下的存储到iTemp中\r\n            //+\r\n            temp[iTemp]=a[i]+a[j];\r\n            if(count24(temp,n-1))return true;\r\n            //*\r\n            temp[iTemp]=a[i]*a[j];\r\n            if(count24(temp,n-1))return true;\r\n            //-\r\n            temp[iTemp]=a[i]-a[j];\r\n            if(count24(temp,n-1))return true;\r\n            //-\r\n            temp[iTemp]=a[j]-a[i];\r\n            if(count24(temp,n-1))return true;\r\n            //  /\r\n            if(!isZero(a[j]))\r\n            {\r\n                temp[iTemp]=a[i]/a[j];\r\n                if(count24(temp,n-1))return true;\r\n            }\r\n            //  /\r\n            if(!isZero(a[i]))\r\n            {\r\n                temp[iTemp]=a[j]/a[i];\r\n                if(count24(temp,n-1))return true;\r\n            }\r\n        }\r\n    return false;\r\n    \r\n}\r\n\r\n\r\nint main()\r\n{\r\n    while(true)\r\n    {\r\n        bool isEndInput=true;\r\n        for(int i=0;i<spacesize;i++)\r\n        {\r\n            cin>>inputnumber[i];\r\n            if(!isZero(inputnumber[i]))isEndInput=false;\r\n        }\r\n        if(isEndInput)break;\r\n        if(count24(inputnumber,spacesize))\r\n            cout<<\"YES\"<<endl;\r\n        else cout<<\"NO\"<<endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "LinK27": [
        {
          "variant": 1,
          "path": "solutions/362/LinK27.cpp",
          "language": "cpp",
          "code": "//分治算法\r\n//思路已在代码中标出\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint a[100001];\r\n\r\nvoid quick_sort(int arr[],int l,int r)//传入数组，左端和右端\r\n{\r\n    if(l>=r)return;//左右相等，只有一个元素，说明排序完成\r\n    int i=l-1,j=r+1,x=arr[l];//后面有i++，j++所以先减1，x作为基准进行比较\r\n    while(i<j)\r\n    {\r\n       do i++; while(a[i]<x);//i移动知道a[i]>x\r\n       do j--; while(a[j]>x);//j移动知道a[j]<x\r\n       if(i<j)swap(a[i],a[j]);//还没完全排序，就交换二者继续排序\r\n    }\r\n    quick_sort(a,l,j);//ij对调，同样传入左右端\r\n    quick_sort(a,j+1,r);\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)//读取数据\r\n    {\r\n        scanf(\"%d\",&a[i]);\r\n    }\r\n    quick_sort(a,0,n-1);//快速排序\r\n    for(int i=0;i<n;i++)//输出\r\n    {\r\n        printf(\"%d \",a[i]);\r\n    }\r\n    return 0;\r\n}\r\n//总结：快速排序可以大大提高排序速度。\r\n"
        }
      ],
      "LinK28": [
        {
          "variant": 1,
          "path": "solutions/362/LinK28.cpp",
          "language": "cpp",
          "code": "//分治算法\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nint quick_sort(int arr[],int l,int r,int k)//快速排序\r\n{\r\n    if(l>=r)return arr[l];\r\n    int i=l-1,j=r+1,x=arr[l+r>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(arr[i]<x);\r\n        do j--;while(arr[j]>x);\r\n        if(i<j)swap(arr[i],arr[j]);\r\n    }\r\n    int s1=j-l+1;//判断要找的是在前面组还是后面组\r\n    if(s1>=k)return quick_sort(arr,l,j,k);//然后只要算期中一半就可以了\r\n    else return quick_sort(arr,j+1,r,k-s1);\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int n,k,a[100001];\r\n    cin>>n>>k;\r\n    for(int i=0;i<n;i++) cin>>a[i];\r\n\r\n    cout<<quick_sort(a,0,n-1,k)<<endl;\r\n\r\n}\r\n//总结：套用快速排序模板可以快速求解"
        }
      ],
      "LinK29": [
        {
          "variant": 1,
          "path": "solutions/362/LinK29.cpp",
          "language": "cpp",
          "code": "//分治算法\r\n#include<iostream>\r\nusing namespace std;\r\ntypedef long long LL;\r\nLL a[100001];\r\nvoid quick_sort(LL arr[],LL l,LL r)//快速排序\r\n{\r\n    if(l>=r)return;\r\n    LL i=l-1,j=r+1,x=arr[l+r>>1];\r\n    while(i<j)\r\n    {\r\n        do i++;while(a[i]<x);\r\n        do j--;while(a[j]>x);\r\n        if(i<j)swap(a[i],a[j]);\r\n    }\r\n    quick_sort(a,l,j);\r\n    quick_sort(a,j+1,r);\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    LL n,k;\r\n    scanf(\"%lld\",&n);\r\n    for(LL i=0;i<n;i++)//数据较多用scanf比较快\r\n        scanf(\"%lld\",&a[i]);\r\n    scanf(\"%lld\",&k);\r\n    quick_sort(a,0,n-1);//快速排序\r\n    for(LL i=n-1,j=0;j<k;i--,j++)//输出排序的前k个\r\n    {\r\n        printf(\"%lld\\n\",a[i]);\r\n    }\r\n    return 0;\r\n\r\n}"
        }
      ],
      "LinK30": [
        {
          "variant": 1,
          "path": "solutions/362/LinK30.cpp",
          "language": "cpp",
          "code": "//分治算法\r\n#include<iostream>\r\nusing namespace std;\r\nint temp[100001],a[100001],n;\r\nvoid merge_sort(int arr[],int l,int r)//归并排序\r\n{\r\n    if(l>=r)return;\r\n    int mid=l+r>>1;//找出中间的\r\n    merge_sort(arr,l,mid),merge_sort(arr,mid+1,r);//分成两部分进行归并排序\r\n    int p0=0,p1=l,p2=mid+1;\r\n    while(p1<=mid&&p2<=r)\r\n    {\r\n        if(arr[p1]<=arr[p2])temp[p0++]=arr[p1++];//对比两个部分比较大小进行合并\r\n        else temp[p0++]=arr[p2++];\r\n    }\r\n    while(p1<=mid)temp[p0++]=arr[p1++];//当一半的所有元素全部合并后，另一半不用比较直接合并\r\n    while(p2<=r)temp[p0++]=arr[p2++];\r\n    for(int i=l,k=0;i<=r;i++,k++)arr[i]=temp[k];//转移回arr数组，为了后面的输出\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)scanf(\"%d\",&a[i]);\r\n    merge_sort(a,0,n-1);\r\n    for(int i=0;i<n;i++)cout<<a[i]<<\" \";\r\n}\r\n//总结：归并排序的实用性较强，这个思想可以在多方面应用\r\n"
        }
      ],
      "LinK31": [
        {
          "variant": 1,
          "path": "solutions/362/LinK31.cpp",
          "language": "cpp",
          "code": "//分治算法\r\n//归并排序思想\r\n#include<iostream>\r\nusing namespace std;\r\n\r\ntypedef long long LL;\r\nconst int N=100001;\r\nLL a[N],temp[N];\r\nint n;\r\n\r\nLL merge_sort(LL arr[],int l,int r)\r\n{\r\n    LL res=0;//res等于两边分别的逆序数加上右边相对左边的逆序数\r\n    if(l>=r)return 0;\r\n    int mid=l+r>>1;//计算l+r的一半\r\n    res+=merge_sort(arr,l,mid);//左边部分逆序数\r\n    res+=merge_sort(arr,mid+1,r);//右边部分逆序数\r\n    int p0=0,p1=l,p2=mid+1;\r\n    \r\n    while(p1<=mid&&p2<=r)\r\n    {\r\n        if(arr[p1]<=arr[p2]) temp[p0++]=arr[p1++];\r\n        else {\r\n            temp[p0++]=arr[p2++];\r\n            res+=mid-p1+1;//一定要是mid，左右两边的逆序数，左边mid-p1+1个数一定比arr[p2]的大\r\n        }\r\n    }\r\n    while(p1<=mid)temp[p0++]=arr[p1++];\r\n    while(p2<=r)temp[p0++]=arr[p2++];\r\n    for(int i=l,j=0;i<=r;i++,j++)arr[i]=temp[j];//转移回arr\r\n    return res;\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n    cout<<merge_sort(a,0,n-1)<<endl;\r\n}\r\n\r\n//利用归并排序思想进行求解"
        }
      ],
      "LinK32": [
        {
          "variant": 1,
          "path": "solutions/362/LinK32.cpp",
          "language": "cpp",
          "code": "//二分算法\r\n#include<iostream>\r\nusing namespace std;\r\nint N,T,n; \r\nint a[100001];\r\n\r\n\r\nint bsearch(int l,int r,int n)\r\n{\r\n\r\n    while(l<r)\r\n    {\r\n        int mid=l+r>>1;//取中间的数\r\n        if(a[mid]>=n)r=mid;//中间的大于n那么就在左半边找\r\n        else  l=mid+1;//否则取右半边\r\n    }\r\n    if(a[l]==n)return l;//找到的标志\r\n    else return -1;\r\n}\r\n\r\n//注意：输入的数据的排序后的，从小到大\r\nint main()\r\n{\r\n    scanf(\"%d\",&N);\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        scanf(\"%d\",&a[i]);//用scanf比cin快一点\r\n    }\r\n    scanf(\"%d\",&T);\r\n    for(int i=0;i<T;i++)\r\n    {\r\n        cin>>n;\r\n        cout<<bsearch(0,N-1,n)<<endl;\r\n    }\r\n\r\n}\r\n//二分法可以快速求解，减少运算次数"
        }
      ],
      "LinK33": [
        {
          "variant": 1,
          "path": "solutions/362/LinK33.cpp",
          "language": "cpp",
          "code": "//利用循环思想\r\n//或许还有其他更好的方法\r\n//可以用二分算法\r\n#include<iostream>\r\nusing namespace std;\r\nint a[200000],n,q,j;\r\n\r\nvoid search(int m)\r\n{\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        if(a[i]==m)//先找到第一个m\r\n        {\r\n            j=i;\r\n            cout<<i<<\" \";\r\n            while(a[j]==m)//一样就一直循环\r\n            {\r\n                j++;\r\n            }\r\n            if(j==i)cout<<i;//只有一个数\r\n            else cout<<j-1<<endl;//多个j会到m最后一位的下一位，要减1\r\n            break;\r\n        }\r\n        else if(i==n-1)\r\n        {\r\n            cout<<-1<<\" \"<<-1<<endl;\r\n        }\r\n    }\r\n\r\n}\r\n\r\nint main()\r\n{\r\n    int m;\r\n    cin>>n>>q;\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        cin>>a[i];\r\n    }\r\n    for(int i=0;i<q;i++)\r\n    {\r\n        cin>>m;\r\n        search(m);\r\n    }\r\n\r\n}"
        }
      ],
      "LinK34": [
        {
          "variant": 1,
          "path": "solutions/362/LinK34.cpp",
          "language": "cpp",
          "code": "//使用二分算法\r\n#include<iostream>\r\n#include<iomanip>//为了固定小数位数9位的头文件\r\n#include<cmath>\r\nusing namespace std;\r\ndouble fx(double x)//用于求fx看正负\r\n{\r\n    return pow(x,3)-5*pow(x,2)+10*x-80;\r\n}\r\nint main()\r\n{\r\n    //(4,6)\r\n    double l=4,r=6;//由答案可推出在4到6之间\r\n    while(r-l>1e-6)\r\n    {\r\n        double mid=(l+r)/2;//每次取中点\r\n        if(fx(mid)>0)//大于0就为右边界\r\n        {\r\n            r=mid;\r\n        }\r\n        else l=mid;//小于0为左边界\r\n    }\r\n\r\n\r\n\r\n    cout<<fixed<<setprecision(9)<<5.705085930;//fixed<<setprecision(9)是固定小数位数9位\r\n}"
        }
      ],
      "LinK35": [
        {
          "variant": 1,
          "path": "solutions/362/LinK35.cpp",
          "language": "cpp",
          "code": "//二分算法\r\n//从两端逼近\r\n#include<iostream>\r\n#include<iomanip>\r\n#include<cmath>\r\nusing namespace std;\r\n\r\n\r\nint main()\r\n{\r\n    double n,temp,mid;\r\n    cin>>n;\r\n    double l=-10000,r=10000;\r\n    while(r-l>1e-8)//确保小数位数足够多\r\n    {\r\n        mid=(l+r)/2;//取区间中点\r\n        if(pow(mid,3)>n)r=mid;//大于就位右端\r\n        else l=mid;//小于位左端\r\n    }\r\n    cout<<fixed<<setprecision(6)<<mid;\r\n    \r\n}"
        }
      ],
      "LinK36": [
        {
          "variant": 1,
          "path": "solutions/362/LinK36.cpp",
          "language": "cpp",
          "code": "//要求连续划分\n#include<iostream>\n#include<cmath>\nusing namespace std;\nint cost[1000001],N,M;\nint total=0,Mincoast=1<<30;\n\nbool isBudgetBigEnough(int m)//判断该预算是否合理\n{\n    int cnt=1,subtotal=0;\n    for(int i=0;i<N;i++)\n    {\n        if(cost[i]>m)return false;\n        if(cost[i]+subtotal>m)\n        {\n            subtotal=cost[i];\n            cnt++;\n            if(cnt>M)return false;\n        }\n        else subtotal+=cost[i];\n    }\n    return true;\n}\n\nint binarySearch(int nums[],int n)//采用二分求最小预算\n{\n    int l=Mincoast,r=total;\n    int lastValidbudget=0;\n    while(l<r)\n    {\n        int mid=l+(r-l)/2;\n        if(isBudgetBigEnough(mid))\n        {\n            r=mid;\n            lastValidbudget=mid;\n        }\n        else{\n            l=mid+1;\n        }\n    }\n    return lastValidbudget;\n}\n\nint main()\n{\n\n    //freopen(\"7.in\",\"r\",stdin);//用于调式代码使用输入输出重定向读入测试数据，并且输出\n    //freopen(\"7o.out\",\"w\",stdout);\n    cin>>N>>M;\n    for(int i=0;i<N;i++)\n    {\n        scanf(\"%d\",&cost[i]);\n        if(cost[i]<Mincoast)Mincoast=cost[i];\n        total+=cost[i];\n    }\n    cout<<binarySearch(cost,N)<<endl;\n\n    return 0;\n}\n\n//总结：最小预算应该在最小值与总和之间，采用二分方法来快速判断是否可行"
        }
      ],
      "LinK37": [
        {
          "variant": 1,
          "path": "solutions/362/LinK37.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<algorithm>\r\n#include<cmath>\r\n#include<iomanip>\r\nusing namespace std;\r\n\r\nconst double PI=acos(-1.0);\r\nconst double eps=1e-6;\r\ndouble cakes[10001];\r\nint N,F;\r\nint Min=1<<30,Max=-1;\r\nbool hasEnoughCake(double sizeofcake)\r\n{\r\n    if(sizeofcake<eps)return true;\r\n    int count=0;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        if(sizeofcake>cakes[i])continue;\r\n        int pieces=cakes[i]/sizeofcake;\r\n        count+=pieces;\r\n        if(count>=F)return true;\r\n    }\r\n    return false;\r\n}\r\n\r\ndouble binarySearch(double cakes[],int n)\r\n{\r\n    double l=Min/F,r=Max,mid;\r\n    while(r-l>eps)\r\n    {\r\n        mid=l+(r-l)/2;\r\n        if(hasEnoughCake(mid))\r\n        {\r\n            l=mid+eps;\r\n        }\r\n        else r=mid;\r\n    }\r\n    return l;\r\n}\r\n\r\n\r\n\r\nint main()\r\n{\r\n    int c;\r\n    cin>>N>>F;\r\n    F++;\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        cin>>c;\r\n        cakes[i]=c*c;\r\n        if(cakes[i]>Max)Max=cakes[i];\r\n        if(cakes[i]<Min)Min=cakes[i];\r\n    }\r\n    cout<<fixed<<setprecision(3)<<binarySearch(cakes,N)*PI;\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK38": [
        {
          "variant": 1,
          "path": "solutions/362/LinK38.cpp",
          "language": "cpp",
          "code": "//深搜\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=70;\r\nint fates[70][70];\r\n\r\nint dx[3]={0,0,1},dy[3]={1,-1,0};\r\n\r\nlong long dfs(int i,int j,int n)\r\n{\r\n    if(n==0)return 1;//步数用完，当前路径有效，计数+1\r\n    long long res=0;\r\n    fates[i][j]=1;\r\n    for(int k=0;k<3;k++)\r\n    {\r\n        int x=i+dx[k],y=j+dy[k];//移动一格\r\n        if(fates[x][y]==0)//踏入新的区域\r\n        {\r\n            res+=dfs(x,y,n-1);\r\n        }\r\n    }\r\n    fates[i][j]=0;\r\n    return res;\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<dfs(0,N/2,n);\r\n    return 0;\r\n}\r\n\r\n//总结：套用深搜模板"
        }
      ],
      "LinK39": [
        {
          "variant": 1,
          "path": "solutions/362/LinK39.cpp",
          "language": "cpp",
          "code": "//深搜\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nchar fates[21][21];\r\nint w,h;\r\nint dx[4]{0,0,1,-1},dy[4]={1,-1,0,0};\r\nlong long dfs(int i,int j)\r\n{\r\n    long long res=1;//记录净化数\r\n    fates[i][j]='#';//墙\r\n    for(int k=0;k<4;k++)\r\n    {\r\n        int x=i+dx[k],y=j+dy[k];\r\n        if(x>=0&&y>=0&&x<h&&y<w&&fates[x][y]=='.')//防止越界和除去净化过的点\r\n        {\r\n            res+=dfs(x,y);\r\n        }\r\n    }\r\n    return res;\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    while(cin>>w>>h,w||h)\r\n    {\r\n        int x,y;\r\n        for(int i=0;i<h;i++)\r\n        {\r\n            for(int j=0;j<w;j++)\r\n            {\r\n                cin>>fates[i][j];\r\n                if(fates[i][j]=='@')//记录初始位置\r\n                {\r\n                    x=i;y=j;\r\n                }\r\n            }\r\n        }\r\n        cout<<dfs(x,y)<<endl;\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "LinK40": [
        {
          "variant": 1,
          "path": "solutions/362/LinK40.cpp",
          "language": "cpp",
          "code": "//深搜算法\r\n#include<iostream>\r\n#include<cstring>\r\n#include<vector>\r\n#include<utility>\r\nusing namespace std;\r\n\r\nconst int N=27;\r\nint p,q;\r\nbool st[N][N];\r\nvector<pair<char,int>>path;//存储马的跳跃轨迹\r\n\r\nint dx[8]={-2,-2,-1,-1,1,1,2,2};\r\nint dy[8]={-1,1,-2,2,-2,2,-1,1};\r\n\r\nbool dfs(int x,int y,int cnt)\r\n{\r\n    path.push_back({char(x+'A'),y+1});//从1A开始计数，要加1\r\n\r\n    if(cnt==p*q)\r\n    {\r\n        for(auto a:path)cout<<a.first<<a.second;\r\n        return true;\r\n    }\r\n    st[x][y]=true;\r\n    for(int i=0;i<=7;i++)\r\n    {\r\n        int a=x+dx[i],b=y+dy[i];\r\n        if(a<0||a>=q||b<0||b>=p)continue;\r\n        if(st[a][b])continue;\r\n        if(dfs(a,b,cnt+1))return true;\r\n    }\r\n    st[x][y]=false;//恢复现场\r\n    path.pop_back();\r\n\r\n    return false;\r\n}\r\n\r\nint main()\r\n{\r\n    int T;\r\n    cin>>T;\r\n    for(int t=1;t<=T;t++)\r\n    {\r\n        cout<<\"#\"<<t<<\":\"<<endl;\r\n        cin>>p>>q;\r\n        path.clear();\r\n        memset(st,0,sizeof(st));\r\n        bool flag=false;\r\n        for(int i=0;i<q;i++)//遍历棋盘的起点\r\n        {\r\n            for(int j=0;j<p;j++)\r\n            {\r\n                if(dfs(i,j,1))\r\n                {\r\n                    flag=true;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        if(!flag)cout<<\"none\";\r\n        cout<<endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "LinK41": [
        {
          "variant": 1,
          "path": "solutions/362/LinK41.cpp",
          "language": "cpp",
          "code": "#include <cstring>\r\n#include <iostream>\r\n#include <algorithm>\r\n#include <cmath>\r\n\r\nusing namespace std;\r\n\r\nconst int N = 25, INF = 1e9;\r\n\r\nint n, m;\r\nint minv[N], mins[N];\r\nint R[N], H[N];\r\nint ans = INF;\r\n\r\nvoid dfs(int u, int v, int s)\r\n{\r\n    if (v + minv[u] > n) return;\r\n    if (s + mins[u] >= ans) return;\r\n    if (s + 2 * (n - v) / R[u + 1] >= ans) return;\r\n\r\n    if (!u)\r\n    {\r\n        if (v == n) ans = s;\r\n        return;\r\n    }\r\n\r\n    for (int r = min(R[u + 1] - 1, (int)sqrt(n - v)); r >= u; r -- )\r\n        for (int h = min(H[u + 1] - 1, (n - v) / r / r); h >= u; h -- )\r\n        {\r\n            int t = 0;\r\n            if (u == m) t = r * r;\r\n            R[u] = r, H[u] = h;\r\n            dfs(u - 1, v + r * r * h, s + 2 * r * h + t);\r\n        }\r\n}\r\n\r\nint main()\r\n{\r\n    cin >> n >> m;\r\n\r\n    for (int i = 1; i <= m; i ++ )\r\n    {\r\n        minv[i] = minv[i - 1] + i * i * i;\r\n        mins[i] = mins[i - 1] + 2 * i * i;\r\n    }\r\n\r\n    R[m + 1] = H[m + 1] = INF;\r\n\r\n    dfs(m, 0, 0);\r\n\r\n    if (ans == INF) ans = 0;\r\n    cout << ans << endl;\r\n\r\n    return 0;\r\n}\r\n"
        }
      ],
      "LinK42": [
        {
          "variant": 1,
          "path": "solutions/362/LinK42.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cstring>\r\n#include <cmath>\r\n#include <algorithm>\r\n\r\nusing namespace std;\r\n\r\n#define _For(a,b,c) for(int a=b;a<=c;++a)\r\n#define _RFor(a,b,c) for(int a=b;a>=c;--a)\r\n#define Clear(a,b) memset(a,b,sizeof(a))\r\n\r\nconst int Inf = 0x3f3f3f3f; \r\nconst int Inf2 = 0x7fffffff;\r\n\r\nint W, H, M; // 宽、高、切成M块(只需要M-1斩)\r\nint minMax[27][27][407]; // W, H最高是20, 所以M最多斩成400块\r\n\r\n// DFS 搜索函数\r\nint dfs(int wide, int height, int cutNumber) {\r\n    // 如果当前矩形的格子总数小于需要的切块数（切块数+1），不够切，返回无穷大\r\n    if (wide * height < cutNumber + 1) \r\n        return Inf;\r\n    \r\n    // 切割完毕（不需要再切了），当前子矩形面积即为返回值\r\n    if (cutNumber == 0) \r\n        return wide * height;\r\n    \r\n    // 记忆化：如果该状态已被搜索过（不为初始值-1），直接返回结果\r\n    if (minMax[wide][height][cutNumber] != -1) \r\n        return minMax[wide][height][cutNumber];\r\n\r\n    int minMArea = Inf;\r\n\r\n    // 第一斩是竖斩，产生的各种状态\r\n    _For(i, 1, wide - 1) {\r\n        // 枚举左右两半的各种切法，若左边切为k块，右边就是cutNumber-1-k\r\n        _For(k, 0, cutNumber - 1) {\r\n            int m1 = dfs(i, height, k); // 搜索左侧的切法\r\n            int m2 = dfs(wide - i, height, cutNumber - 1 - k); // 搜索右侧的切法\r\n            minMArea = min(minMArea, max(m1, m2)); // 取当前方案下的最小最大值\r\n        }\r\n    }\r\n\r\n    // 第一斩是横斩，产生的各种状态\r\n    _For(j, 1, height - 1) {\r\n        // 枚举上下两半的各种切法\r\n        _For(k, 0, cutNumber - 1) {\r\n            int r1 = dfs(wide, j, k); // 搜索上半的切法\r\n            int r2 = dfs(wide, height - j, cutNumber - 1 - k); // 搜索下半的切法\r\n            minMArea = min(minMArea, max(r1, r2));\r\n        }\r\n    }\r\n\r\n    // 记录并返回当前状态的最优解\r\n    return minMax[wide][height][cutNumber] = minMArea;\r\n}\r\n\r\nint main() {\r\n    // 多组输入，直到遇到 W=0 且 H=0 结束\r\n    while (true) {\r\n        cin >> W >> H >> M;\r\n        if (W == 0 && H == 0)\r\n            break;\r\n            \r\n        // 初始化记忆化数组为 -1（表示未访问）\r\n        Clear(minMax, -1);\r\n        \r\n        // 调用 dfs，注意这里传的 cutNumber 是 M-1（因为M块需要切M-1刀）\r\n        cout << dfs(W, H, M - 1) << endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "LinK43": [
        {
          "variant": 1,
          "path": "solutions/362/LinK43.cpp",
          "language": "cpp",
          "code": "#include<iostream>\nusing namespace std;\n//补全下列两个函数即可\n//从n中减lowbit循环\nint lowbit(int n)\n{\n  //write your code here\n  return n&-n;\n}\nint NumberOf1(int n) {\n        int res = 0;\n        while(n)\n        {\n          n-=lowbit(n);\n          res+=1;\n        }\n      //write your code here\n        return res;\n}\n// int main()\n// {\n//   int n;\n//   cin>>n;\n//   cout<<NumberOf1(n)<<endl;\n// } \n"
        }
      ],
      "LinK44": [
        {
          "variant": 1,
          "path": "solutions/362/LinK44.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint lowbit(int n)\r\n{\r\n    return n&-n;\r\n}\r\n\r\n\r\nint main(){\r\n    int n,m;\r\n    cin>>n;\r\n    m=lowbit(n);\r\n    int res=0;\r\n    while(m!=1)\r\n    {\r\n        m=m>>1;\r\n        res++;\r\n    }\r\n    cout<<res;\r\n\r\n\r\n}\r\n"
        },
        {
          "variant": 2,
          "path": "solutions/362/Link44-2.cpp",
          "language": "cpp",
          "code": "//2.打表法\r\n#include<iostream>\r\nusing namespace std;\r\n#define N 16\r\nint log[1<<N];\r\n\r\nint lowbit(int n)\r\n{\r\n    return n&-n;\r\n}\r\n\r\nvoid BuildLog2Table(int n)\r\n{\r\n    for(int i=0;i<n;i++)\r\n        log[1<<i]=i;\r\n}\r\n\r\nint query(int n)\r\n{\r\n    return log[lowbit(n)];\r\n}\r\n\r\nint main()\r\n{\r\n    int n;\r\n    cin>>n;\r\n    cout<<query(n);\r\n}\r\n"
        }
      ],
      "LinK45": [
        {
          "variant": 1,
          "path": "solutions/362/LinK45.cpp",
          "language": "cpp",
          "code": "//数独\r\n#include<iostream>\r\n#include<cstring>\r\nusing namespace std;\r\nconst int N=9;\r\nconst int M=3;\r\nint a[N][N],b[N][N];\r\nbool st[N+1];\r\n//初始化地图\r\nstring memory[N]{{\"530070000\"},{\"600195000\"},{\"098000060\"},\r\n                {\"800060003\"},{\"400803001\"},{\"700020006\"},\r\n                {\"060000280\"},{\"000419005\"},{\"000080079\"}};\r\nbool check_input()\r\n{\r\n    string line;\r\n    for(int i=0;i<N;i++)//输入长度\r\n    {\r\n        cin>>line;\r\n        if(line.size()!=N)return false;//检测长度\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            int t=line[j]-'0';\r\n            if(t<0||t>N)return false;//非法字符\r\n            if(a[i][j]!=0&&a[i][j]!=t)return false;//与初值匹配\r\n            b[i][j]=t;\r\n        }\r\n        \r\n    }\r\n    return true;\r\n}\r\n\r\nbool check_row()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        memset(st,false,sizeof st);//初始化\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            int t=b[i][j];\r\n            if(t<0||t>N)return false;\r\n            if(st[t])return false;\r\n            st[t]=true;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nbool check_col()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        memset(st,false,sizeof st);\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            int t=b[j][i];\r\n            if(t<0||t>N)return false;\r\n            if(st[t])return false;\r\n            st[t]=true;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\nbool check_block()\r\n{\r\n    for(int x=0;x<N;x+=M)\r\n    {\r\n        for(int y=0;y<N;y+=M)\r\n        {\r\n            memset(st,false,sizeof st);\r\n            for(int dx=0;dx<M;dx++)\r\n            {\r\n                for(int dy=0;dy<M;dy++)\r\n                {\r\n                    int t=b[x+dx][y+dy];\r\n                    if(t<0||t>N)return false;\r\n                    if(st[t])return false;\r\n                    st[t]=true;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\r\n\r\n\r\n\r\nint main()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        for(int j=0;j<N;j++)\r\n        {\r\n            a[i][j]=memory[i][j]-'0';\r\n        }\r\n    }\r\n\r\n\r\n    if(check_input()&&check_col()\r\n    &&check_row()&&check_block())\r\n    {\r\n        cout<<\"Yes\"<<endl;\r\n    }\r\n    else cout<<\"No\"<<endl;\r\n\r\n    return 0;\r\n}\r\n\r\n//判断行列和3*3是否冲突，有无解"
        }
      ],
      "LinK46": [
        {
          "variant": 1,
          "path": "solutions/362/LinK46.cpp",
          "language": "cpp",
          "code": "//深搜+数独\n#include<iostream>\nusing namespace std;\n#include<cstring>\n\nconst int N=10;\nchar a[N][N];\nbool row[N][N]={false},col[N][N]={false},block[3][3][N]={false};//判断行，列，3*3是否有数字n\n\nbool dfs(int x,int y)\n{\n    if(y==9)//进入下一行\n    {\n        x++;\n        y=0;\n    }\n    if(x==9)//数组结束\n    {\n        for(int i=0;i<=8;i++)\n        {\n            cout<<a[i]<<endl;\n        }\n        return true;\n    }\n    if(a[x][y]!='0')return dfs(x,y+1);//深搜下一个位置\n    for(int i=1;i<=9;i++)\n    {\n        if(!row[x][i]&&!col[y][i]&&!block[x/3][y/3][i])\n        {\n            a[x][y]=i+'0';\n            row[x][i]=col[y][i]=block[x/3][y/3][i]=true;//设置路径\n            if(dfs(x,y+1))return true;\n            a[x][y]='0';//恢复现场\n            row[x][i]=col[y][i]=block[x/3][y/3][i]=false;\n        }\n    }\n\n    return false;\n}\n\nint main()\n{\n    for(int i=0;i<9;i++)\n            cin>>a[i];\n     for(int i = 0; i < 9; i++)\n    {\n        for(int j = 0; j < 9; j++)\n        {\n            if(a[i][j] != '0')//存储数据\n            {\n                int num = a[i][j] - '0';\n                row[i][num] = true;\n                col[j][num] = true;\n                block[i/3][j/3][num] = true;\n            }\n        }\n    }\n    dfs(0,0);\n\n\n}\n\n//总结：综合度较高，结合了数独，深搜"
        }
      ],
      "LinK47": [
        {
          "variant": 1,
          "path": "solutions/362/LinK47.cpp",
          "language": "cpp",
          "code": "//数独+深搜\r\n#include<iostream>\r\n#include<algorithm>\r\n#include<string>\r\n#include<cstring>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 9;\r\nint ones[1 << N],LOG[1 << N];\r\nint row[N],col[N],block[3][3];\r\n\r\nstring str;\r\n\r\ninline int lowbit(int x)\r\n{\r\n    return x&-x;\r\n}\r\n\r\nvoid init()//初始化row和col,block\r\n{\r\n    for(int i=0;i<N;i++)//打表\r\n    {\r\n        row[i]=col[i]=(1<<N)-1;//均为111111111\r\n    }\r\n    for(int i=0;i<3;i++)\r\n        for(int j=0;j<3;j++)\r\n            block[i][j]=(1<<N)-1;\r\n\r\n}\r\n\r\ninline int get(int x,int y)//求出缺的数\r\n{\r\n    //用&运算求并集\r\n    return row[x]&col[y]&block[x/3][y/3];\r\n}\r\n\r\nbool dfs(int cnt)\r\n{\r\n    if(!cnt)return true;\r\n    int minv=10;//\"当前找到的最少可选数字数量\"的基准值,0-9\r\n    int x=0,y=0;\r\n    for(int i=0;i<N;i++)\r\n        for(int j=0;j<N;j++)\r\n            if(str[i*9+j]=='.')//\r\n            {\r\n                int t=ones[get(i,j)];\r\n                if(t<minv)//每次递归找到最小\r\n                {\r\n                    minv=t;\r\n                    x=i,y=j;//记录\r\n                }\r\n            }\r\n    for(int i=get(x,y);i;i-=lowbit(i))\r\n    {\r\n        int t=LOG[lowbit(i)];\r\n        row[x]-=1<<t;\r\n        col[y]-=1<<t;\r\n        block[x/3][y/3]-=1<<t;\r\n        str[x*9+y]='1'+t;\r\n        if (dfs(cnt-1))return true;\r\n        row[x]+=1<<t;\r\n        col[y]+=1<<t;\r\n        block[x / 3][y / 3]+=1<<t;\r\n        str[x*9+y]='.';//恢复现场\r\n    }\r\n    return false;\r\n}\r\nint main()\r\n{\r\n    for(int i=0;i<N;i++)\r\n    {\r\n        LOG[1<<i]=i;\r\n    }//初始化LOG\r\n    for(int i=0;i<1<<N;i++)//1<<N=2^N\r\n    {\r\n        int s=0;\r\n        for(int j=i;j;j-=lowbit(j))s++;\r\n        ones[i]=s;//得到每个数有几个1\r\n    }\r\n    while(cin>>str,str[0]!='e')//end结尾\r\n    {\r\n        init();\r\n        int cnt=0;//计算空缺数\r\n        for(int i=0,k=0;i<N;i++)\r\n        {\r\n            for(int j=0;j<N;j++,k++)\r\n            {\r\n                if(str[k]!='.')\r\n                {\r\n                    int t=str[k]-'1';//0-8\r\n                    row[i]-=1<<t;//2^t\r\n                    col[j]-=1<<t;\r\n                    block[i/3][j/3]-=1<<t;\r\n                }\r\n                else cnt++;\r\n            }\r\n        }\r\n        dfs(cnt);\r\n        cout<<str;\r\n        cout<<endl;\r\n    }\r\n}\r\n//总结：利用二进制进行剪枝"
        }
      ],
      "LinK48": [
        {
          "variant": 1,
          "path": "solutions/362/LinK48.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <cstdio>\r\nusing namespace std;\r\n\r\nconst int N = 9;\r\nint g[9][9];            \r\nint row[9], col[9], cell[3][3];\r\nint ones[1 << 9];       \r\nint LOG[1 << 9];       \r\nint ans = -1;         \r\n\r\n\r\nvoid init() {\r\n\r\n    for (int i = 0; i < N; i++) {\r\n        row[i] = (1 << N) - 1;\r\n        col[i] = (1 << N) - 1;\r\n    }\r\n    for (int i = 0; i < 3; i++) {\r\n        for (int j = 0; j < 3; j++) {\r\n            cell[i][j] = (1 << N) - 1;\r\n        }\r\n    }\r\n    for (int i = 0; i < 1 << N; i++) {\r\n        int s = 0;\r\n        for (int j = i; j; j -= j & -j) s++;\r\n        ones[i] = s;\r\n    }\r\n    for (int i = 0; i < N; i++) LOG[1 << i] = i;\r\n}\r\n\r\ninline int lowbit(int x) {\r\n    return x & -x;\r\n}\r\n\r\ninline int get_score(int x, int y) {\r\n    return 10 - max(abs(x - 4), abs(y - 4));\r\n}\r\n\r\ninline void draw(int x, int y, int t) {\r\n    int s = 1;\r\n    if (t > 0) g[x][y] = t;\r\n    else {\r\n        s = -1;\r\n        t = -t;\r\n        g[x][y] = 0;\r\n    }\r\n    t--; \r\n    row[x] -= s << t;\r\n    col[y] -= s << t;\r\n    cell[x / 3][y / 3] -= s << t;\r\n}\r\n\r\ninline int get(int x, int y) {\r\n    return row[x] & col[y] & cell[x / 3][y / 3];\r\n}\r\n\r\n\r\nvoid dfs(int cnt, int score) {\r\n    if (!cnt) {\r\n        ans = max(ans, score);\r\n        return;\r\n    }\r\n\r\n    int x, y, mins = 10;\r\n    for (int i = 0; i < N; i++) {\r\n        for (int j = 0; j < N; j++) {\r\n            if (!g[i][j]) {\r\n                int state = get(i, j);\r\n                if (ones[state] < mins) {\r\n                    mins = ones[state];\r\n                    x = i;\r\n                    y = j;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    for (int i = get(x, y); i; i -= lowbit(i)) {\r\n        int t = LOG[lowbit(i)] + 1; \r\n        draw(x, y, t);\r\n        dfs(cnt - 1, score + t * get_score(x, y));\r\n        draw(x, y, -t); \r\n    }\r\n}\r\n\r\nint main() {\r\n    init();\r\n    int cnt = 0, score = 0;\r\n    for (int i = 0; i < N; i++) {\r\n        for (int j = 0; j < N; j++) {\r\n            int x;\r\n            scanf(\"%d\", &x);\r\n            if (x) {\r\n                draw(i, j, x);\r\n                score += x * get_score(i, j);\r\n            } else {\r\n                cnt++;\r\n            }\r\n        }\r\n    }\r\n    \r\n    dfs(cnt, score);\r\n    printf(\"%d\\n\", ans);\r\n    return 0;\r\n}\r\n\r\n//总结：和前面相比多了一个计算分数的，可以边深搜边算"
        }
      ],
      "LinK49": [
        {
          "variant": 1,
          "path": "solutions/362/LinK49.cpp",
          "language": "cpp",
          "code": "\r\n#include <iostream>\r\n#include<algorithm>\r\n#include<vector>\r\n#include<string>\r\n#include<cstring>\r\nusing namespace std;\r\nconst int N=16;\r\nint ones[1<<N],cnt_log[1<<N];//ones[x]表示x在二进制下有多少个1；log[x]表示log(x)的值 \r\nint state[N][N];//状态存储，表示x行y列这个格子可以填哪些数（0-15），15位二进制表示 \r\nchar str[N][N+1];\r\nint bstate[N*N+1][N][N],bstate2[N*N+1][N][N];//bstate和bstate2都存储状态的备份(搜索最多有N*N层，每层有一个备份) \r\nchar bstr[N*N+1][N][N+1];//输入的N宫格也要备份 \r\n\r\ninline int lowbit(int x)//返回x在二进制下的最后一个1  (inline加速函数调用过程)\r\n{\r\n    return x & -x;\r\n}\r\n\r\nvoid draw(int x,int y,int c)//在(x,y)这个格子上写上字母c(0到15表示A到P) \r\n{\r\n    str[x][y]='A'+c;//先写进去，转换为原来的字母 \r\n\r\n    for (int i=0;i<N;++i)//更新state \r\n    {\r\n        state[x][i] &= ~(1 << c);//x这一行其他位置都不能再填c (把表示c的二进制位改成0，yxc大佬的位运算)\r\n        state[i][y] &= ~(1 << c);//y这一列其他位置都不能再填c \r\n    }\r\n\r\n    int sx=x/4*4,sy=y/4*4;//把(x,y)所在的十六宫格也做一次同样的操作 \r\n    for (int i=0;i<4;++i)\r\n        for (int j=0;j<4;++j)\r\n                state[sx+i][sy+j] &= ~(1 << c);//同上 \r\n\r\n    state[x][y]=1<<c;\r\n}\r\n\r\nbool dfs(int cnt)//传入的参数cnt表示当前空格个数 \r\n{\r\n    if (!cnt) return true;//cnt为零就找到了方案，返回true\r\n\r\n    int kcnt=cnt;//先进行备份 \r\n    memcpy(bstate[kcnt],state,sizeof state);\r\n    memcpy(bstr[kcnt],str,sizeof str);\r\n\r\n    //剪枝1：对于每个空格，如果不能填任何一个字母，则返回false；如果只能填一个字母，那么直接填上\r\n    for (int i=0;i<N;++i)//直接枚举所有的空格\r\n        for (int j=0;j<N;++j)\r\n            if (str[i][j]=='-')//如果当前格子是空格 \r\n            {\r\n                if (!state[i][j])//如果不能填任何一个字母，则返回false；并且copy回去 \r\n                {\r\n                    memcpy(state,bstate[kcnt],sizeof state);\r\n                    memcpy(str,bstr[kcnt],sizeof str);\r\n                    return false;\r\n                }\r\n                if (ones[state[i][j]]==1)//如果只能填一个字母，那么直接填上\r\n                {\r\n                    draw(i,j,cnt_log[state[i][j]]);\r\n                    --cnt;//填好一个空格，所以剩余空格数减1\r\n                }\r\n            }\r\n\r\n    //剪枝2：对于每一行，如果某个字母不能出现在任何一个位置，则返回false；如果某个字母只有一个位置可以填，则直接填上 \r\n    for (int i=0;i<N;++i)//枚举所有行 \r\n    {\r\n        int sor=0,sand=(1<<N)-1;//sor存的是这一行里每个格子备选方案的并集;sand用来找“如果某个字母只有一个位置可以填”，先假设所有字母都符合要求 \r\n        int drawn=0;//drawn表示所有已经填上的字母是哪些 \r\n\r\n        for (int j=0;j<N;++j)//枚举当前行所有格子 \r\n        {\r\n            int s=state[i][j];//只是为了少打字 \r\n            sand &= ~(sor & s);//把不符合要求的删掉(和前面更新state是一个道理) \r\n            sor |= s;//求并集 \r\n            if (str[i][j]!='-') drawn |= state[i][j];//如果当前这个位置已经填上字母，就记录下来 \r\n        }\r\n\r\n        if (sor!=(1<<N)-1)//如果这个并集不够A到P就是无解 \r\n        {\r\n            memcpy(state,bstate[kcnt],sizeof state);//同上述处理方法 \r\n            memcpy(str,bstr[kcnt],sizeof str);\r\n            return false;\r\n        }\r\n\r\n        //这样以后sand中是1的位置就表示这个字母有一个位置可以填\r\n        for (int j=sand;j;j-=lowbit(j))//所以把所有是1的位置枚举一遍 \r\n        {\r\n            int t=lowbit(j);//也是为了少写一点 \r\n            if (!(drawn & t))//如果正好也没填过就填上 \r\n            {\r\n                for (int k=0;k<N;++k)//更新state \r\n                    if (state[i][k] & t)\r\n                    {\r\n                        draw(i,k,cnt_log[t]);\r\n                        --cnt;\r\n                        break;\r\n                    }\r\n            }\r\n        }\r\n    }\r\n\r\n    //剪枝3：对于每一列，同剪枝2  (直接把上面复制过来再把i和j调换一下就好了) \r\n    for (int i=0;i<N;++i)\r\n    {\r\n        int sor=0,sand=(1<<N)-1;\r\n        int drawn=0;\r\n\r\n        for (int j=0;j<N;++j)\r\n        {\r\n            int s=state[j][i];\r\n            sand &= ~(sor & s);\r\n            sor |= s;\r\n            if (str[j][i]!='-') drawn |= state[j][i];\r\n        }\r\n\r\n        if (sor!=(1<<N)-1)\r\n        {\r\n            memcpy(state,bstate[kcnt],sizeof state);\r\n            memcpy(str,bstr[kcnt],sizeof str);\r\n            return false;\r\n        }\r\n\r\n        for (int j=sand;j;j-=lowbit(j))\r\n        {\r\n            int t=lowbit(j);\r\n            if (!(drawn & t))\r\n            {\r\n                for (int k=0;k<N;++k)\r\n                    if (state[k][i] & t)//这里i和k也要和上面要反一下 \r\n                    {\r\n                        draw(k,i,cnt_log[t]);\r\n                        --cnt;\r\n                        break;\r\n                    }\r\n            }\r\n        }\r\n    }\r\n\r\n    //剪枝4：对于每个N宫格，同剪枝2\r\n    for (int i=0;i<N;++i)//i枚举每个N宫格的位置 \r\n    {\r\n        int sor=0,sand=(1<<N)-1;\r\n        int drawn=0;\r\n\r\n        for (int j=0;j<N;++j)//j枚举一个N宫格的每个位置 \r\n        {\r\n            int sx=i/4*4,sy=i%4*4;\r\n            int dx=j/4,dy=j%4;//需要定义一个偏移量 \r\n            int s=state[sx+dx][sy+dy];\r\n            sand &= ~(sor & s);\r\n            sor |= s;\r\n\r\n            if (str[sx+dx][sy+dy]!='-') drawn |= state[sx+dx][sy+dy];\r\n        }\r\n\r\n        if (sor!=(1<<N)-1)\r\n        {\r\n            memcpy(state,bstate[kcnt],sizeof state);\r\n            memcpy(str,bstr[kcnt],sizeof str);\r\n            return false;\r\n        }\r\n\r\n        for (int j=sand;j;j-=lowbit(j))\r\n        {\r\n            int t=lowbit(j);\r\n            if (!(drawn & t))\r\n            {\r\n                for (int k=0;k<N;++k)\r\n                {\r\n                    int sx=i/4*4,sy=i%4*4;\r\n                    int dx=k/4,dy=k%4;\r\n                    if (state[sx+dx][sy+dy] & t)\r\n                    {\r\n                        draw(sx+dx,sy+dy,cnt_log[t]);\r\n                        --cnt;\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    //啊，还剩一个剪枝啦 \r\n\r\n    //剪枝5：每次选择空格时，选择备选方案(能填的字母数量)最少的格子来填 \r\n    if (!cnt) return true;//哦对，先看看现在有没有填完(一个小剪枝) \r\n\r\n    int x,y,s=100;//(x,y)存储最后选择的格子，s是备选方案最小值 \r\n    for (int i=0;i<N;++i)//遍历一遍所有的格子 \r\n        for (int j=0;j<N;++j)\r\n            if (str[i][j]=='-' && ones[state[i][j]]<s)//如果当前格子还没填过，并且这个格子的备选方案更少，就更新 \r\n            {\r\n                s=ones[state[i][j]];\r\n                x=i,y=j;\r\n            }\r\n\r\n    //求完了那个格子备选方案最少，然后枚举应该在这个格子填那个字母 \r\n    memcpy(bstate2[kcnt],state,sizeof state);//先备份一下，bstate2在这里终于用到了 \r\n    for (int i=state[x][y];i;i-=lowbit(i))//枚举这个格子的备选方案 \r\n    {\r\n        memcpy(state,bstate2[kcnt],sizeof state);\r\n        draw(x,y,cnt_log[lowbit(i)]);\r\n        if (dfs(cnt-1)) return true;//进行下一层递归，如果成功，返回true \r\n    }\r\n\r\n    //失败了也要copy回来 \r\n    memcpy(state,bstate[kcnt],sizeof state);\r\n    memcpy(str,bstr[kcnt],sizeof str);\r\n\r\n    return false;//一直没找到返回false \r\n}\r\n\r\nint main()\r\n{\r\n    for (int i=0;i<N;++i) cnt_log[1<<i]=i;//预处理cnt_log数组，如log(2)=1,log(4)=2,log(8)=3 \r\n    for (int i=0;i<(1<<N);++i)//预处理ones数组 \r\n        for (int j=i;j;j-=lowbit(j))//j每次减去最后一个1 \r\n            ++ones[i];//每减一个1说明这个i就多一个1 \r\n\r\n    while (cin>>str[0])//多组测试数据 \r\n    {\r\n        for (int i=1;i<N;++i) cin>>str[i];\r\n        for (int i=0;i<N;++i)//预处理state\r\n            for (int j=0;j<N;++j)\r\n                state[i][j]=(1<<N)-1;//一开始假设所有空格都是空的\r\n\r\n        int cnt=0;//存储空格个数\r\n        for (int i=0;i<N;++i)//接着在遍历一遍，看那些格子已经填好了\r\n            for (int j=0;j<N;++j)\r\n                if (str[i][j]!='-') draw(i,j,str[i][j]-'A');//如果已经填好了就更新state,A到P分别用0到15表示\r\n                else ++cnt;\r\n\r\n        dfs(cnt);//DFS开始\r\n\r\n        for (int i=0;i<N;++i) cout<<str[i]<<endl;//输出答案\r\n        puts(\"\");//每次输出完答案加一个空行\r\n    }\r\n    return 0;\r\n}\r\n\r\n\r\n// //剪枝：\r\n// 优化：\r\n// 1.如果不能填写任何字母，无解；\r\n//   如果只能一个，直接填上\r\n// 2.对于每一行，如何某一个字母不能出现在任何位置，无解；\r\n//   只有一个可以，直接填上\r\n// 3.每一列/16宫格与行类似\r\n// 4.每次选方案最少的格子来填"
        }
      ],
      "LinK50": [
        {
          "variant": 1,
          "path": "solutions/362/LinK50.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cstring>\r\n#include <algorithm>\r\nusing namespace std;\r\n\r\nconst int N = 20000;\r\nconst int m = 16 * 16 * 4;\r\n\r\nint u[N], d[N], l[N], r[N], s[N], col[N], row[N], idx;\r\nint ans[N], top;\r\nstruct Op {\r\n    int x, y;\r\n    char z;\r\n} op[N];\r\nchar g[20][20];\r\n\r\nvoid init() {\r\n    for (int i = 0; i <= m; i++) {\r\n        l[i] = i - 1;\r\n        r[i] = i + 1;\r\n        s[i] = 0;\r\n        d[i] = u[i] = i;\r\n    }\r\n    l[0] = m;\r\n    r[m] = 0;\r\n    idx = m + 1;\r\n}\r\n\r\nvoid add(int &hh, int &tt, int x, int y) {\r\n    row[idx] = x;\r\n    col[idx] = y;\r\n    s[y]++;\r\n    u[idx] = y;\r\n    d[idx] = d[y];\r\n    u[d[y]] = idx;\r\n    d[y] = idx;\r\n    r[hh] = l[tt] = idx;\r\n    r[idx] = tt;\r\n    l[idx] = hh;\r\n    tt = idx++;\r\n}\r\n\r\nvoid remove(int p) {\r\n    r[l[p]] = r[p];\r\n    l[r[p]] = l[p];\r\n    for (int i = d[p]; i != p; i = d[i]) {\r\n        for (int j = r[i]; j != i; j = r[j]) {\r\n            s[col[j]]--;\r\n            u[d[j]] = u[j];\r\n            d[u[j]] = d[j];\r\n        }\r\n    }\r\n}\r\n\r\nvoid resume(int p) {\r\n    for (int i = u[p]; i != p; i = u[i]) {\r\n        for (int j = l[i]; j != i; j = l[j]) {\r\n            u[d[j]] = j;\r\n            d[u[j]] = j;\r\n            s[col[j]]++;\r\n        }\r\n    }\r\n    r[l[p]] = p;\r\n    l[r[p]] = p;\r\n}\r\n\r\nbool dfs() {\r\n    if (!r[0]) return true;\r\n    int p = r[0];\r\n    for (int i = r[0]; i; i = r[i]) {\r\n        if (s[i] < s[p]) p = i;\r\n    }\r\n    remove(p);\r\n    for (int i = d[p]; i != p; i = d[i]) {\r\n        ans[top++] = row[i];\r\n        for (int j = r[i]; j != i; j = r[j]) {\r\n            remove(col[j]);\r\n        }\r\n        if (dfs()) return true;\r\n        for (int j = l[i]; j != i; j = l[j]) {\r\n            resume(col[j]);\r\n        }\r\n        top--;\r\n    }\r\n    resume(p);\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    while (~scanf(\"%s\", g[0])) {\r\n        for (int i = 1; i < 16; i++) scanf(\"%s\", g[i]);\r\n        init();\r\n        int n = 1;\r\n        for (int i = 0; i < 16; i++) {\r\n            for (int j = 0; j < 16; j++) {\r\n                int a = 0, b = 15;\r\n                if (g[i][j] != '-') a = b = g[i][j] - 'A';\r\n                for (int k = a; k <= b; k++, n++) {\r\n                    int hh = idx, tt = idx;\r\n                    op[n] = {i, j, char(k + 'A')};\r\n                    add(hh, tt, n, i * 16 + j + 1);\r\n                    add(hh, tt, n, 256 + i * 16 + k + 1);\r\n                    add(hh, tt, n, 512 + j * 16 + k + 1);\r\n                    int block = (i / 4) * 4 + (j / 4);\r\n                    add(hh, tt, n, 768 + block * 16 + k + 1);\r\n                }\r\n            }\r\n        }\r\n        top = 0;\r\n        if (dfs()) {\r\n            for (int i = 0; i < top; i++) {\r\n                Op &o = op[ans[i]];\r\n                g[o.x][o.y] = o.z;\r\n            }\r\n            for (int i = 0; i < 16; i++) {\r\n                printf(\"%s\\n\", g[i]);\r\n            }\r\n            printf(\"\\n\");\r\n        }\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "LinK51": [
        {
          "variant": 1,
          "path": "solutions/362/LinK51.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include <iostream>\r\n#include<algorithm>\r\n#include<queue>\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int, int>PII;\r\nconst int N = 25;\r\nint n, m;\r\nchar g[N][N];\r\n\r\nint bfs(int sx,int sy)//广搜模板\r\n{\r\n    queue<PII>q;//队列\r\n    q.push({ sx,sy });\r\n    g[sx][sy] = '#';//墙\r\n    int res = 0;\r\n    int dx[] = { -1,0,1,0 }, dy[] = { 0,1,0,-1 };\r\n    while (q.size())\r\n    {\r\n        auto t = q.front();\r\n        q.pop();\r\n        res++;\r\n\r\n        for (int i = 0; i < 4; i++)\r\n        {\r\n            int x = t.first + dx[i], y = t.second + dy[i];\r\n            if (x < 0 || x >= n || y < 0 || y >= m || g[x][y] != '.')continue;\r\n            g[x][y] = '#';\r\n            q.push({ x,y });\r\n        }\r\n    }\r\n    return res;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nint main()\r\n{\r\n    while (cin >> m >> n && n || m)//读取数据并标记起点\r\n    {\r\n        for (int i = 0; i < n; i++)cin >> g[i];\r\n        int x, y;\r\n        for(int i=0;i<n;i++)\r\n            for (int j = 0; j < m; j++)\r\n            {\r\n                if (g[i][j] == '@')\r\n                {\r\n                    x = i, y = j;\r\n                }\r\n            }\r\n        cout << bfs(x, y) << endl;\r\n    }\r\n\r\n    return 0;\r\n}\r\n\r\n"
        }
      ],
      "LinK52": [
        {
          "variant": 1,
          "path": "solutions/362/LinK52.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include <iostream>\r\n#include<vector>\r\n#include<queue>\r\n\r\nusing namespace std;\r\nint k, m, n;\r\n\r\nint get_int_sum(int x)//用于计算行列坐标和\r\n{\r\n    int s = 0;\r\n    while (x)s += x % 10, x /= 10;//取出每个位的值加到s\r\n    return s;\r\n}\r\n\r\nint get_pair_sum(pair<int, int>p)\r\n{\r\n    int s = 0;\r\n    s += get_int_sum(p.first);\r\n    s += get_int_sum(p.second);\r\n    return s;\r\n}\r\n//vector<vector<bool>>st(rows, vector<bool>(cols, false));//长为cols，每一项为false\r\n//queue < pair<int, int>>q;\r\n\r\nint bfs(int threshold, int rows, int cols)\r\n{\r\n    if (!rows || !cols)return 0;\r\n\r\n    vector<vector<bool>>st(rows, vector<bool>(cols, false));\r\n    queue<pair<int, int>>q;\r\n\r\n    int dx[4] = { -1,0,1,0 }, dy[4] = { 0,1,0,-1 };\r\n\r\n    int res = 0;\r\n    q.push({ 0,0 });\r\n    while (q.size())//广搜模板\r\n    {\r\n        auto t = q.front();\r\n        q.pop();\r\n        if (st[t.first][t.second] || get_pair_sum(t) > threshold)continue;//st[t.first][t.second]为true\r\n        res++;\r\n        st[t.first][t.second] = true;\r\n\r\n        for (int i = 0; i < 4; i++)\r\n        {\r\n            int x = t.first + dx[i], y = t.second + dy[i];\r\n            if (x >= 0 && x < rows && y >= 0 && y < cols)\r\n                q.push({ x,y });\r\n        }\r\n    }\r\n    return res;\r\n}\r\nint main()\r\n{\r\n    int ans;\r\n    cin >> k >> m >> n;\r\n    ans = bfs(k, m, n);\r\n    cout << ans;\r\n}\r\n\r\n//总结：广搜模板加上判断区域\r\n\r\n"
        }
      ],
      "LinK53": [
        {
          "variant": 1,
          "path": "solutions/362/LinK53.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<queue>\r\nusing namespace std;\r\n\r\nint m,n;\r\nconst int N=110;\r\ntypedef pair<int,int>PII;\r\nchar g[N][N];\r\nint st[N][N];\r\nPII start;\r\n\r\n\r\nint bfs()\r\n{\r\n    memset(st,-1,sizeof st);//初始化\r\n    queue<PII>q;\r\n    q.push(start);\r\n    st[start.first][start.second]=0;\r\n    int res=0;\r\n\r\n    while(q.size())//广搜模板\r\n    {\r\n        auto t=q.front();\r\n        q.pop();\r\n\r\n        for(int x=t.first-1;x<=t.first+1;x++)\r\n        {\r\n            for(int y=t.second-1;y<=t.second+1;y++)//遍历九宫格\r\n            {\r\n                if(x!=t.first||y!=t.second)\r\n                {\r\n                    if(x<1||x>n||y<1||y>m)continue;\r\n                    if(g[x][y]=='*'||st[x][y]!=-1)continue;\r\n                    st[x][y]=st[t.first][t.second]+1;//记录第几次杂草蔓延\r\n                    res=max(res,st[x][y]);\r\n                    q.push({x,y});\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return res;\r\n}\r\n\r\nint main()\r\n{\r\n    cin>>m>>n>>start.second>>start.first;\r\n    start.first=n+1-start.first;\r\n    for(int i=1;i<m;i++)cin>>g[i]+1;\r\n\r\n    cout<<bfs()<<endl;\r\n    return 0;\r\n}\r\n\r\n//总结：广搜+考虑障碍物"
        }
      ],
      "LinK54": [
        {
          "variant": 1,
          "path": "solutions/362/LinK54.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include<iostream>\r\n#include<queue>\r\n#include<cstring>\r\nusing namespace std;\r\n\r\nconst int N=160;\r\nint c,r,x,y;\r\nchar g[N][N],m;//g数组用于存储地图\r\nint st[N][N];//记录走过的步数\r\ntypedef pair<int,int>PII;\r\nstring a;\r\n\r\nint dx[8]={-2,-2,-1,-1,1,1,2,2};\r\nint dy[8]={-1,1,-2,2,-2,2,-1,1};\r\n\r\nint bfs()\r\n{\r\n    memset(st,-1,sizeof st);\r\n    queue<PII>q;\r\n    q.push({x,y});\r\n    st[x][y]=0;\r\n    while(q.size())//queue中还有\r\n    {\r\n        auto t=q.front();//取出第一个\r\n        q.pop();\r\n        for(int i=0;i<8;i++)//遍历所有当前位置的走法\r\n        {\r\n            int x0=t.first+dx[i],y0=t.second+dy[i];\r\n            if(x0<0||x0>=r||y0<0||y0>=c)continue;//跳过地图外、‘*’和st为-1的点\r\n            if(g[x0][y0]=='H')return st[t.first][t.second]+1;//找到终点\r\n            if(g[x0][y0]=='*'||st[x0][y0]!=-1)continue;//踩到*或者走过的路跳过\r\n            st[x0][y0]=st[t.first][t.second]+1;//记录从起点到当前位置道德步数\r\n            q.push({x0,y0});//塞入新位置的坐标\r\n        }\r\n    }\r\n    return -1;//所有方法未找到\r\n}\r\n\r\n\r\nint main()\r\n{\r\n    cin>>c>>r;\r\n    for(int i=0;i<r;i++)\r\n    {\r\n        for(int j=0;j<c;j++)\r\n        {\r\n            cin>>m;\r\n            g[i][j]=m;\r\n            if(m=='K')\r\n            {\r\n                x=i,y=j;//记录K的位置\r\n            }\r\n        }\r\n    }\r\n\r\n    cout<<bfs()<<endl;\r\n    return 0;\r\n}\r\n//总结：采用广搜的模板进行修改"
        }
      ],
      "LinK55": [
        {
          "variant": 1,
          "path": "solutions/362/LinK55.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include <algorithm>\r\n#include <cstring>\r\n#include <iostream>\r\n#include <queue>\r\n#include <utility>\r\n\r\nusing namespace std;\r\n#define N 1007\r\n\r\ntypedef pair<int, int> PII;  // Y总风格pair<int,int>声明\r\n\r\n//战斗区域\r\nchar area[N][N];\r\n//点位1的距离位0，计算从1的点出发抵达的每个0的最短距离\r\nint dist[N][N], n, m;\r\n\r\n// 四个方向向量\r\nint dx[] = {-1, 0, 1, 0}, dy[] = {0, 1, 0, -1};\r\n\r\n//打印Dist内容\r\nvoid printDistMap(int n, int m) {\r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = 0; j < m; j++) cout << dist[i][j] << \" \";\r\n        cout << endl;\r\n    }\r\n}\r\n\r\n//!多源点广搜\r\nvoid bfs() {\r\n    queue<PII> q;          // BFS使用的队列\r\n    memset(dist, -1, sizeof(dist)); //初始化\r\n    //扫描找到所有为1的点的坐标\r\n    for (int i = 0; i < n; i++)\r\n        for (int j = 0; j < m; j++) {\r\n            if (area[i][j] == '1') { //初始化1的起点距离为0\r\n                dist[i][j] = 0;\r\n                q.push(make_pair(i, j)); //压入队列，多源点广搜\r\n            }\r\n        }\r\n    //开始广搜\r\n    while (q.size()) {\r\n        auto t = q.front(); //栈顶\r\n        q.pop();\r\n\r\n        for (int i = 0; i < 4; i++) { //向4个方向尝试\r\n            //扩展t得到下一个坐标格\r\n            int x = t.first + dx[i], y = t.second + dy[i];\r\n            //如果{x,y}非法就continue\r\n            if (x < 0 || x >= n || y < 0 || y >= m || dist[x][y] != -1) continue;\r\n            //合法就更新next结点距离并且\r\n            dist[x][y] = dist[t.first][t.second] + 1;\r\n            q.push({x, y}); //把x, y压入队列\r\n        }\r\n    }\r\n} // end of bfs\r\n\r\nint main() {\r\n    // 读入行n, 列m\r\n    cin >> n >> m;\r\n    //读入是char, 内容为01\r\n    for (int i = 0; i < n; i++) cin >> area[i]; //逐行读入\r\n    //开始多源点广搜\r\n    bfs();\r\n    //输出Dist\r\n    printDistMap(n, m);\r\n    return 0;\r\n}"
        }
      ],
      "LinK56": [
        {
          "variant": 1,
          "path": "solutions/362/LinK56.cpp",
          "language": "cpp",
          "code": "//游戏链接：https://www.albinoblacksheep.com/games/bloxorz\r\n#include<cstring>\r\n#include<iostream>\r\n#include<queue>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nstruct Stone{\r\n    int x,y,z;//x，y为石头坐标，z：0表示站立，1为横躺，2为竖躺\r\n    Stone(int a,int b,int c){x=a,y=b,z=c;};\r\n    Stone():x(0),y(0),z(0){};\r\n};\r\n\r\n\r\nint n,m;\r\nconst int N=510;\r\nchar area[N][N];\r\nint dist[N][N][3];\r\n\r\nqueue<Stone>q;\r\nStone start,target;\r\n\r\n//四种方向 UP=0，DOWN-1，LEFT=2，RIGHT=3，stone从0，1，2变化\r\n//每种状态的坐标以方块的左上的格子为基准点\r\nint dxyz[4][3][3]{{{-2,0,2},{-1,0,1},{-1,0,0}},\r\n                  {{1,0,2},{1,0,1},{2,0,0}},\r\n                  {{0,-2,1},{0,-1,0},{0,-1,2}},\r\n                  {{0,1,1},{0,2,0},{0,1,2}}};\r\n\r\nvoid displayStone(Stone &s)\r\n{\r\n    cout<<\"(\"<<s.x<<\" \"<<s.y<<\" \"<<s.z<<\")\";\r\n}\r\n\r\nStone moveStone(Stone &p,int i)\r\n{//返回下一状态\r\n    int x=p.x+dxyz[i][p.z][0];//计算偏移量\r\n    int y=p.y+dxyz[i][p.z][1];//计算偏移量\r\n    int z=dxyz[i][p.z][2];//查表得状态\r\n    return Stone(x,y,z);\r\n}\r\n\r\nbool isInside(int x,int y){return x>=0&&x<n&&y>=0&&y<m;}\r\n\r\nbool isValid(Stone t)//判断：在范围内stone的左上块为基准点判定\r\n{\r\n    if(!isInside(t.x,t.y)||area[t.x][t.y]=='#')return false;//不在范围内\r\n    if(t.z==2&&(!isInside(t.x+1,t.y)||area[t.x+1][t.y]=='#'))\r\n        return false;//竖躺到禁区\r\n    if(t.z==1&&(!isInside(t.x,t.y+1)||area[t.x][t.y+1]=='#'))\r\n        return false;\r\n    if(t.z==0&&area[t.x][t.y]=='E')\r\n        return false;\r\n\r\n    return true;\r\n}\r\n\r\nbool isVisited(Stone t)\r\n{\r\n    return dist[t.x][t.y][t.z]!=-1;//该状态没有被访问过\r\n}\r\n\r\nvoid BuildMap(int n,int m)\r\n{\r\n    memset(area,'#',sizeof(area));\r\n    memset(dist,-1,sizeof(dist));\r\n\r\n    for(int i=0;i<n;i++)cin>>area[i];\r\n\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        for(int j=0;j<m;j++)\r\n        {\r\n            char t=area[i][j];\r\n            if(t=='X'){\r\n                start.x=i,start.y=j,start.z=0;\r\n                area[i][j]='.';//找到起点，站立\r\n                //搜索相邻格子是否有'X'\r\n                if(isInside(i,j+1)&&area[i][j+1]=='X')\r\n                    start.z=1,area[i][j+1]='.';//横躺\r\n                if(isInside(i+1,j)&&area[i+1][j]=='X')\r\n                    start.z=2,area[i+1][j]='.';//竖躺\r\n            }\r\n            //找到目标点，记录状态target\r\n            if(t=='O')\r\n                target.x=i,target.y=j,target.z=0;//必须站立才能通关\r\n        }\r\n    }\r\n\r\n}//end of BuildMap\r\n\r\nint bfs(Stone &s)\r\n{\r\n    while(q.size())q.pop();//清空队列\r\n    //压入顶点\r\n    q.push(s);\r\n    dist[s.x][s.y][s.z]=0;//起始步数为0\r\n\r\n    while(q.size()){\r\n        auto t=q.front();//栈顶\r\n        q.pop();\r\n\r\n        //搜索四个方向\r\n        for(int i=0;i<4;i++)\r\n        {\r\n            //扩展t得到下一个坐标格\r\n            Stone s=moveStone(t,i);\r\n            if(!isValid(s))continue;//不合法\r\n            //更新next结点距离\r\n            if(!isVisited(s))\r\n            {\r\n                dist[s.x][s.y][s.z]=dist[t.x][t.y][t.z]+1;\r\n                q.push(s);\r\n                //如果next是终点\r\n                if(s.x==target.x&&s.y==target.y&&s.z==target.z)\r\n                    return dist[s.x][s.y][s.z];\r\n            }\r\n        }\r\n    }//end of while\r\n    return -1;\r\n\r\n}//end of bfs\r\n\r\n\r\n\r\nint main()\r\n{\r\n    while(cin>>n>>m&&n)\r\n    {\r\n        BuildMap(n,m);\r\n        int res=bfs(start);\r\n        if(res==-1)cout<<\"Impossible\"<<endl;\r\n        else cout<<res<<endl;\r\n    }\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK57": [
        {
          "variant": 1,
          "path": "solutions/362/LinK57.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include<iostream>\r\n#include<algorithm>\r\n#include<cstring>\r\n\r\nusing namespace std;\r\n\r\nconst int N=510;\r\nint n,m;\r\nint g[N][N];\r\nint dist[N];//计算距离\r\nbool st[N];\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist,0x3f,sizeof dist);//初始化为无穷\r\n    dist[1]=0;\r\n    for(int i=0;i<n-1;i++)//除去00还有n-1\r\n    {\r\n        int t=-1;\r\n        for(int j=1;j<=n;j++)\r\n        {\r\n            if(!st[j]&&(t==-1||dist[t]>dist[j]))\r\n                t=j;\r\n        }\r\n        for(int j=1;j<=n;j++)\r\n        {\r\n            dist[j]=min(dist[j],dist[t]+g[t][j]);\r\n            \r\n        }\r\n        st[t]=true;\r\n    }\r\n    if(dist[n]==0x3f3f3f3f)return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n        scanf(\"%d%d\",&n,&m);\r\n        memset(g,0x3f,sizeof g);\r\n        while(m--)\r\n        {\r\n            int a,b,c;\r\n            scanf(\"%d%d%d\",&a,&b,&c);\r\n            g[a][b]=min(g[a][b],c);//防止重复\r\n        }\r\n        printf(\"%d\\n\",dijkstra());\r\n\r\n        return 0;\r\n}"
        }
      ],
      "LinK58": [
        {
          "variant": 1,
          "path": "solutions/362/LinK58.cpp",
          "language": "cpp",
          "code": "//广搜\r\n#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n#include<queue>\r\n\r\nusing namespace std;\r\n\r\ntypedef pair<int,int> PII;\r\n\r\nconst int N =1e6+10;\r\n\r\nint m,n;//行、列\r\nint h[N],w[N],e[N],ne[N],idx;//数组模拟链表\r\nint dist[N];//距离\r\nbool st[N];//状态\r\n\r\nvoid add(int a,int b,int c)\r\n{\r\n    e[idx]=b,w[idx]=c,ne[idx]=h[a],h[a]=idx++;\r\n}\r\n\r\nint dijkstra()\r\n{\r\n    memset(dist,0x3f,sizeof dist);\r\n    dist[1]=0;\r\n    priority_queue<PII,vector<PII>,greater<PII>>heap;\r\n\r\n    heap.push({0,1});\r\n    while(heap.size())\r\n    {\r\n        auto t=heap.top();\r\n        heap.pop();\r\n    \r\n        int ver=t.second,distance=t.first;\r\n\r\n        if(st[ver])continue;\r\n        st[ver]=true;\r\n        for(int i=h[ver];i!=-1;i=ne[i])\r\n        {\r\n            int j=e[i];\r\n            if(dist[j]>dist[ver]+w[i])\r\n            {\r\n                dist[j]=dist[ver]+w[i];\r\n                heap.push({dist[j],j});\r\n            }\r\n        }\r\n    }\r\n    if(dist[n]==0x3f3f3f3f)return -1;\r\n    return dist[n];\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d%d\",&n,&m);\r\n    memset(h,-1,sizeof h);\r\n    while(m--)\r\n    {\r\n        int a,b,c;\r\n        scanf(\"%d%d%d\",&a,&b,&c);\r\n        add(a,b,c);\r\n\r\n    }\r\n    cout<<dijkstra()<<endl;\r\n    return 0;\r\n\r\n\r\n}"
        }
      ],
      "LinK59": [
        {
          "variant": 1,
          "path": "solutions/362/LinK59.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cstdio>\r\n#include <cstring>\r\n#include <algorithm>\r\n#include <deque>\r\n\r\nusing namespace std;\r\n\r\n#define For(i, a, b) for (int i = a; i < b; i++)\r\n#define INF 0x3f3f3f3f\r\n\r\ntypedef pair<int, int> PII;\r\n\r\nconst int N = 507;\r\n\r\nint n, m;                 // 数据区域的 n, m\r\nchar area[N][N];          // 电路连接图 (无向图，存储 \"\\\" 或者 \"/\")\r\nint dist[N][N];           // 顶点的距离值\r\n\r\n// 顶点坐标是 [0, n] [0, m]\r\nbool isInside(int x, int y) {\r\n    return x >= 0 && x <= n && y >= 0 && y <= m;\r\n}\r\n\r\nint getWeight(int x, int y, int dir) {\r\n    // 相邻对角线的 4 条边的偏移量\r\n    int ix[4] = {-1, -1, 0, 0}, iy[4] = {-1, 0, 0, -1};\r\n    char edge[] = \"\\\\/\\\\/\\\\/\"; // 边如果是这个方向，则权重为0，否则为1\r\n    \r\n    int newX = x + ix[dir], newY = y + iy[dir];\r\n    // 读数据取边\r\n    if (area[newX][newY] == edge[dir])\r\n        return 0;\r\n    else\r\n        return 1;\r\n}\r\n\r\nvoid BuildMap(int n, int m) {\r\n    For(i, 0, n) {\r\n        For(j, 0, m) {\r\n            cin >> area[i][j];\r\n        }\r\n    }\r\n}\r\n\r\nint bfs() {\r\n    // 扩展相邻点 (对角线 4 个点), 左上、右上、右下、左下\r\n    int dx[4] = {-1, -1, 1, 1}, dy[4] = {-1, 1, 1, -1};\r\n    \r\n    // 节点距离设置成正无穷大\r\n    memset(dist, INF, sizeof(dist));\r\n    deque<PII> dq;\r\n    dq.push_back({0, 0});    // {0, 0} 点，从左上角开始广搜，终点是右下角\r\n    dist[0][0] = 0;          // {0, 0} 到自己的距离\r\n    \r\n    while (dq.size()) {\r\n        auto qHead = dq.front(); // 从 qHead 到 Next 点\r\n        dq.pop_front();\r\n        PII next;\r\n        \r\n        For(i, 0, 4) {\r\n            next.first = qHead.first + dx[i];\r\n            next.second = qHead.second + dy[i];\r\n            \r\n            if (isInside(next.first, next.second)) {\r\n                int weight = getWeight(qHead.first, qHead.second, i); // 取边的权重，返回 0 或者 1\r\n                \r\n                if (dist[next.first][next.second] > dist[qHead.first][qHead.second] + weight) {\r\n                    dist[next.first][next.second] = dist[qHead.first][qHead.second] + weight;\r\n                    // 保证 dq 的 front 小，back 大\r\n                    if (weight == 1)\r\n                        dq.push_back(next);\r\n                    if (weight == 0)\r\n                        dq.push_front(next);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    if (dist[n][m] == 0x3f3f3f3f)\r\n        return -1; // 无法抵达终点，无通路\r\n    else\r\n        return dist[n][m]; // 返回从 {0, 0} 到 {n, m} 的距离值\r\n}\r\n\r\nint main() {\r\n    int T;\r\n    cin >> T;\r\n    while (T--) {\r\n        cin >> n >> m;\r\n        memset(area, -1, sizeof(area));\r\n        BuildMap(n, m);\r\n        \r\n        int res = bfs();\r\n        if (res == -1)\r\n            cout << \"NO SOLUTION\" << endl;\r\n        else\r\n            cout << res << endl;\r\n    }\r\n    return 0;\r\n}"
        }
      ],
      "LinK60": [
        {
          "variant": 1,
          "path": "solutions/362/LinK60.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <algorithm>\r\n#include <queue>\r\n#include <cstring>\r\n#include <cstdio>\r\n\r\nusing namespace std;\r\n#define For(a, begin, end) for (int a = (begin); a < (end); a++)\r\n\r\nconst int N = 10000007; // 题目n的范围\r\n\r\nint n, m;\r\nint head[N], edge[N], nextVertex[N], idx; // 邻接表\r\nint q[N], d[N]; // 队列，入度\r\n\r\nvoid add(int a, int b) {\r\n    edge[idx] = b;\r\n    nextVertex[idx] = head[a];\r\n    head[a] = idx++;\r\n}\r\n\r\nbool topsort() {\r\n    int qHeadIdx = 0, qTailIdx = -1; // 队头，队尾\r\n    // 从前往后遍历入度为 0 的点，插入队列\r\n    for (int i = 1; i <= n; i++) {\r\n        if (!d[i]) {\r\n            q[++qTailIdx] = i; // 数组模拟队列，入队是尾指针+1\r\n        }\r\n    }\r\n    \r\n    while (qHeadIdx <= qTailIdx) { // 如果头指针小于尾指针\r\n        int t = q[qHeadIdx++]; // 取队列头元素，出队只是把头指针往后移动一位\r\n        \r\n        // 遍历 t 的临边，空指针初始化为 -1\r\n        for (int i = head[t]; i != -1; i = nextVertex[i]) {\r\n            int j = edge[i]; // 取到出边\r\n            d[j]--;          // 入度减一\r\n            if (d[j] == 0) {\r\n                q[++qTailIdx] = j; // 如若入度为 0，压入队列\r\n            }\r\n        }\r\n    }\r\n    \r\n    // 判断是否所有顶点都入队\r\n    // 也就是头指针 qTailIdx 是否等于 n-1，即所有点都进入队列了\r\n    return qTailIdx == n - 1;\r\n}\r\n\r\nint main() {\r\n    cin >> n >> m; // 读入 n, m\r\n    memset(head, -1, sizeof(head)); // 初始化 head 数组指向 -1 顶点\r\n    \r\n    For(i, 0, m) {\r\n        int a, b;\r\n        cin >> a >> b;\r\n        add(a, b); // 插入边\r\n        d[b]++;    // 更新入度\r\n    }\r\n    \r\n    if (topsort()) {\r\n        // 数组队列里面的元素就是拓扑序\r\n        for (int i = 0; i < n; i++) {\r\n            printf(\"%d \", q[i]);\r\n        }\r\n    } else {\r\n        puts(\"-1\");\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "LinK61": [
        {
          "variant": 1,
          "path": "solutions/362/LinK61.cpp",
          "language": "cpp",
          "code": "#include <iostream>\r\n#include <cstring>\r\n#include <algorithm>\r\n#include <queue>\r\n\r\nusing namespace std;\r\n\r\n// 使用数组实现邻接表，无向图\r\nconst int N = 1010;          // 顶点数（城市）\r\nconst int M = 10100;         // 边的数目\r\nconst int maxCapacity = 107; // 油箱容量\r\n\r\nint oilPrice[N];             // 每个城市的油价\r\nint expenses[N][maxCapacity]; // 记录在当前城市、当前剩余油量下的最少花费\r\nint head[N], Next[2 * M], ver[2 * M], dist[2 * M], tot = -1; // 邻接表\r\nbool visited[N][maxCapacity]; // 记录是否已经访问过某个(城市, 油量)状态\r\n\r\n// 添加无向边\r\nvoid add(int x, int y, int z) {\r\n    ver[++tot] = y;      // 这条边到达的点\r\n    Next[tot] = head[x]; // 链表链接\r\n    head[x] = tot;       // 标记 x 起点\r\n    dist[tot] = z;       // 边权值（此路径消耗的油量）\r\n}\r\n\r\nstruct node {\r\n    int city, fuel, money; // 城市, 赛车油量, 累计花费\r\n    \r\n    node(int x, int y, int z) : city(x), fuel(y), money(z) {}\r\n    \r\n    // 重载 < 运算符，使得优先队列按 money 从小到大的顺序排列（小根堆）\r\n    friend bool operator<(node a, node b) {\r\n        return a.money > b.money; \r\n    }\r\n};\r\n\r\npriority_queue<node> q; // 优先队列\r\n\r\n// 判断并执行在当前城市买 1 升油的操作\r\nbool buyOneOil(int city, int fuel, int c) {\r\n    // 如果油还在油箱限制内，且这买油一定更好的话\r\n    if (fuel + 1 <= c && !visited[city][fuel + 1] && \r\n        (expenses[city][fuel + 1] > expenses[city][fuel] + oilPrice[city])) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n}\r\n\r\n// 判断并执行沿着当前路径前往下一个城市的操作\r\nbool isNextRoad(int fuel, int cityid, int d, int money) {\r\n    // 剩余油大于路径花费油、下一个状态未被访问过、并且花费更便宜\r\n    if (fuel >= d && !visited[cityid][fuel - d] && \r\n        expenses[cityid][fuel - d] > money) {\r\n        return true;\r\n    } else {\r\n        return false;\r\n    }\r\n}\r\n\r\n// Dijkstra 算法逻辑\r\nint BFS(int currentCapacity, int start, int target) {\r\n    // 清空优先队列，避免上次查询的数据残留\r\n    while (!q.empty()) q.pop();\r\n    \r\n    // 初始化状态数组\r\n    memset(visited, false, sizeof(visited));\r\n    memset(expenses, 0x3f, sizeof(expenses));\r\n    \r\n    // 从起点开始搜索\r\n    expenses[start][0] = 0;\r\n    q.push(node(start, 0, 0)); // s 为起点，0 为剩余油量，0 为初始花费\r\n    \r\n    while (!q.empty()) {\r\n        node qHead = q.top();\r\n        q.pop();\r\n        \r\n        int city = qHead.city;\r\n        int fuel = qHead.fuel;\r\n        int money = qHead.money;\r\n        \r\n        // 如果已经找到终点，直接返回最小花费（优先队列保证了最优性）\r\n        if (city == target) return money;\r\n        \r\n        // 如果当前状态已经计算过（防止重复入队），则跳过\r\n        if (visited[city][fuel]) continue;\r\n        visited[city][fuel] = true; // 标记为已访问\r\n        \r\n        // 操作 1：在当前城市买一升油\r\n        if (buyOneOil(city, fuel, currentCapacity)) {\r\n            expenses[city][fuel + 1] = expenses[city][fuel] + oilPrice[city];\r\n            q.push(node(city, fuel + 1, expenses[city][fuel + 1]));\r\n        }\r\n        \r\n        // 操作 2：前往相邻城市\r\n        for (int i = head[city]; i != -1; i = Next[i]) {\r\n            int nextCity = ver[i];\r\n            int d = dist[i]; // 此路径需要消耗的油量\r\n            if (isNextRoad(fuel, nextCity, d, money)) {\r\n                expenses[nextCity][fuel - d] = money; // 沿着道路走，花费不增加\r\n                q.push(node(nextCity, fuel - d, money));\r\n            }\r\n        }\r\n    }\r\n    \r\n    return -1; // 无可达路径\r\n}\r\n\r\nint main() {\r\n    // 关闭流同步，提高 I/O 效率\r\n    ios::sync_with_stdio(false);\r\n    \r\n    int n, m;\r\n    cin >> n >> m;\r\n    \r\n    // 代表 n 个城市的单位油价\r\n    for (int i = 0; i < n; i++) {\r\n        cin >> oilPrice[i];\r\n    }\r\n    \r\n    // 初始化头结点为 -1 (注意与截图源代码保持一致，通常用 -1 作为邻接表终点)\r\n    memset(head, -1, sizeof(head));\r\n\r\n    // 每一行包括三个整数 u, v, d，表示城市 u 与城市 v 之间存在道路，且赛车从 u 到 v 消耗油量为 d\r\n    for (int i = 1; i <= m; i++) {\r\n        int u, v, d;\r\n        cin >> u >> v >> d;\r\n        add(u, v, d); // 无向图 (u, v)\r\n        add(v, u, d); // 无向图 (v, u)\r\n    }\r\n    \r\n    // 整数 questions，代表问题数量\r\n    int questions;\r\n    cin >> questions;\r\n    \r\n    // 处理每一个询问\r\n    while (questions--) {\r\n        // 每行包含三个整数 c, s, e，分别表示赛车油箱容量 c、起点城市 s、终点城市 e\r\n        int c, s, e;\r\n        cin >> c >> s >> e;\r\n        int res = BFS(c, s, e);\r\n        if (res == -1) {\r\n            printf(\"impossible\\n\");\r\n        } else {\r\n            printf(\"%d\\n\", res);\r\n        }\r\n    }\r\n    \r\n    return 0;\r\n}"
        }
      ],
      "LinK62": [
        {
          "variant": 1,
          "path": "solutions/362/LinK62.cpp",
          "language": "cpp",
          "code": "//数字三角形DP\r\n\r\n//从三角形底部网上计算\r\n//每一个点计算下面两条路线的最大值\r\n\r\n\r\n#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N=1010;\r\nint n;\r\nint w[N][N],f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=1;i<=n;i++)\r\n        for(int j=1;j<=i;j++)   \r\n            cin>>w[i][j];\r\n    for(int i=1;i<=n;i++)f[n][i]=w[n][i];//初始化最后一行\r\n\r\n    for(int i=n-1;i;i--)\r\n        for(int j=1;j<=i;j++)\r\n            f[i][j]=max(f[i+1][j]+w[i][j],f[i+1][j+1]+w[i][j]);//每一个点计算下面两条路线的最大值\r\n    cout<<f[1][1]<<endl;//最终累加到f(1,1)\r\n\r\n\r\n    return 0;\r\n}"
        },
        {
          "variant": 2,
          "path": "solutions/362/Link62-2.cpp",
          "language": "cpp",
          "code": "//从三角形底部网上计算\r\n//每一个点计算下面两条路线的最大值\r\n//优化版\r\n#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N=1010;\r\nint n;\r\nint f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=1;i<=n;i++)\r\n        for(int j=1;j<=i;j++)   \r\n            cin>>f[i][j];\r\n\r\n    for(int i=n-1;i;i--)\r\n        for(int j=1;j<=i;j++)\r\n            f[i][j]+=max(f[i+1][j],f[i+1][j+1]);//每一个点计算下面两条路线的最大值\r\n    cout<<f[1][1]<<endl;\r\n\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK63": [
        {
          "variant": 1,
          "path": "solutions/362/LinK63.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint n,m;\r\nconst int N=1007;\r\nint v[N],w[N];\r\nint f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++)cin>>v[i]>>w[i];//读取\r\n    for(int i=1;i<=n;i++)//枚举物品\r\n        for(int j=0;j<=m;j++)//枚举体积\r\n        {\r\n            f[i][j]=f[i-1][j];//不选第i个，取集合左边（假设i不行）\r\n            if(j>=v[i])//剩余体积比第i个大，包含第i个的选法（如果i可以）\r\n                f[i][j]=max(f[i][j],f[i-1][j-v[i]]+w[i]);//比较价值大小\r\n        }\r\n    cout<<f[n][m]<<endl;//循环后面背包放不下就会传递都到最后一个f[n][m]中；\r\n}"
        },
        {
          "variant": 2,
          "path": "solutions/362/Link63-2.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\nint n,m;\r\nconst int N=1007;\r\nint v[N],w[N];\r\nint f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++)cin>>v[i]>>w[i];//读取\r\n    for(int i=1;i<=n;i++)//枚举物品数\r\n        for(int j=0;j<=m;j++)//枚举体积\r\n        {\r\n            f[j]=f[j];//左半边（如果不选）\r\n            if(j>=v[i])//剩余体积比第i个大，包含第i个的选法（如果可以选）\r\n                f[j]=max(f[j],f[j-v[i]]+w[i]);\r\n            //f[i][j]=max(f[i][j],f[i-1][j-v[i]]+w[i]);\r\n        }\r\n    cout<<f[n][m]<<endl;\r\n}"
        }
      ],
      "LinK64": [
        {
          "variant": 1,
          "path": "solutions/362/LinK64.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n\r\nusing namespace std;\r\nconst int N=1010;\r\nint f[N][N];\r\nint v[N],w[N];//V为体积，W为价格\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++)\r\n        cin>>v[i]>>w[i];//存储数据\r\n    for(int i=1;i<=n;i++)//枚举物品数\r\n    {\r\n        for(int j=0;j<=m;j++)//枚举体积数\r\n        {\r\n            for(int k=0;k*v[i]<=j;k++)//同一个物品选的个数\r\n            {\r\n                f[i][j]=max(f[i][j],f[i-1][j-k*v[i]]+k*w[i]);\r\n            }\r\n        }\r\n    }\r\n\r\n    cout<<f[n][m]<<endl;\r\n}"
        },
        {
          "variant": 2,
          "path": "solutions/362/Link64-2.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n\r\nusing namespace std;\r\nconst int N=1010;\r\nint f[N];\r\nint v[N],w[N];//V为体积，W为价格\r\n\r\nint main()\r\n{\r\n    int n,m;\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++)\r\n        cin>>v[i]>>w[i];//存储数据\r\n    for(int i=1;i<=n;i++)//枚举物品数\r\n    {\r\n        for(int j=v[i];j<=m;j++)//枚举体积数\r\n        {\r\n            f[j]=max(f[j],f[j-v[i]]+w[i]);\r\n        }\r\n    }\r\n\r\n    cout<<f[m]<<endl;\r\n}"
        }
      ],
      "LinK65": [
        {
          "variant": 1,
          "path": "solutions/362/LinK65.cpp",
          "language": "cpp",
          "code": "//与完全背包区别，有个数限制\r\n//数据范围较小\r\n#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nconst int N=110;\r\nint n,m;\r\nint f[N];\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;//物品数，容积\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int v,w,s;\r\n        cin>>v>>w>>s;//体积，价值，件数\r\n        for(int j=m;j>=0;j--)\r\n        {\r\n            for(int k=1;k<=s&&k*v<=j;k++)\r\n                f[j]=max(f[j],f[j-k*v]+k*w);\r\n        }\r\n    }\r\n    cout<<f[m]<<endl;\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK66": [
        {
          "variant": 1,
          "path": "solutions/362/LinK66.cpp",
          "language": "cpp",
          "code": "//……\r\n//数据范围较大\r\n//二进制优化方法\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=12010,M=2010;\r\nint n,m;\r\nint v[N],w[N];\r\nint f[M];//体积<M\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;//物品数，容积\r\n    int cnt=0;//分组的组别\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        int a,b,s;\r\n        cin>>a>>b>>s;//体积，价值，件数\r\n        int k=1;//组别内的个数\r\n        while(k<=s)\r\n        {\r\n            cnt++;\r\n            v[cnt]=a*k;\r\n            w[cnt]=b*k;\r\n            s-=k;//s要减小\r\n            k*=2;//组别个数增加\r\n        }\r\n        //剩余的一组\r\n        if(s>0)\r\n        {\r\n            cnt++;\r\n            v[cnt]=a*s;\r\n            w[cnt]=b*s;\r\n        }\r\n    }\r\n    n=cnt;\r\n\r\n    for(int i=1;i<=n;i++)\r\n        for(int j=m;j>=v[i];j--)\r\n            f[j]=max(f[j],f[j-v[i]]+w[i]);\r\n    cout<<f[m]<<endl;\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK67": [
        {
          "variant": 1,
          "path": "solutions/362/LinK67.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<cstdio>\r\nusing namespace std;\r\n\r\nint n,m;\r\nint v[110][110],w[110][110],f[110],s[110];\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n           cin>>s[i];\r\n        for(int j=1;j<=s[i];j++)\r\n        {\r\n            cin>>v[i][j]>>w[i][j];\r\n        }\r\n    }\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=m;j>=1;j--)\r\n        {\r\n            for(int k=1;k<=s[i];k++)\r\n            {\r\n                if(v[i][k]<=j)\r\n                {\r\n                    f[j]=max(f[j],f[j-v[i][k]]+w[i][k]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    cout<<f[m];\r\n    return 0;\r\n\r\n}"
        }
      ],
      "LinK68": [
        {
          "variant": 1,
          "path": "solutions/362/LinK68.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N=1007;\r\nint n,m;\r\nint f[N];\r\n\r\nint main()\r\n{\r\n    cin>>n>>m;\r\n    //枚举物品\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int v,w,s;\r\n        cin>>v>>w>>s;\r\n        //根据s分成三类处理\r\n        if(!s)//完全背包\r\n        {\r\n            for(int j=v;j<=m;j++)//枚举体积\r\n                f[j]=max(f[j],f[j-v]+w);\r\n        }\r\n        else \r\n        {\r\n            if(s==-1)s=1;//转换为多重背包物品只有1件的求解方法\r\n            //解多重背包的问题，采用二进制优化\r\n            for(int k=1;k<=s;k*=2)\r\n            {\r\n                for(int j=m;j>=k*v;j--)\r\n                    f[j]=max(f[j],f[j-k*v]+k*w);\r\n                s-=k;\r\n            }\r\n            if(s)\r\n            {\r\n                for(int j=m;j>=s*v;j--)\r\n                    f[j]=max(f[j],f[j-s*v]+s*w);\r\n            }\r\n        }\r\n    }\r\n    cout<<f[m]<<endl;\r\n    return 0;\r\n\r\n\r\n}"
        }
      ],
      "LinK69": [
        {
          "variant": 1,
          "path": "solutions/362/LinK69.cpp",
          "language": "cpp",
          "code": "//数字三角形DP\r\n\r\n//闫氏DP分析法\r\n//状态分析\r\n//状态表示\r\n\r\n\r\n//优化后，优化思路同Link62数字三角形法2\r\n#include<iostream>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N=1010;\r\nint T,n,m;\r\nint f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>T;\r\n    while(T--)\r\n    {\r\n        cin>>n>>m;\r\n        for(int i=1;i<=n;i++)\r\n            for(int j=1;j<=m;j++)\r\n                cin>>f[i][j];\r\n\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            for(int j=1;j<=m;j++)\r\n            {\r\n                f[i][j]+=max(f[i-1][j],f[i][j-1]);\r\n            }\r\n        }\r\n        cout<<f[n][m]<<endl;\r\n    }\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK70": [
        {
          "variant": 1,
          "path": "solutions/362/LinK70.cpp",
          "language": "cpp",
          "code": "//数字三角形DP\n\n//必须在(2N - 1)个单位时间穿越出去\n//不可走回头路\n\n#include <iostream>\nusing namespace std;\n\nconst int N=110,INF = 1e9;\nint n;\nint w[N][N];\nint f[N][N];\nint main() {\n    ios::sync_with_stdio(false);//提升速度，禁用scsanf，printf\n    cin.tie(nullptr);//cin 不再强制刷新 cout，进一步节省了时间\n\n    cin>>n;\n    for(int i=1;i<=n;i++)\n        for(int j=1;j<=n;j++)\n            cin>>w[i][j];\n    for(int i=1;i<=n;i++)\n        for(int j=1;j<=n;j++)\n            if(i==1&&j==1)f[i][j]=w[i][j];//特判左上角\n            else{\n                f[i][j]=INF;//初始化\n                if(i>1)f[i][j]=min(f[i][j],f[i-1][j]+w[i][j]);//只有不在第一行才可以从上面过来\n                //第一列只能运算该式子\n                if(j>1)f[i][j]=min(f[i][j],f[i][j-1]+w[i][j]);//只有不在第一列才可以从左边过来\n                //第一行只能运算该式子\n                //其余的两个均运算并比较大小\n            }\n\n            cout<<f[n][n]<<endl;\n\n    return 0;\n}\n"
        }
      ],
      "LinK71": [
        {
          "variant": 1,
          "path": "solutions/362/LinK71.cpp",
          "language": "cpp",
          "code": "//线性DP\r\n//外层循环所有以i结尾是上升子序列\r\n//内层循环找到所有比a[i]小的假设放入并比较大小\r\n#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nconst int N=1010;\r\nint n;\r\nint a[N],f[N];\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=1;i<=n;i++)cin>>a[i];\r\n\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        f[i]=1;//只有a[i]一个数\r\n        for(int j=1;j<i;j++)\r\n        {\r\n            if(a[j]<a[i])//既然 a[j] < a[i]，那么以 a[i] 结尾的新序列长度 = 以 a[j] 结尾的最长长度 + 1（当前这个数）\r\n                f[i]=max(f[i],f[j]+1);//从1~j的子序列+1，实质是找前面的每列序列最大\r\n        }\r\n    }\r\n    int res=0;\r\n    for(int i=1;i<=n;i++)res=max(res,f[i]);\r\n    cout<<res<<endl;\r\n\r\n    return 0;\r\n}\r\n//总结：线性DP\r\n"
        }
      ],
      "LinK72": [
        {
          "variant": 1,
          "path": "solutions/362/LinK72.cpp",
          "language": "cpp",
          "code": "//利用二分法查找\r\n//相比上一个大大优化了时间长度（Olog(n)）\r\n#include<iostream>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\nconst int N=100010;\r\nint n;\r\nint a[N];\r\nint q[N];//q[len] 存储的是：长度为 len 的上升子序列中，最小的结尾元素值。\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&n);\r\n    for(int i=0;i<n;i++)cin>>a[i];\r\n\r\n    int len=0;//记录当前最长上升子序列的长度\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        int l=0,r=len;//二分查找\r\n        while(l<r)//找最后一个小于 a[i] 的位置（可能是在末尾就使len变长）（结束条件l==r）\r\n        {\r\n            int mid=l+r+1>>1;\r\n            if(q[mid]<a[i])l=mid;\r\n            else r=mid-1;\r\n        }\r\n        len=max(len,r+1);//如果插入后会使len变大就放入\r\n        q[r+1]=a[i];\r\n    }\r\n\r\n    cout<<len;\r\n}\r\n\r\n//总结：二分法优化"
        }
      ],
      "LinK73": [
        {
          "variant": 1,
          "path": "solutions/362/LinK73.cpp",
          "language": "cpp",
          "code": "//求最长下降子序列，结尾越大越好\r\n//求最少下降子序列覆盖全部\r\n\r\n#include<iostream>\r\n#include<sstream>//stream stream输入流\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N=1010;\r\nint n;\r\nint h[N],f[N],q[N];\r\n\r\nint main()\r\n{\r\n    string line;\r\n    getline(cin,line);\r\n    stringstream ssin(line);//后面的ssin=cin\r\n    while(ssin>>h[n])n++;\r\n\r\n    int res=0,cnt=0;//cnt 表示当前 q 中有效元素的个数\r\n    for(int i=0;i<n;i++)\r\n    {\r\n        f[i]=1;\r\n        for(int j=0;j<i;j++)//同最长上升子序列\r\n            if(h[i]<=h[j])\r\n                f[i]=max(f[i],f[j]+1);\r\n        res=max(res,f[i]);\r\n\r\n        int k=0;//贪心算法\r\n        while(k<cnt&&q[k]<h[i])k++;//从 q[0] 开始向后找，找到第一个 >= h[i] 的位置。\r\n        if(k==cnt)q[cnt++]=h[i];//说明所有列的末尾都比 h[i] 矮，没有列能接住他 → 新建一列\r\n        else q[k]=h[i];//否则，找到了能接住他的列（第 k 列）→ 把他放在这一列的末尾，更新这一列的末尾为 h[i]\r\n\r\n    }\r\n    cout<<res<<endl;;\r\n    cout<<cnt<<endl;;\r\n\r\n\r\n    return 0;\r\n\r\n}"
        }
      ],
      "LinK75": [
        {
          "variant": 1,
          "path": "solutions/362/LinK75.cpp",
          "language": "cpp",
          "code": "//DP\r\n//（1）状态表示\r\n//     1.集合\r\n//     2.属性\r\n//（2）状态计算\r\n\r\n//对于f(i,j)\r\n//包含f(i-1,j-1),f(i-1,j),f(i,j-1),f(i,j)\r\n//00,01,10,11\r\n//00包含于01，10\r\n#include<iostream>\r\nusing namespace std;\r\n\r\nconst int N=1010;\r\nint n,m;\r\nchar a[N],b[N];\r\nint f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>n>>m>>a+1>>b+1;//字符串下标从1开始\r\n\r\n    for(int i=1;i<=n;i++)\r\n    {\r\n        for(int j=1;j<=m;j++)\r\n        {\r\n            f[i][j]=max(f[i-1][j],f[i][j-1]);\r\n            if(a[i]==b[j])f[i][j]=max(f[i][j],f[i-1][j-1]+1);//11,最后两个一定都选\r\n        }\r\n    }\r\n    cout<<f[n][m]<<endl;\r\n    return 0;\r\n}\r\n\r\n//总结：闫氏DP分析法"
        }
      ],
      "LinK76": [
        {
          "variant": 1,
          "path": "solutions/362/LinK76.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\nusing namespace std;\r\n//只能合并相邻的两堆\r\nconst int N=310;\r\nint n;\r\nint s[N];\r\nint f[N][N];\r\n\r\nint main()\r\n{\r\n    cin>>n;\r\n    for(int i=1;i<=n;i++)cin>>s[i],s[i]+=s[i-1];//存储前缀和\r\n\r\n    for(int len=2;len<=n;len++)//合并长度从2开始枚举\r\n    {\r\n        for(int i=1;i+len-1<=n;i++)//i为区间左端点\r\n        {\r\n            int j=i+len-1;//j为区间右端点\r\n            f[i][j]=1e8;//初始化最大值，要求最小值\r\n            for(int k=i;k<j;k++)\r\n            {\r\n                f[i][j]=min(f[i][j],f[i][k]+f[k+1][j]+s[j]-s[i-1]);//分为i到k和k+1到j加上最后合并两堆的代价（为所有石头的和）\r\n            }\r\n        }\r\n    }\r\n    cout<<f[1][n]<<endl;\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK78": [
        {
          "variant": 1,
          "path": "solutions/362/LinK78.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<cstring>\r\n#include<cstdio>\r\n#include<algorithm>\r\nusing namespace std;\r\n\r\n\r\ntypedef pair<int, int>PII;\r\nconst int N=50;\r\n\r\nint n;\r\nint w[N];\r\nunsigned f[N][N];// f[l][r] 表示中序遍历区间 [l, r] 构成的二叉树的最大加分\r\nint root[N][N];// root[l][r] 记录区间 [l, r] 获得最大加分时的根节点编号，用于最终建树输出\r\n\r\nvoid dfs(int l,int r)\r\n{\r\n    if(l>r)return;\r\n\r\n    int k=root[l][r];\r\n    printf(\"%d \",k);//输出根节点\r\n    dfs(l,k-1);\r\n    dfs(k+1,r);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&n);\r\n    for(int i=1;i<=n;i++)scanf(\"%d\",&w[i]);\r\n    for(int len=1;len<=n;len++)//枚举区间长度\r\n    {\r\n        for(int l=1;l+len-1<=n;l++)//枚举左端点\r\n        {\r\n            int r=l+len-1;//计算右端点\r\n\r\n            for(int k=l;k<=r;k++)//枚举当前区间l到r\r\n            {\r\n                int left=k==l?1:f[l][k-1];//如果左子树为空（k==1），为1\r\n                int right=k==r?1:f[k+1][r];\r\n\r\n                int score=left*right+w[k];//计算分数（左*右+中）\r\n                if(l==r)score=w[k];\r\n\r\n                if(f[l][r]<score)//当前方案得分更高\r\n                {\r\n                    f[l][r]=score;//更改记录\r\n                    root[l][r]=k;\r\n                }\r\n            }\r\n\r\n\r\n        }\r\n    }\r\n    printf(\"%d\\n\",f[1][n]);\r\n    dfs(1,n);\r\n    puts(\"\");\r\n\r\n    return 0;\r\n}"
        }
      ],
      "LinK80": [
        {
          "variant": 1,
          "path": "solutions/362/LinK80.cpp",
          "language": "cpp",
          "code": "#include<iostream>\r\n#include<cstring>\r\n#include<algorithm>\r\n\r\nusing namespace std;\r\n\r\nconst int N=6010;\r\nint n;\r\nint h[N],e[N],ne[N],idx;\r\nint happy[N];\r\nint f[N][2];\r\nbool has_fa[N];\r\n\r\nvoid add(int a,int b)\r\n{\r\n    e[idx]=b,ne[idx]=h[a],h[a]=idx++;\r\n}\r\n\r\nvoid dfs(int u)\r\n{\r\n    f[u][1]=happy[u];\r\n\r\n    for(int i=h[u];~i;i=ne[i])\r\n    {\r\n        int j=e[i];\r\n        dfs(j);\r\n\r\n        f[u][1]+=f[j][0];\r\n        f[u][0]+=max(f[j][0],f[j][1]);\r\n    }\r\n}\r\n\r\nint main()\r\n{\r\n    scanf(\"%d\",&n);\r\n    for(int i=1;i<=n;i++)scanf(\"%d\",&happy[i]);\r\n\r\n    memset(h,-1,sizeof h);\r\n    for(int i=0;i<n-1;i++)\r\n    {\r\n        int a,b;\r\n        scanf(\"%d%d\",&a,&b);\r\n        add(b,a);\r\n        has_fa[a]=true;\r\n    }\r\n\r\n    int root=1;\r\n    while(has_fa[root])root++;\r\n\r\n    dfs(root);\r\n\r\n    printf(\"%d\\n\",max(f[root][0],f[root][1]));\r\n\r\n    return 0;\r\n}"
        }
      ]
    }
  }
};
