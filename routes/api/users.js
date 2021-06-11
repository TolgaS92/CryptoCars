const usersController = require('../../controllers/usersController');
const router = require('express').Router();


router.route('/')
.get(usersController.findAll)
.post(usersController.create);

module.exports = router;