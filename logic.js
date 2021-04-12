//   You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
// Your players are also going to be stored in objects… and you’re probably going to want an object to control
// the flow of the game itself.
// Your main goal here is to have as little global code as possible. 
//Try tucking everything away inside of a module or factory. 
// Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), create them with factories.
// Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage 
// (for now you can just manually fill in the array with "X"s and "O"s)

const Board = (() => {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];
    const allDivs = document.querySelectorAll('.box');
    let round = 0;


    const render = () => {
        for (let i = 0; i < gameBoard.length; i++) {  
            gameBoard.splice([i], 1, allDivs[i].innerText);
            }
        }
    
    document.addEventListener('click', (e) => {
            if (e.target.className === "box") {
                roundCount();
                populateDisplay(e);
                render();
            }
        });

    const populateDisplay = (e) => {
        return e.target.innerText = "X";
    }
    
    const roundCount = (e) => {
        round++;
        console.log(round);
        }
    
    return {
        gameBoard,
        roundCount
    }

})();

const displayController = (() => {
    

})();

const player1 = () => {
    score = 0;
};

const player2 = () => {
    score = 0;
};

