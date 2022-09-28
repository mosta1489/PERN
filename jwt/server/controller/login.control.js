const { getOneUser } = require("../model/auth.model");
const jwtGenerator = require("../utils/jwtGenerator");

const login = async ({ email, user_id }) => {
  if (!user_id) {
    const user = await getOneUser(email);
    user_id = user.rows[0].user_id;
  }

  const token = await jwtGenerator(user_id);
  return token;
};

module.exports = { login };
