/*  Files and the server

  When using express the only files that are go into the server are the main access
  point (usually, "app.js"), and the "views" folder. Everything else, it ignores.
  When dealing with static stuff, developers tend to create a new folder called "public".
  So, we tell express to server up this folder, so we have access to our static files.
*/

const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

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

app.post("/", (req, res) =>
{
  items.push(req.body.newItem);

  res.redirect("/");
});

app.listen(PORT, () => console.log("Server started on port 3000."));
