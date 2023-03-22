// let map={}
// ar=["3","3"]
// ar.map(x=>map[x]=map[x]?map[x]+1:1);
// //ar.map(x=>console.log(x));
// for(let i=0;i<ar.length;i++)
//     {
//         if(map[ar[i]]>1)
//         {
//            console.log(true)
//         }
//     }
    
// //console.log(map)
let nums=[2,2,1,4,4,9,9]
let map={}
nums.map(x=>map[x]=map[x]?map[x]+1:1)
console.log(map)
console.log(Object.values(map))
console.log("ll",map[5])
let maxNumber=nums[0];
for(let i=0;i<nums.length;i++)
{
    if(map[nums[i]]>map[maxNumber])
    {
        maxNumber=nums[i];
    }
}
console.log(maxNumber);