function maxLen(A, n) {
    let mpp = new Map();
    let maxi = 0;
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      sum += A[i];
      if (sum === 0) {
        maxi = i + 1;
      } else {
        if (mpp.has(sum)) {
          maxi = Math.max(maxi, i - mpp.get(sum));
        } else {
          mpp.set(sum, i);
        }
      }
    }
  
    return maxi;
  }
  
  let A = [9, -3, 3, -1, 6, -5];
  let n = A.length;
  console.log(maxLen(A, n));

  /* 
  9,0
  6,1

  
  */