// To manipulate styles, we can use the ".css", the property name (as a string) and the value to be assigned to that property (also as a string). SETTER
$("h1").css("color", "green");

// If the method has only one argument, then it'll get the information about the property in question. GETTER
console.log($("h1").css("color"));
console.log($("h1").css("fontSize"));

// However as mentioned before, we have to separate CSS from JS. That's why we can manipulate classes as follows:
$("h1").addClass("big-title margin-50"); // This can be used for adding multiple classes by separating them using a space.

// Removing a class
$("h1").removeClass("big-title");

// Checking if an element has a particular class
$("h1").hasClass("margin-50");
