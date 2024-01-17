

 // without extra space
 var permute = function(nums) {
    let ans=[];
    recurPermute(0,nums,ans);
    return ans;
};

function recurPermute(idx,nums,ans) {
   if(idx===nums.length) {
       let ds=[];
       for(let num of nums) {
           ds.push(num);
       }
       ans.push([...ds]);
       return;
   }
   for(let i=idx;i<nums.length;i++) {
       [nums[i],nums[idx]] = [nums[idx],nums[i]];
       recurPermute(idx+1,nums,ans);
       [nums[i],nums[idx]] = [nums[idx],nums[i]];
   }
}
// with extra space
/*var permute = function(nums) {
    let ans=[];
    let dp=[];
    let vis=new Array(nums.length).fill(false);
    recurPermute(nums,dp,vis,ans);
    return ans;
};

function recurPermute(nums,dp,vis,ans){
    if(nums.length===dp.length){
        ans.push([...dp]);
        return;
    }
    for(let i=0;i<nums.length;i++){
        if(!vis[i]){
            vis[i]=true;
            dp.push([nums[i]]);
            recurPermute(nums,dp,vis,ans);
            dp.pop();
            vis[i]=false;
        }
    }
} */

console.log(permute([1,2,3]))