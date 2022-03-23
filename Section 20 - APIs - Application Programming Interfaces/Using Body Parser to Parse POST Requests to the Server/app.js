const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const HTML_FILE = "/index.html";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
{
  res.sendFile(__dirname + HTML_FILE);
});

// Catching POST request from our form
app.post("/", (req, res) =>
{
  const API_KEY = "817a05ae8ea9027c47a13185429a962e#";
  const QUERY = req.body.cityName;
  const UNIT = "metric";
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=" + QUERY + "&units=metric&appid=" + API_KEY;

  https.get(URL, (response) =>
  {
    console.log(response.statusCode);

    response.on("data", (data) =>
    {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/w/" + icon + ".png";

      res.write("<h1>The temperature in " + QUERY + " is " + temp + " degree Celcius.</h1>");
      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(port, () => console.log(`The server is running on port ${port}.`));
