function removeParanthisis(str){
    let stack=[];
    let total="";

    for(let s of str)
    {
        if(s==='(')
        {
            if(stack.length)
            {
                total+=s;
            }
            stack.push(s);
        }
        else{
            stack.pop();
            if(stack.length)
            {
                total+=s;
            }
        }
    }
    return total;
}

console.log(removeParanthisis("(()())(())"))