// Possible words to guess
var words = [
    a1,
    b12,
    c123,
    d1234,
    e12345,
    f123456,
]

// Counters
var wins = 0;
var losses = 0;
var gamesPlayed = 0;
var remainingGuesses = 10;

// Blank arrays
var word = [];
var incorrectKeys = [];

// grabbing html id's
var winsEl = document.getElementById("wins");
var lossesEl = document.getElementById("losses");
var gamesPlayedEl = document.getElementById("games-played");
var wordEl = document.getElementById("word");
var incorrectKeysEl = document.getElementById("incorrect");
var remainingGuessesEl = document.getElementById("remaining-guesses");

// keypress event to initialize game
document.onkeyup = function(event) {






    // Display the score
    winsEl.textContent = wins;
    lossesEl.textContent = losses;
    gamesPlayedEl.textContent = gamesPlayed;
    remainingGuessesEl.textContent = remainingGuesses;
}