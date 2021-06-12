const router = require('express').Router();
const userRoutes = require('./users');
const carRoutes = require('./cars');
const authPerson = require("./authRoutes");

router.use("/cars", carRoutes);
router.use('/users', userRoutes);
router.use("/auth", authPerson);

module.exports = router;
