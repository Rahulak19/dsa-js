function missingNo(arr){
    let n=arr.length;
    let totalSum=(n*(n+1))/2;
    let arrSum=0;
    for(let i=0;i<arr.length;i++)
    {
        arrSum=arrSum+arr[i];
    }
    console.log(arrSum)
    return totalSum-arrSum;
}

console.log(missingNo([9,6,4,2,3,5,7,0,1]))