const express = require("express");
const app = express();
const port = 3000;

// Listens to any HTTP request that gets sent to the specified port.
// A port is similar to a channel. Our server is tuned in the channel 3000.
app.listen(port, () =>  console.log(`Example app listening on port ${port}`));
