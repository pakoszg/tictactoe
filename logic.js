//   You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
// Your players are also going to be stored in objects… and you’re probably going to want an object to control
// the flow of the game itself.
// Your main goal here is to have as little global code as possible. 
//Try tucking everything away inside of a module or factory. 
// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.
// Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage 
// (for now you can just manually fill in the array with "X"s and "O"s)

const game = (() => {
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    const allDivs = document.querySelectorAll('.box');
    let round = 0;
    
    document.addEventListener('click', (e) => {
            if (e.target.className === "box") {
                roundCount();
                populateDisplay(e);
                render();
                checkWinner();
            }
            else if (e.target.id === "restartButton") {
                restartGame(e);
                alert('restart!')
            }
        });

    const render = () => {
        for (let i = 0; i < gameBoard.length; i++) {  
            gameBoard.splice([i], 1, allDivs[i].innerText);
            }
        }

    const populateDisplay = (e) => {
        if (round % 2 === 0 && e.target.innerText === "") {
            return e.target.innerText = "O";
        } else if (round % 2 !== 0 && e.target.innerText === "") {
            return e.target.innerText = "X";
            }
        }
    
    const roundCount = (e) => {
        round++;  
        }
    
    const checkWinner = () => {
        if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
            alert("Player one won!");
        }
        else if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O"){
            alert("Player two won!");
        }
        else if (round === 9) {
            alert("It's a tie!")
        } 
        else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X"){
            alert("Player X won!");
        }
        else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O"){
            alert("Player 0 won!");
        }
        else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X"){
            alert("Player X won!");
        }
        else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O"){
            alert("Player 0 won!");
        }
        else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X"){
            alert("Player X won!");
        }
        else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O"){
            alert("Player 0 won!");
        }
        else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O"){
            alert("Player 0 won!");
        }
        else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X"){
            alert("Player X won!");
        }
        else if (gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X"){
            alert("Player X won!");
        }
        else if (gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O"){
            alert("Player 0 won!");
        }
        else if (gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O"){
            alert("Player 0 won!");
        } 
        else if (gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X"){
            alert("Player X won!");
        }
        else if (gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O"){
            alert("Player 0 won!");
        } 
        else if (gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X"){
            alert("Player X won!");
        }  
    }
    
    const restartGame = (e) => {
        round = 0;
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        for (let i = 0; i < gameBoard.length; i++) {
                allDivs[i].innerText = "";
            }
        }
})();

const displayController = (() => {
    const getFirstPlayerName = () => {
        const playerOneName = prompt('Please enter your name');
        const playerOneDiv = document.querySelector('#player-one');
        playerOneDiv.innerText = playerOneName;
    }
    const getSecondPlayerName = () => {
        const playerTwoName = prompt('Please enter player two name');
        const playerTwoDiv = document.querySelector('#player-two');
        playerTwoDiv.innerText = playerTwoName;
    }

document.addEventListener('click', (e) => {
    if (e.target.id === "startButton") {
        getFirstPlayerName();
        getSecondPlayerName();
    }

})
    
})();

const player1 = () => {
    
};

const player2 = () => {
};

