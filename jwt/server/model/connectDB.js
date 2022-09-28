/* eslint-disable no-undef */
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

connection = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: process.env.PORT_DATA,
});

module.exports = connection;
