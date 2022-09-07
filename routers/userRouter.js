import express from "express";
import expressAsyncHandler from "express-async-handler";
import ProductData from "../data/productData.js";
import User from "../models/userModel.js";

const userRouter = express.Router();
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(ProductData.users);
    res.send({ createdUsers });
  })
);
export default userRouter;
