function substr(s){
    let map = new Map();
    let left=0,right=0,len=0,n=s.length;

    while(right<n)
    {
        if(map.has(s[right]))
        {
            left=Math.max(map.get(s[right])+1,left)
        }
        map.set(s[right],right);
        len=Math.max(len,right-left+1);
        right++;
    }
    return len;

}

let s="abcaabcdba";
console.log(substr(s));