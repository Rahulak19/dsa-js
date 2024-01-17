
var nextPermutation = function(nums) {

    let n=nums.length;
    let ind=-1;
    for(let i=n-2;i>=0;i--)
    {
        if(nums[i]<nums[i+1])
        {
            ind=i;
            break;
        }
    }

    if(ind==-1)
    {
        return nums.reverse();
    }

    for(let i=n-1;i>=ind;i--)
    {
        if(nums[ind]<nums[i])
        {
            [nums[ind],nums[i]] = [nums[i],nums[ind]]
            break;
        }
    }
    nums.splice(ind+1,n-ind-1,...nums.slice(ind+1).reverse());
    return nums;
    
};

 let A = [2, 1, 5, 4, 3, 0, 0];
// console.log(nextPermutation(A));

//let A = [1,2,3];
let ans = nextPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]");