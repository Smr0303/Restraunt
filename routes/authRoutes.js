const express=require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Sam")
})

router.post('/Signup',(req,res)=>{
    console.log("hii")
})

module.exports=router;