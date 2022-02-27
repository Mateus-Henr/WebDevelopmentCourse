/*  Random Number Generation
  Generates a 16 decimal places number (floatin-point number).
  Range: 0 - 0.9999999999999999.
*/

// Generating a number for a dice roll (1 - 6)
var n = Math.random(); // 0.3645454
n = n * 6; // 2.18 (6 in this scenario is not inclusive)
n = Math.floor(n) + 1; // 2 (Adding one to get the desired range)
console.log(n);

// Love calculator challenge
const MAX_NUMBER = 100; // Not including
const STARTING_NUMBER = 1;

prompt("Type the name of the first person: ");
prompt("Type the name of the first second: ");
alert("Love score: " + (Math.floor(Math.random() * MAX_NUMBER) + STARTING_NUMBER) + "%");
