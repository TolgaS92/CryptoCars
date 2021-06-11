const usersController = require('../controllers/usersController');
const router = require('express').Router();
router.route('/api/users')
.post(usersController.create)
.get(usersController.findAll);


module.exports = router;