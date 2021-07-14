const cryptocarsController = require("../../controllers/cryptocarsController");

const router = require("express").Router();
const { auth } = require('../../middleware/auth.js');

router.route("/")
    .get(auth, cryptocarsController.findAll)
    .post(auth, cryptocarsController.create);

router.route("/:id")
    .get(auth, cryptocarsController.findById)
    .delete(auth, cryptocarsController.remove);

module.exports = router;