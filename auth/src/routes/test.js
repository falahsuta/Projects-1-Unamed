// const jwt = require("jsonwebtoken");

// const token = jwt.sign(
//   {
//     exp: Math.floor(Date.now() / 1000) + 60 * 60,
//     data: "foobar",
//   },
//   "secret"
// );

// const payload = jwt.verify(token, "secret");
const mongoose = require("mongoose");
const User = require("../models/User");

const user = User({
  username: "falah@falah.com",
  password: "password",
});

user.save();
console.log(user._id);
