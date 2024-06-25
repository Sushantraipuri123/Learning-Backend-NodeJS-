var mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productTittle: {
        type: String
    },
    productDiscripton: {
        type: String
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model("product", productSchema)