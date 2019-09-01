/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
     this.missed = 0;
     this.phrase = [new Phrase("Somebody has to save our skins"),
                    new Phrase("So this is how liberty dies with thunderous applause"),
                    new Phrase("Never tell me the odds"),
                    new Phrase("Its a trap"),
                    new Phrase("In my experience there is no such thing as luck"),
                    new Phrase("I find your lack of faith disturbing")]
     this.activePhrase = null;
     }
     /**
      * Selects a random phrase from phrases property.
      * @return {Object} Phrase object to be chosen.
      */
     getRandomPhrase(){
        let random = Math.floor(Math.random()* this.phrase.length);
        let selectedPhrase = this.phrase[random];
        return selectedPhrase;
     }
     /**
      * Begins game by selecting a rnadom phrase and displaying it to the user
      */
     startGame () {
         const div = document.querySelector('#overlay');
         div.style.display = 'none';
         this.activePhrase = this.getRandomPhrase();
         this.activePhrase.addPhraseToDisplay();

     }
     /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game isn't won
      */
     checkForWin(){
        const li = document.querySelectorAll('li')
        for(let i = 0; i<= li.length; i += 1){
            if(li[i].classList('show')){
                return true;
            } else {
                return false;
                break;
            }
        }
     }
     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out of life
      */
     removeLife() {
         const tries = document.querySelectorAll("images/liveHeart.png");

         if(!this.activePhrase.checkLetter()){
             tries[0].src = 'lostHeart.png';
            if(tries.length = 0){
                return true;
            }
         }

     }
     /**
      * Displays game over message
      * @param{boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon){
        if(this.checkForWin){
            return true;
        }
        if(this.removeLife()){
            return false;
        }
     }
     handleInteraction(){

     }

 }