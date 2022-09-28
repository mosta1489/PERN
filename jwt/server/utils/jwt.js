/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;
function jwtGenerator(userId) {
  const payload = {
    user: userId,
  };
  return jwt.sign(payload, jwtSecret, { expiresIn: "1d" });
}
const jwtVerify = (token) => {
  return jwt.verify(token, jwtSecret);
};
module.exports = { jwtGenerator, jwtVerify };
