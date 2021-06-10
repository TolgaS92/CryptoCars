const router = require("express").Router();
const { authPerson } = require("../controllers/authController");
const userRoute = require('./users')
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.post("/auth", authPerson);
router.post("/", userRoute);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
