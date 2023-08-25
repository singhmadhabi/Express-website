const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("welcome To Broadway");
});
app.listen(3344);
console.log("App is running in port 3344");
