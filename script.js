//(function(){
createPlayer = (name, mark) => {

    return { name, mark };
};

const player1 = createPlayer("tom", "X");
const player2 = createPlayer("ben", "O");

const game = { 
    turn: true,

    piece: () => {
        if ( game.turn == false ) {
            return "O";
        } 
        return "X";
     },



    board: [ 
    ["","",""], //[0][0-2]
    ["","",""], //[1][0-2]
    ["","",""]  //[2][0-2]
    ],

    placePiece: (x, y) => {
        game.board[x][y] = game.piece();
        console.log(game.board);
    },

    checkWin: () => {
        if (
            (game.board[0][0] === game.piece() && game.board[0][1] === game.piece() && game.board[0][2]) === game.piece() ||
            (game.board[1][0] === game.piece() && game.board[1][1] === game.piece() && game.board[1][2]) === game.piece() ||
            (game.board[2][0] === game.piece() && game.board[2][1] === game.piece() && game.board[2][2]) === game.piece() ||
            (game.board[0][0] === game.piece() && game.board[1][0] === game.piece() && game.board[2][0]) === game.piece() ||
            (game.board[0][1] === game.piece() && game.board[1][1] === game.piece() && game.board[2][1]) === game.piece() ||
            (game.board[0][2] === game.piece() && game.board[1][2] === game.piece() && game.board[2][2]) === game.piece() ||
            (game.board[0][0] === game.piece() && game.board[1][1] === game.piece() && game.board[2][2]) === game.piece() ||
            (game.board[0][2] === game.piece() && game.board[1][1] === game.piece() && game.board[2][0]) === game.piece() 
        ) {
            return true;
        } 
        return false;
    },
};


function playGame(x, y) {
    game.piece();
    game.placePiece(x, y);
    game.checkWin();
    if (game.checkWin() === true) {
        console.log("Winner");
    }
    game.turn = !game.turn;

} 








//return { tom };

//})();