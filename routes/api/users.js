const usersController = require('../../controllers/usersController');
const router = require('express').Router();

/* GET home page. */
/* router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  }); */
  
router.route('/')
.get(usersController.findAll)
.post(usersController.create);

router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;