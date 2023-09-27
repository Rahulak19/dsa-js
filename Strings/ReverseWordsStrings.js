function reverseWord(s){
    let arr=s.trim().split(" ");
    let result="";

    for(let i=arr.length-1;i>=0;i--)
    {
        if(arr[i])
        {
            result+=(result?" ":"")+arr[i];
        }
    }
    return result;
}

console.log(reverseWord(" hello world "))