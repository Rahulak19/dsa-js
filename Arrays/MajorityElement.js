/** Find the Majority Element that occurs more than N/2 times */

function majorityEle(nums){

    let midNo=Math.floor(nums.length/2);
    let majorityNo=0;
    let map=new Map();
    let index=-1;
    nums.map((num)=>{
        if(map.has(num))
        {
            map.set(num,map.get(num)+1);
        }
        else{
            map.set(num,1);
        }
    })

    for(let [value,key] of map){
        if(key>majorityNo)
        {
            majorityNo=key;
            index=value;
        }
    }
    // for(let i=0;i<nums.length;i++)
    // {
    //     if(map.get(nums[i])>midNo && map.get(nums[i])>majorityNo)
    //     {
    //         majorityNo=Math.max(majorityNo,map.get(nums[i]));
    //         index=nums[i];
    //     }
    // }
    // map.forEach((num)=>{
    //     if(map.get(num)>midNo)
    //     {
    //         majorityNo=Math.max(majorityEle,map.get(num));
    //     }
    // })
    return index;
}

console.log(majorityEle( [2, 2, 1, 1, 1, 2, 2]))