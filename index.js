const express = require("express");

const app = express();

const indexRouter = require("./routes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use("/", indexRouter);

app.listen(3344);
console.log("App is running in port 3344");
