let DOM = {
    updateGuessedWord(guessedWord) {
        document.querySelector("#puzzle").innerHTML = "";

        for (nextLetter of guessedWord) {
            // tenemos que crear tantos <span>*</span> como letras hay en el string movieGuess
            // Cuando encontramos un espacio en realidad hay que crear un <span></span>
            // Para todos los span hay que hacer un appendChild en id="puzzle".
            const span = document.createElement("span");
            span.textContent = nextLetter;
            document.querySelector("#puzzle").appendChild(span);
        }

        //console.log(guessedWord);
    },
    addGuessedLetter(letter, isCorrect) {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.color = (isCorrect) ? 'green' : 'red';
        document.querySelector("#letters-tried").appendChild(span);

    },

    updateAttempts(attempts) {
        document.querySelector("#guesses span").textContent = attempts;
    },

    showLooserMessage() {
        document.querySelector("#guesses").innerHTML = `
        <span style="color:red;width: auto;">¡Has perdido! </span>`;
    },

    showWinnerMessage() {
        document.querySelector("#guesses").innerHTML = `
        <span style="color:green;width: auto;">¡Has ganado! </span>`;
    }
};