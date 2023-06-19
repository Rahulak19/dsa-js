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