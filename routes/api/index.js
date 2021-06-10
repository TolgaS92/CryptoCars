const router = require('express').Router();
const userRoutes = require('../users');
const carRoutes = require('./cars');

router.use("/cars", carRoutes);
router.use('/users', userRoutes);

module.exports = router;
