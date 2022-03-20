const express = require("express");
const bodyParser = require("body-parser");

const HTML_FILE = "/bmiCalculator.html";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => res.sendFile(__dirname + HTML_FILE));

app.post("/", (req, res) =>
{
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = Math.round(weight / (height * height));

  res.send("Your BMI is " + result);
});

app.listen(port, () =>  console.log(`Calculator app listening on port ${port}`));
