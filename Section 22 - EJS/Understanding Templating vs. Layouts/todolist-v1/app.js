const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

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
    listTitle: currentDayName,
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
