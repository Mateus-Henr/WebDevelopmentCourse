const SOUNDS_FOLDER = "sounds/";
const DOT_MP3 = ".mp3";

document.querySelectorAll(".drum").forEach((elem) => {

  var elemLetter = elem.innerHTML;

  elem.addEventListener("click", () => playSound(elemLetter));

});

/* How do we execute code when a key is pressed?
  This is very similar to when we created listeners for clicks. But now, instead of listening for "click", we will be listening for "keydown".
  HOWEVER instead of adding this event listener to the keyboard, we assign it to the "document".
*/

/*  Event listeners
  When adding an event listener to an object, we can also pass in a parameter, so then we can get information about the event in question.
*/

document.addEventListener("keydown", (e) => playSound(e.key));


function playSound(elemLetter)
{
  var soundPath = SOUNDS_FOLDER;

  switch(elemLetter)
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
}
