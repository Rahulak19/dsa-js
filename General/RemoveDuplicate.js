const prompt=require("prompt-sync")({ sigint: true });
let nums=[0,0,1,1,1,2,2,3,3,4]
//let nums=[1,1,2]
console.log(numDuplicate(nums))
prompt("name ")
function numDuplicate(nums)
{
    let i=1;
    for(let j=0;j<nums.length-1;j++)
    {
        if(nums[j]!==nums[j+1])
        {
            nums[i]=nums[j+1];
            i++;
        }
    }
    console.log(nums)
    return i;
}