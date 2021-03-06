const express=require("express");
const router= express.Router();
const upload=require("../middleware/multer")
const authenticate=require("../middleware/authentication");
const productController=require("../controllers/productRoutes");

router.post("/create",upload.single('productImage'),productController.create);
router.get("/read",productController.read);
router.delete("/:productId",productController.delete);
router.get("/:productId",productController.readone);
router.get("./count",productController.readByCount)
module.exports=router;