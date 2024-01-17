function lowerBound(nums,ele){
    let start=0,end=nums.length-1;
    ans=-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(nums[mid]>=ele)
        {
            ans=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return ans;
}
function upperbound(nums,ele){
    let start=0,end=nums.length-1;
    ans=-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(nums[mid]>ele)
        {
            ans=mid;
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
    return ans;
}
console.log(lowerBound([3, 5, 8, 9, 15, 19],7))
//console.log(upperbound([3, 5, 8, 9, 15, 19],9))