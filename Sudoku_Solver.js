/*const grid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
*/

const grid = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
]
function printGrid(grid) {
    //console.log("****************")
    console.log('-----------------------------------');
    var res = "";

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            
            res += grid[i][j];
            res +=' | ';
        }
        res += "\n";
        res += '-----------------------------------';
        res += '\n';
        
    }
    console.log(res);
    //console.log("****************")
}


// functino for checking whether a number fits in the cell or not

let solvedBoard = grid

const possible = (y,x,n) => {
    for(let i=0; i<9; i++){
        if (solvedBoard[y][i] == n){
            return false
        }
    }
    for(let i=0; i<9; i++){
        if (solvedBoard[i][x] == n){
            return false
        }
    }
    //fixed this in the code but still not solving
    x0 = Math.floor(x/3) * 3
    y0 = Math.floor(y/3) * 3
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if (solvedBoard[y0+i][x0+j] == n){
                return false
            }
        }
    }
    return true
}



//function for recursively solving the sudoku,
// this needs to be fixed

function solve(){
    for(let y=0;y<9;y++){
        for(let x=0;x<9;x++){
            if (solvedBoard[y][x] == 0){
                for(let n=1;n<10;n++){
                    if(possible(y,x,n)){
                        solvedBoard[y][x] = n
                        if(solve()){
                            return true;
                        }
                        solvedBoard[y][x] = 0;
                    }
                   // printGrid(solvedBoard)
                }
                return false;
            }
        }
    }
    return true;
}

solve()
printGrid(solvedBoard);

