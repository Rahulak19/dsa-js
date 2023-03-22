let inp=[-2,-1,0,1,3]

function sumZero(inp){
var left=0;
var right=inp.length-1;
while(left<right)
{
    var sum=inp[left]+inp[right];
    if(sum==0)
    {
        return [inp[left],inp[right]]
    }
    else if(sum>0)
    {
        right--;
    }
    else{
        left--;
    }
    
}
console.log("jj")
return[0,0];
}

console.log(sumZero(inp))