const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello get World");
});
/*
router.post("/", (req, res) => {
  res.send("Hello post World");
});

app.get("/:name", (req, res) => {
  console.log(req.query);
  const { address } = req.query;
  const { name, roll } = req.params;
  res.send(`Hello ${name}. You are from ${address} & your roll is ${roll}`);
});
*/

module.exports = router;
