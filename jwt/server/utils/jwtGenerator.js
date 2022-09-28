/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(userId) {
  const payload = {
    user: userId,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

module.exports = jwtGenerator;
