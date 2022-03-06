/* Manipulating objects
  In JS, by default, camel case is used in its methods. And the same thing applies to CSS properties that we may want to alter.
  When setting values to these properties they must be Strings.
*/

var titleStyle = document.querySelector("h1").style;

titleStyle.fontSize = "10rem";
titleStyle.padding = "30%";
titleStyle.visibility = "hidden";


// Mini Challenge
var btnStyle = document.querySelector("button").style;

btnStyle.backgroundColor = "yellow";
