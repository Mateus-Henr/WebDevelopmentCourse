/*  Scope

  function a()
  {
    var x = 2;
    console.log(x); // The value of x, 2.
  }

  console.log(x); // Undefined

  - Picture the scope as a wall that can only be accessed by the outside.
    Therefore, if you have a value that has been defined inside of a wall, this
    variable cannot be accessed outside, only in the inside. However, if the same
    variable were defined outside wall, this variable would be accessible.
    The walls are the functions.
  - In the example above, x, can only be accessed by the function a's scope. It cannot be
    accessed from another function's scope.
  - Each function would be a backyard.


  Local variables
  - They are those variables that their scope are local from where they were declared.
  - Envision the variable as a tree in a  backyard.


  Global variables
  - They are those variables that have a global scope, in other words, they can be accessed
    in the entire code file.
  - Envision the variable as a tree in the neighbourhood.


  JS particularities
  - If a variable is defined within a condition, this variable can still be accessed outside of the scope of that
    condition.
  - It's equivalent to having your neighbour going through your wall to steal your apples.


  Types of varialbes in JS
  - const: Can only set a assign a value to it at its initialization, after that, it cannot be altered.
  - var: If you create a variable using it inside a block of code (loops, condtions, etc), this will be a global variable.
         Differently from the others, that are local inside a block of code.
  - let: This respects all the scopes, they are local even within a block of code.
  OBS: The variables above in functions they are all local. Outside of functions they are global.


  Good practise
  AVOID USING THE KEYWORD "VAR", ALWAYS USE "LET", OR "CONST".

*/

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
{
  let today = new Date();

  let options =
  {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let currentDayName = today.toLocaleDateString("en-US", options);

  res.render("list",
  {
    kindOfDay: currentDayName,
    newListItems: items
  });
});

// Challenge
app.post("/", (req, res) =>
{
  items.push(req.body.newItem);

  res.redirect("/");
});

app.listen(PORT, () => console.log("Server started on port 3000."));
