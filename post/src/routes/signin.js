const express = require("express");
require("express-async-errors");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const { ValidationError } = require("../errors/request-validation-error");
const { BadRequestError } = require("../errors/bad-request-error");
const Password = require("../services/password");
const User = require("../models/User");

router.post(
  "/api/users/signin",
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
    if (!isUserExist) {
      throw new BadRequestError("Credentials are invalid");
    }

    const isPasswordMatch = await Password.verify(
      password,
      isUserExist.password
    );
    if (!isPasswordMatch) {
      throw new BadRequestError("Credentials are invalid");
    }

    req.session = {
      jwt: jwt.sign(
        {
          id: isUserExist.id,
          username: isUserExist.username,
        },
        "key"
      ),
    };

    res.status(200).send(isUserExist);
  }
);

module.exports = router;
