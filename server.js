const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes =require("./routes/categoryRoutes");
const productRoutes=require("./routes/productRoutes");
const filterRoutes=require("./routes/filterRoutes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/category",categoryRoutes);
app.use("/product",productRoutes);
app.use("/filter",filterRoutes);
app.use("/uploads",express.static('uploads'));

app.get("/", (req, res) => {
  res.send("Inside the server");
});

connectDB();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
