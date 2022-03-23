const express = require("express");
const https = require("https");

const HTML_FILE = "/index.html";

const app = express();
const port = 3000;

// The "response" on the ".get()" method is the one that's gonna be sent back to the clients browser.
app.get("/", (req, res) =>
{
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=817a05ae8ea9027c47a13185429a962e#";

  https.get(URL, (response) =>
  {
    console.log(response.statusCode)

    response.on("data", (data) =>
    {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon; // Challenge
      const imageURL = "http://openweathermap.org/img/w/" + icon + ".png";

      // We can only have one "send()" method. But we can have multiple "write()" methods.
      res.write("<h1>The temperature in Paris is " + temp + " degree Celcius.</h1>"); // Challenge
      res.write("<p>The weather is currently " + description + "</p>"); // Challenge
      res.write("<img src=" + imageURL + ">"); // Challenge
      res.send();
    });
  });
});

app.listen(port, () => console.log(`The server is running on port ${port}.`));
