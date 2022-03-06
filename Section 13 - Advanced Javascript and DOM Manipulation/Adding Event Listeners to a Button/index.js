// Challenge
// alert("Works!");

/*  Event listener
  They are used to notify the code when the user performs a specific action.
  To add an event listener to an object we use the "addEventListener" method.
  When the event is triggered then a function will be called, this same function is passed as a parameter when setting up the event listener.

  The "addEventListener" method
  As mentioned before, this method associates an event listener to an object.
  It takes two parameters, being the first a case-sensitive String that specifies the type of the event and as the second parameter we have a listener, that's no more than
  a function that will be called when that event gets triggered. When using this function as parameter we do not use parenthesis.
  It's an idea of passing a function as an input so it can be called at a later time.
*/

var btn = document.querySelector("button");

// btn.addEventListener("click", handleClick); // Listening for clicks on the first button.

// The same code with an anonymous function (function that doesn't have a name)
// btn.addEventListener("click", function () {alert("I got clicked!");});

function handleClick()
{
  alert("I got clicked!");
}


// Challenge
document.querySelectorAll(".drum").forEach(elem => elem.addEventListener("click", () => alert("I got clicked!")));
