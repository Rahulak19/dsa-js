function BubbleSort(arr){
    let noSwap;
for(let i=arr.length;i>0;i--)
{
    noSwap=true;
    for(let j=0;j<i-1;j++){
        if(arr[j]>arr[j+1])
        {
            swap(arr,j,j+1);
            noSwap=false;
        }
    }
    console.log("outerloop")
    if(noSwap) break;
}

return arr;
}

function swap(arr,x,y){
    let temp=arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

console.log(BubbleSort([4,1,2,8,5]))