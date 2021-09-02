const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Restraunt-user:9BjwY2zm0qxFsu0k@restraunt-mern.i312m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected")
  } catch (err) {
    console.log(err);
  }
};
module.exports= connectDB
