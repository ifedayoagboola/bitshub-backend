import express from "express";
import expressAsyncHandler from "express-async-handler";
import ProductData from "../data/productData.js";
import Product from "../models/productModel.js";
import { isAdmin, isAuth } from "../utils.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(ProductData.products);
    res.send({ createdProducts });
  })
);

productRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      model: req.body.model,
      price: req.body.price,
      rating: req.body.rating,
      initialPrice: req.body.initialPrice,
      quantityInStock: req.body.quantityInStock,
      config: req.body.config,
      brief: req.body.brief,
      desc: req.body.desc,
      condition: req.body.condition,
      availability: req.body.availability,
      category: req.body.category,
      size: req.body.size,
      color: req.body.color,
      reviews: req.body.reviews,
      brand: req.body.brand,
//       id: req.user._id,
    });
    const createdProduct = await product.save();
    res
      .status(201)
      .send({ message: "New product created", product: createdProduct });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send({ product });
    } else {
      res.status(404).send({ message: "product not found" });
    }
  })
);

productRouter.put(
  "/:id/update",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = req.body.name || product.name;
      product.image = req.body.image || product.image;
      product.model = req.body.model || product.model;
      product.price = req.body.price || product.price;
      product.rating = req.body.rating || product.rating;
      product.initialPrice = req.body.initialPrice || product.initialPrice;
      product.quantityInStock =
        req.body.quantityInStock || product.quantityInStock;
      product.config = req.body.config || product.config;
      product.brief = req.body.brief || product.brief;
      product.desc = req.body.desc || product.desc;
      product.condition = req.body.condition || product.condition;
      product.availability = req.body.availability || product.availability;
      product.category = req.body.category || product.category;
      product.size = req.body.size || product.size;
      product.color = req.body.color || product.color;
      product.reviews = req.body.reviews || product.reviews;
      product.brand = req.body.brand || product.brand;
//       user = req.user._id;

      const updatedProduct = await product.save();
      res
        .status(201)
        .send({ message: "Product Updated", product: updatedProduct });
    } else {
      res.status(404).send({ message: "product Not Found" });
    }
  })
);
export default productRouter;
