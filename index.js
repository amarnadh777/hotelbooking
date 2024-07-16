const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
const hotel = require("./routes/hotel")
const userRoutes = require("./routes/user")
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connceted to database");
  } catch (error) {
    throw error;
  }
};

dotenv.config();
app.use(
  cors()
)

//app.use(cors)
app.use(express.json())
app.use("/api/hotel",hotel)
app.use("/api/user",userRoutes)
app.get("/test",(req,res) =>{
  res.send("hello")
})
app.listen(process.env.PORT, () => {
  connect();

  console.log("port is runnig at ", process.env.PORT);
});
