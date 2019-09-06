/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const letter = this.phrase.split("");
        console.log(letter);
        for (let i = 0; i < letter.length; i += 1) {
            if (letter[i] !== " ") {
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
    checkLetter(letter) {
        if ([...this.phrase].indexOf(letter) !== -1) {
            return true;
        } else {
            return false;
        }
    }
    /**Displays passed letter on screen after a match is found
     * @para (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const list = document.querySelectorAll('li');
            for (let i = 0; i < list.length; i+=1) {
                if (letter === list[i].textContent){
                    list[i].classList.add('show');
                }
            }
    }

}