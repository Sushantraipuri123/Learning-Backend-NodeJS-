var express = require('express');
var router = express.Router();

var authControler = require('../controllers/authControler')

/* GET users listing. */
router.post('/createUser',authControler.createUser);


module.exports = router;
