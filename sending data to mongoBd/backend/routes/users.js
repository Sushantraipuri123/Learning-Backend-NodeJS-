var express = require('express');
var router = express.Router();

const authController = require('../controllers/authcontroller');
const authcontroller = require('../controllers/authcontroller');

router.post("/createUser",authController.createUser)


router.get("/getAllUsers",authcontroller.getAllUsers)

router.get("/findOneUser",authController.findOneUser)


router.get("/deleteUser",authcontroller.deleteUser)

router.post("/updatedata",authController.updatedata)
module.exports = router;
