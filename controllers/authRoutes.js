const express=require('express');
const User=require('../models/User');
const bcrypt=require("bcryptjs");

exports.SignupController=async(req,res)=>{
    const {username,email,password1}=req.body;
    try{
        const userCheck= await User.findOne({email});
        if(userCheck){
            res.status(400).json({
                message:"User alerady exists"
            });
            return
        }
        const newUser= new User();
        newUser.username=username;
        newUser.email=email;
        newUser.password1=password1;

        const salt=await bcrypt.genSalt(10);
        newUser.password1=await bcrypt.hash(password1,salt);

        await newUser.save();
        return res.status(200).json({
            successmsg:"User Signed up successfully"
        });
}
  catch(err){
      res.status(500).json({
          error:"Server error try again!!"
      })

    }

}