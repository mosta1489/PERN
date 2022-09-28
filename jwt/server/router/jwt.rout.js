const router = require("express").Router();
const { registeration } = require("../controller/register.control");

// Add routes
router.post("/register", registeration);
// router.get('/', SessionController.store);
// router.put('/', SessionController.store);
// router.delete('/', SessionController.store);

module.exports = router;
