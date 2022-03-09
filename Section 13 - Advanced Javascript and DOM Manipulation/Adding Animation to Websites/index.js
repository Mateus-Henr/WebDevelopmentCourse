const SOUNDS_FOLDER = "sounds/";
const DOT_MP3 = ".mp3";
const DOT = ".";
const TIMEOUT_ANIMATION_TIME = 150;

document.querySelectorAll(".drum").forEach((elem) => {

  var elemLetter = elem.innerHTML;

  elem.addEventListener("click", () => playSound(elemLetter));

});

document.addEventListener("keydown", (e) => playSound(e.key));


function playSound(currKey)
{
  var soundPath = SOUNDS_FOLDER;

  switch(currKey)
  {
    case "w":
      soundPath += "tom-1";
      break;
    case "a":
      soundPath += "tom-2";
      break;
    case "s":
      soundPath += "tom-3";
      break;
    case "d":
        soundPath += "tom-4";
        break;
    case "j":
        soundPath += "snare";
        break;
    case "k":
        soundPath += "crash";
        break;
    case "l":
        soundPath += "kick-bass";
        break;
    default:
      break;
    }

    soundPath += DOT_MP3;

    new Audio(soundPath).play();
    buttonAnimation(currKey);
}


// Challenge
function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector(DOT + currentKey);

    activeButton.classList.add("pressed");

    // JS Timeout function
    setTimeout(() =>
    {
      activeButton.classList.remove("pressed");
    }, TIMEOUT_ANIMATION_TIME);
}
