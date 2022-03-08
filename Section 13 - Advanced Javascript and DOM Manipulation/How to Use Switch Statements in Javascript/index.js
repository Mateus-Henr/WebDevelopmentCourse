/*  Switch statement
  In this case, a "switch" statement would be a better fit since we have a lot of conditions to be implemented.
*/


const SOUNDS_FOLDER = "sounds/";
const DOT_MP3 = ".mp3";

document.querySelectorAll(".drum").forEach((elem, idx) => {

  var soundPath = SOUNDS_FOLDER;
  var elemLetter = elem.innerHTML;

  switch(elemLetter)
  {
    case "w":
    case "a":
    case "s":
    case "d":
        soundPath += "tom-" + (idx + 1) + DOT_MP3;
        break;
    case "j":
        soundPath += "snare" + DOT_MP3;
        break;
    case "k":
        soundPath += "crash" + DOT_MP3;
        break;
    case "m":
        soundPath += "kick-bass" + DOT_MP3;
        break;
    default: // Should always be here.
      console.log("Error");
      return;
    }

  elem.addEventListener("click", () => new Audio(soundPath).play());

});
