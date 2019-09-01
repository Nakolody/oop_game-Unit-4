/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const newGame = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.key');

console.log(keys);


// Event handler that starts a new Game
newGame.addEventListener('click',(e) => {
    const game = new Game;
    game.startGame();
});

keys.forEach(key => { 
    key.addEventListener('click',(e) => {
    let selected = event.target;
    })
});



