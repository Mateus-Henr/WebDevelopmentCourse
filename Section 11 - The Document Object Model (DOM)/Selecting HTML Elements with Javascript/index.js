/* Selecting elements inside the DOM

  The "getElementsByTagName()" method
  This method goes through the webpage and looks for elements with a specific tag name.
  It returns an array with the elements found with that specific tag name.

  The "getElementsByClassName()" method
  This method does what it name says. As you can see this method is also in the plural, which means that it also has an array as its return.

  The "getElementById()" method
  Similar to the methods shown before, but this get an element based on its ID.
  It's important to remember that IDs must be unique, for that reason this method returns one object.

  The "querySelector()" method
  As seen before, this method only returns one item. But this method uses a selector as its parameter.
  The selector can be an element, a class, or an ID.
  If there's more than one element with the same selector name, then the first will get returned.

  The "querySelectorAll()" method
  This method works the same as its singular version, however this one returns an array with its findings.

  Best methods to use
  The "querySelectors" methods allow more complex queries since it doesn't differenciate tags, classes and IDs.
  Due to this fact, these methods are more often used than the ones described before.
*/

// Getting multiple objects that share the same tag name.
var liObjects = document.getElementsByTagName("li");

liObjects[2].style.color = "blue";
console.log("Size: " + liObjects.length);


// Getting multiple objects that share the same class name.
var buttonObjects = document.getElementsByClassName("btn");

buttonObjects[0].style.backgroundColor = "red";


// Getting an element by its ID
var title = document.getElementById("title");

title.innerHTML = "Good Bye";


// Selecting something by its selector it
var itemTag = document.querySelector("h1");
var btnClass = document.querySelector(".btn");
var itemID = document.querySelector("#title");


// Combining selectors to specify selectors (HTML hierarchy)
var specificLink = document.querySelector("li a");


// Combining selectors to specify selectors (Classes)
var item = document.querySelector("li.item");


// Combining selectors to specify selectors (IDs)
var item = document.querySelector("#list a");


// Getting multiple items from a combination of selectors
var items = document.querySelectorAll("#list .item");

items[2].style.color = "blue";


// Challenge
var desiredLink = document.querySelector("#list .item a");

desiredLink.style.color = "red";
