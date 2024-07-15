var express = require('express');
var router = express.Router();

var productController = require('../controllers/productController');

/* GET users listing. */
router.post('/createProduct',productController.createProduct);




module.exports = router;
