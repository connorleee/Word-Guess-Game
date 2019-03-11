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

// keypress event to guess letters
document.onkeyup = function(event) {
    // Blank arrays
    var word = [];
    var incorrectKeys = [];
    
    // variable for unguessed letters
    var us = " ___ ";

    // Choose a random word from the words array
    var rndWord = words[Math.floor(Math.random()*words.length)];
    console.log(rndWord);
    var wordLength = rndWord.length;
    console.log(wordLength);

    // Display number of underscores cooresponding with length of random word
   for (let i = 0; i < wordLength; i++) {  
        word[i] = us;
    }
    console.log(word);
    
   




    // Display the score
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    gamesPlayedEl.textContent = gamesPlayed;
    remainingGuessesEl.textContent = remainingGuesses;
    wordEl.textContent = word;
}