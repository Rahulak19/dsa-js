function mergeSort(arr1,arr2){
    let result=[];
    let i=0,j=0;

    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length)
    {
        result.push(arr1[i]);
        i++; 
    }
    while(j<arr2.length)
    {
        result.push(arr2[j]);
        j++; 
    }
    return result;
}

function sort(arr){
    if(arr.length<=1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=sort(arr.slice(0,mid));
    let right=sort(arr.slice(mid));
    return mergeSort(left,right);
   
}

let n=6;
let arr=[3,8,1,7,9,2];

console.log(sort(arr));