/*  Export

  • It's used when we want to use modules somewhere else.
  • Once you require a module, when it runs the line that it's requiring the module, it runs the code.
  • Exports are JS objects.
*/

const express = require("express");
const bodyParser = require("body-parser");

// This is how we declare a module that has been declared locally.
const date = require(__dirname + "/date.js");

// Running the function from the other module.
// console.log(date());

const PORT = 3000;

const app = express();

// By defining an array as a "const" we would block a possible array reassignment. In other words it doesn't detect
// things inside of the object/array.
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>
{
  let today = date.getDate();

  res.render("list",
  {
    listTitle: today,
    newListItems: items
  });
});

app.get("/work", (req, res) =>
{
  res.render("list",
  {
    listTitle: "Work List",
    newListItems: workItems
  });
});

// This is a demonstration of how we can use the same layout in a different page.
app.get("/about", (req, res) =>
{
  // Takes no parameters.
  res.render("about");
});

app.post("/", (req, res) =>
{
  let item = req.body.newItem;

  if (req.body.list === "Work")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(PORT, () => console.log("Server started on port 3000."));
