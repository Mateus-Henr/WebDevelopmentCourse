const express = require("express");
const https = require("https"); // Using the native way of making requests. We don't have to install it since it's native.

const app = express();
const port = 3000;

app.get("/", (req, res) =>
{
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=817a05ae8ea9027c47a13185429a962e#";
  // The URL here must be complete, it includes the "https://".
  https.get(URL, (response) => console.log(response));

  res.send("Server is up and running.");
});

app.listen(port, () => console.log(`The server is running on port ${port}.`));
