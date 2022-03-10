/* Manipulating Attributes
  Attibutes are the "properties" of the HTML elements.
  We use the "attr()" method to achieve such functionality. The first parameter is the attribute's name, and the second is the value to be assigned to the attribute. This when
  you want to set a value, if you want to get the value you only have to use one parameter that's the name of the attribute.
  It's worth mentioning that both must be passed in as strings.
*/

// Getter
console.log($("img").attr("src"));

// Setter
$("a").attr("href", "https://www.yahoo.com");

// Getting the classes applied to the attribute.
console.log($("h1").attr("class"));
