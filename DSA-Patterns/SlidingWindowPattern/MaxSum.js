let arr=[2,6,9,2,1,8,5,6,3]
let n=3;

function maxSum(arr,n)
{
    if(arr.length<n) return null;
    let maxCount=0;
    let tempCount=0;

    for(let i=0;i<n;i++)
    {
        maxCount+=arr[i];
    }
    tempCount=maxCount;
    for(let j=n;j<arr.length;j++)
    {
        tempCount=tempCount-arr[j-n]+arr[j]
        maxCount=Math.max(tempCount,maxCount)
    }
    return maxCount;
}

console.log(maxSum(arr,n))