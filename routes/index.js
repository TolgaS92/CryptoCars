const router = require("express").Router();
const { authPerson } = require("../controllers/authController");
const userRoute = require('./users')

router.post("/auth", authPerson);
router.use(userRoute);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
