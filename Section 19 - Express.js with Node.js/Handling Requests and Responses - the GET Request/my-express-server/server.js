const express = require("express");
const app = express();
const port = 3000;

/* Requests and Responses
  When we insert the URL of a website, the browser sends a request to the website's server to GET some data for the location.
  When the website's server receives the request, it sends a response that contains the code for generating the website.

  The "get()" method
  This method is used to specify what should happen when the browser gets in touch with our server through a GET request.
  The first parameter is the location of the GET request. Our website root is represented by a "/".
  The second parameter is a callback function that executes when the GET request happens. This function can have two parameters, being them "request" and "response".
  Through the "response" object and the "send()" method, we can send a response to the user. Code can also be sent.
*/
app.get("/", (req, res) => res.send("<h1>Hello, world!</h1>"));

// "localhost:3000" is the root of the website.
app.listen(port, () =>  console.log(`Example app listening on port ${port}`));
