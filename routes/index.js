const router = require("express").Router();
const { authPerson } = require("../controllers/authController");
const apiRoutes = require("./api");

router.post("/auth", authPerson);

router.use("/api", apiRoutes);
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
