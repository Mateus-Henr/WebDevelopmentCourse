const express = require("express");
const bodyParser = require("body-parser");

const CALCULATOR_HTML = "/bmiCalculator.html";
const INDEX_HTML = "/index.html";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => res.sendFile(__dirname + INDEX_HTML));

app.post("/", (req, res) =>
{
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(num1 + " + " + num2 + " = " + result);
});


app.get("/bmicalculator", (req, res) => res.sendFile(__dirname + CALCULATOR_HTML));

app.post("/bmicalculator", (req, res) =>
{
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = Math.round(weight / (height * height));

  res.send("Your BMI is " + result);
});


app.listen(port, () =>  console.log(`Calculator app listening on port ${port}`));
