const express = require("express");
const app = express();
const port = 3000;

// When using "res.send()" we can just send individual data. For sending a page, we use "sendFile()".
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html")); // This "__dirname" gives you the file path of the current file.

app.listen(port, () =>  console.log(`Example app listening on port ${port}`));
