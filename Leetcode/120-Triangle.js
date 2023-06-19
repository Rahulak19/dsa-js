var minimumTotal = function(triangle) {
/*     if(triangle.length===1) return triangle[0][0]

    let start=triangle[0][0];
    for(let i=1;i<triangle.length;i++)
    {
        let curr=triangle[i][0];
        for(let j=0;j<triangle[i].length;j++)
        {
            curr=Math.min(curr,triangle[i][j])
        }
        start+=curr;
    }
    return start;
 */    

    for(let i=triangle.length-2;i>=0;i--)
    {
        for(let j=0;j<triangle[i].length;j++)
        {
            triangle[i][j]+=Math.min(triangle[i+1][j+1],triangle[i+1][j])
        }
    }
    return triangle[0][0];
};

let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
//let triangle = [[-10]];

console.log(minimumTotal(triangle));

//    2
//   3 4
//  6 5 7
// 4 1 8 3