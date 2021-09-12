const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
},{timestamps:true});
const category=mongoose.model('category',CategorySchema);
module.exports=category;
