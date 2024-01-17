
var subsetsWithDup = function(nums) {
    let ans=[];
    let ds=[];
    nums.sort((a,b)=>a-b);

    subset(0,nums,ds,ans);
    return ans;
};

function subset(ind,arr,ds,ans){
    ans.push([...ds]);
    for(let i=ind;i<arr.length;i++){
        if(ind<i && arr[i]===arr[i-1]) continue;
        ds.push(arr[i]);
        subset(i+1,arr,ds,ans);
        ds.pop();
    }
}

console.log(subsetsWithDup([1,2,2]))