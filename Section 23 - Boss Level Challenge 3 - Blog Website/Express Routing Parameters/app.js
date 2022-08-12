/*  Routing parameters
  • By using these parameters we can group things that follow a certain category together for things to be more organized and simple.
  • Similar to when we look up the news and find several categories based on the new's topic.

  Looking at the Express's scope
  • Because the above situation ends up being repetitive, and how technologies are here to avoid repetition, express allow us // TODO:
    capture parameters from the URL to implement them in our own code. In other words, depending on the URL that the user goes to
    certain data can be taken from the URL to specify the page that has to be shown to the user.
*/

const express = require("express");

const app = express();

app.get("/news/:topic", (req, res) =>
{
  // To access the specified parameter in the URL, you just use the name that you've given to it without the colon.
  console.log(req.params.topic);
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
