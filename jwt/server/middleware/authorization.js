const { jwtVerify } = require("../utils/jwt");

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) {
      res.status(403).json({ msg: "Not Authorize" });
    }

    const payload = jwtVerify(jwtToken);
    req.user = payload.user;
    next();
    //
  } catch (error) {
    console.log(error.message);
    res.status(403).json({ msg: "Not Authorize" });
  }
};
