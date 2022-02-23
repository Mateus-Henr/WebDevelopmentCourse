// Changing cases in strings (toUpperCase() and toLowerCase)
var name = "Mateus";

alert(name.toUpperCase()); // IT DOESN'T MODIFY THE STRING.

name = name.toUpperCase(); // Changing the variable.

alert(name);


// Challege
var userName = prompt("Enter your name: ");

alert("Hello, " + userName.slice(0, 1).toUpperCase() + userName.slice(1, userName.length).toLowerCase());
