import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    // image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    initialPrice: { type: Number, required: true },
    quantityInStock: { type: Number, required: true },
    config: { type: String, required: true },
    brief: { type: String, required: true },
    desc: { type: String, required: true },
    condition: { type: String, required: true },
    availability: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    reviews: { type: String, required: true },
    brand: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
