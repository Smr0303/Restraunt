const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const connectDB=require('./database/db');
const authRoutes=require('./routes/authRoutes');


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('./api/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send("Hi")
})

connectDB();
const port=process.env.PORT||8000








app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})