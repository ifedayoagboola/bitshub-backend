import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";


dotenv.config();
const cors = cors();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;
const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`serve at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
