function sortChar(str){

    let seen=new Map;

    for(let val of str){
        if(seen.has(val))
        {
            seen.set(val,seen.get(val)+1)
        }else{
            seen.set(val,1)
        }
    }
    let sortedArray=[...seen].sort((a,b)=>b[1]-a[1]);

    let result="";
    sortedArray.map(([k,v])=>{
        result+= k.repeat(v)
    }).join('')
   
    return result;
}

console.log(sortChar("tree"))