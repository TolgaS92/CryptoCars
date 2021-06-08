const router = require("express").Router();
const { authPerson } = require("../controllers/authController");

router.post("/auth", authPerson);
router.post("./api/user/")
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
