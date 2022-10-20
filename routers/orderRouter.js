import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingDetails: req.body.shippingDetails,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        isPaid: req.body.isPaid,
        PaidAt: req.body.PaidAt,
        isDelivered: req.body.isDelivered,
        deliveredAt: req.body.deliveredAt,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.status(201).send({ message: "New order created", order: createdOrder });
    }
  })
);

orderRouter.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({});
    if (orders) {
      res.send(orders);
    } else {
      res.status(404).send({ message: "product not found" });
    }
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "product not found" });
    }
  })
);

export default orderRouter;
