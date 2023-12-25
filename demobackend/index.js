const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require('cors');
const app = express();
app.use(cors({credentials:true,origin: 'https://thaiiddetection.vercel.app'}));
app.use(express.json());
connectDb()
const port = process.env.PORT || 5000;

app.use("/api/data",require("./routes/thaiRoutes"))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});