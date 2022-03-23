const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", (req, res) =>
{
  const URL = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=817a05ae8ea9027c47a13185429a962e#";

  https.get(URL, (response) =>
  {
    console.log(response.statusCode)

    // The first parameter of this function is the moment when it's going to be called, in this case when we get some data. It returns data in hexadecimal.
    response.on("data", (data) =>
    {
      const whetherData = JSON.parse(data); // Transforms from hexadecimal to a JSON format without strings.
      const temp = whetherData.main.temp; // Going through the object.

      // Challenge
      const description = whetherData.weather[0].description;

      console.log(temp);
      console.log(description);
    });
  });

  res.send("Server is up and running.");
});

app.listen(port, () => console.log(`The server is running on port ${port}.`));

/*  Errors when retrieving data from an API
  404 - When the API couldn't find what the client were looking for.
  401 - Unauthorized access. It happens when the API key is invalid.
*/

// The Chrome extension in this scenario is useful since it provides the path of the key value pair object that you want more easily.
