function rotateString(s,goal){
    if(s.length!==goal.length) return false;
for(let i=0;i<s.length;i++)
{
    s=s.slice(1)+s.slice(0,1);
    if(s===goal)
    {
        return true;
    }
}
return false;
}

console.log(rotateString("abcde","cdeab"))