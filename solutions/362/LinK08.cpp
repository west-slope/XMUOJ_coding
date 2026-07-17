//枚举优化算法
//四数之和根据三数修改

//思路：根据三数之和优化
//i从0到size-1
//j从i+1到size-2
//l从j+1开始往右移，r从size-1开始往左移（覆盖所有数）根据结果的大小进行调整
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
using namespace std;

vector<vector<int>> fourSum(vector<int>& nums, int target)
{
	vector<vector<int>> res;//储存结果
	sort(nums.begin(), nums.end());
	for(int i=0;i<nums.size();i++)
	{
		if (i && nums[i] == nums[i - 1])continue;//除去重复项
		for (int j = i + 1; j < nums.size() - 1; j++)//从j+1到size-1
		{
			if (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项
            int l=j+1,r=nums.size()-1;//l从j+1开始往右移，r从size-1开始往左移
            while(l<r&&nums[i] + nums[j] + nums[l] +nums[r]!= target)//必须l在r左侧
            {
                while((r>l&&nums[i] + nums[j] + nums[l] +nums[r]< target)||nums[l]==nums[l-1])l++;//和比target小就l右移
                while(r>l&&nums[i] + nums[j] + nums[l] +nums[r]> target||nums[r]==nums[r+1])r--;//和比target小就r左移
            }
			    if (nums[i] + nums[j] + nums[l] +nums[r]== target)
				    res.push_back({ nums[i],nums[j],nums[l],nums[r] });
            
		}
	}
	return res;
}
bool comp(const vector<int>& a, const vector<int>& b)//排序的依据
{
	if (a[0] != b[0])return a[0] < b[0];
	if (a[1] != b[1])return a[1] < b[1];
	return a[2] < b[2];
}
int main()
{
	int target, n;
	cin >> target >> n;
	vector<int>nums(n);
	for(int i=0;i<n;i++)
	{
		cin >> nums[i];
	}
	vector<vector<int>>res;
	res = fourSum(nums, target);//求出所有三元组
	sort(res.begin(), res.end(),comp);//排序
	for(auto line:res)
	{
		cout << line[0] << " " << line[1] << " " << line[2] << " "<<line[3]<<endl;
		
	}
	return 0;
}

//易错：l++和r--循环外面一定要套循环（如同快速排序思想）
//总结利用双指针来计算，减少复杂度