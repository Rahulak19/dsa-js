function twoSum(n,sum,arr)
{
    // -3,-2,2,3,3
    arr.sort((a,b)=>a-b);

    let start=0,end=n-1;
    let result=[];

    while(start<=end)
    {
        if(arr[start]+arr[end]===sum)
        {
            result.push([arr[start],arr[end]]);
            end--;
        }
        else if(arr[start]+arr[end]<sum){
            start++;
        }
        else{
            end--;
        }
    }
    return result;

}

let arr=[2,-3,3,3,-2];
let n=5;
let sum=0;

console.log(twoSum(n,sum,arr))