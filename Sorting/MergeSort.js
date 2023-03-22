function merge(arr1,arr2){
    var result=[];
    var i=0,j=0;

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
    var mid=Math.floor(arr.length/2);
    var left=sort(arr.slice(0,mid));
    var right=sort(arr.slice(mid));
    return merge(left,right)

}

console.log(sort([7,3,1,4,0,8]))