let gcd=(x,y)=>{
return (y===0?x:gcd(y,x%y));
}

let gcdString=(s1,s2)=>{
    if(s1+s2!==s2+s1) return "";
    let x=s1.length;
    let y=s2.length;

    let div=gcd(x,y);

    return s1.slice(0,div);


}

console.log(gcd(20,15))
console.log(gcdString("ABCABC","ABC"))