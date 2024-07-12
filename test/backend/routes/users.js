var express = require('express');
var router = express.Router();

var authController = require('../controllers/authController')

/* GET users listing. */
router.post('/createUser',authController.createUser)

router.get('/getUser',authController.getUser)

module.exports = router;
