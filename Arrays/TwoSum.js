function twoSum(arr,target){

    let map=new Map();

    for(let i=0;i<arr.length;i++)
    {
        if(map.has(target-arr[i]))
        {
            return [map.get(target-arr[i]),i]
        }
        else{
            map.set(arr[i],i)
        }
    }
    return [];
}

console.log(twoSum([3,2,4],6))