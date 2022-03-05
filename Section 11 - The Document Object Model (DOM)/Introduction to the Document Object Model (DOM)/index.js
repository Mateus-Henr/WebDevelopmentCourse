/* Document Object Model (DOM)
  Through DOM modifications we can set event handlers that will make possible modifications on the fly.
  When dealing with HTML code, we should look at it as if it were a tree with multiple brances (children).
  It's important to remember that the "document" is the topmost branch. In other words, everything else comes from it.

  Navigating through the "document"
  JS has properties such as "document.firstElementChild;" that helps us to get information of the different "nodes" in the tree.
  And just like everything else in programming, we can chain properties together to be even more specific of what node we want.

  Manipulating content of HTML elements
  In the current version of our HTML code, if we type the following comamnd we will get the h1 in the body tag.
    document.firstElementChild.lastElementChild.firstElementChild;
  So from there we can use another JS property to manipulate the content of the h1. Example below.
*/

// Manipulating heading
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good Bye";

heading.style.color = "red"; // It's also possible to change CSS properties using JS.

// The "querySelector()" method looks for matches in the entire document. It looks for an object with a specific selector.
document.querySelector("input").click(); // Simulates a mouse click.

/*  Object inside the DOM
  By object we mean each node of the tree.
  Each object has methods and properties.

  Methods x Properties
  Properties describe a "characteristic" of the object, while methods perform action that the object can do.
  Looking at this object as if it were a car, a car can have a color (property), and it can accelerate (method).

  Getter and Setter
  When we use "object.property" we have a getter method. We have a setter method when we assign a value to that property ("object.property = value ").

  Method x Function
  A method is an action that an OBJECT can do, differently from functions.
*/

// Challenge
var node = document.querySelector("ul").lastElementChild;

node.innerHTML = "Mateus";
