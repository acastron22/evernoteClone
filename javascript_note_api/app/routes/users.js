var express = require("express");
var router = express.Router();
const User = require("../models/user.js");

router.post("/register", async function (req, res) {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    user.save();
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error registering new user please try again." });
  }
});

module.exports = router;
