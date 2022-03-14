const MAX_OPTIONS = 4;
const ZERO = 0;
const ONE = 1;
const MAX_LEVELS = 10;
const NEXT_LEVEL_DELAY = 1000;
const CLICK_DELAY = 100;
const SOUNDS_FOLDER = "sounds/";

var values =
{
  0: "green",
  1: "red",
  2: "yellow",
  3: "blue"
};

var sequence = [];
var userInputs = [];
var gameOn = false;
var userTime = false;


$(document).keypress(() =>
{
  if (!gameOn)
  {
    nextLevel(ONE);
    gameOn = true;
  }
});


$(".btn").click(handleClick);


function handleClick(e)
{
  if (!gameOn || !userTime)
  {
    return;
  }

  pressButtonAnimation(e.target.id);

  for (let idx in values)
  {
    if (values[idx] === e.target.id)
    {
      userInputs.push(parseInt(idx));
      break;
    }
  }

  console.log(userInputs);
  console.log(sequence);

  let currElement = userInputs.length - ONE;
  let userInputSize = userInputs.length;
  let sequenceSize = sequence.length;

  if (userInputs[currElement] === sequence[currElement])
  {
    new Audio(SOUNDS_FOLDER + e.target.id + ".mp3").play();

    if (userInputSize === sequenceSize)
    {
      nextLevel(sequenceSize + ONE);
    }
  }
  else
  {
    new Audio(SOUNDS_FOLDER + "wrong.mp3").play();
    gameOver();
  }
}


function nextLevel(levelNumber)
{
  userTime = false;

  $("#level-title").text("Level " + levelNumber);

  cleanVariables();
  console.log("Clean");

  for (let i = ZERO; i < levelNumber; i++)
  {
    sequence.push(getNumber());
  }

  setTimeout(() => displaySequence(), NEXT_LEVEL_DELAY);
  setTimeout(() => userTime = true, levelNumber * NEXT_LEVEL_DELAY);
}


function getNumber()
{
  return Math.floor((Math.random() * MAX_OPTIONS));
}


function displaySequence()
{
  for (let i = ZERO; i < sequence.length; i++)
  {
    setTimeout(() =>
    {
      pressButtonAnimation(values[sequence[i]]);
      new Audio(SOUNDS_FOLDER + values[sequence[i]] + ".mp3").play();
    }, i * NEXT_LEVEL_DELAY);
  }
}


function pressButtonAnimation(id)
{
  $("#" + id).addClass("pressed");
  setTimeout(() => $("#" + id).removeClass("pressed"), CLICK_DELAY);
}


function gameOver()
{
  $("#level-title").text("Game Over, Press Any Key To Restart");

  $("body").addClass("game-over");
  setTimeout(() => $("body").removeClass("game-over"), NEXT_LEVEL_DELAY);

  cleanVariables();
  gameOn = false;
}


function cleanVariables()
{
  sequence = [];
  userInputs = [];
}
