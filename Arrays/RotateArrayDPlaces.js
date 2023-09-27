function rotateArrayByDPlaces(arr,d){
let arrLength=arr.length;

let temp=[];
d=d%arrLength;
for(let i=0;i<d;i++)
{
    temp[i]=arr[i];
}
for(let j=d;j<arrLength;j++)
{
    arr[j-d]=arr[j];
}

for(let k=arrLength-d;k<arrLength;k++)
{
    arr[k]=temp[k-(arrLength-d)]
}
return arr;

}

// let optimalSol=(arr,d)=>{
// let l=arr.length;
// d=d%l;
// reverse(arr,0,l-d-1);
// reverse(arr,l-d,l-1);
// reverse(arr,d,l-1);
// return arr;
// }

// let reverse=(arr,start,end)=>{

//     while(start<=end)
//     {
//         let temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         end--;
//         start++;
//     }
//     return arr;
// }

console.log(rotateArrayByDPlaces([1,2,3,4,5,6,7],3))
console.log("optimal",optimalSol([1,2,3,4,5,6,7],3))