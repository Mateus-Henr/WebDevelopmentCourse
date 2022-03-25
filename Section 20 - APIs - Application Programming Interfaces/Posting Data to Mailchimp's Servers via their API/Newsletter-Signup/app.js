const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const SIGNUP_HMTL = "/signup.html";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) =>
{
  res.sendFile(__dirname + SIGNUP_HMTL);
});

app.post("/", (req, res) =>
{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // We have to write the properties of this object with keys that the API will recognize.
  const data =
  {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:
        {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const JSONData = JSON.stringify(data); // Transforming the data in a String that follows a JSON format.

  // Making request using the "request" method.
  // https.request(URL, options, function(response))
  const LIST_ID = "f24efe7020";
  const URL = "https://us14.api.mailchimp.com/3.0/lists/" + LIST_ID;
  const API_KEY = "a03f376761469eb9746a406a0c8c6b0e-us14";

  const options =
  {
    method: "POST",
    auth: "mateus:" + API_KEY // Used for basic authentication.
  };

  const request = https.request(URL, options, (response) =>
  {
    response.on("data", (data) => console.log(JSON.parse(data)));
  });

  request.write(JSONData);
  request.end(); // After finishing the request.
});


app.listen(port, () => console.log(`Server is up and running on port ${port}.`));
