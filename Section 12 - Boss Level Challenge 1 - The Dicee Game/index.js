const ZERO = 0;
const ONE = 1;
const RANGE = 6;
const DEFAULT_IMG_PATH = "images/dice";
const DOT_PNG = ".png";
const PLAYER1_WINS = "🚩 Player 1 wins!";
const PLAYER2_WINS = "Player 2 wins! 🚩";
const DRAW = "Draw!";

// Throwing the dicee
var p1Dicee = throwDicee();
var p2Dicee = throwDicee();

// Showing the dicee on the screen
var playersImgList = document.querySelectorAll(".dice img");

playersImgList[ZERO].setAttribute("src", getImgPath(p1Dicee));
playersImgList[ONE].setAttribute("src", getImgPath(p2Dicee));

// Changing the heading
var h1Elem = document.querySelector("h1");

h1Elem.textContent = getResult(p1Dicee, p2Dicee);



// Functions used
function throwDicee()
{
  return Math.floor(Math.random() * RANGE) + ONE;
}

function getImgPath(number)
{
  return (DEFAULT_IMG_PATH + number + DOT_PNG);
}

function getResult(p1Dicee, p2Dicee)
{
  var msg = "";

  if (p1Dicee > p2Dicee)
  {
    msg = PLAYER1_WINS;
  }
  else if (p1Dicee < p2Dicee)
  {
    msg = PLAYER2_WINS;
  }
  else
  {
    msg = DRAW;
  }

  return msg;
}
