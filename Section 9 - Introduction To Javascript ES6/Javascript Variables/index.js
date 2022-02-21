// A "prompt" is similar to an alert, with the difference that now the user can input something into it. The function returns the data inputted by the user.
prompt("What is your name?");

/* Variables
  Used for committing data to memory for posterior usage or access.
  Also, can be modified.
*/

var myName = "Mateus";

/*  Syntax (statement above)
  "var": a keyword that indicates the definition of a variable. "Creates the container".
  "myName": can be considered as the container name, where the data will be stored in.
  "Mateus": the data itself, the value.
*/

// Little challenge
alert(myName);

// Saving it to a variable.
myName = prompt("What is your name?");

alert("My name: " + myName);
