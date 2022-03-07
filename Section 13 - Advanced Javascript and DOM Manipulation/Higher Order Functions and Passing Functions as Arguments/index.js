document.querySelectorAll(".drum").forEach(elem => elem.addEventListener("click", () => alert("I got clicked!")));

/* Higher Order Function
  This type of function that can take other function as an argument is called a higher order function.
  Available in a lot of languages.
*/

// The "$0" here is a way used by Chrome to reference to a specific HTML element.
$0.addEventListener("click", () => console.log("I got clicked!"));

// In a calculator scenario, the ability of using a function as a parameter is very useful since we wouldn't need to change the function each time that we want to perform a
// different operation.
function calculator(num1, num2, operator) // Operator is a function here. JS knows that's a function because it's being called in the code.
{
  return operator(num1, num2);
}

function add(num1, num2)
{
  return num1 + num2;
}

function multiply(num1, num2)
{
  return num1 * num2;
}

function subtract(num1, num2)
{
  return num1 - num2;
}

function divide(num1, num2)
{
  return (num2 !== 0) ? num1 / num2 : NONE;
}

// Passing a function as the third input.
calculator(2, 3, add);
