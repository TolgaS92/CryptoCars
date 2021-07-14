const router = require('express').Router();
const userRoutes = require('./users');
const carRoutes = require('./cars');
const path = require("path");

router.use("/cars", carRoutes);
router.use('/users', userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
module.exports = router;
