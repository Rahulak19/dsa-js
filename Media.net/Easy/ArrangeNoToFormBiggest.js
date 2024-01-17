function arrangeNo(arr)
{

    arr.sort((a,b)=>{
        let ab=a+b;
        let ba=b+a;
        return (ba-ab); 
    })
    console.log(arr)
    return arr.join("");
}
function myCompare(X, Y)
{
    // // first append Y at the end of X
    let XY = X + Y;
 
    // // then append X at the end of Y
    let YX = Y + X;
 
    // // Now see which of the two 
    // // formed numbers is greater
    return (YX - XY)
}

console.log((arrangeNo(["66", "56", "9", "7", "10", "660" ])))

//97666605610