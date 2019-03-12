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
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    gamesPlayedEl.textContent = gamesPlayed;
     
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
        var letterIndexes = getAllIndexes(rndWord, event.key);

        // if guess is in word, letterIndexes length will be greater than 0
        if (letterIndexes.length > 0) {
           wins = wins++

       } else {

       };
       
    
    
    
    
        remainingGuessesEl.textContent = remainingGuesses;
    }
}

gameStart();
gameplay();