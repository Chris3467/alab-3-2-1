const express = require("express");
const router = express.Router();

// localhost:3000/grass
router.get("/", (req, res) => {
  res.render("grass", { title: "Grass" });
});

module.exports = router;
