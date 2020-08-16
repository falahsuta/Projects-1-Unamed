const express = require("express");
const router = express.Router();
const currUserMiddleware = require("../middlewares/current-user");

router.get("/api/users/currentUser", currUserMiddleware, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
  // res.send({
  //   currentUser: {
  //     id: "5f38369bf5f33220e03a3058",
  //     username: "test@test.com",
  //     iat: 1597519516,
  //   },
  // });
});

module.exports = router;
