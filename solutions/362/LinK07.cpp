//枚举优化算法
#include <iostream>
#include<vector>
#include<algorithm>
#include<cstring>
using namespace std;
//按两数之和的思路无法通过
vector<vector<int>> threeSum(vector<int>& nums, int target)
{
	vector<vector<int>> res;//储存结果
	sort(nums.begin(), nums.end());
	for(int i=0;i<nums.size();i++)
	{
		if (i && nums[i] == nums[i - 1])continue;//除去重复项
		for (int j = i + 1,k=nums.size()-1; j < nums.size() - 2; j++)//从j+1到size-1
		{
			if (j > i + 1 && nums[j] == nums[j - 1])continue;//除去重复项
			while(j<k-1&&nums[i]+nums[j]+nums[k-1]>=target)//在j-1往前移动
			{
				k--;
			}
			if (nums[i] + nums[j] + nums[k] == target)
				res.push_back({ nums[i],nums[j],nums[k] });
		}
	}
	return res;
}
bool comp(const vector<int>& a, const vector<int>& b)
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
	res = threeSum(nums, target);//求出所有三元组
	sort(res.begin(), res.end(),comp);//排序
	for(auto line:res)
	{
		cout << line[0] << " " << line[1] << " " << line[2] << endl;
		
	}
	return 0;
}

//总结：一个从后面往前遍历
//每次计算前都先清除重复项