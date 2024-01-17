function subArray(arr)
{
    let sum=0,count=0;
    let map=new Map();
    map.set(0,1);
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===1)
        {
            sum+=1;
        }
        else{
            sum-=1;
        }
        if(map.has(sum))
        {
            count+=map.get(sum);
            map.set(sum,map.get(sum)+1);
        }
        else{
            map.set(sum,1);
        }
    }
    return count;
}

console.log(subArray([0,0,1,0,1]))