const mongoose = require("mongoose");
const {Objectid}=mongoose.Schema();
const ProductSchema = new mongoose.Schema({
  fileName: {
    type: "String",
    required: true,
  },
  productName: {
    type: "String",
    required: true,
    trim: true,
    maxlength: 50,
  },
  productDescription: {
    type: "String",
    maxlength: 50,
  },

  productPrice: {
    type: number,
    required: true,
  },
  productType: {
    type: Objectid,
    ref:'Category',
    required: true,
  },
  productQuantity: {
    type:Number,
    required: true,
  },
},{timestamps:true});

const Product=mongoose.model("Product",ProductSchema)
module.exports=Product;
