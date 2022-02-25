/* Giving inputs to function
  By doing this, we can use values that come form inputs inside of the function.
  We name those inputs. In JS, we don't declare a datatype.
*/
const PRICE = 1.5;
const DIGITS_AFTER = 2;

function getMilk(bottles)
{
  var cost = (bottles * PRICE).toFixed(DIGITS_AFTER);

  console.log("The price for " + bottles + " bottle(s) is $" + cost);
}

// Challenge
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + Math.floor(money / PRICE) + " bottles of milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
