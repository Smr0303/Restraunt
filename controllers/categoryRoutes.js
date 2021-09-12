const Category = require("../models/Category");

exports.create = async (req, res) => {
  const { category } = req.body;
  try {
    let newCategory = new Category();
    newCategory.category = category;
    newCategory = await newCategory.save();
    res.status(200).json({
      successMessage: `${newCategory} was created`,
    });
  } catch (err) {
    console.log("category", err);
    res.status(500).json({
      errorMessage: "server Error",
    });
  }

  res.status(200).json({
    successMessage: "Category succesfully created!!!",
  });
  console.log(req.body);
};
