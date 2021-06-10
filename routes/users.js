var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/* const usersController = require("../controllers/usersController");
const router = require("express").Router();

router.route("/")
  .post(usersController.create);


  module.exports = router; */