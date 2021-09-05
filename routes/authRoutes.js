const express=require('express');
const router=express.Router();
const {SignupValidator,validatiorResult}=require("../middleware/validator")

router.post('/Signup',SignupValidator,validatiorResult);

module.exports=router;