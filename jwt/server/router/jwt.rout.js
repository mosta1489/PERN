const router = require("express").Router();
const { registeration } = require("../controller/register.control");
const { login } = require("../controller/login.control");
const { isVerify } = require("../controller/verify");
const Authorization = require("../middleware/authorization");

// Add routes
router.post("/register", registeration);
router.post("/login", login);
router.get("/verify", Authorization, isVerify);

module.exports = router;
