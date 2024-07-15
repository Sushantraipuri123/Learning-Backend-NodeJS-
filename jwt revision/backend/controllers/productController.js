var db = require('../models/product.models');

module.exports = {
    createProduct: async (req, res) => {
        try {
            const newProduct = await  db.create({
                productTittle: req.body.productTittle,
                productDescription: req.body.productDescription,
                productPrice: req.body.productPrice,
            })
          
            res.status(200).json({
                success: true,
                message: 'Product created successfully!',
                body: newProduct,
            })
        } catch (error) {
            console.log(error);
        }
    },
}