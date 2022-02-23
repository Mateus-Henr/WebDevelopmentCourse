// The "slice" function. It does what its name implies. It takes from one position up to another position but not including it.
var name = "Mateus";

console.log(name.slice(0, 1));

// Mini challege
const CHAR_MAX = 140;
const ZERO = 0;

var tweet = prompt("Enter your tweet: ");

alert(tweet.slice(ZERO, CHAR_MAX));
