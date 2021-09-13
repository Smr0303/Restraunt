const jwt=require("jsonwebtoken");
const jwtSecret=require("../config/key")

exports.authenticate=(req,res,next)=>{
    const token=req.cookies.token;
    console.log(req.cookies.token);
    if(!token){
res.status(400).json({
    errorMessage:"You are not authenticated",
})
return ;
}
try{
    const decoded=jwt.verify(token,jwtSecret);
   req.user=decoded.user

}catch(err){
    console.log("jwt error",err)
    res.status(401).json({
        errorMessage:"Invalid Token",
    })

}
next();

}