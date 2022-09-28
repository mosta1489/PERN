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

const comparePassword = async (password, hashPassword) => {
  const isMatch = await bcrypt.compare(password, hashPassword);
  return isMatch;
};
module.exports = { hashPassword, comparePassword };
