var maxSubArray = function(nums) {
    
    let sum=0;
    let maxSum=nums[0];

    let count=0,endIndex=0;

    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i];
        if(maxSum<sum)
        {
            maxSum=sum;
            endIndex=i;
        }
        if(sum<0)
        {
            sum=0;
            count=0;
        }
        count++;
    }
    console.log("Count "+count +" end "+endIndex);
    return {maxSum:maxSum,arr:nums.slice(nums.length-endIndex,count)};
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));