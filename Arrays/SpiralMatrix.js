function spiralMatrix(matrix){
   let m=matrix.length;
   let n=matrix[0].length;

   let left=0,right=n-1,top=0,bottom=m-1;
   let result=[];

   while(top<=bottom && left<=right)
   {
    for(let i=left;i<=right;i++)
    {
        result.push(matrix[top][i]);
    }
    top++;
    for(let i=top;i<=bottom;i++)
    {
        result.push(matrix[i][right]);
    }
    right--;

    if(top<=bottom)
    {
        for(let i=right;i>=left;i--)
    {
        result.push(matrix[bottom][i]);
    }
    bottom--;
    }
    
    if(left<=right)
    {
        for(let i=bottom;i>=top;i--)
        {
            result.push(matrix[i][left]);
        }
        left++;
    }
   
   }
   return result;   
}

let mat = [[1, 2, 3, 4],
           [5, 6, 7, 8],
	       [9, 10, 11, 12],
		   [13, 14, 15, 16]];
    
let ans = spiralMatrix(mat);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i] + " ");
}

console.log();