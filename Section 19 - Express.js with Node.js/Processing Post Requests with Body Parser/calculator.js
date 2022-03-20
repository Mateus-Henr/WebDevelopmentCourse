const HTML_FILE = "/index.html";

const express = require("express");
const bodyParser = require("body-parser"); // Incorporating the module.
const app = express();
const port = 3000;

// Incorporating body-parser into the express module. We define the type of data that we are going to be using. The type below is for HTML files.
app.use(bodyParser.urlencoded({extended: true})); // By setting this option to true, it allows us to post nested objects. This is good practise at all times.

app.get("/", (req, res) => res.sendFile(__dirname + HTML_FILE));

/* POST Request
 State codes -> 200 OK | 404 NOT FOUND
 We need a way to process a POST request in order to make the code work. That's why we are using the "post()" method here.
 In order to access data from the form, we need a NPM package called Body Parser.
 This logic is hidden from the client side.
*/
app.post("/", (req, res) =>
{
  // Accessing the data sent on the request.
  console.log(req.body);

  // Accessing specific data. The naming here is from the HTML code.
  console.log(req.body.num1);

  // The values from the request's body come as strings. So it requires some casting.
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(num1 + " + " + num2 + " = " + result);
});

app.listen(port, () =>  console.log(`Calculator app listening on port ${port}`));
