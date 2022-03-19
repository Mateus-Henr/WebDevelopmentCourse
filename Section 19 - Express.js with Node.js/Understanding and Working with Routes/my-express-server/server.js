const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("<h1>Hello, world!</h1>"));

// Another route
app.get("/contact", (req, res) => res.send("Contact me at: mateush.study@gmail.com"));

// Challenge
app.get("/about", (req, res) => res.send("Not much here tbh, just a uni student :)"));

app.get("/hobbies", (req, res) => res.send("<ul><li>Code</li><li>Tv Shows</li></ul>"));

// "localhost:3000" is the root of the website.
app.listen(port, () =>  console.log(`Example app listening on port ${port}`));

// Nodemon is like a live server but for Express.js.
