/*  Arrays
  They are used for storing multiple pieces of data, each one, separated by a comma.
  It could be considered as a container of related data.
  Elements can be accessed by their position inside of this collection.
  They are 0 based.
  Similarly to strings, we can use the "length" property to get the size of an array.
*/

var eggs = ["White egg", "Pink egg"];

console.log("First egg: " + eggs[0]);
console.log("Number of eggs: " + eggs.length);


var guestList = ["Angela", "Jack", "James", "Lara", "Jason"];

console.log(guestList); // This works in JS
console.log("First guest: " + guestList[0]);

// The "includes()" function can be used to find out if an elements is already inside of the array. It has a boolean as the output.

// Mini challenge
var guest = prompt("Guest List - Type your name: ");

if (guestList.includes(guest))
{
  console.log("Welcome!");
}
else
{
  console.log("Sorry, maybe next time!");
}
