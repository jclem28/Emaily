const express = require("express");
// there will mostly only be one app. app is used to set up configuation
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(3000);
