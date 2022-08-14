import express from "express";
import ProductData from "./data/productData.js";

const app = express();
app.get("/api/products/:id", (req, res) => {
  const product = ProductData?.products?.find((item) => item.id === Number(req.params.id));
  if (product) {
    res.send(product);
  } else res.status(404).send({ message: "Product not found!" });
});
app.get("/api/products", (req, res) => {
  res.send(ProductData?.products);
});
app.get("/", (req, res) => {
  res.send("server is ready");
});
const port = process.env.PORT || 4000;
app.listen(4000, () => {
  console.log("serve at http://localhost:4000");
});
