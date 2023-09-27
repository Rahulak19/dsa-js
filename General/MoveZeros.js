let nums=[1,0,0,11,0,3,12]

function zeroToRight(nums){
  let j = 0  // nonzero count

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    // swap elements
    [nums[j], nums[i]] = [nums[i], nums[j]]
    j++
  }
}
return nums;

}

function zertolef(arr){
  j=arr.length-1;
  for(let i=arr.length-1;i>=0;i--)
  {
    if(arr[i]!=0)
    {
      [arr[j],arr[i]]=[arr[i],arr[j]];
      j--;
    }
  }
  return arr;
}

function zeroToLeft(A)
{
  if (A.length < 1) {
    return;
  }

  let lengthA = A.length;
  let writeIndex = lengthA - 1;
  let readIndex = lengthA - 1;

  while (readIndex >= 0) {
    if (A[readIndex] != 0) {
      [A[writeIndex],A[readIndex]] = [A[readIndex],A[writeIndex]];
      writeIndex--;
    }
    
    readIndex--;
  }
  
  // while (writeIndex   >= 0) {
  //   A[writeIndex] = 0;
  //   writeIndex--;
  // }
  return A
}


console.log(zeroToLeft(nums))
console.log(zertolef(nums))