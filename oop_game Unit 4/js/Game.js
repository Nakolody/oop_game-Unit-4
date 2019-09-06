/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const div = document.querySelector('#overlay');
const gameMessage = document.getElementById('game-over-message');
const count = 1;
let image = document.createElement('img');
image.setAttribute('class','picture');
div.appendChild(image);

class Game {
    constructor() {
        this.missed = 0;
        this.phrase = [new Phrase("I find your lack of faith disturbing"),
            new Phrase("Do or Do not There is no try"),
            new Phrase("Never tell me the odds"),
            new Phrase("Its a trap"),
            new Phrase("Theres always a bigger fish"),
        ]
        this.activePhrase = null;
    }
    /**
     * Selects a random phrase from phrases property.
     * @return {Object} Phrase object to be chosen.
     */
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrase.length);
        let selectedPhrase = this.phrase[random];
        return selectedPhrase;
    }
    /**
     * Begins game by selecting a rnadom phrase and displaying it to the user
     */
    startGame() {
        div.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game isn't won
     */
    checkForWin() {
        const availableLetters = this.activePhrase.phrase.split("").filter(space => space !== " ").length;
        const showLetters = document.getElementsByClassName('show').length;
        if (availableLetters === showLetters) {
            return true;
        } else {
            return false;
        }

    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out of life
     */
    removeLife() {
        const heart = document.querySelector("img[src='images/liveHeart.png']");
        heart.src = 'images/lostHeart.png';
        this.missed +=1;
       if(this.missed > 4) {
           this.gameOver();
        }
    }
    /**
     * Displays game over message
     * @param{boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        if (this.checkForWin()) {
            div.style.display = 'block';
            gameMessage.style.display = 'block';
            gameMessage.textContent = 'You won!';
            if (this.activePhrase === this.phrase[0]){
                image.src = 'images/ifindyourlack.jpeg';
            }
            if (this.activePhrase === this.phrase[1]){
                image.src = 'images/doordonot.png';
            }
            if (this.activePhrase === this.phrase[2]){
                image.src = 'images/Nevertellmetheodds.png';
            }
            if (this.activePhrase === this.phrase[3]){
                image.src = 'images/itsatrap.png';
            }
            if (this.activePhrase === this.phrase[4]){
                image.src = 'images/theresalways.png';
            }
            return true;
        }
        if (this.missed >4) {
            div.style.display = 'block';
            gameMessage.style.display = 'block';
            gameMessage.textContent = 'Do you ever feel lost? Please try again!';
            image.src = 'images/lost.jpeg';
            return true
        }
    }
    handleInteractions(interaction) {
        interaction.setAttribute('disabled', true);
        interaction.classList.add('chosen');
        const value = interaction.textContent;
        if (this.activePhrase.checkLetter(value)) {
            this.activePhrase.showMatchedLetter(value);
            if (this.checkForWin()) {
                this.gameOver();
            }
        } else {
            this.removeLife();
        }
        if (this.gameOver()){
            this.resetBoard();
        }
    }
    resetBoard() {
        const hearts = document.querySelectorAll("img[src='images/lostHeart.png']");
        const keys = document.querySelectorAll('.key');
        this.missed = 0;
        //Resets phrase
        document.querySelector('#phrase ul').innerHTML = "";
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
        keys.forEach(key => key.classList.remove('chosen'));
        keys.forEach(key => key.disabled = false);
    }
}