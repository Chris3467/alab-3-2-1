const express = require("express");
const router = express.Router();

// localhost:3000/fire
router.get("/", (req, res) => {
  res.render("fire", { title: "Fire" });
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.redirect("http://localhost:3000/fire");
});

module.exports = router;
