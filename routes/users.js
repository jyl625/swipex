const express = require("express");
const router = express.Router();
const User = require('../../models/User');

router.get("/test", (req, res) => {
  res.json({ msg: "This is the user route" });
});

module.exports = router;