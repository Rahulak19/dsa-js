function arrayRotation(nums){
    let left=0,right=nums.length-1,min=Number.MAX_SAFE_INTEGER,mid,index=-1;

    while(left<=right)
    {
        mid=Math.floor((left+right)/2)
        if(nums[left]<=nums[right])
        {
           if(nums[left]<min)
           {
            min=nums[left];
            index=left;
           }
            break;
        }
        if(nums[left]<=nums[mid])
        {
            if(nums[left]<min)
            {
             min=nums[left];
             index=left;
            }
            left=mid+1;
        }
        else{
            if(nums[mid]<min)
            {
             min=nums[mid];
             index=mid;
            }
            right=mid-1;
        }
    }
    return index;

}

console.log(arrayRotation([4,5,1,2,3]))