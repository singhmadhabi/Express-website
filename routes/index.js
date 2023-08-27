const router = require("express").Router();

router.get("/", (req, resolve) => {
  resolve.send("Hello get World");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello post World");
});

router.get("/:name", (req, res) => {
  const { address } = req.query;
  const { name } = req.params;
  res.send(`Hello ${name}. You are from ${address} & your roll is ${roll}`);
});

module.exports = router;
