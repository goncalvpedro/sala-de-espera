const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    next();
  } catch (error) {
    res.status(500).json({ error: "Error hashing the password" });
  }
};

module.exports = hashPassword;