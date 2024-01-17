/** Better Approach **/

function markZerosBetter(matrix){
    let m=matrix.length;
    let n=matrix[0].length;
    let row=new Array(m).fill(0);
    let col=new Array(n).fill(0);    

    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(matrix[i][j]==0)
            {
                row[i]=1;
                col[j]=1;
            }
        }
    }

    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(row[i]==1 || col[j] == 1)
            {
                matrix[i][j]=0;
            }
        }
    }
    return matrix;
}

/**Optimal Approach */

function markZerosOptimal(matrix)
{
    let m=matrix.length;
    let n=matrix[0].length;
    let col0=1;

    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(matrix[i][j]==0){
                matrix[i][0]=0;
                if(j!=0){
                    matrix[0][j]=0;
                }
                else{
                    col0=0;
                }
            }
           
        }
    }

    for(let i=1;i<m;i++)
    {
        for(let j=1;j<n;j++)
        {
           if(matrix[i][j]!=0)
           {
            if(matrix[0][j] == 0 || matrix[i][0] == 0)
            {
                matrix[i][j]=0;
            }
           }
           
        }
    }
    if(matrix[0][0]==0)
    {
        for(let i=0;i<m;i++){
            matrix[0][i]=0;
        }
    }
    if(col0==0)
    {
        for(let i=0;i<n;i++){
            matrix[i][0]=0;
        }
    }
    return matrix;
}

const matrix = [
[1, 1, 1], 
[1, 0, 1], 
[1, 1, 1]];
//console.log(markZerosBetter(matrix));
console.log(markZerosOptimal(matrix));