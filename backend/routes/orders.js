import express from "express";
import Order from "../models/Order.js";
import authenticate from "../middlware/authorize.js";

const router = express.Router();

// Place an order - same as checkout handled in cart

// View all orders
router.get("/", authenticate, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId }).populate(
      "products.productId"
    );

    if (orders.length === 0) {
      return res
        .status(404)
        .json({ message: "You do not have any orders now!" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: "Server error fetching your orders" });
  }
});

// View a single product
router.get("/:orderId", authenticate, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).pupolate(
      "products.productId"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }

    if (order.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "You're not authorized!" });
    }

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: "Server error fetching the order" });
  }
});

// Cancel an order
router.put("/cancel/:orderId", authenticate, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }

    if (order.userId !== req.user.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to cancel this order" });
    }

    if (order.status !== "pending") {
      return res.status(403).json({ message: "Order cannot be canceled!" });
    }

    order.status = "canceled";
    await order.save();

    res.status(200).json({ message: "Order successfully canceled!", order });
  } catch (error) {
    res.status(500).json({ error: "Server error while canceling the order" });
  }
});

// Admin - update orders
router.put("/update-status/:orderId", authenticate, async (req, res) => {
  const { status } = req.body;
});

export default router;
