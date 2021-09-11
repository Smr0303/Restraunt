const express =require('express');
const router=express.Router();
const {categoryController}=require("../controllers/categoryRoutes");
const { authenticate } = require('../middleware/authentication');

router.post("/",authenticate,categoryController)

module.exports=router;