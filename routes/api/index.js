const router = require('express').Router();
const userRoutes = require('./users');
const carRoutes = require('./cars');
const { authPerson } = require("../../controllers/authController");

router.use("/cars", carRoutes);
router.use('/users', userRoutes);
router.post("/auth", authPerson);
router.post("/users", userRoutes);

module.exports = router;
