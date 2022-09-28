/* eslint-disable no-undef */
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRound = +process.env.SALT_ROUND;

const generateSalt = (round) => {
  return bcrypt.genSalt(round);
};

const hashPassword = async (password) => {
  const salt = await generateSalt(saltRound);
  return bcrypt.hash(password, salt);
};
module.exports = { hashPassword };
