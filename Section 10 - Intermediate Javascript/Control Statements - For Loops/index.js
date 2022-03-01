/* For loops
  The only difference between a for loop and a while loop is that a for loop executes a specific number of time that's passed to it beforehand.
  Used for iteration.
  Syntatic sugar - Code that makes things easier to use.
*/

for (var i = 1; i < 2; i++) // Tests the expression.
{
  console.log(i);
  // i++;
}


const ONE = 1;
const TWO = 2;
const THREE = 3;
const FIVE = 5;
const ZERO = 0;
const ONE_HUNDRED = 100;
const FIZZ = "Fizz";
const BUZZ = "Buzz";

var output = [];

function fizzBuzz()
{
  for (var currNumber = output.length + ONE; currNumber <= ONE_HUNDRED; currNumber++)
  {
    if ((currNumber % THREE) === ZERO && (currNumber % FIVE) === ZERO)
    {
      output.push(FIZZ + BUZZ);
    }
    else if ((currNumber % THREE) === ZERO)
    {
      output.push(FIZZ);
    }
    else if ((currNumber % FIVE) === ZERO)
    {
      output.push(BUZZ);
    }
    else
    {
      output.push(currNumber);
    }

    console.log(output);
  }

}
