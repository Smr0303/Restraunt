const express=require('express');
const app=express();
const connectDB=require('./database/db');

connectDB();
const port=process.env.PORT||8000








app.listen(port,()=>{
    console.log("Server running on 8000")
})