
function newBoard(){
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const addX = (x,y) => board[x][y] = "X";
    const addO = (x,y) => board[x][y] = "O";

    function hasWon(){
        let xWin = 0;
        let oWin = 0;
        if(board[1][1] != null){
            if(board[1][1] == "X"){
                if(board[0][0] == "X"){
                    if(board[2][2] == "X"){
                        xWin = 1;
                    }
                }
                if(board[0][2] == "X"){
                    if(board[2][2] == "X"){
                        xWin = 1;
                    }
                }
            }else if(board[1][1] = "O"){

                if(board[0][0] == "O"){
                    if(board[2][2] == "O"){
                        oWin = 1;
                    }
                }
                if(board[0][2] == "O"){
                    if(board[2][0] == "O"){
                        oWin = 1;
                    }
                }
            }
        }

        let xWonHoriz = [];
        let oWonHoriz = [];
        let xWonPerp = [];
        let oWonPerp = [];
    
        if(xWin != 1 && oWin != 1){
            for (let i = 0; i < board.length; i++) {
                console.log(xWonHoriz);
                if(xWonHoriz.length == 3 || xWonPerp.length == 3){
                    console.log("X Win");
                    xWin = 1;
                    break;
                }else if(oWonHoriz.length == 3 || oWonPerp == 3){
                    console.log("O Win");
                    oWin = 1;
                    break;
                }
        
                for(let j = 0; j < board[i].length; j++) {
                    if(board[i][j] == "X"){
                        xWonHoriz.push(board[i][j]);
                    }else if(board[i][j] == "O"){
                        oWonHoriz.push(board[i][j]);
                    }
        
                    if(board[j][i] == "X"){
                        xWonPerp.push(board[j][i]);
                    }else if(board[j][i] = "O"){
                        oWonPerp.push(board[j][i]);
                    }
                }
            }
        }
    
        if(xWin == 1){
            return "X";
        }else if(oWin == 1){
            return "O";
        }
    }    

    return{
        addX, addO, hasWon ,board
    };
}

function gameLogic(gameBoard){
    console.log(gameBoard)
    let board = gameBoard


}



function newPlayer(player){
    let wins = 0;
    
    const getWins = () => wins;
    const giveWin = () => wins++;

    return {getWins, giveWin, wins};
}

function playGame(){
    
}

const new1 = newBoard();


console.log(new1.board);