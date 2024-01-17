
var solveNQueens = function(n) {
    let res=[];
    let board=new Array(n).fill(0).map(()=>new Array(n).fill("."));
    let leftSide=new Array(n).fill(0);
    let lowDgnl=new Array(2*n-1).fill(0);
    let upDgnl=new Array(2*n-1).fill(0);
    solve(0,board,leftSide,lowDgnl,upDgnl,res);
    return res;
};

function solve(col,board,leftSide,lowDgnl,upDgnl,res) {
    if(col===board.length){
        res.push([...board.map((row)=>row.join(""))]);
    }
    for(let row=0;row<board.length;row++) {
        if(leftSide[row] === 0 && lowDgnl[row+col] === 0 && upDgnl[board.length-1 + col-row] === 0) {
            board[row][col]="Q";
            leftSide[row] = 1;
            lowDgnl[row+col] = 1;
            upDgnl[board.length-1 + col-row] = 1;
            solve(col+1,board,leftSide,lowDgnl,upDgnl,res);
            board[row][col] = ".";
            leftSide[row] = 0;
            lowDgnl[row+col] = 0;
            upDgnl[board.length-1 + col-row] = 0;
        }
    }
}

const N = 4;
const queens = solveNQueens(N);
console.log(queens)