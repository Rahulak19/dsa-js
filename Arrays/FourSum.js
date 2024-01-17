function fourSum(nums,target){
    let result=[];
    let len=nums.length;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<len;i++)
    {
        if(i>0 && nums[i]===nums[i-1]) continue;

        for(let j=i+1;j<len;j++)
        {
            if(j>i+1 && nums[j]===nums[j-1]) continue;
            let k=j+1,l=len-1;

            while(k<l)
            {
                let sum=nums[i]+nums[j]+nums[k]+nums[l];

                if(sum===target)
                {
                    let temp=[nums[i],nums[j],nums[k],nums[l]];
                    result.push(temp);
                    k++;
                    l--;

                    while(k<l && nums[k]===nums[k-1]) k++;
                    while(k<l && nums[l]===nums[l+1])l--;
                }
                else if(sum<target)
                {
                   k++
                }
                else{
                    l--;
                }
            }
        }
        
    }
    return result;
}

console.log(fourSum([1,0,-1,0,-2,2],0))