// Challenge 1
function main()
{
  moveToTheOtherSide();
}

function moveToTheOtherSide()
{
  moveFourSpaces();
  turnLeft();
  moveFourSpaces();
}

function moveFourSpaces()
{
  move();
  move();
  move();
  move();
}


// Challenge 2
function main2()
{
  putDiagonalBeepers();
}

function putDiagonalBeepers()
{
  putBeeper();
  performMovementsAndPutBeeper();
  performMovementsAndPutBeeper();
  performMovementsAndPutBeeper();
  performMovementsAndPutBeeper();
}

function performMovementsAndPutBeeper()
{
  moveToTheNextPlace();
  putBeeper();
  turnFromNorthToEast();
}

function moveToTheNextPlace()
{
  move();
  turnLeft();
  move();
}

function turnFromNorthToEast()
{
  turnLeft();
  turnLeft();
  turnLeft();
}


// Challenge 3
function main()
{
  buildPatternInTwoLines();
  buildPatternInTwoLines();
  putThreeBeepersInALine();
}

function buildPatternInTwoLines()
{
  putThreeBeepersInALine();
  moveToTheNextLineFromTheRight();
  putTwoBeepersInALine();
  moveToTheNextLineFromTheLeft();
}

function moveToTheNextLineFromTheLeft()
{
    turnRight();
    move();
    turnRight();
}

function moveToTheNextLineFromTheRight()
{
  turnLeft();
  move();
  turnLeft();
}

function putTwoBeepersInALine()
{
  move();
  putBeeper();
  moveAndPutBeeper();
  move();
}

function putThreeBeepersInALine()
{
  putBeeper();
  moveAndPutBeeper();
  moveAndPutBeeper();
}

function moveAndPutBeeper()
{
  move();
  move();
  putBeeper();
}
