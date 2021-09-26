const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema;
const ProductSchema = new mongoose.Schema({
  filename: {
    type: 'String',
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
    type: Number,
    required: true,
  },
  productType: {
    type: ObjectId,
    ref:'category',
    required: true,
  },
  productQuantity: {
    type:Number,
    required: true,
  },
},{timestamps:true});

const Product=mongoose.model("Product",ProductSchema)
module.exports=Product;
