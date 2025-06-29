#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        auto it_1 = nums.begin();
        vector<int> :: iterator it_2; 
        for(it_1; it_1 < nums.end() ; it_1++){
            it_2 = find(nums.begin(),nums.end(),target);
        }
        if(it_1 != nums.end()){
            result.push_back(it_1 - nums.begin());
            result.push_back(it_2 - nums.begin());
        }

        return result;
    }
};