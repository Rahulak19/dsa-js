let longSubstr=(str,k)=>{
let map = new Map();

let i=0,j=0,max=-1,n=str.length;

while(j<n)
{
    map.has(str[j])?map.set(str[j],map.get(str[j])+1):map.set(str[j],1);

   while(map.size>k)
   {
        map.set(str[i],map.get(str[j])-1);
        if(map.get(str[i])===0)
        {
            map.delete(str[i]);
        }
        i++;
   }
   if(map.size===k)
   {
    max=Math.max(max,j-i+1);
   }
   j++;
}
return max;
}

let s="abbbbbbc";
console.log(longSubstr(s,2));