exports.create=(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.status(200).json({
        message:"Inside product Controller",
    })
}