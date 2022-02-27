/*  AND (&&)
  Compares if both expressions are true.

   OR (||)
  Compares if at least one expressions is true.

   NOT (!)
  Returns the opposite.
*/


const MAX_NUMBER = 100; // Not including
const STARTING_NUMBER = 1;
const ABOVE_AVERAGE = 70;
const NORMAL = 30;

prompt("Type the name of the first person: ");
prompt("Type the name of the first second: ");

var loveScore = Math.floor(Math.random() * MAX_NUMBER) + STARTING_NUMBER;

if (loveScore > ABOVE_AVERAGE) // Testing for a range of values
{
  alert("Love score: " + loveScore + "%. You love each other like Kanye loves Kanye.");
}
else if (loveScore > NORMAL && loveScore <= ABOVE_AVERAGE)
{
  alert("Love score: " + loveScore + "%");
}
else if (loveScore <= NORMAL)
{
  alert("Love score: " + loveScore + "%. You go together like oil and water.");
}
else
{
  alert("Love score: " + loveScore + "%");
}
