
const NUMBER_OF_ROWS = 3;
const NUMBER_OF_COLUMNS = 3;


const PLAYER_ONE_TOKEN = 'X';
const PLAYER_TWO_TOKEN = 'O';
const EMPTY_TOKEN = '-';

let replayBtn$ = document.querySelector('#replay');
replayBtn$.addEventListener('click', init);

let currentPlayer;

init();


function init(){
    cleanBoard();
    printBoard();
    switchPlayer(1);

}


function cleanBoard() {
    let board$ = document.querySelector('#board');
    board$.innerHTML = '';
}

function printBoard() {
   
    let board$ = document.querySelector('#board');
    for(let i = 0; i < NUMBER_OF_ROWS; i++){
        let tr$ = document.createElement('tr');
        for(let j = 0; j < NUMBER_OF_COLUMNS; j++){
            let td$ = document.createElement('td');
            td$.textContent = EMPTY_TOKEN;
            td$.addEventListener('click', placeToken)
            tr$.appendChild(td$);
        }
        board$.appendChild(tr$);
    }
}



function getBoardArray() {
    let board$ = document.querySelector('#board');
    let trs$ = board$.querySelectorAll('tr');
    let boardArray = [];
    for(let tr$ of trs$) {
        let tds$ = tr$.querySelectorAll('td');
        let row = [];
        for(let td$ of tds$) {
            row.push(td$.textContent);
        }
 
        boardArray.push(row);
    }
 
    return boardArray;
}


function placeToken() {
    // Check if there's a winner after placing the token
    if(this.textContent === EMPTY_TOKEN) {
        this.textContent = currentPlayer === 1 ? PLAYER_ONE_TOKEN : PLAYER_TWO_TOKEN;
    
    if (checkWin()) {
        // Display message if there's a winner
        showMessage('El jugador ' + currentPlayer + ' ha ganado!');
        } else if(checkEven()) {
         showMessage('Habeis empatado');   
        // Continue the game
        } else {
            let newPlayer = currentPlayer === 1 ? 2 : 1;
            switchPlayer(newPlayer);
        }
    }
}



function switchPlayer(newPlayer){
    currentPlayer = newPlayer;
    let title$ = document.querySelector('#currentPlayer');
    title$.textContent = 'Jugador ' + currentPlayer;
}



function checkEven() {
    let boardArray = getBoardArray();
    for(let row of boardArray) {
        for (let cell of row){
            if(cell === EMPTY_TOKEN) {
                return false;  //finaliza la funccion con return false si encuentro una celda que esta vacia asumo que no se ha acado el juego
            }
        }
    }

    return true; //si hemos llegado aqui, ninguna de las celdas estaba vacia

}



function showMessage(msg) {
    setTimeout(function() {
        alert(msg);

    }, 100);

}


function checkWin() {
    let boardArray = getBoardArray();
    
    if (boardArray[0][0] !== EMPTY_TOKEN) {
        if (boardArray[0][0] === boardArray[0][1] && boardArray[0][0] === boardArray[0][2]) {
            return true; // Horizontal win in the top row
        }
        if (boardArray[0][0] === boardArray[1][0] && boardArray[0][0] === boardArray[2][0]) {
            return true; // Vertical win in the left column
        }
        if (boardArray[0][0] === boardArray[1][1] && boardArray[0][0] === boardArray[2][2]) {
            return true; // Diagonal win from top-left to bottom-right
        }
    }

    if (boardArray[0][1] !== EMPTY_TOKEN) {
        if (boardArray[0][1] === boardArray[1][1] && boardArray[0][1] === boardArray[2][1]) {
            return true; // Horizontal win in the middle row
        }
    }

    if (boardArray[0][2] !== EMPTY_TOKEN) {
        if (boardArray[0][2] === boardArray[1][2] && boardArray[0][2] === boardArray[2][2]) {
            return true; // Horizontal win in the bottom row
        }
        if (boardArray[0][2] === boardArray[1][1] && boardArray[0][2] === boardArray[2][0]) {
            return true; // Diagonal win from top-right to bottom-left
        }
    }

    if (boardArray[1][0] !== EMPTY_TOKEN) {
        if (boardArray[1][0] === boardArray[1][1] && boardArray[1][0] === boardArray[1][2]) {
            return true; // Vertical win in the middle column
        }
    }

    if (boardArray[2][0] !== EMPTY_TOKEN) {
        if (boardArray[2][0] === boardArray[2][1] && boardArray[2][0] === boardArray[2][2]) {
            return true; // Vertical win in the right column
        }
    }

    return false; // No win condition detected
}


