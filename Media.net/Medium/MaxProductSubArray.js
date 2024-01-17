function maxProductArray(arr){
    let ans=Number.MIN_SAFE_INTEGER;
    let pre=0,suf=0,n=arr.length;

    for(let i=0;i<n;i++)
    {
        if(pre===0) pre=1;
        if(suf===0) suf=1;

        pre=pre*arr[i];
        suf=suf*arr[n-i-1];

        ans=Math.max(ans,Math.max(suf,pre));
    }
    return ans;

}

console.log(maxProductArray([2,3,-2,4]))

