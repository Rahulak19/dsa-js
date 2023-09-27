var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    let map1=new Map();
    let map2=new Map();

    for(let val of s)
    {
         if(map1.has(val)){
            map1.set(val,map1.get(val)+1)
        }else{
            map1.set(val,1);
        }
    }
    for(let val of t)
    {
         if(map2.has(val)){
            map2.set(val,map2.get(val)+1)
        }else{
            map2.set(val,1);
        }
    }

    // s.map((val)=>{
       
    // })
    //  t.map((val)=>{
        
    // })

   for(let ele of s)
   {
       if(map1.get(ele)!==map2.get(ele))
       {
           return false;
       }
   }
    return true;
};

console.log(isAnagram("anagram","nagaram"))