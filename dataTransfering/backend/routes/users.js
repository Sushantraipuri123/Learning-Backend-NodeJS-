const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

router.post('/createUser',authController.createUser)
router.get('/findUser',authController.findUser)
module.exports = router;
