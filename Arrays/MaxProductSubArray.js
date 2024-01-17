var maxProduct = function(nums) {

    let max=0;
    let current =nums[0];
    for(let i=0;i<nums.length;i++)
    {
        current*=nums[i];
        if(max<current)
        {
            max=current;
        }
        if(current<0)
        {
            current=0;
        }
    }
    return max;
};

console.log(maxProduct([2,3,-2,4]))