var mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
        type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price:{
        type: Number,
        required: true,
        defaultValue:0,
    },
    stock: {
        type: Number,
        required: true,
        defaultValue: 0,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
