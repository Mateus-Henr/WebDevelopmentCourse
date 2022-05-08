const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

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

  // Using JS to format our date.
  let currentDayName = today.toLocaleDateString("en-US", options);

  // Make sure that you're defining all the variables.
  res.render("list",
  {
    kindOfDay: currentDayName,
    newListItems: items // Notice that this will be "undefined" if the user doesn't add the item.
  });
});

// Challenge
app.post("/", (req, res) =>
{
  items.push(req.body.newItem);

  // Notice that the place that the user goes when he/she searches the URL is the get method,
  // and we need to make sure that all the variables are being defined when rendering the page, if we are
  // using a "render()" method somewhere else.
  res.redirect("/");
});

app.listen(PORT, () => console.log("Server started on port 3000."));
