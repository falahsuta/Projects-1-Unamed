const express = require("express");
require("express-async-errors");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const { ValidationError } = require("../errors/request-validation-error");
const { BadRequestError } = require("../errors/bad-request-error");
const User = require("../models/User");

router.post(
  "/api/users/signup",
  [
    body("username").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError(errors.array());
    }

    const { username, password } = req.body;
    const isUserExist = await User.findOne({ username });
    if (isUserExist) {
      throw new BadRequestError("email has already been use");
    }

    const user = User({ username, password });
    await user.save();

    res.status(201).send(user);
  }
);

module.exports = router;
