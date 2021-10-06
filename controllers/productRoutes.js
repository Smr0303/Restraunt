const Product = require("../models/Product");
const fs = require("fs");

exports.create = async (req, res) => {
  console.log(req.file);
  const { filename } = req.file;
  const {
    productName,
    productPrice,
    productDescription,
    productType,
    productQuantity,
  } = req.body;

  try {
    let newProduct = new Product();
    newProduct.filename = filename;
    newProduct.productName = productName;
    newProduct.productPrice = productPrice;
    newProduct.productDescription = productDescription;
    newProduct.productType = productType;
    newProduct.productQuantity = productQuantity;
    newProduct = await newProduct.save();

    res.json({
      successMessage: `${productName} was created`,
      newProduct,
    });
  } catch (err) {
    console.log(err, "productController");
    res.json({
      errorMessage: "server error Try again",
    });
  }
};

exports.read = async (req, res) => {
  try {
    console.log("yes");
    const products = await Product.find({}).populate("productType", "category");
    res.status(200).json({
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      errorMessage: "Internal server error",
    });
  }
};
exports.delete = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    fs.unlink(`uploads/${deletedProduct.filename}`, (err) => {
      if (err) throw err;
      console.log("Image succesfully deleted", deletedProduct.filename);
      res.status(200).json({
        deletedProduct,
      });
    });
  } catch (err) {
    console.log(err, "dekete Error");
    res.status(500).json({
      errorMessage: "Internal server error",
    });
  }
};

exports.readone = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.status(201).json({
      product,
    });
  } catch (err) {
    console.log(err, "readOne Error");
    res.status(500).json({
      errorMessage: "Internal server error",
    });
  }
};
