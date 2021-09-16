const Product = require("../models/Product");

exports.create = async(req, res) => {
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
