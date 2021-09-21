const Category = require("../models/Category");
const mongoose = require("mongoose");

exports.create = async (req, res) => {
  const { category } = req.body;
  console.log(category);
  try {
    const check = await Category.findOne({ category });
    if (check) {
      return res.status(400).json({
        errorMessage: "Category alerady exists",
      });
    }
    let newCategory = new Category();
    newCategory.category = category;
    newCategory = await newCategory.save();
    res.status(200).json({
      successMessage: `${newCategory.category} was created`,
      category:newCategory,
    });
  } catch (err) {
    console.log("category", err);
    res.status(500).json({
      errorMessage: "server Error",
    });
  }
};
exports.read = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      categories,
    });
  } catch (err) {
    res.status(500).json({
      errorMessage: "Internal server error try later",
    });
  }
};
