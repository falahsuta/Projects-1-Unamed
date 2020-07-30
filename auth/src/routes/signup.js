const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const { ValidationError } = require("../errors/request-validation-error");
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

    res.send(req.body);
  }
);

module.exports = router;
