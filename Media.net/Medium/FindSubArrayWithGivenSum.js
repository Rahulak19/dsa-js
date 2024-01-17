function findSubArrayCount(arr,k){
    let map=new Map();
    let count=0,preSum=0;
    map.set(0,1);

    for(let i=0;i<arr.length;i++)
    {
        preSum+=arr[i];
        let remove=preSum-k;
        count+=map.get(remove)||0;
        map.set(preSum,(map.get(preSum)||0)+1);
    }
    return count;

}

function longSubArrayWithSumK(arr,k){
    let left=0,right=0,sum=arr[0],n=arr.length,max=0;

    while(right<n)
    {
        while(left<=right && sum>k)
        {
            sum-=arr[left];
            left++;
        }
        if(sum===k)
        {
            max=Math.max(max,right-left+1);
        }
        if(right<n)
        {
            sum+=arr[right];
            right++;
        }
        
    }
    return max;
}

//console.log(findSubArrayCount([1, 1, 0, 1],2))
console.log(longSubArrayWithSumK([3, -2, 1, -2, 1],0))
