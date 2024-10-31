import express from "express";
import Product from "../models/Product.js";
import { adminCheck } from "../middlware/authorize.js";
import authenticate from "../middlware/authorize.js";
import upload from "../middlware/multerImg.js";

const router = express.Router();

// Create a new product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, image, stock, category } = req.body;
    const filePath = req.file.path.replace(/\\/g, "/");
    const product = new Product({
      name,
      description,
      price,
      image: req.file ? filePath : "",
      stock,
      category,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating product" });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get a product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update a product
router.put("/:id", authenticate, adminCheck, async (req, res) => {
  const { name, price, description, category, image, stock } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        description,
        category,
        image,
        stock,
      },
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a product
router.delete("/:id", authenticate, adminCheck, async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
