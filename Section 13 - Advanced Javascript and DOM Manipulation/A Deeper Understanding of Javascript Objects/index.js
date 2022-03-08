const SOUNDS_FOLDER = "sounds/";
const DOT_MP3 = ".mp3";

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


/*  JS Objects
  By creating an object we can group together properties, so the code gets easiear to maintain and more readable.
  It's a way of associating a variable to another varaible.
*/
var bellBoy1 =
{
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  email: "timmy@gmail.com"
}

var houseKeeper1 =
{
  name: "Leefa",
  age: 25,
  yearOfExperience: 15,
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
  email: "angela@gmail.com"
}


// A "factory" that produces bell boys. This is called a contruction function. FIRST LETTER MUST BE CAPITALIZED. The same thing as a contructor in Java.
function BellBoy(name, age, hasWorkPermit, email)
{
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.email = email;
}


// Creating an object from the factory (Initialising an object)
var bellBoy2 = new BellBoy("Timmy", 19, true, "timmy@gmail.com");

console.log(bellBoy);


// Challenge
function HouseKeeper(name, age, yearOfExperience, cleaningRepertoire, email)
{
  this.name = name;
  this.age = age;
  this.yearOfExperience = yearOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.email = email;
}

var houserKeeper2 = new HouseKeeper("Leo", 30, 10, ["bathroom", "bedroom"], "leo@gmail.com");
