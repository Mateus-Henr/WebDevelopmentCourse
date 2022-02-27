const UM = 1;
const TWO = 2;
const THREE = 3;
const FIVE = 5;
const ZERO = 0;
const FIZZ = "Fizz";
const BUZZ = "Buzz";

var output = [];

// Using the "push()" function for adding items into an array, the item is always tagged on at the end of the array.
output.push(UM);
output.push(TWO);

// The "pop()" function is used for removing the last element of an array.

// Challenge
function fizzBuzz()
{
  var currNumber = output.length + UM;

  // Complexity = 1 - A "waterfall" of conditions
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
