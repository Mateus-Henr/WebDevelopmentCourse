/* Playing sounds with JS
  In order to play a sound using JS, we have to create an "Audio" object, and then call the "play()" method, passing in to the method the name of the file to be played.
  This object is actually an HTML element that has a huge variety of properties/methods that we can use.
*/

const SOUNDS_FOLDER = "sounds/";
const DOT_MP3 = ".mp3";

// My version
document.querySelectorAll(".drum").forEach((elem, idx) => {

  var soundPath = SOUNDS_FOLDER;

  if (idx <= 3)
  {
      soundPath += `tom-${(idx + 1)}` + DOT_MP3;
  }
  else if (idx == 4)
  {
      soundPath += "snare" + DOT_MP3;
  }
  else if (idx == 5)
  {
      soundPath += "crash" + DOT_MP3;
  }
  else
  {
      soundPath += "kick-bass" + DOT_MP3;
  }

  elem.addEventListener("click", () => new Audio(soundPath).play());

});

// Challenge
for (var i = 0; i < document.querySelectorAll("button").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    // "this" gets the current object.
    console.log(this);
    this.style.color = "white";
  }
);
}
