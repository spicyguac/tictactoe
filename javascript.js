
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

function gameLogic(baord){

}

function newPlayer(player){

}

function playGame(){
    
}

const new1 = newBoard();
new1.addX(1,1);
new1.addO(1,2);

console.log(new1.board);