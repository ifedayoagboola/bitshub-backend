import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
// import cors from "cors";

dotenv.config();
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;
const app = express();
// const cors = cors();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

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
