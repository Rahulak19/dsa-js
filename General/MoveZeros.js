let nums=[0,1,0,11,0,3,12]
 var a=2
 var b=1
 //console.log(a, b)
//  [a, b] = [b, a]
//  console.log(a ,b)

// var a = "Hello"
// var b = "ksksk"
// //console.log("Before :")
// console.log(a, b); // Hello World!
 [a, b] = [b, a]; 
 console.log("ss",a,b)
//console.log(a, b); // World! Hello

let j = 0  // nonzero count

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    // swap elements
    [nums[j], nums[i]] = [nums[i], nums[j]]
    j++
  }
}
console.log(nums)
