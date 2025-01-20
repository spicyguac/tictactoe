
function newBoard(){
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const addX = (x,y) => board[x][y] = "X";
    const addO = (x,y) => board[x][y] = "O";

    return{
        addX, addO, board
    };
}

function gameLogic(gameBoard){

    let test = gameBoard

    let xWon = [];
    let oWon = [];
    let xWonPerp = [];
    let oWonPerp = [];

    console.log(test);

    for (let i = 0; i < test.length; i++) {
        console.log(xWon);
        for(let j = 0; j < test[i].length; j++) {
            if(test[i][j] == "X"){
                xWon.push(test[i][j]);
            }else if(test[i][j] == "O"){
                oWon.push(test[i][j]);
            }

            if(xWon.length > 0){
                if(xWon[j - 1] != xWon[j]){
                    xWon[j] = xWon[j-1];
                    break;
                }
            }
        }
    }
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
new1.addX(1,1);
new1.addO(1,2);
new1.addO(0,1);
new1.addO(0,2);

console.log(new1.board);