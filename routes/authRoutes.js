const express=require('express');
const router=express.Router();
const {SignupValidator,validatiorResult}=require("../middleware/validator");
const {SignupController}=require("../controllers/authRoutes");

router.post('/Signup',SignupValidator,validatiorResult,SignupController);

module.exports=router;