const router = require("express").Router();
const authorization = require("../middleware/authorization");
const dashboard = require("../controller/dashboard.control");

router.get("/", authorization, dashboard);

module.exports = router;
