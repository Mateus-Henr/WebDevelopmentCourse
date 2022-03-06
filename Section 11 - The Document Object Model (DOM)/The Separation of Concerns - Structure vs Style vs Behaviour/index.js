/* Structure of a website
  HTML - Content
  CSS - Style
  JS - Behaviour

  It's not a good practise to change styles using JS since it would break the structure shown above.

  The "classList" property
  This property stores the names of the classes being used by the element in question.

  The "add()" method
  This method is used for adding classes to the current class list.

  The "remove()" method
  As its name says it does the opposite of the "add()" method.

  The "toggle()" method
  This will possibly be one of the most used method since it applies if the class is not applies, or it removes otherwise.

  BEST PRACTISE
  In order to keep the desired structure, what we need to do is to create the styles in the CSS file and then modify the class list of an object using JS. So then, we wouldn't
  be dealing with CSS directly in JS.
*/

var list = document.querySelector("button").classList;
var makeInvisible = "invisible";

list.add(makeInvisible);
list.remove(makeInvisible);
list.toggle(makeInvisible);


// Challenge
var h1ClassList = document.querySelector("h1").classList;

h1ClassList.add("huge");
