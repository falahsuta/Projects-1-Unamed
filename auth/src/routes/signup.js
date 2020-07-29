const express = require("express");
const { body, validationResult } = require("express-validator");
const { ValidationError } = require("../errors/request-validation-error");
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("username").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password must be between 8 and 20 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ValidationError(errors.array());
    }

    res.send(req.body);
  }
);

module.exports = router;
