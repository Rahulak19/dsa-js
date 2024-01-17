function rotatedSortedArray(nums,ele){
    let start=0,end=nums.length-1,mid;

    while(start<=end)
    {
        mid=Math.floor((start+end)/2);
        if(nums[mid]===ele)
        {
            return mid;
        }
        if(nums[start]<=nums[mid])
        {
            if(nums[start]<=ele && ele<=nums[mid])
            {
                end=mid-1;
            }
            else{
                start=mid+1
            }
        }
        else{
            if(nums[mid]<= ele && ele<=nums[end])
            {
                start=mid+1;
            }
            else{
                end=mid-1;
            }
        }
    }
    return -1;
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let n = 9, k = 1;
let ans = rotatedSortedArray(arr,k);
if (ans === -1)
    console.log("Target is not present.");
else
    console.log("The index is:", ans);
