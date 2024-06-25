var express = require('express');
var router = express.Router();

var authControler = require('../controller/authController')

/* GET users listing. */
router.post('/createUser',authControler.createUser);

module.exports = router;
