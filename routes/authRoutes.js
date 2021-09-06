const express=require('express');
const router=express.Router();
const {SignupValidator,SigninValidator,validatiorResult}=require("../middleware/validator");
const {SignupController,SigninController}=require("../controllers/authRoutes");

router.post('/Signup',SignupValidator,validatiorResult,SignupController);
router.post('/Signin',SigninValidator,validatiorResult,SigninController);

module.exports=router;