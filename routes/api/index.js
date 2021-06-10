const router = require("express").Router();
const carRoutes = require("./cars");

// Car routes
router.use("/cars", carRoutes);

module.exports = router;
