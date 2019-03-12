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
var remainingGuesses = 15;

// grabbing html id's
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var gamesPlayedEl = document.getElementById("games-played");
var wordEl = document.getElementById("word");
var incorrectKeysEl = document.getElementById("incorrect");
var remainingGuessesEl = document.getElementById("remaining-guesses");

// Game state Booleans
var isStarted = false;
var isFinished = false;

// Blank arrays
var displayWord = [];
var incorrectKeys = [];

// Choose a random word from the words array
var rndWord = words[Math.floor(Math.random()*words.length)].split("");
console.log(rndWord);

// Beginning game state
function gameStart(){
    // Display the score
    // winsEl.textContent = wins;
    // lossesEl.textContent = losses;
    // gamesPlayedEl.textContent = gamesPlayed;
     
    // variable for unguessed letters
    var us = " ___ ";

    // Display number of underscores cooresponding with length of random word
    for (let i = 0; i < rndWord.length; i++) {  
        displayWord[i] = us;        
    }

    // Display Word
    wordEl.textContent = displayWord;
    console.log(displayWord);
}

//determine index(es) of guessed letters
function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;  //returns 0 length array if nothing is found
}

function gameplay(){
    // keypress event to guess letters
    document.onkeyup = function(event) {

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
            wordEl.textContent = displayWord;
        
        } else {
            console.log("incorrect")
        }
       
    
    
    
    
        remainingGuessesEl.textContent = remainingGuesses;
    }
}

gameStart();
gameplay();