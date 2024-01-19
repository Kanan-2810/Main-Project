require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
const router = require("./routes/user-routes");
const Blogrouter = require("./routes/Blog-routes");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
const port = 8000;
app.use("/api/user", router);
app.use("/api/blog", Blogrouter);
const start = async (req, res, next) => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`port is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
