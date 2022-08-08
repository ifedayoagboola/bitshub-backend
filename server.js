import express from "express";
import ProductData from "./data/productData.js";

const app = express();
app.get("/api/products", (req, res) => {
  res.send(ProductData.products);
});
app.get("/", (req, res) => {
  res.send("server is ready");
});
const port = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log("serve at http://localhost:4000");
});
