const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.get("/", (req, res) =>
{
  let today = new Date();
  let dayNumber = today.getDay();

  // Weekend
  if (dayNumber === 6 || dayNumber === 7)
  {
    res.sendFile(__dirname + "/weekend.html");
  }
  else
  {
    res.sendFile(__dirname + "/weekday.html");
  }

  // Notice that when the server sees the "send" method, it sees it as the final instruction.
  // To send multiple pieces of data we use the "write" method and only at the end that we send it all
  // using the "send" method without any parameters.
  // You can see the "send" method as an email, and the "write" method as a messager.
  // We can also send a file using "sendFile()".
  // res.send();
  // We can create an HTML template that changes depending on the logic used.
  // res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () =>
{
  console.log("Server started on port 3000.");
});
