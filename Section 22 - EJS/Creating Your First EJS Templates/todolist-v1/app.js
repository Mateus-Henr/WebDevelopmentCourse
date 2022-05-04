/*  EJS
  EJS is a simple templating language that lets you generate HTML markup with plain JS.
  We can download it via npm.
  In order to use any vieew engines wehave to create a folder called "views" and populate it with
  files specific for that view engine. This folder is the default folder that the view engine will
  look for.
*/


const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

// Telling our app to use EJS.
app.set("view engine", "ejs");

app.get("/", (req, res) =>
{
  let today = new Date();
  let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // let day = (dayNumber === 6 || dayNumber === 0) ? "Weekend" : "Weekday";
  // Challenge
  let currentDayName = dayNames[today.getDay()];

  // Conditions
  // If you have more than five conditions, use the "switch" statemnt, otherwise use "if/else".

  // if (dayNumber === 6 || dayNumber === 7)
  // {
  //   day = "Weekend";
  // }
  // else
  // {
  //   day = "Weekday";
  // }

  // This method uses the "view engine" to render a particular page.
  // The first paramter is the file that express will look for, and the second parameter, We can
  // pass an object to it with the name of the variable within the marker in the HTML file
  // to have some logic in the HTML file.
  // Some people use the variable name in the marker the same as here in the logic code, which
  // can become confusing.
  res.render("list",
  {
    kindOfDay: currentDayName
  });
});

app.listen(PORT, () =>
{
  console.log("Server started on port 3000.");
});
