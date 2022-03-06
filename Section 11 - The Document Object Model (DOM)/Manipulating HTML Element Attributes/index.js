/* Manipulating attributes of an HTML element
  Attributes are "class", "href", etc.

  Getting a list of attributes
  Through the "attributes" property we can obtain this list.

  Getting a specific attribute
  We can use the "getAttribute()" method to perform this action.

  Setting a value to an attribute
  The "setAttribute()" method does this for us. The first parameter is going to be the attribute's name, and the second parameter will be the new value for it.
*/

var aElement = document.querySelector("a");

console.log(aElement.attributes);
console.log(aElement.getAttribute("href"));
aElement.setAttribute("href", "https://www.bing.com");
