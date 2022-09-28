const { getOneUser } = require("../model/auth.model");
const { jwtGenerator } = require("../utils/jwt");
const { comparePassword } = require("../utils/bcrypt.hash");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getOneUser(email);
    if (!user.rows[0]) {
      return res.status(401).json({ msg: "this user is not exist" });
    }

    const isMatch = await comparePassword(password, user.rows[0].user_password);

    if (isMatch) {
      const user_id = user.rows[0].user_id;
      const token = await jwtGenerator(user_id);
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ msg: "wrong password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { login };
