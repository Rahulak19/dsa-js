function threeSum(arr,target){

    let ans=Infinity;
    arr.sort((a,b)=>a-b);

    for(let i=0;i<arr.length-2;i++)
    {
        let start=arr[i];
        let left=i+1;
        let right=arr.length-1;
        while(left<right)
        {
            let current=start+arr[left]+arr[right];
            if(current===target) return target;

            if((Math.abs(ans-current)>Math.abs(current-target)))
            {
                ans=current;
            }
            if(current>target)
            {
                right--
            }
            else{
                left++;
            }
        }
    }
    return ans;

}

console.log(threeSum([-1,2,1,-4],1))