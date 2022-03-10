/* Manipulating texts
  It's important to rememeber that when we use "$(name)" we match all the elements associated to that name.
  To manipulate text we use the "text()", but it will alter in all elements.
  As it was seen before, by using methods we can shorten our code and make it more modular. That's basically what jQuery does
  since it bases itself in methods that have been created for such purpose.

  jQuery vs JS
  The "text()" is the jQuery version of "textContentc()".
  The "hmtl()" is the jQuery version of "innerHTML()".
*/

$("h1").text("Bye");

$("button").text("Don't Click Me");
$("h1").text("<em>Bye</em>");
