const express=require("express");
const router= express.Router();
const upload=require("../middleware/multer")
const authenticate=require("../middleware/authentication");
const productController=require("../controllers/productRoutes");

router.post("/create",upload.single('productImage'),productController.create);
module.exports=router;