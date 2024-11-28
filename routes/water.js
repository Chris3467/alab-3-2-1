const express = require("express");
const router = express.Router();
// localhost:3000/water
router.get("/", (req, res) => {
  res.render("water", { title: "Water" });
});

module.exports = router;
