const db = require('../models/product')

module.exports = {
    addProduct : async (req, res)=>{
        try {
            const product = await db.create({
                productTittle:req.body.productTittle,
                productDiscripton:req.body.productDiscripton
            })
            console.log(product, "ddddddddddddddddddddddddddddddddddddddddddddddd")

            res.status(200).json({
                success:true,
                status:200,
                message:"Product added to DB",
                body:product
            })
            
           
        } catch (error) {
            console.log((error))
        }
    }
}