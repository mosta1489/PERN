const { getOneUser, insertUser } = require("../model/auth.model");
const { hashPassword } = require("../utils/bcrypt.hash");
const { login } = require("./login.control");
const registeration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check user
    const user = await getOneUser(email);
    if (user.rows[0]) {
      return res.status(401).json({ msg: "User already exists" });
    }

    // hash password of new user
    const hashedPahssword = await hashPassword(password);

    // insert new user data into db
    const newUser = await insertUser({ name, email, hashedPahssword });

    // login user
    const token = await login({ user_id: newUser.rows[0].user_id });

    res.json({ newUser: newUser.rows[0], token });
    // res.json({ token });

    //
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { registeration };
