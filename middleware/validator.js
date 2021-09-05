const express = require("express");
const { check, validationResult } = require("express-validator");

exports.SignupValidator = [
  check("username").not().isEmpty().trim().withMessage("Username is empty"),
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("password").isLength({min:8}).withMessage("Password is less than 8 characters")
];
exports.validatiorResult=(req,res,next)=>{
    const result=validationResult(req);
    const error=!result.isEmpty();
  if(error){
      const firstError=result.array()[0].msg
      return res.status(400).json({
          error:firstError,
      })

  }
  next();
}
