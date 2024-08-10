const express = require("express");
const colors =require("colors");
const dotenv =require("dotenv").config();
const morgan =require("morgan");
const rootroute = require("./routes/rootroute");
const productroute = require("./routes/productroute");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 6000 || 8080;
connectDB();
const app = express();

app.use("/",rootroute);
  
app.use("/products",productroute);
 connectDB()
app.listen(PORT,()=>{
 console.log(`server is running on https://localhost:${PORT}`.bgBlue.white);
});