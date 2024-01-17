var solveSudoku = function(board) {
    solve(board);
    return board;
};

function solve(board) {
    for(let i = 0; i<board.length;i++) {
        for(let j=0;j<board[0].length;j++) {
            if(board[i][j]==='.') {
               for(let chr of "123456789") {
                   if(checkBoard(i,j,board,chr)) {
                       board[i][j]=chr;
                      if(solve(board) === true) {
                          return true;
                      } else {
                          board[i][j] = '.';
                      }
                   }
               }
               return false;
            }
        }
    }
    return true;
}

function checkBoard(row,col,board,chr) {
    for(let i=0;i<9;i++) {
        if(board[row][i] === chr) return false;
        if(board[i][col] === chr) return false;
        if(board[3*Math.floor(row/3)+Math.floor(i/3)][3*Math.floor(col/3)+i%3] === chr) return false;
    }
     return true;
}

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
console.log(solveSudoku(board));