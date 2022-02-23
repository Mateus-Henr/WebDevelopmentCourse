// The "length" property is used to get the number of characters in a string
var name = "Mateus";

console.log(name.length);

// Mini challenge
const CHAR_MAX = 280;

var userString = prompt("Enter your string: ");
var stringLength = userString.length;
var missingNumberChars = CHAR_MAX - stringLength;

console.log("You have written " + stringLength + " characters, you have " + missingNumberChars + " characters left.");
