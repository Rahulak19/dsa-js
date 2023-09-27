function singleNum(nums){
    let map=new Map();
    nums.map((val)=>{
        if(map.has(val))
        {
            map.set(val,map.get(val)+1)
            console.log("mp",map)
        }
        else{
            map.set(val,1);
            console.log("mp",map)
        }
    })
    console.log("map",map.get(2));

   for(let i=0;i<nums.length;i++)
   {
    if(map.get(nums[i])==1)
    {
        return nums[i];
    }
   }
   return -1;
    
}

console.log(singleNum([2,2,1]))