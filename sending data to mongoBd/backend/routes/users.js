var express = require('express');
var router = express.Router();

const authController = require('../controllers/authcontroller');

router.post("/createUser",authController.createUser)


router.get("/getAllUsers",authController.getAllUsers)

router.get("/findOneUser",authController.findOneUser)


router.get("/deleteUser",authController.deleteUser)

router.post("/updatedata",authController.updatedata)


module.exports = router;
