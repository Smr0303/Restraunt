const express =require('express');
const router=express.Router();
const {categoryController}=require("../controllers/categoryRoutes");

router.post("/",categoryController);

module.exports=router;