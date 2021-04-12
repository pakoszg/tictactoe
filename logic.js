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
    const gameBoard = ["X", "O", "X", "O"];
    const allDivs = document.querySelectorAll('.box');
    const showDivs = () => {
        console.log(allDivs);
    }
    const populateDisplay = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            allDivs[i].innerText = gameBoard[i];
        }
    }
    return {
        gameBoard,
        showDivs,
        populateDisplay
    }

})();

const displayController = (() => {


})();

const player1 = () => {
    score = 0;

};

