const router = require("express").Router();
/* const authController = require("../../controllers/authController"); */
const { authPerson } = require("../../controllers/authController");

router.post("/", authPerson);

router.get("/:id", authPerson);

module.exports = router;