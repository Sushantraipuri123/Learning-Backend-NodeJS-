var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController')

/* GET users listing. */
router.post('/createUser',authController.createUser);

module.exports = router;
