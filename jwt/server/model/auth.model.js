const connect = require("./connectDB");

const getOneUser = (userEmail) => {
  return connect.query(`SELECT * FROM users WHERE user_email = $1`, [
    userEmail,
  ]);
};
const insertUser = ({ name, email, hashedPahssword }) => {
  return connect.query(
    `INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *`,
    [name, email, hashedPahssword]
  );
};

const getUserById = (user_id) => {
  return connect.query(
    `SELECT user_id, user_name, user_email FROM users WHERE user_id = $1`,
    [user_id]
  );
};

module.exports = { getOneUser, insertUser, getUserById };
