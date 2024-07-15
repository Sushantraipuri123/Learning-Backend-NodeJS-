var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productTittle:{
        type: String,
  },
  productDescription:{
    type: String,
  },
  productPrice:{
    type: Number,
  },
},{
    timestamps: true
}
);

module.exports = mongoose.model('Product', productSchema);