const jwt=require("jsonwebtoken");

exports.authenticate=(req,res,next)=>{
    const token=req.cookies.token;
    console.log(token);
    if(!token){
res.status(400).json({
    errorMessage:"You are not authenticated",
})
    }

}