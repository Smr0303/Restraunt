exports.cztegoryController=(req,res)=>{
res.status(200).json({
    successMessage:"Category succesfully created!!!",
})
console.log(req.body);
}