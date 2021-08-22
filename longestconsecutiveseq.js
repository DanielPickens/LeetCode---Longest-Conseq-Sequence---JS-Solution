var longestConsecutive = function(nums) {
    if(nums.length==0) return 0;
        nums = nums.sort((a,b)=>a-b);
        let ans=1;
        let cur=1;
        for(var i=1;i<nums.length;++i){
            if(nums[i]==nums[i-1]) continue;
            if(nums[i]==nums[i-1]+1){
               cur+=1; 
            }else{
                ans=Math.max(ans,cur);
                cur=1;
            }
        }
        return Math.max(ans,cur);
    }
