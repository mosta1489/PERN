const isVerify = async (req, res) => {
  try {
    res.json({ payload: req.user });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { isVerify };
