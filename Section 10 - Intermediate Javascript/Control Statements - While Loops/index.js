/*  While loops
  Used for repeating instructions until a statatement becomes false.
  Needs to be careful used since it could imply in a situation where it executes infinitely.
  Used for states.
*/

var i = 1;

while (i < 2) // This expression is evaluated everytime a cycle occurs.
{
  console.log(i);
  i++; // Making "i" 2.
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
  var currNumber = output.length + ONE;

  // It only gets out of the loop when it gets to 101.
  while (currNumber <= ONE_HUNDRED)
  {
    currNumber = output.length + ONE;

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

}



// Challenge

function beer()
{
  var beers = ONE_HUNDRED;

  while(beers >= ZERO)
  {
    if (beers > ZERO)
    {
      console.log(beers + " bottles of beer on the wall, " + beers + " bottles of beer.");
      beers--;

      if (beers > ZERO)
      {
        console.log("Take one down and pass it around, " + beers + " bottles of beer on the wall.");
      }
      else
      {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
      }
    }
    else
    {
      console.log("No more bottles of beer on the wall, no more bottles of beer.");
      console.log("Go to the store and buy some more, 99 of beer on the wall.");
      beers--;
    }
  }
}
