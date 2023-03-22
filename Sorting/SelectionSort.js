function SelectionSort(arr){
    let min=0;
   for(let i=0;i<arr.length;i++)
   {
    min=i;
    for(let j=i+1;j<arr.length;j++)
    {
       
        if(arr[min]>arr[j])
        {
            min=j;
        }
    }
   if(i!==min) swap(arr,i,min)
   }

return arr;
}

function swap(arr,x,y){
    let temp=arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

console.log(SelectionSort([4,1,2,8,5]))