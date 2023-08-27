const router = require("express").Router();

router.get("/:name", (req, res) => {
  const { name } = req.params;
  name = name ? name : "";
  res.render("index", { name });
});

module.exports = router;
