// Possible words to guess
var words = [
    "audi",
    "bmw",
    "cadillac",
    "chevrolet",
    "chrysler",
    "dodge",
    "ferrari",
    "ford",
    "honda",
    "jaguar",
    "jeep",
    "lamborghini",
    "lexus",
    "mazda",
    "mercedes",
    "nissan",
    "porsche",
    "subaru",
    "tesla",
    "toyota",
    "volkswagon",
    "volvo"
]

// Counters
var wins = 0;
var losses = 0;
var gamesPlayed = 0;
var remainingGuesses = 10;

// grabbing html id's
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var gamesPlayedEl = document.getElementById("games-played");
var wordEl = document.getElementById("word");
var incorrectKeysEl = document.getElementById("incorrect");
var remainingGuessesEl = document.getElementById("remaining-guesses");

// Game state Booleans
var isFinished = false;

// Blank arrays
var displayWord = [];
var incorrectKeys = [];

var allowableGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Beginning game state
function gameStart(){
    // Display the score
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    gamesPlayedEl.textContent = gamesPlayed;
    
}
// variable for unguessed letters
var us = "_ ";

//determine index(es) of guessed letters
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
    if (arr[i] === val)
    indexes.push(i);
    return indexes;  //returns 0 length array if nothing is found
}


function gamePlay(){

    // Choose a random word from the words array
    var rndWord = words[Math.floor(Math.random()*words.length)].split("");
    console.log(rndWord);
    
    for (let i = 0; i < rndWord.length; i++) {  
        displayWord[i] = us;        
    }

    // Display Word
    wordEl.textContent = displayWord.join("");
    console.log(displayWord);

    // keypress event to guess letters
    document.onkeyup = function(event) {
        event.key = event.key.toLowerCase()

        // Ensures user inputs a letter
        if (allowableGuesses.includes(event.key)){

            // Ensures user doesn't input duplicate letter
            if (incorrectKeys.includes(event.key)){
                // Does nothing
            } else {

                // array of index positions of selected keys relative to random word
                var letterIndices = getAllIndexes(rndWord, event.key);
                console.log(letterIndices);

                // if guess is in word, letterIndices length will be greater than 0
                if (letterIndices.length > 0) {
                    console.log("correct")

                    // replace elements in displayWord by similar elements in similar index
                    // Here we have 3 things: displayWord, letterIndices, and guessed letter
                    for (let i = 0; i < letterIndices.length; i++) {
                        // update displayWord with event.key in indices equal to letterIndices array 
                        // returning index of array at i index of letterIndicies
                        var position = letterIndices[i];

                        console.log(position);
                        // insert value
                        displayWord[position] = event.key;                          
                    }
                    console.log(displayWord)

                    // Overwrite the underscrores
                    wordEl.textContent = displayWord.join("");
                
                } else {
                    console.log("incorrect")

                    // add guessed letter to incorrect keys array
                    incorrectKeys.push(event.key);
                    console.log("incorrect keys: " + incorrectKeys);

                    remainingGuesses--;

                    remainingGuessesEl.textContent = remainingGuesses;
                    incorrectKeysEl.textContent = incorrectKeys.join(", ");
                }
                
                remainingGuessesEl.textContent = remainingGuesses;
            
                console.log("random word: " + rndWord);
                console.log("display word: " + displayWord);

                // win case
                if(displayWord.includes("_ ")){
                    isFinished = false;
                } else {
                    isFinished = true;
                    wins++;
                    gamesPlayed++;
                    reset();
                }
            
                // loss case
                if (remainingGuesses === 0) {
                    losses++;
                    gamesPlayed++;
                    reset();
                }    
            }
        }
    }
}

function reset(){
    console.log("Begin Game")
    remainingGuesses = 10;
    displayWord = [];
    incorrectKeys = [];
    rndWord = [];
    isFinished = false;
    gameStart();
    gamePlay();
}

reset();