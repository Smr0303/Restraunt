const Product = require("../models/Product");
const fs = require("fs");

exports.getNewArrivals = async (req, res) => {
    const sortBy=req.query.sortBy?req.query.sortBy:"desc";
    const limit=req.query.limit?parseInt(req.query.limit):parseInt(3);
  try {
      const newArrivals= await Product.findAll({})
  
  } catch (err) {
    console.log(err,"getnewArrivals error");
    res.status(500).json({
      errorMessage: "Internal server error",
    });
  }
};

