/*  Conditionals
  These types of expressions are used for making a choice by evaluating a expression.
  Also known as control flow since we are controlling the flow of execution of the program.
  EX:
  if (track === "clear")
  {
    goStraight();
  }
  else
  {
    turnRight();
  }
*/


const MAX_NUMBER = 100; // Not including
const STARTING_NUMBER = 1;
const ABOVE_AVERAGE = 70;

prompt("Type the name of the first person: ");
prompt("Type the name of the first second: ");

var loveScore = Math.floor(Math.random() * MAX_NUMBER) + STARTING_NUMBER;

if (loveScore > ABOVE_AVERAGE) // Testing for a range of values
{
  alert("Love score: " + loveScore + "%." + "You love each other like Kanye loves Kanye.");
}
else
{
  alert("Love score: " + loveScore + "%");
}
