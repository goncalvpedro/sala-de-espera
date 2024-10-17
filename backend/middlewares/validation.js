const { check, validationResult } = require("express-validator");

module.exports = {
  validateUser: [
    check("name").not().isEmpty().withMessage("Name  required"),
    check("last_name").not().isEmpty().withMessage("Last name  required"),
    check("email").isEmail().withMessage("Email required"),
    check("password").isLength({ min: 8 }).withMessage("Name  required"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ],
};
