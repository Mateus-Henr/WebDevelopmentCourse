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

/*  Methods
  As said previously, the term "method" is a function that is associated to an object.
  Just like we've seen when we were using the "Audio" object, we can create methods for our own methods.
  We attribute the function to a parameter when defining the object. But when we call that parameter, we call it as if it were a function, therefore we use parenthesis.
*/

var bellBoy1 =
{
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["English", "German"],
  moveSuitcase: function()
  {
    alert("May I take your suitcase?");
    // pickUpSuitcase();
    // move();
  }
}

bellBoy1.moveSuitcase();

// Constructor version
function BellBoy(name, age, hasWorkPermit, languages)
{
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages; // We can use this in JS.
  this.moveSuitcase = function() // When defining a function like this, we don't assign a parameter to it.
  {
    alert("May I take your suitcase?");
    // pickUpSuitcase();
    // move();
  }
}

// Challenge
function HouseKeeper(name, age, yearOfExperience, cleaningRepertoire, email)
{
  this.name = name;
  this.age = age;
  this.yearOfExperience = yearOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.email = email;
  this.clean = function()
  {
    alert("Cleaning in progress...");
  }
}

var houseKeeper1 = new HouseKeeper("James", 40, 14, ["kitchen"], "jams@gmail.com");

houseKeeper1.clean();
