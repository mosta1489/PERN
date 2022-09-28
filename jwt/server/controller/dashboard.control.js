const { getUserById } = require("../model/auth.model");

const dashboard = async (req, res) => {
  try {
    const userData = await getUserById(req.user);

    res.json(userData.rows[0]);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
module.exports = dashboard;
