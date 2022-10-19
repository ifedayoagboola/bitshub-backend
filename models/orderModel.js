import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: false },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingDetails: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: false },
      state: { type: String, required: false },
      country: { type: String, required: false },
      shippingPrice: { type: String, required: true },
      taxPrice: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: false },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, default: false },
    PaidAt: { type: Date },
    isDelivered: { type: Boolean, required: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
