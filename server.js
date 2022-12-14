import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();
// const cors = require("cors");
const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;
const app = express();

const whitelist = [
  "http://localhost:3000",
  "https://bitshub-admin.vercel.app",
  "https://bitshub.vercel.app",
];
const corsOptions = {
    origin: [
    "http://localhost:3000",
    "https://bitshub-admin.vercel.app",
    "https://bitshub.vercel.app",
  ],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
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
app.use("/api/orders", orderRouter);
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
