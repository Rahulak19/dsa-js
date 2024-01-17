function leaders(nums){
let n = nums.length;
let result=[];
let max=nums[n-1];

result.push(max);
for(let i=n-2;i>=0;i--)
{
    if(nums[i]>max)
    {
        result.push(nums[i]);
        max=nums[i]
    }
}
return result;
}

let nums=[4,7,1,0];
console.log(leaders(nums));