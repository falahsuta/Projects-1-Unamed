const express = require("express");
const router = express.Router();

router.post("/api/users/signup", (req, res) => {
  console.log(typeof req.body);
  res.send(JSON.stringify(req.body));
});

module.exports = router;
