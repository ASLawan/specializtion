import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import Order from "../models/Order.js";
import authenticate from "../middlware/authorize.js";

const router = express.Router();

// Add product to cart
router.post("/add", authenticate, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    let cart = await findOne({ userId: req.user.userId });

    if (!cart) {
      cart = new Cart({
        userId: req.user.userId,
        products: [],
        totalAmount: 0,
      });
    }

    const productIndex = cart.products.findIndex((product) => {
      product.productId.toString() === productId;
    });

    if (productIndex >= 0) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    cart.totalAmount += product.price * quantity;

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ error: "Server error while adding to cart" });
  }
});

// View users cart
router.get("/", authenticate, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId }).populate(
      "products.productId"
    );

    if (!cart) {
      res.status(404).json({ message: "Cart is empty!" });
    }

    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ error: "Server error - cart could not be fetched" });
  }
});

// Update product qunatity
router.put("/update", authenticate, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found!" });
    }

    const productIndex = cart.products.findIndex(
      (product) => product.productId.toString() === productId
    );
    if (productIndex === -1) {
      return res.status(404).json({ messsage: "Product not found in cart" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    cart.totalAmount -= cart.products[productIndex].quantity * product.price;
    cart.products[productIndex].quantity = quantity;
    cart.totalAmount += quantity * product.price;

    await cart.save();
    res.status(200).json({ message: "Cart updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error while fetching cart" });
  }
});

// Remove product from cart
router.delete("/remove", authenticate, async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found!" });
    }
    const productIndex = cart.products.findIndex(
      (product) => product.productId.toString() === productId
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).jsono({ mesage: "Product not found!" });
    }

    cart.totalAmount -= cart.products[productIndex].quantity * product.price;
    cart.products.splice(productIndex, 1);

    await cart.save();
    res.status(200).json({ message: "Product reomved from cart" });
  } catch (error) {
    res.status(500).json({ error: "Server error removing product from cart" });
  }
});

// Checkout cart and create user order
router.post("/checkout", authenticate, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    if (!cart || cart.products.length === 0) {
      return res.status(404).json({ message: "Your cart is empty!" });
    }

    const order = new Order({
      userId: req.user.userId,
      products: cart.products,
      totalAmount: cart.totalAmount,
    });

    await order.save();
    await cart.remove();

    res
      .status(201)
      .json({ message: "Checkout successful, User order created!" });
  } catch (error) {
    res.status(500).json({ error: "Server error- checkout failed!" });
  }
});

export default router;
