/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
    this.phrase = phrase.toLowerCase();
     }

     /**
      * Display phrase on game board
      */
     addPhraseToDisplay () {
        const ul = document.getElementById('phrase');
        const letter = this.phrase.split("");
        console.log(letter);
        for(let i = 0; i < letter.length; i += 1){

            if(letter[i] !== " "){
                const li = document.createElement('li');
                li.textContent = letter[i];
                li.classList.add('letter');
                ul.appendChild(li);
            } else {
                const li = document.createElement('li');
                li.classList.add('space');
                ul.appendChild(li);
            }
        }
     }
     /**
      * Checks if passed letter in phrase
      * @param (string) letter - Letter to check
      */
     checkLetter(letter){
         console.log('Not working');
        //  const array = this.phrase.split("");
        // console.log('Help');
        // for(let i = 0; i<= array.length; i +=1){
        //     if(array[i].textContent == letter ){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    }
     /**Displays passed letter on screen after a match is found
      * @para (string) letter - Letter to display
      */
     showMatchedLetter(letter) {
         for(let i = 0; i<= this.phrase.length; i +=1){
            const phraseSplit = this.phrase.addPhraseToDisplay();
            if(phraseSplit[i].textContent === letter.content){
                phraseSplit.classList.add('show');
            }
         }

     }

 }