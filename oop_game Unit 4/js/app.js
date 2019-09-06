/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

const newGame = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.key');
const qwerty = document.querySelector('.qwerty');

// Event handler that starts a new Game
newGame.addEventListener('click', (e) => {
    game = new Game;
    game.startGame();
});
// Adds a click handler for the game interactions function.
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        let click = event.target;
        game.handleInteractions(click);
    })
});
// Adds keyboard listeners and sends the element to the game interactions function
window.addEventListener('keydown', (e)=>{
    keys.forEach(key => {
        if(event.key === key.textContent){
            for(let i = 0; i< keys.length; i+=1){
                if(keys[i].textContent === event.key){
                    let press = keys[i];
                    game.handleInteractions(press);
                }
            }
        }
    })
});