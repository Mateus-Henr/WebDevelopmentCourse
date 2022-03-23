const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const SIGNUP_HMTL = "/signup.html";

const app = express();
const port = 3000;

// In order to load up static files when running the server we need to use the "static()" function from express. The files will have a relative URL to the "public" folder.
app.use(express.static("public")); // Name of the folder that's gonna be static. This folder will contain images, css code, JS code, etc.

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>
{
  res.sendFile(__dirname + SIGNUP_HMTL);
});

// Challenge
app.post("/", (req, res) =>
{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;


  console.log(firstName);
  console.log(lastName);
  console.log(email);
});


app.listen(port, () => console.log(`Server is up and running on port ${port}.`));
