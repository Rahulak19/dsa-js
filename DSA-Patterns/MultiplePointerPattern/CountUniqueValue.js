let arr=[-2,-1,-1,0,1]

function countUnique(arr)
{
    var mapObj={};
   // arr.map(x=>mapObj[x]=mapObj[x]?1:mapObj[x]++)
   for(var ele of arr)
   {
    mapObj[ele]=(mapObj[ele]||0) +1;
   }

    let count =0;
   // console.log(mapObj)
    // for(var ele in mapObj)
    // {
    //     if(mapObj[ele]==1)
    //     {
    //         count++;
    //     }
    // }
   // console.log(Object.keys(mapObj).length)
    return Object.keys(mapObj).length;
}

/* Multiple pointer approach TC=O(n) */
function countUniqueVal(arr)
{
    if (arr.length==0) return 0;
    var i=0;
    for(var j=1;j<arr.length;j++)
    {
        if(arr[i]!==arr[j])
        {
            i++;
            arr[i]=arr[j]
        }
    }
    return i+1;
}

console.log(countUniqueVal(arr))