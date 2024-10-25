import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "canceled"],
    default: "pending",
  },
});

export default mongoose.model("Order", orderSchema);
