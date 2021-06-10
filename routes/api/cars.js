const cryptocarsController = require("../../controllers/cryptocarsController");

const router = require("express").Router();

router.route("/")
    .get(cryptocarsController.findAll)
    .post(cryptocarsController.create);

router.route("/:id")
    .get(cryptocarsController.findById)
    .put(cryptocarsController.update)
    .delete(cryptocarsController.remove);

module.exports = router;