/* "innerHTML" vs "textContent"
  Visually these two properties do the same thing.
  However when using "innerHTML" it returns everything between the HTML element tag, in other words, if there's another tag inside of the tag that you trying to obtain, this tag
  will be returned as well. This is the difference between these two properties since the "textContent" property only returns the text itself.
*/

var h1 = document.querySelector("h1");

console.log(h1.innerHTML);
console.log(h1.textContent);

// Applying CSS on the fly (NEVER USE)
h1Tag.innerHTML = "<em>Good Bye</em>";
