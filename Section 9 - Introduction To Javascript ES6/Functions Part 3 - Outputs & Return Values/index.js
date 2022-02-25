/* Giving output from a function
  The keyword "return" is used for this action.
*/
const PRICE = 1.5;

function getMilk(money, costPerBottle)
{
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle); // The change
}

function calcBottles(startingMoney, costPerBottle)
{
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle)
{
  var change = startingAmount % costPerBottle;

  return change;
}

// Saving output of the function
var change = getMilk(4, PRICE);

console.log(change);
