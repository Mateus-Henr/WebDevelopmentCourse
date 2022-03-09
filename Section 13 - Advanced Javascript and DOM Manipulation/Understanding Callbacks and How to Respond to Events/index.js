const SOUNDS_FOLDER = "sounds/";
const DOT_MP3 = ".mp3";

document.querySelectorAll(".drum").forEach((elem) => {

  var elemLetter = elem.innerHTML;

  elem.addEventListener("click", () => playSound(elemLetter));

});

document.addEventListener("keydown", (e) => playSound(e.key));

/* More on Event Listeners
  When adding an event listener to an HTML object, we have to pass a function as the second argument, because of that, the "addEventListener()" function is an
  Higher Order Function.
  However the function itself, that's passed in, it's a Callback Function. This is due to the fact that it allows us to wait for something to happen.
  And as shown before, we can obtain info about the event that was triggered by passing the event back to the callback function.
  The callback function is called by the object that experienced the action.
*/


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

// How the "addEventListener()" function is like
function anotherAddEventListener(typeOfEvent, callback)
{
  // Detect event code.

  // An event object gets created when the event happens.
  var eventThatHappened =
  {
      // Get info about the event
      eventType: "keydown",
      key: "p",
      durationOfKeyPress: 2
  }

  // Checks if the event is what the user wants.
  if (eventThatHappened.eventType === typeOfEvent)
  {
    // Here is where the function that we passed in is called.
    callback(eventThatHappened);
  }
}

anotherAddEventListener("keydown", function(e)
{
  console.log(e);
});
