const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) =>
{
  let today = new Date();
  let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDayName = dayNames[today.getDay()];

  res.render("list",
  {
    kindOfDay: currentDayName
  });
});

app.listen(PORT, () =>
{
  console.log("Server started on port 3000.");
});
