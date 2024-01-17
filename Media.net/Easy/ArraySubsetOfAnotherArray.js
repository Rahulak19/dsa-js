function subset(arr1,arr2){
    let map = new Map();
    arr1.map(val=>{
        if(map.has(val)){
            map.set(val,map.get(val)+1);
        }else{
            map.set(val,1);
        }
    })

    for(let it of arr2)
    {
        if(!map.has(it))
        {
            return false;
        }
    }
    return true;
}
let a1=[11,1,13,21,3,7];
let a2=[11,3,7,1,55];
console.log(subset(a1,a2));