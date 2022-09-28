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
module.exports = { getOneUser, insertUser };
