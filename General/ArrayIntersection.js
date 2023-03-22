var intersect = function(nums1, nums2) {
    let cache = {};
    let result=[];
    for (let num of nums2){
        if (!cache[num])cache[num]=1;
        else cache[num]++;
    }
    for (let num of nums1){
        if (cache[num]){
            result.push(num);
            cache[num]--;
        }
    }
    console.log(result)
    return result ;
};

let b=[1,2,2,1]
let a=[2,2]
intersect(a,b)