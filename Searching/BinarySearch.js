function binarySearch(arr,n){

    let left=0,
     right=arr.length-1,
     mid=Math.floor((left+right)/2);
    while(arr[mid]!=n && left<right)
    {
        if(n<arr[mid])
        {
            right=mid-1;
        }
        else if(n>arr[mid]){
            left=mid+1;
        }
         mid=Math.floor((left+right)/2);
    }
    return (arr[mid]!=n)?-1:mid;
  }

  console.log(binarySearch([1,2,4,6,7,9],7))