/* Equality
  Using three equal signs we are comparing the datatype as well.
  "===" comparing equality.
  "!==" comparing inequality.

  Using two equal signs we only compare if the values are equal.
  "==" comparing equality.
  "!=" comparing inequality.

  Comparator
  > "greater than".
  < "less than".
  >= "greater or equal to".
  <= "less or equal to".
*/

var a = 1;
var b = "1";

console.log("Dataype of a: " + typeof(a));
console.log("Dataype of b: " + typeof(b);

if (a === b)
{
  console.log("The variables contain the same value stored in the same datatype.");
}
else if (a == b)
{
  console.log("The variables contain the same value stored in different datatypes.");
}
else
{
  console.log("The variables don't have the same value. They are not equal.");
}
