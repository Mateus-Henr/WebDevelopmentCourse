const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const SIGNUP_HMTL = "/signup.html";
const SUCCESS_HTML = "/success.html";
const FAILURE_HTML = "/failure.html";

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

  const JSONData = JSON.stringify(data);

  const LIST_ID = "f24efe7020";
  const URL = "https://us14.api.mailchimp.com/3.0/lists/" + LIST_ID;
  const API_KEY = "a03f376761469eb9746a406a0c8c6b0e-us14";

  const options =
  {
    method: "POST",
    auth: "mateus:" + API_KEY
  };

  // We can see whether a request was successful depending on the return code.
  const request = https.request(URL, options, (response) =>
  {
    response.on("data", (data) =>
    {
      const requestData = JSON.parse(data);

      if (response.statusCode === 200 && requestData.error_count === 0)
      {
        res.sendFile(__dirname + SUCCESS_HTML);
      }
      else
      {
        res.sendFile(__dirname + FAILURE_HTML);
      }

       console.log(JSON.parse(data).status);
    });
  });

  request.write(JSONData);
  request.end();
});

app.post("/failure", (req, res) =>
{
  res.redirect("/"); // Going back to the main route.
});


app.listen(port, () => console.log(`Server is up and running on port ${port}.`));
