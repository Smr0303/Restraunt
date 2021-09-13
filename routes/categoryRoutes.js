const express =require('express');
const router=express.Router();
const categoryController=require("../controllers/categoryRoutes");
const { authenticate } = require('../middleware/authentication');

router.post("/create",authenticate,categoryController.create);
router.post("/read",authenticate,categoryController.read); 

module.exports=router;